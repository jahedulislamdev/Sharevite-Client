import { Link, NavLink, useNavigate } from "react-router-dom";
import UseTheme from "../../hooks/useTheme";
import { GoSearch } from "react-icons/go";
import Sidebar from "../Sidebar";
import OpenSearchBox from "../OpenSearchBox";
import { useAuthContext, useGlobalContext } from "../../hooks/useContext";
// import Link from "next/link";

const Navbar = () => {
   const { navBrand, navLinks } = useGlobalContext();
   const { user, logoutUser } = useAuthContext();
   const navigate = useNavigate();
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
         <ul className="navbar-center space-x-2 hidden md:flex bg-base-200 py-3 px-6 rounded-3xl">
            {
               navLinks?.map((link, idx) => <NavLink key={idx} to={link.path} className="hover:bg-[#06510c29] transition-colors duration-500 py-1 px-3 rounded-xl">{link.label}</NavLink>)
            }
            {!user ?
               <li><NavLink to={'/login'} className="hover:bg-[#06510c29] transition-colors duration-500 py-1 px-3 rounded-xl">লগইন/ রেজিষ্ট্রেশন</NavLink></li> :
               <li><button onClick={() => logoutUser(navigate)} className="hover:bg-[#06510c29] transition-colors duration-500 py-1 px-3 rounded-xl cursor-pointer" >লগআউট</button></li>}
         </ul>
         <div className="navbar-end">
            {/* <button className="btn btn-ghost btn-circle" onClick={() => document.getElementById("searchMe").showModal()}>
               <GoSearch className="size-6" />
            </button>
            <OpenSearchBox /> */}
            <button className="btn btn-ghost btn-circle">
               <UseTheme />
            </button>
         </div>
      </div>
   );
};

export default Navbar;
