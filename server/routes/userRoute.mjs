import express from "express";
import multer from "multer";
import {

  userRegister,
  userLogin,
  userLogout,
  userGetUserName,
  userVerification,
  userGetProfile,
  userUpdate,
  userUpdateSecurity,
  userSetPicture,
  userGetProfileById
} from "../controllers/userController/index.mjs";
const router = express.Router();
const upload = multer({dest:'public/'})

router.get("/getProfile", userGetProfile);
router.post("/login", userLogin);
router.get("/logout", userLogout);
router.post("/register", userRegister);
router.get("/getProfile", userGetProfile);
router.get("/getUserName", userGetUserName);
router.get("/verify",userVerification);
router.put("/update", userUpdate);
router.put("/updateSecurity", userUpdateSecurity);
router.put("/setPicture", upload.single('file'), userSetPicture);
router.get("/getProfile/:userId", userGetProfileById);

export default router;
