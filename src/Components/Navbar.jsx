import { MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import UseTheme from "../hooks/useTheme";
import UseSearch from "../hooks/useSearch";
import { GoSearch } from "react-icons/go";
// import Link from "next/link";

const Navbar = () => {
   const logoOrText = {
      logoUrl: "https://i.postimg.cc/qvfxTK2g/Rimberio-1.png",
      logoText: "শেয়ারবাইট"
   };

   const navLinks =
      <>
         <NavLink to={''} className="hover:text-green-600 transition-colors duration-300 py-2 px-3 rounded-xl">হোম</NavLink>
         <NavLink to={''} className="hover:text-green-600 transition-colors duration-300 py-2 px-3 rounded-xl">খাবারের তালিকা</NavLink>
         <NavLink to={''} className="hover:text-green-600 transition-colors duration-300 py-2 px-3 rounded-xl">আমার খাবার</NavLink>
         <NavLink to={''} className="hover:text-green-600 transition-colors duration-300 py-2 px-3 rounded-xl">আমার অনুরোধসমূহ</NavLink>
         <NavLink to={''} className="hover:text-green-600 transition-colors duration-300 py-2 px-3 rounded-xl">নতুন খাবার যোগ করুন</NavLink>
         <NavLink to={''} className="hover:text-green-600 transition-colors duration-300 py-2 px-3 rounded-xl">লগইন / রেজিস্ট্রেশন</NavLink>
      </>

   return (
      <div className="navbar bg-base-100 shadow-sm font-hind">
         <div className="navbar-start ">
            <div className="hidden md:flex flex-nowrap">
               {logoOrText.logoUrl ?
                  <Link><img className="w-16 h-16" src={logoOrText.logoUrl} alt={logoOrText.logoText} /></Link> :
                  <Link className="btn btn-ghost text-xl hidden md:flex">{logoOrText.logoText}</Link>
               }
            </div>
            <div className="dropdown md:hidden">
               <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu uppercase text-lg menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 py-6 ps-5 shadow">
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
            <UseSearch />
            <button className="btn btn-ghost btn-circle">
               <UseTheme />
            </button>
         </div>
      </div>
   );
};

export default Navbar;
