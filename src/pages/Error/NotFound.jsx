import { useRouteError } from "react-router-dom";

const NotFound = () => {
   const listenErr = useRouteError();
   console.error(listenErr);

   return (
      <>
         {listenErr?.status === 404 ? (
            <div className="bg-[#0F172A] h-screen flex justify-center items-center space-x-3">
               <p className="text-lg sm:text-2xl font-bold border-e pe-2 sm:pe-4 text-gray-400">
                  404
               </p>
               <p className="text-lg sm:text-xl font-semibold text-gray-300">
                  This page could not be found.
               </p>
            </div>
         ) : (
            <div className="bg-[#0F172A] h-screen flex flex-col justify-center items-center text-center px-4">
               <p className="text-3xl font-bold text-red-500 mb-3">
                  {listenErr?.status || "Error"}
               </p>
               <p className="text-sm sm:text-base md:text-lg font-medium text-gray-300 max-w-xl">
                  <span className="text-red-600">Oops! Something went wrong.</span>
                  <br />
                  <span className="opacity-70">
                     An unexpected client-side or server-side exception has occurred. Please check the
                     browser console for more details or try refreshing the page.
                  </span>
               </p>
               <button
                  onClick={() => window.location.reload()}
                  className="mt-5 px-6 py-2 rounded-xl bg-red-900 text-white font-semibold hover:bg-red-700 transition-all"
               >
                  Refresh Page
               </button>
            </div>
         )}
      </>
   );
};

export default NotFound;
