"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ConfirmOverlay from "./confirmOverlay";
import apiSendReq from "@/api/follow/apiSendReq";
import apiRetractReq from "@/api/follow/apiRetractReq";
import apiUnfollowReq from "@/api/follow/apiUnfollow";
import LoadingDots from "../misc/loadingDots";

export default function FollowButton({ user, setUser }: any) {
  const self = useSelector((state: any) => state.auth.user);


  const [text, setText] = useState(
    user?.followers?.includes(self?._id) ? "Following" : user?.pendingFollowers?.includes(self?._id) ? "Requested" : "Follow"
  );
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(true);
  }

  useEffect(() => {
    if (text === "Following") {
      setMessage("Are you sure you want to unfollow?");
    }
    else if (text === "Requested") {
      setMessage("Are you sure you want to cancel request?");
    }
    else {
      setMessage("Are you sure you want to follow?");
    }
  }, [text])
  const onConfirm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsLoading(true);
    setIsOpen(false);
    switch (text) {
      case "Follow":
        apiSendReq(self._id, user._id)
          .then((res: any) => {
            setText(res.mes);
            if (res.targetUser) {
              setUser(res.targetUser)
            }
          })
          .finally(() => {
            setIsLoading(false);
          }
          )
        return;

      case "Requested":
        apiRetractReq(self._id, user._id)
          .then((res: any) => {
            setText(res.mes);
            if (res.targetUser) {
              setUser(res.targetUser)
            }

          })
          .finally(() => {
            setIsLoading(false);
          }
          )
        return;

      case "Following":
        apiUnfollowReq(self._id, user._id)
          .then((res: any) => {
            setText(res.mes);
            if (res.targetUser) {
              setUser(res.targetUser)
            }
          })
          .finally(() => {
            setIsLoading(false);
          }
          )
        return;

      default: return;
    }

  }


  return (
    self && user && self?._id !== user?._id &&
    <>
      <div
        className="bg-transparent border-2 cursor-pointer  text-gray-600 hover:text-white py-2 px-6 rounded-lg z-50 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={(e: any) => handleOnClick(e)}
      >{isLoading ? <LoadingDots /> : text}
      </div>
      <ConfirmOverlay
        isOpen={isOpen}
        onClose={(e: any) => onClose(e)}
        onConfirm={(e: any) => onConfirm(e)}
        text={message}
        title="Confirmation"
        col="red"
        col2="gray"
      />
    </>
  );
}
