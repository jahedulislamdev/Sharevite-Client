const Payment = () => {
   return (
      <div className="min-h-screen bg-base-200 flex justify-center items-center py-10 px-4">

         {/* Card */}
         <div className="bg-base-100 shadow-xs shadow-green-500 rounded-2xl p-8 max-w-lg w-full border border-base-300">

            {/* Title */}
            <h2 className="title text-3xl font-bold text-center ">
               আপনার আনুদান দিন
            </h2>
            <p className="subtitle text-center text-base-content/70 mt-2">
               আপনার ক্ষুদ্র সাহায্য অনেক জীবনের আশার আলো হতে পারে।
            </p>

            {/* Donation Amount */}
            <div className="mt-6">
               <label className="font-hind block font-semibold mb-2 text-base-content">
                  আনুদানের পরিমাণ
               </label>

               <input
                  type="number"
                  placeholder="যেমন: 500"
                  className="input input-bordered w-full focus:outline-0"
               />

               {/* Quick Select Amount */}
               <div className="flex flex-wrap gap-3 mt-4">
                  {[200, 500, 1000, 2000].map(amount => (
                     <button
                        key={amount}
                        className="btn btn-md btn-outline"
                     >
                        ৳{amount}
                     </button>
                  ))}
               </div>
            </div>

            {/* Name */}
            <div className="mt-6 font-hind">
               <label className=" block font-semibold mb-2 text-base-content">
                  আপনার নাম
               </label>
               <input
                  type="text"
                  placeholder="যেমন: মোঃ শহিদুল ইসলাম"
                  className="input input-bordered w-full focus:outline-0 "
               />
            </div>

            {/* Email */}
            <div className="mt-6">
               <label className="font-hind block font-semibold mb-2 text-base-content">
                  ইমেইল ঠিকানা
               </label>
               <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="input input-bordered w-full focus:outline-0"
               />
            </div>

            {/* Payment Method */}
            <div className="mt-6">
               <label className="font-hind block font-semibold mb-2 text-base-content">
                  পেমেন্ট মেথড
               </label>

               <div className="grid grid-cols-3 gap-4 font-hind">
                  <button className="btn btn-outline">বিকাশ</button>
                  <button className="btn btn-outline">নগদ</button>
                  <button className="btn btn-outline">রকেট</button>
               </div>
            </div>

            {/* Submit Button */}
            <button className="font-hind btn bg-green-700 text-white w-full mt-8 rounded-xl">
               আনুদান করুন
            </button>

            <p className="text-center text-base-content/60 text-sm mt-4">
               আপনার সকল তথ্য নিরাপদে সংরক্ষিত থাকে।
            </p>
         </div>
      </div>
   );
};

export default Payment;
