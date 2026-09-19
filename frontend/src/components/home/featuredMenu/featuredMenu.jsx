import { Link } from 'react-router-dom';

import featuredItems from '../../../data/featuredItems.js';
import { useCartContext } from '../../../context/useCartContext.js';

import './featuredMenu.css';

function FeaturedMenu() {
  const { addToCart } = useCartContext();

  return (
    <section className="featured-menu" aria-labelledby="featured-menu-title">
      <div className="featured-menu__container container">
        <div className="featured-menu__header">
          <div>
            <span className="featured-menu__eyebrow">
              From our kitchen
            </span>

            <h2 id="featured-menu-title" className="featured-menu__title">
              Featured Menu
            </h2>

            <p className="featured-menu__description">
              Discover some of our most-loved dishes, prepared fresh with
              bold flavors and quality ingredients.
            </p>
          </div>

          <Link className="featured-menu__view-all" to="/menu">
            View Full Menu
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="featured-menu__grid">
          {featuredItems.map((item) => (
            <article className="featured-menu__card" key={item.id}>
              <Link
                className="featured-menu__image-link"
                to={`/menu/${item.id}`}
                aria-label={`View ${item.name}`}
              >
                <div className="featured-menu__image-wrapper">
                  <img
                    className="featured-menu__image"
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />

                  <span className="featured-menu__category">
                    {item.category}
                  </span>
                </div>
              </Link>

              <div className="featured-menu__content">
                <div className="featured-menu__title-row">
                  <h3 className="featured-menu__item-name">
                    {item.name}
                  </h3>

                  <span className="featured-menu__rating">
                    <span aria-hidden="true">★</span>
                    {item.rating}
                  </span>
                </div>

                <p className="featured-menu__item-description">
                  {item.description}
                </p>

                <div className="featured-menu__footer">
                  <strong className="featured-menu__price">
                    ₦{item.price.toLocaleString()}
                  </strong>

                  <button
                    type="button"
                    className="featured-menu__add-button"
                    onClick={() => addToCart(item)}
                    aria-label={`Add ${item.name} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedMenu;
