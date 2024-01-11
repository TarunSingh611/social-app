import makeApiRequest from '@/services/apiReq';

const apiGetNotifications = async (pno : number) => {
  
  const options = {
    method: 'GET' as const,
  };
  return await makeApiRequest(`/notifications/get-all-notifications/pno=${pno}`, options);
};

export default apiGetNotifications;
