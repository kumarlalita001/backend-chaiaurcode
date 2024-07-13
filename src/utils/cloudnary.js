import { v2 as cloudinary } from "cloudinary";
import { raw } from "express";
import fs, { unlinkSync } from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // upload to cloudinary
    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // console.log("file uploaded on cloudinary", uploadResult.url);

    unlinkSync(localFilePath);
    return uploadResult;
  } catch (err) {
    unlinkSync(localFilePath);
    // remove the locally uploaded file as upload is failed
    console.log("ERROR AT CLOUDINARY UPLOAD", err);

    return null;
  }
};

export { uploadOnCloudinary };
