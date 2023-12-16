import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Like = mongoose.model("Like", likeSchema);

export default Like;
