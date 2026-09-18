

import { Link, NavLink } from 'react-router-dom';

import ThemeToggle from '../../common/themeToggle/themeToggle.jsx';
import { useCartContext } from '../../../context/cartContext.jsx';


import './navbar.css';

function Navbar() {
  const { cartCount } = useCartContext();

  return (
    <header className="navbar">
      <div className="navbar__container container">
        <Link
          className="navbar__logo"
          to="/"
          aria-label="Chops home"
        >
          <span className="navbar__logo-mark">C</span>
          <span className="navbar__logo-text">Chops</span>
        </Link>

        <nav
          className="navbar__nav"
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navbar__link ${
                isActive ? 'navbar__link--active' : ''
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `navbar__link ${
                isActive ? 'navbar__link--active' : ''
              }`
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/reservations"
            className={({ isActive }) =>
              `navbar__link ${
                isActive ? 'navbar__link--active' : ''
              }`
            }
          >
            Reservations
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `navbar__link ${
                isActive ? 'navbar__link--active' : ''
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `navbar__link ${
                isActive ? 'navbar__link--active' : ''
              }`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `navbar__link ${
                isActive ? 'navbar__link--active' : ''
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />

          <Link
            className="navbar__cart"
            to="/cart"
            aria-label={`View shopping cart with ${cartCount} items`}
          >
            <span
              className="navbar__cart-icon"
              aria-hidden="true"
            >
              🛒
            </span>

            <span className="navbar__cart-label">
              Cart
            </span>

            <span className="navbar__cart-count">
              {cartCount}
            </span>
          </Link>

          <button
            className="navbar__menu-button"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded="false"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
