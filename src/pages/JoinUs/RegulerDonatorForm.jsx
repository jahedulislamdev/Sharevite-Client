import { FormProvider, useForm } from "react-hook-form";
import { useAuthContext } from "../../hooks/useContext";
import RHFInput from "../../Components/Form/RHFInput";
import { paymentMethods, plans } from "./plans";

const RegulerDonatorForm = () => {
   const { user } = useAuthContext();

   const methods = useForm({
      defaultValues: {
         planType: "daily",
         donationAmount: "",
         selectedAmount: null,
         paymentMethod: "bkash"
      }
   });
   const { register, handleSubmit, setValue, watch, formState: { errors } } = methods;

   const planType = watch("planType");
   const planList = plans[planType];
   const minDonationAmount = planList[0]?.value;
   const selectedAmount = watch("selectedAmount")
   const selectedPlaymentMethod = watch("paymentMethod")

   // Submit Handler
   const handleDonarForm = (data) => {
      console.log(data)
   };


   return (
      <section>
         {/* Top Info Badge */}
         <div className="badge badge-soft badge-xs sm:badge-md md:badge-lg badge-primary font-semibold p-6">
            If you have any difficulty understanding anything related to recurring donations or face any issue, please email us at support@foundationname.org
         </div>

         <div className="grid md:grid-cols-2 font-noto gap-x-10">
            {/* Left Side Content */}
            <div className="space-y-4 mt-10">
               {/* <iframe
                  className="w-full aspect-video rounded-2xl"
                  src="https://www.youtube.com/embed/KVjKMEAerhQ?si=PPN4CjY9U2k_sDxK"
                  title="YouTube video player"
                  allowFullScreen
               /> */}
               <div className="bg-base-200 rounded-lg p-8 text-xl font-semibold text-center">
                  আল্লাহর কাছে সর্বাধিক প্রিয় আমল হলো, যা সদাসর্বদা নিয়মিত করা হয়, যদিও তা অল্প হয়। (সহীহ বুখারী, হাদীস ৬৪৬৪)
               </div>
               <p className="leading-relaxed text-lg text-justify">
                  নিয়মিত অনুদান ফাউন্ডেশনকে টিকিয়ে রাখতে সবচেয়ে বেশি সাহায্য করে...
               </p>
               <div className="bg-base-200 rounded-lg p-8 text-xl text-center font-onset">
                  Extra info will be there
               </div>
            </div>

            {/* Right Side (Form) */}
            <div className="space-y-4 mt-10">
               <header className="bg-green-700 text-white text-center p-6 md:p-10 rounded-t-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold font-hind mb-2">
                     অংশ নিন সকল কল্যাণমূলক কাজে
                  </h2>
                  <p className="text-sm md:text-base opacity-90">
                     এই খাতে দানের মাধ্যমে ফাউন্ডেশনের সকল কল্যাণমূলক কাজের অংশদার হতে পারবেন...
                  </p>
               </header>

               <div className="px-5">
                  {/* Daily / Monthly Plan switch btn */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                     {["daily", "monthly"].map(type => (
                        <button
                           key={type}
                           type="button"
                           onClick={() => {
                              setValue("planType", type)
                              // reset donationamount and selectedAmount when plan changes
                              setValue("donationAmount", "")
                              setValue("selectedAmount", null)
                           }}
                           className={`p-3 rounded-xl font-semibold transition ${type === planType
                              ? "bg-green-600 text-white"
                              : "bg-base-200 hover:bg-base-300"
                              }`}
                        >
                           {type === "daily" ? "দৈনিক" : "মাসিক"}
                        </button>
                     ))}
                  </div>

                  {/* show planList according to the Switched Plan */}
                  <div className="grid grid-cols-3 gap-3 shadow-sm shadow-green-200 p-4 rounded-2xl font-onset ">
                     {
                        planList?.map((li, idx) => (
                           <button
                              type="button"
                              key={idx}
                              onClick={() => {
                                 setValue("donationAmount", li.value)
                                 setValue("selectedAmount", li.value)
                              }}
                              className={`py-3 rounded-xl transition-all duration-300 ${li.value === selectedAmount ? "bg-[#0080002b] font-medium " : "bg-base-200"
                                 }`}
                           >
                              {li.value}
                           </button>
                        ))
                     }
                     {/* other button (user can put custom value of selecting this button) */}
                     <button
                        onClick={() => {
                           setValue("donationAmount", " ")
                           setValue("selectedAmount", null)
                        }}
                        className={`py-3 rounded-xl transition-all duration-300 ${selectedAmount === null ? "bg-[#0080002b] font-medium" : "bg-base-200"
                           }`}
                     >
                        Other
                     </button>
                  </div>

                  {/* Donation Form */}
                  <FormProvider {...methods}>
                     <form onSubmit={handleSubmit(handleDonarForm)} className="space-y-6">
                        {/* Donation Amount */}
                        <div>
                           <label className="label m-2">
                              অনুদানের পরিমাণ <span className="text-red-600">*</span>
                           </label>
                           <input
                              type="number"
                              disabled={selectedAmount !== null}
                              {...register("donationAmount", {
                                 required: "অনুদানের পরিমাণ দিন",
                                 setValueAs: (v) => (v === "" ? "" : Number(v)),
                                 validate: (v) => (v === "") || (Number(v) >= minDonationAmount) || `ন্যূনতম পরিমাণ ${minDonationAmount} টাকা`,
                                 onChange: () => setValue("selectedAmount", null)

                              })}
                              placeholder="অনুদানের পরিমাণ লিখুন"
                              className={`input-style w-full ${selectedAmount !== null && " cursor-not-allowed"
                                 } `}
                           />
                           {errors?.donationAmount && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errors.donationAmount.message}
                              </p>
                           )}
                        </div>

                        {/* Donor name */}
                        <div>
                           <RHFInput label={'ব্যাক্তির নাম'} name={"donorName"} />
                        </div>

                        {/* donor email */}
                        <div>
                           <label className="label mb-2">
                              ইমেইল / মোবাইল <span className="text-red-600">*</span>
                           </label>
                           <input
                              type="text"
                              {...register("donatorEmailOrPhone")}
                              value={user?.email || ""}
                              readOnly={user}
                              className="w-full font-onset rounded-lg bg-base-200 px-4 py-2.5 focus:outline-0 opacity-70 cursor-not-allowed"
                           />
                        </div>

                        {/* another donar name */}
                        <div>
                           <label className="label mb-2">
                              অন্য কারো পক্ষ থেকে দান করে থাকলে তার নাম লিখুন
                           </label>
                           <input
                              type="text"
                              {...register("anotherDonatorName")}
                              className="input-style"
                           />
                        </div>

                        {/* Payment Method */}
                        <div>
                           <label className=" mb-3 label">
                              পেমেন্ট মাধ্যম <span className="text-red-600">*</span>
                           </label>
                           <div className="flex flex-wrap gap-5">
                              {paymentMethods?.map((method) => (
                                 <label
                                    key={method.value}
                                    onClick={() => {
                                       setValue("paymentMethod", method.value)
                                    }}
                                    className={`flex items-center justify-center gap-3 rounded-xl px-6 py-4 cursor-pointer border transition-all duration-300 shadow-sm 
                                       ${selectedPlaymentMethod === method.value
                                          ? "border-green-500 bg-green-50 shadow-md scale-105"
                                          : "border-transparent bg-base-200 opacity-60 hover:opacity-90"
                                       }`}
                                 >
                                    <input
                                       type="radio"
                                       value={method.value}
                                       {...register("paymentMethod", { required: true })}
                                       checked={selectedPlaymentMethod === method.value}
                                       className="hidden"
                                    />
                                    <img
                                       src={method.img}
                                       alt={method.alt}
                                       className={`w-10 h-10 object-contain transition-transform duration-300 ${selectedPlaymentMethod === method.value ? "scale-110" : "scale-100"
                                          }`}
                                    />
                                 </label>
                              ))}
                           </div>
                        </div>

                        {/* Submit Button */}
                        <button
                           type="submit"
                           className="w-full py-3 mt-4 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl shadow-lg transition duration-300"
                        >
                           দান করুন
                        </button>
                     </form>
                  </FormProvider>
               </div>
            </div>
         </div>
      </section >
   );
};

export default RegulerDonatorForm;
