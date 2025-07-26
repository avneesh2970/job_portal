const mongoose = require('mongoose');
const JobPostSchema = mongoose.Schema({
    jobTitle: String,
    employmentType: [String],
    sallery: Number,
    categories: [String],
    requiredSkills: [String],
    jobDescription: String,
    responsibilities: String,
    skillsAndExperience: String,
    companyLogo: String, // URL of uploaded logo
    companyName: String,
    websiteUrl: String,
    location: String,
    employeeStrength: String,
    industry: String,
    day: Number,
    month: Number,
    year: Number,
    technology: String,
    aboutCompany: String,
    
    // ✅ External application URL
    externalApplyUrl: String,
    
    // ✅ Student applications tracking
    studentApplied: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    
    // ✅ NEW: Job close date functionality
    closeDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value > new Date();
            },
            message: 'Close date must be in the future'
        }
    },
    
    // ✅ NEW: Job status (automatically managed)
    status: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
    },
    
    // ✅ NEW: Track when job was closed (automatic)
    closedAt: {
        type: Date,
        default: null
    },
    
    // ✅ NEW: Prevent deletion after close date
    isDeletable: {
        type: Boolean,
        default: true
    },
    
    // Owner id
    postedBy: String
}, { 
    timestamps: true 
});

// ✅ PRE-SAVE MIDDLEWARE: Auto-update status based on close date
JobPostSchema.pre('save', function(next) {
    const now = new Date();
    
    // If close date has passed, automatically close the job
    if (this.closeDate && this.closeDate <= now) {
        this.status = 'closed';
        this.isDeletable = false;
        
        // Set closedAt if not already set
        if (!this.closedAt) {
            this.closedAt = now;
        }
    }
    
    next();
});

// ✅ PRE-FIND MIDDLEWARE: Auto-close expired jobs before any find operation
JobPostSchema.pre(['find', 'findOne', 'findOneAndUpdate', 'findOneAndDelete'], async function() {
    try {
        const now = new Date();
        
        // Auto-close expired jobs before executing the query
        await this.model.updateMany(
            { 
                closeDate: { $lte: now },
                status: 'open'
            },
            { 
                status: 'closed',
                closedAt: now,
                isDeletable: false
            }
        );
    } catch (error) {
        console.error('Error auto-closing expired jobs:', error);
    }
});

// ✅ POST-FIND MIDDLEWARE: Additional check for any remaining expired jobs in results
JobPostSchema.post(['find', 'findOne'], async function(docs) {
    if (!docs) return;
    
    const docsArray = Array.isArray(docs) ? docs : [docs];
    const now = new Date();
    let hasExpiredJobs = false;
    
    // Check if any returned documents are expired but still marked as open
    for (let doc of docsArray) {
        if (doc && doc.closeDate <= now && doc.status === 'open') {
            hasExpiredJobs = true;
            break;
        }
    }
    
    // If we found expired jobs, update them
    if (hasExpiredJobs) {
        try {
            await this.model.updateMany(
                { 
                    closeDate: { $lte: now },
                    status: 'open'
                },
                { 
                    status: 'closed',
                    closedAt: now,
                    isDeletable: false
                }
            );
        } catch (error) {
            console.error('Error in post-find middleware:', error);
        }
    }
});

// ✅ VIRTUAL: Check if job is expired (read-only)
JobPostSchema.virtual('isExpired').get(function() {
    return this.closeDate && this.closeDate <= new Date();
});

// ✅ VIRTUAL: Days remaining until close
JobPostSchema.virtual('daysRemaining').get(function() {
    if (!this.closeDate) return null;
    
    const now = new Date();
    const timeDiff = this.closeDate.getTime() - now.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    return daysRemaining > 0 ? daysRemaining : 0;
});

// ✅ STATIC METHOD: Find all open jobs (with auto-expiry check)
JobPostSchema.statics.findOpenJobs = async function() {
    // First close any expired jobs
    await this.closeExpiredJobs();
    
    return this.find({ 
        status: 'open',
        closeDate: { $gt: new Date() }
    });
};

// ✅ STATIC METHOD: Find jobs closing soon (within specified days)
JobPostSchema.statics.findJobsClosingSoon = async function(days = 7) {
    // First close any expired jobs
    await this.closeExpiredJobs();
    
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);
    
    return this.find({
        status: 'open',
        closeDate: { 
            $gt: new Date(),
            $lte: futureDate 
        }
    });
};

// ✅ STATIC METHOD: Auto-close expired jobs (run this in a cron job)
JobPostSchema.statics.closeExpiredJobs = async function() {
    const now = new Date();
    
    const result = await this.updateMany(
        { 
            closeDate: { $lte: now },
            status: 'open'
        },
        { 
            status: 'closed',
            closedAt: now,
            isDeletable: false
        }
    );
    
    return result;
};

// ✅ STATIC METHOD: Get all jobs with automatic expiry handling
JobPostSchema.statics.findAllJobs = async function(filter = {}) {
    // First close any expired jobs
    await this.closeExpiredJobs();
    
    // Then return the requested jobs
    return this.find(filter);
};

// ✅ STATIC METHOD: Get job by ID with expiry check
JobPostSchema.statics.findByIdWithExpiryCheck = async function(id) {
    // First close any expired jobs
    await this.closeExpiredJobs();
    
    // Then find the specific job
    return this.findById(id);
};

// ✅ INSTANCE METHOD: Check if job can be deleted
JobPostSchema.methods.canDelete = function() {
    return this.isDeletable && this.status === 'open';
};

// ✅ INSTANCE METHOD: Extend close date (only if still open)
JobPostSchema.methods.extendCloseDate = function(newCloseDate) {
    if (this.status === 'closed') {
        throw new Error('Cannot extend close date for closed jobs');
    }
    
    if (newCloseDate <= new Date()) {
        throw new Error('New close date must be in the future');
    }
    
    this.closeDate = newCloseDate;
    this.isDeletable = true; // Re-enable deletion if extending
    return this.save();
};

// ✅ INSTANCE METHOD: Manually close job early
JobPostSchema.methods.closeJob = function() {
    if (this.status === 'closed') {
        throw new Error('Job is already closed');
    }
    
    this.status = 'closed';
    this.closedAt = new Date();
    this.isDeletable = false;
    return this.save();
};

// ✅ INSTANCE METHOD: Refresh job status (check if expired)
JobPostSchema.methods.refreshStatus = async function() {
    const now = new Date();
    
    if (this.closeDate <= now && this.status === 'open') {
        this.status = 'closed';
        this.closedAt = now;
        this.isDeletable = false;
        await this.save();
    }
    
    return this;
};

// ✅ INDEX: Improve query performance
JobPostSchema.index({ status: 1, closeDate: 1 });
JobPostSchema.index({ postedBy: 1, status: 1 });
JobPostSchema.index({ closeDate: 1 }); // Additional index for expiry checks

module.exports = mongoose.model('JobPost', JobPostSchema);