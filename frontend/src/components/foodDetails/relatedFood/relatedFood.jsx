import { Link } from 'react-router-dom';

import { menuItems } from '../../../data/menuData.js';

import './relatedFood.css';

function RelatedFood({ currentItem }) {
  if (!currentItem) {
    return null;
  }

  const relatedItems = menuItems
    .filter((item) => item.id !== currentItem.id)
    .filter((item) => item.category === currentItem.category)
    .slice(0, 4);

  if (relatedItems.length === 0) {
    return null;
  }

  return (
    <section
      className="related-food"
      aria-labelledby="related-food-title"
    >
      <div className="related-food__header">
        <div>
          <span className="related-food__eyebrow">
            You may also like
          </span>

          <h2
            id="related-food-title"
            className="related-food__title"
          >
            More from this category
          </h2>
        </div>

        <Link
          to="/menu"
          className="related-food__view-all"
        >
          View full menu
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="related-food__grid">
        {relatedItems.map((item) => (
          <article
            key={item.id}
            className="related-food__card"
            data-food-id={item.id}
          >
            <Link
              to={`/menu/${item.id}`}
              className="related-food__image-link"
              aria-label={`View ${item.name}`}
            >
              <div className="related-food__image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                {item.featured && (
                  <span className="related-food__featured">
                    Featured
                  </span>
                )}
              </div>
            </Link>

            <div className="related-food__content">
              <div className="related-food__meta">
                <span className="related-food__category">
                  {item.category}
                </span>

                <span
                  className="related-food__rating"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  <span aria-hidden="true">★</span>
                  {item.rating}
                </span>
              </div>

              <Link
                to={`/menu/${item.id}`}
                className="related-food__name-link"
              >
                <h3 className="related-food__name">
                  {item.name}
                </h3>
              </Link>

              <div className="related-food__footer">
                <strong className="related-food__price">
                  ₦{item.price.toLocaleString()}
                </strong>

                <Link
                  to={`/menu/${item.id}`}
                  className="related-food__button"
                  aria-label={`View ${item.name}`}
                >
                  View
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RelatedFood;