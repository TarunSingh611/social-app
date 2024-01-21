import dotenv from "dotenv";
dotenv.config();

const secrets = {
	NODE_ENV: process.env.NODE_ENV,
	NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_PORT,
	NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
	NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
	NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
	NEXT_PUBLIC_JWT_KEY: process.env.NEXT_PUBLIC_JWT_KEY,
	NEXT_PUBLIC_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL,
	NEXT_PUBLIC_ICON_URL:
		process.env.NEXT_PUBLIC_API_URL +
		process.env.NEXT_PUBLIC_ICON_URL,
	NEXT_PUBLIC_PROFILE_IMAGE_URL:
		process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL,
	NEXT_PUBLIC_PROFILE_DEFAULTER:
		process.env.NEXT_PUBLIC_API_URL +
		process.env.NEXT_PUBLIC_PROFILE_DEFAULTER,

	ProfilePicture(gender) {
		gender = gender?.toLowerCase();
		if (gender == "male") {
			return `${
				process.env.NEXT_PUBLIC_API_URL +
				process.env.NEXT_PUBLIC_PROFILE_DEFAULTER
			}maleDP.webp`;
		} else if (gender == "female") {
			return `${
				process.env.NEXT_PUBLIC_API_URL +
				process.env.NEXT_PUBLIC_PROFILE_DEFAULTER
			}femaleDP.webp`;
		} else {
			return `https://cdn-icons-png.flaticon.com/512/149/149071.png`;
		}
	},
};

export default secrets;
