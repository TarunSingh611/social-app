import PostModel from "../../models/postModel.mjs";
import { User } from "../../models/userModel.mjs";

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
      .limit(pageSize);

    const userIds = posts.map(post => post.user);

    const users = await User.find({ _id: { $in: userIds } });

    const userMap = new Map(users.map(user => [user._id.toString(), user]));

    const formattedPosts = posts.map(post => ({
      ...post.toObject(),
      userData: {
        _id: userMap.get(post.user.toString())._id,
        fullName: userMap.get(post.user.toString()).fullName,
        username: userMap.get(post.user.toString()).username,
        profilePicture: userMap.get(post.user.toString()).profilePicture,
      },
    }));

    return { success: true, data: formattedPosts, statusCode: 200 };
  } catch (error) {
    console.error("Error getting feed:", error);
    return { success: false, error: "Internal Server Error", statusCode: 500 };
  }
}

export default getFeed;
