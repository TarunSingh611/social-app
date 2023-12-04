import { User } from '../../models/userModel.mjs';
import generateRandomCode from '../../utils/generateRandomCode.mjs';

const generateVerificationToken = async (userId) => {
  try {
    const verificationCode = generateRandomCode();


    await User.findByIdAndUpdate(userId, {
      $set: {
        'verificationCode.token': verificationCode,
      },
    });
    return verificationCode;

  } catch (error) {
    throw new Error('Error generating verification token');
  }
};

const clearVerificationToken = async (userId) => {
  try {
    await User.findByIdAndUpdate(userId, {
      $set: {
        'verificationCode.token': null,
      },
    });

  } catch (error) {
    throw new Error('Error clearing verification token');
  }
};

export { generateVerificationToken, clearVerificationToken };
