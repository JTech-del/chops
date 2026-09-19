import { Link } from 'react-router-dom';

import SectionHeading from '../../components/common/sectionHeading/sectionHeading.jsx';


import aboutHero from '../../assets/images/about/about-hero.jpg';
import chopsExperience from '../../assets/images/about/chops-exprience.jpg';
import chopsKitchen from '../../assets/images/about/chops-kitchen.jpg';


import './about.css';

function About() {
  return (
    <main className="about-page">
      <section className="about-page__hero">
        <div className="container about-page__hero-inner">
          <div className="about-page__hero-content">
            <span className="about-page__eyebrow">
              Our story
            </span>

            <h1>
              Good food.
              <br />
              Good company.
            </h1>

            <p>
              Chops is a modern restaurant built around
              the simple idea that great food brings people
              together.
            </p>
          </div>

<div className="about-page__hero-media">
  <img
    src={aboutHero}
    alt="Chops restaurant dining atmosphere"
  />
</div>
         
        </div>
      </section>

      <section className="about-page__story">
        <div className="container about-page__story-inner">
        <div className="about-page__story-media">
  <img
    src={chopsKitchen}
    alt="Chef preparing food in the Chops kitchen"
  />
</div>

          <div className="about-page__story-content">
            <SectionHeading
              eyebrow="Where it started"
              title="Made for moments worth sharing."
              description="From a quick lunch to a long evening with friends, Chops is designed around food that feels familiar, fresh, and worth coming back for."
              align="left"
            />

            <p>
              We believe a restaurant should be more than
              somewhere to eat. It should be a place where
              people can slow down, connect, and enjoy the
              moment.
            </p>

            <p>
              That's why everything at Chops is centered
              around a straightforward experience: good
              food, thoughtful preparation, and warm
              hospitality.
            </p>
          </div>
        </div>
      </section>

      <section className="about-page__beliefs">
        <div className="container">
          <SectionHeading
            eyebrow="What we believe"
            title="Simple principles. Thoughtful food."
            description="Every part of the Chops experience is guided by a few things that matter."
          />

          <div className="about-page__belief-grid">
            <article className="about-page__belief-card">
              <span
                className="about-page__belief-number"
                aria-hidden="true"
              >
                01
              </span>

              <h3>Quality ingredients</h3>

              <p>
                We focus on ingredients that help every
                dish taste fresh, satisfying, and full of
                character.
              </p>
            </article>

            <article className="about-page__belief-card">
              <span
                className="about-page__belief-number"
                aria-hidden="true"
              >
                02
              </span>

              <h3>Fresh preparation</h3>

              <p>
                Good food deserves attention. Our dishes
                are prepared with care so every order feels
                worth the wait.
              </p>
            </article>

            <article className="about-page__belief-card">
              <span
                className="about-page__belief-number"
                aria-hidden="true"
              >
                03
              </span>

              <h3>Warm hospitality</h3>

              <p>
                From the first hello to the final bite, we
                want every guest to feel comfortable,
                welcome, and looked after.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-page__experience">
        <div className="container">
          <div className="about-page__experience-card">
          <div className="about-page__experience-media">
  <img
    src={chopsExperience}
    alt="Guests enjoying a meal together at Chops"
  />
</div>

            <div className="about-page__experience-content">
              <span className="about-page__eyebrow">
                The Chops experience
              </span>

              <h2>
                Come for the food.
                <br />
                Stay for the moment.
              </h2>

              <p>
                Whether you're catching up with friends,
                sharing a family meal, or enjoying a quiet
                dinner, Chops gives you a relaxed setting
                for the moments that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page__values">
        <div className="container">
          <SectionHeading
            eyebrow="Our values"
            title="What matters at Chops."
          />

          <div className="about-page__values-grid">
            <article className="about-page__value">
              <h3>Food</h3>
              <p>
                Food should be satisfying, approachable,
                and made with intention.
              </p>
            </article>

            <article className="about-page__value">
              <h3>People</h3>
              <p>
                Restaurants are about people. We create
                spaces where everyone can feel welcome.
              </p>
            </article>

            <article className="about-page__value">
              <h3>Community</h3>
              <p>
                Good meals create connections that extend
                beyond the table.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-page__cta">
        <div className="container">
          <div className="about-page__cta-content">
            <span className="about-page__eyebrow">
              Your table is waiting
            </span>

            <h2>Let's make it a moment.</h2>

            <p>
              Explore the menu or reserve a table for your
              next visit.
            </p>

            <div className="about-page__cta-actions">
              <Link
                to="/menu"
                className="about-page__cta-button about-page__cta-button--primary"
              >
                Explore Menu
              </Link>

              <Link
                to="/reservations"
                className="about-page__cta-button about-page__cta-button--secondary"
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

export default About;