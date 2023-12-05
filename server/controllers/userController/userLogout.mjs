import { invalidateToken } from "../../utils/jwtUtils.mjs";

const userLogout = async (req, res) => {
    const token = req.header('jwttoken');
    invalidateToken(token);
    return {message: "Logged Out", statusCode: 200 };
};

export  {userLogout}