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

  // ✅ Always defined, but only used if userType === 'candidate'
  applied: [{ type: mongoose.Schema.Types.ObjectId, ref: "JobPost" }]
});


module.exports = mongoose.model('User', UserSchema);