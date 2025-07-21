// const express = require('express');
// const router = express.Router();
// const { applicationController, userController } = require('../controllers/applicationController');
// const upload = require('../config/multerConfig');

// // Route for submitting a new application
// router.post(
//   '/submit-application', 
//   upload.fields([
//     { name: 'videoIntroduction', maxCount: 1 },
//     { name: 'resume', maxCount: 1 }
//   ]),
//   applicationController.submitApplication
// );

// router.get('/applications', applicationController.getAllApplications);
// router.get('/applications/:id', applicationController.getApplicationById);
// router.post('/auth/signup', userController.signup);
// router.post('/auth/login', userController.login);
// router.get('/profile', userController.verifyToken);

// module.exports = router;




const express = require('express');
const router = express.Router();
const { applicationController, userController } = require('../controllers/applicationController');
const upload = require('../config/multerConfig');
const uploads = require('../middleware/upload'); // Updated import for multer configuration
const authMiddleware = require('../middleware/authMiddleware')
// Route for submitting a new application
router.post(
  '/submit-application',
  // authMiddleware, // Add this to check if the user is logged in
  upload.fields([
    { name: 'videoIntroduction', maxCount: 1 },
    { name: 'resume', maxCount: 1 }
  ]),
  applicationController.submitApplication // Proceed to submit the application if authenticated
);



// Application routes
router.get('/applications', applicationController.getAllApplications);
router.get('/applications/:id', applicationController.getApplicationById);

// Authentication routes
router.post('/auth/signup', userController.signup);
router.post('/auth/login', userController.login);
router.get('/profile', userController.verifyToken, userController.getProfile);
router.get('/profile/:id', userController.getProfilebyId);
router.put('/profileUpdate/:id/upload-image', uploads.single('image'), userController.updateProfile);
router.post('/profileUpdate/:id', upload.fields([{ name: 'videoIntroduction', maxCount: 1 },{ name: 'resume', maxCount: 1 }]), userController.updateResume);


// get all the users
router.get('/users', userController.getAllUsers);

// send mail
router.post('/send-email', userController.sendEmail);

// Password reset routes
router.post('/auth/forgot-password', userController.requestPasswordReset);
router.get('/auth/reset-password/:token', userController.verifyResetToken);
router.post('/auth/reset-password', userController.resetPassword);


// for updating the status of an application
router.put('/users/:userId/applications/:jobId/status', userController.updateStatus)
router.get('/users/:userId/applications/:jobId/status', userController.getStatus);

//route for saved job
router.post('/users/:userId/saved-jobs/:jobId', userController.toggleSavedJob);
router.get('/users/:userId/saved-jobs', userController.getSavedJobs);
router.delete('/users/:userId/saved-jobs/:jobId', userController.removeSavedJob);


module.exports = router;