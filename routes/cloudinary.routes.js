const express = require("express");
const router  = express.Router();
const uploader = require("../config/cloudinary.config.js");

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
    try {
      const {public_id} = req.body;
      if (!public_id) return res.status(400).json({error: "No image chosen"});
      uploader.destroy(
        "g0nmildklkor3gjljnws",
        type = "authenticated" 
      );
    } 
    catch (err) {
      return res.status(500).json({error: err.message});
    }
  }
);

module.exports = router;