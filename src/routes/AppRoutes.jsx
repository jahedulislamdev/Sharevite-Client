import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import NotFound from "../pages/Error/NotFound";

const router = createBrowserRouter([
   {
      path: "/", element: <MainLayout />, errorElement: <NotFound />,
      children: [
         {
            path: "/", element: <App />
         }
      ]
   }
])

export default router;