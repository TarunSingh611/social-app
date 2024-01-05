import PostModel from "../../models/postModel.mjs";

const getUserPostsByUserId = async (userId, pno = 0, pageSize = 9) => {
  try {
  
    const posts = await PostModel.find({ user: userId })
    .sort({ createdDate: -1 })
    .skip(pno)
    .limit(pageSize);

    // const postsWithUserData = posts.map(post => {
    //   const userData = {
    //     id: post.user.id,
    //     fullName: post.user.fullName,
    //     username: post.user.username,
    //     profilePicture: post.user.profilePicture
    //   };

    // });

    return {statusCode: 200, posts: posts};
      } catch (error) {
    console.error("Error fetching user posts:", error);
    // throw error;
      }
    };

    export default getUserPostsByUserId;

