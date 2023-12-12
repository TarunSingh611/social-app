import fs from 'fs';
import nodemailer from 'nodemailer';
import  secrets  from '../config/secrets.mjs';

const { EMAIL_ADDRESS, EMAIL_PASSWORD, EMAIL_SERVER, EMAIL_NAME, ORIGIN_URL ,EMAIL_PORT} = secrets;
const emailTemplate = fs.readFileSync('./utils/verifyEmailTemplate.html', 'utf-8');
const sendVerificationEmail = async (email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_SERVER,
      secure: EMAIL_PORT===465,
      auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${EMAIL_NAME}" <noreply@yourdomain.com>`,
      to: email,
      subject: 'Email Verification',
      html: emailTemplate.replace('{{verificationLink}}', `http://${ORIGIN_URL}/user/verify?t=${token}&f=email`),
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export default sendVerificationEmail;
