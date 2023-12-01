import mongoose from "mongoose";


const detailsSchema = new mongoose.Schema({
  description: { type: String, trim: true, default: "" },
  imageUrl: { type: String, trim: true, default: "" },
  pinnedMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  createdDate: { type: Date, default: Date.now },
});


const chatSchema = new mongoose.Schema({
  chatName: { type: String, trim: true, default: "" },
  isGroupChat: { type: Boolean, default: false },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
  groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  details: detailsSchema, 
});

const ChatModel = mongoose.model("Chat", chatSchema);

export default ChatModel;
