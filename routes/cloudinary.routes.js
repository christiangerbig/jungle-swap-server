const express = require("express");
const router  = express.Router();
const cloudinary = require("cloudinary").v2;
const multer  = require('multer')
const uploader = multer({ dest: 'uploads/' })

// Upload image
router.post(
  "/upload", 
  uploader.single("image"), 
  (req, res) => {
    if (!req.file) return res.status(500).json({error: "Please choose an image"});
    res.status(200).json(
      {
        imagePublicId: req.file.filename,
        image: req.file.path 
      }
    );
  }
);

// Delete image
router.post(
  "/destroy",
  (req, res) => {
    const {imagePublicId} = req.body;
    cloudinary.uploader.destroy(
      imagePublicId, 
      (result) => res.status(200).json(result)
    );
  }
);

module.exports = router;