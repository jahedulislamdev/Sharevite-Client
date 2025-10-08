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
                  className="relative group bg-white border border-green-100 hover:border-green-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
               >
                  {/* Image Section */}
                  <div className="relative">
                     <img
                        src={
                           project?.images[0] ||
                           "https://i.postimg.cc/NM7b3GTZ/image.png"
                        }
                        alt={project.title}
                        className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                     <div
                        className={`absolute top-3 right-3 text-xs md:text-sm px-3 py-1 rounded-full shadow-md ${project?.status
                           ? "bg-amber-700 text-white"
                           : "bg-green-600 text-white"
                           }`}
                     >
                        {project?.status === true ? "Emergency" : "Active"}
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                     <h3 className="text-lg sm:text-xl font-bold text-gray-800 relative inline-block">
                        {project.title}
                        <span className="absolute left-0 -bottom-2 w-10 h-1 bg-green-500 rounded-full"></span>
                     </h3>

                     <p className="opacity-75 text-sm sm:text-base leading-relaxed line-clamp-3">
                        {project.shortDescription}।
                     </p>

                     {/* Progress Section */}
                     <div className="w-full bg-gray-100 py-3 px-3 sm:px-4 rounded-xl">
                        <div className="flex justify-between text-xs sm:text-sm font-medium text-gray-700 mb-1">
                           <p>সংগ্রহিত: ৳{project.collected}</p>
                           <p>টার্গেট: ৳{project.goal}</p>
                        </div>
                        <progress
                           className="progress progress-success w-full h-2"
                           value={Math.round(
                              (project.collected / project.goal) * 100
                           )}
                           max="100"
                        ></progress>
                     </div>

                     {/* Buttons */}
                     <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2">
                        <Link
                           to={`project/details/${project._id}`}
                           className="w-full sm:w-auto text-center border border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-5 py-2 rounded-lg font-medium transition-all flex justify-center items-center"
                        >
                           বিস্তারিত <MdArrowOutward className="ml-2" />
                        </Link>
                        <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium transition-all flex justify-center items-center shadow-sm">
                           দান করুন <BiSolidDonateHeart className="ml-2" />
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
