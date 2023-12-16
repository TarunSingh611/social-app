const friendRequestSend = async (req, res) => {
  res.send("friendRequestSend");
}
  
  const friendRequestRespond = async (req, res) => {
  res.send("friendRequestRespond");  
  }

  const friendBlock = async (req, res) => {
  res.send("friendBlock");
  }

  const friendUnblock = async (req, res) => {
  res.send("friendUnblock");
  }

  const friendRestrict = async (req, res) => {
  res.send("friendRestrict");
  }

  const friendUnrestrict = async (req, res) => {
  res.send("friendUnrestrict");
  }

  export {
    friendRequestSend,
    friendRequestRespond,
    friendBlock,
    friendUnblock,
    friendRestrict,
    friendUnrestrict,
  };