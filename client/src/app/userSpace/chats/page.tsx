import UserLayout from "@/layouts/UserLayout";
const Chats = () => {
  return <div>Chats</div>;
};
Chats.getLayout = function getLayout(page: React.ReactNode) {
  return <UserLayout>{page}</UserLayout>;
};
export default Chats;
