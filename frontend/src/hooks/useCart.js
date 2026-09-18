import { useCartContext } from '../context/cartContext.jsx';

function useCart() {
  return useCartContext();
}

export default useCart;