import { useParams } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaBullseye, FaCheckCircle, } from "react-icons/fa";
import useGetData from './../../hooks/useGetData';


const ProjectDetails = () => {
   const { id } = useParams();
   const { data: project, isLoading, error } = useGetData(`campaign/${id}`);

   if (isLoading)
      return (
         <div className="flex justify-center items-center h-52">
            <span className="loading loading-spinner loading-lg"></span>
         </div>
      );
   if (error) return <p className="text-center text-red-500">Something went wrong!</p>;
   if (!project) return <p className="text-center text-gray-500">No project found</p>;

   // % calculation
   const percentage = Math.min(
      Math.round((project.collected / project.goal) * 100),
      100
   );

   return (
      <div className="font-noto">
         {/* Hero Section */}
         <div className="relative w-full h-[380px] md:h-[460px]">
            <img
               src={project?.images[0]}
               alt={project.title}
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Overlay Content */}
            <div className="absolute bottom-10 left-8 md:left-16 max-w-3xl">
               <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg font-hind text-white">
                  {project.title}
               </h1>
               <div className="flex flex-wrap items-center gap-5 text-sm md:text-base text-white opacity-75">
                  <span className="flex items-center gap-2">
                     <FaUser /> প্রকল্প ম্যানেজার: {project.organizer}
                  </span>
                  <span className="flex items-center gap-2">
                     <FaCalendarAlt /> শেষ তারিখ:{" "}
                     {new Date(project.lastDate).toLocaleDateString("bn-BD")}
                  </span>
               </div>
            </div>

            {/* Status Badge */}
            <div
               className={`absolute top-6 right-6 px-5 py-2 rounded-full text-sm md:text-base font-semibold shadow-md ${project?.status ? "bg-red-600 text-white" : "bg-green-600 text-white"
                  }`}
            >
               {project?.status ? "🚨 জরুরি সহায়তা দরকার" : "চলমান"}
            </div>
         </div>

         {/* Body */}
         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Side: Description */}
            <div className="lg:col-span-2 space-y-8">
               {/* Info Chips */}
               <div className="flex flex-wrap gap-3">
                  {project.location?.map((loc, i) => (
                     <span
                        key={i}
                        className="px-4 py-1.5 bg-green-100 text-green-700 text-sm rounded-full font-medium shadow-sm"
                     >
                        📍 {loc.tag}
                     </span>
                  ))}
                  <span className="px-4 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-full font-medium shadow-sm">
                     🏷️ {project.category}
                  </span>
               </div>

               {/* Description */}
               <h2 className="text-2xl font-semibold border-b pb-2">
                  প্রকল্প সম্পর্কে
               </h2>
               <p className="text-lg leading-relaxed whitespace-pre-line text-justify">
                  {project.description}
               </p>
            </div>

            {/* Right Side: Donation Info Card */}
            <div className="backdrop-blur-xl border shadow-xl rounded-2xl p-8 space-y-6 h-fit">
               <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FaBullseye className="text-green-600" /> অর্থ সংগ্রহ
               </h3>

               {/* Amount */}
               <div className="flex justify-between font-medium">
                  <p>
                     সংগ্রহিত:{" "}
                     <span className="font-bold font-onset">৳{project.collected}</span>
                  </p>
                  <p>
                     টার্গেট: <span className="font-bold font-onset">৳{project.goal}</span>
                  </p>
               </div>

               {/* Progress Bar */}
               <div>
                  <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                     <div
                        className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-700 transition-all duration-700"
                        style={{ width: `${percentage}%` }}
                     ></div>
                  </div>
                  <p className="text-sm mt-2 text-right ">
                     <span className="font-onset"> {percentage}</span>%
                  </p>
               </div>

               {/* Donate Button */}
               <button className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg rounded-xl font-semibold transition-all duration-300 shadow-lg">
                  <FaCheckCircle /> এখনই দান করুন
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProjectDetails;
