import { useMemo, useState } from 'react';

import MenuCard from '../../components/menu/menuCard/menuCard.jsx';
import SectionHeading from '../../components/common/sectionHeading/sectionHeading.jsx';
import { menuCategories, menuItems } from '../../data/menuData.js';

import './menu.css';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return menuItems;
    }

    return menuItems.filter(
      (item) => item.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <main className="menu-page">
      <section className="menu-page__hero">
        <div className="container">
          <SectionHeading
            eyebrow="Fresh from the kitchen"
            title="Our Menu"
            description="From comforting classics to bold new favourites, every dish at Chops is made to bring good food and good mood to your table."
          />
        </div>
      </section>

      <section className="menu-page__content">
        <div className="container">
          <nav
            className="menu-page__categories"
            aria-label="Menu categories"
          >
            {menuCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`menu-page__category ${
                  activeCategory === category.id
                    ? 'menu-page__category--active'
                    : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </nav>

          <div className="menu-page__grid">
            {filteredItems.map((item) => (
              <MenuCard
                item={item}
                key={item.id}
          
              />

      
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="menu-page__empty">
              <h2>No dishes found</h2>
              <p>
                We could not find any dishes in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Menu;