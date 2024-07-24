const multer = require('multer');
const path = require('path');
const Image = require('../model/image.model');
const upload = require('../config/multer.config');

// Setup multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  //const upload = multer({ storage: storage });
  
  exports.uploadImages = (req, res) => {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(500).send(err.message);
      }
  
      try {
        const image = await Image.create({
          filename: req.file.filename,
          path: req.file.path
        });
        res.status(200).json({ message: 'Image uploaded successfully', image });
      } catch (error) {
        res.status(500).send(error.message);
      }
    });
  };
  
// Fetch all images
exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.findAll();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Fetch image by ID
exports.getImageById = async (req, res) => {
  try {
    const id = req.params.id;
    const image = await Image.findByPk(id);
    if (image) {
      res.status(200).json(image);
    } else {
      res.status(404).send('Image not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete image by ID
exports.deleteImageById = async (req, res) => {
  try {
    const id = req.params.id;
    const image = await Image.findByPk(id);
    if (image) {
      await Image.destroy({ where: { id } });
      // Optionally, delete the file from the filesystem
      const fs = require('fs');
      fs.unlinkSync(image.path);
      res.status(200).json({ message: 'Image deleted successfully' });
    } else {
      res.status(404).send('Image not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
