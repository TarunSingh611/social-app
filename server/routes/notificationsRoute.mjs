import express from "express";
import notificationController from "../controllers/notificationsController/index.mjs";
const router = express.Router();


router.get("/delete-notification-by-id/:notificationId", notificationController.deleteNotificationById);
router.get("/delete-all-notifications", notificationController.deleteAllNotifications);
router.get("/mark-notification-as-read/:notificationId", notificationController.markNotificationAsRead);
router.get("/get-unread-notifications", notificationController.getUnreadNotifications);
router.get("/get-all-notifications", notificationController.getAllNotifications);


export default router;
