import React from "react";

const Banner = () => {
   return (
      <div className="relative font-hind">
         {/* Background Image */}
         <img
            className="w-full h-[50vh] md:h-[85vh] object-cover object-center"
            src="https://unlockdesizn.com/html/nonprofit/be-ahand/images/home/h1.jpg"
            alt="Banner"
         />

         {/* Overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
            <div className="max-w-4xl px-6 md:px-16 space-y-6">
               {/* Title */}
               <h1 className="text-lg md:text-4xl md:font-extrabold text-white leading-snug drop-shadow-lg">
                  “যে লোক তার কোন মুসলিম ভাইয়ের অভাব পূরণের চেষ্টা করে মহান আল্লাহ তার
                  অভাব পূরণ করবেন”
               </h1>

               {/* Subtitle */}
               <p className="text-gray-200 font-light md:font-medium text-base md:text-lg leading-relaxed max-w-3xl line-clamp-2">
                  ‘নিশ্চয়ই সে ব্যক্তি পূর্ণ মুমিন নয় যে নিজে পেট পুরে আহার করে কিন্তু
                  তার প্রতিবেশী ক্ষুধার্ত থাকে’। তিনি আরো বলেন, ক্ষুধার্তকে খাদ্য দান কর।
                  তাহ’লে শান্তির সাথে জান্নাতে প্রবেশ করবে।
               </p>

               {/* CTA Button */}
               <div>
                  <button className="px-6 py-3 cursor-pointer  bg-green-500 hover:bg-green-700 text-white font-medium rounded-lg shadow-lg transition-colors duration-300">
                     এখনই দান করুন
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
