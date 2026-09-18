import './reviews.css';

function Reviews({ foodId }) {
  return (
    <section
      className="food-reviews"
      aria-labelledby="food-reviews-title"
      data-food-id={foodId}
    >
      <div className="food-reviews__header">
        <div>
          <span className="food-reviews__eyebrow">
            Customer feedback
          </span>

          <h2
            id="food-reviews-title"
            className="food-reviews__title"
          >
            Reviews
          </h2>
        </div>
      </div>

      <div className="food-reviews__empty">
        <div
          className="food-reviews__empty-icon"
          aria-hidden="true"
        >
          ★
        </div>

        <div className="food-reviews__empty-content">
          <h3>No reviews yet</h3>

          <p>
            Be the first to share your experience
            with this dish.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;