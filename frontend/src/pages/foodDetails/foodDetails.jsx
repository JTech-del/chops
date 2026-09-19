import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useCartContext } from '../../context/useCartContext.js';
import { useToastContext } from '../../context/useToastContext.js';

import Customization from '../../components/foodDetails/customization/customization.jsx';
import FoodGallery from '../../components/foodDetails/foodGallery/foodGallery.jsx';
import FrequentlyOrdered from '../../components/foodDetails/frequentlyOrdered/frequentlyOrdered.jsx';
import MobileAddToCart from '../../components/foodDetails/mobileAddToCart/mobileAddToCart.jsx';
import Reviews from '../../components/foodDetails/reviews/reviews.jsx';
import RelatedFood from '../../components/foodDetails/relatedFood/relatedFood.jsx';

import { menuItems } from '../../data/menuData.js';

import './foodDetails.css';

const MAX_ADD_ON_QUANTITY = 4;

function FoodDetails() {
  const { foodId } = useParams();

  const {
    addToCart,
    cartItems,
    updateQuantity,
  } = useCartContext();

  const { showToast } = useToastContext();

  const item = menuItems.find(
    (menuItem) => menuItem.id === foodId,
  );

  const [quantity, setQuantity] = useState(1);

  const [selectedSize, setSelectedSize] = useState(
    item?.customization?.sizes?.[0]?.id ?? '',
  );

  const [selectedAddOns, setSelectedAddOns] = useState({});

  /*
   * Calculate customization pricing without
   * modifying the original menu item price.
   */
  const pricing = useMemo(() => {
    if (!item) {
      return {
        basePrice: 0,
        sizePrice: 0,
        addOnsTotal: 0,
        customizationTotal: 0,
        customizedUnitPrice: 0,
        orderTotal: 0,
      };
    }

    const sizes = item.customization?.sizes ?? [];
    const addOns = item.customization?.addOns ?? [];

    const selectedSizeOption = sizes.find(
      (size) => size.id === selectedSize,
    );

    const sizePrice = selectedSizeOption?.price ?? 0;

    const addOnsTotal = addOns.reduce(
      (total, addOn) => {
        const addOnQuantity =
          selectedAddOns[addOn.id] ?? 0;

        return (
          total +
          addOn.price * addOnQuantity
        );
      },
      0,
    );

    const customizationTotal =
      sizePrice + addOnsTotal;

    const customizedUnitPrice =
      item.price + customizationTotal;

    const orderTotal =
      customizedUnitPrice * quantity;

    return {
      basePrice: item.price,
      sizePrice,
      addOnsTotal,
      customizationTotal,
      customizedUnitPrice,
      orderTotal,
    };
  }, [
    item,
    quantity,
    selectedSize,
    selectedAddOns,
  ]);

  if (!item) {
    return (
      <main className="food-details-page">
        <div className="container">
          <section className="food-details-page__not-found">
            <span className="food-details-page__not-found-label">
              Menu item unavailable
            </span>

            <h1>We couldn't find that dish.</h1>

            <p>
              The dish you're looking for may have been
              removed or is no longer available.
            </p>

            <Link
              to="/menu"
              className="food-details-page__back-link"
            >
              Back to Menu
            </Link>
          </section>
        </div>
      </main>
    );
  }

  const handleSizeChange = (sizeId) => {
    setSelectedSize(sizeId);
  };

  const handleAddOnToggle = (addOnId) => {
    setSelectedAddOns((currentAddOns) => {
      const currentQuantity =
        currentAddOns[addOnId] ?? 0;

      if (currentQuantity > 0) {
        const nextAddOns = { ...currentAddOns };

        delete nextAddOns[addOnId];

        return nextAddOns;
      }

      return {
        ...currentAddOns,
        [addOnId]: 1,
      };
    });
  };

  const handleAddOnQuantityChange = (
    addOnId,
    nextQuantity,
  ) => {
    const clampedQuantity = Math.min(
      MAX_ADD_ON_QUANTITY,
      Math.max(0, nextQuantity),
    );

    setSelectedAddOns((currentAddOns) => {
      if (clampedQuantity === 0) {
        const nextAddOns = { ...currentAddOns };

        delete nextAddOns[addOnId];

        return nextAddOns;
      }

      return {
        ...currentAddOns,
        [addOnId]: clampedQuantity,
      };
    });
  };

  const handleDecrease = () => {
    setQuantity((currentQuantity) =>
      Math.max(1, currentQuantity - 1),
    );
  };

  const handleIncrease = () => {
    setQuantity(
      (currentQuantity) => currentQuantity + 1,
    );
  };





const handleAddToCart = () => {
  const sizes =
    item.customization?.sizes ?? [];

  const addOns =
    item.customization?.addOns ?? [];

  const selectedSizeOption =
    sizes.find(
      (size) => size.id === selectedSize,
    );

  const selectedAddOnItems =
    addOns
      .filter(
        (addOn) =>
          (selectedAddOns[addOn.id] ?? 0) > 0,
      )
      .map((addOn) => ({
        id: addOn.id,
        name: addOn.name,
        price: addOn.price,
        quantity:
          selectedAddOns[addOn.id],
      }));

  const customizedItem = {
    ...item,

    customization: {
      size: selectedSizeOption
        ? {
            id: selectedSizeOption.id,
            name: selectedSizeOption.name,
            price: selectedSizeOption.price,
          }
        : null,

      addOns: selectedAddOnItems,
    },

    unitPrice:
      pricing.customizedUnitPrice,
  };

  const cartItemKey =
    [
      item.id,
      `size:${
        selectedSizeOption?.id ?? ''
      }`,
      `addons:${selectedAddOnItems
        .slice()
        .sort((a, b) =>
          a.id.localeCompare(b.id),
        )
        .map(
          (addOn) =>
            `${addOn.id}:${addOn.quantity}`,
        )
        .join('|')}`,
    ].join('__');

  const existingItem =
    cartItems.find(
      (cartItem) =>
        cartItem.cartItemKey ===
        cartItemKey,
    );

  if (existingItem) {
    updateQuantity(
      cartItemKey,
      existingItem.quantity + quantity,
    );
  } else {
    addToCart({
      ...customizedItem,
      cartItemKey,
    });

    if (quantity > 1) {
      updateQuantity(
        cartItemKey,
        quantity,
      );
    }
  }

  showToast(
    `${quantity} × ${item.name} added to your cart.`,
  );
};


  return (
    <main className="food-details-page">
      <div className="container">
        <nav
          className="food-details-page__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">Home</Link>

          <span aria-hidden="true">/</span>

          <Link to="/menu">Menu</Link>

          <span aria-hidden="true">/</span>

          <span>{item.name}</span>
        </nav>

        <section className="food-details">
          <FoodGallery
            image={item.image}
            images={item.images}
            name={item.name}
            featured={item.featured}
          />

          <aside className="food-details__order-panel">
            <div className="food-details__content">
              <span className="food-details__category">
                {item.category}
              </span>

              <h1 className="food-details__title">
                {item.name}
              </h1>

              <div className="food-details__rating">
                <span
                  className="food-details__stars"
                  aria-hidden="true"
                >
                  ★
                </span>

                <strong>{item.rating}</strong>

                <span>
                  ({item.reviews} reviews)
                </span>
              </div>

              <p className="food-details__description">
                {item.description}
              </p>

              <Customization
                customization={item.customization}
                selectedSize={selectedSize}
                selectedAddOns={selectedAddOns}
                onSizeChange={handleSizeChange}
                onAddOnToggle={handleAddOnToggle}
                onAddOnQuantityChange={
                  handleAddOnQuantityChange
                }
              />

              <div className="food-details__purchase">
                <div className="food-details__price-group">
                  <span className="food-details__price-label">
                    Total
                  </span>

                  <strong className="food-details__price">
                    ₦
                    {pricing.orderTotal.toLocaleString()}
                  </strong>

                  {pricing.customizationTotal > 0 && (
                    <span className="food-details__price-breakdown">
                      ₦
                      {pricing.customizedUnitPrice.toLocaleString()}
                      {' '}per item
                    </span>
                  )}
                </div>

                <div
                  className="food-details__quantity"
                  aria-label="Quantity"
                >
                  <button
                    type="button"
                    className="food-details__quantity-button"
                    onClick={handleDecrease}
                    disabled={quantity === 1}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span
                    className="food-details__quantity-value"
                    aria-live="polite"
                  >
                    {quantity}
                  </span>

                  <button
                    type="button"
                    className="food-details__quantity-button"
                    onClick={handleIncrease}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="food-details__add"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>

              <div className="food-details__order-note">
                <span aria-hidden="true">✓</span>
                Freshly prepared after you order
              </div>

              <Link
                to="/menu"
                className="food-details__menu-link"
              >
                ← Continue browsing
              </Link>
            </div>
          </aside>
        </section>

        <RelatedFood currentItem={item} />

        <FrequentlyOrdered currentItem={item} />

        <Reviews foodId={item.id} />

        <MobileAddToCart
  price={pricing.orderTotal}
  quantity={quantity}
  onAddToCart={handleAddToCart}
/>
      </div>
    </main>
  );
}

export default FoodDetails;
