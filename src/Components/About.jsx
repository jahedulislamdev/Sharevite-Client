const About = () => {
   return (
      <section className="bg-gradient-to-b from-green-50 to-green-100 py-20 px-6 sm:px-12 font-hind border border-green-100">
         <div className="max-w-6xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent mb-6">
               আমাদের সম্পর্কে
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto ">
               আমরা বিশ্বাস করি, পৃথিবীতে কারও ক্ষুধার্ত থাকার কথা নয়। প্রতিদিন অসংখ্য
               খাবার অপচয় হয়, অথচ হাজারো মানুষ একবেলা খাবারের জন্য সংগ্রাম করে। আমাদের
               এই ফুড ডোনেশন প্ল্যাটফর্ম সেই সেতুবন্ধন তৈরি করে—যেখানে অতিরিক্ত খাবার
               থাকা মানুষ ও প্রতিষ্ঠানগুলো তাদের অব্যবহৃত খাবার দান করতে পারেন, আর আমরা
               সেই খাবার পৌঁছে দিই অসহায় ও সুবিধাবঞ্চিত মানুষের হাতে।
            </p>

            {/* Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 cursor-default">
               <div className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-2xl transition duration-500">
                  <h3 className="text-2xl font-semibold text-green-700">
                     🍛 ক্ষুধামুক্তি
                  </h3>
                  <p className="text-gray-600 mt-3">
                     ক্ষুধার্ত মানুষের মুখে হাসি ফোটানো আমাদের প্রথম লক্ষ্য।
                  </p>
               </div>
               <div className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-2xl transition duration-500">
                  <h3 className="text-2xl font-semibold text-green-700">
                     🌱 টেকসই সমাজ
                  </h3>
                  <p className="text-gray-600 mt-3">
                     অপচয় রোধ করে পরিবেশবান্ধব ও টেকসই সমাজ গঠন।
                  </p>
               </div>
               <div className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-2xl transition duration-500">
                  <h3 className="text-2xl font-semibold text-green-700">
                     🤝 সহমর্মিতা
                  </h3>
                  <p className="text-gray-600 mt-3">
                     মানুষে মানুষে ভালোবাসা ও সহযোগিতার বন্ধন ছড়িয়ে দেওয়া।
                  </p>
               </div>
            </div>

            {/* Closing Line */}
            <p className="mt-14 text-xl font-semibold text-green-800 max-w-2xl mx-auto">
               ✨ একসাথে আমরা পরিবর্তন আনতে পারি। ছোট্ট একটি দানই কারও জীবনে বড় পরিবর্তন
               আনতে পারে।
            </p>
         </div>
      </section>
   );
};

export default About;
