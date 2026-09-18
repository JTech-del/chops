import SectionHeading from '../../components/common/sectionHeading/sectionHeading.jsx';
import ReservationForm from '../../components/reservations/reservationForm/reservationForm.jsx';

import './reservations.css';

function Reservations() {
  return (
    <main className="reservations-page">
      <section className="reservations-page__hero">
        <div className="container">
          <SectionHeading
            eyebrow="Make it a moment"
            title="Reserve a Table"
            description="Planning a meal with friends, family, or someone special? Reserve your table and let us take care of the rest."
          />
        </div>
      </section>

      <section className="reservations-page__content">
        <div className="container">
          <div className="reservations-page__layout">
            <ReservationForm />

            <aside className="reservations-page__info">
              <span className="reservations-page__info-eyebrow">
                Before you visit
              </span>

              <h2>Good food deserves good company.</h2>

              <p>
                Whether it is a casual lunch or a special
                evening, we will have your table ready for
                you.
              </p>

              <div className="reservations-page__details">
                <div className="reservations-page__detail">
                  <span
                    className="reservations-page__detail-icon"
                    aria-hidden="true"
                  >
                    ◷
                  </span>

                  <div>
                    <h3>Dining hours</h3>
                    <p>
                      Monday – Sunday
                      <br />
                      11:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="reservations-page__detail">
                  <span
                    className="reservations-page__detail-icon"
                    aria-hidden="true"
                  >
                    ♡
                  </span>

                  <div>
                    <h3>Special occasions</h3>
                    <p>
                      Let us know if you are celebrating
                      something special.
                    </p>
                  </div>
                </div>

                <div className="reservations-page__detail">
                  <span
                    className="reservations-page__detail-icon"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <div>
                    <h3>Reservation requests</h3>
                    <p>
                      Your request will be confirmed after
                      availability is reviewed.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Reservations;
