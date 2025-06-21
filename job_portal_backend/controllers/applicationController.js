// const Application = require('../models/Application');

// const applicationController = {
//   submitApplication: async (req, res) => {
//     try {
//       // Extract form data
//       const {
//         fullName,
//         email,
//         phone,
//         jobTitle,
//         linkedinUrl,
//         portfolioUrl,
//         additionalInfo
//       } = req.body;

//       // Create new application document
//       const application = new Application({
//         fullName,
//         email,
//         phone,
//         jobTitle,
//         linkedinUrl,
//         portfolioUrl,
//         additionalInfo,
//         resumePath: req.files.resume ? req.files.resume[0].path : null,
//         videoPath: req.files.videoIntroduction ? req.files.videoIntroduction[0].path : null
//       });

//       // Save to database
//       await application.save();

//       // Send success response
//       res.status(200).json({
//         success: true,
//         message: 'Application submitted successfully',
//         applicationId: application._id
//       });
//     } catch (error) {
//       console.error('Error submitting application:', error);
//       res.status(500).json({
//         success: false,
//         message: 'There was an error submitting your application'
//       });
//     }
//   },

//   getAllApplications: async (req, res) => {
//     try {
//       const applications = await Application.find().sort({ appliedAt: -1 });
//       res.status(200).json({
//         success: true,
//         applications
//       });
//     } catch (error) {
//       console.error('Error fetching applications:', error);
//       res.status(500).json({
//         success: false,
//         message: 'Error retrieving applications'
//       });
//     }
//   },

//   getApplicationById: async (req, res) => {
//     try {
//       const application = await Application.findById(req.params.id);
      
//       if (!application) {
//         return res.status(404).json({
//           success: false,
//           message: 'Application not found'
//         });
//       }
      
//       res.status(200).json({
//         success: true,
//         application
//       });
//     } catch (error) {
//       console.error('Error fetching application:', error);
//       res.status(500).json({
//         success: false,
//         message: 'Error retrieving application details'
//       });
//     }
//   }
// };

// module.exports = applicationController;









// const Application = require('../models/Application');
// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const crypto = require('crypto');

// const applicationController = {
//   submitApplication: async (req, res) => {
//     try {
//       // Extract form data
//       const {
//         fullName,
//         email,
//         phone,
//         jobTitle,
//         linkedinUrl,
//         portfolioUrl,
//         additionalInfo
//       } = req.body;

//       // Create new application document
//       const application = new Application({
//         fullName,
//         email,
//         phone,
//         jobTitle,
//         linkedinUrl,
//         portfolioUrl,
//         additionalInfo,
//         resumePath: req.files.resume ? req.files.resume[0].path : null,
//         videoPath: req.files.videoIntroduction ? req.files.videoIntroduction[0].path : null
//       });

//       // Save to database
//       await application.save();

//       // Send success response
//       res.status(200).json({
//         success: true,
//         message: 'Application submitted successfully',
//         applicationId: application._id
//       });
//     } catch (error) {
//       console.error('Error submitting application:', error);
//       res.status(500).json({
//         success: false,
//         message: 'There was an error submitting your application'
//       });
//     }
//   },

//   getAllApplications: async (req, res) => {
//     try {
//       const applications = await Application.find().sort({ appliedAt: -1 });
//       res.status(200).json({
//         success: true,
//         applications
//       });
//     } catch (error) {
//       console.error('Error fetching applications:', error);
//       res.status(500).json({
//         success: false,
//         message: 'Error retrieving applications'
//       });
//     }
//   },

//   getApplicationById: async (req, res) => {
//     try {
//       const application = await Application.findById(req.params.id);
      
//       if (!application) {
//         return res.status(404).json({
//           success: false,
//           message: 'Application not found'
//         });
//       }
      
//       res.status(200).json({
//         success: true,
//         application
//       });
//     } catch (error) {
//       console.error('Error fetching application:', error);
//       res.status(500).json({
//         success: false,
//         message: 'Error retrieving application details'
//       });
//     }
//   }
// };

// const userController = {
//   signup: async (req, res) => {
//     try {
//       const { email, password, userType } = req.body;
      
//       // Check if user already exists
//       const existingUser = await User.findOne({ email });
//       if (existingUser) {
//         return res.status(400).json({ message: 'User with this email already exists' });
//       }
      
//       // Hash the password
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
      
//       // Create new user
//       const newUser = new User({
//         email,
//         password: hashedPassword,
//         userType: userType || 'candidate', // Default to candidate if not specified
//         createdAt: new Date()
//       });
      
//       // Save the user
//       await newUser.save();
      
//       // Generate JWT token
//       const token = jwt.sign(
//         { userId: newUser._id, email: newUser.email, userType: newUser.userType },
//         process.env.JWT_SECRET,
//         { expiresIn: '7d' }
//       );
      
//       res.status(201).json({
//         message: 'User created successfully',
//         token,
//         user: {
//           id: newUser._id,
//           email: newUser.email,
//           userType: newUser.userType
//         }
//       });
//     } catch (error) {
//       console.error('Signup error:', error);
//       res.status(500).json({ message: 'Server error during signup' });
//     }
//   },
  
//   login: async (req, res) => {
//     try {
//       const { email, password } = req.body;
      
//       // Find user by email
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ message: 'Invalid credentials' });
//       }
      
//       // Check password
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(400).json({ message: 'Invalid credentials' });
//       }
      
//       // Update last login time
//       user.lastLogin = new Date();
//       await user.save();
      
//       // Generate JWT token
//       const token = jwt.sign(
//         { userId: user._id, email: user.email, userType: user.userType },
//         process.env.JWT_SECRET,
//         { expiresIn: '7d' }
//       );
      
//       res.json({
//         message: 'Login successful',
//         token,
//         user: {
//           id: user._id,
//           email: user.email,
//           userType: user.userType
//         }
//       });
//     } catch (error) {
//       console.error('Login error:', error);
//       res.status(500).json({ message: 'Server error during login' });
//     }
//   },
  
//   // Password reset request functionality
//   requestPasswordReset: async (req, res) => {
//     try {
//       const { email } = req.body;
      
//       // Find user by email
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(404).json({ message: 'User with this email does not exist' });
//       }
      
//       // Generate random reset token
//       const resetToken = crypto.randomBytes(20).toString('hex');
      
//       // Set token and expiry (1 hour from now)
//       user.resetPasswordToken = resetToken;
//       user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      
//       await user.save();
      
//       // Here you would typically send an email with the reset link
//       // For example: sendResetEmail(user.email, resetToken);
      
//       res.status(200).json({ 
//         message: 'Password reset link sent to your email',
//         // For development purposes only, remove in production
//         resetToken: resetToken 
//       });
//     } catch (error) {
//       console.error('Reset password request error:', error);
//       res.status(500).json({ message: 'Server error during password reset request' });
//     }
//   },
  
//   // Reset password with token
//   resetPassword: async (req, res) => {
//     try {
//       const { token, newPassword } = req.body;
      
//       // Find user with the given token and check if token is still valid
//       const user = await User.findOne({
//         resetPasswordToken: token,
//         resetPasswordExpires: { $gt: Date.now() }
//       });
      
//       if (!user) {
//         return res.status(400).json({ message: 'Password reset token is invalid or has expired' });
//       }
      
//       // Hash the new password
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(newPassword, salt);
      
//       // Update user's password and clear reset token fields
//       user.password = hashedPassword;
//       user.resetPasswordToken = undefined;
//       user.resetPasswordExpires = undefined;
      
//       await user.save();
      
//       res.status(200).json({ message: 'Password has been reset successfully' });
//     } catch (error) {
//       console.error('Reset password error:', error);
//       res.status(500).json({ message: 'Server error during password reset' });
//     }
//   },
  
//   // Middleware to verify JWT token
//   verifyToken: (req, res, next) => {
//     const token = req.header('x-auth-token');
    
//     if (!token) {
//       return res.status(401).json({ message: 'No token, authorization denied' });
//     }
    
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = decoded;
//       next();
//     } catch (err) {
//       res.status(401).json({ message: 'Token is not valid' });
//     }
//   },
  
//   getProfile: async (req, res) => {
//     try {
//       const user = await User.findById(req.user.userId).select('-password');
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
//       res.json(user);
//     } catch (error) {
//       console.error('Profile error:', error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }
// };

// module.exports = { applicationController, userController };



const Application = require('../models/Application');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const JobPost = require('../models/Jobpost');

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.mailtrap.io',
  port: process.env.EMAIL_PORT || 2525,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const applicationController = {
  submitApplication: async (req, res) => {
    try {
      // Extract form data
      const {
        fullName,
        email,
        phone,
        jobTitle,
        linkedinUrl,
        portfolioUrl,
        additionalInfo
      } = req.body;

      const userId = req.body.userId;
      const jobId = req.body.jobId;

      const user = await User.findById(userId);
      const job = await JobPost.findById(jobId);

      if (user && job) {
        // Update user's applied jobs
        if (!user.applied.includes(jobId)) {
          user.applied.push(jobId);
          await user.save();
        }

        // Update job's student applicants
        if (!job.studentApplied.includes(userId)) {
          job.studentApplied.push(userId);
          await job.save();
        }
      }


    

      // Create new application document
      const application = new Application({
        fullName,
        email,
        phone,
        jobTitle,
        linkedinUrl,
        portfolioUrl,
        additionalInfo,
        resumePath: req.files.resume ? req.files.resume[0].path : null,
        videoPath: req.files.videoIntroduction ? req.files.videoIntroduction[0].path : null
      });

      // Save to database
      await application.save();

      // Send success response
      res.status(200).json({
        success: true,
        message: 'Application submitted successfully',
        applicationId: application._id
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      res.status(500).json({
        success: false,
        message: 'There was an error submitting your application'
      });
    }
  },

  getAllApplications: async (req, res) => {
    try {
      const applications = await Application.find().sort({ appliedAt: -1 });
      res.status(200).json({
        success: true,
        applications
      });
    } catch (error) {
      console.error('Error fetching applications:', error);
      res.status(500).json({
        success: false,
        message: 'Error retrieving applications'
      });
    }
  },

  getApplicationById: async (req, res) => {
    try {
      const application = await Application.findById(req.params.id);
      
      if (!application) {
        return res.status(404).json({
          success: false,
          message: 'Application not found'
        });
      }
      
      res.status(200).json({
        success: true,
        application
      });
    } catch (error) {
      console.error('Error fetching application:', error);
      res.status(500).json({
        success: false,
        message: 'Error retrieving application details'
      });
    }
  }
};

const userController = {
  signup: async (req, res) => {
    try {
      const { email, password, userType } = req.body;
      
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }
      
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      // Create new user
      const newUser = new User({
        email,
        password: hashedPassword,
        userType: userType || 'candidate', // Default to candidate if not specified
        createdAt: new Date()
      });
      
      // Save the user
      await newUser.save();
      
      // Generate JWT token
      const token = jwt.sign(
        { userId: newUser._id, email: newUser.email, userType: newUser.userType },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );
      
      res.status(201).json({
        message: 'User created successfully',
        token,
        user: {
          id: newUser._id,
          email: newUser.email,
          userType: newUser.userType
        }
      });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ message: 'Server error during signup' });
    }
  },
  
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      
      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      
      // Update last login time
      user.lastLogin = new Date();
      await user.save();
      
      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email, userType: user.userType },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );
      
      res.json({
        message: 'Login successful',
        token,
        user: {
          id: user._id,
          email: user.email,
          userType: user.userType
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error during login' });
    }
  },
  
  // Password reset request functionality with email
  requestPasswordReset: async (req, res) => {
    try {
      const { email } = req.body;
      
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User with this email does not exist' });
      }
      
      // Generate random reset token
      const resetToken = crypto.randomBytes(20).toString('hex');
      
      // Set token and expiry (1 hour from now)
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      
      await user.save();
      
      // Create reset URL (frontend URL where user will reset password)
      const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/reset-password/${resetToken}`;
      
      // Email content
      const mailOptions = {
        from: process.env.EMAIL_FROM || 'noreply@yourapp.com',
        to: user.email,
        subject: 'Password Reset Request',
        html: `
          <h1>Password Reset</h1>
          <p>You requested a password reset for your account.</p>
          <p>Please click the link below to reset your password:</p>
          <a href="${resetUrl}" style="padding: 10px 15px; background-color: #5754F5; color: white; text-decoration: none; border-radius: 5px;">Reset Password</a>
          <p>If you didn't request this, please ignore this email and your password will remain unchanged.</p>
          <p>This link will expire in 1 hour.</p>
        `
      };
      
      // Send email
      await transporter.sendMail(mailOptions);
      
      res.status(200).json({ 
        success: true,
        message: 'Password reset link sent to your email'
      });
    } catch (error) {
      console.error('Reset password request error:', error);
      res.status(500).json({ 
        success: false,
        message: 'Server error during password reset request'
      });
    }
  },
  
  // Verify reset token
  verifyResetToken: async (req, res) => {
    try {
      const { token } = req.params;
      
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() }
      });
      
      if (!user) {
        return res.status(400).json({ 
          success: false,
          message: 'Password reset token is invalid or has expired' 
        });
      }
      
      res.status(200).json({ 
        success: true,
        message: 'Token is valid',
        email: user.email
      });
    } catch (error) {
      console.error('Verify token error:', error);
      res.status(500).json({ 
        success: false,
        message: 'Server error verifying reset token' 
      });
    }
  },
  
  // Reset password with token
  resetPassword: async (req, res) => {
    try {
      const { token, newPassword } = req.body;
      
      // Find user with the given token and check if token is still valid
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() }
      });
      
      if (!user) {
        return res.status(400).json({ 
          success: false,
          message: 'Password reset token is invalid or has expired' 
        });
      }
      
      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      
      // Update user's password and clear reset token fields
      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      
      await user.save();
      
      // Send confirmation email
      const mailOptions = {
        from: process.env.EMAIL_FROM || 'noreply@yourapp.com',
        to: user.email,
        subject: 'Password Reset Successful',
        html: `
          <h1>Password Reset Successful</h1>
          <p>Your password has been changed successfully.</p>
          <p>If you did not make this change, please contact our support team immediately.</p>
        `
      };
      
      await transporter.sendMail(mailOptions);
      
      res.status(200).json({ 
        success: true,
        message: 'Password has been reset successfully' 
      });
    } catch (error) {
      console.error('Reset password error:', error);
      res.status(500).json({ 
        success: false,
        message: 'Server error during password reset' 
      });
    }
  },
  
  // Middleware to verify JWT token
  verifyToken: (req, res, next) => {
    const token = req.header('x-auth-token');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
    
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Token is not valid' });
    }
  },

  //get all the user profile
    getAllUsers: async (req, res) => {
    try {
      const users = await User.find().select('-password');
      console.log('Fetched users:', users);
      res.status(200).json({
        success: true,
        users
      });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({
        success: false,
        message: 'Error retrieving users'
      });
    }},
  
  getProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user.userId).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Profile error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = { applicationController, userController };