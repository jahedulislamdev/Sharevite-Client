
import { FaPlus } from "react-icons/fa";

const AddCampaign = () => {
   return (
      <div className="md:max-w-5xl mx-auto p-5 md:p-6 bg-base-100 rounded-2xl shadow-xl my-12 font-hind">
         {/* Title */}
         <h2 className="text-3xl font-bold mb-8 text-center title">
            নতুন ক্যম্পেইন যুক্ত করুন
         </h2>

         <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campaign Title */}
            <div>
               <label className="block mb-2 font-semibold">Title</label>
               <input
                  type="text"
                  name="title"
                  className="input input-bordered w-full"
                  placeholder="Enter campaign title"
                  required
               />
            </div>

            {/* Category */}
            <div>
               <label className="block mb-2 font-semibold">Category</label>
               <select
                  name="category"
                  className="select select-bordered w-full"
                  required
               >
                  <option value="">Select category</option>
                  <option value="Education">Education</option>
                  <option value="Medical">Medical</option>
                  <option value="Environment">Environment</option>
                  <option value="Charity">Charity</option>
                  <option value="Others">Others</option>
               </select>
            </div>
            {/* location  it can be multiple*/}
            <div>
               <label className="block mb-2 font-semibold">Locaiton</label>
               <input
                  type="text"
                  name="location"
                  className="input input-bordered w-full"
                  placeholder="e.g. Dhaka"
                  required
               />
            </div>

            {/* Goal */}
            <div>
               <label className="block mb-2 font-semibold">Goal Amount ($)</label>
               <input
                  type="number"
                  name="goal"
                  className="input input-bordered w-full"
                  placeholder="e.g. 5000"
                  required
               />
            </div>

            {/* Last Date */}
            <div>
               <label className="block mb-2 font-semibold">Last Date</label>
               <input
                  type="date"
                  name="lastDate"
                  className="input input-bordered w-full"
                  required
               />
            </div>

            {/* Organizer */}
            <div>
               <label className="block mb-2 font-semibold">Organizer Name</label>
               <input
                  type="text"
                  name="organizer"
                  className="input input-bordered w-full"
                  placeholder="Organizer full name"
                  required
               />
            </div>

            {/* Created At */}
            <div>
               <label className="block mb-2 font-semibold">Created At</label>
               <input
                  type="text"
                  name="createdAt"
                  className="input input-bordered w-full bg-base-100"
                  value={new Date().toLocaleString()}
                  readOnly
               />
            </div>

            {/* Image URL  it can be multiple*/}
            <div className="md:col-span-2">
               <label className="block mb-2 font-semibold">Image URL</label>
               <input
                  type="text"
                  name="imageUrl"
                  className="input input-bordered w-full"
                  placeholder="Paste campaign image URL"
               />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
               <label className="block mb-2 font-semibold">Description</label>
               <textarea
                  name="description"
                  className="textarea textarea-bordered w-full h-28"
                  placeholder="Write a short description..."
                  required
               ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
               <button
                  type="submit"
                  className="btn bg-green-800 w-full text-white mx-auto mt-4 flex justify-center items-center font-hind"
               >
                  <FaPlus className="size-5" /> যুক্ত করুন
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddCampaign;
