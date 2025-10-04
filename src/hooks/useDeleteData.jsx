import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRequest } from "../utils/apiClent";
import { toast } from "sonner";

const useDeleteData = (ednpoint, successMessage, queryKey) => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (id) => deleteRequest(ednpoint, id),
      onSuccess: (res) => {
         console.log(res);
         toast.success(successMessage);
         const keys = Array.isArray(queryKey) ? queryKey : [queryKey];
         keys.forEach(key => queryClient.invalidateQueries(key));

         return res;
      }
   })
};

export default useDeleteData;