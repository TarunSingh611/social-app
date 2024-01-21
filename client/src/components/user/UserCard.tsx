import secrets from "@/config/secrets";
import FollowButton from "@/components/followButton/FollowButton";
import { useRouter } from "next/navigation";


const UserCard = ({ user, setUser }: any) => {

  const router = useRouter();
  const handleClick = () => {
    router.push(`/userSpace/profile/${user._id}`);
  }

  return (user &&
    <div className="flex bg-whiterounded-lg shadow-md p-2 w-11/12 hover:cursor-pointer" onClick={handleClick}>
      <div className="w-1/12 mx-4 my-2 h-auto !object-cover">
        <img
          className="w-full h-full object-cover rounded-full"
          src={
            user?.profilePicture
              ? secrets.NEXT_PUBLIC_PROFILE_IMAGE_URL +
              user?.profilePicture
              : secrets.ProfilePicture(user?.gender)
          }
          alt="Profile"
        />
      </div>
      <div className="my-auto">{user?.username}</div>
      <div className="ml-auto mr-2 my-auto">
        {user?._id && (
          <FollowButton user={user} setUser={setUser} />
        )}
      </div>
    </div>
  );
};

export default UserCard;
