import mongoose from "mongoose";

const inChatNotificationSchema = new mongoose.Schema({

    type: { type: String, trim: true },
    from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
    read: { type: Boolean, default: false },
})

const inChatNotificationModel = mongoose.model("inChatNotification", inChatNotificationSchema);

export default inChatNotificationModel