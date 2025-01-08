const multer = require("multer");

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary=require('../config/cloudinaryConfig');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "students", // Folder name in Cloudinary
      allowed_formats: ["jpg", "jpeg", "png"],
    },
  });
  const upload = multer({ storage });
  module.exports={upload}