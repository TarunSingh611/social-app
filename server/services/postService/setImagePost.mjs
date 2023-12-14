import { User } from "../../models/userModel.mjs";
import  Post  from "../../models/postModel.mjs";
import  HashTags  from "../../models/hashTagModel.mjs";
import fs from "fs";
import path from "path";


const setPicture = async (userId,file,caption,HashTags) => {

    console.log("set::", userId, file, caption,HashTags);

    const user = await User.findById(userId);
    if (!user) {
      return { error: "User not found", statusCode: 404 };
    }
    
    const folder = "imagePost";
  
    if (!folder) {
      return { error: "Invalid type", statusCode: 400 };
    }

    const uniqueName = `${Date.now()}_${Math.floor(Math.random() * 1000)}${path.extname(picture.originalname)}`;
    const newPath = `public/${folder}/${uniqueName}`;
    fs.renameSync(picture.path, newPath);
    user[postsCount]++;
    


    return { message: "Post created successfully" ,statusCode: 200 };

}

export default setPicture ;