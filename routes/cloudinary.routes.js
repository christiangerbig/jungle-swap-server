const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const uploader = require("../config/cloudinary.config.js");

// Upload image
router.post("/cloudinary/upload", uploader.single("image"), (req, res) => {
  if (!req.file) {
    res.status(500).json({ error: "Please choose an image" });
    return;
  }
  res.status(200).json({
    imagePublicId: req.file.filename,
    imageUrl: req.file.path,
  });
});

// Delete image
router.post("/cloudinary/destroy", (req, res) => {
  const { imagePublicId } = req.body;
  if (!imagePublicId) {
    res.status(400).json({ error: "No image selected" });
    return;
  }
  cloudinary.uploader.destroy(imagePublicId, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
});

module.exports = router;
