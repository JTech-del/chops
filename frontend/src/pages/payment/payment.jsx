import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useCartContext } from '../../context/useCartContext.js';
import { useOrderContext } from '../../context/useOrderContext.js';

import './payment.css';

const DELIVERY_FEE = 1500;
const SERVICE_FEE_RATE = 0.03;
const FREE_DELIVERY_THRESHOLD = 25000;

function Payment() {
  const navigate = useNavigate();

  const {
    cartItems,
    cartTotal,
    clearCart,
  } = useCartContext();

  const { createOrder } = useOrderContext();

  const [paymentMethod, setPaymentMethod] = useState('card');

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardName: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const serviceFee = useMemo(
    () => Math.round(cartTotal * SERVICE_FEE_RATE),
    [cartTotal],
  );

  const deliveryFee =
    cartTotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;

  const grandTotal = cartTotal + deliveryFee + serviceFee;

  const handleCardChange = (event) => {
    const { name, value } = event.target;

    setCardDetails((currentDetails) => ({
      ...currentDetails,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();

    if (cartItems.length === 0 || isProcessing) {
      return;
    }

    setIsProcessing(true);

    const orderData = {
      items: cartItems.map((item) => ({
        ...item,
        quantity: item.quantity,
      })),
      subtotal: cartTotal,
      deliveryFee,
      serviceFee,
      total: grandTotal,
      paymentMethod,
      paymentStatus:
        paymentMethod === 'card' ? 'paid' : 'pending',
      orderType: 'delivery',
      estimatedTime:
        deliveryFee === 0 ? '30–45 minutes' : '35–50 minutes',
    };

    window.setTimeout(() => {
      createOrder(orderData);

      clearCart();

      navigate('/order-confirmation');
    }, 1800);
  };

  if (cartItems.length === 0 && !isProcessing) {
    return (
      <main className="payment-page">
        <section className="payment-page__content">
          <div className="container">
            <div className="payment-card">
              <span className="payment-card__eyebrow">
                Payment
              </span>

              <h1 className="payment-card__title">
                Your cart is empty
              </h1>

              <p>
                Add some delicious food to your cart before
                continuing to payment.
              </p>

              <Link
                className="payment-actions__primary"
                to="/menu"
              >
                Browse Menu
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="payment-page">
      <section className="payment-page__header">
        <div className="container">
          <div className="payment-page__header-content">
            <div>
              <span className="payment-page__eyebrow">
                Almost there
              </span>

              <h1 className="payment-page__title">
                Payment
              </h1>

              <p className="payment-page__description">
                Choose your payment method and complete your
                order securely.
              </p>
            </div>

            <Link
              className="payment-page__back"
              to="/checkout"
            >
              ← Back to Checkout
            </Link>
          </div>
        </div>
      </section>

      <section className="payment-page__content">
        <div className="container">
          <div className="payment-page__progress">
            <div className="payment-page__progress-step payment-page__progress-step--completed">
              <span>✓</span>
              <strong>Checkout</strong>
            </div>

            <div className="payment-page__progress-line payment-page__progress-line--active" />

            <div className="payment-page__progress-step payment-page__progress-step--active">
              <span>2</span>
              <strong>Payment</strong>
            </div>

            <div className="payment-page__progress-line" />

            <div className="payment-page__progress-step">
              <span>3</span>
              <strong>Confirmation</strong>
            </div>
          </div>

          <div className="payment-page__layout">
            <form
              className="payment-page__main"
              onSubmit={handlePaymentSubmit}
            >
              <section className="payment-card">
                <div className="payment-card__header">
                  <div>
                    <span className="payment-card__eyebrow">
                      Payment method
                    </span>

                    <h2 className="payment-card__title">
                      How would you like to pay?
                    </h2>
                  </div>
                </div>

                <div className="payment-methods">
                  <button
                    className={`payment-method ${
                      paymentMethod === 'card'
                        ? 'payment-method--active'
                        : ''
                    }`}
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                  >
                    <span className="payment-method__icon">
                      💳
                    </span>

                    <span>
                      <strong>Card Payment</strong>
                      <small>
                        Pay securely with your card
                      </small>
                    </span>
                  </button>

                  <button
                    className={`payment-method ${
                      paymentMethod === 'cash'
                        ? 'payment-method--active'
                        : ''
                    }`}
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                  >
                    <span className="payment-method__icon">
                      💵
                    </span>

                    <span>
                      <strong>Cash on Delivery</strong>
                      <small>Pay when your order arrives</small>
                    </span>
                  </button>
                </div>
              </section>

              {paymentMethod === 'card' && (
                <section className="payment-card">
                  <div className="payment-card__header">
                    <div>
                      <span className="payment-card__eyebrow">
                        Card details
                      </span>

                      <h2 className="payment-card__title">
                        Enter your card information
                      </h2>
                    </div>
                  </div>

                  <div className="payment-form">
                    <label className="payment-form__field payment-form__field--full">
                      <span>Card number</span>

                      <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleCardChange}
                        placeholder="1234 5678 9012 3456"
                        inputMode="numeric"
                        autoComplete="cc-number"
                        required
                      />
                    </label>

                    <label className="payment-form__field payment-form__field--full">
                      <span>Name on card</span>

                      <input
                        type="text"
                        name="cardName"
                        value={cardDetails.cardName}
                        onChange={handleCardChange}
                        placeholder="Cardholder name"
                        autoComplete="cc-name"
                        required
                      />
                    </label>

                    <label className="payment-form__field">
                      <span>Expiry date</span>

                      <input
                        type="text"
                        name="expiry"
                        value={cardDetails.expiry}
                        onChange={handleCardChange}
                        placeholder="MM/YY"
                        autoComplete="cc-exp"
                        required
                      />
                    </label>

                    <label className="payment-form__field">
                      <span>CVV</span>

                      <input
                        type="password"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardChange}
                        placeholder="123"
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        required
                      />
                    </label>
                  </div>
                </section>
              )}

              {paymentMethod === 'cash' && (
                <section className="payment-card">
                  <div className="payment-cash-notice">
                    <span
                      className="payment-cash-notice__icon"
                      aria-hidden="true"
                    >
                      💵
                    </span>

                    <div>
                      <strong>Cash on delivery</strong>

                      <p>
                        Have your payment ready when your order
                        arrives. Our delivery partner will collect
                        the total shown below.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              <section className="payment-card payment-card--trust">
                <div className="payment-trust">
                  <span aria-hidden="true">🔒</span>

                  <div>
                    <strong>Secure checkout</strong>

                    <p>
                      This is a simulated payment environment.
                      No real card information is processed.
                    </p>
                  </div>
                </div>
              </section>

              <button
                className="payment-submit"
                type="submit"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <span className="payment-submit__spinner" />
                    Processing Payment...
                  </>
                ) : paymentMethod === 'cash' ? (
                  'Place Order'
                ) : (
                  `Pay ₦${grandTotal.toLocaleString()}`
                )}
              </button>
            </form>

            <aside className="payment-page__summary">
              <div className="payment-page__summary-card">
                <div className="payment-summary__header">
                  <div>
                    <span className="payment-card__eyebrow">
                      Your order
                    </span>

                    <h2 className="payment-card__title">
                      Order Summary
                    </h2>
                  </div>
                </div>

                <div className="payment-summary__items">
                  {cartItems.map((item) => (
                    <div
                      className="payment-summary__item"
                      key={item.id}
                    >
                      <div>
                        <strong>{item.name}</strong>
                        <span>Qty: {item.quantity}</span>
                      </div>

                      <strong>
                        ₦
                        {(
                          item.price * item.quantity
                        ).toLocaleString()}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="payment-summary__totals">
                  <div>
                    <span>Subtotal</span>
                    <strong>
                      ₦{cartTotal.toLocaleString()}
                    </strong>
                  </div>

                  <div>
                    <span>Delivery</span>
                    <strong>
                      {deliveryFee === 0
                        ? 'Free'
                        : `₦${deliveryFee.toLocaleString()}`}
                    </strong>
                  </div>

                  <div>
                    <span>Service fee</span>
                    <strong>
                      ₦{serviceFee.toLocaleString()}
                    </strong>
                  </div>

                  <div className="payment-summary__divider" />

                  <div className="payment-summary__total">
                    <span>Total</span>
                    <strong>
                      ₦{grandTotal.toLocaleString()}
                    </strong>
                  </div>
                </div>

                <Link
                  className="payment-summary__back"
                  to="/checkout"
                >
                  ← Return to Checkout
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Payment;
