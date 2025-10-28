import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/AppRoutes.jsx';
import AuthContext from './contexts/AuthContext.jsx';
import SiteConfigContext from './contexts/SiteConfigContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PageLoading } from './Components/Loading/Loading.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <SiteConfigContext>
          <Suspense fallback={PageLoading}>
            <RouterProvider router={router} />
          </Suspense>
        </SiteConfigContext>
      </AuthContext>
    </QueryClientProvider>
  </StrictMode>,
)
