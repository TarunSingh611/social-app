"use client";
import UserLayout from "@/layouts/UserLayout";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiGetFeed from "@/api/feed/apiGetFeed";
import UserFeed from "@/components/feed/UserFeed";
import { useSelector } from "react-redux";
const Feed = () => {
  const [feed, setFeed] = useState([]);
  const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    if (user) {
      apiGetFeed()
        .then((res: any) => {
          if (res.statusCode === 200) {
            setFeed(res.data);
          }
        })
        .catch((err: any) => {
          toast.error(err.message);
        });
    }
  }, [user]);
  return feed&&<UserFeed feed={feed} />;
};

Feed.getLayout = function getLayout(page: React.ReactNode) {
  return <UserLayout>{page}</UserLayout>;
};

export default Feed;
