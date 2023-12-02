import dotenv from "dotenv";
dotenv.config();

const secrets = {
	USER_NAME: process.env.USER_NAME,
	DB_PASS: process.env.DB_PASS,
	MONGO_URL: process.env.MONGO_URL,
	DB_NAME: process.env.DB_NAME,
	PORT: process.env.PORT,
};

export default secrets;
