import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  contentType: { type: mongoose.Schema.Types.String },
  contentId: { type: mongoose.Schema.Types.String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Like = mongoose.model("Like", likeSchema);

export default Like;
