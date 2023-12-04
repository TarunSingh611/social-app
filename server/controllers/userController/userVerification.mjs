import verifyEmail from '../../services/userService/userVerification.mjs';


const userVerification = async (req, res) => {
  try {
    const verificationToken = req.query.t; 

    if (!verificationToken) {
        return res.status(400).send('Invalid verification token');
      }
  
      const isVerificationSuccessful = await verifyEmail(verificationToken);
  
      if (isVerificationSuccessful) {
        return res.send('Email verification successful!');
      } else {
        return res.status(400).send('Email verification failed');
      }
    } catch (error) {
      console.error('Error in userVerification:', error);
      return res.status(500).send('Internal server error');
    }
};

export {userVerification}