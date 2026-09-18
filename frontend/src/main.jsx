
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';


import { CartProvider } from './context/cartContext.jsx';
import { OrderProvider } from './context/orderContext.jsx';
import { ThemeProvider } from './context/themeContext.jsx';
import { ToastProvider } from './context/toastContext.jsx';

import appRouter from './routes/appRoutes.jsx';

import './styles/reset.css';
import './styles/variables.css';
import './styles/typography.css';
import './styles/globals.css';
import './styles/utilities.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <OrderProvider>
          <ToastProvider>
            <RouterProvider router={appRouter} />
       
          </ToastProvider>
        </OrderProvider>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
);





