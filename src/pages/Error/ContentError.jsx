import { MdErrorOutline } from "react-icons/md";

const ContentError = ({ message = "Something went wrong!" }) => {
   return (
      <div className="flex items-center justify-center min-h-[60vh] px-4">
         <div className="bg-red-50 border border-red-200 rounded-2xl shadow-md p-6 max-w-md text-center animate-fadeIn">
            <MdErrorOutline className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-red-700 mb-2">Error</h2>
            <p className="text-red-600">{message}</p>
         </div>
      </div>
   );
};

export default ContentError;
