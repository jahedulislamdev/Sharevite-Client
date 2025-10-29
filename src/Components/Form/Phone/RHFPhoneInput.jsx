import { Controller, useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phoneinput.css";

const RHFPhoneInput = ({ name, label, required = false }) => {
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
            name={name}
            control={control}
            rules={{
               required: required ? `${label} দিন` : false,
            }}
            render={({ field: { onChange, value } }) => (
               <PhoneInput
                  country={"bd"}
                  value={value}
                  onChange={onChange}
                  enableSearch
               />
            )}
         />

         {hasError && (
            <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
         )}
      </div>
   );
};

export default RHFPhoneInput;
