import User from "../../models/userModel.mjs";
import notificationService from "../notificationService/notificationService.mjs";

const generateTargetUserObject = (user) => {
  const {
    _id,
    username,
    fullName,
    userVerified,
    profilePicture,
  
    gender,
    birthday,
    pendingFollowers,
    followers,
    following,
    accountType,
    friends,

  } = user;

  return {
    _id,
    username,
    fullName,
    userVerified,
    profilePicture,

    gender,
    birthday,
    pendingFollowers,
    followers,
    following,
    accountType,
    friends,

  };
};


const followService = {
  sendFollowRequest: async (senderId, receiverId) => {
    try {
      const [sender, receiver] = await Promise.all([
        User.findById(senderId),
        User.findById(receiverId),
      ]);

      if (!sender || !receiver) {
        throw new Error("User not found");
      }
      if (
        sender.following.includes(receiverId) ||
        receiver.pendingFollowers.includes(senderId)
      ) {
        return { statusCode: 400, error: "Already following this user" };
      }

      if (
        receiver.accountType !== "public" &&
        receiver.accountType !== "business"
      ) {
        receiver.pendingFollowers.push(senderId);
        notificationService.createNotification(
          "FOLLOW_SENT",
          `${sender.username} sent you a follow request.`,
          receiverId,
          senderId
        );
        await receiver.save();
        const targetUser = generateTargetUserObject(receiver);
        return { statusCode: 200, success: true, mes: "Requested", targetUser };
      } else {
        receiver.followers.push(senderId);
        sender.following.push(receiverId);
        await Promise.all([receiver.save(), sender.save()]);
        followService.makeFriends(receiverId, senderId);
        notificationService.createNotification(
          "FOLLOW_SENT",
          `${sender.username} is following you.`,
          receiverId,
          senderId
        );

        const targetUser = generateTargetUserObject(receiver);

        return { statusCode: 200, success: true, mes: "Following", targetUser };
      }
    } catch (error) {
      console.error("Error sending follow request:", error);
      return { statusCode: 500, error: "Internal Server Error" };
    }
  },

  acceptFollowRequest: async (userId, followerId) => {
    try {
      const [user, follower] = await Promise.all([
        User.findById(userId),
        User.findById(followerId),
      ]);

      if (!user || !follower) {
        throw new Error("User not found");
      }

      user.pendingFollowers = user.pendingFollowers.filter(
        (id) => id !== followerId
      );
      user.followers.push(followerId);
      follower.following.push(userId);

      await Promise.all([user.save(), follower.save()]);
      followService.makeFriends(userId, followerId);
      notificationService.createNotification(
        "FOLLOW_RECEIVED",
        `${follower.username} is following you.`,
        userId,
        followerId
      );
      notificationService.createNotification(
        "FOLLOW_SENT",
        `${user.username} accepted your follow request.`,
        followerId,
        userId
      );

      const userFollowData = {
        pendingFollowers: user.pendingFollowers,
        followers: user.followers,
        following: user.following,
        followersCount: user.followersCount,
        followingCount: user.followingCount,
        friends: user.friends,
      };
      return {
        statusCode: 200,
        success: true,
        mes: "Accepted",
        userFollowData,
      };
    } catch (error) {
      console.error("Error accepting follow request:", error);
      return { statusCode: 500, error: "Internal Server Error" };
    }
  },

  rejectFollowRequest: async (userId, followerId) => {
    try {
      const user = await User.findById(userId);

      if (!user) {
        throw new Error("User not found");
      }

      user.pendingFollowers = user.pendingFollowers.filter(
        (id) => id !== followerId
      );

      await user.save();

      const userFollowData = {
        pendingFollowers: user.pendingFollowers,
        followers: user.followers,
        following: user.following,
        followersCount: user.followersCount,
        followingCount: user.followingCount,
        friends: user.friends,
      };

      return {
        statusCode: 200,
        success: true,
        mes: "Rejected",
        userFollowData,
      };
    } catch (error) {
      console.error("Error rejecting follow request:", error);
      return { statusCode: 500, error: "Internal Server Error" };
    }
  },

  retractFollowRequest: async (senderId, receiverId) => {
    try {
      const receiver = await User.findById(receiverId);

      if (!receiver) {
        throw new Error("User not found");
      }

      receiver.pendingFollowers = receiver.pendingFollowers.filter(
        (id) => id.toString() !== senderId
      );

      await receiver.save();
      notificationService.deleteNotification(
        "FOLLOW_SENT",
        receiverId,
        senderId
      );

      const targetUser = generateTargetUserObject(receiver);
      return { statusCode: 200, success: true, mes: "Follow", targetUser };
    } catch (error) {
      console.error("Error retracting follow request:", error);
      return { statusCode: 500, error: "Internal Server Error" };
    }
  },

  unfollowUser: async (userId, targetUserId) => {
    try {
      const [user, targetUser] = await Promise.all([
        User.findById(userId),
        User.findById(targetUserId),
      ]);

      if (!user || !targetUser) {
        throw new Error("User not found");
      }

      user.following = user.following.filter(
        (id) => id.toString() !== targetUserId
      );
      targetUser.followers = targetUser.followers.filter(
        (id) => id.toString() !== userId
      );

      user.friends = user.friends.filter(
        (id) => id.toString() !== targetUserId
      );
      targetUser.friends = targetUser.friends.filter(
        (id) => id.toString() !== userId
      );

      await Promise.all([user.save(), targetUser.save()]);

      notificationService.deleteNotification(
        "FOLLOW_SENT",
        userId,
        targetUserId
      );

      notificationService.deleteNotification(
        "FOLLOW_RECEIVED",
        targetUserId,
        userId
      );

      const tUser = generateTargetUserObject(targetUser);

      return {
        statusCode: 200,
        success: true,
        mes: "Follow",
        targetUser: tUser,
      };
    } catch (error) {
      console.error("Error unfollowing user:", error);
      return { statusCode: 500, error: "Internal Server Error" };
    }
  },

  makeFriends: async (user1Id, user2Id) => {
    try {
      const [user1, user2] = await Promise.all([
        User.findById(user1Id),
        User.findById(user2Id),
      ]);

      if (!user1 || !user2) {
        throw new Error("User not found");
      }

      if (
        user1.followers.includes(user2Id) &&
        user2.followers.includes(user1Id)
      ) {
        user1.friends.push(user2Id);
        user2.friends.push(user1Id);

        await Promise.all([user1.save(), user2.save()]);
      }
    } catch (error) {
      console.error("Error making friends:", error);
    }
  },
};

export default followService;
