const userSearch = (req, res) => {
  res.send("userSearch");
}

const userRegister = (req, res) => {
  res.send("userRegister");
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
  userRegister,
  userProfile,
  userFriends,
  userChats,
  userNotifications,
  userPasswordChange,
};
