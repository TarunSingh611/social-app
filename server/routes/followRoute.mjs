import express from "express";
import followController from "../controllers/followController/index.mjs";
const router = express.Router();

router.post("/send-request/:senderId/:receiverId", followController.sendFollowRequest);
router.post("/accept-request/:followerId", followController.acceptFollowRequest);
router.post("/reject-request/:followerId", followController.rejectFollowRequest);
router.post("/retract-request/:senderId/:receiverId", followController.retractFollowRequest);
router.post("/unfollow-request/:userId/:targetUserId", followController.unfollowUser);

export default router;
