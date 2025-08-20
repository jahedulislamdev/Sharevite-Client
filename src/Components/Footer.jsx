import { useContext } from "react";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import GlobalContext from "../contexts/create_context";
import { Link } from "react-router-dom";

export default function Footer() {
   const { navElements } = useContext(GlobalContext)
   return (
      <footer className="bg-green-950 text-gray-300 py-10 font-hind">
         <div className="container mx-auto grid md:grid-cols-4 gap-8 px-6">
            {/* Logo and About */}
            <div className="space-y-4">
               <div className="flex items-center space-x-2">
                  <img
                     src={navElements.logoUrl}
                     alt={navElements.logoText}
                     className="w-12 h-12 rounded-full"
                  />
                  <div>
                     <h2 className="text-lg font-bold text-white">
                        {navElements.logoText}
                     </h2>
                     <p className="text-xs">একটি সমাজ সেবা মূলক প্রতিষ্ঠান</p>
                  </div>
               </div>
               <p className="mt-4 text-sm leading-relaxed">
                  এই প্রতিষ্ঠান মানবতার শিক্ষক, মানুষের মুক্তি ও শান্তির দূত,
                  মানবসেবার আদর্শ, মহানবী মুহাম্মদ সা.-এর পদাঙ্ক অনুসরণ করে
                  আত্মমানবতার সেবায় একটি আদর্শ কল্যাণসমাজ বিনির্মাণে
                  ব্যাপশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে।
               </p>
               <div className="flex space-x-4 mt-4 text-2xl">
                  <a href="#" className="hover:text-white">
                     <FaFacebook />
                  </a>
                  <a href="#" className="hover:text-white">
                     <FaYoutube />
                  </a>
                  <a href="#" className="hover:text-white">
                     <FaLinkedin />
                  </a>
               </div>
            </div>

            {/* Menu */}
            <div>
               <h3 className="text-lg font-semibold text-white mb-3">মেনু</h3>
               <ul className="space-y-2 text-sm">
                  <li><a href="#">আমাদের সম্পর্কে</a></li>
                  <li><a href="#">কার্যক্রমসমূহ</a></li>
                  <li><a href="#">ব্লগ</a></li>
                  <li><a href="#">গ্যালারি</a></li>
               </ul>
            </div>

            {/* Get Involved */}
            <div>
               <h3 className="text-lg font-semibold text-white mb-3">যুক্ত হোন</h3>
               <ul className="space-y-2 text-sm">
                  <li><a href="#">নিয়মিত দাতা</a></li>
                  <li><a href="#">সদস্য</a></li>
                  <li><a href="#">আজীবন ও দাতা সদস্য</a></li>
                  <li><a href="#">স্বেচ্ছাসেবক</a></li>
                  <li><a href="#">ক্যারিয়ার</a></li>
               </ul>
            </div>

            {/* Others */}
            <div>
               <h3 className="text-lg font-semibold text-white mb-3">অন্যান্য</h3>
               <ul className="space-y-2 text-sm">
                  <li><a href="#">যোগাযোগ</a></li>
                  <li><a href="#">পরিবেশবার শর্তাবলী</a></li>
                  <li><a href="#">গোপনীয়তা নীতি</a></li>
               </ul>
            </div>
         </div>

         {/* Bottom Text */}
         <div className="text-center text-gray-400 text-sm mt-10 border-t border-dashed border-gray-700 pt-4">
            All rights reserved © {new Date().getFullYear()} {navElements.logoText}. Designed with ❤️ by <a target="_blank" href="https://jahedulislam.dev">JahedulIslamdev</a>
         </div>
      </footer>
   );
}
