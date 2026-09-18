import './customization.css';

const MAX_ADD_ON_QUANTITY = 4;

function Customization({
  customization,
  selectedSize,
  selectedAddOns,
  onSizeChange,
  onAddOnToggle,
  onAddOnQuantityChange,
}) {
  if (!customization) {
    return null;
  }

  const sizes = customization.sizes ?? [];
  const addOns = customization.addOns ?? [];

  if (sizes.length === 0 && addOns.length === 0) {
    return null;
  }

  const getAddOnQuantity = (addOnId) =>
    selectedAddOns[addOnId] ?? 0;

  return (
    <section
      className="food-customization"
      aria-labelledby="food-customization-title"
    >
      <div className="food-customization__header">
        <span className="food-customization__eyebrow">
          Make it yours
        </span>

        <h2
          id="food-customization-title"
          className="food-customization__title"
        >
          Customize your order
        </h2>

        <p className="food-customization__description">
          Personalize your dish with your preferred options.
        </p>
      </div>

      {sizes.length > 0 && (
        <fieldset className="food-customization__group">
          <legend className="food-customization__legend">
            <span>Size</span>
            <span className="food-customization__required">
              Choose one
            </span>
          </legend>

          <div className="food-customization__options">
            {sizes.map((size) => {
              const isSelected = selectedSize === size.id;

              return (
                <label
                  key={size.id}
                  className={`food-customization__option ${
                    isSelected
                      ? 'food-customization__option--selected'
                      : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="food-size"
                    value={size.id}
                    checked={isSelected}
                    onChange={() => onSizeChange(size.id)}
                  />

                  <span
                    className="food-customization__option-indicator"
                    aria-hidden="true"
                  />

                  <span className="food-customization__option-content">
                    <span className="food-customization__option-main">
                      <span className="food-customization__option-name">
                        {size.name}
                      </span>

                      <span className="food-customization__option-price">
                        {size.price === 0
                          ? 'Included'
                          : `+₦${size.price.toLocaleString()}`}
                      </span>
                    </span>

                    {isSelected && (
                      <span className="food-customization__selected-label">
                        Selected
                      </span>
                    )}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {addOns.length > 0 && (
        <fieldset className="food-customization__group">
          <legend className="food-customization__legend">
            <span>Add-ons</span>
            <span className="food-customization__optional">
              Optional
            </span>
          </legend>

          <div className="food-customization__options">
            {addOns.map((addOn) => {
              const quantity = getAddOnQuantity(addOn.id);
              const isSelected = quantity > 0;

              return (
                <div
                  key={addOn.id}
                  className={`food-customization__addon ${
                    isSelected
                      ? 'food-customization__addon--selected'
                      : ''
                  }`}
                >
                  <button
                    type="button"
                    className="food-customization__addon-select"
                    onClick={() => onAddOnToggle(addOn.id)}
                    aria-pressed={isSelected}
                  >
                    <span
                      className="food-customization__checkbox"
                      aria-hidden="true"
                    >
                      {isSelected ? '✓' : ''}
                    </span>

                    <span className="food-customization__option-content">
                      <span className="food-customization__option-main">
                        <span className="food-customization__option-name">
                          {addOn.name}
                        </span>

                        <span className="food-customization__option-price">
                          +₦{addOn.price.toLocaleString()}
                        </span>
                      </span>

                      {isSelected && (
                        <span className="food-customization__selected-label">
                          Added
                        </span>
                      )}
                    </span>
                  </button>

                  {isSelected && (
                    <div className="food-customization__quantity">
                      <span className="food-customization__quantity-label">
                        Quantity
                      </span>

                      <div
                        className="food-customization__quantity-control"
                        aria-label={`${addOn.name} quantity`}
                      >
                        <button
                          type="button"
                          className="food-customization__quantity-button"
                          onClick={() =>
                            onAddOnQuantityChange(
                              addOn.id,
                              quantity - 1,
                            )
                          }
                          disabled={quantity <= 1}
                          aria-label={`Decrease ${addOn.name} quantity`}
                        >
                          −
                        </button>

                        <span
                          className="food-customization__quantity-value"
                          aria-live="polite"
                        >
                          {quantity}
                        </span>

                        <button
                          type="button"
                          className="food-customization__quantity-button"
                          onClick={() =>
                            onAddOnQuantityChange(
                              addOn.id,
                              quantity + 1,
                            )
                          }
                          disabled={
                            quantity >= MAX_ADD_ON_QUANTITY
                          }
                          aria-label={`Increase ${addOn.name} quantity`}
                        >
                          +
                        </button>
                      </div>

                      <span className="food-customization__quantity-total">
                        +₦
                        {(
                          addOn.price * quantity
                        ).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </fieldset>
      )}
    </section>
  );
}

export default Customization;