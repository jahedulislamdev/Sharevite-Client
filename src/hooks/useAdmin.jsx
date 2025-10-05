import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "./useContext";
import { getRequest } from "../utils/apiClent";

const useAdmin = () => {
   const { user } = useAuthContext();
   const { data: isAdmin } = useQuery({
      queryKey: [user?.email, isAdmin],
      queryFn: async () => {
         const res = await getRequest(`users/admin/${user?.email}`);
         console.log(res)

      }
   })

};

export default useAdmin;