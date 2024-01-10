import PostModel from "../../models/postModel.mjs";

async function getExplore(user, page = 1, pageSize = 9) {
  try {
    const skipCount = (page - 1) * pageSize;

    const posts = await PostModel.find({
      $and: [
        { user: { $nin: [user._id, ...user.following] } },
        { isPublic: true },
      ],
    })
    .sort({ createdDate: -1 })
    .skip(skipCount)
    .limit(pageSize)
    .populate('user', 'fullName username profilePicture accountType following followers friends pendingFollowers');

    const filteredPosts = posts.filter(post => {
      return (post.user.accountType === 'public' || post.user.accountType === 'business');
    });
 
    return { success: true, posts: filteredPosts , statusCode: 200 };

  } catch (error) {
    console.error("Error getting Explore:", error);
    return { success: false, error: "Internal Server Error", statusCode: 500 };
  }
}

export default getExplore;
