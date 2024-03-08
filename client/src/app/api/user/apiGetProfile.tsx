import makeApiRequest from '@/services/apiReq';
const apiGetProfile = async () => {
  const options={
    method: 'GET' as const,
    headers: {
      'Content-Type': 'application/json',
    },
  }
 
  return await makeApiRequest('/user/getProfile/', options);
};

export default apiGetProfile;
