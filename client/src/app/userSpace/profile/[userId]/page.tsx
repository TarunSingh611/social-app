'use client';
import UserLayout from "@/layouts/UserLayout";
import UserProfile from "@/components/profile";
import apiGetUserProfileById from "@/api/user/apiGetProfileById";
import { useState, useEffect } from "react";


const Profile = ({ params }: { params: { userId: string } }) => {
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      const result: any = await apiGetUserProfileById(params.userId);
      if (result && result.statusCode === 200) {
        setUser(result.user);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.userId]);

  return (
    <>
      {user ? (
        <div>
          <UserProfile user={user} />

        </div>
      ) : null}
    </>
  );
};

Profile.getLayout = function getLayout(page: any) {
  return <UserLayout>{page}</UserLayout>;
};

export default Profile;
