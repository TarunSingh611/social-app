import makeApiRequest from '@/services/apiReq';

const apiUnfollowReq = async (userId :any ,targetId:any) => {
  
  const options = {
    method: 'POST' as const,
    headers: {
      'Content-Type': 'application/json',
    }
  };
  return await makeApiRequest(`/follow/unfollow-request/${userId}/${targetId}`, options);
};

export default apiUnfollowReq;
