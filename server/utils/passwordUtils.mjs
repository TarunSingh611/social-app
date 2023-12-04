// passwordUtils.js
import bcrypt from "bcrypt";
const saltRounds = 4;

const hashPassword = async (password) => {
	try {
		const hashedPassword = await bcrypt.hash(
			password,
			saltRounds
		);
		return hashedPassword;
	} catch (error) {
		throw new Error("Error hashing password");
	}
};

export const comparePassword = async (inputPassword, hashedPassword) => {
	try {
	  const isPasswordCorrect = await bcrypt.compare(inputPassword, hashedPassword);
	  return isPasswordCorrect;
	} catch (error) {
	  console.error("Error comparing passwords:", error);
	}
  };

export default hashPassword;
