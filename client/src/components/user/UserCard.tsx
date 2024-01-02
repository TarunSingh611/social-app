import { useEffect, useState } from "react";
import secrets from "@/config/secrets";
import apiGetUserName from "@/api/user/apiGetUserName";

interface User {
  username: string|null;
  profilePicture: string|null;
  gender: string|null;
  birthday: string|null;
}
const UserCard = ({ user }: any) => {
console.log(user)

  return (user &&
    <div className="flex bg-whiterounded-lg shadow-md p-2 w-11/12">
      <div className="w-1/12 mx-4 my-2 h-auto !object-cover">
        <img
          className="w-full h-full object-cover rounded-full"
          src={
            user?.profilePicture
              ? secrets.NEXT_PUBLIC_API_URL +
                "/public/profilePictures/" +
                user?.profilePicture
              : secrets.ProfilePicture(user?.gender)
          }
          alt="Profile"
        />
      </div>
      <div className="my-auto">{user?.username}</div>
    </div>
  );
};

export default UserCard;
