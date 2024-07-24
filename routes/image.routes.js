const express = require('express');
const router = express.Router();
const imageController = require('../controller/image.controller');

// Upload images
router.post('/upload', imageController.uploadImages);

// Fetch all images
router.get('/uploads', imageController.getAllImages);

// Fetch image by ID
router.get('/:id', imageController.getImageById);

// Delete image by ID
router.delete('/:id', imageController.deleteImageById);

module.exports = router;
