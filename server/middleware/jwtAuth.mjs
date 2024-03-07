// jwtMiddleware.mjs
import { verifyToken ,checkTokenBlacklist} from '../utils/jwtUtils.mjs';
import User from '../models/userModel.mjs';

const jwtMiddleware = async (req, res, next) => {
  const token = req.headers['jwttoken'];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }
  if(checkTokenBlacklist(token)){
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }

  try {
    const decodedToken = verifyToken(token);

    const user = await User.findOne({ _id: decodedToken.userId });

    if (!user) {
      return res.status(403).json({ message: 'Forbidden: Invalid username' });
    }

    if (!user.emailVerified) {
      return res.status(403).json({ message: 'Forbidden: Email not verified' });
    }

    req.session.user = user; 
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Forbidden: Invalid token' });
  }
};

export default jwtMiddleware;
