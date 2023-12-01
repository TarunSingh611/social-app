import mongoose from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 4;

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
    match: [/^\+?[1-9]\d{1,14}$/, "Please fill a valid phone number"],
  },
  accountType: {
    type: String,
    trim: true,
    enum: ["user", "admin", "moderator"],
    default: "user",
  },
  birthday: { type: Date, trim: true },
  bio: { type: String, trim: true },
  website: { type: String, trim: true },
  gender: { type: String, trim: true },
  userVerified: { type: Boolean, default: false },
  emailVerified: { type: Boolean, default: false },
  phoneVerified: { type: Boolean, default: false },
  online: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  description: { type: String, trim: true },
  hide: { type: Boolean, default: false },
  hideEmail: { type: Boolean, default: false },
  hidePhone: { type: Boolean, default: false },
  hideGender: { type: Boolean, default: false },
  hideBirthday: { type: Boolean, default: false },
  hideCountry: { type: Boolean, default: false },
  hideCity: { type: Boolean, default: false },
  hideRelationship: { type: Boolean, default: false },
  hideFrom: { type: Boolean, default: false },
};

const loginSchema = new mongoose.Schema({
  emailOrUsername: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    index: true,
  },
  password: { type: String, trim: true, required: true },
});

loginSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

const profileViewSchema = new mongoose.Schema(
  {
    ...baseSchema,
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    bio: { type: String, trim: true },
    website: { type: String, trim: true },
    followersCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
    postsCount: { type: Number, default: 0 },
    friendsCount: { type: Number, default: 0 },
    likesCount: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    notificationsCount: { type: Number, default: 0 },
    chatsCount: { type: Number, default: 0 },
    roomsCount: { type: Number, default: 0 },
    hashTagsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const maintenanceSchema = new mongoose.Schema(
  {
    ...baseSchema,
    recoveryEmail: {
      type: String,
      trim: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
  },
  { timestamps: true }
);

export const LoginUser = mongoose.model("LoginUser", loginSchema);
export const ProfileViewUser = mongoose.model(
  "ProfileViewUser",
  profileViewSchema
);
export const MaintenanceUser = mongoose.model(
  "MaintenanceUser",
  maintenanceSchema
);
