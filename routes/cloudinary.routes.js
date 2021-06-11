const express = require("express");
const router  = express.Router();
const uploader = require("../config/cloudinary.config.js");

router.post(
  "/upload", 
  uploader.single("image"), 
  (req, res, next) => {
    if (!req.file) {
      next(
        new Error("No file uploaded!")
      );
      return;
    }
    res.status(200).json(
      { 
        imageId: req.file.filename,
        image: req.file.path 
      }
    );
  }
);


router.post(
  "/destroy",
    (req, res, next) => {
    let imageId = req.body.imageId;
    uploader.destroy(imageId)
      .then(
        (response) => {
          res.status(200).json(response);
        }
      )
      .catch(
        (err) => {
          res.status(500).json(
            {
              error: "Delete image failed",
              message: err
            }
          );
        }
      );
  }
);

module.exports = router;