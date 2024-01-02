import { User } from "../../models/userModel.mjs";

async function getUserName(userId) {
  //return user data which another user may need to identify our user data which we could display over our users post like username , name ,profile picture nad birthday
  try {
    const user = await User.findById(userId);
    if (!user) {
      return { error: "User not found", statusCode: 404 };
    }
    const { username, fullName, profilePicture, birthday } = user;
    const data={
      username,
      fullName,
      profilePicture,
      birthday,
    };
    return { statusCode :200, user: data };
  } catch (error) {
    console.error("Error getting user name:", error);
    return { error: "Internal Server Error", statusCode: 500 };
  }
}

export default getUserName;
