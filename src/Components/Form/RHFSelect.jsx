import { useFormContext } from "react-hook-form";

export default function RHFSelect({ name, label = '', options = [], required = false }) {
   const { register, formState: { errors } } = useFormContext();
   return (
      <div>
         <label className="block mb-1 font-semibold label">
            {label} {required && <span className="text-red-500">*</span>}
         </label>
         <select
            {...register(name, required ? { required: `${label} নির্বাচন করুন` } : {})}
            className={`select select-lg rounded-lg focus:outline-green-500 px-3 py-2 ${errors[name] ? "border-red-600" : "border-gray-300"}`}>w-full border
            <option value="">নির্বাচন করুন</option>
            {
               options?.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)
            }
         </select>
         {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
      </div>
   );
};