import updateUser from "../../services/userService/userUpdate.mjs";
const userUpdate = async (req, res) => {
    const self = req.session.user;
    const data = req.body;

    if (!self) {
        return res.status(403).json({ message: "Forbidden: Invalid username" });
    }
    const result = await updateUser(self.userId, data);
    res.statusCode(200).json(result);
};

export { userUpdate };
