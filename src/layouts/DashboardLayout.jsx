import { Outlet } from "react-router-dom";
import DashboardHeader from "../pages/Dashboard/DashboardHeader";
import DashboardSidebar from "../pages/Dashboard/DashboardSidebar";
import { Toaster } from "sonner";

const DashboardLayout = () => {
   return (
      <div className="flex transition-all duration-300 font-onset">
         <DashboardSidebar />
         <main className="flex-1 rounded-lg">
            <DashboardHeader />
            <div className=" h-[540px] p-3 scrollbar-hide overflow-auto ">
               <Outlet />
            </div>
         </main>
         <Toaster position="top-right" richColors />
      </div>
   );
};

export default DashboardLayout;