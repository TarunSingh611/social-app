import makeApiRequest, { HttpMethod } from '@/services/apiReq';

const apiSetPicture = async (file: File, type: string) => {

  const formData = new FormData();
  formData.append('file', file);
  formData.append('type', type);

  const options = {
    method: 'PUT' as HttpMethod,
    body: formData,
  };
  console.log(options);
  return await makeApiRequest('/user/setPicture', options);
};

export default apiSetPicture;
