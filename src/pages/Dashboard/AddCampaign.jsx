import { useFieldArray, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

const AddCampaign = () => {
   const { register, handleSubmit, control, formState: { errors }, getValues, reset } = useForm({
      defaultValues: {
         imgUrl: [{ url: "" }],
         location: []
      }
   });

   // Control images urls
   const { fields: imagesUrl, append: addImages, remove: removeImages } = useFieldArray({
      control,
      name: "imgUrl",
      rules: {
         required: "আবশ্যই একটি ছবি দিতে হবে"
      }
   });

   // Add image
   const addImg = () => {
      if (imagesUrl.length >= 6) {
         return toast.warning("৬ টির বেশি ছবি দেওয়া যাবে না।");
      }
      const hasUncomplete = imagesUrl.some((_, idx) => {
         const value = getValues(`imgUrl.${idx}.url`);
         return !value || value.trim() === "";
      });
      if (hasUncomplete) {
         return toast.error("নতুন ছবি যুক্ত করার আগে পূর্বেরটি সম্পন্ন করুন");
      }
      addImages({ url: "" });
   };

   // Control tags
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

   // Submit form
   const onSubmitForm = (data) => {
      try {
         console.log("submitted", data);
         toast.success("নতুন ক্যাম্পেইন সফল ভাবে তৈরি হয়েছে!");
         reset();
      } catch (err) {
         toast.error(err.response?.data?.message || "কিছু ভুল হয়েছে");
      }
   };

   return (
      <div className="md:max-w-5xl mx-auto p-5 md:p-6 bg-base-100 rounded-2xl shadow-xl my-12 font-hind">
         <h2 className="text-3xl font-bold mb-8 text-center title">
            নতুন ক্যম্পেইন যুক্ত করুন
         </h2>

         <form onSubmit={handleSubmit(onSubmitForm)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Title */}
            <div>
               <label className="block mb-2 font-semibold">টাইটেল</label>
               <input
                  type="text"
                  className={`border ${errors.title ? "border-red-600" : "border-gray-400"} p-3 rounded w-full focus:outline-0`}
                  placeholder="ক্যাম্পেইনের একটি টাইটেল দিন"
                  {...register("title", { required: "ক্যাম্পেইনের টাইটেল দিন" })}
               />
               {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>}
            </div>

            {/* Category */}
            <div>
               <label className="block mb-2 font-semibold">ক্যাটাগরি</label>
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
               {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category.message}</p>}
            </div>

            {/* Location */}
            <div className="md:col-span-2">
               <label className="block mb-2 font-semibold">
                  অঞ্চলের নাম <span className="text-xs text-green-300">(একাধিক হতে পারে)</span>
               </label>

               <div className={` flex flex-wrap items-center gap-2 border ${errors.location ? "border-red-600" : "border-gray-400"} rounded-md`}>
                  {locations.map((loc, idx) => (
                     <span
                        key={loc.id}
                        className="bg-base-300 text-white px-3 py-1 rounded-full flex items-center gap-2"
                     >
                        <button
                           type="button"
                           className="text-red-900 hover:text-red-700"
                           onClick={() => removeLocation(idx)}
                        >
                           ✖
                        </button>
                     </span>
                  ))}

                  {/* New Location input */}
                  <input
                     onKeyDown={handleKeyDown}
                     type="text"
                     className="p-3 rounded flex-1 focus:outline-0"
                     placeholder="অঞ্চলের নাম "
                  />
               </div>

               {/* Error দেখানোর জায়গা */}
               {errors.location && (
                  <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>
               )}
            </div>



            {/* Goal */}
            <div>
               <label className="block mb-2 font-semibold">আনুদানের লক্ষ্যমাত্রা (পরিমান)</label>
               <input
                  type="number"
                  className={`border ${errors.goal ? "border-red-600" : "border-gray-400"} p-3 rounded w-full focus:outline-0`}
                  placeholder="e.g. ৫০০০"
                  {...register("goal", { required: "আনুদানের লক্ষ্যমাত্রার পরিমান নির্ধারন করুন" })}
               />
               {errors.goal && <p className="text-red-600 text-sm mt-1">{errors.goal.message}</p>}
            </div>

            {/* Last Date */}
            <div>
               <label className="block mb-2 font-semibold">সমাপ্তির তারিখ</label>
               <input
                  type="date"
                  className={`border ${errors.lastDate ? "border-red-600" : "border-gray-400"} p-3 rounded w-full focus:outline-0`}
                  {...register("lastDate", { required: "আনুদানের সমাপ্তির তারিখ নির্ধারন করুন" })}
               />
               {errors.lastDate && <p className="text-red-600 text-sm mt-1">{errors.lastDate.message}</p>}
            </div>

            {/* Organizer */}
            <div>
               <label className="block mb-2 font-semibold">দায়িত্বশীল ব্যাক্তি</label>
               <input
                  type="text"
                  className="border border-gray-400 p-3 rounded w-full focus:outline-0"
                  placeholder="Organizer full name"
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
                  className="border border-gray-400 p-3 rounded w-full focus:outline-0"
                  defaultValue={new Date().toLocaleString()}
                  readOnly
                  {...register("createdAt")}
               />
            </div>

            {/* Image URL (multiple) */}
            <div className="md:col-span-2">
               <label className="block mb-2 font-semibold">ছবি</label>
               {imagesUrl.map((field, index) => (
                  <div key={field.id} className="w-full">
                     <div className="flex justify-center items-center gap-2 my-1 w-full">
                        <input
                           type="text"
                           defaultValue={field.url}
                           placeholder="ক্যাম্পেইনের ছবির লিংক"
                           className={`border ${errors.imgUrl?.[index]?.url ? "border-red-600" : "border-gray-400"} p-2 rounded w-full focus:outline-0`}
                           {...register(`imgUrl.${index}.url`, {
                              required: "ছবির লিংক (url) দিন",
                              pattern: {
                                 value: /^https?:\/\/.+/i,
                                 message: "সঠিক URL দিন (http/https সহ, jpg/png/gif)"
                              }
                           })}
                        />
                        <button
                           type="button"
                           onClick={() => removeImages(index)}
                        >
                           <MdDelete className="size-7 text-red-600 cursor-pointer" />
                        </button>
                     </div>
                     {errors.imgUrl?.[index]?.url && (
                        <p className="text-red-500 my-1">{errors.imgUrl[index].url.message}</p>
                     )}
                  </div>
               ))}
               <button type="button" className="btn bg-green-900 text-white mt-2" onClick={addImg}>
                  Add img
               </button>
               {errors.imgUrl && <p className="text-red-500 mt-1">{errors.imgUrl.root?.message}</p>}
            </div>

            {/* Description */}
            <div className="md:col-span-2">
               <label className="block mb-2 font-semibold">বর্ণনা</label>
               <textarea
                  className={`textarea border ${errors.description ? "border-red-600" : "border-gray-400"} p-3 rounded w-full focus:outline-0 h-28`}
                  placeholder="Write a short description..."
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
               {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
               <button
                  type="submit"
                  className="btn bg-green-800 w-full text-white mx-auto mt-4 flex justify-center items-center font-hind"
               >
                  <FaPlus className="size-5" /> যুক্ত করুন
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddCampaign;
