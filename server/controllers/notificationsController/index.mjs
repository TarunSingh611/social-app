import notificationService from "../../services/notificationService/notificationService.mjs";

const notificationController = {
  createNotification: async (req, res) => {
    const { type, content, toUserId, fromUserId } = req.body;
    const result = await notificationService.createNotification(type, content, toUserId, fromUserId);
    res.status(result.success ? 200 : 500).json(result);
  },

  deleteNotification: async (req, res) => {
    const { type, userId, receiverId } = req.body;
    const result = await notificationService.deleteNotification(type, userId, receiverId);
    res.status(result.success ? 200 : 500).json(result);
  },

  deleteNotificationById: async (req, res) => {
    const { notificationId } = req.params;
    const result = await notificationService.deleteNotificationById(notificationId);
    res.status(result.success ? 200 : 500).json(result);
  },

  deleteAllNotifications: async (req, res) => {
    const { userId } = req.params;
    const result = await notificationService.deleteAllNotifications(userId);
    res.status(result.success ? 200 : 500).json(result);
  },

  markNotificationAsRead: async (req, res) => {
    const { notificationId } = req.params;
    const result = await notificationService.markNotificationAsRead(notificationId);
    res.status(result.success ? 200 : 500).json(result);
  },

  getUnreadNotifications: async (req, res) => {
    const { userId, pno } = req.params;
    const result = await notificationService.getUnreadNotifications(userId, pno);
    res.status(result.success ? 200 : 500).json(result);
  },

  getAllNotifications: async (req, res) => {
    const { userId, pno } = req.params;
    const result = await notificationService.getAllNotifications(userId, pno);
    res.status(result.success ? 200 : 500).json(result);
  },
};

export default notificationController;
