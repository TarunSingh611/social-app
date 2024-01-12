import userRoutes from "./userRoute.mjs";
import postRoutes from "./postRoute.mjs";
import hashTagRoutes from "./hashTag.mjs";
import roomRoutes from "./roomRoute.mjs";
import chatRoutes from "./chatRoute.mjs";
import friendRoutes from "./friendRoute.mjs";
import reactionRoutes from "./reactionRoute.mjs";
import notificationsRoutes from "./notificationsRoute.mjs";
import followRoutes from "./followRoute.mjs";
import BearerAuth from "../middleware/bearerAuth.mjs";
import feed from "./feed.mjs";
import explore from "./explore.mjs";
// import notifications from "../models/notificationModel.mjs";
// import users from "../models/userModel.mjs";
export default function initializeRoutes(app) {
  app.use(BearerAuth);

  app.use("/user", userRoutes);
  app.use("/post", postRoutes);
  app.use("/hashTag", hashTagRoutes);
  app.use("/room", roomRoutes);
  app.use("/chat", chatRoutes);
  app.use("/friend", friendRoutes);
  app.use("/reaction", reactionRoutes);
  app.use("/notifications", notificationsRoutes);
  app.use("/feed", feed);
  app.use("/explore", explore);
  app.use("/follow", followRoutes);
  app.use("/notifications", notificationsRoutes);


  app.get("/mongo", async (req, res) => {
    try {

      // const contentDetails = { content: "Sample notification content" };

      // const tarunUser = users.findOne({ username: "tarunsrajput25@gmail.com" });
      // const abcUser = users.findOne({ username: "abc@gmail.com" });
      // const xyzUser = users.findOne({ username: "xyz@gmail.com" });
      
      // notifications.insertMany([
      //   {
      //     type: "SENT_REQ",
      //     to: abcUser._id,
      //     from: xyzUser._id,
      //     contentDetails,
      //     read: false,
      //     createdAt: new Date(),
      //     updatedAt: null,
      //   },
      //   {
      //     type: "Message",
      //     to: abcUser._id,
      //     from: xyzUser._id,
      //     contentDetails,
      //     read: true,
      //     createdAt: new Date(),
      //     updatedAt: null,
      //   },
      //   {
      //     type: "Alert",
      //     to: abcUser._id,
      //     from: tarunUser._id,
      //     contentDetails,
      //     read: true,
      //     createdAt: new Date(),
      //     updatedAt: null,
      //   },
      // ]);
      

      console.log("Successfully updated existing users.");
      res.send("Successfully updated existing users.");
    } catch (error) {
      console.error("Error updating users:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.use("*", (req, res) => {
    res.status(404).json({
      error: "Not Found",
    });
  });
}
