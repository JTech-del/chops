import { useContext } from 'react';

import CartContext from './cartContext.jsx';

export function useCartContext() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error(
      'useCartContext must be used inside CartProvider.',
    );
  }

  return context;
}