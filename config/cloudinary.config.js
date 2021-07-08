const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config(
  {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET  
  }
);

const storage = new CloudinaryStorage(
  {
    cloudinary,
    folder: "bananarama", // Name of the folder in cloudinary
    allowedFormats: [
      "jpg", "png"
    ],
    // params: { resource_type: "raw" }, // Upload other type of files
    filename: (req, res, cb) => cb(null, res.originalname) // File on cloudinary will have same name as original file
  }
);

module.exports = multer({ storage });