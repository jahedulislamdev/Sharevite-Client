import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RHFInput from "../../Components/Form/RHFInput";

const professionsOptions = [
   "ইমাম", "মুয়াজ্জিন", "শিক্ষক", "চিকিৎসক", "চাকরিজীবী",
   "সরকারি চাকরিজীবী", "বেসরকারি চাকরিজীবী", "বেকার", "কৃষক",
   "শ্রমিক", "ব্যবসায়ী", "গৃহিণী", "ছাত্র", "ইঞ্জিনিয়ার",
   "আইনজীবী", "নার্স", "পুলিশ", "সেনা সদস্য", "রাজমিস্ত্রি",
   "দর্জি", "ফ্রিল্যান্সার", "সাংবাদিক", "শিল্পী", "কর্মচারী",
   "রাঁধুনি", "অন্যান্য"
];

export default function LifetimeMemberForm() {
   const methods = useForm({
      defaultValues: {
         donationAmount: 100000,
         donnerName: "",
         gender: "male",
         donarEmail: "",
         donarReference: "",
      }
   });
   const { handleSubmit, register, formState: { errors } } = methods;

   const [memberType, setMemberType] = useState("lifetime");
   const [amount, setAmount] = useState("100000");

   const handleCheckDonationType = (type) => {
      setMemberType(type);
      setAmount(type === "lifetime" ? "100000" : "50000");
   };

   const onSubmit = (data) => {
      console.log("Submitted Data:", data);
   };

   return (
      <section className="font-noto py-10 md:px-8 lg:px-12 bg-base-100 text-base-content transition-all duration-300">
         <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Side */}
            <div className="space-y-6">
               <h2 className="text-2xl md:text-3xl font-semibold title">
                  আজীবন ও দাতা সদস্য হবার নিয়ম
               </h2>
               <p className="text-base md:text-lg leading-relaxed opacity-90">
                  এই প্রতিষ্ঠানের গঠনতন্ত্রের ২৩ ও ২৪ ধারা মোতাবেক ‘আজীবন সদস্য’ ও ‘দাতা সদস্য’ সংগ্রহ করা হচ্ছে।
               </p>

               <div className="overflow-hidden rounded-2xl shadow-md">
                  {/* <iframe
                     className="w-full aspect-video"
                     src="https://www.youtube.com/embed/FRAoIxlQBkU?si=G_2AVDoax5Mju2zw"
                     title="YouTube video player"
                     allowFullScreen
                  ></iframe> */}
               </div>

               <p className="opacity-80">
                  আজীবন ও দাতা সদস্যগণ প্রতিষ্ঠানের কল্যাণার্থে যে কোনো সুপরামর্শ দিতে পারবেন।
               </p>

               <div className="bg-base-200 px-4 py-6 rounded-2xl space-y-4">
                  <p className="subtitle">
                     আস-সুন্নাহ ফাউন্ডেশনের নীতি ও আদর্শের সঙ্গে একমত এরকম যে কেউ আজীবন সদস্য ও দাতা সদস্য হতে পারেন।
                  </p>

                  <div className="bg-base-300 p-4 rounded-xl">
                     <h3 className="text-lg font-bold mb-1">আজীবন সদস্য</h3>
                     <p>এককালীন কমপক্ষে এক লক্ষ বা তদূর্ধ টাকা দান করলে আজীবন সদস্য হবেন।</p>
                  </div>
                  <div className="bg-base-300 p-4 rounded-xl">
                     <h3 className="text-lg font-bold mb-1">দাতা সদস্য</h3>
                     <p>এককালীন কমপক্ষে পঞ্চাশ হাজার বা তদূর্ধ টাকা দান করলে দাতা সদস্য হবেন।</p>
                  </div>
               </div>
            </div>

            {/* Right Side - Form */}
            <div className="rounded-2xl shadow-md bg-base-100">
               <header className="bg-green-700 text-white text-center p-6 md:p-10 rounded-t-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                     সদস্য আবেদন
                  </h2>
                  <p className="text-sm md:text-base opacity-90">
                     ফাউন্ডেশনের শর্তাবলি মেনে সদস্য হতে নিচের ফরমটি পূরণ করুন।
                  </p>
               </header>

               <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10 space-y-6">
                     {/* Member Type Buttons */}
                     <div className="grid grid-cols-2 gap-3">
                        <button
                           type="button"
                           onClick={() => handleCheckDonationType("lifetime")}
                           className={`p-3 rounded-xl border font-semibold transition ${memberType === "lifetime"
                              ? "bg-green-600 text-white"
                              : "bg-base-100 hover:bg-base-300"
                              }`}
                        >
                           আজীবন সদস্য
                        </button>
                        <button
                           type="button"
                           onClick={() => handleCheckDonationType("donor")}
                           className={`p-3 rounded-xl border font-semibold transition ${memberType === "donor"
                              ? "bg-green-600 text-white"
                              : "bg-base-100 hover:bg-base-300"
                              }`}
                        >
                           দাতা সদস্য
                        </button>
                     </div>

                     {/* Donation Amount */}
                     <div>
                        <label className="block mb-2 font-medium label">
                           অনুদানের পরিমাণ <span className="text-red-600">*</span>
                        </label>
                        <input
                           {...register("donationAmount", { required: "অনুদানের পরিমাণ দিন" })}
                           className={` input input-lg rounded-lg px-3 py-2 w-full bg-base-200 
                              ${errors?.donationAmount
                                 ? "border border-red-400 focus:border-red-500"
                                 : "border-transparent hover:border-green-700 focus:border-green-700"
                              }  transition-all duration-300 focus:outline-none `}
                           type="number"
                           value={amount}
                           onChange={(e) => setAmount(e.target.value)}
                        />
                        {errors?.donationAmount && (
                           <p className="text-red-500 text-sm mt-1">{errors.donationAmount.message}</p>
                        )}
                     </div>

                     <RHFInput label="নাম" name="donnerName" type="text" required />

                     {/* Gender */}
                     <div>
                        <label className="block mb-2 font-medium label">
                           আমি একজন <span className="text-red-600">*</span>
                        </label>
                        <div className="flex gap-6">
                           <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                 type="radio"
                                 value="male"
                                 {...register("gender", { required: true })}
                                 className="radio radio-success"
                                 defaultChecked
                              />
                              পুরুষ
                           </label>
                           <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                 type="radio"
                                 value="female"
                                 {...register("gender", { required: true })}
                                 className="radio radio-success"
                              />
                              নারী
                           </label>
                        </div>
                     </div>

                     <RHFInput label="ইমেইল" name="donarEmail" type="email" required />

                     {/* Profession & Reference */}
                     <div className="grid md:grid-cols-2 gap-4 place-items-center">
                        <div className="w-full">
                           <label className={`mb-2 label ${errors.profession && "text-red-600"}`}>পেশা <span className="text-red-600">*</span></label>
                           <select
                              {...register("profession", { required: "আপনার পেশা নির্বাচন করুন" })}
                              className={`select select-lg border-0 w-full bg-base-200 ${errors.profession ? "border-red-500" : "border-gray-300"}`}
                           >
                              <option className="opacity-30" value="">নির্বাচন করুন</option>
                              {professionsOptions.map((po, idx) => (
                                 <option key={idx} className="opacity-70" value={po}>{po}</option>
                              ))}
                           </select>
                           {errors.profession && <p className="text-red-500 mt-0.5">{errors.profession?.message}</p>}
                        </div>
                        <RHFInput label="রেফারেন্স" name="donarReference" type="text" />
                     </div>
                     {/* Payment Section */}
                     <div className="space-y-4">
                        <label className="font-medium label">
                           প্রদান মাধ্যম <span className="text-red-600">*</span>
                        </label>
                        <div className="grid sm:grid-cols-3 gap-x-3">
                           {["অনলাইন পেমেন্ট", "ব্যাংক ট্রান্সফার", "ব্যাংক ডিপোজিট"].map((method, i) => (
                              <label key={i} className="btn btn-outline w-full justify-center">
                                 <input
                                    type="radio"
                                    {...register("paymentMethod", { required: true })}
                                    value={method}
                                    className="hidden"
                                 />
                                 {method}
                              </label>
                           ))}
                        </div>

                        <div className="bg-base-200 p-4 rounded-xl flex items-center ">
                           <label className=" flex *:gap-3 cursor-pointer font-onset">
                              <input
                                 type="radio"
                                 value="sslcommerz"
                                 {...register("gateway")}
                                 className="radio radio-success me-1"
                                 defaultChecked
                              /> SSLCOMMARZ
                           </label>
                        </div>
                     </div>

                     <button
                        type="submit"
                        className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl shadow-lg transition duration-300"
                     >
                        দান করুন
                     </button>

                     <p className="text-sm opacity-70 leading-relaxed">
                        সকল তথ্য নিরাপদ রাখা হবে। কোনো তথ্য পাবলিকলি প্রকাশ করা হবে না ইনশাআল্লাহ্।
                     </p>
                  </form>
               </FormProvider>
            </div>
         </div>
      </section>
   );
}
