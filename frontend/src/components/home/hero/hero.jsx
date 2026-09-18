import { Link } from 'react-router-dom';

import heroImage from '../../../assets/images/hero/chops-hero.jpg';

import './hero.css';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container container">
        <div className="hero__content">
          <span className="hero__eyebrow">Good food. Good mood.</span>

          <h1 id="hero-title" className="hero__title">
            Food made with
            <span>passion.</span>
          </h1>

          <p className="hero__description">
            Fresh ingredients, bold flavors, and warm hospitality come
            together to create a dining experience worth coming back for.
          </p>

          <div className="hero__actions">
            <Link className="hero__button hero__button--primary" to="/menu">
              Order Now
            </Link>

            <Link
              className="hero__button hero__button--secondary"
              to="/reservations"
            >
              Reserve a Table
            </Link>
          </div>

          <div className="hero__details" aria-label="Restaurant highlights">
            <div className="hero__detail">
              <strong>Fresh</strong>
              <span>Daily ingredients</span>
            </div>

            <div className="hero__detail">
              <strong>Fast</strong>
              <span>Easy ordering</span>
            </div>

            <div className="hero__detail">
              <strong>Warm</strong>
              <span>Great hospitality</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-label="Chops restaurant">
          <img
            className="hero__image"
            src={heroImage}
            alt="Chops restaurant dining experience"
          />

          <div className="hero__badge">
            <span className="hero__badge-number">4.9</span>
            <span className="hero__badge-label">Guest rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;