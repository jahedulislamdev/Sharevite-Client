import { useQuery } from "@tanstack/react-query";
import useApi from "./useApi";
const useGetData = (endPoint, queryKey, isSecure = false) => {
    const { getRequest } = useApi();
    return useQuery({
        queryKey: [queryKey],
        queryFn: () => getRequest(endPoint, isSecure),
    });
};
export default useGetData;
