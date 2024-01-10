import User from "../../models/userModel.mjs";

async function getUserName(userId) {
  
  try {
    const targetUser = await User.findById(userId);
    if (!targetUser) {
      return { error: "User not found", statusCode: 404 };
    }
   
    const user={

      _id: targetUser._id,
      username: targetUser.username,
      fullName: targetUser.fullName,
      userVerified: targetUser.userVerified,
      profilePicture: targetUser.profilePicture,

      gender: targetUser.gender,
      birthday: targetUser.birthday,

      pendingFollowers: targetUser.pendingFollowers,
      followers: targetUser.followers,
      following: targetUser.following,
      friends: targetUser.friends,

      accountType: targetUser.accountType,
     
    };
    return { statusCode :200, user};
  } catch (error) {
    console.error("Error getting user name:", error);
    return { error: "Internal Server Error", statusCode: 500 };
  }
}

export async function getUserProfile (userId){

  try {
    const targetUser = await User.findById(userId);
    if (!targetUser) {
      return { error: "User not found", statusCode: 404 };
    }
 
    const user={
      _id: targetUser._id,
      username: targetUser.username,
      fullName: targetUser.fullName,
      userVerified: targetUser.userVerified,
      profilePicture: targetUser.profilePicture,
      coverPhoto: targetUser.coverPhoto,

      bio: targetUser.bio,
      gender: targetUser.gender,
      birthday: targetUser.birthday,
      website : targetUser.website,

      pendingFollowers: targetUser.pendingFollowers,
      followers: targetUser.followers,
      following: targetUser.following,
      friends: targetUser.friends,

      accountType: targetUser.accountType,

      followersCount: targetUser.followersCount,
      followingCount: targetUser.followingCount,
      friendsCount:   targetUser.friendsCount,
      postsCount: targetUser.postsCount,
      pendingFollowersCount: targetUser.pendingFollowersCount,
    };
    return { statusCode :200, user};
  } catch (error) {
    console.error("Error getting user name:", error);
    return { error: "Internal Server Error", statusCode: 500 };
  }


}

export default getUserName;
