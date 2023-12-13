import { userRegister } from "./userRegister.mjs";
import { userLogin } from "./userLogin.mjs";
import {userVerification} from "./userVerification.mjs";
import { userLogout } from "./userLogout.mjs";
import { userGetProfile } from "./userGetProfile.mjs";
import {userUpdate} from "./userUpdate.mjs"
import {userUpdateSecurity} from "./userUpdateSecurity.mjs"

const userSearch = (req, res) => {
  res.send("userSearch");
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
  userLogout,
  userGetProfile,
  userFriends,
  userChats,
  userNotifications,
  userPasswordChange,
  userVerification,
  userUpdate,
  userUpdateSecurity,
};
