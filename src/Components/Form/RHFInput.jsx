// components/form/RHFInput.jsx
import { Controller, useFormContext } from "react-hook-form";

export default function RHFInput({ name, label, type = "text", placeholder, required = false }) {
   const { control, formState: { errors } } = useFormContext();
   const hasError = !!errors[name];

   return (
      <div className="mb-4">
         <label
            className={`block mt-4 mb-1 font-semibold label ${hasError ? "text-red-600" : ""}`}
         >
            {label} {required && <span className="text-red-500">*</span>}
         </label>

         <Controller
            control={control}
            name={name}
            rules={{ required: required ? `${label} দিন` : false }}
            render={({ field }) => (
               <input
                  {...field}
                  type={type}
                  placeholder={placeholder}
                  className={` input input-lg rounded-lg px-3 py-2 w-full bg-base-200 
               ${hasError
                        ? "border border-red-400 focus:border-red-500"
                        : "border-transparent hover:border-green-700 focus:border-green-700"
                     } 
               transition-all duration-300
               focus:outline-none
            `}
               />
            )}
         />
         {hasError && (
            <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
         )}
      </div>
   );
}
