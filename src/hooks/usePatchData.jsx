import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchRequest } from "../utils/apiClent";
import { toast } from "sonner";

const usePatchData = (endpoint, successMessage, queryKey) => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (data) => patchRequest(endpoint, data),
      onSuccess: (res) => {
         if (res.modifiedCount > 0) {
            toast.success(successMessage);
         }
         if (queryKey) {
            const keys = Array.isArray(queryKey) ? queryKey : [queryKey];
            keys.forEach(k => queryClient.invalidateQueries([k]))
         }
         // queryClient.invalidateQueries([queryKey])
         return res;
      }
   })
}
export default usePatchData;