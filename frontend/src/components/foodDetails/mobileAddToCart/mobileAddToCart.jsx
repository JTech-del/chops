import './mobileAddToCart.css';

function MobileAddToCart({
  price,
  quantity,
  onAddToCart,
}) {
  return (
    <div className="mobile-add-to-cart">
      <div className="mobile-add-to-cart__content">
        <span className="mobile-add-to-cart__label">
          Total
        </span>

        <strong className="mobile-add-to-cart__price">
          ₦{price.toLocaleString()}
        </strong>

        {quantity > 1 && (
          <span className="mobile-add-to-cart__quantity">
            {quantity} items
          </span>
        )}
      </div>

      <button
        type="button"
        className="mobile-add-to-cart__button"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default MobileAddToCart;