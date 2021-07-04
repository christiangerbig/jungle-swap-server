const express = require("express");
const router  = express.Router();
const uploader = require("../config/cloudinary.config.js");

// Upload image
router.post(
  "/upload", 
  uploader.single("image"), 
  (req, res) => {
    if (!req.file) return res.status(500).json({ error: "Please choose an image" })
    res.status(200).json({ image: req.file.path });
  }
);

// Delete image
router.post(
  "/destroy",
  (req, res) => {
    try {
      const { publicId } = req.body;
      if (!publicId) return res.status(400).json({ error: "No image chosen" })
      uploader.destroy(
        publicId, 
        async(err, result) => {
          if(err) throw err;
          res.json({ msg: "Image deleted" });
        }
      );
    } 
    catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;