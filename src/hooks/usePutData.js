import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApi from "./useApi";
import { toast } from "sonner";

const usePutData = (endpoint, successMsg, queryKey, isSecure = false) => {
    const queryClient = useQueryClient();
    const { patchRequest } = useApi();
    return useMutation({
        mutationFn: async (data) => {
            return patchRequest(endpoint, data, isSecure);
        },
        onSuccess: (res) => {
            console.log(res);
            if (successMsg) {
                toast.success(successMsg);
            }
            if (queryKey) {
                const keys = Array.isArray(queryKey) ? queryKey : [queryKey];
                keys.forEach((k) => queryClient.invalidateQueries(k));
            }
        },
        onError: (err) => {
            toast.error(
                err?.response?.data?.message || "কিছু একটা সমস্যা হয়েছে!",
            );
            throw err;
        },
    });
};

export default usePutData;
