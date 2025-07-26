const JobPost = require("../models/Jobpost");
const CompanyProfile = require("../models/CompanyProfile");
// ✅ Create Job Post
const createJobPost = async (req, res) => {
  try {
    const jobData = { ...req.body };

    if (req.file) {
      jobData.companyLogo = `/uploads/${req.file.filename}`;
    }
    console.log("job post: ", jobData);
    const newJob = new JobPost(jobData);
    await newJob.save();

    res
      .status(201)
      .json({ message: "Job post saved successfully", jobPost: newJob });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log({ error: error.message });
  }
};

// ✅ Get All Job Posts
const getAllJobPosts = async (req, res) => {
  try {
    const jobPosts = await JobPost.find().sort({ createdAt: -1 });
    res.status(200).json(jobPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get Job Post by ID
const getJobPostById = async (req, res) => {
  try {
    const jobPost = await JobPost.findById(req.params.id);
    if (!jobPost)
      return res.status(404).json({ message: "Job post not found" });

    res.status(200).json(jobPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update Job Post
const updateJobPost = async (req, res) => {
  try {
    let jobData = { ...req.body };

    if (req.file) {
      jobData.companyLogo = `/uploads/${req.file.filename}`;
    }

    const updatedJob = await JobPost.findByIdAndUpdate(req.params.id, jobData, {
      new: true,
    });
    if (!updatedJob)
      return res.status(404).json({ message: "Job post not found" });

    res
      .status(200)
      .json({ message: "Job post updated successfully", jobPost: updatedJob });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete Job Post
const deleteJobPost = async (req, res) => {
  try {
    const deletedJob = await JobPost.findByIdAndDelete(req.params.id);
    if (!deletedJob)
      return res.status(404).json({ message: "Job post not found" });

    res.status(200).json({ message: "Job post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const User = require('../models/User'); // adjust the path as needed

// GET user with populated applied jobs
const getUserWithAppliedJobs = async (req, res) => {
  try {
    const userId = req.params.user_id;

    // Fetch the user with populated jobs
    const user = await User.findById(userId)
      .populate({
        path: 'applied.job',
        model: 'JobPost',
        select: 'companyLogo jobTitle companyName location'
      })
      .lean(); // optional for better performance

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Filter out applied entries where job is null (e.g. deleted)
    if (Array.isArray(user.applied)) {
      user.applied = user.applied.filter(app => app.job);
    }

    return res.status(200).json({ success: true, user });
  } catch (err) {
    console.error("Error populating applied jobs:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};


const createCompanyProfile = async (req, res) => {
  try {
    const { email } = req.params;
    console.log('email', email);
    const companyProfileData = { ...req.body, owner_email: email };
    const newCompanyProfile = new CompanyProfile(companyProfileData);
    await newCompanyProfile.save();
    console.log('Company profile created:', newCompanyProfile);
    res.status(201).json({ message: "Company profile created successfully", companyProfile: newCompanyProfile });
  } catch (error) {
     console.log('Error creating company profile:', error);
    res.status(500).json({ error: error.message });
   
  }
};

getCompanyProfile = async (req, res) => {
  try {
    const { email } = req.params;
    const companyProfile = await CompanyProfile.findOne({ owner_email: email });
    if (!companyProfile) {
      return res.status(404).json({ message: "Company profile not found" });
    }

    res.status(200).json({ message: "Company profile retrieved successfully", companyProfile });
  } catch (error) {
    console.log('Error retrieving company profile:', error);
    res.status(500).json({ error: error.message });
  }
};

const updateCompanyProfile = async (req, res) => {
  try {
    const { email } = req.params;
    let companyProfileData = { ...req.body };

    if (req.file) {
      companyProfileData.companyLogo = `/uploads/${req.file.filename}`;
    }

    const updatedCompanyProfile = await CompanyProfile.findOneAndUpdate(
      { owner_email: email },
      companyProfileData,
      { new: true }
    );

    if (!updatedCompanyProfile) {
      return res.status(404).json({ message: "Company profile not found" });
    }

    res.status(200).json({ message: "Company profile updated successfully", companyProfile: updatedCompanyProfile });
  } catch (error) {
    console.log('Error updating company profile:', error);
    res.status(500).json({ error: error.message });
  }
}



module.exports = {
  createJobPost,
  getAllJobPosts,
  getJobPostById,
  updateJobPost,
  deleteJobPost,
  getUserWithAppliedJobs,
  createCompanyProfile,
  getCompanyProfile,
  updateCompanyProfile,
  getCompanyProfile
  
};
