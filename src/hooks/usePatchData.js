import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import useApi from "./useApi";

const usePatchData = (successMessage, queryKey, isSecure = false) => {
    const queryClient = useQueryClient();
    const { patchRequest } = useApi();
    return useMutation({
        mutationFn: ({ endpoint, data }) =>
            patchRequest(endpoint, data, isSecure),
        onSuccess: (res) => {
            if (res.modifiedCount > 0 || successMessage) {
                toast.success(successMessage);
            }
            if (queryKey) {
                const keys = Array.isArray(queryKey) ? queryKey : [queryKey];
                keys.forEach((k) => queryClient.invalidateQueries([k]));
            }
            // queryClient.invalidateQueries([queryKey])
            return res;
        },
    });
};
export default usePatchData;
