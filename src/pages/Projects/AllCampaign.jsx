import { MdArrowOutward } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import useGetData from "../../hooks/useGetData";

const AllCampaigns = () => {
   const { data: allProjects, isLoading, error } = useGetData("campaigns", "allProjects");

   if (isLoading) return <div className="flex justify-center items-center h-52"><span className="loading loading-spinner loading-md"></span></div>;
   if (error) return <p className="text-center text-red-500">Something went wrong!</p>;

   return (
      <div className="py-8">
         {allProjects && allProjects.length === 0 ?
            <div className="flex justify-center items-center h-52"><p className="text-center">No Projrct Found!</p></div>
            :
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {allProjects.map((project) => (
                  <div
                     key={project._id}
                     className="relative bg-[#0080000c] rounded-2xl overflow-hidden shadow-xs shadow-green-600 transition-all duration-700 transform"
                  >
                     {/* Image with overlay */}
                     <div className="relative">
                        <img
                           src={project?.images[0] || "https://i.postimg.cc/NM7b3GTZ/image.png"}
                           alt={project.title}
                           className="w-full h-46 object-cover"
                        />
                        <Link to={`/details/${project._id}`}>
                        </Link>
                        <div className={`absolute top-3 right-3 ${project?.status ? "bg-amber-800 text-white" : "bg-green-600 text-white"} text-xs px-3 py-1 rounded-full shadow`}>
                           {project?.status === true ? "Emergency" : "Active"}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                     </div>

                     {/* Content */}
                     <div className="p-6 space-y-3 font-hind">
                        <h3 className="text-lg md:text-xl font-bold title relative font-hind">
                           {project.title}
                           <span className="absolute left-0 -bottom-2 w-12 h-1 bg-green-500 rounded-full"></span>
                        </h3>
                        <p className="opacity-60 text-sm md:text-base leading-relaxed mt-4">
                           {project.shortDescription}।
                        </p>
                        {/* collected amount tracking */}
                        <div className="w-full bg-base-300 px-4 py-3 rounded-2xl">
                           <div className="text-xs md:text-sm leading-relaxed flex justify-between items-center opacity-80" >
                              <p className="font-bold">সংগ্রহিত: ৳{project.collected}</p>
                              <p className="font-bold">টার্গেট: ৳{project.goal}</p>
                           </div>
                           <progress className="progress progress-success w-full" value={Math.min(Math.round((project.collected / project.goal) * 100), 100)} max="100"></progress>
                        </div>
                        <div className="flex justify-between items-center">
                           <Link to={`/project/details/${project._id}`} className="btn btn-soft cursor-pointer mt-3 px-5 py-2 rounded-lg font-medium">
                              বিস্তারিত<MdArrowOutward className="inline-block ml-2" />
                           </Link>
                           <button className="mt-3 cursor-pointer px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition">
                              দান করুন <BiSolidDonateHeart className="inline-block ml-2" />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>}
      </div>
   );
};

export default AllCampaigns;
