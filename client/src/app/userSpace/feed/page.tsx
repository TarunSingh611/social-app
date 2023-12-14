import UserLayout from "@/layouts/UserLayout";
const Feed = () => {
  return <div>Feed</div>;
};

Feed.getLayout = function getLayout(page: React.ReactNode) {
  return <UserLayout>{page}</UserLayout>;
};

export default Feed;
