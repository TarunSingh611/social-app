import User from "../models/userModel.mjs";
import Post from "../models/postModel.mjs";
import Comment from "../models/commentModel.mjs";
import HashTag from "../models/hashTagModel.mjs";
import Like from "../models/likeModels.mjs";
import mongoose from "mongoose";
import InChatNotification from "../models/inChatNotificationsModel.mjs";


export default function mongo(req, res) {
    res.send({"hello": "world"});
}

