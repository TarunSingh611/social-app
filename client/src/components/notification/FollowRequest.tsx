'use client';
import React, { useState } from "react";
import { ProfileSearchCard } from "../profile/ProfileCard";
import apiAcceptReq from "@/api/follow/apiAcceptReq";
import apiRejectReq from "@/api/follow/apiRejectReq";
import LoadingDots from "../misc/loadingDots";
import  {setRequests} from "@/redux/slicers/notificationSlice";
import { useDispatch } from "react-redux";

interface FollowRequestProps {
  requests: Array<{
    _id: string;
    type: string;
    from: string;
    contentDetails: {
      content: string;
      _id: string;
    };
    createdAt: string;
  }>;

  stacked: boolean;
  setStacked: (stacked: boolean) => void;
}

const FollowRequest: React.FC<FollowRequestProps> = ({
  requests,
  stacked,
  setStacked,
}) => {
  const dispatch = useDispatch()
   const handleRejectRequest = (cardId: string , stopLoad:any) => {
     
     apiRejectReq(cardId)
     .then((res:any)=>{
      if(res.success){
        console.log(requests, cardId)
        dispatch(setRequests(requests.filter((request:any) => request?.from?._id !== cardId)))
      }
     })
     .finally(()=>{
        stopLoad();
     })
   }
   const handleAcceptRequest = (cardId: string , stopLoad:any) => {
   
    apiAcceptReq(cardId)
    .then((res:any)=>{
      if(res.success){
        dispatch(setRequests(requests.filter((request:any) => request?.from?._id !== cardId)))
        return;
      }
     })
     .finally(()=>{
      stopLoad();
   })
   }

  return (
    <div className={`w-full flex flex-col ${stacked ? "justify-start" : "justify-between"}`}>
      <div className="relative">
        {stacked ? (
          <div className="relative">

          </div>
        ) : (
          <>
            {requests?.map((request) => (
              <RequestCard key={request._id} request={request} handleAcceptRequest={handleAcceptRequest} handleRejectRequest={handleRejectRequest} />

            ))}
          </>
        )}
      </div>
     { requests?.length > 0 &&
     <div
        className="text-center text-gray-500 z-99 my-2 p-1 bg-gray-400/50 hover:text-gray-200 cursor-pointer flex justify-center"
        onClick={() => setStacked(!stacked)}
      >
        {stacked ? "show follow requests" : "Hide follow requests"}
        <p className="bg-red-600 text-white text-xs rounded-full w-4 h-4 ml-1">{requests.length}</p>
      </div>
    }
    </div>
  );
};


const RequestCard: React.FC<{
  request: {
    _id: string;
    type: string;
    from: any,
    contentDetails: {
      content: string;
      _id: string;
    };
    createdAt: string;
  };
  handleAcceptRequest: (cardId: string , stopLoad:any) => any
  handleRejectRequest: (cardId: string , stopLoad:any) => any
}> = ({ request ,handleAcceptRequest ,handleRejectRequest}) => {
  const [rxnLoad, setRxnLoad] = useState(false)

  function handleReject (id:any){
    setRxnLoad(true)
    handleRejectRequest(id ,()=>{setRxnLoad(false)})
    
  }

  function handleAccept (id:any){
    setRxnLoad(true)
    handleAcceptRequest(id ,()=>{setRxnLoad(false)})
  }

  return (
    <div
    key={request._id}
    className={`cursor-pointer bg-gray-100 m-1 rounded-md shadow-md`}
  >
    <ProfileSearchCard user={request?.from} />
   {rxnLoad ? <div className="flex justify-center py-4"><LoadingDots/></div> : (<div className="flex justify-around">
      <button onClick={()=>handleReject(request?.from?._id)} className="font-bold text-md bg-red-600  hover:bg-red-500 px-1 py-2 w-24 text-white text-center rounded-md">
        Reject
      </button>
      <button onClick={()=>handleAccept(request?.from?._id)} className="font-bold text-md bg-green-600 hover:bg-green-500 px-1 py-2 w-24 text-white text-center rounded-md">
        Accept
      </button>
    </div>)}
    <p className="text-xs ml-auto text-right p-1 w-auto text-slate-400 mt-2">
      Requested on {new Date(request.createdAt).toLocaleString()}
    </p>
  </div>
  )
}

export default FollowRequest;
