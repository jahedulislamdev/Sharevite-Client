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
            path: "/all_campaign", element: <AllCampaigns />
         },
         {
            path: '/add-campaign', element: <AddCampaign />
         },
         {
            path: "/users", element: <Private><Users /></Private>,
            hydrateFallbackElement: <div>Loading..</div>
         }
      ]
   }
])

export default router;