import Comment from "../../models/commentModel.mjs";
import Post from "../../models/postModel.mjs";

const getPostComments = async (postId) => {
  try {
    const post = await Post.findById(postId).populate("comments");
    return { statusCode: 200, comments: post.comments };
  } catch (error) {
    console.error("Error getting post comments:", error);
    throw error;
  }
};

const postPostComments = async (postId, userId, data) => {
  try {
    const comment = new Comment({ postId, userId, data });

    await comment.save();

    await Post.findByIdAndUpdate(postId, { $push: { comments: comment._id } });

    return { statusCode: 200 };
  } catch (error) {
    console.error("Error posting comment:", error);
    throw error;
  }
};

const putPostComments = async ( userId, commentId) => {
  try {
    const comment = await Comment.findById(commentId);
    if (userId !== comment.userId) {
      return { statusCode: 403 };
    }
    await Comment.findByIdAndUpdate(commentId, { body });

    return { statusCode: 200 };
  } catch (error) {
    console.error("Error updating comment:", error);
    throw error;
  }
};

const deletePostComments = async (userId, postId, commentId) => {
  try {
    const comment = await Comment.findById(commentId);
    const post = await Post.findById(postId);
    if (userId === comment.userId || userId === post.user) {
      await Post.findByIdAndUpdate(postId, { $pull: { comments: commentId } });
      return { statusCode: 200 };
    }
    else{
      return { statusCode: 403 };
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw error;
  }
};

export {
  getPostComments,
  postPostComments,
  putPostComments,
  deletePostComments,
};
