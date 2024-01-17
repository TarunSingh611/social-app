import { userGetUserName } from "../../controllers/userController/userGetUserName.mjs";
import PostModel from "../../models/postModel.mjs";
import User from "../../models/userModel.mjs";
import LikeModel from "../../models/likeModels.mjs";


const getUserPostsByUserId = async (userId, tokenId, pno = 0, pageSize = 9) => {
  try {
    let flag = false;

    if (!flag) {
      flag = userId === tokenId;
     
      if (!flag) {
        const user = await User.findById(userId);
        
        if (user) {
          if (user.followers.includes(tokenId) || user.accountType === "business" || user.accountType === "public") {
            flag = true;
          } 
        }
      }
    }

    if (!flag) {
      return { statusCode: 201, post: null, mes: "Private Account, you need to follow to see posts" };
    }

    const posts = await PostModel.find({ user: userId })
      .sort({ createdDate: -1 })
      .skip(pno)
      .limit(pageSize)
      .populate('user', 'fullName username profilePicture accountType following followers friends pendingFollowers');


      for (const post of posts) {
        try {
          const like = await LikeModel.findOne({ contentId: post._id, userId: tokenId });
          post.liked = Boolean(like);

        } catch (error) {
          console.log("Error in like:getFeed", error);
        }
      }
      

    return { statusCode: 200, posts };
  } catch (error) {
    console.error("Error fetching user posts:", error);
    return { statusCode: 500, error: "Internal Server Error" };
  }
};

export default getUserPostsByUserId;
