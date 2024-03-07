import mongoose from "mongoose";

const postDetailsSchema = new mongoose.Schema({
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

const chatDetailsSchema = new mongoose.Schema({
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
});

const  roomDetailsSchema = new mongoose.Schema({
    name: String,
    roomId : String,
    users : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    isPrivate: Boolean,
    isPublic: Boolean,
    createdDate: { type: Date, default: Date.now },

})

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
