// apiRegister.tsx
import makeApiRequest from '@/services/apiReq';

const apiRegister = async (
user:any
) => {
  const options = {
    method: 'PUT' as const,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...user
    }),
  };
  return await makeApiRequest('/user/updateSecurity', options);
};

export default apiRegister;
