import followService from "../../services/folowRequests/followRequests.mjs";
import { getUserByToken } from "../../utils/jwtUtils.mjs";

const followController = {
  sendFollowRequest: async (req, res) => {
    const { senderId, receiverId } = req.params;
    const result = await followService.sendFollowRequest(senderId, receiverId);
    res.status(result.statusCode).json(result);
  },

  acceptFollowRequest: async (req, res) => {
    const {followerId } = req.params;
    const token = req.header("jwttoken");
    const tokenData = await getUserByToken(token)
    const result = await followService.acceptFollowRequest(tokenData.userId, followerId);
    res.status(result.statusCode).json(result);
  },

  rejectFollowRequest: async (req, res) => {
    const {followerId } = req.params;
    const token = req.header("jwttoken");
    const tokenData = await getUserByToken(token)
    const result = await followService.rejectFollowRequest(tokenData.userId, followerId);
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
