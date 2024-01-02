import makeApiRequest from '@/services/apiReq';

async function apiGetFeed() {
    const options = {
        method: 'GET' as const,
      };
      return await makeApiRequest(`/feed`, options);
}

export default apiGetFeed