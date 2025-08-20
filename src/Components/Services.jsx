import { GiMoneyStack } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { TbFirstAidKit } from "react-icons/tb";
import { Link } from "react-router-dom";

const Services = () => {
   return (
      <div className="font-hind py-7 md:py-10">
         <div className="grid grid-cols-2 md:grid-cols-4 w-full justify-between items-center gap-3">
            <Link to="/food-assistance" className="flex justify-center items-center space-x-3 bg-green-50 p-5 rounded-xl max-h-22">
               <IoFastFoodSharp className="size-10 md:size-16 text-green-400" />
               <p className="text-md md:text-xl text-black">খাদ্য সহায়তা</p>
            </Link>
            <Link to="/education-assistance" className="flex justify-center items-center space-x-3 bg-green-50 p-5 rounded-xl max-h-22">
               <MdMenuBook className="size-10 md:size-16 text-green-400" />
               <p className="text-md md:text-xl text-black">শিক্ষা সহায়তা</p>
            </Link>
            <Link to="/medical-assistance" className="flex justify-center items-center space-x-3 bg-green-50 p-5 rounded-xl max-h-22">
               <TbFirstAidKit className="size-10 md:size-16 text-green-400" />
               <p className="text-md md:text-xl text-black">চিকিৎসা সহায়তা</p>
            </Link>
            <Link to="/financial-assistance" className="flex justify-center items-center space-x-3 bg-green-50 p-5 rounded-xl max-h-22">
               <GiMoneyStack className="size-10 md:size-16 text-green-400" />
               <p className="text-md md:text-xl text-black">আর্থিক সহায়তা</p>
            </Link>
         </div>
      </div>
   );
};

export default Services;