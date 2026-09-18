import { Link } from 'react-router-dom';

import { useOrderContext } from '../../context/orderContext.jsx';
import { menuItems } from '../../data/menuData.js';

import './orderConfirmation.css';

function OrderConfirmation() {
const { currentOrder } = useOrderContext();

if (!currentOrder) {
return ( <main className="order-confirmation-page"> <section className="order-confirmation-page__content"> <div className="container"> <div className="confirmation-card"> <span className="confirmation-card__eyebrow">
Order confirmation </span>


          <h1 className="confirmation-card__title">
            No active order found
          </h1>

          <p>
            We couldn't find a recent order. Start a new order
            from our menu.
          </p>

          <div className="confirmation-actions">
            <Link
              className="confirmation-actions__primary"
              to="/menu"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
);


}

const {
id: orderNumber,
items: orderItems,
subtotal,
deliveryFee,
serviceFee,
total,
estimatedTime,
paymentStatus,
} = currentOrder;

return ( <main className="order-confirmation-page"> <section className="order-confirmation-page__hero"> <div className="container"> <div className="order-confirmation-page__success"> <div
           className="order-confirmation-page__success-icon"
           aria-hidden="true"
         >
✓ </div>


        <span className="order-confirmation-page__eyebrow">
          Order confirmed
        </span>

        <h1 className="order-confirmation-page__title">
          Thank you for your order!
        </h1>

        <p className="order-confirmation-page__description">
          Your order has been received and our kitchen is getting
          everything ready for you.
        </p>

        <div className="order-confirmation-page__order-number">
          <span>Order number</span>
          <strong>{orderNumber}</strong>
        </div>
      </div>
    </div>
  </section>

  <section className="order-confirmation-page__content">
    <div className="container">
      <div className="order-confirmation-page__layout">
        <div className="order-confirmation-page__main">
          <section className="confirmation-card confirmation-card--status">
            <div className="confirmation-card__header">
              <div>
                <span className="confirmation-card__eyebrow">
                  Order status
                </span>

                <h2 className="confirmation-card__title">
                  We’re preparing your order
                </h2>
              </div>

              <span className="confirmation-status">
                Confirmed
              </span>
            </div>

            <div className="confirmation-progress">
              <div className="confirmation-progress__step confirmation-progress__step--active">
                <span
                  className="confirmation-progress__icon"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <div>
                  <strong>Order confirmed</strong>
                  <span>Your order has been received</span>
                </div>
              </div>

              <div
                className="confirmation-progress__line"
                aria-hidden="true"
              />

              <div className="confirmation-progress__step">
                <span className="confirmation-progress__icon">
                  2
                </span>

                <div>
                  <strong>Preparing</strong>
                  <span>
                    Our kitchen is preparing your food
                  </span>
                </div>
              </div>

              <div
                className="confirmation-progress__line"
                aria-hidden="true"
              />

              <div className="confirmation-progress__step">
                <span className="confirmation-progress__icon">
                  3
                </span>

                <div>
                  <strong>On the way</strong>
                  <span>
                    Your order is heading to you
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="confirmation-card">
            <div className="confirmation-card__header">
              <div>
                <span className="confirmation-card__eyebrow">
                  Your order
                </span>

                <h2 className="confirmation-card__title">
                  Order details
                </h2>
              </div>

              <span className="confirmation-card__item-count">
                {orderItems.length}{' '}
                {orderItems.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            <div className="confirmation-items">
              {orderItems.map((item) => {
                const currentMenuItem = menuItems.find(
                  (menuItem) => menuItem.id === item.id,
                );

                const image =
                  currentMenuItem?.image || item.image;

                const category =
                  currentMenuItem?.category || item.category;

                const name =
                  currentMenuItem?.name || item.name;

                return (
                  <article
                    className="confirmation-item"
                    key={item.id}
                    data-food-id={item.id}
                  >
                    <div className="confirmation-item__image-wrapper">
                      {image ? (
                        <img
                          className="confirmation-item__image"
                          src={image}
                          alt={name}
                          onError={(event) => {
                            event.currentTarget.style.display =
                              'none';
                          }}
                        />
                      ) : (
                        <span
                          className="confirmation-item__image-fallback"
                          aria-hidden="true"
                        >
                          Chops
                        </span>
                      )}
                    </div>

                    <div className="confirmation-item__details">
                      <span className="confirmation-item__category">
                        {category}
                      </span>

                      <h3 className="confirmation-item__name">
                        {name}
                      </h3>

                      <span className="confirmation-item__quantity">
                        Qty: {item.quantity}
                      </span>
                    </div>

                    <strong className="confirmation-item__price">
                      ₦
                      {(
                        item.price * item.quantity
                      ).toLocaleString()}
                    </strong>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="confirmation-card">
            <div className="confirmation-card__header">
              <div>
                <span className="confirmation-card__eyebrow">
                  Delivery
                </span>

                <h2 className="confirmation-card__title">
                  Estimated arrival
                </h2>
              </div>

              <span
                className="confirmation-delivery-icon"
                aria-hidden="true"
              >
                ⏱
              </span>
            </div>

            <div className="confirmation-arrival">
              <strong>{estimatedTime}</strong>

              <p>
                We’ll keep you updated as your order moves through
                the kitchen and delivery process.
              </p>
            </div>
          </section>
        </div>

        <aside className="order-confirmation-page__sidebar">
          <section className="confirmation-card confirmation-card--summary">
            <div className="confirmation-card__header">
              <div>
                <span className="confirmation-card__eyebrow">
                  Payment
                </span>

                <h2 className="confirmation-card__title">
                  Order summary
                </h2>
              </div>
            </div>

            <div className="confirmation-payment-status">
              <span
                className="confirmation-payment-status__icon"
                aria-hidden="true"
              >
                ✓
              </span>

              <div>
                <strong>
                  {paymentStatus === 'paid'
                    ? 'Payment successful'
                    : 'Payment pending'}
                </strong>

                <span>Order #{orderNumber}</span>
              </div>
            </div>

            <div className="confirmation-summary">
              <div className="confirmation-summary__row">
                <span>Subtotal</span>

                <strong>
                  ₦{subtotal.toLocaleString()}
                </strong>
              </div>

              <div className="confirmation-summary__row">
                <span>Delivery</span>

                <strong>
                  {deliveryFee === 0
                    ? 'Free'
                    : `₦${deliveryFee.toLocaleString()}`}
                </strong>
              </div>

              <div className="confirmation-summary__row">
                <span>Service fee</span>

                <strong>
                  ₦{serviceFee.toLocaleString()}
                </strong>
              </div>

              <div className="confirmation-summary__divider" />

              <div className="confirmation-summary__total">
                <span>Total paid</span>

                <strong>
                  ₦{total.toLocaleString()}
                </strong>
              </div>
            </div>

            <div className="confirmation-actions">
              <Link
                className="confirmation-actions__primary"
                to="/order-tracking"
              >
                Track Order
              </Link>

              <Link
                className="confirmation-actions__secondary"
                to="/menu"
              >
                Continue Shopping
              </Link>
            </div>
          </section>

          <div className="confirmation-help">
            <strong>Need help?</strong>

            <p>
              If you have any questions about your order, our team
              is happy to help.
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

export default OrderConfirmation;
