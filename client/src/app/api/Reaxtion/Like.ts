import makeApiRequest from '@/services/apiReq';

const apiLike = async (contentType:any, contentId:any) => {
  
  const options = {
    method: 'PUT' as const,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contentType, contentId }),
  };
  return await makeApiRequest(`/reaction/like`, options);
};

export default apiLike;
