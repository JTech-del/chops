/*
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { CartProvider } from './context/cartProvider.jsx';
import { OrderProvider } from './context/orderProvider.jsx';
import { ThemeProvider } from './context/themeProvider.jsx';
import { ToastProvider } from './context/toastProvider.jsx';
import { ReservationProvider } from './context/reservationProvider.jsx';

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
       <ReservationProvider>
        <RouterProvider router={appRouter} />

       </ReservationProvider>
          </ToastProvider>
        </OrderProvider>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
);
*/



import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { CartProvider } from './context/cartProvider.jsx';
import { OrderProvider } from './context/orderProvider.jsx';
import { ThemeProvider } from './context/themeProvider.jsx';
import { ToastProvider } from './context/toastProvider.jsx';
import { ReservationProvider } from './context/reservationProvider.jsx';

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
            <ReservationProvider>
              <RouterProvider router={appRouter} />
            </ReservationProvider>
          </ToastProvider>
        </OrderProvider>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
);





