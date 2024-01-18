import CommentModel from "../../models/commentModel.mjs";

const getPostComments = async (postId, order, cno) => {
  try {
    const populateReplies = async (comment) => {
      const replies = await CommentModel.find({ parentCommentId: comment._id });
      comment.replies = await Promise.all(replies.map(populateReplies));
      return comment;
    };

    const sortOrder = order === -1 ? 'desc' : 'asc';

    const commentsWithReplies = await CommentModel.find({ post : postId })
      .sort({ createdDate: sortOrder })
      .skip(cno)
      .limit(10)
      .populate("user", "fullName username profilePicture accountType following followers friends pendingFollowers")
      .exec();

    const populatedComments = await Promise.all(
      commentsWithReplies.map(populateReplies)
    );
    return { statusCode: 200, comments: populatedComments };
  } catch (error) {
    console.error("Error getting post comments:", error);
    throw error;
  }
};

const postPostComments = async (postId, userId, data) => {
  try {
    const comment = new CommentModel({
      post: postId,
      user: userId,
      body: data,
    });

    await comment.save();
    const populatedComment = await CommentModel.findById(comment._id).populate("user", "fullName username profilePicture accountType following followers friends pendingFollowers");
    return { statusCode: 200, comment: populatedComment };
  } catch (error) {
    console.error("Error posting comment:", error);
  }
};

const putPostComments = async (userId, commentId, body) => {
  try {
    const comment = await CommentModel.findById(commentId);
    if (userId !== comment.userId) {
      return { statusCode: 403 };
    }

    await CommentModel.findByIdAndUpdate(commentId, { body });

    return { statusCode: 200 };
  } catch (error) {
    console.error("Error updating comment:", error);
    throw error;
  }
};

const deletePostComments = async (userId, postId, commentId) => {
  try {
    const deleteCommentAndReplies = async (commentId) => {
      const comment = await CommentModel.findById(commentId);
      if (!comment) {
        return; 
      }
      if (userId !== comment.userId && userId !== post.userId) {
        return; 
      }

      if (comment.postId !== postId) {
        return; 
      }
      await Promise.all(comment.replies.map((replyId) => deleteCommentAndReplies(replyId)));

      await CommentModel.findByIdAndDelete(commentId);
    };

    await deleteCommentAndReplies(commentId);

    return { statusCode: 200 };
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
