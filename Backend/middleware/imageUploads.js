import fs from "fs";
import path from "path";
import multer from "multer";
import { fileURLToPath } from 'url';

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: path.join(__dirname, "uploads"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

const uploadImage = (req, res, next) => {
   console.log(req.body,'bodyy')
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    
    // Check if req.file exists
    if (!req.file) {
      console.log("No file uploaded");
      return next(); // Pass control to the next middleware or route handler
    }

    try {
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "Product-IMG",
      });
      req.body.image = result.secure_url;
      fs.unlink(req.file.path, (unlinkErr) => {
        if (unlinkErr) {
          console.log("Error deleting local file", unlinkErr);
        }
      });
      next();
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: "Error uploading file to Cloudinary",
      });
    }
  });
};

export default uploadImage;
