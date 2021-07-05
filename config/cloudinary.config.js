const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  api_key: process.env.CLOUDINARY.split(' ')[0],
  api_secret: process.env.CLOUDINARY.split(' ')[1],
  cloud_name: process.env.CLOUDINARY.split(' ')[2],
 })

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