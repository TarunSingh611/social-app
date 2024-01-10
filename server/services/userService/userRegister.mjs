import User from "../../models/userModel.mjs";
import { generateVerificationToken } from "../misc/generateVerificationToken.mjs";
import  sendEmail  from "../../utils/sendNodeMail.mjs";
const registerUser = async ({
  firstName,
  lastName,
  username,
  email,
  phone,
  password,
}) => {
  try {
    const existingUser = await User.findOne({
      $or: [{ username }, { email }, { phone }],
    });
    if (existingUser) {
      return { error: "User with the provided username, email, or phone already exists.", statusCode: 400 };
    }

    const newUser = new User({
      fullName: `${(firstName || '').trim()} ${(lastName || '').trim()}`,
      username,
      email : email.toLowerCase(),
      phone,
      password,
    });

    await newUser.save();

    const verificationToken = await generateVerificationToken(newUser._id);
    
    sendEmail(newUser.email, verificationToken).then((success) => {
      console.log('Email sent:', success);
    }).
    catch((error) => {
      console.error('Error sending email:', error);
    })



    return { message: "User registered successfully." , statusCode: 200 };
  } catch (error) {
    console.error("Error registering user:", error);
    return { error: "Internal Server Error", statusCode: 500 };
  }
};

export { registerUser };


