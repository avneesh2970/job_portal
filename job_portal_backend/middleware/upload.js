const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Storage configuration with dynamic folder based on route
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = 'uploads/others'; // fallback

    // Check URL path to decide folder
    if (req.originalUrl.includes('/upload-image')) {
      folder = 'uploads/users';
    } else if (req.originalUrl.includes('/upload-resume')) {
      folder = 'uploads/';
    }

    // Create folder if not exists
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    cb(null, folder);
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// File filter for images and resumes
const fileFilter = (req, file, cb) => {
  const imageTypes = /jpeg|jpg|png|gif|svg/;
  const docTypes = /pdf|doc|docx/;
  const ext = path.extname(file.originalname).toLowerCase();
  const mime = file.mimetype;

  if (req.originalUrl.includes('/upload-image')) {
    if (imageTypes.test(ext) && imageTypes.test(mime)) {
      return cb(null, true);
    } else {
      return cb(new Error('Only image files (jpeg, png, gif, svg) are allowed for profile images.'));
    }
  }

  if (req.originalUrl.includes('/upload-resume')) {
    if (docTypes.test(ext) && mime.includes('application')) {
      return cb(null, true);
    } else {
      return cb(new Error('Only document files (pdf, doc, docx) are allowed for resumes.'));
    }
  }

  cb(new Error('Invalid upload route.'));
};

// Multer configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
  fileFilter: fileFilter,
});

module.exports = upload;
