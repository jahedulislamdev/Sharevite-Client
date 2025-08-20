import { Link } from "react-router-dom";

const projects = [
   // আগের 4 প্রজেক্ট
   {
      id: 1,
      title: "খাদ্য বিতরণ কার্যক্রম",
      description:
         "অসহায় ও পথশিশুদের জন্য প্রতিদিন বিনামূল্যে খাবার সরবরাহ করা হয়।",
      image: "https://i.pinimg.com/736x/8d/2b/35/8d2b35ce6795a72ee960b4f884b50977.jpg",
      collect: 2300,
   },
   {
      id: 2,
      title: "শিক্ষা সহায়তা কর্মসূচি",
      description:
         "অর্থনৈতিকভাবে পিছিয়ে পড়া শিশুদের বই, খাতা ও শিক্ষা সামগ্রী দেওয়া হয়।",
      image: "https://i.pinimg.com/1200x/fc/b7/57/fcb757fc93ca27dd0d3edba7a0f68df4.jpg",
      collect: 3520,
   },
   {
      id: 3,
      title: "চিকিৎসা ক্যাম্প",
      description:
         "গ্রামীণ ও অসহায় মানুষের জন্য বিনামূল্যে স্বাস্থ্য পরীক্ষা ও ঔষধ বিতরণ।",
      image: "https://i.pinimg.com/736x/3d/fa/29/3dfa2975bd61e820df0ddcab3c4a343f.jpg",
      collect: 1507,
   },
   {
      id: 4,
      title: "আর্থিক সহায়তা",
      description:
         "দরিদ্র পরিবারগুলোর জরুরি প্রয়োজনে অর্থ সহায়তা প্রদান করা হয়।",
      image: "https://i.pinimg.com/1200x/79/c6/31/79c63124fe792a63203c9f0615f8aa1e.jpg",
      collect: 5040,
   },
   // নতুন 10 প্রজেক্ট
   {
      id: 5,
      title: "বৃক্ষ রোপণ অভিযান",
      description:
         "পরিবেশ সংরক্ষণের জন্য গ্রামের বিভিন্ন স্থানে বৃক্ষরোপণ কর্মসূচি।",
      image: "https://i.pinimg.com/736x/9a/6c/5d/9a6c5d6afbf866c98ed8a2a42c09ef99.jpg",
      collect: 1200,
   },
   {
      id: 6,
      title: "বয়স্কদের সহায়তা",
      description:
         "বৃদ্ধ ও অক্ষমদের জন্য খাবার, ওষুধ ও আবাসনের সহায়তা প্রদান।",
      image: "https://i.pinimg.com/736x/b1/a8/89/b1a88992a45292a775b5b758acbb429c.jpg",
      collect: 2800,
   },
   {
      id: 7,
      title: "পানি সরবরাহ প্রকল্প",
      description:
         "গ্রামীণ এলাকায় বিশুদ্ধ পানি পৌঁছে দেয়ার জন্য নতুন কূপ এবং ট্যাঙ্ক স্থাপন।",
      image: "https://i.pinimg.com/1200x/b9/12/99/b91299f95fe7bdbe27633a6370480232.jpg",
      collect: 3600,
   },
   {
      id: 8,
      title: "কম্পিউটার প্রশিক্ষণ",
      description:
         "বেকার যুবকদের দক্ষতা বৃদ্ধির জন্য বিনামূল্যে কম্পিউটার প্রশিক্ষণ প্রদান।",
      image: "https://gnbangla.wordpress.com/wp-content/uploads/2018/03/1.jpg?w=1446",
      collect: 2100,
   },
   {
      id: 9,
      title: "পরিচ্ছন্নতা অভিযান",
      description:
         "গ্রাম এবং শহরের আশেপাশে পরিচ্ছন্নতা বজায় রাখতে সচেতনতা ও কার্যক্রম।",
      image: "https://i.pinimg.com/736x/e5/f4/4f/e5f44f7c7e2f57a91a71982eb3ddafdd.jpg",
      collect: 1750,
   },
   {
      id: 10,
      title: "নারী ক্ষমতায়ন কর্মসূচি",
      description:
         "নারীদের স্বাবলম্বী করতে স্বনির্ভরতা প্রকল্প ও প্রশিক্ষণ প্রদান।",
      image: "https://i.pinimg.com/736x/2f/ab/35/2fab350dbe42048b97eec73579b92d5c.jpg",
      collect: 2980,
   },
   {
      id: 11,
      title: "শীতবস্ত্র বিতরণ",
      description:
         "শীতকালে অসহায়দের জন্য উষ্ণ জামা-কাপড় বিতরণ করা হয়।",
      image: "https://www.khaborerkagoj.com/uploads/2023/12/09/1702096960.seet.jpg",
      collect: 1450,
   },
   {
      id: 12,
      title: "প্রাণী সেবা কর্মসূচি",
      description:
         "গৃহপালিত ও বন্য প্রাণীর জন্য খাবার ও চিকিৎসা সহায়তা।",
      image: "https://i.pinimg.com/1200x/d7/ab/ea/d7abea3312d403c3e3f541e3f666635f.jpg",
      collect: 1100,
   },
   {
      id: 15,
      title: "প্রাকৃতিক দূর্যোগ সহায়তা",
      description:
         "প্রাকৃতিক দুর্যোগে ক্ষতিগ্রস্ত মানুষদের জন্য ত্রাণ ও পুনর্বাসন কার্যক্রম।",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
      collect: 4100,
   },
];

const AvailableProjects = () => {
   return (
      <section className="py-14 bg-green-50 font-hind">
         <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center mb-12">
               <h2 className="text-lg sm:text-xl md:text-4xl font-bold text-center text-green-800">আমাদের চলমান প্রজেক্টসমূহ</h2>
               <Link to="/projects" className="text-white bg-green-600 sm:text-xs md:text-base py-1 px-2 btn-soft md:p-3 rounded-lg">সব প্রজেক্ট দেখুন</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
               {projects.slice(0, 6).map((project) => (
                  <div
                     key={project.id}
                     className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow transition-transform duration-300 transform"
                  >
                     {/* Image with overlay */}
                     <div className="relative">
                        <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-46 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                     </div>

                     {/* Content */}
                     <div className="p-6 space-y-3">
                        <h3 className="text-lg md:text-xl font-bold text-green-700 relative">
                           {project.title}
                           <span className="absolute left-0 -bottom-2 w-12 h-1 bg-green-500 rounded-full"></span>
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                           {project.description}
                        </p>
                        {/* collected amount tracking */}
                        <div className="w-full bg-gray-100 pe-5 ps-2 py-3 rounded-2xl">
                           <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                              সংগ্রহিত অর্থের পরিমাণ: <span className="font-bold">৳{project.collect}</span>
                           </p>
                           <progress className="progress progress-success w-full" value={project.collect} max="10000"></progress>
                        </div>
                        <button className="mt-3 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition">
                           বিস্তারিত দেখুন
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default AvailableProjects;
