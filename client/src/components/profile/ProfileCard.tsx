import secrets from "@/config/secrets";
import { useRouter } from "next/navigation";
import { useEffect, useRef ,useState} from "react";
import FollowButton from "@/components/followButton/FollowButton";
import { useSelector } from "react-redux";

const ProfileCard = ({ user , setUser = () => {}}:any) => {
  const containerRef = useRef<HTMLParagraphElement>(null);


  useEffect(() => {
    const containerWidth = containerRef.current!.offsetWidth;
    const textWidth = containerRef.current!.scrollWidth;

    if (textWidth > containerWidth) {
      containerRef.current!.textContent = user?.firstName;
    }
  }, [user]);

  return (
    <div className="bg-whiterounded-lg relative shadow-md p-6">
      <div className="absolute bg-gray-200 left-0 top-0  w-full h-40 !object-cover">
        <img
          className="w-full h-full object-cover"
          src={
            user?.coverPhoto
              ? secrets.NEXT_PUBLIC_API_URL + "/public/coverPhotos/" + user?.coverPhoto
              : secrets.NEXT_PUBLIC_API_URL + "/public/DP_defaulters/Cover.webp"
          }
          alt="Profile"
        />
      </div>

      <div className="flex relative flex-col md:flex-row w-full">
        <div className="w-full md:w-5/12 h-auto !object-contain">
          <img
            className="sm:w-32 sm:h-32 mx-auto md:w-40 md:h-40 lg:w-48 lg:h-48 p-1 sm:p-2 md:p-3 lg:p-4 rounded-full object-cover"
            src={
              user?.profilePicture
                ? secrets.NEXT_PUBLIC_API_URL + "/public/profilePictures/" + user?.profilePicture
                : secrets.ProfilePicture(user?.gender)
            }
            alt="Profile"
          />
        </div>

        <div className="flex w-full md:w-7/12  flex-col sm:flex-row items-end space-x-4">
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
      <div className="flex flex-col">
        <p
          className="w-full md:w-5/12 text-center text-lg font-bold overflow-hidden text-ellipsis"
          ref={containerRef}
        >
          {user?.fullName}
        </p>

        <p className="text-gray-500">{user?.bio || ""}</p>
      </div>
    </div>
  );
};

export default ProfileCard;

const ProfileSearchCard = ({ user  }:any) => {
  const router = useRouter();
  const [userLocal, setUser] = useState({} as any);
  const self = useSelector((state: any) => state.auth.user);
  const handleCardClick = () => {
    router.push(`/userSpace/profile/${user._id}`);
  };
  useEffect(() => {
    if (Object.keys(userLocal).length === 0 && Object.keys(user).length) {
      setUser(user);
    }
  },[user])


  return (
    <div
      className="flex bg-white rounded-lg relative shadow-md p-6 my-4 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="w-1/4 h-1/4 overflow-hidden">
        <img
          className="w-1/2 h-1/2 object-fit rounded-full"
          src={
            userLocal?.profilePicture
              ? secrets.NEXT_PUBLIC_API_URL + "/public/profilePictures/" + userLocal?.profilePicture
              : secrets.ProfilePicture(userLocal?.gender)
          }
          alt="Profile"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-bold mb-2">{userLocal?.fullName}</p>
        <p className="text-gray-500 text-left">{userLocal?.username || ""}</p>
      </div>
      <div className="ml-auto mr-2 my-auto">
        {userLocal?._id && self._id !== userLocal._id && (
          <FollowButton user={userLocal} setUser={setUser}/>
        )}
      </div>
    </div>
  );
};

export {ProfileSearchCard}