import makeApiRequest from '@/services/apiReq';
import {NEXT_USER_LOGIN} from "@/contants/api"
import apiRouteGuard from '../api-route-guard';
const apiLogin = async (req,res) => {
  debugger
  console.log(req.body)
  const {email,password}= req.body
  const options={
    method: 'POST' as const,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }
 
  const result:any = await makeApiRequest(NEXT_USER_LOGIN, options);
  res.status(result?.statusCode || 200 ).json(result)
};

export default apiRouteGuard(apiLogin);
