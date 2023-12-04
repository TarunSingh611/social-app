import express from "express";
import {
  userSearch,
  userRegister,
  userLogin,
  userProfile,
  userFriends,
  userChats,
  userNotifications,
  userPasswordChange,
  userVerification,
} from "../controllers/userController/index.mjs";
const router = express.Router();

router.get("/search", userSearch);
router.post("/login", userLogin);
router.post("/register", userRegister);
router.get("/profile", userProfile);
router.get("/friends", userFriends);
router.get("/chats", userChats);
router.get("/notifications", userNotifications);
router.put("/password", userPasswordChange);
router.get("/verify",userVerification);

export default router;
