import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
	content: { type: String, trim: true },
	createdDate: { type: Date, default: Date.now },
	likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	replies: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment",
		},
	],
});

export default mongoose.model("Comment", commentSchema);
