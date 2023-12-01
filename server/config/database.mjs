import secrets from "./secrets.mjs"
const { USER_NAME, DB_PASS, MONGO_URI ,DB_NAME} = secrets


const databaseConfig = {
    mongoURI: "mongodb+srv://" + USER_NAME + ":" + DB_PASS + "@" + MONGO_URI + "/"+DB_NAME
}
export default databaseConfig 