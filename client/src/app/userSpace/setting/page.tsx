import UserLayout from "@/layouts/UserLayout";
const Setting = () => {
  return <div>Setting</div>;
};

Setting.getLayout = function getLayout(page: React.ReactNode) {
  return <UserLayout>{page}</UserLayout>;
};

export default Setting;
