import express from "express";
import {
  friendRequestSend,
  friendRequestRespond,
  friendBlock,
  friendUnblock,
  friendRestrict,
  friendUnrestrict,
} from "../controllers/friendController/friendController.mjs";
const router = express.Router();

router.post("/send", friendRequestSend);
router.put("/respond", friendRequestRespond);
router.put("/block", friendBlock);
router.put("/unblock", friendUnblock);
router.put("/restrict", friendRestrict);
router.put("/unrestrict", friendUnrestrict);

export default router;
