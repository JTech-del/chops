
import { createBrowserRouter } from 'react-router-dom';

import App from '../App.jsx';
import Home from '../pages/home/home.jsx';
import Menu from '../pages/menu/menu.jsx';
import FoodDetails from '../pages/foodDetails/foodDetails.jsx';
import Cart from '../pages/cart/cart.jsx';
import Checkout from '../pages/checkout/checkout.jsx';
import Payment from '../pages/payment/payment.jsx';
import OrderConfirmation from '../pages/orderConfirmation/orderConfirmation.jsx';
import OrderTracking from '../pages/orderTracking/orderTracking.jsx';
import Reservations from '../pages/reservations/reservations.jsx';
import About from '../pages/about/about.jsx';
import Gallery from '../pages/gallery/gallery.jsx';
import Contact from '../pages/contact/contact.jsx';
import NotFound from '../pages/notFound/notFound.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'menu/:foodId',
        element: <FoodDetails />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'order-confirmation',
        element: <OrderConfirmation />,
      },
      {
        path: 'order-tracking',
        element: <OrderTracking />,
      },
      {
        path: 'reservations',
        element: <Reservations />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default appRouter;
