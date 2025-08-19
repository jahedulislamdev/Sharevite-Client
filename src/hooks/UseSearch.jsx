const UseSearch = () => {
   return (
      <dialog id="searchMe" className="modal">
         <div className="modal-box min-h-80">
            <div className="join w-full border border-green-300 rounded-4xl">
               <input type="text" placeholder="Search Your favorite food here..." className="focus:outline-none w-full join-item ps-4" />
               <button className="join-item btn btn-lg bg-green-500 rounded-3xl px-5 text-white">Search</button>
            </div>
         </div>
         <form method="dialog" className="modal-backdrop">
            <button>close</button>
         </form>
      </dialog>
   );
};

export default UseSearch;
