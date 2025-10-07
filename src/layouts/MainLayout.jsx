import { Outlet } from "react-router-dom";
// import Footer from "../Components/Footer";
// import Nav from "../Components/Navbar"; 
import { Toaster } from "sonner";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import UseScroll from "../hooks/UseScroll";

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