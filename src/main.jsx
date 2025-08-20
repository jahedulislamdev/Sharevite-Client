import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/AppRoutes.jsx';
import AppContext from './contexts/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  </StrictMode>,
)
