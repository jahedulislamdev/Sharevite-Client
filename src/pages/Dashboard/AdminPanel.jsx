import { Link, NavLink, Outlet } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useContext";
import { GoArrowLeft, GoFileDirectory, GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { useState } from "react";
import { HiOutlineDocumentAdd } from "react-icons/hi";
// dashboardNavLinks.js
import { MdDashboard, MdOutlineCampaign, MdPeople, MdVolunteerActivism } from "react-icons/md";
import { FaDonate, FaUsersCog, FaBloggerB, FaBell, FaUser, FaRegUser } from "react-icons/fa";
import { GoReport } from "react-icons/go";
import { AiOutlineSetting } from "react-icons/ai";
import { RiDonutChartLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { FcAddDatabase, FcDataConfiguration } from "react-icons/fc";
import { CiSettings } from "react-icons/ci";
import { FiActivity } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

const AdminPanel = () => {
   const { navBrand } = useGlobalContext();
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   // dashboardNavLinks.js
   const dashboardNavLinks = [
      {
         label: "Overview",
         path: "/dashboard/overview",
         icon: <MdDashboard className="text-lg" />,
      },
      {
         label: "Campaigns",
         icon: <MdOutlineCampaign className="text-lg" />,
         children: [
            { label: "Add Campaign", path: "/dashboard/campaigns/add", icon: <FcAddDatabase /> },
            { label: "All Campaigns", path: "/dashboard/campaigns", icon: <MdOutlineCampaign /> },
         ],
      },
      {
         label: "Donations",
         icon: <FaDonate className="text-lg" />,
         children: [
            { label: "Fund Overview", path: "/dashboard/donations/overview", icon: <RiDonutChartLine /> },
            { label: "Transactions", path: "/dashboard/donations/transactions", icon: <RiDonutChartLine /> },
            { label: "Permanent Donors", path: "/dashboard/donations/permanent-donors", icon: <FaDonate /> },
         ],
      },
      {
         label: "Users",
         icon: <MdPeople className="text-lg" />,
         children: [
            { label: "All Users", path: "/dashboard/users", icon: <MdPeople /> },
            { label: "Roles & Permissions", path: "/dashboard/users/roles", icon: <FaUsersCog /> },
            { label: "Volunteers", path: "/dashboard/users/volunteers", icon: <MdVolunteerActivism /> },
         ],
      },
      {
         label: "Blog",
         icon: <FaBloggerB className="text-lg" />,
         children: [
            { label: "Add Post", path: "/dashboard/blog/add", icon: <FaBloggerB /> },
            { label: "All Posts", path: "/dashboard/blog", icon: <FaBloggerB /> },
         ],
      },
      {
         label: "Site Config",
         icon: <FcDataConfiguration className="text-lg" />,
         children: [
            { label: "Navbar Settings", path: "/dashboard/site-config/navbar", icon: <IoIosSettings /> },
            { label: "Footer Settings", path: "/dashboard/site-config/footer", icon: <IoIosSettings /> },
            { label: "General Settings", path: "/dashboard/site-config/general", icon: <IoIosSettings /> },
         ],
      },
      {
         label: "Reports",
         path: "/dashboard/reports",
         icon: <GoReport className="text-lg" />,
      },
      {
         label: "Settings",
         icon: <AiOutlineSetting className="text-lg" />,
         children: [
            { label: "Profile", path: "/dashboard/settings/profile", icon: <AiOutlineSetting /> },
            { label: "Account", path: "/dashboard/settings/account", icon: <AiOutlineSetting /> },
         ],
      },
   ];


   return (
      <section className="flex gap-3 m-1 transition-all duration-300 font-onset" >
         <aside className={` shadow  p-2 overflow-auto rounded-lg transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"} h-screen scrollbar-hide`}>
            <div className="flex justify-between items-center">
               <button className="cursor-pointer flex justify-center items-center gap-2 hover:bg-base-300 p-2 rounded-md transition-colors duration-500">
                  <img className="w-8 h-8 rounded-full" src={navBrand.logoUrl} alt={navBrand.logoText} />
                  {isSidebarOpen && <p className=" font-hind font-semibold">{navBrand.logoText} </p>}
               </button>
               <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hover:bg-gray-200 p-2 rounded-full cursor-pointer duration-500">
                  {isSidebarOpen ? <GoSidebarExpand className="size-5" /> :
                     <GoSidebarCollapse className="size-5" />}
               </button>
            </div>
            <div>
               {
                  dashboardNavLinks?.map((link, index) => (
                     <ul className="space-y-6" key={index}>
                        <div className={`collapse bg-base-100 ${link.children && "collapse-arrow"}   hover:bg-gray-100  transition-colors duration-300`}>
                           <input type="checkbox" />
                           <div className={`collapse-title font-semibold flex items-center gap-3 text-gray-700`}><span>{link.icon}</span>{isSidebarOpen && link.label}</div>
                           {link.children &&
                              <div className="collapse-content text-sm">
                                 <ul className="  mt-3">
                                    {
                                       link.children.map((c, i) => (
                                          <li key={i} className="hover:bg-gray-200 transition-colors duration-300 py-4 px-3 flex items-center gap-x-3 rounded-md">
                                             <span>{c.icon}</span><NavLink to={c.path}>{c.label}</NavLink>
                                          </li>
                                       ))
                                    }
                                 </ul>
                              </div>
                           }
                        </div>
                     </ul>
                  ))
               }

            </div>
         </aside>
         <main className="shadow-xl p-2 flex-1 rounded-lg">
            {/* addmin navar */}
            <header className="flex items-center justify-between rounded p-2 shadow">
               <div className="flex gap-x-3 items-center">
                  <button className="  rounded-s-3xl bg-gray-100 hover:bg-gray-200 p-2 cursor-pointer duration-500"><GoArrowLeft className="size-5 ms-2" /></button>
                  {/* file path */}
                  <div className="breadcrumbs text-sm">
                     <ul>
                        <li><Link><GoFileDirectory className="me-1" /> Dashboard</Link></li>
                        <li><Link><GoFileDirectory className="me-1" /> Campaign</Link></li>
                        <li><HiOutlineDocumentAdd className="size-4 me-1" /> Add Campaign</li>
                     </ul>
                  </div>
               </div>
               <div>
                  <button className=" cursor-pointer hover:bg-gray-200 p-3 rounded-full transition-colors duration-300"><FaBell className="size-5" /></button>
                  <button popoverTarget="adminProfile" className=" cursor-pointer hover:bg-gray-200 p-3 rounded-full transition-colors duration-300" style={{ anchorName: "--anchor-1" }}>
                     <FaUser className="size-5" />
                  </button>
                  {/* dropdown admin profile */}
                  <div className="dropdown dropdown-left menu w-[260px] mt-14 rounded-box bg-base-100 shadow-lg"
                     popover="auto" id="adminProfile" style={{ positionAnchor: "--anchor-1" }}>
                     <div className="p-2 pb-3 flex gap-x-3">
                        <img className="w-10 h-10 rounded-full object-cover" src="https://ecme-next.themenate.net/img/avatars/thumb-1.jpg" alt="" />
                        <div className="">
                           <h3 className="font-semibold leading-5">Angelina Gotelli</h3>
                           <p className="font-light leading-4">admin-01@ecme.com</p>
                        </div>
                     </div>
                     <p className="border-b border-gray-300"></p>
                     <div className="mt-3 px-3 text-gray-700 font-semibold">
                        <Link className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded-lg"><FaRegUser className="size-4.5" />Profile</Link>
                        <Link className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded-lg"><CiSettings className="size-5" />Account Settings</Link>
                        <Link className="flex items-center gap-2 p-3 hover:bg-gray-200 rounded-lg"><FiActivity className="size-5" />Activity Log</Link>
                        <p className="border-b border-gray-300 my-1"></p>
                        <button className="flex items-center gap-2 p-3 hover:bg-gray-200 w-full rounded-lg"><BiLogOut className="size-5" />Logout </button>
                     </div>
                  </div>
               </div>

            </header>
            <div>
               <Outlet />
            </div>
         </main>
      </section>
   );
};

export default AdminPanel;