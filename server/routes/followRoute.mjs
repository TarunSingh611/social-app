import express from "express";
import followController from "../controllers/followController/index.mjs";
const router = express.Router();

router.get("/send-request/:userId", followController.sendFollowRequest);
router.get("/accept-request/:userId", followController.acceptFollowRequest);
router.get("/reject-request/:userId", followController.rejectFollowRequest);
router.get("/retract-request/:userId", followController.retractFollowRequest);
router.get("/unfollow-request/:userId", followController.unfollowUser);

export default router;
