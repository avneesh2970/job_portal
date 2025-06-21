const mongoose = require('mongoose');

const JobPostSchema = new mongoose.Schema({
    jobTitle: String,
    employmentType: [String],
    sallery : Number,
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
    day : Number,
    month : Number,
    year : Number,
    technology: String,
    aboutCompany: String,

      // ✅ New field for tracking student applications
  studentApplied: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    //owner id
    postedBy:String
}, { timestamps: true });

module.exports = mongoose.model('JobPost', JobPostSchema);
