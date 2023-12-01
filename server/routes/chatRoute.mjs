import express from "express";
import {
  chatGet,
  chatDelete,
  chatUpdate,
  chatCreate,
  chatGetAll,
  chatGetUser,
} from "../controllers/chatController/chatController.mjs";
const router = express.Router();

router.get("/get", chatGet);
router.delete("/delete", chatDelete);
router.put("/update", chatUpdate);
router.post("/create", chatCreate);
router.get("/getall", chatGetAll);
router.get("/getuser", chatGetUser);

export default router;
