import { User } from "../../models/userModel.mjs";
import HashTag  from "../../models/hashTagModel.mjs";
async function exploreSearch(data, type) {
   
    if (!data) {
      return { statusCode: 400 };
    }
    let dataArray = data.split(" ").map(item => item.trim());

  if (type == "username") {
    const result = await getUserName(dataArray[0]);
    return { type, statusCode: 200, result };
  } else if (type == "hashtag") {
    const result = await getPostsByHashtags(dataArray, type);
    return { type, statusCode: 200, result };
  } else if (type == "name") {
    const result = await getFullName(dataArray);
    return { type, statusCode: 200, result };
  } else {
    return { statusCode: 400 };
  }
}

export default exploreSearch;

  /////////////////////////////////////////////////////////////////////////////////////
async function getUserName(text) {
    try {
      const isEmail = text.includes("@");
      const regex = new RegExp(`^${text}$`, "i");
      const users = await User.find({ 
        [isEmail ? "email" : "username"]: regex,
      })
        .populate("followers following friends")
        .exec();
  
      if (!users) {
        return [];
      }
  
      return users;
    } catch (error) {
      throw new Error(`Error in getUserName: ${error.message}`);
    }
  }
    /////////////////////////////////////////////////////////////////////////////////////
  async function getFullName(text) {
    try {
      const [firstName, middleName, lastName] = text;
      const filters = [
        firstName && { fullName: { $regex: new RegExp(`${firstName}`, "i") } },
        middleName && { fullName: { $regex: new RegExp(`${middleName}`, "i") } },
        lastName && { fullName: { $regex: new RegExp(`${lastName}`, "i") } },
      ].filter(Boolean);
      const users = await User.find({ $or: filters })
      .exec();

      if (!users) {
        return [];
      }
  
      return users;
    } catch (error) {
      throw new Error(`Error in getFullName: ${error.message}`);
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////
  async function getPostsByHashtags(words) {
    try {
      if (!words || words.length === 0) {
        throw new Error("No words found in the input text");
      }
  
      const hashtags = await HashTag.find({
        name: { $in: words.map((word) => new RegExp(`^${word}$`, "i")) },
      })
        .populate({
          path: "posts",
          match: {
            isPublic: true,
          },
          populate: {
            path: "user",
            match: {
              accountType: { $in: ["public", "business"] },
            },
          },
        })
        .exec();
  
      if (!hashtags || hashtags.length === 0) {
        return [];
      }
  
      const posts = hashtags.flatMap((hashtag) => hashtag.posts);
  
      const filteredPosts = posts.filter((post) => post.user && post.hashTags.length > 0);
  
      filteredPosts.sort((a, b) => {
        const priorityComparison = b.hashTags.length - a.hashTags.length;
        return priorityComparison !== 0 ? priorityComparison : b.createdDate - a.createdDate;
      });
  
      return filteredPosts || [];
    } catch (error) {
      throw new Error(`Error in getPostsByHashtags: ${error.message}`);
    }
  }
  
  export { getUserName, getFullName, getPostsByHashtags };
    /////////////////////////////////////////////////////////////////////////////////////