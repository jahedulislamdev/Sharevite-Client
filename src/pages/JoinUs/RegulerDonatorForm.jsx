import { useState } from "react";
import Daily from "./PaymentDetails/Daily";
import Monthly from "./PaymentDetails/Monthly";
import { FormProvider, useForm } from "react-hook-form";
import { useAuthContext } from "../../hooks/useContext";


// Payment Methods
const paymentMethods = [
   {
      value: "bkash",
      img: "https://static.vecteezy.com/system/resources/previews/068/764/270/non_2x/bkash-logo-mobile-banking-app-icon-transparent-background-free-png.png",
      alt: "bKash",
   },
   {
      value: "nagad",
      img: "https://static.vecteezy.com/system/resources/previews/068/894/449/non_2x/nagan-logo-horizontal-bangla-mobile-banking-app-icon-transparent-background-free-png.png",
      alt: "Nagad",
   },
   {
      value: "card",
      img: "https://cdn-icons-png.flaticon.com/512/6963/6963703.png",
      alt: "Card",
   },
];
const RegulerDonatorForm = () => {
   const methods = useForm();
   const { register, handleSubmit, formState: { errors } } = methods;
   const [amountList, setAmountList] = useState("daily");
   const [amount, setAmount] = useState(10);
   const [selectedMethod, setSelectedMethod] = useState("bkash");
   const { user } = useAuthContext();

   // render Daily / Monthly Amount Components
   const renderAmountList = () => {
      switch (amountList) {
         case "daily": return <Daily amount={amount} setAmount={setAmount} />;
         case "monthly": return <Monthly amount={amount} setAmount={setAmount} />;
         default: return null;
      }
   };

   // Submit Handler
   const handleDonarForm = (data) => {
      console.log({ ...data, amount });
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
               <iframe
                  className="w-full aspect-video rounded-2xl"
                  src="https://www.youtube.com/embed/KVjKMEAerhQ?si=PPN4CjY9U2k_sDxK"
                  title="YouTube video player"
                  allowFullScreen
               />
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
                  {/* Daily / Monthly Toggle */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                     <button
                        type="button"
                        onClick={() => setAmountList("daily")}
                        className={`p-3 rounded-xl font-semibold transition ${amountList === "daily"
                           ? "bg-green-600 text-white"
                           : "bg-base-200 hover:bg-base-300"
                           }`}
                     >
                        দৈনিক
                     </button>
                     <button
                        type="button"
                        onClick={() => setAmountList("monthly")}
                        className={`p-3 rounded-xl font-semibold transition ${amountList === "monthly"
                           ? "bg-green-600 text-white"
                           : "bg-base-200 hover:bg-base-300"
                           }`}
                     >
                        মাসিক
                     </button>
                  </div>

                  {/* Render Dynamic Amount Fields */}
                  {renderAmountList()}

                  {/* Donation Form */}
                  <FormProvider {...methods}>
                     <form onSubmit={handleSubmit(handleDonarForm)} className="space-y-6">
                        {/* Donation Amount */}
                        <div>
                           <label className="label mb-2">
                              অনুদানের পরিমাণ <span className="text-red-600">*</span>
                           </label>
                           <input
                              type="number"
                              {...register("donationAmount", { required: "অনুদানের পরিমাণ দিন" })}
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              placeholder="অনুদানের পরিমাণ লিখুন"
                              className={`w-full rounded-lg border px-4 py-2.5 bg-base-200 focus:outline-none focus:ring-2 transition-all duration-300 
                              ${errors?.donationAmount
                                    ? "border-red-400 focus:ring-red-400"
                                    : "border-transparent hover:border-green-600 focus:ring-green-600"
                                 }`}
                           />
                           {errors?.donationAmount && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errors.donationAmount.message}
                              </p>
                           )}
                        </div>

                        {/* Donor Info */}
                        <div>
                           <label className="label mb-2">
                              ব্যাক্তির নাম
                           </label>
                           <input
                              type="text"
                              {...register("donorName")}
                              value={user?.displayName || ""}
                              readOnly={user}
                              className="w-full font-onset rounded-lg bg-base-200 px-4 py-2.5 text-base opacity-70 cursor-not-allowed"
                           />
                        </div>

                        <div>
                           <label className="label mb-2">
                              ইমেইল / মোবাইল <span className="text-red-600">*</span>
                           </label>
                           <input
                              type="text"
                              {...register("donatorEmailOrPhone")}
                              value={user?.email || ""}
                              readOnly={user}
                              className="w-full font-onset rounded-lg bg-base-200 px-4 py-2.5 text-base opacity-70 cursor-not-allowed"
                           />
                        </div>

                        <div>
                           <label className="label mb-2">
                              অন্য কারো পক্ষ থেকে দান করে থাকলে তার নাম লিখুন
                           </label>
                           <input
                              type="text"
                              {...register("anotherDonatorName")}
                              className="w-full rounded-lg bg-base-200 px-4 py-2.5 text-base"
                           />
                        </div>

                        {/* Payment Method */}
                        <div>
                           <label className=" mb-3 label">
                              পেমেন্ট মাধ্যম <span className="text-red-600">*</span>
                           </label>
                           <div className="flex flex-wrap gap-5">
                              {paymentMethods.map((method) => (
                                 <label
                                    key={method.value}
                                    onClick={() => setSelectedMethod(method.value)}
                                    className={`flex items-center justify-center gap-3 rounded-xl px-6 py-4 cursor-pointer border transition-all duration-300 shadow-sm 
                                       ${selectedMethod === method.value
                                          ? "border-green-500 bg-green-50 shadow-md scale-105"
                                          : "border-transparent bg-base-200 opacity-60 hover:opacity-90"
                                       }`}
                                 >
                                    <input
                                       type="radio"
                                       value={method.value}
                                       {...register("paymentMethod", { required: true })}
                                       checked={selectedMethod === method.value}
                                       onChange={() => setSelectedMethod(method.value)}
                                       className="hidden"
                                    />
                                    <img
                                       src={method.img}
                                       alt={method.alt}
                                       className={`w-10 h-10 object-contain transition-transform duration-300 ${selectedMethod === method.value ? "scale-110" : "scale-100"
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
      </section>
   );
};

export default RegulerDonatorForm;
