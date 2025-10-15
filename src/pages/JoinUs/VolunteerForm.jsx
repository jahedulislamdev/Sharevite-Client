import { FormProvider, useForm } from "react-hook-form";
import RHFInput from "../../Components/Form/RHFInput";
import RHFSelect from "../../Components/Form/RHFselect";

const VolunteerForm = () => {
   const methods = useForm();
   const onSubmitVolunteerForm = (data) => {
      console.log(data);
   };

   return (
      <div className="font-noto ">
         {/* banner and introductory seciton */}
         <section className="flex">
            <div className="space-y-3 py-5">
               <h2 className="font-semibold font-hind text-3xl">আমাদের সহযোগী হোন</h2>
               <p className="subtitle text-lg">এই ফাউন্ডেশনের স্বেচ্ছাসেবক হয়ে সমাজ পরিবর্তনের সাথী হোন। আল্লাহর সন্তুষ্টির উদ্দেশ্যে নিজেকে নিয়োজিত করুন মানবসেবায়।</p>
               <img className="w-[600px] h-[400px] object-center rounded-2xl" src="https://floatingdoctors.com/wp-content/uploads/2022/11/20170503DSC00033-2-1024x683.jpg" alt="volunteerBanner" />
            </div>
            <div>
               <h2>স্বেচ্ছাসেবক হওয়ার নিয়ম ও শর্তাবলি:</h2>

            </div>
         </section>

         <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmitVolunteerForm)} className="space-y-10 max-w-5xl mx-auto  rounded-2xl shadow p-10 mt-10  shadow-green-700/35">
               {/* Header*/}
               <header className="text-center p-10 mb-8 bg-green-800 text-white rounded-t-2xl">
                  <h2 className="text-3xl font-bold mb-2 font-hind text-gray-300">স্বেচ্ছাসেবক নিবন্ধন</h2>
                  <p>
                     ফাউন্ডেশনের অধীনে মানবকল্যানমূলক কাজে অংশ নিতে স্বেচ্ছাসেবক হতে চাইলে নিচের ফর্মটি সঠিকভাবে পূরণ করুন।
                  </p>
               </header>

               {/* ব্যক্তিগত তথ্য*/}
               <section className="p-5 rounded-lg  shadow-xs shadow-green-700/50">
                  <h3 className="text-xl title font-semibold  mb-4 border-l-4 pl-3 border-l-green-800 ">
                     ব্যক্তিগত তথ্য
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4" >
                     <RHFInput type="text" name="fullName" label="নাম" required />
                     <RHFInput type="text" name="fatherName" label="পিতার নাম" required />
                     <RHFInput type="number" name="phoneNumber" label="মোবাইল নম্বর" required />
                     <RHFInput type="email" name="email" label="ই-মেইল" required />
                  </div>
               </section>

               {/* পেশাগত তথ্য*/}
               <section className="p-5 rounded-lg shadow-xs shadow-green-700/50">
                  <h3 className="text-xl title font-semibold mb-4 border-l-4 pl-3 border-l-green-800">
                     পেশাগত তথ্য
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                     <RHFInput type="text" name="occupation" label="বর্তমান পেশা" required />
                     <RHFInput type="text" name="organization" label="কর্মরত প্রতিষ্ঠানের নাম" required />
                     <RHFInput type="text" name="workAddress" label="কর্মস্থলের ঠিকানা" className="md:col-span-2" required />
                  </div>
               </section>

               {/* বর্তমান ঠিকানা*/}
               <section className="p-5 rounded-lg shadow-xs shadow-green-700/50">
                  <h3 className="text-xl title font-semibold mb-4 border-l-4 pl-3 border-l-green-800">
                     বর্তমান ঠিকানা
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                     <RHFSelect name="division" label="বিভাগ" options={["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা"]} />
                     <RHFSelect name="district" label="জেলা" options={["ঢাকা", "গাজীপুর", "নরসিংদী"]} />
                     <RHFSelect name="upazila" label="উপজেলা" options={["সাভার", "ধামরাই", "দোহার"]} />
                     <RHFSelect name="union" label="ইউনিয়ন" options={["সাভার", "ধামরাই", "দোহার"]} />
                     <RHFInput name="fullAddress" label="পূর্ণ ঠিকানা" className="md:col-span-2" />
                  </div>
               </section>

               {/* স্থায়ী ঠিকানা*/}
               <section className="p-5 rounded-lg shadow-xs shadow-green-700/50">
                  <h3 className="text-xl title font-semibold mb-4 border-l-4 pl-3 border-l-green-800">
                     স্থায়ী ঠিকানা
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                     <RHFSelect name="permanentDivision" label="বিভাগ" options={["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা"]} />
                     <RHFSelect name="permanentDistrict" label="জেলা" options={["ঢাকা", "গাজীপুর", "নরসিংদী"]} />
                     <RHFSelect name="permanentUpazila" label="উপজেলা" options={["সাভার", "ধামরাই", "দোহার"]} />
                     <RHFSelect name="permanentUnion" label="ইউনিয়ন" options={["সাভার", "ধামরাই", "দোহার"]} />
                     <RHFInput name="permanentAddress" label="পূর্ণ ঠিকানা" className="md:col-span-2" />
                  </div>
               </section>

               {/* সোশ্যাল মিডিয়া*/}
               <section className="p-5 rounded-lg shadow-xs shadow-green-700/50">
                  <h3 className="text-xl title font-semibold mb-4 border-l-4 pl-3 border-pink-500">
                     সোশ্যাল মিডিয়া সংক্রান্ত তথ্য
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                     <RHFInput name="facebook" label="ফেসবুক আইডির লিঙ্ক" required />
                     <RHFInput name="linkedin" label="লিঙ্কডইন আইডির লিঙ্ক" />
                     <RHFInput name="whatsapp" label="হোয়াটসঅ্যাপ নম্বর" />
                     <RHFInput name="telegram" label="টেলিগ্রাম নম্বর" />
                  </div>
               </section>

               {/* শিক্ষাগত যোগ্যতা*/}
               <section className="p-5 rounded-lg shadow-xs shadow-green-700/50">
                  <h3 className="text-xl title font-semibold mb-4 border-l-4 pl-3 border-l-green-800">
                     শিক্ষাগত যোগ্যতা
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <RHFSelect name="educationMedium" label="পড়াশুনার মাধ্যম" options={["আধুনিক", "মাদ্রাসা", "প্রযুক্তি শিক্ষা"]} required />
                     <RHFSelect name="educationLevel" label="শিক্ষার স্তর" options={["SSC/Equivalent", "HSC/Equivalent", "Graduate", "Post Graduate"]} required />
                     <RHFInput name="lastDegree" label="বিভাগ/ডিগ্রি" required />
                     <RHFInput name="lastInstitution" label="সর্বশেষ শিক্ষা প্রতিষ্ঠানের নাম" required />
                  </div>
               </section>

               {/* Submit*/}
               <button
                  type="submit"
                  className="bg-green-700 font-hind hover:bg-green-800 text-white px-10 py-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-300"
               >
                  সাবমিট করুন
               </button>
            </form>
         </FormProvider>
      </div>
   );
};

export default VolunteerForm;
