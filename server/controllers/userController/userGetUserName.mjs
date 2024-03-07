import findUserNameById from "../../services/userService/userGetUsername.mjs";
async function userGetUserName(req, res) {
    const self = req.session.user;
    const userId = req.query.userId;
    if (!self) {
        return res.status(403).json({ message: "Forbidden: Invalid username" });
    }

    const result = await findUserNameById(userId);
    res.status(200).json(result);
}

export { userGetUserName };
