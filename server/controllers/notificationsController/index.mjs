import notificationService from "../../services/notificationService/notificationService.mjs";

const notificationController = {

    ////////////////////////////////////////////////////////////////
    createNotification: async (req, res) => {
        const { type, content, toUserId, fromUserId } = req.body;
        const result = await notificationService.createNotification(
            type,
            content,
            toUserId,
            fromUserId
        );
        res.status(result.statusCode).json(result);
    },

    deleteNotification: async (req, res) => {
        const { type, userId, receiverId } = req.body;
        const result = await notificationService.deleteNotification(
            type,
            userId,
            receiverId
        );
        res.status(statusCode).json(result);
    },
//////////////////////////////////////////////////////////////////////
    deleteNotificationById: async (req, res) => {
        const { notificationId } = req.param ;
        const result = await notificationService.deleteNotificationbyId(
            notificationId
        );
        res.status(statusCode).json(result);
    },

    deleteAllNotifications: async (req, res) => {
        const user = req.session.user;
        const result = await notificationService.deleteAllNotifications(user);
        res.status(statusCode).json(result);
    },

    markNotificationAsRead: async (req, res) => {
        const { notificationId } = req.param;
        const result = await notificationService.markNotificationAsRead(
            notificationId
        );
        res.status(statusCode).json(result);
    },

    getUnreadNotifications: async (req, res) => {
        const self = req.session.user
        const result = await notificationService.getUnreadNotifications(
            self,
            pno
        );
        res.status(statusCode).json(result);
    },

    getAllNotifications: async (req, res) => {
        const self = req.session.user;
        const { pno } = req.query;

        const result = await notificationService.getAllNotifications(
            self.userId,
            pno
        );
        res.status(statusCode).json(result);
    },
};

export default notificationController;
