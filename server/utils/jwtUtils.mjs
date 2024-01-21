import jwt from "jsonwebtoken";
const secretKey = process.env.JWT_SECRET;
export const generateToken = (user) => {
	return jwt.sign(
		{
			userId: user._id,
			username: user.username,
			email: user.email,
			emailVerified: user.emailVerified,
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
		return res.status(401).json({
			message: "Token is revoked. Please log in again.",
		});
	}

	next();
};

const getUserByToken = async (token) => {
	try {
		const decoded = jwt.verify(token, secretKey);
		return decoded;
	} catch (error) {
		console.log(error);
	}
};

export { getUserByToken };
