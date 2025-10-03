import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useContext";
import { GoArrowLeft, GoFileDirectory, GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { useState } from "react";
import { MdDashboard, MdOutlineCampaign, MdPeople, MdVolunteerActivism } from "react-icons/md";
import { FaDonate, FaUsersCog, FaBloggerB, FaBell, FaUser, FaRegUser } from "react-icons/fa";
import { GoReport } from "react-icons/go";
import { AiOutlineSetting } from "react-icons/ai";
import { RiDonutChartLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { FcAddDatabase, FcDataConfiguration } from "react-icons/fc";
import { CiSettings } from "react-icons/ci";
import { FiActivity } from "react-icons/fi";
import { BiLogOut, BiSolidEnvelopeOpen } from "react-icons/bi";
import UseTheme from "../../hooks/useTheme";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { Toaster } from "sonner";

const dashboardNavLinks = [
   {
      label: "Overview",
      path: "overview",
      icon: <MdDashboard className="text-lg" />,
   },
   {
      label: "Campaigns",
      icon: <MdOutlineCampaign className="text-lg" />,
      children: [
         { label: "Add Campaign", path: "campaigns/add", icon: <FcAddDatabase /> },
         { label: "All Campaigns", path: "all-campaign", icon: <MdOutlineCampaign /> },
      ],
   },
   {
      label: "Donations",
      icon: <FaDonate className="text-lg" />,
      children: [
         { label: "Fund Overview", path: "donations/overview", icon: <RiDonutChartLine /> },
         { label: "Transactions", path: "donations/transactions", icon: <RiDonutChartLine /> },
         { label: "Permanent Donors", path: "donations/permanent-donors", icon: <FaDonate /> },
      ],
   },
   {
      label: "Users",
      icon: <MdPeople className="text-lg" />,
      children: [
         { label: "All Users", path: "users", icon: <MdPeople /> },
         { label: "Roles & Permissions", path: "users/roles", icon: <FaUsersCog /> },
         { label: "Volunteers", path: "users/volunteers", icon: <MdVolunteerActivism /> },
      ],
   },
   {
      label: "Blog",
      icon: <FaBloggerB className="text-lg" />,
      children: [
         { label: "Add Post", path: "blog/add", icon: <FaBloggerB /> },
         { label: "All Posts", path: "blog", icon: <FaBloggerB /> },
      ],
   },
   {
      label: "Site Config",
      icon: <FcDataConfiguration className="text-lg" />,
      children: [
         { label: "Navbar Settings", path: "site-config/navbar", icon: <IoIosSettings /> },
         { label: "Footer Settings", path: "site-config/footer", icon: <IoIosSettings /> },
         { label: "General Settings", path: "site-config/general", icon: <IoIosSettings /> },
      ],
   },
   {
      label: "Reports",
      path: "reports",
      icon: <GoReport className="text-lg" />,
   },
   {
      label: "Settings",
      icon: <AiOutlineSetting className="text-lg" />,
      children: [
         { label: "Profile", path: "settings/profile", icon: <AiOutlineSetting /> },
         { label: "Account", path: "settings/account", icon: <AiOutlineSetting /> },
      ],
   },
];
const AdminPanel = () => {
   const { navBrand } = useGlobalContext();
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   const navigate = useNavigate();
   const [openIndex, setOpenIndex] = useState(null)
   const location = useLocation()

   // handle navigate 
   const handleNavigate = (link, idx) => {

      if (link.children) {
         setOpenIndex(openIndex === idx ? null : idx);
      } else {
         navigate(link.path);
         setOpenIndex(null);
      }
   };

   // notification array 
   const notifications = [
      {
         id: 1,
         name: "Jeremiah Minsk",
         imageUrl: "https://ecme-next.themenate.net/img/avatars/thumb-2.jpg",
         message: " mentioned your in comment",
         time: " 2 minutes ago"
      },
      {
         id: 1,
         name: "Max Alexander",
         imageUrl: "https://ecme-next.themenate.net/img/avatars/thumb-3.jpg",
         message: "invited you to new project.",
         time: " 10 minutes ago"
      },
      {
         id: 1,
         name: "Shannon Baker",
         imageUrl: "https://ecme-next.themenate.net/img/avatars/thumb-4.jpg",
         message: "comment in your ticket",
         time: " 1 day ago"
      },
      {
         id: 1,
         name: "Jhone doe",
         imageUrl: "https://ecme-next.themenate.net/img/avatars/thumb-4.jpg",
         message: "you request has been approved",
         time: " 2 day ago"
      },
      {
         id: 1,
         name: "Jeremiah Minsk",
         imageUrl: "https://ecme-next.themenate.net/img/avatars/thumb-2.jpg",
         message: "mentioned your in project",
         time: " 5 months ago"
      },
   ]

   // heighlight active parent 
   const isParentActive = (link) => {
      if (!link.children) return false;
      return link.children.some(c => location.pathname.includes(c.path));
   };

   return (
      <section className="flex transition-all duration-300 font-onset" >
         <aside
            className={`shadow-xl p-2 overflow-auto rounded-lg transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"} h-[620px] scrollbar-hide`}>
            <div className="flex justify-between items-center">
               <Link to={'/'} className="cursor-pointer flex justify-center items-center gap-2 hover:bg-base-300 p-2 rounded-md transition-colors duration-500">
                  <img className="w-8 h-8 rounded-full" src={navBrand.logoUrl} alt={navBrand.logoText} />
                  {isSidebarOpen && <p className=" font-hind font-semibold">{navBrand.logoText} </p>}
               </Link>
               <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hover:bg-base-300 p-2 rounded-full cursor-pointer duration-500">
                  {isSidebarOpen ? <GoSidebarExpand className="size-5" /> :
                     <GoSidebarCollapse className="size-5" />}
               </button>
            </div>
            <div className="mt-3.5 space-y-3">
               {
                  dashboardNavLinks?.map((link, index) => (
                     <ul className="space-y-5" key={index}>
                        <div className={`collapse bg-base-100 ${link.children && "collapse-arrow"} ${openIndex === index && "collapse-open hover:bg-base-100"} hover:bg-base-200  transition-all duration-500`}>
                           <div
                              onClick={() => handleNavigate(link, index)}
                              className={`collapse-title font-semibold text-gray-500 flex items-center gap-x-3 ${location.pathname.endsWith(link.path) && "bg-green-800 text-white font-semibold"} ${isParentActive(link) && "bg-green-800 text-white"}`}>
                              {link.icon} {isSidebarOpen && link.label}
                           </div>
                           {link.children &&
                              <div className="collapse-content text-sm">
                                 <ul className="  mt-3">
                                    {
                                       link.children.map((c, i) => (
                                          <li key={i} onClick={() => navigate(c.path)} className={`${location.pathname.endsWith(c.path) && "text-green-500 font-semibold"} hover:bg-base-200 cursor-pointer transition-colors duration-300 py-4 px-3 rounded-md`}>
                                             <p className="flex items-center gap-x-3 "><span>{c.icon}</span>{c.label}</p>
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
         <main className="flex-1 rounded-lg">
            {/* addmin navar */}
            <header className="flex items-center justify-between rounded p-2 shadow-xl">
               <div className="flex gap-x-3 items-center">
                  <button className="  rounded-s-3xl bg-base-100 hover:bg-base-300 p-2 cursor-pointer duration-500"><GoArrowLeft className="size-5 ms-2" /></button>
                  {/* file path */}
                  <div className="breadcrumbs text-sm text-gray-500">
                     <ul>
                        <li><Link><GoFileDirectory className="me-1" /> Dashboard</Link></li>
                        <li><Link><GoFileDirectory className="me-1" /> Campaign</Link></li>
                        <li><HiOutlineDocumentAdd className="size-4 me-1" /> Add Campaign</li>
                     </ul>
                  </div>
               </div>
               <div className="flex items-center gap-x-4">
                  <button className=" cursor-pointer hover:bg-base-300 p-2 rounded-full transition-colors duration-300"  >
                     <UseTheme />
                  </button>
                  <button popoverTarget="notification" className="indicator cursor-pointer hover:bg-base-300  rounded-full transition-colors duration-300" style={{ anchorName: "--anchor-1" }}>
                     <span className="indicator-item status status-error"></span>
                     <FaBell className="size-5" />
                  </button>
                  <button popoverTarget="adminProfile" className=" cursor-pointer hover:bg-base-300 p-3 rounded-full transition-colors duration-300" style={{ anchorName: "--anchor-1" }}>
                     <FaUser className="size-5" />
                  </button>
                  {/* dropdown admin profile */}
                  <div className="dropdown dropdown-left menu w-[260px] mt-13.5 rounded-box bg-base-100 shadow-lg"
                     popover="auto" id="adminProfile" style={{ positionAnchor: "--anchor-1" }}>
                     <div className="p-2 pb-3 flex gap-x-3">
                        <img className="w-10 h-10 rounded-full object-cover" src="https://i.ibb.co.com/d0xVSvNv/IMG-20230521-184358-844-01-01.jpg" alt="" />
                        <div className="opacity-80">
                           <h3 className="font-semibold leading-5">Jahedul Islam Jishan</h3>
                           <p className="font-light leading-4">admin@gamil.com</p>
                        </div>
                     </div>
                     <p className="border-b border-gray-300"></p>
                     <div className="mt-3 px-3 font-semibold opacity-70">
                        <Link className="flex items-center gap-2 p-3 hover:bg-base-200 rounded-lg"><FaRegUser className="size-4.5" />Profile</Link>
                        <Link className="flex items-center gap-2 p-3 hover:bg-base-200 rounded-lg"><CiSettings className="size-5" />Account Settings</Link>
                        <Link className="flex items-center gap-2 p-3 hover:bg-base-200 rounded-lg"><FiActivity className="size-5" />Activity Log</Link>
                        <p className="border-b border-base-300 my-1"></p>
                        <button className="flex items-center gap-2 p-3 w-full rounded-lg mt-1 bg-red-900 text-white"><BiLogOut className="size-5" />Logout </button>
                     </div>
                  </div>
                  {/* dropdown menu notification  */}
                  <ul className="dropdown dropdown-left menu w-[340px]  mt-13.5 rounded-box bg-base-100 shadow-lg"
                     popover="auto" id="notification" style={{ positionAnchor: "--anchor-1" }}>
                     <div className="p-2">
                        <div className="flex justify-between items-center">
                           <h3 className="font-semibold">Notifications</h3>
                           <BiSolidEnvelopeOpen className="size-5 text-green-800" />
                        </div>
                        <div className="space-y-3 h-[280px] overflow-auto scrollbar-hide">
                           {notifications.map((n, index) => (<Link key={index} to={""} className="flex gap-x-3 mt-4 hover:bg-base-200 p-2 rounded-lg border-b border-b-base-300">
                              <img className="w-10 h-10 rounded-full object-cover" src={n.imageUrl} alt="img" />
                              <div>
                                 <p className="font-medium opacity-70"> {n.name}<span className="font-light"> {n.message}.</span></p>
                                 <p className="text-xs font-extralight opacity-50">{n.time}</p>
                              </div>
                           </Link>))}
                        </div>
                        <button className="btn bg-green-800 w-full rounded-xl text-gray-300">View All Activity</button>
                     </div>
                  </ul>
               </div>

            </header>
            <div className=" h-[540px] p-3 scrollbar-hide overflow-auto ">
               <Outlet />
            </div>
         </main>
         <Toaster position="top-right" richColors />
      </section>
   );
};

export default AdminPanel;