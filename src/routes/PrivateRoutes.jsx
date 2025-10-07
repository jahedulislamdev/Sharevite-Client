import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useContext";
import { PageLoading } from "../Components/Loading/Loading";

const Private = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useAuthContext();
   if (loading) {
      return <PageLoading />;
   } else if (user) {
      return children;
   }
   return <Navigate to={'/login'} state={location.state} replace></Navigate>

};

export default Private;