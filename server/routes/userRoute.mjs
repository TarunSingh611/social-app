import express from "express";
import multer from "multer";
import {
  userSearch,
  userRegister,
  userLogin,
  userLogout,
  userFriends,
  userChats,
  userNotifications,
  userPasswordChange,
  userVerification,
  userGetProfile,
  userUpdate,
  userUpdateSecurity,
  userSetPicture,
} from "../controllers/userController/index.mjs";
const router = express.Router();
const upload = multer({dest:'public/'})

router.get("/search", userSearch);
router.get("/getProfile", userGetProfile);
router.post("/login", userLogin);
router.get("/logout", userLogout);
router.post("/register", userRegister);
router.get("/getProfile", userGetProfile);
router.get("/friends", userFriends);
router.get("/chats", userChats);
router.get("/notifications", userNotifications);
router.put("/password", userPasswordChange);
router.get("/verify",userVerification);
router.put("/update", userUpdate);
router.put("/updateSecurity", userUpdateSecurity);
router.put("/setPicture", upload.single('file'), userSetPicture);

export default router;
