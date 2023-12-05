import makeApiRequest from '@/services/apiReq';
const apiLogin = async (email: string, password: string) => {
  const options={
    method: 'POST' as const,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }
 
  return await makeApiRequest('/user/login', options);
};

export default apiLogin;
