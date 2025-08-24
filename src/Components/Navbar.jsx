import { Link, NavLink } from "react-router-dom";
import UseTheme from "../hooks/useTheme";
import { GoSearch } from "react-icons/go";
import OpenSearchBox from "./OpenSearchBox";
import Sidebar from "./Sidebar";
import { useAuthContext, useGlobalContext } from "../hooks/useContext";
// import Link from "next/link";

const Navbar = () => {
   const { navBrand, navLinks, logoutLink, loginLink } = useGlobalContext();
   const { user } = useAuthContext();
   return (
      <div className="navbar bg-base-100 shadow-sm font-hind sticky top-0 backdrop-blur-3xl z-50">
         <div className="navbar-start ">
            <div className="hidden md:flex flex-nowrap">
               {navBrand.logoUrl ?
                  <Link><img className="w-16 h-16 rounded-full" src={navBrand.logoUrl} alt={navBrand.logoText} /></Link> :
                  <Link className="btn btn-ghost text-xl hidden md:flex">{navBrand.logoText}</Link>
               }
            </div>
            <div className="dropdown md:hidden">
               <Sidebar />
            </div>
         </div>
         <ul className="navbar-center space-x-2 hidden md:flex">
            {
               navLinks?.map((link, idx) => <NavLink key={idx} to={link.path} className="hover:bg-[#06510c29] transition-colors duration-500 py-1 px-3 rounded-xl">{link.label}</NavLink>)
            }
            {user ? logoutLink : loginLink}
         </ul>
         <div className="navbar-end">
            <button className="btn btn-ghost btn-circle" onClick={() => document.getElementById("searchMe").showModal()}>
               <GoSearch className="size-6" />
            </button>
            <OpenSearchBox />
            <button className="btn btn-ghost btn-circle">
               <UseTheme />
            </button>
         </div>
      </div>
   );
};

export default Navbar;
