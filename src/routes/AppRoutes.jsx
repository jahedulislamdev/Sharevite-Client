import ProjectDetails from "../pages/Projects/ProjectDetails";
import EditCampaigns from "../pages/Dashboard/EditCampaigns";
import DashboardLayout from './../layouts/DashboardLayout';
import AllCampaigns from "../pages/Projects/AllCampaign";
import AddCampaign from "../pages/Dashboard/AddCampaign";
import { createBrowserRouter } from "react-router-dom";
import Campaigns from "../pages/Dashboard/Campaigns";
import Overview from "../pages/Dashboard/Overview";
import Registration from "../pages/Auth/Register";
import Reports from "../pages/Dashboard/Reports";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/Error/NotFound";
import Users from "../pages/Dashboard/Users";
import Login from "../pages/Auth/Login";
import Private from "./PrivateRoutes";
import AdminRoutes from './AdminRoutes';
import App from "../App";
import Blog from "../pages/Blogs/Blog";
import JoinUsMain from "../pages/JoinUs/JoinUsMain";


const router = createBrowserRouter([
   // public routes
   {
      path: "/", element: <MainLayout />, errorElement: <NotFound />,
      children: [
         { path: "/", element: <App /> },
         { path: '/login', element: <Login /> },
         { path: "/register", element: <Registration /> },
         { path: "/projects", element: <AllCampaigns /> },
         { path: "/project/details/:id", element: <ProjectDetails /> },
         { path: "/blog", element: <Blog /> },
         { path: "/joinus", element: <JoinUsMain /> }
      ]
   },
   // Dashboard routes
   {
      path: "/dashboard", element: <AdminRoutes><DashboardLayout /></AdminRoutes>,
      children: [
         { path: "/dashboard", element: <Overview /> },
         { path: "overview", element: <Overview /> },
         { path: "campaigns/add", element: <AddCampaign /> },
         { path: "campaigns", element: <Campaigns /> },
         { path: "campaign/edit/:id", element: <EditCampaigns /> },
         { path: "users", element: <Users /> },
         { path: "reports", element: <Reports /> },
      ]
   }
])

export default router;