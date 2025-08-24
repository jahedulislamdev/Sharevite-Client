import GlobalContext from "./create_global_context";

const SiteConfigContext = ({ children }) => {
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
      { path: '/all_campaign', label: ' চলমান প্রকল্প' },
      // { path: '/my-donations', label: 'আমাদের কার্যক্রম' },
      // { path: '/my-requests', label: 'গ্যালারি' },
      // { path: '/add-food', label: 'আমাদের সাথে যুক্ত হোন' },
      // { path: '/add-food', label: 'ব্লগ' },
      // { path: '/add-food', label: 'যোগাযোগ' },
      { path: '/add-campaign', label: 'ক্যম্পেইন যুক্ত করুন' },
   ];

   // soft toast message style

   const data = { navLinks, navBrand, autoCloseSidebar }
   return (
      <GlobalContext.Provider value={data}>
         {children}
      </GlobalContext.Provider>
   );
};

export default SiteConfigContext;