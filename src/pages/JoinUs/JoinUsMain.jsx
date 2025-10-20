import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VolunteerForm from "./VolunteerForm";
import RegulerDonatorForm from "./RegulerDonatorForm";
import LifetimeMemberForm from "./LifetimeMemberForm";
import JobNotice from "./Career/JobNotice";

const joinOptions = [
   { id: 1, title: "স্বেচ্ছাসেবক", form: "volunteer" },
   { id: 2, title: "নিয়মিত দাতা", form: "regulerDoner" },
   { id: 3, title: "আজীবন সদস্য", form: "lifetimeMember" },
   { id: 4, title: "ক্যারিয়ার", form: "career" },
];

const JoinUsMain = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [selectedForm, setSelectedForm] = useState(searchParams.get("form") || "regulerDoner");

   useEffect(() => {
      if (selectedForm) {
         setSearchParams({ form: selectedForm });
      }
   }, [selectedForm, setSearchParams]);

   const renderForm = () => {
      switch (selectedForm) {
         case "volunteer":
            return <VolunteerForm />;
         case "regulerDoner":
            return <RegulerDonatorForm />;
         case "lifetimeMember":
            return <LifetimeMemberForm />;
         case "career":
            return <JobNotice />;
         default:
            return (
               <RegulerDonatorForm />
            );
      }
   };

   return (
      <div className="md:w-11/12 mx-auto p-4">
         {/* Header */}
         <div className="text-center pb-10 pt-5 space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 font-hind">
               <span className="title">আমাদের সঙ্গে যুক্ত হন</span> 🤝
            </h2>
            <p className="font-noto text-lg subtitle leading-relaxed">
               মানবতার সেবায় এগিয়ে আসুন — স্বেচ্ছাসেবক, দাতা বা আজীবন সদস্য হিসেবে যুক্ত হয়ে
               সমাজ পরিবর্তনের অংশ হোন। <br className="hidden sm:block" />
               নিচের ট্যাব থেকে একটি নির্বাচন করুন।
            </p>
         </div>

         {/* Tabs */}
         <nav className="flex justify-between md:justify-center gap-x-1 sm:gap-x-5 md:gap-x-10 p-4 mb-6 shadow-xs rounded-2xl shadow-green-200 mx-auto">
            {joinOptions.map((opt) => (
               <button
                  key={opt.id}
                  onClick={() => setSelectedForm(opt.form)}
                  className={`py-2 px-2 md:px-10 rounded-lg font-hind text-sm sm:text-lg font-semibold transition-all duration-300 ${selectedForm === opt.form
                     ? "bg-green-700 text-white shadow-md"
                     : "bg-base-200 hover:bg-base-300"
                     }`}
               >
                  {opt.title}
               </button>
            ))}
         </nav>

         {/* Rendered Form */}
         <div className="mt-6">{renderForm()}</div>
      </div>
   );
};

export default JoinUsMain;
