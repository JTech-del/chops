import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import ThemeToggle from '../../common/themeToggle/themeToggle.jsx';
import { useCartContext } from '../../../context/useCartContext.js';

import './navbar.css';

const navigationItems = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Menu',
    to: '/menu',
  },
  {
    label: 'Reservations',
    to: '/reservations',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Gallery',
    to: '/gallery',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
];

function Navbar() {
  const { cartCount } = useCartContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  return (
    <header className="navbar">
      <div className="navbar__container container">
        <Link
          className="navbar__logo"
          to="/"
          aria-label="Chops home"
          onClick={closeMenu}
        >
          <span className="navbar__logo-mark">C</span>
          <span className="navbar__logo-text">
            Chops
          </span>
        </Link>

        <nav
          className={`navbar__nav ${
            isMenuOpen
              ? 'navbar__nav--open'
              : ''
          }`}
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `navbar__link ${
                  isActive
                    ? 'navbar__link--active'
                    : ''
                }`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />

          <Link
            className="navbar__cart"
            to="/cart"
            aria-label={`View shopping cart with ${cartCount} items`}
            onClick={closeMenu}
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
            className={`navbar__menu-button ${
              isMenuOpen
                ? 'navbar__menu-button--open'
                : ''
            }`}
            type="button"
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            aria-controls="chops-main-navigation"
            onClick={toggleMenu}
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