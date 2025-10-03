import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import NotFound from "../pages/Error/NotFound";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Register";
import Users from "../pages/Dashboard/Users";
import Private from "./Private";
import AllCampaigns from "../pages/Projects/AllCampaign";
import AddCampaign from "../pages/Dashboard/AddCampaign";
import AdminPanel from "../pages/Dashboard/AdminPanel";
import Overview from "../pages/Dashboard/Overview";
import Reports from "../pages/Dashboard/Reports";


const router = createBrowserRouter([
   {
      path: "/", element: <MainLayout />, errorElement: <NotFound />,
      children: [
         {
            path: "/", element: <App />
         },
         {
            path: '/login', element: <Login />
         },
         {
            path: "/register", element: <Registration />
         },
         {
            path: "/projects", element: <AllCampaigns />
         },
         {
            path: "/users", element: <Private><Users /></Private>,
            hydrateFallbackElement: <div>Loading..</div>
         },
         { path: "overview", element: <Overview /> },
      ]
   },
   {
      path: "/dashboard", element: <AdminPanel />,
      children: [
         { path: "overview", element: <Overview /> },
         { path: "campaigns/add", element: <AddCampaign /> },
         { path: "users", element: <Users /> },
         { path: "reports", element: <Reports /> }
      ]

   }
])

export default router;