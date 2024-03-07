import { updateUserSecurity } from "../../services/userService/userUpdate.mjs";
const userUpdateSecurity = async (req, res) => {
    const self = req.session.user;
    const data = req.body;

    if (!self) {
        return res.status(403).json({ message: "Forbidden: Invalid username" });
    }
    const result = await updateUserSecurity(tokenData.userId, data);

    res.statusCode(200).json(result);
};

export { userUpdateSecurity };
