import mongoose from "mongoose";

const postDetailsSchema = new mongoose.Schema({
	post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

const chatDetailsSchema = new mongoose.Schema({
	chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
});

const inChatNotificationSchema = new mongoose.Schema({
	type: { type: String, trim: true },
	from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	postDetails: postDetailsSchema,
	chatDetails: chatDetailsSchema,
	roomDetails: roomDetailsSchema,
	read: { type: Boolean, default: false },
});

const InChatNotificationModel = mongoose.model(
	"InChatNotification",
	inChatNotificationSchema
);

export default InChatNotificationModel;
