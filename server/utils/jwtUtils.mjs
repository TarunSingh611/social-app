import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
const secretKey = process.env.JWT_SECRET;
const blacklist = new Set();
export const generateToken = (user) => {
	return jwt.sign(
		{
			userId: user._id,
		},
		secretKey,
		{ expiresIn: "24h" }
	);
};

export const verifyToken = (token) => {
	try {
		return jwt.verify(token, secretKey);
	} catch (error) {
		console.log("Invalid token");
	}
};

export const invalidateToken = (token) => {
	blacklist.add(token);
};

export const checkTokenBlacklist = (token) => {
	if (blacklist.has(token)) {
		return true;
	}
	else{
		return false
	}
};

