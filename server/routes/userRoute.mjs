import express from "express";
import {
  userSearch,
  userRegister,
  userProfile,
  userFriends,
  userChats,
  userNotifications,
  userPasswordChange,
} from "../controllers/userController/userController.mjs";
const router = express.Router();

router.get("/search", userSearch);
router.post("/register", userRegister);
router.get("/profile", userProfile);
router.get("/friends", userFriends);
router.get("/chats", userChats);
router.get("/notifications", userNotifications);
router.put("/password", userPasswordChange);

export default router;
