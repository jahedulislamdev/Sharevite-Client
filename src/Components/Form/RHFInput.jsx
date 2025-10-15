// components/form/RHFInput.jsx
import { useFormContext } from "react-hook-form";

export default function RHFInput({ name, label, type = "text", placeholder, required = false }) {
   const { register, formState: { errors } } = useFormContext();

   return (
      <div className="mb-4">
         <label className="block mb-1 font-semibold label">
            {label} {required && <span className="text-red-500">*</span>}
         </label>
         <input
            type={type}
            placeholder={placeholder}
            {...register(name, required ? { required: `${label} দিতে হবে` } : {})}
            className={`w-full input input-lg border rounded-lg px-3 py-2 focus:outline-blue-600 focus:outline-1 ${errors[name] ? "border-red-400" : "border-gray-600"
               }`}
         />
         {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
      </div>
   );
}
