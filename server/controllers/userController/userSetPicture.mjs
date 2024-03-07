import setPicture from "../../services/userService/setPicture.mjs";
const userSetPicture = async (req, res) => {
    const self = req.session.user;
    if (!self) {
        return res.status(403).json({ message: "Forbidden: Invalid username" });
    }
    const file = req.file;
    if (!file) {
        return res
            .status(400)
            .json({ statusCode: 400, message: "File not found" });
    }
    const type = req.body.type;
    if (!type) {
        return res
            .status(400)
            .json({ statusCode: 400, message: "Type not found" });
    }
    const result = await setPicture(self.userId, file, type);
    console.log(result);
    res.json(result);
};

export { userSetPicture };
