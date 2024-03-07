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
import guestRoutes from "./guestRoute.mjs";
import explore from "./explore.mjs";
import mongoQuery from "./mongoQuery.mjs";
import JWTAuth from "../middleware/jwtAuth.mjs";
export default function initializeRoutes(app) {
  app.use(BearerAuth);
  app.use("/",guestRoutes);
  app.use(JWTAuth);
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
  // app.get("/mongo", mongoQuery); 
  app.use("*", (req, res) => {
    res.status(404).json({
      error: "Not Found",
    });
  });
}
