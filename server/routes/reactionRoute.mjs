import express from "express";
import {
  reactionCreate,
  reactionDelete,
  reactionGet,
  reactionUpdate,
  reactionGetAll,
} from "../controllers/reactionController/reactionController.mjs";
const router = express.Router();

router.post("/create", reactionCreate);
router.delete("/delete", reactionDelete);
router.get("/get", reactionGet);
router.put("/update", reactionUpdate);
router.get("/getall", reactionGetAll);

export default router;
