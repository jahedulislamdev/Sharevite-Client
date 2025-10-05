import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRequest } from "../utils/apiClent";
import { toast } from "sonner";
import useSecureApi from "./useSecureApi";

const useDeleteData = (
    ednpoint,
    successMessage,
    queryKey,
    isSecure = false,
) => {
    const queryClient = useQueryClient();
    const { secureDeleteRequest } = useSecureApi();
    return useMutation({
        mutationFn: (id) => {
            if (isSecure) {
                secureDeleteRequest(ednpoint, id);
            } else {
                deleteRequest(ednpoint, id);
            }
        },
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
