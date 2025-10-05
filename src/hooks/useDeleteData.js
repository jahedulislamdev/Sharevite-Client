import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import useApi from "./useApi";

const useDeleteData = (
    endpoint,
    successMessage,
    queryKey,
    isSecure = false,
) => {
    const queryClient = useQueryClient();
    const { deleteRequest } = useApi();
    return useMutation({
        mutationFn: (id) => deleteRequest(endpoint, id, isSecure),
        onSuccess: (res) => {
            console.log(res);
            if (successMessage) {
                toast.success(successMessage);
            }
            const keys = Array.isArray(queryKey) ? queryKey : [queryKey];
            keys.forEach((key) => queryClient.invalidateQueries(key));
            return res;
        },
    });
};

export default useDeleteData;
