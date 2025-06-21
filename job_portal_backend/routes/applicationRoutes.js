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

// get all the users
router.get('/users', userController.getAllUsers);

// Password reset routes
router.post('/auth/forgot-password', userController.requestPasswordReset);
router.get('/auth/reset-password/:token', userController.verifyResetToken);
router.post('/auth/reset-password', userController.resetPassword);

module.exports = router;