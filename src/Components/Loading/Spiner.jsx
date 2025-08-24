const Spiner = () => {
   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
         <div className="w-20 h-20 border-4 border-t-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
   );
};

export default Spiner;
