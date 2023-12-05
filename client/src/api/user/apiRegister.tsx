// apiRegister.tsx
import makeApiRequest from '@/services/apiReq';

const apiRegister = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const options = {
    method: 'POST' as const,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  };

  return await makeApiRequest('/user/register', options);
};

export default apiRegister;
