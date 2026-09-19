import { useReservationContext } from '../../../context/useReservationContext.js';

import './reservationForm.css';

function ReservationForm() {
  const {
    reservation,
    updateReservation,
    resetReservation,
    submitReservation,
    isSubmitting,
    isSubmitted,
  } = useReservationContext();

  const handleChange = (event) => {
    const { name, value } = event.target;

    updateReservation(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    await submitReservation();
  };

  if (isSubmitted) {
    return (
      <div className="reservation-form reservation-form--success">
        <div className="reservation-form__success">
          <div
            className="reservation-form__success-icon"
            aria-hidden="true"
          >
            ✓
          </div>

          <span className="reservation-form__eyebrow">
            Request received
          </span>

          <h2>Reservation request sent</h2>

          <p>
            Thanks, {reservation.name}. We've received
            your reservation request and will contact you
            to confirm the details.
          </p>

          <div
            className="reservation-form__summary"
            aria-label="Reservation request details"
          >
            <div className="reservation-form__summary-item">
              <span>Date</span>
              <strong>{reservation.date}</strong>
            </div>

            <div className="reservation-form__summary-item">
              <span>Time</span>
              <strong>{reservation.time}</strong>
            </div>

            <div className="reservation-form__summary-item">
              <span>Guests</span>
              <strong>
                {reservation.guests}{' '}
                {Number(reservation.guests) === 1
                  ? 'guest'
                  : 'guests'}
              </strong>
            </div>

            <div className="reservation-form__summary-item">
              <span>Phone</span>
              <strong>{reservation.phone}</strong>
            </div>
          </div>

          <p className="reservation-form__success-note">
            This demo simulates a reservation request.
            Final table confirmation would happen through
            the restaurant's reservation system.
          </p>

          <button
            type="button"
            className="reservation-form__submit"
            onClick={resetReservation}
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="reservation-form">
      <div className="reservation-form__header">
        <span className="reservation-form__eyebrow">
          Table reservation
        </span>

        <h2>Plan your visit</h2>

        <p>
          Choose your preferred date, time, and party
          size.
        </p>
      </div>

      <form
        className="reservation-form__body"
        onSubmit={handleSubmit}
      >
        <div className="reservation-form__row">
          <div className="reservation-form__field">
            <label htmlFor="reservation-date">
              Date
              <span aria-hidden="true"> *</span>
            </label>

            <input
              id="reservation-date"
              name="date"
              type="date"
              value={reservation.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="reservation-form__field">
            <label htmlFor="reservation-time">
              Preferred time
              <span aria-hidden="true"> *</span>
            </label>

            <input
              id="reservation-time"
              name="time"
              type="time"
              value={reservation.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="reservation-form__field">
          <label htmlFor="reservation-guests">
            Number of guests
            <span aria-hidden="true"> *</span>
          </label>

          <select
            id="reservation-guests"
            name="guests"
            value={reservation.guests}
            onChange={handleChange}
            required
          >
            {Array.from(
              { length: 12 },
              (_, index) => index + 1,
            ).map((guestCount) => (
              <option
                key={guestCount}
                value={guestCount}
              >
                {guestCount}{' '}
                {guestCount === 1
                  ? 'guest'
                  : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className="reservation-form__row">
          <div className="reservation-form__field">
            <label htmlFor="reservation-name">
              Full name
              <span aria-hidden="true"> *</span>
            </label>

            <input
              id="reservation-name"
              name="name"
              type="text"
              value={reservation.name}
              onChange={handleChange}
              placeholder="Your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="reservation-form__field">
            <label htmlFor="reservation-phone">
              Phone number
              <span aria-hidden="true"> *</span>
            </label>

            <input
              id="reservation-phone"
              name="phone"
              type="tel"
              value={reservation.phone}
              onChange={handleChange}
              placeholder="+234 800 000 0000"
              autoComplete="tel"
              required
            />
          </div>
        </div>

        <div className="reservation-form__field">
          <label htmlFor="reservation-special-request">
            Special request
            <span className="reservation-form__optional">
              Optional
            </span>
          </label>

          <textarea
            id="reservation-special-request"
            name="specialRequest"
            value={reservation.specialRequest}
            onChange={handleChange}
            placeholder="Birthday, accessibility needs, seating preference..."
            rows="4"
            maxLength="500"
          />

          <span className="reservation-form__counter">
            {reservation.specialRequest.length}/500
          </span>
        </div>

        <div className="reservation-form__actions">
          <button
            type="submit"
            className="reservation-form__submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? 'Sending Request...'
              : 'Request Reservation'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
