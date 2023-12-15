import { User } from "../../models/userModel.mjs";
import PostModel from "../../models/postModel.mjs";
import HashTagModel from "../../models/hashTagModel.mjs";
import fs from "fs";
import path from "path";

const setPicture = async (userId, picture, hashTags, caption) => {
  hashTags = hashTags.split(",");
  const user = await User.findById(userId);
  if (!user) {
    return { error: "User not found", statusCode: 404 };
  }

  const folder = "imagePost";

  if (!folder) {
    return { error: "Invalid type", statusCode: 400 };
  }

  const uniqueName = `${Date.now()}_${Math.floor(
    Math.random() * 1000
  )}${path.extname(picture.originalname)}`;
  const newPath = `public/${folder}/${uniqueName}`;

  fs.renameSync(picture.path, newPath);

  user.postsCount++;
  await user.save();

  const newPost = new PostModel({
    image: uniqueName,
    user: userId,
    hashTags: [],
    caption: caption ? caption : "",
  });

  if (hashTags.length > 0) {
    for (const tagName of hashTags) {
	  let tagNameSanitized = tagName.trim();
	  if(!tagNameSanitized){
		continue;
	  }
      let hashtag = await HashTagModel.findOne({ name: tagNameSanitized });

      if (!hashtag) {
        hashtag = new HashTagModel({
          name: tagNameSanitized,
          posts: [],
          users: [],
        });
      }

      hashtag.posts.push(newPost._id);
      hashtag.users.push(userId);

      await hashtag.save();

      newPost.hashTags.push(hashtag._id);
    }
  }

  await newPost.save();

  return { message: "Post created successfully", statusCode: 200 };
};

export default setPicture;
