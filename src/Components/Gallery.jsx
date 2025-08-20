import React, { useState } from "react";

const images = [
   "https://i.pinimg.com/1200x/7d/e1/33/7de1339b9803194593d3b1119a9859f2.jpg",
   "https://i.pinimg.com/736x/44/f4/f6/44f4f634257ab1429f60933bcd99697e.jpg",
   "https://i.pinimg.com/1200x/4f/65/50/4f655006f3133b231fe6917aae2031ce.jpg",
   "https://i.pinimg.com/1200x/21/80/5e/21805ea623588adbab3cacb6d1508077.jpg",
   "https://i.pinimg.com/1200x/e8/16/5f/e8165f2319cebc257a3f8530981e3035.jpg",
   "https://i.pinimg.com/1200x/47/48/f4/4748f4c9ba731e52c19328552a968a81.jpg",
];

const Gallery = () => {
   const [selectedImg, setSelectedImg] = useState(null);

   return (
      <section className="py-16 bg-gray-50 font-hind ">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
               আমাদের গ্যালারি
            </h2>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
               {images.map((src, index) => (
                  <div
                     key={index}
                     className="relative mb-4 cursor-pointer group"
                     onClick={() => setSelectedImg(src)}
                  >
                     <img
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="w-full rounded-xl object-cover transition-transform duration-500 "
                     />
                     <div className="absolute inset-0 bg-black/40 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                        <span className="text-white text-lg font-semibold">
                           View Image
                        </span>
                     </div>
                  </div>
               ))}
            </div>

            {/* Lightbox */}
            {selectedImg && (
               <div
                  className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                  onClick={() => setSelectedImg(null)}
               >
                  <img
                     src={selectedImg}
                     alt="Enlarged"
                     className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
                  />
               </div>
            )}
         </div>
      </section>
   );
};

export default Gallery;
