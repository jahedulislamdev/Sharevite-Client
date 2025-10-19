import { useFormContext } from "react-hook-form";

export default function RHFSelect({ name, label = '', options = [], value = {}, onchange, fieldArray, required = false }) {
   const { register, formState: { errors } } = useFormContext();
   const hasError = !!errors[name];

   return (
      <div className="mb-4">
         <label className={`block mb-1 font-semibold label ${hasError ? "text-red-600" : ""}`}>
            {label} {required && <span className="text-red-500">*</span>}
         </label>

         <select

            {...register(name, required ? { required: `${label} নির্বাচন করুন` } : {})}
            className={`
               select select-lg w-full rounded-lg 
               bg-base-200  
               ${hasError
                  ? "border border-red-400 focus:border-red-500"
                  : "border-transparent hover:border-green-700 focus:border-green-700 outline-0"
               }
               transition-all 
            `}
            value={value?.bn_name}
            onChange={(e) => {
               const selectedOption = fieldArray.find(obj => obj.bn_name === e.target.value)
               onchange && onchange(selectedOption)

            }}
         >
            <option value="">নির্বাচন করুন</option>
            {options?.map((opt, idx) => (
               <option key={idx} value={opt}>{opt}</option>
            ))}
         </select>

         {hasError && (
            <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
         )}
      </div>
   );
};
