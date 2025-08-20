import { Link, NavLink } from "react-router-dom";
import UseTheme from "../hooks/useTheme";
import { GoSearch } from "react-icons/go";
import { useContext } from "react";
import GlobalContext from "../contexts/create_context";
import OpenSearchBox from "./OpenSearchBox";
// import Link from "next/link";

const Navbar = () => {
   const { navElements } = useContext(GlobalContext)
   const navLinks =
      <>
         <NavLink to={'/'} className=" transition-colors duration-300 py-1 px-3 rounded-xl">হোম</NavLink>
         <NavLink to={'/available-projects'} className=" transition-colors duration-300 py-1 px-3 rounded-xl">চলমান প্রকল্প</NavLink>
         <NavLink to={'/my-donations'} className=" transition-colors duration-300 py-1 px-3 rounded-xl">আমার দান</NavLink>
         <NavLink to={'/my-requests'} className=" transition-colors duration-300 py-1 px-3 rounded-xl">আমার অনুরোধসমূহ</NavLink>
         <NavLink to={'/add-food'} className=" transition-colors duration-300 py-1 px-3 rounded-xl">নতুন খাবার যোগ করুন</NavLink>
         <NavLink to={'/login'} className=" transition-colors duration-300 py-1 px-3 rounded-xl">লগইন / রেজিস্ট্রেশন</NavLink>
      </>

   return (
      <div className="navbar bg-base-100 shadow-sm font-hind sticky top-0 backdrop-blur-3xl z-50">
         <div className="navbar-start ">
            <div className="hidden md:flex flex-nowrap">
               {navElements.logoUrl ?
                  <Link><img className="w-16 h-16 rounded-full" src={navElements.logoUrl} alt={navElements.logoText} /></Link> :
                  <Link className="btn btn-ghost text-xl hidden md:flex">{navElements.logoText}</Link>
               }
            </div>
            <div className="dropdown md:hidden">
               <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu uppercase text-lg menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 py-6 shadow">
                  {navLinks}
               </ul>
            </div>
         </div>
         <div className="navbar-center space-x-1 hidden md:flex">
            {navLinks}
         </div>
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
