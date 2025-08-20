import GlobalContext from "./create_context";

const AppContext = ({ children }) => {
   // navbar logo or text
   const navElements = {
      logoUrl: "https://i.postimg.cc/qvfxTK2g/Rimberio-1.png",
      logoText: "শেয়ারবাইট"
   };

   const admin = { name: "admin", email: "admin@gmail.com" }
   const data = { admin, navElements };
   return (
      <GlobalContext.Provider value={data}>
         {children}
      </GlobalContext.Provider>
   );
};

export default AppContext;