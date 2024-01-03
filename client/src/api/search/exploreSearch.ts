import makeApiRequest from '@/services/apiReq';

async function apiExploreSearch({data,type}:{data:string,type:string}) {
    const options = {
        method: 'GET' as const,
      };
      console.log(options)
      return await makeApiRequest(`/explore/search?t=${type}&q=${data}`, options);
}

export default apiExploreSearch