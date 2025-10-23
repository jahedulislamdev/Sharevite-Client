const listOfAmount = [
   { label: "300", value: 300 },
   { label: "500", value: 500 },
   { label: "1000", value: 1000 },
   { label: "2000", value: 2000 },
   { label: "5000", value: 5000 },
   { label: "other", value: "setValue" },
]
const Monthly = ({ amount, setAmount }) => {
   return (
      <div className="grid grid-cols-3 py-6 px-4 font-onset gap-3 shadow-sm shadow-green-200 my-5 rounded-2xl">
         {
            listOfAmount.map((li, idx) => <button onClick={() => setAmount(li.value)} className={`btn btn-lg font-normal ${amount === li.value && "bg-green-700 text-white"}`} key={idx}>{li.label}</button>)
         }
      </div>
   );
};

export default Monthly;