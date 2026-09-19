import { Link } from 'react-router-dom';

import { useCartContext } from '../../../context/useCartContext.js';
import { useToastContext } from '../../../context/useToastContext.js';

import './menuCard.css';

function MenuCard({ item }) {
  const { addToCart } = useCartContext();
  const { showToast } = useToastContext();

const handleAddToCart = () => {
  addToCart(item);

  showToast(
    `${item.name} added to your cart.`,
  );
};
  return (
    <article
      className="menu-card"
      data-food-id={item.id}
    >
      <Link
        to={`/menu/${item.id}`}
        className="menu-card__image-link"
        aria-label={`View ${item.name}`}
      >
        <div className="menu-card__image">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
            />
          ) : (
            <div className="menu-card__image-placeholder">
              <span>Chops</span>
            </div>
          )}

          {item.featured && (
            <span className="menu-card__featured">
              Featured
            </span>
          )}
        </div>
      </Link>

      <div className="menu-card__content">
        <div className="menu-card__meta">
          <span className="menu-card__category">
            {item.category}
          </span>

          <span
            className="menu-card__rating"
            aria-label={`${item.rating} out of 5 stars`}
          >
            <span aria-hidden="true">★</span>
            {item.rating}
            <span className="menu-card__reviews">
              ({item.reviews})
            </span>
          </span>
        </div>

        <Link
          to={`/menu/${item.id}`}
          className="menu-card__title-link"
        >
          <h2 className="menu-card__title">
            {item.name}
          </h2>
        </Link>

        <p className="menu-card__description">
          {item.description}
        </p>

        <div className="menu-card__footer">
          <strong className="menu-card__price">
            ₦{item.price.toLocaleString()}
          </strong>

          <button
            type="button"
            className="menu-card__add"
            onClick={handleAddToCart}
            aria-label={`Add ${item.name} to cart`}
          >
            <span aria-hidden="true">+</span>
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;
