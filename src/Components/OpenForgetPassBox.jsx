import { FaEnvelope } from "react-icons/fa";

const ForgetPasswordDialog = () => {
   return (
      <dialog id="forgetPassword" className="modal">
         <div className="modal-box max-w-lg font-hind">
            {/* Title */}
            <h3 className="text-xl font-bold text-center mb-4 title ">পাসওয়ার্ড ভুলে গেছেন?</h3>
            <p className="text-sm text-gray-500 text-center mb-10 leading-relaxed">
               আপনার নিবন্ধিত ই-মেইল ঠিকানা লিখুন এবং আমরা আপনাকে একটি রিসেট লিঙ্ক পাঠাব। এই লিংকের মাধ্যমে আপনি আপনার পাসওয়ার্ড পুনরুদ্ধার করতে পারবেন।
            </p>

            {/* Email Input */}
            <div className="form-control mb-4">
               <label className="label mb-2">
                  <span className="label-text flex items-center gap-2">
                     <FaEnvelope className="text-gray-500" /> ই-মেইল এড্রেস
                  </span>
               </label>
               <input
                  type="email"
                  placeholder="you@example.com"
                  className="input focus:outline-0 focus:border-green-500 w-full text-base"
               />
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
               <form method="dialog">
                  <button className="btn bg-red-700 text-white font-hind">বাতিল</button>
               </form>
               <button type="submit" className="btn bg-green-500 text-white hover:bg-green-600">
                  পাসওয়ার্ড রিসেট লিঙ্ক পাঠান
               </button>
            </div>
         </div>

         {/* Backdrop */}
         <form method="dialog" className="modal-backdrop">
            <button>close</button>
         </form>
      </dialog>
   );
};

export default ForgetPasswordDialog;
