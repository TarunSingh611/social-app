import NavBar from "@/components/navbar/MainNavBar";
import Footer from "@/components/footer";

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default GuestLayout;