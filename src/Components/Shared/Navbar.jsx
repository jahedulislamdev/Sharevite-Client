import { Link, NavLink, useNavigate } from "react-router-dom";
import UseTheme from "../../hooks/useTheme";
import { GoSearch } from "react-icons/go";
import Sidebar from "../Sidebar";
import OpenSearchBox from "../OpenSearchBox";
import { useAuthContext, useGlobalContext } from "../../hooks/useContext";
import { FaRegUser, FaUserLarge } from "react-icons/fa6";
import useAdmin from "../../hooks/useAdmin";
import { BiLogOut } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";

// import Link from "next/link";

const Navbar = () => {
   const { navBrand } = useGlobalContext();
   const { user, logoutUser } = useAuthContext();
   const navigate = useNavigate();
   const [isAdmin] = useAdmin();
   const navlinks = <>
      <NavLink className={`hover:bg-[#06510c17] transition-colors duration-500 py-1 px-3 rounded-xl`} to={'/'}>হোম</NavLink>
      <NavLink className={`hover:bg-[#06510c17] transition-colors duration-500 py-1 px-3 rounded-xl`} to={'/projects'}>চলমান প্রকল্প</NavLink>
      <NavLink className={`hover:bg-[#06510c17] transition-colors duration-500 py-1 px-3 rounded-xl`} to={'/blog'}>ব্লগ</NavLink>
      {isAdmin && (<NavLink className={`hover:bg-[#06510c17] transition-colors duration-500 py-1 px-3 rounded-xl`} to={'/dashboard'}>ড্যাশবোর্ড</NavLink>)}
   </>

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
               <Sidebar navlinks={navlinks} />
            </div>
         </div>
         <ul className="navbar-center space-x-3 hidden md:flex bg-base-300 py-3 px-6 rounded-3xl">
            {navlinks}
         </ul>
         <div className="navbar-end ">
            {/* <button className="btn btn-ghost btn-circle" onClick={() => document.getElementById("searchMe").showModal()}>
               <GoSearch className="size-6" />
            </button>
            <OpenSearchBox /> */}
            <div className="flex justify-center items-center bg-base-200 py-1.5 px-4 rounded-4xl space-x-4">
               {user ?
                  <div>
                     <div className="dropdown dropdown-left font-noto">
                        <img tabIndex={0} role="button" className="w-7 h-7 rounded-full inline-block" src={user?.photoURL || "https://i.postimg.cc/fbZgL13k/image.png"} />
                        <ul tabIndex={0} className="mt-9 dropdown-content menu bg-base-300 rounded-box  min-w-64 z-1 p-2 shadow-sm">
                           <div className="p-2 pb-3 flex gap-x-3 cursor-default">
                              <img className="w-10 h-10 rounded-full object-cover" src={user?.photoURL || "https://i.postimg.cc/fbZgL13k/image.png"} alt="profile" />
                              <div className="opacity-80 font-onset">
                                 <h3 className="font-semibold leading-5">{user?.displayName || "Anonymous User"}</h3>
                                 <p className="font-light leading-4 text-xs">{user?.email}</p>
                              </div>
                           </div>
                           <p className="border-b border-base-100"></p>
                           <div className="mt-3 px-3 font-semibold opacity-80">
                              <Link className="flex items-center gap-2 p-3 hover:bg-base-100 duration-300 rounded-lg"><FaRegUser className="size-4.5" />প্রোফাইল</Link>
                              <Link className="flex items-center gap-2 p-3 hover:bg-base-100 duration-300 rounded-lg"><FaHistory className="size-4.5" />অনুদানসমূহ</Link>
                              <Link className="flex items-center gap-2 p-3 hover:bg-base-100 duration-300 rounded-lg"><FaRegHandshake className="size-5" />অনুদানের পেতে আবেদন করুন</Link>
                              <p className="border-b border-base-300 my-1"></p>
                              <button onClick={() => logoutUser(navigate)} className="flex items-center gap-2 p-3 w-full rounded-lg mt-1 hover:bg-red-900 hover:text-white duration-300 transition-colors"><BiLogOut className="size-5" />লগআউট </button>
                           </div>
                        </ul>
                     </div>

                  </div> :
                  <Link to={'/login'} className="btn btn-ghost btn-circle"> <FaUserLarge className="size-5" /> </Link>
               }
               <button className="btn btn-ghost btn-circle"> <UseTheme /> </button>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
