import UserLayout from "@/layouts/UserLayout";
const Post = () => {
  return <div>Post</div>;
};

Post.getLayout = function getLayout(page: React.ReactNode) {
  return <UserLayout>{page}</UserLayout>;
};

export default Post;
