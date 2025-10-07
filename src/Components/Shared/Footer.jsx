import { useContext } from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import GlobalContext from "../../contexts/create_global_context";

export default function Footer() {
   const { navBrand } = useContext(GlobalContext);

   return (
      <footer className="bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-gray-300 py-12 font-noto relative overflow-hidden">
         {/* Glow Effect */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent)]"></div>

         <div className="container mx-auto grid md:grid-cols-4 gap-10 px-6 relative z-10">
            {/* Brand & About */}
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <img
                     src={navBrand.logoUrl}
                     alt={navBrand.logoText}
                     className="w-12 h-12 rounded-full border border-green-700 shadow-lg"
                  />
                  <div>
                     <h2 className="text-xl font-semibold text-white font-hind tracking-wide">
                        {navBrand.logoText}
                     </h2>
                     <p className="text-xs text-gray-400">একটি সমাজ সেবা মূলক প্রতিষ্ঠান</p>
                  </div>
               </div>

               <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  মানবতার শিক্ষক, মানুষের মুক্তির দূত, মহানবী মুহাম্মদ (সা.)-এর
                  আদর্শে অনুপ্রাণিত হয়ে এই প্রতিষ্ঠান আত্মমানবতার সেবায়
                  কল্যাণমূলক সমাজ গঠনে নিরলস প্রচেষ্টা চালিয়ে যাচ্ছে।
               </p>

               <div className="flex gap-4 mt-5 text-lg">
                  {[
                     { icon: <FaFacebookF />, href: "https://www.facebook.com/jahedulislam.jishan.9" },
                     { icon: <FaYoutube />, href: "https://www.youtube.com/" },
                     { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/jahedul-islam-87881935b/" },
                  ].map((item, i) => (
                     <a
                        key={i}
                        href={item.href}
                        className="p-2 rounded-full border border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                     >
                        {item.icon}
                     </a>
                  ))}
               </div>
            </div>

            {/* Menu */}
            <FooterColumn
               title="মেনু"
               links={["আমাদের সম্পর্কে", "কার্যক্রমসমূহ", "ব্লগ", "গ্যালারি"]}
            />

            {/* Get Involved */}
            <FooterColumn
               title="যুক্ত হোন"
               links={[
                  "নিয়মিত দাতা",
                  "সদস্য",
                  "আজীবন ও দাতা সদস্য",
                  "স্বেচ্ছাসেবক",
                  "ক্যারিয়ার",
               ]}
            />

            {/* Others */}
            <FooterColumn
               title="অন্যান্য"
               links={["যোগাযোগ", "পরিবেশবার শর্তাবলী", "গোপনীয়তা নীতি"]}
            />
         </div>

         {/* Bottom Text */}
         <div className="mt-12 text-center text-gray-400 text-sm border-t border-green-800 pt-5 relative z-50">
            © {new Date().getFullYear()}{" "}
            <span className="text-green-400 font-semibold">{navBrand.logoText}</span>.
            Developed with <span className="text-red-500">❤️</span> by{" "}
            <a
               href="https://jahedulislam.dev"
               target="_blank"
               rel="noopener noreferrer"
               className="text-green-400 hover:text-white transition"
            >
               JahedulIslamdev
            </a>
         </div>
      </footer>
   );
}

const FooterColumn = ({ title, links }) => (
   <div>
      <h3 className="text-lg font-semibold text-white mb-4 relative inline-block after:content-[''] after:w-10 after:h-[2px] after:bg-green-600 after:absolute after:-bottom-1 after:left-0">
         {title}
      </h3>
      <ul className="space-y-2 text-sm">
         {links.map((link, i) => (
            <li key={i}>
               <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-300"
               >
                  {link}
               </a>
            </li>
         ))}
      </ul>
   </div>
);
