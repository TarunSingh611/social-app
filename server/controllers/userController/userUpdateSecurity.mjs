import { getUserByToken } from "../../utils/jwtUtils.mjs";
import {updateUserSecurity} from "../../services/userService/userUpdate.mjs";
const userUpdateSecurity = async (req, res) => {
    const token = req.header('jwttoken');
    const tokenData = await getUserByToken(token)

    if (! tokenData) {
        return res.status(403).json({ message: 'Forbidden: Invalid username' });
    }
    const result = await updateUserSecurity(tokenData.userId, req.body);

    res.json(result);
};

export  {userUpdateSecurity}