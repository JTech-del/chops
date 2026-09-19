import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useCartContext } from '../../context/useCartContext.js';

import './orderTracking.css';

const DELIVERY_FEE = 1500;
const SERVICE_FEE_RATE = 0.03;
const FREE_DELIVERY_THRESHOLD = 25000;

function OrderTracking() {
  const { cartItems, cartTotal } = useCartContext();

  const serviceFee = useMemo(
    () => Math.round(cartTotal * SERVICE_FEE_RATE),
    [cartTotal],
  );

  const deliveryFee =
    cartTotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;

  const grandTotal = cartTotal + deliveryFee + serviceFee;

  const orderNumber = 'CHP-20260914-4821';

  return (
    <main className="order-tracking-page">
      <section className="order-tracking-page__header">
        <div className="container">
          <div className="order-tracking-page__header-content">
            <div>
              <span className="order-tracking-page__eyebrow">
                Order tracking
              </span>

              <h1 className="order-tracking-page__title">
                Follow your order
              </h1>

              <p className="order-tracking-page__description">
                We’ll keep you updated as your order makes its way from
                our kitchen to you.
              </p>
            </div>

            <div className="order-tracking-page__order-id">
              <span>Order number</span>
              <strong>{orderNumber}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="order-tracking-page__content">
        <div className="container">
          <div className="order-tracking-page__layout">
            <div className="order-tracking-page__main">
              <section className="tracking-card tracking-card--current">
                <div className="tracking-current">
                  <div className="tracking-current__icon" aria-hidden="true">
                    🍳
                  </div>

                  <div className="tracking-current__content">
                    <span className="tracking-current__label">
                      Current status
                    </span>

                    <h2>We’re preparing your order</h2>

                    <p>
                      Our kitchen team is carefully preparing your food.
                      We’ll let you know as soon as it’s ready.
                    </p>

                    <div className="tracking-current__time">
                      <span>Estimated arrival</span>
                      <strong>30–45 minutes</strong>
                    </div>
                  </div>
                </div>
              </section>

              <section className="tracking-card">
                <div className="tracking-card__header">
                  <div>
                    <span className="tracking-card__eyebrow">
                      Live updates
                    </span>

                    <h2 className="tracking-card__title">
                      Order progress
                    </h2>
                  </div>

                  <span className="tracking-live">
                    <span className="tracking-live__dot" />
                    Live
                  </span>
                </div>

                <div className="tracking-timeline">
                  <div className="tracking-timeline__item tracking-timeline__item--completed">
                    <div className="tracking-timeline__marker">
                      ✓
                    </div>

                    <div className="tracking-timeline__content">
                      <div className="tracking-timeline__top">
                        <h3>Order confirmed</h3>
                        <span>Just now</span>
                      </div>

                      <p>
                        Your order has been received and confirmed.
                      </p>
                    </div>
                  </div>

                  <div className="tracking-timeline__line tracking-timeline__line--active" />

                  <div className="tracking-timeline__item tracking-timeline__item--current">
                    <div className="tracking-timeline__marker">
                      <span className="tracking-timeline__pulse" />
                    </div>

                    <div className="tracking-timeline__content">
                      <div className="tracking-timeline__top">
                        <h3>Preparing your order</h3>
                        <span>In progress</span>
                      </div>

                      <p>
                        Our chefs are preparing your meal with fresh
                        ingredients.
                      </p>
                    </div>
                  </div>

                  <div className="tracking-timeline__line" />

                  <div className="tracking-timeline__item">
                    <div className="tracking-timeline__marker">
                      3
                    </div>

                    <div className="tracking-timeline__content">
                      <div className="tracking-timeline__top">
                        <h3>Out for delivery</h3>
                      </div>

                      <p>
                        Your order will be handed over to our delivery
                        partner.
                      </p>
                    </div>
                  </div>

                  <div className="tracking-timeline__line" />

                  <div className="tracking-timeline__item">
                    <div className="tracking-timeline__marker">
                      4
                    </div>

                    <div className="tracking-timeline__content">
                      <div className="tracking-timeline__top">
                        <h3>Delivered</h3>
                      </div>

                      <p>
                        Enjoy your meal. We hope you love every bite.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="tracking-card">
                <div className="tracking-card__header">
                  <div>
                    <span className="tracking-card__eyebrow">
                      Your order
                    </span>

                    <h2 className="tracking-card__title">
                      Order items
                    </h2>
                  </div>

                  <span className="tracking-card__count">
                    {cartItems.length}{' '}
                    {cartItems.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                <div className="tracking-items">
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <article
                        className="tracking-item"
                        key={item.id}
                      >
                        <div className="tracking-item__image-wrapper">
                          <img
                            className="tracking-item__image"
                            src={item.image}
                            alt={item.name}
                          />
                        </div>

                        <div className="tracking-item__details">
                          <span className="tracking-item__category">
                            {item.category}
                          </span>

                          <h3>{item.name}</h3>

                          <span>
                            Quantity: {item.quantity}
                          </span>
                        </div>

                        <strong className="tracking-item__price">
                          ₦
                          {(
                            item.price * item.quantity
                          ).toLocaleString()}
                        </strong>
                      </article>
                    ))
                  ) : (
                    <div className="tracking-empty">
                      <p>
                        Your order is being prepared successfully.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            </div>

            <aside className="order-tracking-page__sidebar">
              <section className="tracking-card tracking-card--summary">
                <div className="tracking-card__header">
                  <div>
                    <span className="tracking-card__eyebrow">
                      Order summary
                    </span>

                    <h2 className="tracking-card__title">
                      Payment
                    </h2>
                  </div>
                </div>

                <div className="tracking-payment">
                  <div className="tracking-payment__icon" aria-hidden="true">
                    ✓
                  </div>

                  <div>
                    <strong>Payment confirmed</strong>
                    <span>Order #{orderNumber}</span>
                  </div>
                </div>

                <div className="tracking-summary">
                  <div className="tracking-summary__row">
                    <span>Subtotal</span>
                    <strong>
                      ₦{cartTotal.toLocaleString()}
                    </strong>
                  </div>

                  <div className="tracking-summary__row">
                    <span>Delivery</span>
                    <strong>
                      {deliveryFee === 0
                        ? 'Free'
                        : `₦${deliveryFee.toLocaleString()}`}
                    </strong>
                  </div>

                  <div className="tracking-summary__row">
                    <span>Service fee</span>
                    <strong>
                      ₦{serviceFee.toLocaleString()}
                    </strong>
                  </div>

                  <div className="tracking-summary__divider" />

                  <div className="tracking-summary__total">
                    <span>Total</span>
                    <strong>
                      ₦{grandTotal.toLocaleString()}
                    </strong>
                  </div>
                </div>
              </section>

              <section className="tracking-card tracking-card--delivery">
                <div className="tracking-card__header">
                  <div>
                    <span className="tracking-card__eyebrow">
                      Delivery
                    </span>

                    <h2 className="tracking-card__title">
                      Getting it to you
                    </h2>
                  </div>
                </div>

                <div className="tracking-delivery">
                  <div
                    className="tracking-delivery__icon"
                    aria-hidden="true"
                  >
                    📍
                  </div>

                  <div>
                    <strong>Delivery address</strong>
                    <p>
                      Your delivery address will be used for this
                      order.
                    </p>
                  </div>
                </div>

                <div className="tracking-delivery__estimate">
                  <span>Estimated arrival</span>
                  <strong>30–45 minutes</strong>
                </div>
              </section>

              <div className="tracking-actions">
                <Link
                  className="tracking-actions__primary"
                  to="/menu"
                >
                  Order More Food
                </Link>

                <Link
                  className="tracking-actions__secondary"
                  to="/"
                >
                  Back to Home
                </Link>
              </div>

              <div className="tracking-help">
                <strong>Need help with your order?</strong>

                <p>
                  Our team is here if you need assistance with your
                  order.
                </p>

                <Link to="/contact">Contact Chops</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OrderTracking;
