const Banner = () => {
   return (
      <div className="relative font-hind">
         {/* <img className="w-full h-[80vh] object-cover object-top" src="https://i.postimg.cc/yYkSvxq8/Copilot-20250819-175906.png" alt="Banner" /> */}
         <img className="w-full h-[60vh] md:h-[80vh] object-cover object-top" src="https://unlockdesizn.com/html/nonprofit/be-ahand/images/home/h1.jpg" alt="Banner" />
         <div className="absolute top-0 left-0 bg-gradient-to-r from-gray-900/60 to to-gray-900/40 w-full h-full flex justify-start items-center">
            <div className="md:w-3/5 p-8 space-y-4">
               <h1 className="text-gray-100 text-xl md:text-4xl font-semibold tracking-wider">"যে লোক তার কোন মুসলিম ভাইয়ের অভাব পূরণের চেষ্টা করে মহান আল্লাহ তার অভাব পূরণ করবেন"</h1>
               <p className="text-gray-100/80 text-sm md:text-lg"> ‘নিশ্চয়ই সে ব্যক্তি পূর্ণ মুমিন নয় যে নিজে পেট পুরে আহার করে কিন্তু তার প্রতিবেশী ক্ষুধার্ত থাকে’ তিনি আরো বলেন, ক্ষুধার্তকে খাদ্য দান কর। তাহ’লে শান্তির সাথে জান্নাতে প্রবেশ করবে।</p>
            </div>
         </div>
      </div>
   );
};

export default Banner;