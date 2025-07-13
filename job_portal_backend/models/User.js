const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['candidate', 'Recruiter', 'admin'], default: 'candidate' },
  isVerified: { type: Boolean, default: false },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  lastLogin: Date,
  createdAt: { type: Date, default: Date.now },
  image: { type: String },  //for image uplaod
  resume : String,

  // ✅ Personal Information
  name: { type: String, trim: true },
  profile: { type: String, trim: true }, // Profile name or title
  phone: { type: String },
  dateOfBirth: { type: Date },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },

   // ✅ Address Fields
  address: {
    country: { type: String },
    state: { type: String },
    city: { type: String },
    pincode: { type: String },
    address1: { type: String },
    address2: { type: String }
  },

  // ✅ Always defined, but only used if userType === 'candidate'
  applied: [
   {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "JobPost" },
    status: {
      type: String,
      enum: ['Submitted', 'Under Review', 'Interview', 'Offered', 'Rejected'],
      default: 'Submitted'
    },
    appliedAt: { type: Date, default: Date.now }
  }
    
  ],
  // ✅ Jobs the candidate has saved/bookmarked
  savedJobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobPost"
    }],
  skills: [String],
  education: [Object], // or [Schema.Types.Mixed]
  workExperience: [Object],
 
  });


module.exports = mongoose.model('User', UserSchema);