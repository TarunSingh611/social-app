import fs from "fs";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const {
	EMAIL_ADDRESS,
	EMAIL_PASSWORD,
	EMAIL_SERVER,
	EMAIL_NAME,
	ORIGIN_URL,
	EMAIL_PORT,
} = process.env;

let emailTemplate ;
const sendVerificationEmail = async (email, type, token) => {
	switch (type) {
		case "verify":
			emailTemplate = fs.readFileSync(
				"./utils/verifyEmailTemplate.html",
				"utf-8"
			)
			.replace(
				"{{verificationLink}}",
				`http://${ORIGIN_URL}/user/verify?t=${token}&f=email`
			);
			break;
		default: return {
			error: "Invalid email type",
		};
	}


	try {
		const transporter = nodemailer.createTransport({
			host: EMAIL_SERVER,
			secure: EMAIL_PORT === 465,
			auth: {
				user: EMAIL_ADDRESS,
				pass: EMAIL_PASSWORD,
			},
		});

		const mailOptions = {
			from: `"${EMAIL_NAME}" <noreply@yourdomain.com>`,
			to: email,
			subject: "Email Verification",
			html: emailTemplate
		};

		await transporter.sendMail(mailOptions);
		return true;
	} catch (error) {
		console.error("Error sending email:", error);
		return false;
	}
};

export default sendVerificationEmail;
