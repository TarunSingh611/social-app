import NotificationModel from "../../models/notificationModel.mjs";

const notificationService = {
  createNotification: async (type, content ,toUserId,fromUserId=null) => {
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

  deleteNotification: async (type, to, from) => {
    try {
      console.log("Deleting notifications:", type, to, from);
  
      const notifications = await NotificationModel.deleteMany({ type, to, from });
      
      console.log("Delete result:", notifications);
  
      if (notifications.deletedCount > 0) {
        console.log("Notifications deleted successfully.");
        return { success: true };
      } else {
        console.log("No matching notifications found for deletion.");
        return { success: false, error: "No matching notifications found." };
      }
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
      const notifications = await NotificationModel.deleteMany({ to: userId, type: { $ne: 'FOLLOW_REQ' } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting notifications:", error);
      return { success: false, error: "Internal Server Error" };
    }
  },

  deleteAllFollowRequests: async (userId) => {
    try {
      const notifications = await NotificationModel.deleteMany({ to: userId, type: 'FOLLOW_REQ' });
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

  getFollowRequests: async (userId, pno) => {
    try {
      const followRequests = await NotificationModel.find({
        to: userId,
        type: 'FOLLOW_REQ',
      })
        .sort({ createdAt: -1 }) 
        .skip(pno)
        .limit(10);
  
      return { success: true, followRequests };
    } catch (error) {
      console.error("Error getting follow requests:", error);
      return { success: false, error: "Internal Server Error" };
    }
  },

  getUnreadNotifications: async (userId, pno) => {
    try {
      const Notifications = await NotificationModel.find({
        to: userId,
        read: false,
        type: { $ne: 'FOLLOW_REQ' },
      })
        .sort({ createdAt: -1 })
        .skip(pno)
        .limit(10);

        
        const followReq =await notificationService.getFollowRequests(userId, pno);
        const data={
          followReq,
          Notifications 
        }
  
      return { success: true, data };
    } catch (error) {
      console.error("Error getting unread notifications:", error);
      return { success: false, error: "Internal Server Error" };
    }
  },
  
  getAllNotifications: async (userId, pno) => {
    try {

      const Notifications = await NotificationModel.find({
        to: userId,type: { $ne: 'FOLLOW_REQ' }
      })
        .sort({ createdAt: -1 }) 
        .skip(pno)
        .limit(10);

        const followReq =await notificationService.getFollowRequests(userId, pno);
        const data={
          followRequests : followReq.followRequests,
          Notifications
        }
  
      return { success: true, data };
    } catch (error) {
      console.error("Error getting all notifications:", error);
      return { success: false, error: "Internal Server Error" };
    }
  },
  
};

export default notificationService;
