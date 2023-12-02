import mongoose from "mongoose";

const privacySettingSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
			unique: true,
		},
		profileVisibility: {
			type: String,
			enum: ["public", "private", "friendsOnly"],
			default: "public",
			required: true,
		},
		postVisibility: {
			type: String,
			enum: ["public", "private", "friendsOnly"],
			default: "friendsOnly",
			required: true,
		},
		messageVisibility: {
			type: String,
			enum: ["public", "private", "friendsOnly"],
			default: "friendsOnly",
			required: true,
		},
		friendRequestPrivacy: {
			type: String,
			enum: ["everyone", "friendsOnly", "nobody"],
			default: "everyone",
			required: true,
		},
		taggable: {
			type: Boolean,
			default: true,
		},
		locationPrivacy: {
			type: String,
			enum: ["visible", "hidden"],
			default: "visible",
			required: true,
		},
		lastActivePrivacy: {
			type: String,
			enum: ["everyone", "friendsOnly", "nobody"],
			default: "everyone",
			required: true,
		},
		birthdayPrivacy: {
			type: String,
			enum: ["everyone", "friendsOnly", "hidden"],
			default: "everyone",
			required: true,
		},
		relationshipPrivacy: {
			type: String,
			enum: ["everyone", "friendsOnly", "hidden"],
			default: "everyone",
			required: true,
		},
		genderPrivacy: {
			type: String,
			enum: ["everyone", "friendsOnly", "hidden"],
			default: "everyone",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const PrivacySetting = mongoose.model(
	"PrivacySetting",
	privacySettingSchema
);

export default PrivacySetting;
