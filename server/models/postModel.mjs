import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  image: { type: String, trim: true , default: ""},
  likeCount: { type: Number, default: 0 },
  commentCount: { type: Number, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  hashTags: [{ type: mongoose.Schema.Types.ObjectId, ref: "HashTag" }],
  createdDate: { type: Date, default: Date.now },
  isPublic: { type: Boolean, default: true },
  caption: { type: String, trim: true, default: "" },
  location: { type: String, trim: true, default: "" },
  captionDetails: {
    caption: { type: String, trim: true, default: "" },
    location: { type: String, trim: true, default: "" },
  },
  isArchived: { type: Boolean, default: false },
});

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
