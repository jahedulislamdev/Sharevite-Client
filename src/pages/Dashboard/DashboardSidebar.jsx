import { MdDashboard, MdOutlineCampaign, MdPeople, MdVolunteerActivism } from "react-icons/md";
import { FcAddDatabase, FcDataConfiguration } from "react-icons/fc";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaDonate, FaUsersCog, FaBloggerB } from "react-icons/fa";
import { useGlobalContext } from "../../hooks/useContext";
import { AiOutlineSetting } from "react-icons/ai";
import { RiDonutChartLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { GoReport } from "react-icons/go";
import { useState } from "react";

const dashboardNavLinks = [
   {
      label: "Overview",
      path: "overview",
      icon: <MdDashboard className="text-lg" />
   },
   {
      label: "Campaigns",
      icon: <MdOutlineCampaign className="text-lg" />,
      children: [
         { label: "Add Campaign", path: "campaigns/add", icon: <FcAddDatabase /> },
         { label: "All Campaigns", path: "campaigns", icon: <MdOutlineCampaign /> }
      ],
   },
   {
      label: "Donations",
      icon: <FaDonate className="text-lg" />,
      children: [
         { label: "Fund Overview", path: "donations/overview", icon: <RiDonutChartLine /> },
         { label: "Transactions", path: "donations/transactions", icon: <RiDonutChartLine /> },
         { label: "Permanent Donors", path: "donations/permanent-donors", icon: <FaDonate /> }
      ],
   },
   {
      label: "Users",
      icon: <MdPeople className="text-lg" />,
      children: [
         { label: "All Users", path: "users", icon: <MdPeople /> },
         { label: "Roles & Permissions", path: "users/roles", icon: <FaUsersCog /> },
         { label: "Volunteers", path: "users/volunteers", icon: <MdVolunteerActivism /> }
      ],
   },
   {
      label: "Blog",
      icon: <FaBloggerB className="text-lg" />,
      children: [
         { label: "Add Post", path: "blog/add", icon: <FaBloggerB /> },
         { label: "All Posts", path: "blog", icon: <FaBloggerB /> },
      ]
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
const DashboardSidebar = () => {
   const { navBrand } = useGlobalContext();
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
   const [openIndex, setOpenIndex] = useState(null)
   const navigate = useNavigate();
   const location = useLocation();

   // handle navigate 
   const handleNavigate = (link, idx) => {
      if (link.children) {
         setOpenIndex(openIndex === idx ? null : idx);
      } else {
         navigate(link.path);
         setOpenIndex(null);
      }
   };

   // heighlight active parent 
   const isParentActive = (link) => {
      if (!link.children) return false;
      return link.children.some(c => location.pathname.includes(c.path));
   };

   return (
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
   );
};

export default DashboardSidebar;