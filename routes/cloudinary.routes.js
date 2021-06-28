const express = require("express");
const router  = express.Router();
const uploader = require("../config/cloudinary.config.js");

router.post(
  "/upload", 
  uploader.single("image"), 
  (req, res) => {
    if (!req.file) {
      res.status(500).json({ error: "Please choose an image" });
      return;
    }
    res.status(200).json({ image: req.file.path });
  }
);

module.exports = router;