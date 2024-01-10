import makeApiRequest from '@/services/apiReq';

const apiRetractReq = async (userId :any ,targetId:any) => {
  
  const options = {
    method: 'POST' as const,
    headers: {
      'Content-Type': 'application/json',
    }
  };
  return await makeApiRequest(`/follow/retract-request/${userId}/${targetId}`, options);
};

export default apiRetractReq;
