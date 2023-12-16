const notificationsMarkRead = async (req, res) => {
  res.send("Notifications Mark Read");
};

const notificationsMarkAllRead = async (req, res) => {
  res.send("Notifications Mark All Read");
};

const notificationsGet = async (req, res) => {
  res.send("Notifications Get");
};

const notificationsDelete = async (req, res) => {
  res.send("Notifications Delete");
};

export {
  notificationsMarkRead,
  notificationsMarkAllRead,
  notificationsGet,
  notificationsDelete,
};
