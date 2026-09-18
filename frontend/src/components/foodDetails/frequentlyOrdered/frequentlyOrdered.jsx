import { useMemo, useState } from 'react';

import { useCartContext } from '../../../context/cartContext.jsx';
import { useToastContext } from '../../../context/toastContext.jsx';
import { menuItems } from '../../../data/menuData.js';

import './frequentlyOrdered.css';

function FrequentlyOrdered({ currentItem }) {
  const { addToCart } = useCartContext();
  const { showToast } = useToastContext();

  const recommendedItems = useMemo(() => {
    if (!currentItem?.frequentlyOrderedWith) {
      return [];
    }

    return currentItem.frequentlyOrderedWith
      .map((itemId) =>
        menuItems.find((menuItem) => menuItem.id === itemId),
      )
      .filter(Boolean);
  }, [currentItem]);

  const [selectedItems, setSelectedItems] = useState(
    () =>
      new Set(
        currentItem?.frequentlyOrderedWith ?? [],
      ),
  );

  const toggleItem = (itemId) => {
    setSelectedItems((currentSelected) => {
      const nextSelected = new Set(currentSelected);

      if (nextSelected.has(itemId)) {
        nextSelected.delete(itemId);
      } else {
        nextSelected.add(itemId);
      }

      return nextSelected;
    });
  };

  const selectedRecommendations = recommendedItems.filter(
    (item) => selectedItems.has(item.id),
  );

  const selectedTotal = selectedRecommendations.reduce(
    (total, item) => total + item.price,
    0,
  );

  const handleAddSelected = () => {
    if (selectedRecommendations.length === 0) {
      showToast(
        'Select at least one item to add to your cart.',
        'error',
      );
      return;
    }

    selectedRecommendations.forEach((item) => {
      addToCart(item);
    });

    const itemCount = selectedRecommendations.length;

    showToast(
      `${itemCount} item${itemCount === 1 ? '' : 's'} added to your cart.`,
    );
  };

  if (!currentItem || recommendedItems.length === 0) {
    return null;
  }

  return (
    <section
      className="frequently-ordered"
      aria-labelledby="frequently-ordered-title"
    >
      <div className="frequently-ordered__header">
        <div>
          <span className="frequently-ordered__eyebrow">
            Complete your meal
          </span>

          <h2
            id="frequently-ordered-title"
            className="frequently-ordered__title"
          >
            Frequently ordered together
          </h2>

          <p className="frequently-ordered__description">
            Popular additions that pair well with your
            selection.
          </p>
        </div>
      </div>

      <div className="frequently-ordered__content">
        <div className="frequently-ordered__items">
          {recommendedItems.map((item) => {
            const isSelected = selectedItems.has(item.id);

            return (
              <article
                key={item.id}
                className={`frequently-ordered__item ${
                  isSelected
                    ? 'frequently-ordered__item--selected'
                    : ''
                }`}
                data-food-id={item.id}
              >
                <button
                  type="button"
                  className="frequently-ordered__select"
                  onClick={() => toggleItem(item.id)}
                  aria-pressed={isSelected}
                  aria-label={`${
                    isSelected ? 'Remove' : 'Add'
                  } ${item.name}`}
                >
                  <span
                    className="frequently-ordered__checkbox"
                    aria-hidden="true"
                  >
                    {isSelected ? '✓' : ''}
                  </span>
                </button>

                <div className="frequently-ordered__image">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                  />
                </div>

                <div className="frequently-ordered__details">
                  <div className="frequently-ordered__meta">
                    <span className="frequently-ordered__category">
                      {item.category}
                    </span>

                    <span
                      className="frequently-ordered__rating"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      <span aria-hidden="true">★</span>
                      {item.rating}
                    </span>
                  </div>

                  <h3 className="frequently-ordered__name">
                    {item.name}
                  </h3>

                  <strong className="frequently-ordered__price">
                    ₦{item.price.toLocaleString()}
                  </strong>
                </div>
              </article>
            );
          })}
        </div>

        <div className="frequently-ordered__summary">
          <div className="frequently-ordered__summary-info">
            <span className="frequently-ordered__summary-label">
              Selected items
            </span>

            <strong className="frequently-ordered__summary-total">
              ₦{selectedTotal.toLocaleString()}
            </strong>
          </div>

          <button
            type="button"
            className="frequently-ordered__add"
            onClick={handleAddSelected}
            disabled={selectedRecommendations.length === 0}
          >
            <span>Add selected to cart</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FrequentlyOrdered;