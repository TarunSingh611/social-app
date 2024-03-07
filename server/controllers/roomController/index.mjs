const roomCreate = async (req, res) => {
    res.send("roomCreate");
};

const roomGet = async (req, res) => {
    res.send("roomGet");
};

const roomJoin = async (req, res) => {
    res.send("roomJoin");
};

const roomBlock = async (req, res) => {
    res.send("roomBlock");
};

const roomKick = async (req, res) => {
    res.send("roomKick");
};

const roomLeave = async (req, res) => {
    res.send("roomLeave");
};

const roomInvite = async (req, res) => {
    res.send("roomInvite");
};

const roomAccept = async (req, res) => {
    res.send("roomAccept");
};

const roomAnnouncement = async (req, res) => {
    res.send("roomAnnouncement");
};

const roomEditName = async (req, res) => {
    res.send("roomEditName");
};

const roomCapacity = async (req, res) => {
    res.send("roomCapacity");
};

const roomDelete = async (req, res) => {
    res.send("roomDelete");
};

export {
    roomCreate,
    roomGet,
    roomJoin,
    roomBlock,
    roomKick,
    roomLeave,
    roomInvite,
    roomAccept,
    roomAnnouncement,
    roomEditName,
    roomCapacity,
    roomDelete,
};
