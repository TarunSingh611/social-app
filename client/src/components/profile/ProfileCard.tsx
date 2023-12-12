import secrets from "@/config/secrets";
import { useEffect, useRef } from "react";
const ProfileCard = ({ user }: { user: any }) => {

    const containerRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const containerWidth = containerRef.current!.offsetWidth;
        const textWidth = containerRef.current!.scrollWidth;
    
        if (textWidth > containerWidth) {
            containerRef.current!.textContent = user?.firstName;
          }
      }, [user]);
      
  return (
    <div className="bg-whiterounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-5/12 h-auto !object-contain">
          <img
            className="sm:w-32 sm:h-32 mx-auto md:w-40 md:h-40 lg:w-48 lg:h-48 p-1 sm:p-2 md:p-3 lg:p-4 rounded-full object-cover"
            src={user?.profilePicture || secrets.ProfilePicture(user?.gender)}
            alt="Profile"
          />
        </div>

        <div className="flex w-full md:w-7/12 flex-col sm:flex-row items-center space-x-4">
          <p className="flex w-full md:w-1/3 items-center flex-col">
            <strong>{user?.followersCount}</strong>
            <strong>Followers</strong>
          </p>
          <p className="flex  w-full md:w-1/3 items-center flex-col">
            <strong>{user?.followingCount}</strong>
            <strong>Following</strong>
          </p>
          <p className="flex w-full md:w-1/3 items-center flex-col">
            <strong>{user?.postsCount}</strong>
            <strong>Posts</strong>
          </p>
        </div>
      </div>
      <div className="flex">
        
      <p className="w-full md:w-5/12 text-center text-lg font-bold overflow-hidden text-ellipsis" ref={containerRef}>
      {user?.firstName + " " + user?.lastName}
    </p>

        <p className="text-gray-500">{user?.bio || ""}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
