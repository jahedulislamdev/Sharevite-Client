import useGetData from "../../hooks/useGetData";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";

const Campaigns = () => {
   const { data: campaigns, isLoading, error } = useGetData("campaigns", "allCampaigns");

   if (isLoading)
      return (
         <div className="flex justify-center items-center h-52">
            <span className="loading loading-spinner loading-md"></span>
         </div>
      );
   if (error) return <p className="text-center text-red-500">Something went wrong!</p>;

   return (
      <div className="overflow-x-auto bg-base-200 shadow rounded-lg">
         <table className="table w-full text-sm">
            <thead className="bg-base-100">
               <tr className="font-noto text-lg">
                  <th className="text-center">#</th>
                  <th>প্রজেক্ট</th>
                  <th>লোকেশন</th>
                  <th>অবস্থা</th>
                  <th className="text-center">অ্যাকশন</th>
               </tr>
            </thead>
            <tbody>
               {campaigns.map((cam, idx) => (
                  <tr key={cam._id} className="hover:bg-base-300">
                     {/* Serial */}
                     <td className="text-center">{idx + 1}</td>

                     {/* Project */}
                     <td>
                        <div className="flex items-center gap-3">
                           <img
                              src={cam?.images[0]}
                              alt="img"
                              className="w-12 h-12 rounded-lg object-cover"
                           />
                           <div>
                              <p className="font-medium opacity-80 font-hind">{cam.title}</p>
                              <p className="text-xs text-gray-500 capitalize fpnt-onset">{cam.category}</p>
                           </div>
                        </div>
                     </td>

                     {/* Location */}
                     <td>
                        <div className="flex flex-wrap gap-1 font-hind">
                           {cam.location.map((l, i) => (
                              <span
                                 key={i}
                                 className="px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs"
                              >
                                 {l.tag}
                              </span>
                           ))}
                        </div>
                     </td>

                     {/* Collected vs Goal */}
                     <td>
                        <div className="font-onset w-48 space-y-2">
                           {/* Collected Amount */}
                           <div className="flex items-center justify-between text-green-700">
                              <span className="font-medium">৳{cam.collected}</span>
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                 Collected
                              </span>
                           </div>

                           {/* Goal */}
                           <div className="flex items-center justify-between text-yellow-600">
                              <span className="font-medium">৳{cam.goal}</span>
                              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                                 Goal
                              </span>
                           </div>

                           {/* Progress */}
                           <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                              <div
                                 className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500"
                                 style={{ width: `${Math.min(Math.round((cam.collected / cam.goal) * 100), 100)}%` }}
                              ></div>
                           </div>
                           {/* Percentage */}
                           <p className="text-xs text-gray-500 text-right">
                              {Math.min(Math.round((cam.collected / cam.goal) * 100), 100)}%
                           </p>
                        </div>
                     </td>


                     {/* Actions */}
                     <td className="space-x-2 text-white">
                        <Link to={`/project/details/${cam._id}`} className="p-2 bg-sky-700  rounded-full cursor-pointer"><BiSolidEdit className="size-5" /></Link>
                        <button className="p-2 bg-red-600 rounded-full cursor-pointer"><MdDelete className="size-5" /></button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Campaigns;
