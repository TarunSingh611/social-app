import PostModel from "../../models/postModel.mjs";

async function getFeed(user, page = 1, pageSize = 9) {
  try {
    const skipCount = (page - 1) * pageSize;

    const posts = await PostModel.find({
      $or: [
        { user: user._id },
        { user: { $in:user.following } },
        { user: { $in:user.friends } }
      ]
    })
      .sort({ createdDate: -1 })
      .skip(skipCount)
      .limit(pageSize)
      .populate('user', 'fullName username profilePicture accountType following followers friends pendingFollowers');

    return { success: true, data: posts, statusCode: 200 };
  } catch (error) {
    console.error("Error getting feed:", error);
    return { success: false, error: "Internal Server Error", statusCode: 500 };
  }
}

export default getFeed;
