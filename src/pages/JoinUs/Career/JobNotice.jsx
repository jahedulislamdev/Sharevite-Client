import { FaBriefcase } from "react-icons/fa";

const JobNotice = () => {
   return (
      <div className="flex justify-center items-center h-96 my-16">
         <div className="flex font-noto bg-base-200 flex-col items-center justify-center min-h-[40vh] md:min-h-[50vh] rounded-xl shadow-sm p-10 mx-4 md:mx-auto max-w-lg text-center ">

            {/* Icon */}
            <div className="text-gray-400 mb-5">
               <FaBriefcase className="text-6xl md:text-8xl animate-pulse " />
            </div>

            {/* Message */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2 title">
               কোন চাকুরীর নোটিশ পাওয়া যায়নি
            </h2>
            <p className="text-gray-500 mb-6">
               আমাদের কাছে এই মুহূর্তে কোন খালি পদ নেই। অনুগ্রাহ করে নিয়মিত আমাদের ওয়েবসাইট চেক করুন অথবা ইমেইল দিয়ে সাবস্ক্রাইব করুন।
            </p>

            {/* Optional Button */}
            {/* <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            চাকরির তালিকা চেক করুন
         </button> */}
         </div>
      </div>
   );
};

export default JobNotice;
