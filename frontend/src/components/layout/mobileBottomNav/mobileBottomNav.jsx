import { NavLink } from 'react-router-dom';

import { useCartContext } from '../../../context/cartContext.jsx';

import './mobileBottomNav.css';

function MobileBottomNav() {
  const { cartCount } = useCartContext();

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mobile-bottom-nav__item ${
            isActive ? 'mobile-bottom-nav__item--active' : ''
          }`
        }
      >
        <span
          className="mobile-bottom-nav__icon"
          aria-hidden="true"
        >
          ⌂
        </span>

        <span>Home</span>
      </NavLink>

      <NavLink
        to="/menu"
        className={({ isActive }) =>
          `mobile-bottom-nav__item ${
            isActive ? 'mobile-bottom-nav__item--active' : ''
          }`
        }
      >
        <span
          className="mobile-bottom-nav__icon"
          aria-hidden="true"
        >
          ≡
        </span>

        <span>Menu</span>
      </NavLink>

      <NavLink
        to="/reservations"
        className={({ isActive }) =>
          `mobile-bottom-nav__item ${
            isActive ? 'mobile-bottom-nav__item--active' : ''
          }`
        }
      >
        <span
          className="mobile-bottom-nav__icon"
          aria-hidden="true"
        >
          ♡
        </span>

        <span>Book</span>
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `mobile-bottom-nav__item ${
            isActive ? 'mobile-bottom-nav__item--active' : ''
          }`
        }
        aria-label={`Cart with ${cartCount} items`}
      >
        <span className="mobile-bottom-nav__icon-wrapper">
          <span
            className="mobile-bottom-nav__icon"
            aria-hidden="true"
          >
            🛒
          </span>

          {cartCount > 0 && (
            <span className="mobile-bottom-nav__cart-count">
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </span>

        <span>Cart</span>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `mobile-bottom-nav__item ${
            isActive ? 'mobile-bottom-nav__item--active' : ''
          }`
        }
      >
        <span
          className="mobile-bottom-nav__icon"
          aria-hidden="true"
        >
          •••
        </span>

        <span>More</span>
      </NavLink>
    </nav>
  );
}

export default MobileBottomNav;