import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "./useContext";
import useApi from "./useApi";

const useAdmin = () => {
    const { user, loading } = useAuthContext();
    const { getRequest } = useApi();
    const { data: isAdmin, isLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !!user?.email && !loading, // queryfn run after loading user
        queryFn: async () => {
            const res = await getRequest(`users/admin/${user?.email}`);
            // console.log(res);
            return res.admin; // return true or false (boolean)
        },
    });
    return [isAdmin, isLoading];
};

export default useAdmin;
