import makeApiRequest from '@/framework/utils/apiReq';
const apiLogin = async (req,res) => {
  const options={
    method: 'POST' as const,
    headers: {
      'Content-Type': 'application/json',
    },
    body: req.body,
  }
 
  res.json(await makeApiRequest('/login', options));
};

export default apiLogin;