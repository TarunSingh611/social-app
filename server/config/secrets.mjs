import dotenv from "dotenv";
dotenv.config();

const secrets = {
	USER_NAME: process.env.USER_NAME,
	DB_PASS: process.env.DB_PASS,
	MONGO_URL: process.env.MONGO_URL,
	DB_NAME: process.env.DB_NAME,
	PORT: process.env.PORT,
	JWT_SECRET: process.env.JWT_SECRET,
	VALID_API_KEYS: process.env.VALID_API_KEYS,
	EXCLUDED_ROUTES: process.env.EXCLUDED_ROUTES,
	EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
	EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
	EMAIL_SERVER: process.env.EMAIL_SERVER,
	EMAIL_NAME: process.env.EMAIL_NAME,
	ORIGIN_URL: process.env.ORIGIN_URL,
	EMAIL_PORT: process.env.EMAIL_PORT,
};

export default secrets;
