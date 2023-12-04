import mongoose from 'mongoose';
import  hashPasswordMiddleware  from '../middleware/hashPasswordMiddleware.mjs';


const verificationTokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 3600 },
});


const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    username: { type: String, trim: true, unique: true, required: true, index: true },
    email: { type: String, trim: true, unique: true, required: true, index: true },
    phone: { type: String, trim: true ,default: ''},
    password: { type: String, trim: true, required: true },
    userVerified: { type: Boolean, default: false },
    online: { type: Boolean, default: false },
    accountType: { type: String, trim: true, enum: ['user', 'admin', 'moderator'], default: 'user' },
    emailVerified: { type: Boolean, default: false },
    phoneVerified: { type: Boolean, default: false },
    verificationCode: verificationTokenSchema,
    hide: { type: Boolean, default: false },
    hideEmail: { type: Boolean, default: false },
    hidePhone: { type: Boolean, default: false },
    hideGender: { type: Boolean, default: false },
    hideBirthday: { type: Boolean, default: false },
    hideCountry: { type: Boolean, default: false },
    hideCity: { type: Boolean, default: false },
    hideRelationship: { type: Boolean, default: false },
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
    recoveryEmail: { type: String, trim: true },
  },
  { timestamps: true }
);

userSchema.pre('save', hashPasswordMiddleware);

export const User = mongoose.model('User', userSchema);
