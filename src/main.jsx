import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/AppRoutes.jsx';
import AuthContext from './contexts/AuthContext.jsx';
import SiteConfigContext from './contexts/SiteConfigContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <SiteConfigContext>
          <RouterProvider router={router} />
        </SiteConfigContext>
      </AuthContext>
    </QueryClientProvider>
  </StrictMode>,
)
