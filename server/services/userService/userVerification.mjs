import  User  from "../../models/userModel.mjs";
import { clearVerificationToken } from "../misc/generateVerificationToken.mjs";

export const userVerification = async (token) => {
  try {
    const user = await User.findOne({ "verificationCode.token": token });

    if (!user) {
      return false;
    }

    user.emailVerified = true;
    await user.save();

    await clearVerificationToken(user._id);

    return true;
  } catch (error) {
    console.error("Error in userVerification:", error);
    return false;
  }
};

export default userVerification;
