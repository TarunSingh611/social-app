import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    type: { type: String, trim: true },
    to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content : { type: String, trim: true },
    read: { type: Boolean, default: false },
})

const notificationModel = mongoose.model("notification", notificationSchema);

export default notificationModel;