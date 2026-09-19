import { useCartContext } from '../context/useCartContext.js';

function useCart() {
  return useCartContext();
}

export default useCart;