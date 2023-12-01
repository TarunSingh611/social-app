import express from "express";
import {
  roomCreate,
  roomGet,
  roomJoin,
  roomBlock,
  roomKick,
  roomLeave,
  roomInvite,
  roomAccept,
  roomAnnouncement,
  roomEditName,
  roomCapacity,
  roomDelete,
} from "../controllers/roomController/roomController.mjs";
const router = express.Router();

router.post("/create", roomCreate);
router.get("/get", roomGet);
router.put("/join", roomJoin);
router.put("/block", roomBlock);
router.put("/kick", roomKick);
router.put("/leave", roomLeave);
router.put("/invite", roomInvite);
router.put("/accept", roomAccept);
router.put("/announcement", roomAnnouncement);
router.put("/editname", roomEditName);
router.put("/capacity", roomCapacity);
router.delete("/delete", roomDelete);


export default router;
