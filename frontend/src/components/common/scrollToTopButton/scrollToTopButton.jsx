import { useEffect, useState } from 'react';

import './scrollToTopButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      className="scroll-to-top-button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}

export default ScrollToTopButton;