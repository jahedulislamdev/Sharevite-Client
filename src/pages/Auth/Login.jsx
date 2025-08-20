import { useState } from "react";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import OpenForgetPassBox from "../../Components/OpenForgetPassBox";
import { Link } from "react-router-dom";

export default function Login() {
   const [showPassword, setShowPassword] = useState(false);

   return (
      <div className="flex items-start justify-center my-9 md:h-screen font-hind">
         <div className="w-full max-w-sm md:max-w-md bg-base-100 rounded-xl shadow shadow-green-400 p-8">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-center mb-6 title">
               লগইন করুন
            </h2>

            {/* Google Button */}
            <button className="btn w-full mb-4 transition-colors duration-500">
               <FcGoogle className="mr-2 text-red-500 size-6" />
               Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center mb-4">
               <div className="flex-grow border-t border-gray-300"></div>
               <span className="px-2 text-sm text-gray-500 ">অথবা</span>
               <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Email */}
            <div className="form-control my-7">
               <label className="label">
                  <span className="label-text flex items-center gap-2 ">
                     <FaEnvelope /> ই-মেইল
                  </span>
               </label>
               <input
                  type="email"
                  placeholder="you@example.com"
                  className="input focus:outline-0 w-full"
               />
            </div>

            {/* Password */}
            <div className="form-control my-6">
               <div className="label flex justify-between mb-2">
                  <span className="label-text flex items-center gap-2 ">
                     <FaLock /> পাসওয়ার্ড
                  </span>
                  <button onClick={() => document.getElementById("forgetPassword").showModal()} type="button" href="#" className="text-sm text-blue-600  cursor-pointer">
                     পাসওয়ার্ড ভুলে গেছেন?
                  </button>
               </div>
               <div className="relative">
                  <input
                     type={showPassword ? "text" : "password"}
                     placeholder="Enter your password"
                     className="input focus:outline-0 w-full pr-10"
                  />
                  <span
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                  >
                     {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
               </div>
               <OpenForgetPassBox />
            </div>

            {/* Login Button */}
            <button className="btn w-full bg-green-600 text-white hover:bg-green-800 mb-4  transition-colors duration-500">
               লগইন করুন
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-400 ">
               যদি আপনার একটি অ্যাকাউন্ট না থাকে?{" "}
               <Link to={'/register'} className="text-blue-600 font-medium hover:underline">
                  রেজিস্টার করুন
               </Link>
            </p>
         </div>
      </div>
   );
}
