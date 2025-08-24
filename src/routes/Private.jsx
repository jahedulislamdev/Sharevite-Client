import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useContext";
import Spiner from "../Components/Loading/Spiner";

const Private = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useAuthContext();
   if (loading) {
      return <Spiner />
   } else if (user) {
      return children;
   }
   return <Navigate to={'/login'} state={location.state}></Navigate>

};

export default Private;