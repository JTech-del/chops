import { useState } from 'react';
import { Link } from 'react-router-dom';

import SectionHeading from '../../components/common/sectionHeading/sectionHeading.jsx';

import './contact.css';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <main className="contact-page">
      <section className="contact-page__hero">
        <div className="container contact-page__hero-inner">
          <div className="contact-page__hero-content">
            <span className="contact-page__eyebrow">
              Get in touch
            </span>

            <h1>
              Let's talk
              <br />
              about your next visit.
            </h1>

            <p>
              Have a question, a special request, or simply
              want to say hello? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-page__main">
        <div className="container">
          <div className="contact-page__grid">
            <div className="contact-page__information">
              <SectionHeading
                eyebrow="Contact Chops"
                title="We're here to help."
                description="Whether you're planning a visit or have a question about your order, reach out and we'll get back to you."
                align="left"
              />

              <div className="contact-page__details">
                <article className="contact-page__detail">
                  <span
                    className="contact-page__detail-icon"
                    aria-hidden="true"
                  >
                    ↗
                  </span>

                  <div>
                    <span className="contact-page__detail-label">
                      Visit us
                    </span>

                    <h3>Chops Restaurant</h3>

                    <p>
                      Location details coming soon.
                    </p>
                  </div>
                </article>

                <article className="contact-page__detail">
                  <span
                    className="contact-page__detail-icon"
                    aria-hidden="true"
                  >
                    ☎
                  </span>

                  <div>
                    <span className="contact-page__detail-label">
                      Call us
                    </span>

                    <h3>+234 800 000 0000</h3>

                    <p>
                      Available during opening hours.
                    </p>
                  </div>
                </article>

                <article className="contact-page__detail">
                  <span
                    className="contact-page__detail-icon"
                    aria-hidden="true"
                  >
                    @
                  </span>

                  <div>
                    <span className="contact-page__detail-label">
                      Email us
                    </span>

                    <h3>hello@chops.example</h3>

                    <p>
                      We aim to respond as soon as possible.
                    </p>
                  </div>
                </article>

                <article className="contact-page__detail">
                  <span
                    className="contact-page__detail-icon"
                    aria-hidden="true"
                  >
                    ◷
                  </span>

                  <div>
                    <span className="contact-page__detail-label">
                      Opening hours
                    </span>

                    <h3>Monday – Sunday</h3>

                    <p>
                      11:00 AM – 10:00 PM
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className="contact-page__form-card">
              {isSubmitted ? (
                <div
                  className="contact-page__success"
                  role="status"
                  aria-live="polite"
                >
                  <span
                    className="contact-page__success-icon"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <span className="contact-page__eyebrow">
                    Message received
                  </span>

                  <h2>
                    Thanks for reaching out.
                  </h2>

                  <p>
                    Your message has been received in this
                    demo. A real contact service can be
                    connected when the backend is added.
                  </p>

                  <button
                    type="button"
                    className="contact-page__button contact-page__button--primary"
                    onClick={handleReset}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="contact-page__form-heading">
                    <span className="contact-page__eyebrow">
                      Send a message
                    </span>

                    <h2>
                      How can we help?
                    </h2>

                    <p>
                      Fill in the form below and we'll have
                      your message ready for the next step.
                    </p>
                  </div>

                  <form
                    className="contact-page__form"
                    onSubmit={handleSubmit}
                  >
                    <div className="contact-page__form-row">
                      <label className="contact-page__field">
                        <span>Name</span>

                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          autoComplete="name"
                          required
                        />
                      </label>

                      <label className="contact-page__field">
                        <span>Email</span>

                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          required
                        />
                      </label>
                    </div>

                    <div className="contact-page__form-row">
                      <label className="contact-page__field">
                        <span>Phone</span>

                        <input
                          type="tel"
                          name="phone"
                          placeholder="+234..."
                          autoComplete="tel"
                        />
                      </label>

                      <label className="contact-page__field">
                        <span>Subject</span>

                        <select
                          name="subject"
                          defaultValue=""
                          required
                        >
                          <option
                            value=""
                            disabled
                          >
                            Select a subject
                          </option>

                          <option value="general">
                            General enquiry
                          </option>

                          <option value="reservation">
                            Reservation
                          </option>

                          <option value="order">
                            Order enquiry
                          </option>

                          <option value="feedback">
                            Feedback
                          </option>
                        </select>
                      </label>
                    </div>

                    <label className="contact-page__field">
                      <span>Message</span>

                      <textarea
                        name="message"
                        rows="6"
                        placeholder="How can we help?"
                        required
                      />
                    </label>

                    <button
                      type="submit"
                      className="contact-page__button contact-page__button--primary"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-page__visit">
        <div className="container">
          <div className="contact-page__visit-card">
            <div className="contact-page__visit-content">
              <span className="contact-page__eyebrow">
                Visit Chops
              </span>

              <h2>
                A place worth
                <br />
                finding.
              </h2>

              <p>
                Our location details will be added when
                the restaurant's final business information
                is connected.
              </p>
            </div>

            <div
              className="contact-page__map"
              aria-label="Map location placeholder"
            >
              <div className="contact-page__map-marker">
                <span aria-hidden="true">+</span>
                <strong>Chops</strong>
                <span>Location coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-page__cta">
        <div className="container">
          <div className="contact-page__cta-content">
            <span className="contact-page__eyebrow">
              Ready when you are
            </span>

            <h2>
              Let's make your
              <br />
              next meal count.
            </h2>

            <p>
              Explore what's on the menu or reserve a table
              for your next visit.
            </p>

            <div className="contact-page__cta-actions">
              <Link
                to="/menu"
                className="contact-page__button contact-page__button--primary"
              >
                Explore Menu
              </Link>

              <Link
                to="/reservations"
                className="contact-page__button contact-page__button--secondary"
              >
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;