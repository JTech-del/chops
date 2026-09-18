import { useCartContext } from '../../../context/cartContext.jsx';

function CartItem({ item }) {
  const {
    updateQuantity,
    removeFromCart,
  } = useCartContext();

  const cartItemKey =
  item.cartItemKey ?? item.id;



  const unitPrice =
    item.unitPrice ?? item.price;

  const itemTotal =
    unitPrice * item.quantity;

  return (
    <article className="cart-item">
      <div className="cart-item__image-wrapper">
        <img
          className="cart-item__image"
          src={item.image}
          alt={item.name}
        />
      </div>

      <div className="cart-item__details">
        <div className="cart-item__main">
          <div>
            <span className="cart-item__category">
              {item.category}
            </span>

            <h2 className="cart-item__name">
              {item.name}
            </h2>

            <p className="cart-item__description">
              {item.description}
            </p>

            {item.customization && (
              <div className="cart-item__customization">
                {item.customization.size && (
                  <span>
                   Add-ons:{' '}
                     <strong>
      {item.customization.addOns
        .map(
          (addOn) =>
            `${addOn.name} × ${addOn.quantity ?? 1}`,
        )
        .join(', ')}
    </strong>
                  </span>
                )}

                {item.customization.addOns?.length > 0 && (
                  <span>
                    Add-ons:{' '}
                    <strong>
                      {item.customization.addOns
                        .map(
                          (addOn) =>
                            `${addOn.name} × ${addOn.quantity}`,
                        )
                        .join(', ')}
                    </strong>
                  </span>
                )}
              </div>
            )}
          </div>

          <strong className="cart-item__price">
            ₦{itemTotal.toLocaleString()}
          </strong>
        </div>

        <div className="cart-item__actions">
          <div className="cart-item__quantity">
            <button
              type="button"
              onClick={() =>
                updateQuantity(
                  cartItemKey,
                  item.quantity - 1,
                )
              }
              disabled={item.quantity <= 1}
              aria-label={`Decrease ${item.name} quantity`}
            >
              −
            </button>

            <span aria-live="polite">
              {item.quantity}
            </span>

            <button
              type="button"
              onClick={() =>
                updateQuantity(
                  cartItemKey,
                  item.quantity + 1,
                )
              }
              aria-label={`Increase ${item.name} quantity`}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="cart-item__remove"
            onClick={() =>
              removeFromCart(cartItemKey)
            }
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;