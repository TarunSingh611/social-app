import mongoose, { trusted } from "mongoose";
import hashPasswordMiddleware from "../middleware/hashPasswordMiddleware.mjs";

const verificationTokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  token: { type: String, trim: true },
});


const userSchema = new mongoose.Schema(
  {
    // Essential Information
    fullName: { type: String, trim: true, required: true },
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


    // Counts
    followersCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
    friendsCount: { type: Number, default: 0 },
    postsCount: { type: Number, default: 0 },

    // Additional Information
    bio: { type: String, trim: true, default: "" },
    website: { type: String, trim: true ,default: ""},
    birthday: { type: Date, default: "" },
    gender: { type: String, trim: true, default: "" },
    recoveryEmail: { type: String, trim: true ,default: ""},

    // Location
    location: {
      country: { type: String, trim: true, default: "" },
      city: { type: String, trim: true ,default: "" },
      privacy: {
        type: String,
        trim: true,
        enum: ["public", "private", "followers", "friends"],
        default: "public",
      }
    },

    // Profile Media
    profilePicture: { type: String, trim: true ,default: ""},
    coverPhoto: { type: String, trim: true, default: "" },

    //addFollowing and follwer array
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" ,default:[]}],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User",default:[]}],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User",default:[]}], 

    // Account
    accountType: {
      type: String,
      trim: true,
      enum: ["public", "private", "business" , "admin", "moderator"],
      default: "public",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", hashPasswordMiddleware);

export const User = mongoose.model("User", userSchema);
