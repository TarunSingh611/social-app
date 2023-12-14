import { User } from "../../models/userModel.mjs";
import fs from "fs";
import path from 'path';

const setPicture = async (userId, picture, type) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      return { error: "User not found", statusCode: 404 };
    }

    const folder = type === "profilePicture" ? "profilePictures" : (type === "coverPhoto" ? "coverPhotos" : "");
  
    if (!folder) {
      return { error: "Invalid type", statusCode: 400 };
    }
    const oldimage = user[type];

    const uniqueName = `${Date.now()}_${Math.floor(Math.random() * 1000)}${path.extname(picture.originalname)}`;
    const newPath = `public/${folder}/${uniqueName}`;

    fs.renameSync(picture.path, newPath);
    user[type] = uniqueName;
    await user.save();

    if (oldimage){
      const oldPath = `public/${folder}/${oldimage}`;
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    return { message: "Image stored and user updated successfully.",picture:uniqueName ,statusCode: 200 };

  } catch (error) {
    console.error(error);
    return { error: "Internal Server Error", statusCode: 500, detail: error.message };
  }
};

export default setPicture ;