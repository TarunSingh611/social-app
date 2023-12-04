
import jwt from 'jsonwebtoken';
import secrets from '../config/secrets.mjs';

const {JWT_SECRET: secretKey} = secrets;

export const generateToken = (user) => {

  return jwt.sign(
    {
      username: user.username,
      email: user.email,
      emailVerified: user.emailVerified,
    },
    secretKey,
    { expiresIn: '24h' } 
  );
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    console.log('Invalid token');
  }
};
