import makeApiRequest from '@/services/apiReq';

const apiSetPicture = async (file: File, type: string) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('type', type);

  const options = {
    method: 'POST',
    body: formData, // FormData will set the appropriate Content-Type header
  };

  console.log(options);
  // Uncomment the line below to make the actual API request
  // return await makeApiRequest('/user/setPicture', options);
};

export default apiSetPicture;