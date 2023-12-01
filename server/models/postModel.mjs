import mongoose from "mongoose";

const postSchema = new mongoose.Schema({

    content: { type: String, trim: true },
    image: { type: String, trim: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    hashTags: [{ type: mongoose.Schema.Types.ObjectId, ref: "HashTag" }],
    caption: { type: String, trim: true },
    location: { type: String, trim: true },
    
})