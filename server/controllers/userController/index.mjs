import { userRegister } from "./userRegister.mjs";
import { userLogin } from "./userLogin.mjs";
import {userVerification} from "./userVerification.mjs";

const userSearch = (req, res) => {
  res.send("userSearch");
}
const userProfile = (req, res) => {
  res.send("userProfile");
}

const userFriends = (req, res) => {
  res.send("userFriends");
}

const userChats = (req, res) => {
  res.send("userChats");
}

const userNotifications = (req, res) => {
  res.send("userNotifications");
}

const userPasswordChange = (req, res) => {
  res.send("userPasswordChange");
}

export {
  userSearch,
  userLogin,
  userRegister,
  userProfile,
  userFriends,
  userChats,
  userNotifications,
  userPasswordChange,
  userVerification,
};
