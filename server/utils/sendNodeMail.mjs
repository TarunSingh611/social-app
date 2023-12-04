import nodemailer from 'nodemailer';
import  secrets  from '../config/secrets.mjs';

const { EMAIL_ADDRESS, EMAIL_PASSWORD, EMAIL_SERVER, EMAIL_NAME, ORIGIN_URL ,EMAIL_PORT} = secrets;

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
      from: EMAIL_NAME,
      to: email,
      subject: 'Email Verification',
      text: `Click the following link to verify your email: http://${ORIGIN_URL}/user/verify?t=${token}&f=email`,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export default sendVerificationEmail;
