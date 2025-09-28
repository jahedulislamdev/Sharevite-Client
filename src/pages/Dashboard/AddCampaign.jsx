import { useFieldArray, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

import { toast } from "sonner";
import usePostData from "../../hooks/usePostData";
import axios from "axios";
import { useAuthContext } from "../../hooks/useContext";
import ImgUpload from "./ImgUpload";

const AddCampaign = () => {
   const { loading, setLoading } = useAuthContext();

   // campaign register form
   const { register, handleSubmit, control, formState: { errors } } = useForm({
      defaultValues: {
         location: []
      }
   });


   // Image hosting api
   const imgHostingSecret = import.meta.env.VITE_IMG_HOSTING_KEY;
   // console.log(imgSecretKey)
   const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingSecret}`;


   // Control tags (there was a problem we can't seem to fix (location required)) . we already use rules but this is not working cause it's a child property of location field that's why is couldn't track properly.
   const { append: addLocation, fields: locations, remove: removeLocation } = useFieldArray({
      control,
      name: "location",
      rules: {
         required: { message: "কমপক্ষে একটি লোকেশন দিন" }
      }
   });

   // Handle key down events for location input
   const handleKeyDown = (e) => {
      const inputValues = e.target.value.trim();

      if ((e.key === "Enter" || e.key === ",") && inputValues !== "") {
         e.preventDefault();
         if (!locations.some(loc => loc.tag === inputValues)) {
            addLocation({ tag: inputValues });
         }
         e.target.value = "";
      }

      if (e.key === "Backspace" && inputValues === "" && locations.length > 0) {
         e.preventDefault();
         removeLocation(locations.length - 1);
      }
   };

   // post campaign data
   const { mutate: postCampaign } = usePostData("/campaigns", "নতুন ক্যাম্পেইন সফল ভাবে তৈরি হয়েছে!", "allCampaigns");

   //  form Submit handler
   const onSubmitForm = async (data) => {
      if (!data.location || data.location.length === 0) {
         toast.error("কমপক্ষে একটি লোকেশন দিন");
         return;
      }
      try {
         setLoading(true);
         // (convert FileList to array) bcz sometimes we need to add single and sometimes multiple images.
         const imgFiles = Array.from(data.images)

         // make automatic boundary for image file upload using formData (formData make a proper multipart stracture like seperate text,file,type etc for using in img hosting api like imgbb)
         const uploadedImages = await Promise.all(
            imgFiles.map(async (img) => {
               const formData = new FormData();
               formData.append("image", img);

               // call image hosting api for image upload
               const res = await axios.post(imgHostingApi, formData, {
                  headers: {
                     "Content-Type": "multipart/form-data"
                  }
               })
               return res.data.data.display_url;
            })
         );

         // postCampaign(data);
         const updatedData = { ...data, images: uploadedImages };
         postCampaign(updatedData);
         console.log("submitted", updatedData);
         // reset(); 
         setLoading(false);
      } catch (err) {
         setLoading(false);
         toast.error(err.response?.data?.message || "কিছু ভুল হয়েছে");
      }
   };

   return (
      <div className="md:max-w-5xl mx-auto p-5 md:p-6 bg-base-100 rounded-2xl shadow-xl my-12 font-noto">
         <h2 className="text-3xl font-bold mb-8 text-center title font-hind">
            নতুন ক্যম্পেইন যুক্ত করুন
         </h2>

         <form onSubmit={handleSubmit(onSubmitForm)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Title */}
            <div>
               <label className="block mb-2 font-semibold">টাইটেল *</label>
               <input
                  type="text"
                  className={`border ${errors.title ? "border-red-600" : "border-gray-400"} p-3 rounded w-full focus:outline-0`}
                  placeholder="ক্যাম্পেইনের একটি টাইটেল দিন"
                  {...register("title", { required: "ক্যাম্পেইনের টাইটেল দিন" })}
               />
               {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
            </div>

            {/* Category */}
            <div>
               <label className="block mb-2 font-semibold">ক্যাটাগরি *</label>
               <select
                  className={`select select-lg border ${errors.category ? "border-red-600" : "border-gray-400"} w-full focus:outline-0`}
                  {...register("category", { required: "যেকোন একটি ক্যাটাগরি নির্বাচন করুন" })}
               >
                  <option value="">ক্যাটাগরি নির্বাচন করুন</option>
                  <option value="Education">শিক্ষা</option>
                  <option value="Medical">চিকিৎসা</option>
                  <option value="Environment">পরিবেশ</option>
                  <option value="Charity">সহায়তা</option>
                  <option value="Others">আন্যান্য</option>
               </select>
               {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
            </div>

            {/* Location */}
            <div className="md:col-span-2">
               <label className="block mb-2 font-semibold">
                  অঞ্চলের নাম *<span className="text-xs text-green-500"> (একাধিক হতে পারে)</span>
               </label>

               <div className={`font-onset flex flex-wrap items-center gap-2 border ${errors.location ? "border-red-600" : "border-gray-400"} rounded-md `}>
                  {locations.map((loc, idx) => (
                     <span
                        key={loc.id}
                        className="bg-base-300 ms-1 px-3 py-1 rounded-full flex items-center "
                     >{loc.tag}
                        <button
                           type="button"
                           className="text-red-900 hover:text-red-700 ms-2"
                           onClick={() => removeLocation(idx)}
                        >
                           <TiDelete className="size-7" />
                        </button>
                     </span>
                  ))}

                  {/* New Location input */}
                  <input
                     onKeyDown={handleKeyDown}
                     type="text"
                     className="p-3 rounded flex-1 focus:outline-0"
                     placeholder="অঞ্চলের নাম... "

                  />
               </div>

               {/* Error */}
               {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
               )}
            </div>



            {/* Goal */}
            <div>
               <label className="block mb-2 font-semibold">আনুদানের লক্ষ্যমাত্রা (পরিমান) *</label>
               <input
                  type="number"
                  className={`border ${errors.goal ? "border-red-600" : "border-gray-400"} p-3 rounded w-full focus:outline-0`}
                  placeholder="e.g. ৫০০০"
                  {...register("goal", { required: "আনুদানের লক্ষ্যমাত্রার পরিমান নির্ধারন করুন" })}
               />
               {errors.goal && <p className="text-red-500 text-sm mt-1">{errors.goal.message}</p>}
            </div>

            {/* Last Date */}
            <div>
               <label className="block mb-2 font-semibold">সমাপ্তির তারিখ *</label>
               <input
                  type="date"
                  className={`font-onset border ${errors.lastDate ? "border-red-600" : "border-gray-400"} p-3 rounded w-full focus:outline-0`}
                  {...register("lastDate", { required: "আনুদানের সমাপ্তির তারিখ নির্ধারন করুন" })}
               />
               {errors.lastDate && <p className="text-red-500 text-sm mt-1">{errors.lastDate.message}</p>}
            </div>

            {/* Organizer */}
            <div>
               <label className="block mb-2 font-semibold">দায়িত্বশীল ব্যাক্তি </label>
               <input
                  type="text"
                  className="border border-gray-400 p-3 rounded w-full focus:outline-0"
                  placeholder="এই প্রজেক্টের দায়িত্বশীল ব্যাক্তির নাম লিখুন"
                  {...register("organizer")}
               />
            </div>

            {/* Created At */}
            <div>
               <label className="block mb-2 font-semibold">
                  শুরুর তারিখ <span className="badge badge-sm badge-error badge-soft">(পরিবর্তনযোগ্য নয়)</span>
               </label>
               <input
                  type="text"
                  className="border border-gray-400 p-3 rounded w-full focus:outline-0 font-onset"
                  defaultValue={new Date().toLocaleString()}
                  readOnly
                  {...register("createdAt")}
               />
            </div>

            {/* Image Upload */}
            <ImgUpload />

            {/* Description */}
            <div className="md:col-span-2">
               <label className="block mb-2 font-semibold">বর্ণনা</label>
               <textarea
                  className={`textarea border ${errors.description ? "border-red-600" : "border-gray-400"} p-3 rounded w-full focus:outline-0 h-28`}
                  placeholder="প্রকল্প সম্পর্কে বিস্তারিত লিখুন..."
                  {...register("description", {
                     required: "ক্যাম্পেইন সম্পর্কে সংক্ষেপে লিখুন",
                     validate: (value) => {
                        if (value.trim() === "") {
                           return "শুধু ফাঁকা স্পেস গ্রহণযোগ্য নয়";
                        }
                        if (value.trim().length < 20) {
                           return "কমপক্ষে ২০ অক্ষর লিখতে হবে";
                        }
                        return true;
                     }
                  })}
               ></textarea>
               {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
               <button
                  type="submit"
                  className="btn bg-green-800 w-full text-white mx-auto mt-4 flex justify-center items-center font-hind"
               >
                  {loading ? <p>লোড হচ্ছে <span className="loading loading-dots loading-xs"></span> </p> : <><FaPlus className="size-5" /> যুক্ত করুন</>}
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddCampaign;
