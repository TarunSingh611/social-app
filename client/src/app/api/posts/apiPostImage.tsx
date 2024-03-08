import makeApiRequest from '@/services/apiReq';

const apiPostImage = async ({ image, caption, hashtags }: { image: File, caption: string, hashtags: any }) => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('caption', caption);
  formData.append('hashtags', hashtags);

  const options = {
    method: 'POST' as const,
    body: formData,
  };
  console.log(options)
  return await makeApiRequest('/post/imagePost', options);
};

export default apiPostImage;
