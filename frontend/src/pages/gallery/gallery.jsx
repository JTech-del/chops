import { Link } from 'react-router-dom';

import SectionHeading from '../../components/common/sectionHeading/sectionHeading.jsx';

import galleryItems from '../../data/galleryData.js';

import './gallery.css';

function Gallery() {
  const featuredItems = galleryItems.filter(
    (item) => item.featured,
  );

  const foodItems = galleryItems.filter(
    (item) => item.category === 'Food',
  );

  return (
    <main className="gallery-page">
      <section className="gallery-page__hero">
        <div className="container gallery-page__hero-inner">
          <div className="gallery-page__hero-content">
            <span className="gallery-page__eyebrow">
              The Chops gallery
            </span>

            <h1>
              A taste of
              <br />
              the Chops experience.
            </h1>

            <p>
              From beautifully prepared dishes to the
              atmosphere around the table, take a look
              at what makes Chops worth experiencing.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery-page__featured">
        <div className="container">
          <SectionHeading
            eyebrow="Featured"
            title="Inside Chops."
            description="A closer look at the food, atmosphere, and moments that define the experience."
          />

          <div className="gallery-page__featured-grid">
            {featuredItems.map((item) => (
              <article
                key={item.id}
                className="gallery-page__featured-item"
              >
                <div className="gallery-page__image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="gallery-page__caption">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-page__food">
        <div className="container">
          <SectionHeading
            eyebrow="From the kitchen"
            title="Food worth photographing."
            description="A selection of Chops favourites, prepared fresh and made to be enjoyed."
          />

          <div className="gallery-page__food-grid">
            {foodItems.map((item) => (
              <article
                key={item.id}
                className="gallery-page__food-item"
              >
                <div className="gallery-page__image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="gallery-page__caption">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-page__cta">
        <div className="container">
          <div className="gallery-page__cta-content">
            <span className="gallery-page__eyebrow">
              Come experience it
            </span>

            <h2>
              Your next favourite meal
              <br />
              might be waiting.
            </h2>

            <p>
              Explore the full menu or reserve a table
              for your next visit.
            </p>

            <div className="gallery-page__cta-actions">
              <Link
                to="/menu"
                className="gallery-page__cta-button gallery-page__cta-button--primary"
              >
                Explore Menu
              </Link>

              <Link
                to="/reservations"
                className="gallery-page__cta-button gallery-page__cta-button--secondary"
              >
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;