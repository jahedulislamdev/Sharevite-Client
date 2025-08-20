import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaImage, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
   const [showPassword, setShowPassword] = useState(false);

   return (
      <div className="flex items-center justify-center my-5 font-hind">
         <div className="w-full max-w-sm md:max-w-md bg-base-100 rounded-xl shadow shadow-green-400 p-8">
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-6 title">নিবন্ধন করুন</h2>

            {/* Name */}
            <div className="form-control mb-4">
               <label className="label">
                  <span className="label-text flex items-center gap-2">
                     <FaUser /> নাম
                  </span>
               </label>
               <input
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className="input focus:outline-0 w-full"
               />
            </div>

            {/* Email */}
            <div className="form-control mb-4">
               <label className="label">
                  <span className="label-text flex items-center gap-2">
                     <FaEnvelope /> ইমেইল
                  </span>
               </label>
               <input
                  type="email"
                  placeholder="you@example.com"
                  className="input focus:outline-0 w-full"
               />
            </div>

            {/* Password */}
            <div className="form-control mb-4">
               <label className="label">
                  <span className="label-text flex items-center gap-2">
                     <FaLock /> পাসওয়ার্ড
                  </span>
               </label>
               <div className="relative">
                  <input
                     type={showPassword ? "text" : "password"}
                     placeholder="একটি শক্তিশালী পাসওয়ার্ড দিন"
                     className="input focus:outline-0 w-full pr-10"
                  />
                  <span
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  >
                     {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
               </div>
            </div>

            {/* Photo URL */}
            <div className="form-control mb-6">
               <label className="label">
                  <span className="label-text flex items-center gap-2">
                     <FaImage /> ছবি ইউআরএল
                  </span>
               </label>
               <input
                  type="text"
                  placeholder="ছবির লিংক দিন (যেমন: https://...)"
                  className="input focus:outline-0 w-full"
               />
            </div>

            {/* Register Button */}
            <button className="btn w-full bg-green-500 text-white hover:bg-green-600">
               নিবন্ধন
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-600 mt-4">
               ইতিমধ্যেই একটি অ্যাকাউন্ট আছে?{" "}
               <Link to="/login" className="text-blue-600 font-medium hover:underline">
                  লগইন করুন
               </Link>
            </p>
         </div>
      </div>
   );
}

export default Registration