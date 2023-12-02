// message.model.js
import mongoose from "mongoose";

const emojiReactionSchema = new mongoose.Schema({
	emoji: String,
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
});

const messageSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	content: {
		type: String,
		trim: true,
	},
	isReadBy: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
	emojiReactions: [emojiReactionSchema],
	createdDate: {
		type: Date,
		default: Date.now,
	},
});

const MessageModel = mongoose.model("Message", messageSchema);

export default MessageModel;
