import { useContext } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
import GlobalContext from "../contexts/create_global_context";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useContext";

const Sidebar = () => {
   const { user } = useAuthContext();
   const { navLinks, navBrand, autoCloseSidebar, loginLink, logoutLink } = useContext(GlobalContext);

   return (
      <div className="drawer">
         {/* Drawer controller */}
         <input id="closeSidebar" type="checkbox" className="drawer-toggle" />

         {/* Page Content */}
         <div className="drawer-content">
            <label htmlFor="closeSidebar" className="drawer-button cursor-pointer">
               <CiMenuBurger className="size-6" />
            </label>
         </div>

         {/* Drawer Sidebar */}
         <div className="drawer-side ">
            {/* Overlay for closing on outside click */}
            <label htmlFor="closeSidebar" aria-label="close sidebar" className="drawer-overlay"></label>

            <div className="menu bg-base-200  text-base-content min-h-full w-72  p-4 relative">
               <div className="mb-3 flex justify-between items-center pb-4">
                  {navBrand && navBrand?.logoText ? <h1 className="font-semibold text-xl">{navBrand.logoText}</h1> :
                     <img className="w-12 h-12 object-cover rounded-full" src={navBrand.logoUrl} alt={navBrand.logoText} />}
                  <label htmlFor="closeSidebar" className=" bg-red-900/20 p-1.5 rounded-full">
                     {/* Manual close button */}
                     <HiXMark className="size-6 text-red-600 font-bold" />
                  </label>
               </div>

               {/* Sidebar items → auto-close on click */}
               <ul className="flex flex-col space-y-5">
                  {
                     navLinks?.map((link, idx) =>
                        <NavLink
                           onClick={autoCloseSidebar}
                           key={idx} to={link.path}
                           className="text-base transition-colors duration-300 py-1 px-3 rounded-lg ">
                           {link.label}
                        </NavLink>)
                  }
                  {user ? logoutLink : loginLink}
               </ul>
            </div>
         </div>
      </div >
   );
};

export default Sidebar;
