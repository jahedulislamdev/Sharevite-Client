import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Navbar";

const MainLayout = () => {
   return (
      <div className="">
         <Nav />
         <Outlet />
         <Footer />
      </div>
   );
};

export default MainLayout;