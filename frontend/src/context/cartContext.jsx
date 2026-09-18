import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'chops_cart';

function getInitialCart() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const storedCart =
      window.localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    const parsedCart = JSON.parse(storedCart);

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
}

function createCartItemKey(item) {
  const customization = item.customization;

  if (!customization) {
    return item.id;
  }

  const sizeId =
    customization.size?.id ?? '';

  const addOns = [
    ...(customization.addOns ?? []),
  ]
    .sort((a, b) =>
      a.id.localeCompare(b.id),
    )
    .map(
      (addOn) =>
        `${addOn.id}:${addOn.quantity}`,
    )
    .join('|');

  return [
    item.id,
    `size:${sizeId}`,
    `addons:${addOns}`,
  ].join('__');
}

function normalizeCartItem(item) {
  return {
    ...item,
    cartItemKey:
      item.cartItemKey ??
      createCartItemKey(item),
  };
}

function CartProvider({ children }) {
  const [cartItems, setCartItems] =
    useState(() => getInitialCart());

  useEffect(() => {
    window.localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cartItems),
    );
  }, [cartItems]);

  const addToCart = (item) => {
    const normalizedItem =
      normalizeCartItem(item);

    setCartItems((currentItems) => {
      const existingItem =
        currentItems.find(
          (cartItem) =>
            cartItem.cartItemKey ===
            normalizedItem.cartItemKey,
        );

      if (existingItem) {
        return currentItems.map(
          (cartItem) =>
            cartItem.cartItemKey ===
            normalizedItem.cartItemKey
              ? {
                  ...cartItem,
                  quantity:
                    cartItem.quantity + 1,
                }
              : cartItem,
        );
      }

      return [
        ...currentItems,
        {
          ...normalizedItem,
          quantity: 1,
        },
      ];
    });
  };

const removeFromCart = (cartItemKey) => {
  setCartItems((currentItems) =>
    currentItems.filter(
      (cartItem) =>
        (cartItem.cartItemKey ?? cartItem.id) !==
        cartItemKey,
    ),
  );
};


  const updateQuantity = (
    cartItemKey,
    quantity,
  ) => {
    const nextQuantity = Math.max(
      1,
      quantity,
    );

    setCartItems((currentItems) =>
      currentItems.map((cartItem) =>
        cartItem.cartItemKey === cartItemKey
          ? {
              ...cartItem,
              quantity: nextQuantity,
            }
          : cartItem,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + item.quantity,
        0,
      ),
    [cartItems],
  );

  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total +
          (item.unitPrice ?? item.price) *
            item.quantity,
        0,
      ),
    [cartItems],
  );

  const value = {
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context =
    useContext(CartContext);

  if (context === null) {
    throw new Error(
      'useCartContext must be used inside CartProvider.',
    );
  }

  return context;
}

export { CartProvider };