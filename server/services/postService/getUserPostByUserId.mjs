import PostModel from "../../models/postModel.mjs";

const getUserPostsByUserId = async (userId, pno = 0, pageSize = 9) => {
  try {
    const posts = await PostModel.find({ user: userId })
      .sort({ createdDate: -1 })
      .skip(pno)
      .limit(pageSize)
      .populate('user', 'fullName username profilePicture'); 


    return { statusCode: 200, posts };
  } catch (error) {
    console.error("Error fetching user posts:", error);
    // throw error; // Re-throw the error for better error handling
  }
};

export default getUserPostsByUserId;
