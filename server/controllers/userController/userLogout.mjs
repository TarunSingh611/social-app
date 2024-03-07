import { invalidateToken } from "../../utils/jwtUtils.mjs";

const userLogout = async (req, res) => {
    const token = req.header("jwttoken");
    invalidateToken(token);
    res.statusCode(200).json({ message: "Logged Out" });
};

export { userLogout };
