import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    body: { type: String, trim: true },
    createdDate: { type: Date, default: Date.now },
    likeCount: [{ type: mongoose.Schema.Types.String, default: 0 }],
    parentCommentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: null,
    },
});

const CommentModel = mongoose.model("Comment", commentSchema);

export default CommentModel;
