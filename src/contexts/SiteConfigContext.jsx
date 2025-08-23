import GlobalContext from "./create_global_context";

const SiteConfigContext = ({ children }) => {
   // navbar logo or text it will be dynami later,  data will comes from API.
   const navBrand = {
      logoUrl: "https://i.postimg.cc/qvfxTK2g/Rimberio-1.png",
      logoText: "শেয়ারবাইট"
   };
   // navbar links it will be dynami later,  data will comes from API.
   const navLinks = [
      { path: '/', label: 'হোম' },
      { path: '/available-projects', label: 'চলমান প্রকল্প' },
      { path: '/my-donations', label: 'আমার দান' },
      { path: '/my-requests', label: 'আমার অনুরোধসমূহ' },
      { path: '/add-food', label: 'নতুন খাবার যোগ করুন' },
      { path: '/login', label: 'লগইন / রেজিস্ট্রেশন' }
   ];
   // auto close sidebar after clicking a link
   const autoCloseSidebar = () => {
      const checkbox = document.getElementById("closeSidebar");
      if (checkbox) {
         setTimeout(() => {
            checkbox.checked = false;
         }, 400);
      }
   };
   // soft toast message style
   const toastStyle = {
      success: {
         style: { backgroundColor: "#00800012", color: "#2c662d", border: "1px solid green" },
      },
      error: {
         style: { backgroundColor: "#ff00000a", color: "#eb3434", border: "1px solid #ff000071" },
      },
   }
   const data = { navLinks, navBrand, autoCloseSidebar, toastStyle }
   return (
      <GlobalContext.Provider value={data}>
         {children}
      </GlobalContext.Provider>
   );
};

export default SiteConfigContext;