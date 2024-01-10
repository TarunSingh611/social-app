import { userGetUserName } from "../../controllers/userController/userGetUserName.mjs";
import PostModel from "../../models/postModel.mjs";
import User from "../../models/userModel.mjs";

const getUserPostsByUserId = async (userId,tokenId, pno = 0, pageSize = 9) => {

 let flag = false

 if(!flag){
  flag = userId===tokenId;
 }
if(!flag){
 const user = await User.findById(tokenId);
  if(!user){
    return { statusCode: 404, error: "User not found" };
  }
  if(user.followers.includes(tokenId)|| user.accountType === "business" || user.accountType === "public" ) {
    flag = true;
  }

}



  try {
    if (!flag) {
      return { statusCode: 201, post : null , mes:"Private Account you need to follow to see posts"  };
    }
    const posts = await PostModel.find({ user: userId })
      .sort({ createdDate: -1 })
      .skip(pno)
      .limit(pageSize)
      .populate('user', 'fullName username profilePicture accountType following followers friends pendingFollowers');


    return { statusCode: 200, posts };
  } catch (error) {
    console.error("Error fetching user posts:", error);
    // throw error; // Re-throw the error for better error handling
  }
};

export default getUserPostsByUserId;
