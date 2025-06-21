const express = require('express');
const { 
    createJobPost, 
    getAllJobPosts, 
    getJobPostById, 
    updateJobPost, 
    deleteJobPost,
    getUserWithAppliedJobs 
} = require('../controllers/jobController');
const upload = require('../middleware/upload');

const router = express.Router();

// Create a job post (with company logo upload)
router.post('/jobpost', upload.single('companyLogo'), createJobPost);

// Get all job posts
router.get('/jobpost', getAllJobPosts);

// Get a single job post by ID
router.get('/jobpost/:id', getJobPostById);

router.get('/user/:user_id/applied-jobs', getUserWithAppliedJobs);

// Update a job post by ID
router.put('/jobpost/:id', upload.single('companyLogo'), updateJobPost);

// Delete a job post by ID
router.delete('/jobpost/:id', deleteJobPost);

module.exports = router;
