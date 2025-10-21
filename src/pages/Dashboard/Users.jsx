
import useGetData from "../../hooks/useGetData";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import Swal from "sweetalert2";
import useDeleteData from "../../hooks/useDeleteData";
const Users = () => {
   const { mutate: deleteUsers } = useDeleteData("/users", "ইউজার মুছে ফেলা হয়েছে!", "users", true);
   const { data: users, isLoading, error, isError, isFetching } = useGetData("users", "myUsers", true)
   if (isFetching || isLoading) {
      return <p className="min-h-42 flex justify-center items-center">Loading..</p>
   } else if (isError) {
      console.log(error)
   }
   // console.log(users)

   // handle delete user form database
   const handleDeleteUser = (email) => {
      Swal.fire({
         title: "আপনি কি নিশ্চিত?",
         text: "আপনি এটি আর পূর্বাবস্থায় ফিরিয়ে আনতে পারবেন না!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "ডিলিট করুন",
         cancelButtonText: "বাতিল"
      }).then((result) => {
         if (result.isConfirmed) {
            deleteUsers(email);
            Swal.fire({
               title: "ডিলিট করা হয়েছে!",
               icon: "success"
            });
         }
      });
   }

   return (
      <div>
         <div>

         </div>
         {!users ? <p className="text-center">No User Found!</p> :
            <div className="overflow-x-auto rounded-box border border-[#00800061] bg-base-100">
               <table className="table">
                  {/* head */}
                  <thead className="bg-[#00800011] p-3">
                     <tr>
                        <th>SE</th>
                        <th>Profile</th>
                        <th>Display Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        {/* <th>CreatedAt</th>
                        <th>UpdatedAt</th> */}
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
                              className={`hover:bg-base-200 transition-all duration-300 `}
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
                              <td className=" "><span className={`badge badge-primary badge-soft ${user?.role === "admin" && "badge-success"}`} >{user?.role === "admin" ? "admin" : "User"}</span></td>
                              <td>{user.email}</td>
                              <td className=" space-x-2 text-white">
                                 <label htmlFor="showUserDetails" className="p-2 bg-sky-700 rounded-full cursor-pointer inline-block"><IoMdEye className="size-5" /></label>
                                 <button onClick={() => handleDeleteUser(user.email)} className="p-2 bg-red-600 rounded-full cursor-pointer inline-block"><MdDelete className="size-5" /></button>
                              </td>
                              {/* <input type="checkbox" id="showUserDetails" className="modal-toggle" />
                              <div className="modal" role="dialog">
                                 <div className="modal-box">
                                    <h3 className="text-lg font-bold">Hello!</h3>
                                    <p className="py-4">This modal works with a hidden checkbox!</p>
                                 </div>
                                 <label className="modal-backdrop" htmlFor="showUserDetails">Close</label>
                              </div> */}
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