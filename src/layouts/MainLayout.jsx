import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Navbar";
import UseScroll from "../hooks/useScroll";

const MainLayout = () => {
   return (
      <div className="">
         <UseScroll />
         <Nav />
         <Outlet />
         <Footer />
      </div>
   );
};

export default MainLayout;