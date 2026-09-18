
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container container">
          <div className="footer__brand">
            <Link className="footer__logo" to="/" aria-label="Chops home">
              <span className="footer__logo-mark">C</span>
              <span className="footer__logo-text">Chops</span>
            </Link>

            <p className="footer__description">
              Good food, warm hospitality, and memorable moments. Chops brings
              a modern restaurant experience to every table.
            </p>

            <div className="footer__socials" aria-label="Social media links">
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="Facebook">
                FB
              </a>
              <a href="#" aria-label="TikTok">
                TT
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h2 className="footer__title">Explore</h2>

            <nav aria-label="Footer navigation">
              <Link to="/">Home</Link>
              <Link to="/menu">Our Menu</Link>
              <Link to="/reservations">Reservations</Link>
              <Link to="/gallery">Gallery</Link>
            </nav>
          </div>

          <div className="footer__column">
            <h2 className="footer__title">About</h2>

            <nav aria-label="About navigation">
              <Link to="/about">Our Story</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/menu">Order Online</Link>
            </nav>
          </div>

          <div className="footer__column footer__contact">
            <h2 className="footer__title">Visit Us</h2>

            <address>
              <p>12 Restaurant Avenue</p>
              <p>Lagos, Nigeria</p>
            </address>

            <a href="tel:+2348000000000">+234 800 000 0000</a>
            <a href="mailto:hello@chopsrestaurant.com">
              hello@chopsrestaurant.com
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container footer__bottom-container container">
          <p>© {currentYear} Chops. All rights reserved.</p>

          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
