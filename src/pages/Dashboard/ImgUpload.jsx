import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { BsUpload } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

const ImgUpload = () => {

   const { register, watch, setValue, getValues, formState: { errors } } = useForm();

   // img field observer spy
   const handleImageChange = (e) => {
      console.log(e.target.files)
      let newFiles = Array.from(e.target.files);
      let existingFiles = getValues("images") ? Array.from(getValues("images")) : [];

      // I use watch and onchange handler fn , both are fire same time thats why it's possible to duplicate image file, so we should check before adding.
      const filterdFiles = newFiles.filter(file => !existingFiles.some(f => f.name === file.name && f.size === file.size));

      let totalFiles = [...existingFiles, ...filterdFiles];
      console.log(totalFiles)

      if (totalFiles.length > 5) {
         toast.error("সর্বোচ্চ ৫ টি ছবি আপলোড করা যাবে");
         totalFiles = totalFiles.slice(0, 5);
      }
      setValue("images", totalFiles, { shouldValidate: true, shouldDirty: true });
   }

   // remove image from preview
   const removeImage = (index) => {
      const currentImageList = Array.from(getValues("images"));
      const updatedImageList = currentImageList.filter((_, i) => i !== index);
      setValue("images", updatedImageList, { shouldDirty: true, shouldValidate: true });
   }

   return (
      <div>
         {/* Image Upload */}
         <div className="">
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
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageChange}
                  {...register("images", {
                     required: "ছবি আপলোড করুন",
                  })}
               />
               {/* preview section */}
               {watch("images") && watch("images").length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-5 md:mt-0">
                     {
                        Array.from(watch("images")).map((file, idx) => (
                           <div key={idx} className="indicator">
                              <button onClick={() => removeImage(idx)} type="button" className="indicator-item cursor-pointer"><TiDelete className="size-7 text-red-800" /></button>
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
            </div>
            {errors.images && (
               <p className="text-red-500 text-sm m-1">{errors.images.message}</p>
            )}
         </div>
      </div>
   );
};

export default ImgUpload;