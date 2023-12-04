import mongoose from "mongoose";
import { hashPasswordMiddleware } from "../middleware/hashPasswordMiddleware.mjs";

// Base schema with common fields
const baseSchema = {
	firstName: { type: String, trim: true, required: true },
	lastName: { type: String, trim: true, required: true },
	username: {
		type: String,
		trim: true,
		unique: true,
		required: true,
		index: true,
	},
	userVerified: { type: Boolean, default: false },
	online: { type: Boolean, default: false },
	accountType: {
		type: String,
		trim: true,
		enum: ["user", "admin", "moderator"],
		default: "user",
	},
};

const userProfileConfigSchema = new mongoose.Schema({
	...baseSchema,

	emailVerified: { type: Boolean, default: false },
	phoneVerified: { type: Boolean, default: false },
	hide: { type: Boolean, default: false },
	hideEmail: { type: Boolean, default: false },
	hidePhone: { type: Boolean, default: false },
	hideGender: { type: Boolean, default: false },
	hideBirthday: { type: Boolean, default: false },
	hideCountry: { type: Boolean, default: false },
	hideCity: { type: Boolean, default: false },
	hideRelationship: { type: Boolean, default: false },
});

// Login schema
const loginSchema = new mongoose.Schema({
	email: {
		type: String,
		trim: true,
		unique: true,
		required: true,
		index: true,
		match: [/.+\@.+\..+/, "Please fill a valid email address"],
	},
	phone: {
		type: String,
		trim: true,
		match: [
			/^\+?[1-9]\d{1,14}$/,
			"Please fill a valid phone number",
		],
	},
	username: {
		type: String,
		trim: true,
		unique: true,
		required: true,
		index: true,
	},
	password: { type: String, trim: true, required: true },
});

loginSchema.pre("save", hashPasswordMiddleware);

// Profile view schema
const profileViewSchema = new mongoose.Schema(
	{
		...baseSchema,
		followersCount: { type: Number, default: 0 },
		followingCount: { type: Number, default: 0 },
		postsCount: { type: Number, default: 0 },
		friendsCount: { type: Number, default: 0 },
		likesCount: { type: Number, default: 0 },
		bio: { type: String, trim: true },
		website: { type: String, trim: true },
		description: { type: String, trim: true },
		birthday: { type: Date, trim: true },
		gender: { type: String, trim: true },
	},
	{ timestamps: true }
);

// Maintenance schema
const maintenanceSchema = new mongoose.Schema(
	{
		...baseSchema,
		recoveryEmail: { type: String, trim: true },
	},
	{ timestamps: true }
);

// Export models
export const LoginUser = mongoose.model("LoginUser", loginSchema);
export const ProfileViewUser = mongoose.model(
	"ProfileViewUser",
	profileViewSchema
);
export const MaintenanceUser = mongoose.model(
	"MaintenanceUser",
	maintenanceSchema
);

export const UserProfileConfig = mongoose.model(
	"UserProfileConfig",
	userProfileConfigSchema
);
