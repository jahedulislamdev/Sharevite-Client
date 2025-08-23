import { useQuery } from '@tanstack/react-query';
import { getRequest } from '../utils/apiClent';
const useGetData = (endPoint, queryKey) => {
   return useQuery({
      queryKey: [queryKey],
      queryFn: () => getRequest(endPoint),

   })

};

export default useGetData;