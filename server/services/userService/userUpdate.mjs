// import necessary modules
import { User } from "../../models/userModel.mjs";
import { comparePassword } from "../../utils/passwordUtils.mjs";
// Function to update user information
const updateUser = async (userId, updates) => {
  try {
    const validUpdates = Object.keys(updates).reduce((acc, key) => {
      if (User.schema.obj[key] !== undefined) {
        acc[key] = updates[key];
      }
      return acc;
    }, {});

    if (Object.keys(validUpdates).length > 0) {
      const user = await User.findByIdAndUpdate(userId, validUpdates, { new: true });

      if (!user) {
        return { error: "User not found.", statusCode: 404 };
      }

      return { message: "User updated successfully.", statusCode: 200 };
    } else {
      return { message: "No valid updates provided.", statusCode: 400 };
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return { error: "Internal Server Error", statusCode: 500 };
  }
};

const updateUserSecurity = async (userId, updates) => {
    try {
      const { currentPassword, ...securityUpdates } = updates;
      const user = await User.findById(userId);
      if (!user) {
        return { error: "User not found.", statusCode: 404 };
      }
  
      const isPasswordValid = await comparePassword(currentPassword, user.password);
      if (!isPasswordValid) {
        return { error: "Current password is incorrect.", statusCode: 401 };
      }
  
      const validSecurityUpdates = Object.keys(securityUpdates).reduce((acc, key) => {
        if (User.schema.obj[key] !== undefined) {
          acc[key] = securityUpdates[key];
        }
        return acc;
      }, {});
  
      if (Object.keys(validSecurityUpdates).length > 0) {
        Object.assign(user, validSecurityUpdates);

        await user.save();
  
        return { message: "User security information updated successfully.", statusCode: 200 };
      } else {
        return { message: "No valid security updates provided.", statusCode: 400 };
      }
    } catch (error) {
      console.error("Error updating user security:", error);
      return { error: "Internal Server Error", statusCode: 500 };
    }
  };
  
  
export default updateUser;
export {updateUserSecurity};