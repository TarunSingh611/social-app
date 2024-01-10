
import UserLayout from "@/layouts/UserLayout";
import UserProfile from "@/components/profile";
import apiGetUserProfileById from "@/api/user/apiGetProfileById";

const  Profile = async ({ params }: { params: {userId: string } }) => {
  const user = await apiGetUserProfileById(params.userId);
  console.log(user)
return user ? <UserProfile user={user} /> : null;
  

};

Profile.getLayout = function getLayout(page: any) {
  return <UserLayout>{page}</UserLayout>;
};



export default Profile;
