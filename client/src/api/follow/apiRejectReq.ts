import makeApiRequest from '@/services/apiReq';

const apiRejectReq = async (targetId:any) => {
  
  const options = {
    method: 'POST' as const,
    headers: {
      'Content-Type': 'application/json',
    }
  };
  return await makeApiRequest(`/follow/reject-request/${targetId}`, options);
};

export default apiRejectReq;
