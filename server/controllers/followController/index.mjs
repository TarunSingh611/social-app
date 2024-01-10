import followService from "../../services/folowRequests/followRequests.mjs";

const followController = {
  sendFollowRequest: async (req, res) => {
    const { senderId, receiverId } = req.params;
    const result = await followService.sendFollowRequest(senderId, receiverId);
    res.status(result.statusCode).json(result);
  },

  acceptFollowRequest: async (req, res) => {
    const { userId, followerId } = req.params;
    const result = await followService.acceptFollowRequest(userId, followerId);
    res.status(result.statusCode).json(result);
  },

  rejectFollowRequest: async (req, res) => {
    const { userId, followerId } = req.params;
    const result = await followService.rejectFollowRequest(userId, followerId);
    res.status(result.statusCode).json(result);
  },

  retractFollowRequest: async (req, res) => {
    const { senderId, receiverId } = req.params;
    const result = await followService.retractFollowRequest(senderId, receiverId);
    res.status(result.statusCode).json(result);
  },

  unfollowUser: async (req, res) => {
    const { userId, targetUserId } = req.params;
    const result = await followService.unfollowUser(userId, targetUserId);
    res.status(result.statusCode).json(result);
  },
};

export default followController;
