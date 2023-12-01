import NavBar from "@/components/navbar/MainNavBar";
import Footer from "@/components/footer";
import Curtain from "@/components/curtain";

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <Curtain/>
      {children}
      <Footer />
    </>
  );
};

export default GuestLayout;