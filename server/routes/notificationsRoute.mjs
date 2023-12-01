import express from "express";
import {
  notificationsMarkRead,
  notificationsMarkAllRead,
  notificationsGet,
  notificationsDelete,
} from "../controllers/notificationsController/notificationsController.mjs";
const router = express.Router();

router.put("/read", notificationsMarkRead);
router.put("/allread", notificationsMarkAllRead);
router.get("/get", notificationsGet);
router.delete("/delete", notificationsDelete);

export default router;
