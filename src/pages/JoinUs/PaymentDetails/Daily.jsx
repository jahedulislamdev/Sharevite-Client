
const listOfAmount = [
   { label: "10", value: 10 },
   { label: "20", value: 20 },
   { label: "50", value: 50 },
   { label: "100", value: 100 },
   { label: "150", value: 150 },
   { label: "other", value: "setValue" },
]
const Daily = ({ setAmount }) => {
   return (
      <div className="grid grid-cols-3 py-6 px-4 font-onset gap-3 shadow-sm shadow-green-200 my-5 rounded-2xl">
         {
            listOfAmount.map((li, idx) => <button onClick={() => setAmount(li.value)} className="btn btn-lg font-normal" key={idx}>{li.label}</button>)
         }

      </div>
   );
};

export default Daily;