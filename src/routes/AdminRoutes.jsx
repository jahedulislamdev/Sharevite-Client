import { PageLoading } from "../Components/Loading/Loading";
import { useAuthContext } from "../hooks/useContext";
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({ children }) => {
   const { user } = useAuthContext();
   const [isAdmin, isAdminLoading] = useAdmin();

   if (isAdminLoading) {
      return <PageLoading />
   } else if (user && isAdmin) {
      return children;
   }
   return <Navigate to={'/'}></Navigate>
};

export default AdminRoutes;