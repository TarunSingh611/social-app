import Cookies from 'js-cookie';
import secrets from '../config/secrets';

const {NODE_ENV } = secrets;


const cookies = Cookies.withAttributes({ secure: NODE_ENV === 'production' });

export const setToken = (token) => {
  cookies.set("jwt", token, {
    expires: 1,
  });
};

export const getToken = () => {
  return cookies.get("jwt");
};

export const removeToken = () => {
  cookies.remove("jwt");
};
