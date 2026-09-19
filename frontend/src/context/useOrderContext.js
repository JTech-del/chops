import { useContext } from 'react';

import OrderContext from './orderContext.jsx';

export function useOrderContext() {
  const context = useContext(OrderContext);

  if (context === null) {
    throw new Error(
      'useOrderContext must be used inside OrderProvider.',
    );
  }

  return context;
}
