const multer = require('multer');
const path = require('path');

// Set up storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory where files will be uploaded
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

// Create Multer instance with storage configuration
const upload = multer({ storage: storage });

module.exports = upload;
