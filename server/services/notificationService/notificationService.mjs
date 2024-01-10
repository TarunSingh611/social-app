import NotificationModel from "../../models/notificationModel.mjs";

const notificationService = {
  createNotification: async (type,  content ,toUserId,fromUserId=null) => {
    try {
      const notification = new NotificationModel({
        type,
        contentDetails: { content },
        to: toUserId,
        from: fromUserId
      });

      await notification.save();

      return { success: true, notification };
    } catch (error) {
      console.error("Error creating notification:", error);
      return { success: false, error: "Internal Server Error" };
    }
  },

deleteNotification: async (Type,userId,receiverId) => {
  try {
    const notifications = await NotificationModel.deleteMany({ Type,userId,receiverId });
    return { success: true };
  } catch (error) {
    console.error("Error deleting notifications:", error);
    return { success: false, error: "Internal Server Error" };
  }
    
},
  deleteNotificationbyId: async (notificationId) => {
    try {
      const notification = await NotificationModel.findByIdAndDelete(
        notificationId
      );
      if (!notification) {      
        // throw new Error("Notification not found");
        return { success: false, error: "Notification not found" };
      }
      return { success: true };
  }
  catch (error) {
    console.error("Error deleting notification:", error);
    return { success: false, error: "Internal Server Error" };
  }
  },

  deleteAllNotifications: async (userId) => {
    try {
      const notifications = await NotificationModel.deleteMany({ to: userId });
      return { success: true };
    } catch (error) {
      console.error("Error deleting notifications:", error);
      return { success: false, error: "Internal Server Error" };
    }
  },

  markNotificationAsRead: async (notificationId) => {
    try {
      const notification = await NotificationModel.findById(notificationId);

      if (!notification) {
        throw new Error("Notification not found");
      }

      notification.read = true;
      await notification.save();

      return { success: true };
    } catch (error) {
      console.error("Error marking notification as read:", error);
      return { success: false, error: "Internal Server Error" };
    }
  },

  getUnreadNotifications: async (userId,pno) => {
    try {
      const unreadNotifications = await NotificationModel.find({
        to: userId,
        read: false,
      }).sort(-1).skip(pno).limit(10);

      return { success: true, unreadNotifications };
    } catch (error) {
      console.error("Error getting unread notifications:", error);
      return { success: false, error: "Internal Server Error" };
    }
  },

  getAllNotifications: async (userId ,pno) => {
    try {
      const AllNotifications = await NotificationModel.find({
        to: userId,
      }).sort(-1).skip(pno).limit(10)
      ;

      return { success: true, AllNotifications};
    } catch (error) {
      console.error("Error getting unread notifications:", error);
      return { success: false, error: "Internal Server Error" };
    }
  },
};

export default notificationService;
