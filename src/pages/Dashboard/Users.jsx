
import { motion } from "framer-motion";
import useGetData from "../../hooks/useGetData";
const Users = () => {
   const { data: users, isLoading, error, isError, isFetching } = useGetData("users", "myUsers", true)
   if (isFetching || isLoading) {
      return <p className="min-h-42 flex justify-center items-center">Loading..</p>
   } else if (isError) {
      console.log(error)
   }
   // console.log(users)

   return (
      <div>
         {!users ? <p className="text-center">No User Found!</p> :
            <div className="overflow-x-auto rounded-box border border-[#00800061] bg-base-100">
               <table className="table">
                  {/* head */}
                  <thead className="bg-[#00800011] p-3">
                     <tr>
                        <th>SE</th>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>CreatedAt</th>
                        <th>UpdatedAt</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        users.map((user, idx) => (
                           <motion.tr key={user._id || idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="hover:bg-base-300 transition-all duration-300"
                           >
                              <th>{idx + 1}</th>
                              <td>
                                 <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                       <img src={user.profileUrl} alt={user.name} />
                                    </div>
                                 </div>
                              </td>
                              <td >{user.name}</td>
                              <td>{user.email}</td>
                              <td>{new Date(user.createdAt).toLocaleString()}</td>
                              <td>{new Date(user.updatedAt).toLocaleString()}</td>
                              <td>
                                 <div className="flex gap-2">
                                    <button className="btn btn-sm btn-info btn-outline ">Detail</button>
                                    <button className="btn btn-sm btn-error btn-outline">Delete</button>
                                 </div>
                              </td>
                           </motion.tr>
                        ))
                     }
                  </tbody>
               </table>
            </div>
         }
      </div>
   );
};

export default Users;