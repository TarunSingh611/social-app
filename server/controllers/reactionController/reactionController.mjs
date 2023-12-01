const reactionCreate = async (req, res) => {
  res.send("reactionCreate");
};  

const reactionDelete = async (req, res) => {
  res.send("reactionDelete");
};

const reactionGet = async (req, res) => {
  res.send("reactionGet");
};

const reactionUpdate = async (req, res) => {
  res.send("reactionUpdate");
};

const reactionGetAll = async (req, res) => {
  res.send("reactionGetAll");
}


  export {
    reactionCreate,
    reactionDelete,
    reactionGet,
    reactionUpdate,
    reactionGetAll,
  };