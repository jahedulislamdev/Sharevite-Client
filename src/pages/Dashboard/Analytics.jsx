import { useState } from "react";

const TagInput = () => {
   const [tags, setTags] = useState([]);
   const [inputValue, setInputValue] = useState("");

   // নতুন Tag যোগ করা
   const handleKeyDown = (e) => {
      // Enter বা Comma দিলে ট্যাগ হবে
      if ((e.key === "Enter" || e.key === ",") && inputValue.trim() !== "") {
         e.preventDefault();

         if (!tags.includes(inputValue.trim())) {
            setTags([...tags, inputValue.trim()]);
         }

         setInputValue("");
      }

      // Backspace চাপলে Tag delete হবে (যদি input খালি থাকে)
      if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
         e.preventDefault();
         setTags(tags.slice(0, tags.length - 1)); // শেষের Tag বাদ দেওয়া
      }
   };

   // ম্যানুয়ালি Tag remove করা
   const removeTag = (index) => {
      setTags(tags.filter((_, i) => i !== index));
   };

   return (
      <div className="w-full max-w-lg">
         <label className="block mb-2 font-semibold">📌 Enter Tags</label>

         <div className="flex flex-wrap items-center gap-2 p-2 border rounded-md focus-within:ring-2 focus-within:ring-blue-500">
            {tags.map((tag, index) => (
               <span
                  key={index}
                  className="bg-green-800 text-white  px-3 py-1 rounded-full flex items-center gap-2"
               >
                  {tag}
                  <button
                     type="button"
                     className="text-red-500 hover:text-red-700"
                     onClick={() => removeTag(index)}
                  >
                     ✖
                  </button>
               </span>
            ))}

            <input
               type="text"
               className="flex-1 outline-none p-1"
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               onKeyDown={handleKeyDown}
               placeholder="Type and press Enter..."
            />
         </div>
      </div>
   );
};

export default TagInput;
