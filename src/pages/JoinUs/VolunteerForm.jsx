import { FormProvider, useForm } from "react-hook-form";
import RHFInput from "../../Components/Form/RHFInput";
import RHFSelect from "../../Components/Form/RHFselect";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUserCircle } from 'react-icons/fa';
import useHostImg from "../../hooks/useHostImg";
import useAddressSelector from "../../hooks/useAddressSelector";

const rules =
   [
      "এই ফাউন্ডেশনের নীতি ও আদর্শের প্রতি একমত হতে হবে।",
      "সেবামূলক কাজে আগ্রহী হতে হবে।",
      "কোনোরূপ পারিশ্রমিকের প্রত্যাশা করা যাবে না।",
      "প্রকল্প বাস্তবায়নে আমনতাদরি বজায় রাখতে হবে।"
   ]
const VolunteerForm = () => {
   const methods = useForm();
   const presentAddress = useAddressSelector();
   const permanentAddress = useAddressSelector();
   const { fileInputRef, handleImageChange, previewImage } = useHostImg(1, 2);

   const onSubmitVolunteerForm = (data) => {
      console.log(data);
   };


   return (
      <div className="font-noto ">
         {/* banner and introductory seciton */}
         <section className="md:flex gap-x-6">
            <div className="space-y-3 py-5 flex-1 p-5">
               <h2 className="font-semibold font-hind text-xl">আমাদের সহযোগী হোন</h2>
               <p className="subtitle text-lg">এই ফাউন্ডেশনের স্বেচ্ছাসেবক হয়ে সমাজ পরিবর্তনের সাথী হোন। আল্লাহর সন্তুষ্টির উদ্দেশ্যে নিজেকে নিয়োজিত করুন মানবসেবায়।</p>
               <img className="w-full md:w-[600px] h-[200px] md:h-[300px] object-center rounded-2xl" src="https://floatingdoctors.com/wp-content/uploads/2022/11/20170503DSC00033-2-1024x683.jpg" alt="volunteerBanner" />
            </div>
            <div className="flex-1 p-5 space-y-5">
               <h2 className="text-2xl font-semibold title">স্বেচ্ছাসেবক হওয়ার নিয়ম ও শর্তাবলি:</h2>
               <div className="bg-base-200 p-5 space-y-4 mt-5 rounded-2xl">
                  {
                     rules?.map(((r, idx) => <div className="text-xl flex gap-x-2.5 items-center" key={idx}><p><IoMdCheckmarkCircleOutline className="size-6 text-green-700" /></p>{r}</div>))
                  }
               </div>
               <div className="bg-base-200 p-5 mt-5 rounded-2xl font-semibold">
                  <p className="text-xl text-center">মানুষের মধ্যে সর্বোত্তম সেই ব্যক্তি, যে মানুষের উপকার করে। (সহীহ আল-জামে আস-সগীর, ৩২৮৯)</p>
               </div>
            </div>
         </section>
         <p className="px-5 text-lg subtitle">আসুন, আমরা মানুষের জন্য কিছু করি। আপনার সদিচ্ছা ও সময় বদলে দিতে পারে কোনো অসহায় মানুষের দিন। নিজেকে নিবেদিত করুন দাওয়াহ, সেবামূলক ও মানবিক কাজে। এখনই যুক্ত হোন আমাদের স্বেচ্ছাসেবক টিমে!</p>

         <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmitVolunteerForm)} className="space-y-10 max-w-5xl mx-auto rounded-2xl sm:shadow  md:p-10 mt-10  shadow-green-700/35">
               {/* Header*/}
               <header className="text-center p-5 md:p-10 mb-8 bg-green-800 text-white rounded-t-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 font-hind text-gray-300">স্বেচ্ছাসেবক নিবন্ধন</h2>
                  <p className="text-sm md:text-base subtitle">
                     ফাউন্ডেশনের অধীনে মানবকল্যানমূলক কাজে অংশ নিতে স্বেচ্ছাসেবক হতে চাইলে নিচের ফর্মটি সঠিকভাবে পূরণ করুন।
                  </p>
               </header>

               {/* ব্যক্তিগত তথ্য*/}
               <section className="p-5 rounded-lg shadow-xs shadow-green-700/50">
                  <h3 className="text-xl title font-semibold  mb-4 border-l-4 pl-3 border-l-green-800 ">
                     ব্যক্তিগত তথ্য
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7" >
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-x-7 lg:grid-cols-3">
                     <RHFSelect
                        name={"division"}
                        fieldArray={presentAddress.divisions}
                        label='বিভাগ'
                        onchange={presentAddress?.setSelectedDivision}
                        options={presentAddress.divisions?.map(d => d.bn_name)}
                        value={presentAddress.selectedDivision} />
                     {/* districts */}
                     <RHFSelect
                        name={"districts"}
                        fieldArray={presentAddress.districts}
                        label='জেলা'
                        onchange={presentAddress?.setSelectedDistrict}
                        options={presentAddress.districts?.map(d => d.bn_name)}
                        value={presentAddress.selectedDistrict} />
                     {/* upazillas */}
                     <RHFSelect
                        name={"upazillas"}
                        fieldArray={presentAddress.upazillas}
                        label='উপজেলা'
                        onchange={presentAddress?.setSelectedUpazilla}
                        options={presentAddress.upazillas?.map(d => d.bn_name)}
                        value={presentAddress.selectedUpazilla} />
                     {/* unions */}
                     <RHFSelect
                        name={"unions"}
                        fieldArray={presentAddress.unions}
                        label='ইউনিয়ন'
                        onchange={presentAddress?.setSelectedUnion}
                        options={presentAddress.unions?.map(d => d.bn_name)}
                        value={presentAddress.selectedUnion} />
                     <RHFInput name="fullAddress" label="পূর্ণ ঠিকানা" className="md:col-span-2" />
                  </div>
               </section>

               {/* স্থায়ী ঠিকানা*/}
               <section className="p-5 rounded-lg shadow-xs shadow-green-700/50">
                  <h3 className="text-xl title font-semibold mb-4 border-l-4 pl-3 border-l-green-800">
                     স্থায়ী ঠিকানা
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-7">
                     <RHFSelect
                        name={"division"}
                        fieldArray={permanentAddress.divisions}
                        label='বিভাগ'
                        onchange={permanentAddress?.setSelectedDivision}
                        options={permanentAddress.divisions?.map(d => d.bn_name)}
                        value={permanentAddress.selectedDivision} />
                     {/* districts */}
                     <RHFSelect
                        name={"districts"}
                        fieldArray={permanentAddress.districts}
                        label='জেলা'
                        onchange={permanentAddress?.setSelectedDistrict}
                        options={permanentAddress.districts?.map(d => d.bn_name)}
                        value={permanentAddress.selectedDistrict} />
                     {/* upazillas */}
                     <RHFSelect
                        name={"upazillas"}
                        fieldArray={permanentAddress.upazillas}
                        label='উপজেলা'
                        onchange={permanentAddress?.setSelectedUpazilla}
                        options={permanentAddress.upazillas?.map(d => d.bn_name)}
                        value={permanentAddress.selectedUpazilla} />
                     {/* unions */}
                     <RHFSelect
                        name={"unions"}
                        fieldArray={permanentAddress.unions}
                        label='ইউনিয়ন'
                        onchange={permanentAddress?.setSelectedUnion}
                        options={permanentAddress.unions?.map(d => d.bn_name)}
                        value={permanentAddress.selectedUnion} />
                     <RHFInput name="fullAddress" label="পূর্ণ ঠিকানা" className="md:col-span-2" />
                  </div>
               </section>

               {/* সোশ্যাল মিডিয়া*/}
               <section className="p-5 rounded-lg shadow-xs shadow-green-700/50">
                  <h3 className="text-xl title font-semibold mb-4 border-l-4 pl-3 border-pink-500">
                     সোশ্যাল মিডিয়া সংক্রান্ত তথ্য
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-x-7">
                     <RHFInput name="facebook" label="ফেসবুক আইডির লিঙ্ক" required />
                     <RHFInput name="linkedin" label="লিঙ্কডইন আইডির লিঙ্ক" />
                     <RHFInput name="whatsapp" label="হোয়াটসঅ্যাপ নম্বর" required />
                     <RHFInput name="telegram" label="টেলিগ্রাম নম্বর" />
                  </div>
               </section>

               {/* শিক্ষাগত যোগ্যতা*/}
               <section className="p-5 rounded-lg shadow-xs shadow-green-700/50">
                  <h3 className="text-xl title font-semibold mb-4 border-l-4 pl-3 border-l-green-800">
                     শিক্ষাগত যোগ্যতা
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-x-7">
                     <RHFSelect name="educationMedium" label="পড়াশুনার মাধ্যম" options={["আধুনিক", "মাদ্রাসা", "প্রযুক্তি শিক্ষা"]} required />
                     <RHFSelect name="educationLevel" label="শিক্ষার স্তর" options={["SSC/Equivalent", "HSC/Equivalent", "Graduate", "Post Graduate"]} required />
                     <RHFInput name="lastDegree" label="বিভাগ/ডিগ্রি" required />
                     <RHFInput name="lastInstitution" label="সর্বশেষ শিক্ষা প্রতিষ্ঠানের নাম" required />
                  </div>
               </section>
               <section className="p-5 rounded-lg shadow-xs shadow-green-700/50 ">
                  <h3 className="text-xl title font-semibold mb-4 border-l-4 pl-3 border-l-green-800">
                     আপনার সম্প্রতিক ছবি
                  </h3>
                  <div className="flex gap-x-3 items-center">
                     <div className="relative w-24 h-24 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 bg-gray-50">
                        {previewImage.length ? (
                           previewImage?.map((img, idx) => <img key={idx} src={img} alt="preview" className="w-full h-full object-cover" />)
                        ) : (
                           <FaUserCircle className="text-7xl text-gray-400 opacity-60" />
                        )}
                     </div>
                     {/* Upload Button */}
                     <label type="button" className="font-bold btn btn-lg bg-base-100 px-7 rounded-lg hover:bg-base-200 transition-all duration-300  ">
                        আপলোড করুন
                        <input
                           ref={fileInputRef}
                           type="file"
                           accept="image/jpeg, image/jpg, image/png, image/heic"
                           className="hidden"
                           onChange={(e) => handleImageChange(e, onchange)}
                        />
                     </label>
                  </div>
                  {/* Instruction */}
                  <p className="mt-3 font-onset text-xs text-gray-500  text-center md:text-left leading-relaxed">
                     JPEG, JPG, PNG অথবা HEIC ফরম্যাটের ছবি আপলোড করুন (সর্বোচ্চ ৩MB)
                  </p>
               </section>

               {/* Submit*/}
               <button
                  type="submit"
                  className="bg-green-700 font-hind hover:bg-green-800 text-white px-10 py-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-300"
               >
                  আবেদন করুন
               </button>
            </form>
         </FormProvider>
      </div>
   );
};

export default VolunteerForm;
