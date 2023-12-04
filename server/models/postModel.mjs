import mongoose from "mongoose";

const basePostSchema = {
	content: { type: String, trim: true },
	image: { type: String, trim: true },
	likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	comments: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
	],
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	hashTags: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "HashTag" },
	],
};

const postOverviewSchema = new mongoose.Schema({
	...basePostSchema,
	createdDate: { type: Date, default: Date.now },
	isPublic: { type: Boolean, default: true },
});

const postDetailsSchema = new mongoose.Schema({
	...basePostSchema,
	caption: { type: String, trim: true, default: "" },
	location: { type: String, trim: true, default: "" },
});

const postFullSchema = new mongoose.Schema({
	...basePostSchema,
	captionDetails: {
		caption: { type: String, trim: true, default: "" },
		location: { type: String, trim: true, default: "" },
	},
	createdDate: { type: Date, default: Date.now },
	isPublic: { type: Boolean, default: true },
	isArchived: { type: Boolean, default: false },
});

const PostOverviewModel = mongoose.model(
	"PostOverview",
	postOverviewSchema
);
const PostDetailsModel = mongoose.model(
	"PostDetails",
	postDetailsSchema
);
const PostFullModel = mongoose.model("PostFull", postFullSchema);

export { PostOverviewModel, PostDetailsModel, PostFullModel };
