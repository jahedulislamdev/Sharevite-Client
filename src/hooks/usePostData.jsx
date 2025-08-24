import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postRequest } from "../utils/apiClent";
import { toast } from "sonner";

const usePostData = (urlEndpoint, successMsg, queryKey) => {
   const queryClient = useQueryClient();
   return useMutation({
      mutationFn: (data) => postRequest(urlEndpoint, data),
      onSuccess: (res) => {
         // console.log(res);
         if (res.insertedId) {
            toast.success(successMsg)
         }
         // this key cash our fetched data and refetch it automaticaly afer changing response.
         if (queryKey) {
            // if multiple query key includes in an array (always checked that keys should be an array in  (react query-v4[recomended]))
            const keys = Array.isArray(queryKey) ? queryKey : [queryKey]
            keys.forEach((key) => queryClient.invalidateQueries([key]))
            // if only one key 
            // queryClient.invalidateQueries([queryKey])    
         }

         return res;
      },
      onError: (err) => {
         console.log(err)
         toast.error(err.response?.data?.message || "Request Faild! Please Try Again.")
      }
   })
};

export default usePostData;