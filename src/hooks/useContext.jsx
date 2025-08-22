import { useContext } from "react";
import GlobalContext from "../contexts/create_global_context";
import AuthProvider from "../contexts/create_auth_context";

// this hook provides the context access and reduce using useContext calls alltime.
const useGlobalContext = () => {
   const context = useContext(GlobalContext)
   return context;
};
const useAuthContext = () => {
   const context = useContext(AuthProvider)
   return context;
}

export { useGlobalContext, useAuthContext };