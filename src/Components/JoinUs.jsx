import { FaHandHoldingHeart, FaBoxOpen, FaHandsHelping, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const joinOptions = [
   {
      id: 1,
      title: "নিয়মিত দাতা",
      icon: <FaHandHoldingHeart size={40} />,
      color: "bg-green-600",
   },
   {
      id: 2,
      title: "আজীবন ও দাতা সদস্য",
      icon: <FaBoxOpen size={40} />,
      color: "bg-blue-500",
   },
   {
      id: 3,
      title: "স্বেচ্ছাসেবক",
      icon: <FaHandsHelping size={40} />,
      color: "bg-yellow-400",
   },
   {
      id: 4,
      title: "ক্যারিয়ার",
      icon: <FaBriefcase size={40} />,
      color: "bg-purple-600",
   },
];

const JoinUsSection = () => {
   return (
      <section className="py-7 md:py-16 font-hind border border-dashed border-green-200 rounded-xl">
         <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold title mb-2">
               আমাদের সাথে যুক্ত হন
            </h2>
            <p className=" mb-10">
               নিচের যে কোনো পদক্ষেপে আমাদের সাথে যুক্ত হয়ে আত্মমানবতার সেবায় ভূমিকা রাখতে পারেন।
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {joinOptions.map((option) => (
                  <Link
                     key={option.id}
                     className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-md hover:shadow-xl duration-300 ${option.color} text-white`}
                  >
                     <div className="mb-4">{option.icon}</div>
                     <h3 className="text-lg md:text-xl font-semibold">{option.title}</h3>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
};

export default JoinUsSection;
