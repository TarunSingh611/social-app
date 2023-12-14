import { getUserByToken } from "../../utils/jwtUtils.mjs";
import {User} from "../../models/userModel.mjs";

const userGetProfile = async (req, res) => {
    const token = req.header('jwttoken');
    const tokenData = await getUserByToken(token)
    if (! tokenData) {
        return res.status(403).json({ message: 'Forbidden: Invalid username' });
    }
    const user = await User.findById(tokenData.userId);
    if (!user) {
      throw new Error('User not found');
    }
    res.send({message: "User fetched successfully", user , statusCode: 200});

};

export  {userGetProfile}