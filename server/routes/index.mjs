import userRoutes from "./userRoute.mjs";
import postRoutes from "./postRoute.mjs";
import hashTagRoutes from "./hashTag.mjs";
import roomRoutes from "./roomRoute.mjs";
import chatRoutes from "./chatRoute.mjs";
import friendRoutes from "./friendRoute.mjs";
import reactionRoutes from "./reactionRoute.mjs";
import notificationsRoutes from "./notificationsRoute.mjs";
import BearerAuth from "../middleware/bearerAuth.mjs";
import feed from "./feed.mjs";

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

  app.use("*", (req, res) => {
    res.status(404).json({
      error: "Not Found",
    });
  })
}
