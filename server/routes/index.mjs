import userRoutes from "./userRoute.mjs";
import postRoutes from "./postRoute.mjs";
import hashTagRoutes from "./hashTag.mjs";
import roomRoutes from "./roomRoute.mjs";
import chatRoutes from "./chatRoute.mjs";
import friendRoutes from "./friendRoute.mjs";
import reactionRoutes from "./reactionRoute.mjs";
import notificationsRoutes from "./notificationsRoute.mjs";

export default function initializeRoutes(app) {
  app.use("/user", userRoutes);
  app.use("/post", postRoutes);
  app.use("/hashTag", hashTagRoutes);
  app.use("/room", roomRoutes);
  app.use("/chat", chatRoutes);
  app.use("/friend", friendRoutes);
  app.use("/reaction", reactionRoutes);
  app.use("/notifications", notificationsRoutes);
}
