
import ListNav from "@/components/navbar/ListNav";

const UserLayout = ({ selected ,children }: {selected:any, children: React.ReactNode }) => {
  return (
    <>
      <div className="authUser flex">
        <div className="w-2/12"><ListNav selected={selected}/></div>
        <div className="bg-gray-300 w-7/12">{children}</div>
        <div className="bg-gray-400 w-3/12">right</div>
      </div>
    </>
  );
};

export default UserLayout;
