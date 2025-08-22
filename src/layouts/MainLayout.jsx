import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Navbar";
import UseScroll from "../hooks/useScroll";
import { Toaster } from "sonner";

const MainLayout = () => {
   return (
      <div className="">
         <UseScroll />
         <Nav />
         <Outlet />
         <Footer />
         <Toaster position="top-center" />
      </div>
   );
};

export default MainLayout;