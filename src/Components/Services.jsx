import { GiMoneyStack } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { TbFirstAidKit } from "react-icons/tb";
import { Link } from "react-router-dom";

const Services = () => {
   return (
      <div className="font-hind py-10 sm:py-16 md:py-20 rounded-t-2xl">
         <div className="max-w-6xl mx-auto px-2 md:px-6">
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-center title mb-8">
               আমাদের সেবাসমূহ
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
               <Link
                  to="/food-assistance"
                  className="flex flex-col items-center justify-center bg-[#0080000a] p-6 rounded-xl shadow-xs shadow-green-400 transition duration-500 transform hover:-translate-y-1"
               >
                  <IoFastFoodSharp className="size-12 md:size-16 text-green-500 mb-3" />
                  <p className="text-lg md:text-xl font-medium ">
                     খাদ্য সহায়তা
                  </p>
               </Link>

               <Link
                  to="/education-assistance"
                  className="flex flex-col items-center justify-center bg-[#0080000a] p-6 rounded-xl shadow shadow-green-400 transition duration-500 transform hover:-translate-y-1"
               >
                  <MdMenuBook className="size-12 md:size-16 text-green-500 mb-3" />
                  <p className="text-lg md:text-xl font-medium ">
                     শিক্ষা সহায়তা
                  </p>
               </Link>

               <Link
                  to="/medical-assistance"
                  className="flex flex-col items-center justify-center bg-[#0080000a] p-6 rounded-xl shadow shadow-green-400 transition duration-500 transform hover:-translate-y-1"
               >
                  <TbFirstAidKit className="size-12 md:size-16 text-green-500 mb-3" />
                  <p className="text-lg md:text-xl font-medium ">
                     চিকিৎসা সহায়তা
                  </p>
               </Link>

               <Link
                  to="/financial-assistance"
                  className="flex flex-col items-center justify-center bg-[#0080000a] p-6 rounded-xl shadow shadow-green-400 transition duration-500 transform hover:-translate-y-1"
               >
                  <GiMoneyStack className="size-12 md:size-16 text-green-500 mb-3" />
                  <p className="text-lg md:text-xl font-medium ">
                     আর্থিক সহায়তা
                  </p>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Services;
