import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useContext";
import GlobalContext from "./create_global_context";

const SiteConfigContext = ({ children }) => {
   const { logoutUser } = useAuthContext();
   // navbar logo or text it will be dynami later,  data will comes from API.
   const navBrand = {
      logoUrl: "https://i.postimg.cc/qvfxTK2g/Rimberio-1.png",
      logoText: "শেয়ারবাইট"
   };

   // auto close sidebar after clicking a link
   const autoCloseSidebar = () => {
      const checkbox = document.getElementById("closeSidebar");
      if (checkbox) {
         setTimeout(() => {
            checkbox.checked = false;
         }, 400);
      }
   };

   // navbar links it will be dynami later,  data will comes from API.
   const navLinks = [
      { path: '/', label: 'হোম' },
      { path: '/available-projects', label: 'চলমান প্রকল্প' },
      { path: '/my-donations', label: 'আমার দান' },
      { path: '/my-requests', label: 'আমার অনুরোধসমূহ' },
      { path: '/add-food', label: 'নতুন খাবার যোগ করুন' },
   ];
   const loginLink = (<li><NavLink onClick={autoCloseSidebar} to={'/login'} className="hover:bg-[#06510c29] transition-colors duration-500 py-1 px-3 rounded-xl">লগইন/ রেজিষ্ট্রেশন</NavLink></li>);
   const logoutLink = (<li onClick={autoCloseSidebar}><button className="hover:bg-[#06510c29] transition-colors duration-500 py-1 px-3 rounded-xl cursor-pointer" onClick={logoutUser}>লগআউট</button></li>);

   // soft toast message style
   const toastStyle = {
      success: {
         style: { backgroundColor: "#00800012", color: "#2c662d", border: "1px solid green" },
      },
      error: {
         style: { backgroundColor: "#ff00000a", color: "#eb3434", border: "1px solid #ff000071" },
      },
   }
   const data = { navLinks, navBrand, autoCloseSidebar, toastStyle, loginLink, logoutLink }
   return (
      <GlobalContext.Provider value={data}>
         {children}
      </GlobalContext.Provider>
   );
};

export default SiteConfigContext;