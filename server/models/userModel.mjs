import mongoose, { trusted } from "mongoose";
import hashPasswordMiddleware from "../middleware/hashPasswordMiddleware.mjs";

const verificationTokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  token: { type: String, required: true },
});


const userSchema = new mongoose.Schema(
  {
    // Essential Information
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, unique: true, required: true, index: true },
    username: { type: String, trim: true, unique: true, index: true ,default: function(){
      return this.email
    }},
    phone: { type: String, trim: true, default: "" },
    password: { type: String, trim: true, required: true },

    // Verification
    userVerified: { type: Boolean, default: false },
    emailVerified: { type: Boolean, default: false },
    phoneVerified: { type: Boolean, default: false },
    verificationCode: verificationTokenSchema,

    // Privacy Settings
    hide: { type: Boolean, default: false },
    hideEmail: { type: Boolean, default: true },
    hidePhone: { type: Boolean, default: true },
    hideGender: { type: Boolean, default: false },
    hideBirthday: { type: Boolean, default: false },
    hideCountry: { type: Boolean, default: false },
    hideCity: { type: Boolean, default: false },
    hideRelationship: { type: Boolean, default: false },

    // Counts
    followersCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
    postsCount: { type: Number, default: 0 },
    friendsCount: { type: Number, default: 0 },
    likesCount: { type: Number, default: 0 },

    // Additional Information
    bio: { type: String, trim: true, default: "" },
    website: { type: String, trim: true ,default: ""},
    description: { type: String, trim: true },
    birthday: { type: Date, default: "" },
    gender: { type: String, trim: true, default: "" },
    recoveryEmail: { type: String, trim: true ,default: ""},

    // Location
    location: {
      country: { type: String, trim: true, default: "" },
      city: { type: String, trim: true ,default: "" },
    },

    // Profile Media
    profilePicture: { type: String, trim: true ,default: ""},
    coverPhoto: { type: String, trim: true, default: "" },

    // Account
    accountType: {
      type: String,
      trim: true,
      enum: ["user", "admin", "moderator"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", hashPasswordMiddleware);

export const User = mongoose.model("User", userSchema);
