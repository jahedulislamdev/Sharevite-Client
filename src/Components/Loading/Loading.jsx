const PageLoading = () => {
   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
         <div className="w-20 h-20 border-4 border-t-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
   );
};
const ContentLoading = () => {
   return (
      <div className="flex justify-center items-center h-52">
         <span className="loading loading-spinner loading-md"></span>
      </div>
   );
}

export { PageLoading, ContentLoading };