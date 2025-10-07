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
      { path: '/projects', label: ' চলমান প্রকল্প' },
      { path: '/dashboard', label: 'ড্যাশবোর্ড' },
   ];

   const AddCampaignCategories = [
      { label: "শিক্ষা", value: "education" },
      { label: "খাদ্য", value: "food" },
      { label: "চিকিৎসা", value: "treatment" },
      { label: "অর্থ", value: "money" },
      { label: "পরিবেশ রক্ষা", value: "environment" },
      { label: "বাসস্থান ", value: "house" },
      { label: "আন্যান্য", value: "others" }
   ]


   // soft toast message style

   const data = { navLinks, navBrand, autoCloseSidebar, AddCampaignCategories }
   return (
      <GlobalContext.Provider value={data}>
         {children}
      </GlobalContext.Provider>
   );
};

export default SiteConfigContext;