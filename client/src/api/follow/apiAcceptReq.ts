import makeApiRequest from '@/services/apiReq';

const apiAcceptReq = async (targetId:any) => {
  
  const options = {
    method: 'POST' as const,
    headers: {
      'Content-Type': 'application/json',
    }
  };
  return await makeApiRequest(`/follow/accept-request/${targetId}`, options);
};

export default apiAcceptReq;
