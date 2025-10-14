import { BiSolidDonateHeart } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";
import useGetData from "../../hooks/useGetData";
import { Link } from "react-router-dom";

const AvailableProjects = () => {
   const { data: campaigns, isLoading, error, isError, isFetching } = useGetData(
      "campaigns",
      "myCampaigns"
   );

   if (isFetching || isLoading) {
      return (
         <div className="flex justify-center items-center h-52">
            <span className="loading loading-spinner loading-md"></span>
         </div>
      );
   } else if (isError) {
      console.error(error);
   }

   return (
      <section className="py-14 font-hind px-3 sm:px-6 lg:px-10">
         {/* Header */}
         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
            <h2 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 title">
               আমাদের চলমান প্রজেক্টসমূহ
            </h2>
            <Link
               to="/projects"
               className="text-white bg-green-600 hover:bg-green-700 text-sm sm:text-base py-2 px-4 rounded-lg transition-all shadow-sm"
            >
               সব প্রজেক্ট দেখুন
            </Link>
         </div>

         {/* Grid Layout */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {campaigns?.map((project) => (
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
         </div>
      </section>
   );
};

export default AvailableProjects;
