import { getUserProfile } from "../../services/userService/userGetUsername.mjs";

const userGetProfile = async (req, res) => {
    const self = req.session.user;
    if (!self) {
        throw new Error("User not found");
    }
    res.statusCode(200).json({
        message: "User fetched successfully",
        user: self,
    });
};

const userGetProfileById = async (req, res) => {
    const userId = req.query.userId;
    if (!userId) {
        return res
            .statusCode(403)
            .json({ message: "Forbidden: Invalid username" });
    }
    const result = await getUserProfile(userId);
    res.statusCode(200).json(result);
};

export { userGetProfile, userGetProfileById };
