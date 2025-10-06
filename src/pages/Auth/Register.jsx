import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock, FaImage, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useContext";
import { toast } from "sonner";
import usePostData from "../../hooks/usePostData";

const Registration = () => {
   const { registerUser } = useAuthContext();
   const [showPassword, setShowPassword] = useState(false);
   const { register, handleSubmit, formState: { errors } } = useForm();
   const { mutate: saveUser } = usePostData('users', "রেজিস্ট্রেশন সম্পন্ন হয়েছে!", "users")
   const navigate = useNavigate();

   const onSubmitForm = (data) => {
      // create an user credential obj without secret password for sending our db
      const userCredential = {
         name: data.userName, email: data.userEmail, profileUrl: data.profileUrl
      }

      //call firebse register
      registerUser(data.userEmail, data.password)
         .then(() => {
            // we post userCredential to DB (if registration successfull)
            // console.log('bd user info :', userCredential)
            saveUser(userCredential);
            navigate("/login")
         })
         .catch(err => {
            console.log(err)
            if (err.code === "auth/email-already-in-use") {
               toast.error("Email already registered.")
            } else if (err.code === "auth/network-request-failed") {
               toast.error("Network busy.")
            } else {
               toast.error("Registration Failed! Please Try Again.")
            }
         });
   };

   // js url checker api
   const isValidUrl = (url) => {
      try {
         const newUrl = new URL(url);
         return /\.(png|jpe?g|gif|webp|bmp|svg|avif|heic)$/i.test(newUrl.pathname);
      } catch {
         return false;
      }
   }

   return (
      <div className="flex items-center justify-center mt-5 mb-10 font-noto">
         <div className="w-full max-w-sm md:max-w-md rounded-xl shadow shadow-green-400 p-8">
            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-6 title">রেজিস্ট্রেশন</h2>

            <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-7">
               {/* Name */}
               <div className="form-control">
                  <label className="label">
                     <span className="label-text flex items-center gap-1">
                        <FaUser /> নাম<span className="text-error">*</span>
                     </span>
                  </label>
                  <input
                     type="text"
                     placeholder="আপনার নাম লিখুন"
                     className={`input focus:outline-0 w-full ${errors.userName ? "border-red-700" : ""}`}
                     {...register("userName", { required: "আপনার নাম লিখুন" })}
                  />
                  <p className="mt-1 text-red-600 font-extralight text-sm">{errors.userName?.message}</p>
               </div>

               {/* Email */}
               <div className="form-control">
                  <label className="label">
                     <span className="label-text flex items-center gap-2">
                        <FaEnvelope /> ইমেইল<span className="text-error">*</span>
                     </span>
                  </label>
                  <input
                     type="email"
                     placeholder="you@example.com"
                     className={`input focus:outline-0 w-full ${errors.userEmail ? "border-red-700" : ""}`}
                     {...register("userEmail", { required: "আপনার ই-মেইল দিন।", pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "সঠিক ইমেইল দিন" } })}
                  />
                  <p className="mt-1 text-red-600 font-extralight text-sm">{errors.userEmail?.message}</p>
               </div>

               {/* Password */}
               <div className="form-control">
                  <label className="label">
                     <span className="label-text flex items-center gap-2">
                        <FaLock /> পাসওয়ার্ড<span className="text-error">*</span>
                     </span>
                  </label>
                  <div className="relative">
                     <input
                        type={showPassword ? "text" : "password"}
                        placeholder="একটি শক্তিশালী পাসওয়ার্ড দিন"
                        className={`input focus:outline-0 w-full ${errors.password ? "border-red-700" : ""}`}
                        {...register("password", { required: "একটি শক্তিশালী পাসওয়ার্ড দিন", pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, message: "পাসওয়ার্ড নূন্যতম ৬ অক্ষর এবং কমপক্ষে ১টি সংখ্যা দিন।" } })}
                     />
                     <p className="mt-1 text-red-600 font-extralight text-sm">{errors.password?.message}</p>
                     <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                     >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                     </span>
                  </div>
               </div>

               {/* Photo URL */}
               <div className="form-control">
                  <label className="label">
                     <span className="label-text flex items-center gap-2">
                        <FaImage /> ছবি ইউআরএল<span className="text-error">*</span>
                     </span>
                  </label>
                  <input
                     type="text"
                     placeholder="ছবির লিংক দিন (যেমন: https://...)"
                     className={`input focus:outline-0 w-full ${errors.profileUrl ? "border-red-700" : ""}`}
                     {...register("profileUrl", { required: "আপনার ছবির লিংক দিন", pattern: { value: isValidUrl, message: "একটি আসল ছবির লিংক দিন" } })}
                  />
                  <p className="mt-1 text-red-600 font-extralight text-sm">{errors.profileUrl?.message}</p>
               </div>

               {/* Register Button */}
               <button className="btn w-full bg-green-500 text-white hover:bg-green-600">
                  রেজিস্ট্রেশন করুন
               </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-gray-600 mt-4">
               ইতিমধ্যেই একটি অ্যাকাউন্ট আছে?{" "}
               <Link to="/login" className="text-green-600 font-medium hover:underline">
                  লগইন করুন
               </Link>
            </p>
         </div>
      </div>
   );
}

export default Registration