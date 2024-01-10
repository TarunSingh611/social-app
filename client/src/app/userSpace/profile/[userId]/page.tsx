
import UserLayout from "@/layouts/UserLayout";
import UserProfile from "@/components/profile";
import apiGetUserProfileById from "@/api/user/apiGetProfileById";

const  Profile = async ({ params }: { params: {userId: string } }) => {
  let user :any = null;
  const result:any = await apiGetUserProfileById(params.userId);
  if(result && result.statusCode === 200){
   user = result.user
  }
  console.log(user)
return user ? <UserProfile user={user} /> : null;
  

};

Profile.getLayout = function getLayout(page: any) {
  return <UserLayout>{page}</UserLayout>;
};



export default Profile;
