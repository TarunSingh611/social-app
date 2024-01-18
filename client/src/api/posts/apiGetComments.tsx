import makeApiRequest from '@/services/apiReq';

const getGetComments = async (postId :any ,order:number ,cno:number) => {
  
  const options = {
    method: 'GET' as const,
  };
  return await makeApiRequest(`/post/comments?postId=${postId}&&order=${order}&&cno=${cno}`, options);
};

export default getGetComments;
