import mongoose from "mongoose";

const hashTagSchema = new mongoose.Schema({

    name: { type: String, trim: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

})

const HashTagModel = mongoose.model("hashTag", hashTagSchema);

export default HashTagModel;