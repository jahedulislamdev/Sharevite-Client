import { useController, useFieldArray, useForm } from "react-hook-form";
import { TiDelete } from "react-icons/ti"; import { toast } from "sonner";
import { useAuthContext } from "../../hooks/useContext";
import handleKeyDown from "../../utils/makeTagInput";
import usePostData from "../../hooks/usePostData";
import useHostImg from "../../hooks/useHostImg";
import postImg from "../../utils/postImg_api";
import { BsUpload } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const AddCampaign = () => {
   const { loading, setLoading } = useAuthContext();

   // campaign register form
   const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
      defaultValues: {
         location: []
      }
   });

   // image controller
   const {
      field: { value: images = [], onChange },
      fieldState: { error: imageError }
   } = useController({
      name: "images",
      control,
      rules: { required: "ছবি আপলোড করুন" }
   });


   // location fieldArray controller
   const { append: addLocation, fields: locations, remove: removeLocation } = useFieldArray({
      control,
      name: "location",
      rules: {
         required: { message: "কমপক্ষে একটি লোকেশন দিন" },
         validate: values => {
            if (values[0]?.tag !== undefined) return true;
            else return "কমপক্ষে একটি লোকেশন দিন";
         }
      }
   });

   // call post campaign data hook
   const { mutate: postCampaign } = usePostData("/campaigns", "নতুন ক্যাম্পেইন সফল ভাবে তৈরি হয়েছে!", "allCampaigns");

   // image upload hooks
   const { fileInputRef, handleImageChange, removeImage } = useHostImg(5);

   // form Submit handler
   const onSubmitForm = async (data) => {
      try {
         setLoading(true);
         // call postimg api
         const postImages = await postImg(data);

         // combine uploaded image url with form data
         const updatedData = { ...data, images: postImages };
         console.log("submitted", updatedData);

         // send post request for campaign data    
         postCampaign(updatedData);

         // stop loading and reset form
         setLoading(false);
         reset();

      } catch (err) {
         setLoading(false);
         console.log(err);
         toast.error(err.response?.data?.message || "কিছু ভুল হয়েছে");
      }
   };

   return (
      <div className="md:max-w-5xl mx-auto p-5 md:p-6 bg-base-100 rounded-2xl font-noto">
         <h2 className=" text-xl font-bold mb-6 title font-hind ">
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

            {/* Short summary */}
            <div>
               <label className="block mb-2 font-semibold">সংক্ষিপ্ত বর্ননা *</label>
               <textarea
                  type="text"
                  className={`border ${errors.shortDescription ? "border-red-600" : "border-gray-400"} p-3 rounded w-full focus:outline-0 h-12`}
                  placeholder="ক্যাম্পেইনের সংক্ষিপ্ত একটি বর্ননা লিখুন"
                  {...register("shortDescription", { required: "সংক্ষিপ্ত একটি বর্ননা দিন" })}
               />
               {errors.shortDescription && <p className="text-red-500 text-sm mt-1">{errors.shortDescription.message}</p>}
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
                     onKeyDown={(e) => handleKeyDown(e, locations, addLocation, removeLocation)}
                     type="text"
                     className="p-3 rounded flex-1 focus:outline-0"
                     placeholder="অঞ্চলের নাম... "

                  />
               </div>

               {/* Error */}
               {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors?.location?.root?.message}</p>
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
                  placeholder="এই প্রজেক্টের দায়িত্বপ্রপ্ত ব্যাক্তির নাম লিখুন"
                  {...register("organizer")}
               />
            </div>

            {/* isEmergency */}
            <div>
               <label className="block mb-2 font-semibold">জরুরী ফান্ড সংগ্রহের ক্ষেত্রে প্রযোজ্য</label>
               <label className="label font-onset">
                  <input type="checkbox" className="checkbox checkbox-warning" {...register("status")} />
                  Emergency!
               </label>
            </div>

            {/* Image Upload */}
            <div className="md:col-span-2">
               <label htmlFor="imageFileUpload" className="block mb-2 font-semibold">ক্যাম্পেইনের ছবি *</label>
               {/* drag or upload section */}
               <div className="md:flex items-center gap-3">
                  <div onClick={() => document.getElementById("imageFileUpload").click()}
                     className="border border-gray-600/50 shadow-xs p-7 rounded-md flex justify-center items-center flex-col gap-3  cursor-pointer text-center w-[200px]">
                     <BsUpload className="size-7" />
                     <p className="text-gray-500 font-medium">
                        ছবি ড্র্যাগ করুন অথবা <span className="text-green-600 font-semibold">ব্রাউজ করুন</span>
                     </p>
                  </div>
                  {/* A hidden input field */}
                  <input
                     type="file"
                     id="imageFileUpload"
                     ref={fileInputRef}
                     accept="image/*"
                     multiple
                     className="hidden"
                     onChange={(e) => handleImageChange(e, onChange)}

                  />
                  {/* preview section */}
                  {images.length > 0 && (
                     <div className="flex flex-wrap gap-3 mt-5 md:mt-0">
                        {
                           Array.from(images).map((file, idx) => (
                              <div key={idx} className="indicator">
                                 <button onClick={() => removeImage(idx, onChange)} type="button" className="indicator-item cursor-pointer"><TiDelete className="size-7 rounded text-red-500" /></button>
                                 <img
                                    src={file instanceof File ? URL.createObjectURL(file) : file}
                                    alt="preview"
                                    className="w-30 h-28 object-cover rounded-xl"
                                 />
                              </div>
                           ))
                        }
                     </div>
                  )}
                  {/* <button onChange={() => resetImages} type="button" className="btn btn-sm px-3 py-1 bg-amber-500">রিসেট</button> */}
               </div>
               {errors.images && (
                  <p className="text-red-500 text-sm m-1">{imageError.message}</p>
               )}
            </div>

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
                  className="btn btn-lg bg-green-800 text-white mx-auto mt-4 font-hind min-w-30"
               >
                  {loading ? <span className="loading loading-spinner loading-md"></span> : <><FaPlus className="size-5" /> যুক্ত করুন</>}
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddCampaign;
