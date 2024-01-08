import User from "../../models/userModel.mjs";

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

      if (!receiver.isPublicOrBusiness()) {
        receiver.pendingFollowers.push(senderId);
        await receiver.save();
      } else {
        receiver.followers.push(senderId);
        sender.following.push(receiverId);
        await Promise.all([receiver.save(), sender.save()]);
        followService.makeFriends(receiverId, senderId);
      }

      return { statusCode: 200, success: true };
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

      user.pendingFollowers = user.pendingFollowers.filter(id => id !== followerId);
      user.followers.push(followerId);
      follower.following.push(userId);

      await Promise.all([user.save(), follower.save()]);
      followService.makeFriends(userId, followerId);

      return { statusCode: 200, success: true };
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

      user.pendingFollowers = user.pendingFollowers.filter(id => id !== followerId);

      await user.save();
      
      return { statusCode: 200, success: true };
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

      receiver.pendingFollowers = receiver.pendingFollowers.filter(id => id.toString() !== senderId);

      await receiver.save();

      return { statusCode: 200, success: true };
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

      user.following = user.following.filter(id => id.toString() !== targetUserId);
      targetUser.followers = targetUser.followers.filter(id => id.toString() !== userId);

      user.friends = user.friends.filter(id => id.toString() !== targetUserId);
      targetUser.friends = targetUser.friends.filter(id => id.toString() !== userId);

      await Promise.all([user.save(), targetUser.save()]);

      return { statusCode: 200, success: true };
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

      if (user1.followers.includes(user2Id) && user2.followers.includes(user1Id)) {
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
