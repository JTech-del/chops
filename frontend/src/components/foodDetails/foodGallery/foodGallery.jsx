import { useEffect, useMemo, useState } from 'react';

import './foodGallery.css';

function FoodGallery({
  image,
  images = [],
  name,
  featured = false,
}) {
  const galleryImages = useMemo(() => {
    if (images.length > 0) {
      return images;
    }

    return image ? [image] : [];
  }, [image, images]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [galleryImages]);

  const hasMultipleImages = galleryImages.length > 1;

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? galleryImages.length - 1
        : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1
        ? 0
        : currentIndex + 1,
    );
  };

  const handleKeyDown = (event) => {
    if (!hasMultipleImages) {
      return;
    }

    if (event.key === 'ArrowLeft') {
      showPrevious();
    }

    if (event.key === 'ArrowRight') {
      showNext();
    }
  };

  if (galleryImages.length === 0) {
    return (
      <div className="food-gallery">
        <div className="food-gallery__placeholder">
          <span>Chops</span>
        </div>
      </div>
    );
  }

  const activeImage = galleryImages[activeIndex];

  return (
    <div
      className="food-gallery"
      onKeyDown={handleKeyDown}
      tabIndex={hasMultipleImages ? 0 : -1}
    >
      <div className="food-gallery__main">
        <img
          src={activeImage}
          alt={`${name} view ${activeIndex + 1}`}
        />

        {featured && (
          <span className="food-gallery__featured">
            Featured
          </span>
        )}

        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="food-gallery__control food-gallery__control--previous"
              onClick={showPrevious}
              aria-label="Previous food image"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <button
              type="button"
              className="food-gallery__control food-gallery__control--next"
              onClick={showNext}
              aria-label="Next food image"
            >
              <span aria-hidden="true">›</span>
            </button>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div
          className="food-gallery__thumbnails"
          aria-label={`${name} image gallery`}
        >
          {galleryImages.map((galleryImage, index) => (
            <button
              key={`${galleryImage}-${index}`}
              type="button"
              className={`food-gallery__thumbnail ${
                activeIndex === index
                  ? 'food-gallery__thumbnail--active'
                  : ''
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${name} image ${index + 1}`}
              aria-current={
                activeIndex === index
                  ? 'true'
                  : undefined
              }
            >
              <img
                src={galleryImage}
                alt=""
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      )}

      {hasMultipleImages && (
        <p className="food-gallery__counter">
          {activeIndex + 1} / {galleryImages.length}
        </p>
      )}
    </div>
  );
}

export default FoodGallery;