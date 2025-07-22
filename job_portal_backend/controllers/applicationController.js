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
        firstname,
        lastname,
        email,
        phone,
        jobTitle,
        linkedinUrl,
        portfolioUrl,
        additionalInfo
      } = req.body;

      const userId = req.body.user;
      const jobId = req.body.job;

      const user = await User.findById(userId);
      const job = await JobPost.findById(jobId);

      if (user && job) {
        // Update user's applied jobs
        if (!user.applied.includes(jobId)) {
          user.applied.push({
          job: jobId,
          status: 'Submitted'
        });
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
        user: userId, // Reference to the user
        job: jobId, // Reference to the job
        firstname,
        lastname,
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
    const applications = await Application.find()
      .populate('job') // 👈 This populates the job reference
      .sort({ appliedAt: -1 });

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
      const application = await Application.findById(req.params.id)
       .populate('candidate', 'fullName email')    // Populate candidate details
      .populate('job', 'title company location'); // Populate job details
      
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
  },
  updateApplicationStatus: async (req, res) => {
  const { userId, jobId } = req.params;
  const { newStatus } = req.body;

  const validStatuses = ['Submitted', 'Under Review', 'Interview', 'Offered', 'Rejected'];

  if (!validStatuses.includes(newStatus)) {
    return res.status(400).json({ success: false, message: 'Invalid status' });
  }

  try {
    const user = await User.findById(userId);
    const app = user.applied.find(a => a.job.toString() === jobId);

    if (!app) {
      return res.status(404).json({ message: 'Application not found.' });
    }

    app.status = newStatus;
    await user.save();

    res.status(200).json({ message: 'Application status updated.', updated: app });
  } catch (err) {
    console.error('Status Update Error:', err);
    res.status(500).json({ message: 'Could not update status' });
  }
},


};

const userController = {
  signup: async (req, res) => {
    try {
      const { email, password, userType, firstname, lastname, phoneno } = req.body;
      
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
        createdAt: new Date(),
        firstname,
        lastname,
        phone:phoneno
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
   sendEmail: async (req, res) => {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    to: 'avneesh@novanectar.co.in',
    // avneesh@novanectar.co.in
    replyTo: email,
    subject: `NNHire Get in Touch Message from ${name}`,
 html: `
  <div style="font-family: 'Segoe UI', Tahoma, sans-serif; font-size: 16px; color: #2c3e50; line-height: 1.6; padding: 20px; background-color: #f4f7fb;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);">
      
      <h2 style="color: #3B47F2; margin-bottom: 20px; text-align: center;">📩 Contact Form Submission</h2>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #e0e6f1; background-color: #fafbff;">
        <tr style="border-bottom: 1px solid #e0e6f1;">
          <td style="padding: 12px; border-right: 1px solid #e0e6f1; font-weight: 600; color: #34495e;">Name:</td>
          <td style="padding: 12px; color: #2d3436;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e0e6f1;">
          <td style="padding: 12px; border-right: 1px solid #e0e6f1; font-weight: 600; color: #34495e;">Email:</td>
          <td style="padding: 12px; color: #2d3436;">${email}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e0e6f1;">
          <td style="padding: 12px; border-right: 1px solid #e0e6f1; font-weight: 600; color: #34495e;">Phone:</td>
          <td style="padding: 12px; color: #2d3436;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-right: 1px solid #e0e6f1; font-weight: 600; color: #34495e; vertical-align: top;">Message:</td>
          <td style="padding: 12px;">
            <div style="background-color: #eef2fb; padding: 15px; border-radius: 6px; white-space: pre-wrap; color: #2c3e50;">
              ${message}
            </div>
          </td>
        </tr>
      </table>

      <p style="margin-top: 25px; font-size: 13px; color: #95a5a6; text-align: center;">
        This email was automatically generated from the contact form on your website.
      </p>
    </div>
  </div>
`


  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully', mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
},

sendEmailAdmin: async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    to: 'avneesh@novanectar.co.in',
    replyTo: email,
    subject: `NNHire Get in Touch Message from ${name}`,
    html: `
  <div style="font-family: 'Segoe UI', Tahoma, sans-serif; font
-size: 16px; color: #2c3e50; line-height: 1.6; padding: 20px; background-color: #f4f7fb;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);">
      
      <h2 style="color: #3B47F2; margin-bottom: 20px; text-align: center;">📩 Contact Form Submission</h2>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #e0e6f1; background-color: #fafbff;">
        <tr style="border-bottom: 1px solid #e0e6f1;">
          <td style="padding: 12px; border-right: 1px solid #e0e6f1; font-weight: 600; color: #34495e;">Name:</td>
          <td style="padding: 12px; color: #2d3436;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e0e6f1;">
          <td style="padding: 12px; border-right: 1px solid #e0e6f1; font-weight: 600; color: #34495e;">Email:</td>
          <td style="padding: 12px; color: #2d3436;">${email}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e0e6f1;">
          <td style="padding: 12px; border-right: 1px solid #e0e6f1; font-weight: 600; color: #34495e;">Phone:</td>
          <td style="padding: 12px; color: #2d3436;">${subject}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-right: 1px solid #e0e6f1; font-weight: 600; color: #34495e; vertical-align: top;">Message:</td>
          <td style="padding: 12px;">
            <div style="background-color: #eef2fb; padding: 15px; border-radius: 6px; white-space: pre-wrap; color: #2c3e50;">
              ${message}
            </div>
          </td>
        </tr>
      </table>
      <p style="margin-top: 25px; font-size: 13px; color: #95a5a6; text-align: center;">
        This email was automatically generated from the contact form on your website.
      </p>
    </div>


  </div>
`
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log('Admin email sent successfully', mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Admin email error:', error);
    res.status(500).json({ error: 'Failed to send admin email' });
  }


},

  
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
  },

  getProfilebyId: async (req, res) => {
      const userId = req.params.id;
      console.log('User ID:', userId);
      try {
        const user = await  User.findById(userId).select('-password');
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      }catch(error) {
        console.error('Profile by ID error:', error);
        res.status(500).json({ message: 'Server error' });

      }
},

  // for updating the status of an application
 updateStatus: async (req, res) => {
  const { userId, jobId } = req.params;
  const { status } = req.body;
  console.log('status', status);
  console.log('userId', userId);
  console.log('jobId', jobId);

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const jobIndex = user.applied.findIndex(
      (app) => app.job.toString() === jobId
    );

    if (jobIndex === -1) return res.status(404).json({ message: 'Application not found for this user' });

    const newStatus = {
      value: status,
      updatedAt: new Date()
    };

    if (!user.applied[jobIndex].statusHistory) {
      user.applied[jobIndex].statusHistory = []; // initialize if not present
    }

    user.applied[jobIndex].statusHistory.push(newStatus);
    await user.save();

    res.status(200).json({ success: true, message: 'Status updated', newStatus });
  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({ message: 'Server error' });
  }
},

  getStatus: async (req, res) => {
  const { userId, jobId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const application = user.applied.find(
      (app) => app.job.toString() === jobId
    );

    if (!application) return res.status(404).json({ message: 'Application not found' });

    res.status(200).json({ status: application });
  } catch (error) {
    console.error('Error fetching status:', error);
    res.status(500).json({ message: 'Server error' });
  }
},




  // Toggle saved job (save if not exists, remove if already saved)
toggleSavedJob : async (req, res) => {
   const userId = req.params.userId;
  const jobId = req.params.jobId;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: 'User not found' });

  const alreadySaved = user.savedJobs.includes(jobId);

  if (alreadySaved) {
    // Remove from savedJobs
    user.savedJobs.pull(jobId);
  } else {
    // Add to savedJobs
    user.savedJobs.push(jobId);
  }

  await user.save();
  res.json({ saved: !alreadySaved });
},


  getSavedJobs: async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate('savedJobs');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.savedJobs);
  } catch (error) {
    console.error('Error fetching saved jobs:', error);
    res.status(500).json({ message: 'Server error' });
  }
},
removeSavedJob : async (req, res) => {
  const { userId, jobId } = req.params;

  try {
    await User.findByIdAndUpdate(userId, {
      $pull: { savedJobs: jobId }
    });

    res.status(200).json({ message: 'Job removed from saved list' });
  } catch (error) {
    console.error('Error removing saved job:', error);
    res.status(500).json({ message: 'Server error' });
  }
},
updateProfile : async (req, res) => {
  const userId = req.params.id;
  const {firstname,lastname,profile, phone,pinCode, state, addressLine1, addressLine2, city, country, dateOfBirth, email, gender, linkedProfile, portfolio} = req.body;
  console.log(firstname,lastname,profile, phone, pinCode, state, addressLine1, addressLine2, city, country, dateOfBirth, email  ,gender, linkedProfile, portfolio);
  try{
    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({ message: 'User not found' });
    }
     // ✅ Update fields manually
    user.firstname = firstname || user.firstname;
    user.lastname = lastname || user.lastname;
    user.lastname = lastname || user.lastname;
    user.profile = profile || user.profile;
    user.phone = phone || user.phone;
    user.address.country = country || user.address.country;
    user.address.state = state || user.address.state;
    user.address.city = city || user.address.city;
    user.address.pincode = pinCode || user.address.pincode;
    user.address.address1 = addressLine1 || user.address.address1;
    user.address.address2 = addressLine2 || user.address.address2;
    user.dateOfBirth = dateOfBirth || user.dateOfBirth;
    user.email = email || user.email;
    user.gender = gender || user.gender;
    user.linkedProfile = linkedProfile || user.linkedProfile;
    user.portfolio = portfolio || user.portfolio;

     if (req.file) {
      user.image = `/uploads/users/${req.file.filename}`;
    }

    await user.save(); // ✅ Save changes to DB

    res.status(200).json({ 
      success: true,
      message: 'Profile updated successfully',
      user
    });

    
  }catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error during profile update' 
    })};
},
updateResume : async (req, res) => {
  const userId = req.params.id;
  

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update resume path
    // user.resume = resume || user.resume;

   

     const parsedData = JSON.parse(req.body.data);
    user.education = parsedData.education || [];
    user.skills = parsedData.skills || [];
    user.workExperience = parsedData.workExperience || [];
     // Resume file handling
    if (req.files && req.files.resume && req.files.resume.length > 0) {
      user.resume = `/uploads/resumes/${req.files.resume[0].filename}`;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: 'Resume Section updated successfully',
      user
    });
  } catch (error) {
    console.error('Error updating resume:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during resume update'
    });
  }

}
};




module.exports = { applicationController, userController };