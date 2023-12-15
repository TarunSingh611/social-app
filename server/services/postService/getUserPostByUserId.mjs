import PostModel from "../../models/postModel.mjs";

const getUserPostsByUserId = async (userId, pno) => {
  try {
    const postCountPerPage = 3;

    const posts = await PostModel.find({ user: userId })
      .sort({ createdDate: -1 }) 
      .skip(pno)
      .limit(pno === 0 ? 9 : postCountPerPage);

    return {statusCode: 200, posts};
  } catch (error) {
    console.error("Error fetching user posts:", error);
    throw error;
  }
};

export default getUserPostsByUserId;
