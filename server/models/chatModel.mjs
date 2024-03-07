import mongoose from "mongoose";

const nicknameSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    nickname: {
        type: String,
        default: "",
    },
});

const roomDetailsSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    announcement: { type: String, default: "" },
    description: { type: String, default: "" },
    grandAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
    subAdmins: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

const wallpaperSchema = new mongoose.Schema({
    imageUrl: { type: String, default: "", },

    someOtherFeature: { type: String, default: "", },
});

const chatDetailsSchema = new mongoose.Schema({
    nickname: nicknameSchema,
    roomDetails: roomDetailsSchema,
    wallpaperDetails: wallpaperSchema,
});

const chatSchema = new mongoose.Schema({
    chatName: { type: String, trim: true, default: "", },
    isGroupChat: { type: Boolean, default: false, },
    users: [ { type: mongoose.Schema.Types.ObjectId, ref: "User", }, ],
    latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Message", },
    details: chatDetailsSchema,
});

const ChatModel = mongoose.model("Chat", chatSchema);

export default ChatModel;
