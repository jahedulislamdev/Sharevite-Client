import { BiLogOut, BiSolidEnvelopeOpen } from "react-icons/bi";
import { GoArrowLeft, GoFileDirectory } from "react-icons/go";
import { FaBell, FaUser, FaRegUser } from "react-icons/fa";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { FiActivity } from "react-icons/fi";
import UseTheme from "../../hooks/useTheme";

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
];
const DashboardHeader = () => {
   const navigate = useNavigate()
   return (
      <header className="flex items-center justify-between rounded p-2 shadow-xl" >
         <div className="flex gap-x-3 items-center">
            <button onClick={() => navigate(-1)} className="  rounded-s-3xl bg-base-100 hover:bg-base-300 p-2 cursor-pointer duration-500"><GoArrowLeft className="size-5 ms-2" /></button>
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
      </header >
   );
};

export default DashboardHeader;