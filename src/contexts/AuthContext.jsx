import GlobalContext from "./create_context";

const AuthContext = ({ children }) => {

   const admin = { name: "admin", email: "admin@gmail.com" }
   const data = { admin };
   return (
      <GlobalContext.Provider value={data}>
         {children}
      </GlobalContext.Provider>
   );
};

export default AuthContext;