import { FaUniversity, FaHashtag, FaKey } from "react-icons/fa";

const BankPay = () => {
   return (
      <div className="max-w-md mx-auto p-6 border border-base-300 font-onset">
         {/* Bank Logo */}
         <div className="flex flex-col items-center mb-5">
            <div className="p-3 bg-white rounded-full shadow-inner">
               <img
                  src="https://images.seeklogo.com/logo-png/32/1/city-bank-bangladesh-logo-png_seeklogo-322182.png"
                  alt="Islami Bank Logo"
                  className="w-14 h-14 object-contain rounded-full"
               />
            </div>
            <h2 className="mt-3 text-lg font-semibold text-red-400">
               City Bank Bangladesh Limited
            </h2>
            <p className="text-sm text-gray-500">Anonymous Foundation</p>
            <p className="text-xs text-gray-400">Dhanmondi Branch, Dhaka</p>
         </div>

         {/* Bank Info */}
         <div className="space-y-3 text-sm text-base-content bg-base-100 p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
               <FaUniversity className="text-red-700 text-2xl" />
               <div>
                  <p className="text-sm font-semibold text-green-700">
                     Account Details
                  </p>
                  <p className="text-xs text-gray-500">
                     Use the following info for bank transfer
                  </p>
               </div>
            </div>

            <hr className="border-t border-base-300 my-2" />

            <div className="space-y-2">
               <p className="flex items-center gap-2">
                  <FaHashtag className="text-green-600 text-xl" />
                  <span className="font-semibold opacity-70 ">Account No:</span>{" "}
                  <span >1781500117092</span>
               </p>

               <p className="flex items-center gap-2">
                  <FaHashtag className="text-green-600 text-xl" />
                  <span className="font-semibold opacity-70 ">Routing No:</span>{" "}
                  <span >225261187</span>
               </p>

               <p className="flex items-center gap-2">
                  <FaKey className="text-green-600 text-xl" />
                  <span className="font-semibold opacity-70 ">Swift Code:</span>{" "}
                  <span >CIBLBDDHXXX</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default BankPay;
