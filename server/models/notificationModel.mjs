import mongoose from "mongoose";

const contentDetailsSchema = new mongoose.Schema({
	content: { type: String, trim: true },
});

const notificationSchema = new mongoose.Schema({
	type: { type: String, trim: true },
	to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	contentDetails: contentDetailsSchema,
	read: { type: Boolean, default: false },
});

const NotificationModel = mongoose.model(
	"Notification",
	notificationSchema
);

export default NotificationModel;
