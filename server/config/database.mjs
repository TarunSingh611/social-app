import secrets from "./secrets.mjs";
const { USER_NAME, DB_PASS, MONGO_URL, DB_NAME } = secrets;

const databaseConfig = {
	mongoURI:
		"mongodb+srv://" +
		USER_NAME +
		":" +
		DB_PASS +
		"@" +
		MONGO_URL +
		"/" +
		DB_NAME,
};
export default databaseConfig;
