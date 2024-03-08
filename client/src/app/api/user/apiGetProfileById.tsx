import makeApiRequest from '@/services/apiReq';
const apiGetProfile = async (userId:any) => {
  const options={
    method: 'GET' as const,
    headers: {
      'Content-Type': 'application/json',
    },
  }
 
  return await makeApiRequest(`/user/getProfile/${userId}`, options);
};

export default apiGetProfile;
