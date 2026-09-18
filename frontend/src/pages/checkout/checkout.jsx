import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useOrderContext } from '../../context/orderContext.jsx';
import { useCartContext } from '../../context/cartContext.jsx';

import './checkout.css';

const DELIVERY_FEE = 1500;
const SERVICE_FEE_RATE = 0.03;
const FREE_DELIVERY_THRESHOLD = 25000;

function Checkout() {
  const navigate = useNavigate();

  const { cartItems, cartCount, cartTotal } = useCartContext();
const { saveCheckoutData } = useOrderContext();

  const [orderType, setOrderType] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const [customerDetails, setCustomerDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [deliveryDetails, setDeliveryDetails] = useState({
    address: '',
    city: '',
    state: 'Lagos',
    instructions: '',
  });

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

  const grandTotal = cartTotal + serviceFee + deliveryFee;

  const handleCustomerChange = (event) => {
    const { name, value } = event.target;

    setCustomerDetails((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleDeliveryChange = (event) => {
    const { name, value } = event.target;

    setDeliveryDetails((current) => ({
      ...current,
      [name]: value,
    }));
  };
/*
const handleSubmit = (event) => {
  event.preventDefault();

  saveCheckoutData({
    orderType,
    customerDetails,
    deliveryDetails,
    paymentMethod,
  });

  navigate('/payment');
};
*/

const handleSubmit = (event) => {
  event.preventDefault();

  console.log('CHECKOUT SUBMITTED');

  saveCheckoutData({
    orderType,
    customerDetails,
    deliveryDetails,
    paymentMethod,
  });

  console.log('CHECKOUT DATA SAVED');

  navigate('/payment');
};


  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <div className="checkout-page__empty container">
          <span className="checkout-page__eyebrow">
            Checkout
          </span>

          <h1 className="checkout-page__title">
            Your Cart Is Empty
          </h1>

          <p className="checkout-page__empty-description">
            Add some delicious food to your cart before continuing
            to checkout.
          </p>

          <Link
            className="checkout-page__primary-button"
            to="/menu"
          >
            Browse Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-page__container container">
        <header className="checkout-page__header">
          <div>
            <span className="checkout-page__eyebrow">
              Complete your order
            </span>

            <h1 className="checkout-page__title">
              Checkout
            </h1>

            <p className="checkout-page__description">
              Enter your details and choose how you'd like to
              receive your order.
            </p>
          </div>

          <Link
            className="checkout-page__back"
            to="/cart"
          >
            ← Back to Cart
          </Link>
        </header>

        <form
          className="checkout-page__layout"
          onSubmit={handleSubmit}
        >
          <div className="checkout-page__main">
            {/* Contact information */}
            <section className="checkout-page__section">
              <div className="checkout-page__section-heading">
                <div>
                  <span className="checkout-page__section-eyebrow">
                    Step 01
                  </span>

                  <h2 className="checkout-page__section-title">
                    Contact Information
                  </h2>

                  <p>
                    We'll use these details to keep you updated
                    about your order.
                  </p>
                </div>
              </div>

              <div className="checkout-page__fields checkout-page__fields--two">
                <div className="checkout-page__field">
                  <label htmlFor="firstName">
                    First name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={customerDetails.firstName}
                    onChange={handleCustomerChange}
                    placeholder="Godfrey"
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div className="checkout-page__field">
                  <label htmlFor="lastName">
                    Last name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={customerDetails.lastName}
                    onChange={handleCustomerChange}
                    placeholder="Emmanuel"
                    autoComplete="family-name"
                    required
                  />
                </div>

                <div className="checkout-page__field">
                  <label htmlFor="email">
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={customerDetails.email}
                    onChange={handleCustomerChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="checkout-page__field">
                  <label htmlFor="phone">
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={customerDetails.phone}
                    onChange={handleCustomerChange}
                    placeholder="+234 800 000 0000"
                    autoComplete="tel"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Order type */}
            <section className="checkout-page__section">
              <div className="checkout-page__section-heading">
                <div>
                  <span className="checkout-page__section-eyebrow">
                    Step 02
                  </span>

                  <h2 className="checkout-page__section-title">
                    Order Type
                  </h2>

                  <p>
                    Choose how you'd like to receive your food.
                  </p>
                </div>
              </div>

              <div className="checkout-page__order-types">
                <button
                  type="button"
                  className={`checkout-page__order-type ${
                    orderType === 'delivery'
                      ? 'checkout-page__order-type--active'
                      : ''
                  }`}
                  onClick={() => setOrderType('delivery')}
                >
                  <span className="checkout-page__order-icon">
                    🚴
                  </span>

                  <span>
                    <strong>Delivery</strong>
                    <small>
                      Delivered to your preferred address
                    </small>
                  </span>

                  <span className="checkout-page__order-check">
                    {orderType === 'delivery' ? '✓' : ''}
                  </span>
                </button>

                <button
                  type="button"
                  className={`checkout-page__order-type ${
                    orderType === 'pickup'
                      ? 'checkout-page__order-type--active'
                      : ''
                  }`}
                  onClick={() => setOrderType('pickup')}
                >
                  <span className="checkout-page__order-icon">
                    🛍️
                  </span>

                  <span>
                    <strong>Pickup</strong>
                    <small>
                      Collect your order from Chops
                    </small>
                  </span>

                  <span className="checkout-page__order-check">
                    {orderType === 'pickup' ? '✓' : ''}
                  </span>
                </button>
              </div>
            </section>

            {/* Delivery details */}
            {orderType === 'delivery' && (
              <section className="checkout-page__section">
                <div className="checkout-page__section-heading">
                  <div>
                    <span className="checkout-page__section-eyebrow">
                      Step 03
                    </span>

                    <h2 className="checkout-page__section-title">
                      Delivery Details
                    </h2>

                    <p>
                      Tell us where you'd like your order
                      delivered.
                    </p>
                  </div>
                </div>

                <div className="checkout-page__fields">
                  <div className="checkout-page__field">
                    <label htmlFor="address">
                      Delivery address
                    </label>

                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={deliveryDetails.address}
                      onChange={handleDeliveryChange}
                      placeholder="Street address"
                      autoComplete="street-address"
                      required
                    />
                  </div>

                  <div className="checkout-page__fields checkout-page__fields--two">
                    <div className="checkout-page__field">
                      <label htmlFor="city">
                        City
                      </label>

                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={deliveryDetails.city}
                        onChange={handleDeliveryChange}
                        placeholder="Ikeja"
                        autoComplete="address-level2"
                        required
                      />
                    </div>

                    <div className="checkout-page__field">
                      <label htmlFor="state">
                        State
                      </label>

                      <select
                        id="state"
                        name="state"
                        value={deliveryDetails.state}
                        onChange={handleDeliveryChange}
                      >
                        <option value="Lagos">Lagos</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Abuja">Abuja</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Oyo">Oyo</option>
                      </select>
                    </div>
                  </div>

                  <div className="checkout-page__field">
                    <label htmlFor="instructions">
                      Delivery instructions
                      <span>Optional</span>
                    </label>

                    <textarea
                      id="instructions"
                      name="instructions"
                      value={deliveryDetails.instructions}
                      onChange={handleDeliveryChange}
                      placeholder="Apartment number, landmark, gate instructions..."
                      rows="3"
                    />
                  </div>
                </div>
              </section>
            )}

            {/* Payment */}
            <section className="checkout-page__section">
              <div className="checkout-page__section-heading">
                <div>
                  <span className="checkout-page__section-eyebrow">
                    Step 04
                  </span>

                  <h2 className="checkout-page__section-title">
                    Payment Method
                  </h2>

                  <p>
                    Select how you'd like to pay for your order.
                  </p>
                </div>
              </div>

              <div className="checkout-page__payment-options">
                <button
                  type="button"
                  className={`checkout-page__payment-option ${
                    paymentMethod === 'card'
                      ? 'checkout-page__payment-option--active'
                      : ''
                  }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <span className="checkout-page__payment-icon">
                    💳
                  </span>

                  <span>
                    <strong>Card Payment</strong>
                    <small>
                      Pay securely with your debit or credit
                      card
                    </small>
                  </span>

                  <span className="checkout-page__payment-check">
                    {paymentMethod === 'card' ? '✓' : ''}
                  </span>
                </button>

                <button
                  type="button"
                  className={`checkout-page__payment-option ${
                    paymentMethod === 'cash'
                      ? 'checkout-page__payment-option--active'
                      : ''
                  }`}
                  onClick={() => setPaymentMethod('cash')}
                >
                  <span className="checkout-page__payment-icon">
                    💵
                  </span>

                  <span>
                    <strong>Cash on Delivery</strong>
                    <small>
                      Pay when your order arrives
                    </small>
                  </span>

                  <span className="checkout-page__payment-check">
                    {paymentMethod === 'cash' ? '✓' : ''}
                  </span>
                </button>
              </div>
            </section>
          </div>

          {/* Sticky summary */}
          <aside className="checkout-page__summary">
            <div className="checkout-page__summary-card">
              <div className="checkout-page__summary-heading">
                <div>
                  <span className="checkout-page__section-eyebrow">
                    Checkout
                  </span>

                  <h2 className="checkout-page__summary-title">
                    Order Summary
                  </h2>
                </div>

                <span className="checkout-page__summary-count">
                  {cartCount} {cartCount === 1 ? 'item' : 'items'}
                </span>
              </div>

              <div className="checkout-page__items">
                {cartItems.map((item) => (
                  <div
                    className="checkout-page__item"
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div>
                      <strong>{item.name}</strong>

                      <span>
                        {item.quantity} × ₦
                        {item.price.toLocaleString()}
                      </span>
                    </div>

                    <strong>
                      ₦
                      {(item.price * item.quantity).toLocaleString()}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="checkout-page__summary-rows">
                <div className="checkout-page__summary-row">
                  <span>Subtotal</span>

                  <strong>
                    ₦{cartTotal.toLocaleString()}
                  </strong>
                </div>

                <div className="checkout-page__summary-row">
                  <span>Delivery</span>

                  <strong
                    className={
                      deliveryFee === 0
                        ? 'checkout-page__summary-free'
                        : ''
                    }
                  >
                    {deliveryFee === 0
                      ? 'Free'
                      : `₦${deliveryFee.toLocaleString()}`}
                  </strong>
                </div>

                <div className="checkout-page__summary-row">
                  <span>Service fee</span>

                  <strong>
                    ₦{serviceFee.toLocaleString()}
                  </strong>
                </div>
              </div>

              {orderType === 'delivery' &&
                cartTotal >= FREE_DELIVERY_THRESHOLD && (
                  <div className="checkout-page__free-delivery">
                    <span aria-hidden="true">✓</span>

                    <p>
                      You've unlocked{' '}
                      <strong>free delivery!</strong>
                    </p>
                  </div>
                )}

              <div className="checkout-page__divider" />

              <div className="checkout-page__total">
                <div>
                  <span>Total</span>

                  <small>Including applicable fees</small>
                </div>

                <strong>
                  ₦{grandTotal.toLocaleString()}
                </strong>
              </div>

              <button
                className="checkout-page__submit"
                type="submit"
              >
                Proceed to Payment
                <span aria-hidden="true">→</span>
              </button>

              <div className="checkout-page__secure">
                <span aria-hidden="true">🔒</span>

                <div>
                  <strong>Secure checkout</strong>

                  <span>
                    Your payment information is protected.
                  </span>
                </div>
              </div>

              <Link
                className="checkout-page__continue"
                to="/cart"
              >
                ← Return to Cart
              </Link>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
}

export default Checkout;