import { useState } from "react";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import OpenForgetPassBox from "../../Components/OpenForgetPassBox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../hooks/useContext";
import { toast } from "sonner";

const Login = () => {
   const { loginUser, loginWithGoogle } = useAuthContext();
   const [showPassword, setShowPassword] = useState(false);
   const { register, handleSubmit, formState: { errors } } = useForm();
   const navigate = useNavigate();
   const location = useLocation();

   const onSubmitForm = (data) => {
      loginUser(data.email, data.password)
         .then(() => {
            toast.message('Login Successfull!', {
               description: 'Welcome to The Holy Journey!',
               duration: 1000,
            })
            navigate(location.state ? location.state : "/");
         })
         .catch(err => {
            if (err.code === "auth/invalid-credential") {
               toast.error("Wrong Email or Password");
            } else if (err.code === 'auth/network-request-failed') {
               toast.error("Netwok connection error!", { duration: 4000 })
            } else {
               toast.error("Login Falid! Please Try Again Later.")
            }
            console.error(err);
         })
   };

   return (
      <div className="flex items-start justify-center my-9 md:h-screen font-noto">
         <div className="w-full max-w-sm rounded-xl shadow shadow-green-400 p-8">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-center mb-6 title">লগইন</h2>
            {/* Google Button */}
            <button onClick={() => loginWithGoogle(navigate, location)} className="btn font-onset w-full mb-4 transition-colors duration-500 bg-[#0080000e]">
               <FcGoogle className="mr-2 text-red-500 size-6" />
               Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center mb-4">
               <div className="flex-grow border-t border-gray-300"></div>
               <span className="px-2 text-sm text-gray-500 ">অথবা</span>
               <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <form onSubmit={handleSubmit(onSubmitForm)}>
               {/* Email */}
               <div className="form-control my-7">
                  <label className="label">
                     <span className="label-text flex items-center gap-2 "><FaEnvelope /> ই-মেইল</span>
                  </label>
                  <input
                     placeholder="you@example.com"
                     className={`font-onset input focus:outline-0 w-full ${errors.email ? "border-red-500" : "border-green-800"}`}
                     {...register("email", {
                        required: "ই-মেইল দিন",
                     })}
                  />
                  {errors?.email?.message && <p className="text-red-700 font-noto">{errors.email?.message}</p>}
               </div>

               {/* Password */}
               <div className="form-control my-6 ">
                  <div className="label flex justify-between mb-2">
                     <span className="label-text flex items-center gap-2"><FaLock /> পাসওয়ার্ড</span>
                     <button onClick={() => document.getElementById("forgetPassword").showModal()} type="button" href="#" className="text-sm text-green-600  cursor-pointer">
                        পাসওয়ার্ড ভুলে গেছেন?
                     </button>
                  </div>
                  <div className="relative">
                     <input
                        type={showPassword ? "text" : "password"}
                        placeholder="শক্তিশালী পাসয়ার্ড দিন"
                        className={`font-noto input focus:outline-0 w-full pr-10 ${errors.password ? "border-red-500" : "border-green-700"}`}
                        {...register("password", { required: "পাসওয়ার্ড দিন" })}
                     />
                     {errors?.password?.message && <p className="text-red-700 font-noto">{errors.password?.message}</p>}
                     <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                     >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                     </span>
                  </div>
               </div>

               {/* Login Button */}
               <button className="btn w-full bg-green-700 text-white hover:bg-green-800 mb-4  transition-colors duration-500">
                  লগইন করুন
               </button>

            </form>
            <OpenForgetPassBox />
            {/* Footer */}
            <p className="text-center text-sm text-gray-400 ">
               যদি আপনার অ্যাকাউন্ট না থাকে?{" "}
               <Link to={'/register'} className="text-green-500 font-medium hover:underline">
                  রেজিস্টার করুন
               </Link>
            </p>
         </div>
      </div>
   );
}
export default Login;