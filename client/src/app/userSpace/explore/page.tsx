import UserLayout from "@/layouts/UserLayout";
const Explore = () => {
  return <div>Explore</div>;
};

Explore.getLayout = function getLayout(page: React.ReactNode) {
  return <UserLayout>{page}</UserLayout>;
};

export default Explore;
