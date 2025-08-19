import { GiMoneyStack } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { TbFirstAidKit } from "react-icons/tb";
import { Link } from "react-router-dom";

const Services = () => {
   return (
      <div className="font-hind py-10">
         <div className="flex w-full justify-between items-center ">
            <Link to="/food-assistance" className="flex justify-center items-center space-x-3 bg-green-50 p-5 rounded-xl">
               <IoFastFoodSharp className="size-16 text-green-400" />
               <p className="text-xl text-black">খাদ্য সহায়তা</p>
            </Link>
            <Link to="/education-assistance" className="flex justify-center items-center space-x-3 bg-green-50 p-5 rounded-xl">
               <MdMenuBook className="size-16 text-green-400" />
               <p className="text-xl text-black">শিক্ষা সহায়তা</p>
            </Link>
            <Link to="/medical-assistance" className="flex justify-center items-center space-x-3 bg-green-50 p-5 rounded-xl">
               <TbFirstAidKit className="size-16 text-green-400" />
               <p className="text-xl text-black">চিকিৎসা সহায়তা</p>
            </Link>
            <Link to="/financial-assistance" className="flex justify-center items-center space-x-3 bg-green-50 p-5 rounded-xl">
               <GiMoneyStack className="size-16 text-green-400" />
               <p className="text-xl text-black">আর্থিক সহায়তা</p>
            </Link>
         </div>
      </div>
   );
};

export default Services;