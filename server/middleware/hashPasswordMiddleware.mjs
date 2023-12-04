// hashPasswordMiddleware.mjs
import  hashPassword  from "../utils/passwordUtils.mjs";

const hashPasswordMiddleware = async function (next) {
	if (this.isModified("password")) {
		try {
			this.password = await hashPassword(this.password);
			next();
		} catch (error) {
			next(error);
		}
	} else {
		next();
	}
};

export default hashPasswordMiddleware;
