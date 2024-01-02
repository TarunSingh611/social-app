import makeApiRequest from '@/services/apiReq';
const apiGetUserName = async (user: any) => {
  const options={
    method: 'GET' as const,
    headers: {
      'Content-Type': 'application/json',
    },
  }
 
  return await makeApiRequest('/user/getUserName?userId='+user+'', options);
};

export default apiGetUserName;