const chatGet = async (req, res) => {
  res.send("Chat Get");
};

const chatDelete = async (req, res) => {
  res.send("Chat Delete");
};

const chatUpdate = async (req, res) => {
  res.send("Chat Update");
};

const chatCreate = async (req, res) => {
  res.send("Chat Create");
};

const chatGetAll = async (req, res) => {
  res.send("Chat Get All");
};

const chatGetUser = async (req, res) => {
  res.send("Chat Get User");
};

export { chatGet, chatDelete, chatUpdate, chatCreate, chatGetAll, chatGetUser };
