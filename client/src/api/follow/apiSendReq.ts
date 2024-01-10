import makeApiRequest from '@/services/apiReq';

const apiSendReq = async (userId :any ,targetId:any) => {
  
  const options = {
    method: 'POST' as const,
    headers: {
      'Content-Type': 'application/json',
    }
  };
  return await makeApiRequest(`/follow/send-request/${userId}/${targetId}`, options);
};

export default apiSendReq;
