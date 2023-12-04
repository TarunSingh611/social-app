import { User } from "../../models/userModel.mjs";
import { generateToken } from "../../utils/jwtUtils.mjs";
import { comparePassword } from "../../utils/passwordUtils.mjs";
import sendEmail from "../../utils/sendNodeMail.mjs";
import { generateVerificationToken } from "../misc/generateVerificationToken.mjs";

const loginUser = async (username, email, password) => {
  try {
    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (!user) {
      return { error: "Invalid username or email.", statusCode: 400 };
    }

    const isPasswordCorrect =  comparePassword(password, user.password);

    if (!isPasswordCorrect) {
      return { error: "Invalid password.", statusCode: 400 };
    }

    if (!user.emailVerified) {
      const verificationToken = await generateVerificationToken(user);
      console.log(verificationToken)
      sendEmail(user.email,verificationToken).then((success) => {
        console.log('Email sent:', success);
      }).
      catch((error) => {
        console.error('Error sending email:', error);
      })
      return { error: "Email not verified.", statusCode: 400 };
    }

    const token = generateToken(user);

    return {
      message: "User logged in successfully.",
      token,
    };
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Internal server error.", statusCode: 500 };
  }
};

export default loginUser;
