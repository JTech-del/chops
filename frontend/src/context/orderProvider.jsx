import {
  useState,
} from 'react';

import OrderContext from './orderContext.jsx';



const ORDER_STORAGE_KEY = 'chops-current-order';
const CHECKOUT_STORAGE_KEY = 'chops-checkout-data';
const INSTRUCTIONS_STORAGE_KEY =
  'chops-special-instructions';

function generateOrderNumber() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const randomNumber = Math.floor(
    1000 + Math.random() * 9000,
  );

  return `CHP-${year}${month}${day}-${randomNumber}`;
}

function loadStoredOrder() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const storedOrder = localStorage.getItem(
      ORDER_STORAGE_KEY,
    );

    return storedOrder
      ? JSON.parse(storedOrder)
      : null;
  } catch {
    return null;
  }
}

function loadStoredCheckoutData() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const storedCheckout = localStorage.getItem(
      CHECKOUT_STORAGE_KEY,
    );

    return storedCheckout
      ? JSON.parse(storedCheckout)
      : null;
  } catch {
    return null;
  }
}

function loadStoredInstructions() {
  if (typeof window === 'undefined') {
    return '';
  }

  try {
    return (
      localStorage.getItem(
        INSTRUCTIONS_STORAGE_KEY,
      ) ?? ''
    );
  } catch {
    return '';
  }
}

export function OrderProvider({ children }) {
  const [currentOrder, setCurrentOrder] =
    useState(loadStoredOrder);

  const [checkoutData, setCheckoutData] =
    useState(loadStoredCheckoutData);

  const [specialInstructions, setSpecialInstructions] =
    useState(loadStoredInstructions);

  const saveCheckoutData = (data) => {
    setCheckoutData(data);

    if (typeof window !== 'undefined') {
      localStorage.setItem(
        CHECKOUT_STORAGE_KEY,
        JSON.stringify(data),
      );
    }
  };

  const saveSpecialInstructions = (instructions) => {
    const normalizedInstructions =
      instructions.trim();

    setSpecialInstructions(
      normalizedInstructions,
    );

    if (typeof window !== 'undefined') {
      if (normalizedInstructions) {
        localStorage.setItem(
          INSTRUCTIONS_STORAGE_KEY,
          normalizedInstructions,
        );
      } else {
        localStorage.removeItem(
          INSTRUCTIONS_STORAGE_KEY,
        );
      }
    }
  };

  const createOrder = (orderData) => {
    const order = {
      id: generateOrderNumber(),
      ...orderData,
      specialInstructions,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    setCurrentOrder(order);

    if (typeof window !== 'undefined') {
      localStorage.setItem(
        ORDER_STORAGE_KEY,
        JSON.stringify(order),
      );
    }

    return order;
  };

  const updateOrderStatus = (status) => {
    setCurrentOrder((current) => {
      if (!current) {
        return null;
      }

      const updatedOrder = {
        ...current,
        status,
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem(
          ORDER_STORAGE_KEY,
          JSON.stringify(updatedOrder),
        );
      }

      return updatedOrder;
    });
  };

  const clearOrder = () => {
    setCurrentOrder(null);

    if (typeof window !== 'undefined') {
      localStorage.removeItem(
        ORDER_STORAGE_KEY,
      );
    }
  };

  const clearCheckoutData = () => {
    setCheckoutData(null);

    if (typeof window !== 'undefined') {
      localStorage.removeItem(
        CHECKOUT_STORAGE_KEY,
      );
    }
  };

  const clearSpecialInstructions = () => {
    setSpecialInstructions('');

    if (typeof window !== 'undefined') {
      localStorage.removeItem(
        INSTRUCTIONS_STORAGE_KEY,
      );
    }
  };

const value = {
  currentOrder,
  checkoutData,
  specialInstructions,
  saveCheckoutData,
  saveSpecialInstructions,
  createOrder,
  updateOrderStatus,
  clearOrder,
  clearCheckoutData,
  clearSpecialInstructions,
};

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
}


/*
export function useOrderContext() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error(
      'useOrderContext must be used within an OrderProvider',
    );
  }

    return context;
}
*/
