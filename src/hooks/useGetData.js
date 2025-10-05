import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../utils/apiClent";
// import useSecureApi from "./useSecureApi";
const useGetData = (endPoint, queryKey) => {
    //  const { secureGetRequest } = useSecureApi();
    return useQuery({
        queryKey: [queryKey],
        queryFn: () => getRequest(endPoint),
    });
};
export default useGetData;
