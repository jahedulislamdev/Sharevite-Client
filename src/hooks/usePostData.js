import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import useApi from "./useApi";

const usePostData = (endpoint, successMsg, queryKey, isSecure = false) => {
    const queryClient = useQueryClient();
    const { postRequest } = useApi();
    return useMutation({
        mutationFn: (data) => postRequest(endpoint, data, isSecure),
        onSuccess: (res) => {
            // console.log(res);
            if (res.insertedId || successMsg) {
                toast.success(successMsg);
            }
            if (queryKey) {
                const keys = Array.isArray(queryKey) ? queryKey : [queryKey];
                keys.forEach((key) => queryClient.invalidateQueries([key]));
                // if only one key
                // queryClient.invalidateQueries([queryKey])
            }
            return res;
        },
    });
};

export default usePostData;
