const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const uploader = require("../config/cloudinary.config.js");

// Upload image
router.post("/cloudinary/upload", uploader.single("image"), (req, res) => {
  const { file } = req;
  if (!file) {
    res.status(500).json({ error: "Form: Image missing" });
    return;
  }
  const { filename, path } = file;
  res.status(200).json({
    imagePublicId: filename,
    imageUrl: path,
  });
});

// Delete image
router.post("/cloudinary/destroy", (req, res) => {
  const {
    body: { imagePublicId },
  } = req;
  if (!imagePublicId) {
    res.status(400).json({ error: "Form: No image selected" });
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
