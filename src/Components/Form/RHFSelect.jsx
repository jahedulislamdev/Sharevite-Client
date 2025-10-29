import { Controller, useFormContext } from "react-hook-form";
const RHFSelect = ({
   name,
   label = "",
   options = [],
   value = null,
   onchange = () => { },
   fieldArray = [],
   required = false,
   disabled = false, }) => {
   const { control, formState: { errors } } = useFormContext();
   const hasError = !!errors[name];
   return (
      <div>
         {label && (
            <label
               htmlFor={name}
               className={`block mt-3 mb-1 font-semibold  ${hasError ? "text-red-600" : "text-gray-400"
                  }`}
            >
               {label} {required && <span className="text-red-500">*</span>}
            </label>
         )}
         <Controller
            control={control}
            name={name}
            rules={{ required: required ? `${label} সিলেক্ট করুন` : false }}
            render={({ field }) => (
               <select
                  {...field}
                  value={value?.bn_name || ''}
                  onChange={(e) => {
                     const selectedOption = fieldArray?.find(obj => obj.bn_name === e.target.value)
                     field.onChange(e.target.value)
                     onchange(selectedOption || null)
                  }}
                  disabled={disabled || options.length === 0}
                  className={`select select-lg outline-0 select-bordered w-full ${hasError ? "border-red-500" : "border-gray-300"}`}

               >
                  <option value="">সিলেক্ট করুন</option>
                  {
                     options?.map((opt, idx) => (
                        <option key={idx} value={opt}>
                           {opt}
                        </option>
                     ))
                  }
               </select>
            )}
         />
         {hasError && (
            <p className="text-red-500 text-sm mt-1">
               {errors[name]?.message || "Invalid selection"}
            </p>
         )}
      </div>
   )

};

export default RHFSelect;