const JobPost = require("../models/Jobpost");

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
  }
};

// ✅ Get All Job Posts
const getAllJobPosts = async (req, res) => {
  try {
    const jobPosts = await JobPost.find();
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
    // const usere = await User.findById(userId)
    //   console.log('user', usere)

    const user = await User.findById(userId).populate({
      path: "applied",              // field in User schema
      model: "JobPost",             // must match the model name
      
    });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (err) {
    console.error("Error populating applied jobs:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


module.exports = {
  createJobPost,
  getAllJobPosts,
  getJobPostById,
  updateJobPost,
  deleteJobPost,
  getUserWithAppliedJobs
};
