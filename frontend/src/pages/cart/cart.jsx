import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../../components/cart/cartItem/cartItem.jsx';
import featuredItems from '../../data/featuredItems.js';
import { useCartContext } from '../../context/useCartContext.js';
import { useOrderContext } from '../../context/useOrderContext.js';

import './cart.css';

const DELIVERY_FEE = 1500;
const SERVICE_FEE_RATE = 0.03;
const FREE_DELIVERY_THRESHOLD = 25000;

function Cart() {
 const {
  cartItems,
  cartTotal,
  cartCount,
} = useCartContext();

const {
  specialInstructions,
  saveSpecialInstructions,
} = useOrderContext();

  const [orderType, setOrderType] = useState('delivery');
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('');
  const [promoMessage, setPromoMessage] = useState('');
 

  const serviceFee = useMemo(
    () => Math.round(cartTotal * SERVICE_FEE_RATE),
    [cartTotal],
  );

  const deliveryFee = useMemo(() => {
    if (orderType === 'pickup') {
      return 0;
    }

    if (cartTotal >= FREE_DELIVERY_THRESHOLD) {
      return 0;
    }

    return DELIVERY_FEE;
  }, [cartTotal, orderType]);

  const discount = useMemo(() => {
    if (appliedPromo === 'CHOPS10') {
      return Math.round(cartTotal * 0.1);
    }

    return 0;
  }, [cartTotal, appliedPromo]);

  const grandTotal = Math.max(
    0,
    cartTotal + deliveryFee + serviceFee - discount,
  );

  const recommendedItems = featuredItems
    .filter(
      (item) => !cartItems.some((cartItem) => cartItem.id === item.id),
    )
    .slice(0, 3);

  const handlePromoSubmit = (event) => {
    event.preventDefault();

    const normalizedCode = promoCode.trim().toUpperCase();

    if (!normalizedCode) {
      setPromoMessage('Enter a promo code to continue.');
      setAppliedPromo('');
      return;
    }

    if (normalizedCode === 'CHOPS10') {
      setAppliedPromo(normalizedCode);
      setPromoMessage('10% discount applied successfully.');
      return;
    }

    setAppliedPromo('');
    setPromoMessage('That promo code is not valid.');
  };

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-page__container container">
          <div className="cart-page__empty">
            <div className="cart-page__empty-icon" aria-hidden="true">
              🛒
            </div>

            <span className="cart-page__eyebrow">Your order</span>

            <h1 className="cart-page__title">Your Cart Is Empty</h1>

            <p className="cart-page__empty-description">
              You haven't added anything to your order yet. Explore our menu
              and discover something delicious.
            </p>

            <Link className="cart-page__primary-button" to="/menu">
              Browse Menu
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-page__container container">
        <header className="cart-page__header">
          <div>
            <span className="cart-page__eyebrow">Your order</span>

            <h1 className="cart-page__title">Your Cart</h1>

            <p className="cart-page__description">
              Review your selections and choose how you'd like to receive your
              order.
            </p>
          </div>

          <span className="cart-page__count">
            {cartCount} {cartCount === 1 ? 'item' : 'items'}
          </span>
        </header>

        <div className="cart-page__layout">
          <div className="cart-page__main">
            <section
              className="cart-page__section"
              aria-labelledby="cart-items-title"
            >
              <div className="cart-page__section-header">
                <div>
                  <span className="cart-page__section-eyebrow">
                    Your selection
                  </span>

                  <h2
                    id="cart-items-title"
                    className="cart-page__section-title"
                  >
                    Order Items
                  </h2>
                </div>

                <Link
                  className="cart-page__section-link"
                  to="/menu"
                >
                  Add more items
                </Link>
              </div>

              <div className="cart-page__items">
                {cartItems.map((item) => (
                 <CartItem
  item={item}
  key={item.cartItemKey ?? item.id}
/>
                ))}
              </div>
            </section>

            <section
              className="cart-page__section cart-page__order-options"
              aria-labelledby="order-options-title"
            >
              <div className="cart-page__section-header">
                <div>
                  <span className="cart-page__section-eyebrow">
                    Order preference
                  </span>

                  <h2
                    id="order-options-title"
                    className="cart-page__section-title"
                  >
                    How would you like your order?
                  </h2>
                </div>
              </div>

              <div className="cart-page__order-types">
                <button
                  type="button"
                  className={`cart-page__order-type ${
                    orderType === 'delivery'
                      ? 'cart-page__order-type--active'
                      : ''
                  }`}
                  onClick={() => setOrderType('delivery')}
                >
                  <span className="cart-page__order-type-icon">
                    🚴
                  </span>

                  <span>
                    <strong>Delivery</strong>
                    <small>
                      Delivered to your preferred address
                    </small>
                  </span>

                  <span className="cart-page__order-type-check">
                    {orderType === 'delivery' ? '✓' : ''}
                  </span>
                </button>

                <button
                  type="button"
                  className={`cart-page__order-type ${
                    orderType === 'pickup'
                      ? 'cart-page__order-type--active'
                      : ''
                  }`}
                  onClick={() => setOrderType('pickup')}
                >
                  <span className="cart-page__order-type-icon">
                    🛍️
                  </span>

                  <span>
                    <strong>Pickup</strong>
                    <small>
                      Collect your order from Chops
                    </small>
                  </span>

                  <span className="cart-page__order-type-check">
                    {orderType === 'pickup' ? '✓' : ''}
                  </span>
                </button>
              </div>

              <div className="cart-page__estimate">
                <span className="cart-page__estimate-icon">⏱</span>

                <div>
                  <strong>
                    {orderType === 'delivery'
                      ? 'Estimated delivery: 30–45 minutes'
                      : 'Estimated pickup: 20–30 minutes'}
                  </strong>

                  <span>
                    Freshly prepared after you place your order.
                  </span>
                </div>
              </div>

              <div className="cart-page__instructions">
                <label htmlFor="special-instructions">
                  Special instructions
                </label>

         <textarea
  id="special-instructions"
  value={specialInstructions}
  onChange={(event) =>
    saveSpecialInstructions(event.target.value)
  }
  placeholder="Anything we should know about your order?"
  rows="3"
  maxLength={500}
/>

<span className="cart-page__instructions-count">
  {specialInstructions.length}/500
</span>

              </div>
            </section>

            {recommendedItems.length > 0 && (
              <section
                className="cart-page__section"
                aria-labelledby="recommended-title"
              >
                <div className="cart-page__section-header">
                  <div>
                    <span className="cart-page__section-eyebrow">
                      You may also like
                    </span>

                    <h2
                      id="recommended-title"
                      className="cart-page__section-title"
                    >
                      Complete Your Order
                    </h2>
                  </div>

                  <Link
                    className="cart-page__section-link"
                    to="/menu"
                  >
                    View menu
                  </Link>
                </div>

                <div className="cart-page__recommendations">
                  {recommendedItems.map((item) => (
                    <Link
                      className="cart-page__recommendation"
                      to={`/menu/${item.id}`}
                      key={item.id}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                      />

                      <div>
                        <strong>{item.name}</strong>

                        <span>
                          ₦{item.price.toLocaleString()}
                        </span>
                      </div>

                      <span
                        className="cart-page__recommendation-arrow"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="cart-page__summary">
            <div className="cart-page__summary-card">
              <div className="cart-page__summary-heading">
                <div>
                  <span className="cart-page__section-eyebrow">
                    Checkout
                  </span>

                  <h2 className="cart-page__summary-title">
                    Order Summary
                  </h2>
                </div>
              </div>

              <div className="cart-page__summary-rows">
                <div className="cart-page__summary-row">
                  <span>
                    Subtotal
                    <small>{cartCount} items</small>
                  </span>

                  <strong>
                    ₦{cartTotal.toLocaleString()}
                  </strong>
                </div>

                <div className="cart-page__summary-row">
                  <span>Delivery</span>

                  <strong
                    className={
                      deliveryFee === 0
                        ? 'cart-page__summary-free'
                        : ''
                    }
                  >
                    {deliveryFee === 0
                      ? 'Free'
                      : `₦${deliveryFee.toLocaleString()}`}
                  </strong>
                </div>

                <div className="cart-page__summary-row">
                  <span>Service fee</span>

                  <strong>
                    ₦{serviceFee.toLocaleString()}
                  </strong>
                </div>

                {discount > 0 && (
                  <div className="cart-page__summary-row cart-page__summary-row--discount">
                    <span>Discount</span>

                    <strong>
                      −₦{discount.toLocaleString()}
                    </strong>
                  </div>
                )}
              </div>

              {orderType === 'delivery' &&
                cartTotal > 0 &&
                cartTotal < FREE_DELIVERY_THRESHOLD && (
                  <div className="cart-page__free-delivery">
                    <span aria-hidden="true">🚴</span>

                    <p>
                      Add{' '}
                      <strong>
                        ₦
                        {(
                          FREE_DELIVERY_THRESHOLD - cartTotal
                        ).toLocaleString()}
                      </strong>{' '}
                      more for free delivery.
                    </p>
                  </div>
                )}

              {cartTotal >= FREE_DELIVERY_THRESHOLD &&
                orderType === 'delivery' && (
                  <div className="cart-page__free-delivery cart-page__free-delivery--success">
                    <span aria-hidden="true">✓</span>

                    <p>
                      You've unlocked <strong>free delivery!</strong>
                    </p>
                  </div>
                )}

              <form
                className="cart-page__promo"
                onSubmit={handlePromoSubmit}
              >
                <label htmlFor="promo-code">Promo code</label>

                <div className="cart-page__promo-input">
                  <input
                    id="promo-code"
                    type="text"
                    value={promoCode}
                    onChange={(event) =>
                      setPromoCode(event.target.value)
                    }
                    placeholder="Enter code"
                    aria-describedby="promo-message"
                  />

                  <button type="submit">Apply</button>
                </div>

                <span
                  id="promo-message"
                  className={`cart-page__promo-message ${
                    appliedPromo
                      ? 'cart-page__promo-message--success'
                      : ''
                  }`}
                  role="status"
                >
                  {promoMessage ||
                    'Try CHOPS10 for 10% off your order.'}
                </span>
              </form>

              <div className="cart-page__summary-divider" />

              <div className="cart-page__summary-total">
                <div>
                  <span>Total</span>
                  <small>Including applicable fees</small>
                </div>

                <strong>
                  ₦{grandTotal.toLocaleString()}
                </strong>
              </div>

              <Link
                className="cart-page__checkout-button"
                to="/checkout"
              >
                Proceed to Checkout
                <span aria-hidden="true">→</span>
              </Link>

              <div className="cart-page__secure">
                <span aria-hidden="true">🔒</span>

                <span>
                  Secure checkout
                  <small>Your payment information is protected.</small>
                </span>
              </div>

              <Link className="cart-page__continue" to="/menu">
                ← Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Cart;
