import { Outlet } from "react-router-dom";
// import Footer from "../Components/Footer";
// import Nav from "../Components/Navbar";
import UseScroll from "../hooks/useScroll";
import { Toaster } from "sonner";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {
   return (
      <div>
         <UseScroll />
         <Navbar />
         <Outlet />
         <Footer />
         <Toaster position="top-right" richColors />
      </div>
   );
};

export default MainLayout;