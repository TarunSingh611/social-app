import makeApiRequest from '@/services/apiReq';
import {NEXT_USER_LOGIN} from "@/contants/api"
const apiLogin = async (req : {method: string, headers: { 'Content-Type': string },body: {emailorusername: string, password: string}}, res:any) => {
  if (req.method === 'POST') {
  debugger
  console.log(req.body)
  const {emailorusername,password}= req.body
  const options={
    method: 'POST' as const,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ emailorusername, password }),
  }
 
  const result:any = await makeApiRequest(NEXT_USER_LOGIN, options);
  res.status(result?.statusCode || 200 ).json(result)}
  else {
    debugger
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default apiLogin;
