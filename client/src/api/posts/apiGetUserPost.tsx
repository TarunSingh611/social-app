import makeApiRequest from '@/services/apiReq';

const apiPostImage = async (userId :any ,pno:any) => {
  
  const options = {
    method: 'GET' as const,
  };
  return await makeApiRequest(`/post/userPost?userId=${userId}&&pno=${pno}`, options);
};

export default apiPostImage;
