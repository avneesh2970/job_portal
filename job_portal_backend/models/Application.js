// const mongoose = require('mongoose');

// const applicationSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   jobTitle: { type: String, required: true },
//   linkedinUrl: String,
//   portfolioUrl: String,
//   additionalInfo: String,
//   resumePath: String,
//   videoPath: String,
//   appliedAt: { type: Date, default: Date.now }
// });

// const Application = mongoose.model('Application', applicationSchema);

// module.exports = Application;








const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  jobTitle: { type: String, required: true },
  linkedinUrl: String,
  portfolioUrl: String,
  additionalInfo: String,
  resumePath: String,
  videoPath: String,
  appliedAt: { type: Date, default: Date.now }
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;