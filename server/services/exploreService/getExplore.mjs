import PostModel from "../../models/postModel.mjs";
import { User } from "../../models/userModel.mjs";

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
      .limit(pageSize);

    const userIds = posts.map(post => post.user);

    const users = await User.find({ _id: { $in: userIds } });

    const userMap = new Map(users.map(user => [user._id.toString(), user]));

    const finalFormattedPosts = posts
      .filter(post => {
        const postUser = userMap.get(post.user.toString());
        return postUser.accountType === 'public' || postUser.accountType === 'business';
      })
      .map(post => ({
        ...post.toObject(),
        userData: {
          _id: userMap.get(post.user.toString())._id,
          fullName: userMap.get(post.user.toString()).fullName,
          username: userMap.get(post.user.toString()).username,
          profilePicture: userMap.get(post.user.toString()).profilePicture,
          accountType: userMap.get(post.user.toString()).accountType,
        },
      }));

    return { success: true, data: finalFormattedPosts, statusCode: 200 };
  } catch (error) {
    console.error("Error getting Explore:", error);
    return { success: false, error: "Internal Server Error", statusCode: 500 };
  }
}

export default getExplore;
