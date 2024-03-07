import express from "express";
import multer from "multer";
import {
  userGetUserName,
  userGetProfile,
  userUpdate,
  userUpdateSecurity,
  userSetPicture,
  userGetProfileById,
  userLogout
} from "../controllers/userController/index.mjs";
const router = express.Router();
const upload = multer({dest:'public/'})

router.get("/getProfile", userGetProfile);
router.get("/logout", userLogout);;
router.get("/getUserName", userGetUserName);
router.put("/update", userUpdate);
router.put("/updateSecurity", userUpdateSecurity);
router.put("/setPicture", upload.single('file'), userSetPicture);
router.get("/getProfileById", userGetProfileById);

export default router;
