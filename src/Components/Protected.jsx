const Protected = () => {
   return (
      <div>
         <h1 className="text-2xl font-bold">Protected Route</h1>
         <p className="mt-2 text-sm text-gray-500">You must be logged in to view this page.</p>
      </div>
   );
};

export default Protected;