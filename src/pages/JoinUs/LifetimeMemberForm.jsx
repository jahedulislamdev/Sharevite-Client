import { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RHFInput from "../../Components/Form/RHFInput";
import RHFSelect from "../../Components/Form/RHFSelect";

const LifetimeMemberForm = () => {
   const methods = useForm();
   const { setValue, handleSubmit } = methods;

   // 👇 Track selected member type
   const [memberType, setMemberType] = useState(null);

   // 🧮 Auto-set donation amount based on member type
   useEffect(() => {
      if (memberType === "lifetime") setValue("donationAmount", 100000);
      else if (memberType === "donor") setValue("donationAmount", 50000);
      else setValue("donationAmount", "");
   }, [memberType, setValue]);

   const onSubmit = (data) => {
      console.log("Submitted Data:", data);
   };

   return (
      <section className="font-noto py-10 px-4 md:px-8 lg:px-12 bg-base-100 text-base-content transition-all duration-300">
         <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Side - Info Section */}
            <div className="space-y-6">
               <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">
                  আজীবন ও দাতা সদস্য হবার নিয়ম
               </h2>
               <p className="text-base md:text-lg leading-relaxed opacity-90">
                  এই প্রতিষ্ঠানের গঠনতন্ত্রের ২৩ ও ২৪ ধারা মোতাবেক ‘আজীবন সদস্য’ ও ‘দাতা সদস্য’ সংগ্রহ করা হচ্ছে।
               </p>

               <div className="overflow-hidden rounded-2xl shadow-md">
                  <iframe
                     className="w-full aspect-video"
                     src="https://www.youtube.com/embed/FRAoIxlQBkU?si=G_2AVDoax5Mju2zw"
                     title="YouTube video player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen
                  ></iframe>
               </div>

               <p className="opacity-80">
                  আজীবন ও দাতা সদস্যগণ প্রতিষ্ঠানের কল্যাণার্থে যে কোনো সুপরামর্শ দিতে পারবেন।
               </p>

               <div className="bg-base-200 p-5 rounded-2xl space-y-4">
                  <p>
                     আস-সুন্নাহ ফাউন্ডেশনের নীতি ও আদর্শের সঙ্গে একমত এরকম যে কেউ আজীবন সদস্য ও দাতা সদস্য হওয়ার জন্য আবেদন করতে পারবেন।
                  </p>
                  <div className="bg-base-300 p-4 rounded-xl">
                     <h3 className="text-lg font-bold mb-1 text-green-700 dark:text-green-300">
                        আজীবন সদস্য
                     </h3>
                     <p>
                        এককালীন কমপক্ষে এক লক্ষ বা তদূর্ধ টাকা ফাউন্ডেশনের তহবিলে দান করলে আজীবন সদস্য হবেন।
                     </p>
                  </div>
                  <div className="bg-base-300 p-4 rounded-xl">
                     <h3 className="text-lg font-bold mb-1 text-green-700 dark:text-green-300">
                        দাতা সদস্য
                     </h3>
                     <p>
                        এককালীন কমপক্ষে পঞ্চাশ হাজার বা তদূর্ধ টাকা দান করলে দাতা সদস্য হবেন।
                     </p>
                  </div>
               </div>
            </div>

            {/* Right Side - Form */}
            <div className=" rounded-2xl shadow-sm ">
               <header className="bg-green-700 text-white text-center p-6 md:p-10 rounded-t-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 font-hind text-gray-100">
                     সদস্য আবেদন
                  </h2>
                  <p className="text-sm md:text-base opacity-90">
                     আপনি যদি ফাউন্ডেশনের ধারা মোতাবেক সকল শর্তাবলি মেনে সদস্য হতে ইচ্ছুক হন, তাহলে নিচের ফরমটি পূরণ করুন।
                  </p>
               </header>

               <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10 space-y-6">
                     {/* Member Type Selection */}
                     <div className="grid grid-cols-2 gap-4">
                        <button
                           type="button"
                           onClick={() => setMemberType("lifetime")}
                           className={`p-3 rounded-xl border transition font-semibold ${memberType === "lifetime"
                              ? "bg-green-600 text-white"
                              : "bg-base-100 hover:bg-base-300"
                              }`}
                        >
                           আজীবন সদস্য
                        </button>
                        <button
                           type="button"
                           onClick={() => setMemberType("donor")}
                           className={`p-3 rounded-xl border transition font-semibold ${memberType === "donor"
                              ? "bg-green-600 text-white"
                              : "bg-base-100 hover:bg-base-300"
                              }`}
                        >
                           দাতা সদস্য
                        </button>
                     </div>

                     {/* Donation Amount */}
                     <RHFInput
                        label="দানকৃত পরিমাণ (টাকা)"
                        name="donationAmount"
                        type="number"
                        required
                        disabled
                     />

                     {/* Name */}
                     <RHFInput label="নাম" name="donnerName" type="text" required />

                     {/* Gender */}
                     <div>
                        <label className="block mb-2 font-medium">
                           আমি একজন <span className="text-red-600">*</span>
                        </label>
                        <div className="flex gap-6">
                           <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                 type="radio"
                                 value="male"
                                 {...methods.register("gender", { required: true })}
                                 className="radio radio-success"
                              />
                              পুরুষ
                           </label>
                           <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                 type="radio"
                                 value="female"
                                 {...methods.register("gender", { required: true })}
                                 className="radio radio-success"
                              />
                              নারী
                           </label>
                        </div>
                     </div>

                     {/* Email */}
                     <RHFInput label="ইমেইল" name="donarEmail" type="email" required />

                     {/* Profession & Reference */}
                     <div className="grid md:grid-cols-2 gap-4">

                        <RHFInput label="রেফারেন্স" name="donarReference" type="text" />
                     </div>

                     {/* Payment Method */}
                     <div className="space-y-2">
                        <label className="block font-medium">
                           যে মাধ্যমে প্রদান করতে চান <span className="text-red-600">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                           <label className="btn btn-outline w-full justify-center">
                              <input
                                 type="radio"
                                 {...methods.register("paymentMethod", { required: true })}
                                 value="online"
                                 className="hidden"
                              />
                              অনলাইন পেমেন্ট
                           </label>
                           <label className="btn btn-outline w-full justify-center">
                              <input
                                 type="radio"
                                 {...methods.register("paymentMethod")}
                                 value="bankTransfer"
                                 className="hidden"
                              />
                              ব্যাংক ট্রান্সফার
                           </label>
                           <label className="btn btn-outline w-full justify-center">
                              <input
                                 type="radio"
                                 {...methods.register("paymentMethod")}
                                 value="bankDeposit"
                                 className="hidden"
                              />
                              ব্যাংক ডিপোজিট
                           </label>
                        </div>

                        {/* Payment Gateway */}
                        <div className="bg-base-300 p-4 rounded-xl mt-3">
                           <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                 type="radio"
                                 value="sslcommerz"
                                 {...methods.register("gateway")}
                                 className="radio radio-success"
                                 defaultChecked
                              />
                              sslcommerz
                           </label>
                        </div>
                     </div>

                     {/* Submit */}
                     <button
                        type="submit"
                        className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl shadow-lg transition duration-300"
                     >
                        দান করুন
                     </button>

                     <p className="text-sm opacity-70 leading-relaxed">
                        সম্মানীয় সদস্যদের সকল তথ্য আমাদের কাছে আমানত। কোনো তথ্য পাবলিকলি প্রকাশ করা হবে না ইনশাআল্লাহ্।
                        তথাপি ফাউন্ডেশনের আপডেট জানানো ও মতামত নেবার জন্য যোগাযোগ সম্পর্কিত তথ্যগুলো আমরা সংগ্রহ করছি।
                     </p>
                  </form>
               </FormProvider>
            </div>
         </div>
      </section>
   );
};

export default LifetimeMemberForm;
