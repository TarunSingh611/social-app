import followService from "../../services/folowRequests/followRequests.mjs";

const followController = {
  sendFollowRequest: async (req, res) => {
    const {userId} = req.param;
    const self = req.session.user;
    const result = await followService.sendFollowRequest(self, userId);
    res.status(result.statusCode).json(result);
  },

  acceptFollowRequest: async (req, res) => {
    const {userId} = req.param;
    const self = req.session.user;
    const result = await followService.acceptFollowRequest(self, userId);
    res.status(result.statusCode).json(result);
  },

  rejectFollowRequest: async (req, res) => {
    const {userId} = req.param;
    const self = req.session.user;
    const result = await followService.rejectFollowRequest(self, userId);
    res.status(result.statusCode).json(result);
  },

  retractFollowRequest: async (req, res) => {
    const {userId} = req.param;
    const self = req.session.user;
    const result = await followService.retractFollowRequest(self, userId);
    res.status(result.statusCode).json(result);
  },

  unfollowUser: async (req, res) => {
    const {userId} = req.param;
    const self = req.session.user;
    const result = await followService.unfollowUser(self, userId);
    res.status(result.statusCode).json(result);
  },
};

export default followController;
