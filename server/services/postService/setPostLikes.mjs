import Like from "../../models/likeModels.mjs";
import Post from "../../models/postModel.mjs";

const getLikes = async (postId) => {
  try {
    const post = await Post.findById(postId).populate("likes");
    return { statusCode: 200, likes: post.likes };
  } catch (error) {
    console.error("Error getting likes:", error);
    throw error;
  }
};

const deleteLikes = async (postId, userId) => {
  try {
    await Like.findOneAndRemove({ postId, userId });
    await Post.findByIdAndUpdate(postId, { $pull: { likes: { userId } } });
    return { statusCode: 200 };
  } catch (error) {
    console.error("Error deleting like:", error);
    throw error;
  }
};

const putLikes = async (postId, userId) => {
  try {
    const like = new Like({ postId, userId });
    await like.save();
    await Post.findByIdAndUpdate(postId, { $push: { likes: like._id } });
    return { statusCode: 200 };
  } catch (error) {
    console.error("Error putting like:", error);
    throw error;
  }
};

export { getLikes, deleteLikes, putLikes };
