import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import NotFound from "../pages/Error/NotFound";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Register";
import Users from "../pages/Dashboard/Users";


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
            path: "/users", element: <Users />,
            hydrateFallbackElement: <div>Loading..</div>
         }
      ]
   }
])

export default router;