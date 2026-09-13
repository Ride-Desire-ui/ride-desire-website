import { useState } from 'react'
import './App.css'

function App() {
  const [contactStatus, setContactStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false)

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const handleContactSubmit = async (event) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setContactStatus('Sending your message...')

    try {
      const response = await fetch(
        'https://formspree.io/f/xppzekbz',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      )

      if (response.ok) {
        setContactStatus(
          'Thank you. Your message has been sent successfully.'
        )

        form.reset()
      } else {
        setContactStatus(
          'We could not send your message. Please try again.'
        )
      }
    } catch (error) {
      setContactStatus(
        'We could not send your message. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="ridesure-site">
      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="navbar">
        <div className="nav-container">
          <button
            className="brand"
            type="button"
            onClick={() => scrollToSection('home')}
            aria-label="RideSure Home"
          >
            <img
              src="/images/ridesure-logo.png"
              alt="RideSure"
              className="brand-logo"
            />
          </button>

          <nav
            className="nav-links"
            aria-label="Main navigation"
          >
            <button
              type="button"
              onClick={() =>
                scrollToSection('home')
              }
            >
              Home
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection('about')
              }
            >
              About
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection('safety')
              }
            >
              Safety
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection('experience')
              }
            >
              Experience
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection('contact')
              }
            >
              Contact
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="contact-button"
              type="button"
              onClick={() =>
                scrollToSection('contact')
              }
            >
              Get in Touch
            </button>

            <button
              className={`mobile-menu-button ${
                mobileMenuOpen ? 'is-open' : ''
              }`}
              type="button"
              onClick={() =>
                setMobileMenuOpen(
                  (currentValue) => !currentValue
                )
              }
              aria-label={
                mobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`mobile-navigation ${
            mobileMenuOpen ? 'is-open' : ''
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <nav
            className="mobile-navigation-inner"
            aria-label="Mobile navigation"
          >
            <button
              type="button"
              onClick={() =>
                scrollToSection('home')
              }
            >
              <span>Home</span>
              <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection('about')
              }
            >
              <span>About</span>
              <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection('safety')
              }
            >
              <span>Safety</span>
              <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection('experience')
              }
            >
              <span>Experience</span>
              <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection('contact')
              }
            >
              <span>Contact</span>
              <span aria-hidden="true">→</span>
            </button>

            <div className="mobile-navigation-brand">
              Smart
              <span>•</span>
              Safe
              <span>•</span>
              Simple
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* =========================
            HERO
        ========================== */}
        <section
          className="hero"
          id="home"
        >
          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />

          <div className="hero-container">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-dot" />

                Smart
                <span>•</span>
                Safe
                <span>•</span>
                Simple
              </div>

              <h1>
                Smarter Corporate
                <span>
                  {' '}
                  Transportation.
                </span>

                <br />

                Safer Every Journey.
              </h1>

              <p className="hero-description">
                RideSure is a smart corporate
                transportation platform designed
                to make every journey safer,
                simpler and more reliable.
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  className="primary-button"
                  onClick={() =>
                    scrollToSection('about')
                  }
                >
                  Discover RideSure

                  <span aria-hidden="true">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() =>
                    scrollToSection('safety')
                  }
                >
                  Explore Safety
                </button>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <span className="trust-icon">
                    ✓
                  </span>

                  People First
                </div>

                <div className="trust-item">
                  <span className="trust-icon">
                    ✓
                  </span>

                  Safety Focused
                </div>

                <div className="trust-item">
                  <span className="trust-icon">
                    ✓
                  </span>

                  Technology Driven
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow" />

              <div className="logo-card">
                <div className="logo-card-inner">
                  <img
                    src="/images/ridesure-logo.png"
                    alt="RideSure - Smart Safe Simple"
                    className="hero-logo"
                  />
                </div>

                <div className="floating-card floating-card-safety">
                  <div className="floating-icon shield-icon">
                    ✓
                  </div>

                  <div>
                    <strong>
                      Safety First
                    </strong>

                    <span>
                      Every journey matters
                    </span>
                  </div>
                </div>

                <div className="floating-card floating-card-smart">
                  <div className="floating-icon route-icon">
                    ↗
                  </div>

                  <div>
                    <strong>
                      Smart Mobility
                    </strong>

                    <span>
                      Built for every journey
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>
              Built around people.
            </span>

            <div className="hero-bottom-line" />

            <span>
              Designed for safer journeys.
            </span>
          </div>
        </section>

        {/* =========================
            ABOUT RIDESURE
        ========================== */}
        <section
          className="about-section"
          id="about"
        >
          <div className="about-container">
            <div className="about-intro">
              <div className="section-label">
                <span className="section-label-line" />

                ABOUT RIDESURE
              </div>

              <h2>
                Transportation built
                <br />
                around{' '}

                <span>
                  people.
                </span>
              </h2>

              <p>
                RideSure is a smart corporate
                transportation platform built to
                connect people, drivers and
                transport operations through one
                seamless experience.
              </p>
            </div>

            <div className="purpose-heading">
              <span>
                WHAT DRIVES US
              </span>

              <div className="purpose-line" />
            </div>

            <div className="purpose-grid">
              <article className="purpose-card mission-card">
                <div className="purpose-number">
                  01
                </div>

                <div className="purpose-icon mission-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="1"
                    />
                  </svg>
                </div>

                <div className="purpose-content">
                  <span className="purpose-label">
                    OUR MISSION
                  </span>

                  <h3>
                    Making every journey
                    <br />

                    <span>
                      better.
                    </span>
                  </h3>

                  <p>
                    To make corporate
                    transportation smarter, safer
                    and simpler through technology
                    that connects every journey.
                  </p>
                </div>
              </article>

              <article className="purpose-card vision-card">
                <div className="purpose-number">
                  02
                </div>

                <div className="purpose-icon vision-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="
                        M2.5 12
                        s3.5-6 9.5-6
                        9.5 6 9.5 6
                        -3.5 6-9.5 6
                        -9.5-6-9.5-6Z
                      "
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="2.7"
                    />
                  </svg>
                </div>

                <div className="purpose-content">
                  <span className="purpose-label">
                    OUR VISION
                  </span>

                  <h3>
                    A future where every
                    <br />
                    journey feels{' '}

                    <span>
                      secure.
                    </span>
                  </h3>

                  <p>
                    To build a future where people
                    can travel with confidence,
                    safety and peace of mind.
                  </p>
                </div>
              </article>
            </div>

            <div className="about-values">
              <div className="about-value">
                <div className="value-icon value-icon-blue">
                  01
                </div>

                <div>
                  <strong>
                    Smart
                  </strong>

                  <span>
                    Technology that simplifies
                    transportation.
                  </span>
                </div>
              </div>

              <div className="value-divider" />

              <div className="about-value">
                <div className="value-icon value-icon-green">
                  02
                </div>

                <div>
                  <strong>
                    Safe
                  </strong>

                  <span>
                    Safety designed into every
                    journey.
                  </span>
                </div>
              </div>

              <div className="value-divider" />

              <div className="about-value">
                <div className="value-icon value-icon-blue">
                  03
                </div>

                <div>
                  <strong>
                    Simple
                  </strong>

                  <span>
                    An experience built around
                    people.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            RIDESURE SAFETY
        ========================== */}
        <section
          className="safety-section"
          id="safety"
        >
          <div className="safety-background-shape safety-shape-one" />
          <div className="safety-background-shape safety-shape-two" />

          <div className="safety-container">
            <div className="safety-header">
              <div className="safety-section-label">
                <span className="safety-label-line" />

                RIDESURE SAFETY
              </div>

              <h2>
                Safety at the heart
                <br />
                of every{' '}

                <span>
                  journey.
                </span>
              </h2>

              <p>
                Safety is not an additional
                feature. It is part of how
                RideSure is designed—from
                verification and journey
                visibility to intelligent
                monitoring and support when it
                matters.
              </p>
            </div>

            <div className="safety-grid">
              <article className="safety-card">
                <div className="safety-card-top">
                  <div className="safety-card-icon safety-blue">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 3 5 6v5c0 4.6 2.9 8.4 7 10 4.1-1.6 7-5.4 7-10V6l-7-3Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>

                  <span className="safety-card-number">
                    01
                  </span>
                </div>

                <h3>
                  Verified Journeys
                </h3>

                <p>
                  Verification helps ensure the
                  right people and assigned
                  journeys are connected before
                  travel begins.
                </p>

                <div className="safety-card-line safety-line-blue" />
              </article>

              <article className="safety-card">
                <div className="safety-card-top">
                  <div className="safety-card-icon safety-green">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M4 17V9" />
                      <path d="M10 17V5" />
                      <path d="M16 17v-4" />
                      <path d="M22 17V7" />
                      <path d="M2 20h20" />
                    </svg>
                  </div>

                  <span className="safety-card-number">
                    02
                  </span>
                </div>

                <h3>
                  Intelligent Monitoring
                </h3>

                <p>
                  Journey signals and operational
                  visibility help identify
                  situations that may require
                  attention.
                </p>

                <div className="safety-card-line safety-line-green" />
              </article>

              <article className="safety-card">
                <div className="safety-card-top">
                  <div className="safety-card-icon safety-blue">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 3a7 7 0 0 0-7 7v3l-2 3h18l-2-3v-3a7 7 0 0 0-7-7Z" />
                      <path d="M9 20h6" />
                    </svg>
                  </div>

                  <span className="safety-card-number">
                    03
                  </span>
                </div>

                <h3>
                  Emergency Support
                </h3>

                <p>
                  Safety support and escalation
                  pathways help enable faster
                  action when assistance is
                  needed.
                </p>

                <div className="safety-card-line safety-line-blue" />
              </article>

              <article className="safety-card">
                <div className="safety-card-top">
                  <div className="safety-card-icon safety-green">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        cx="9"
                        cy="8"
                        r="3"
                      />

                      <path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                      <path d="M16 7h5" />
                      <path d="M18.5 4.5v5" />
                    </svg>
                  </div>

                  <span className="safety-card-number">
                    04
                  </span>
                </div>

                <h3>
                  People-First Safety
                </h3>

                <p>
                  RideSure is designed around the
                  people making every journey,
                  with safety considered
                  throughout the transportation
                  experience.
                </p>

                <div className="safety-card-line safety-line-green" />
              </article>
            </div>

            <div className="safety-statement">
              <div className="safety-statement-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 3 5 6v5c0 4.6 2.9 8.4 7 10 4.1-1.6 7-5.4 7-10V6l-7-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>

              <div className="safety-statement-content">
                <span>
                  OUR SAFETY PHILOSOPHY
                </span>

                <h3>
                  Safety isn't an additional
                  feature.
                  <br />

                  <strong>
                    It's built into the journey.
                  </strong>
                </h3>
              </div>

              <div className="safety-statement-mark">
                Smart • Safe • Simple
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            RIDESURE EXPERIENCE
        ========================== */}
        <section
          className="experience-section"
          id="experience"
        >
          <div className="experience-decoration experience-decoration-one" />
          <div className="experience-decoration experience-decoration-two" />

          <div className="experience-container">
            <div className="experience-header">
              <div className="experience-label">
                <span className="experience-label-line" />

                THE RIDESURE EXPERIENCE

                <span className="experience-label-line" />
              </div>

              <h2>
                From planning to arrival,
                <br />

                <span>
                  one connected experience.
                </span>
              </h2>

              <p>
                RideSure brings people,
                technology and transport
                operations together to create a
                safer, simpler and more reliable
                corporate transportation
                experience.
              </p>
            </div>

            <div className="experience-cinema">
              <div className="experience-image-wrap">
                <img
                  src="/images/ridesure-experience.png"
                  alt="RideSure corporate transportation journey"
                  className="experience-image"
                />
              </div>
            </div>

            <div className="experience-values">
              <div className="experience-value">
                <div className="experience-value-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="3"
                    />

                    <circle
                      cx="16"
                      cy="8"
                      r="3"
                    />

                    <path d="M2 20c0-4 2.7-7 6-7" />
                    <path d="M22 20c0-4-2.7-7-6-7" />
                  </svg>
                </div>

                <div>
                  <strong>
                    People First
                  </strong>

                  <span>
                    Designed around every journey.
                  </span>
                </div>
              </div>

              <div className="experience-value-divider" />

              <div className="experience-value">
                <div className="experience-value-icon experience-value-icon-green">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 3 5 6v5c0 4.6 2.9 8.4 7 10 4.1-1.6 7-5.4 7-10V6l-7-3Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <div>
                  <strong>
                    Safety Focused
                  </strong>

                  <span>
                    Safety considered throughout.
                  </span>
                </div>
              </div>

              <div className="experience-value-divider" />

              <div className="experience-value">
                <div className="experience-value-icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M4 19V9" />
                    <path d="M10 19V5" />
                    <path d="M16 19v-7" />
                    <path d="M22 19V3" />
                  </svg>
                </div>

                <div>
                  <strong>
                    Technology Driven
                  </strong>

                  <span>
                    Smarter connected transportation.
                  </span>
                </div>
              </div>
            </div>

            <div className="experience-closing">
              <span />

              <p>
                Built around people. Designed for
                what's next.
              </p>

              <span />
            </div>
          </div>
        </section>

        {/* =========================
            CONTACT RIDESURE
        ========================== */}
        <section
          id="contact"
          className="contact-section"
        >
          <div className="contact-decoration contact-decoration-one" />
          <div className="contact-decoration contact-decoration-two" />

          <div className="contact-container">
            <div className="contact-content">
              <div className="contact-label">
                <span className="contact-label-line" />

                CONTACT RIDESURE
              </div>

              <h2>
                Let's build safer
                <br />
                corporate{' '}
                <span>
                  journeys.
                </span>
              </h2>

              <p className="contact-description">
                Whether you're exploring smarter
                corporate transportation or want
                to learn more about RideSure,
                we'd love to hear from you.
              </p>

              <div className="contact-principles">
                <div className="contact-principle">
                  <span className="contact-principle-icon">
                    ✓
                  </span>

                  <div>
                    <strong>
                      Smart
                    </strong>

                    <span>
                      Connected transportation
                    </span>
                  </div>
                </div>

                <div className="contact-principle">
                  <span className="contact-principle-icon">
                    ✓
                  </span>

                  <div>
                    <strong>
                      Safe
                    </strong>

                    <span>
                      People-first journeys
                    </span>
                  </div>
                </div>

                <div className="contact-principle">
                  <span className="contact-principle-icon">
                    ✓
                  </span>

                  <div>
                    <strong>
                      Simple
                    </strong>

                    <span>
                      Seamless experiences
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <div className="contact-form-heading">
                <span>
                  GET IN TOUCH
                </span>

                <h3>
                  Start a conversation.
                </h3>

                <p>
                  Tell us a little about what
                  you're looking for.
                </p>
              </div>

              <form
                className="contact-form"
                onSubmit={handleContactSubmit}
              >
                <div className="contact-form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">
                      Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-email">
                      Email
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-company">
                    Company
                  </label>

                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="How can RideSure help?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-button"
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                >
                  {isSubmitting
                    ? 'Sending...'
                    : 'Send Message'}

                  {!isSubmitting && (
                    <span aria-hidden="true">
                      →
                    </span>
                  )}
                </button>

                {contactStatus && (
                  <p
                    className="contact-form-status"
                    role="status"
                    aria-live="polite"
                  >
                    {contactStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <button
                className="footer-logo-button"
                type="button"
                onClick={() =>
                  scrollToSection('home')
                }
                aria-label="Back to RideSure Home"
              >
                <img
                  src="/images/ridesure-logo.png"
                  alt="RideSure"
                  className="footer-logo"
                />
              </button>

              <p>
                Smart corporate transportation
                designed around people, safety
                and every journey.
              </p>

              <div className="footer-brand-line">
                Smart
                <span>•</span>
                Safe
                <span>•</span>
                Simple
              </div>
            </div>

            <div className="footer-navigation">
              <span className="footer-heading">
                EXPLORE
              </span>

              <button
                type="button"
                onClick={() =>
                  scrollToSection('home')
                }
              >
                Home
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollToSection('about')
                }
              >
                About
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollToSection('safety')
                }
              >
                Safety
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollToSection('experience')
                }
              >
                Experience
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollToSection('contact')
                }
              >
                Contact
              </button>
            </div>

            <div className="footer-message">
              <span className="footer-heading">
                OUR PURPOSE
              </span>

              <h3>
                Every journey
                <br />
                should feel safer.
              </h3>

              <button
                type="button"
                onClick={() =>
                  scrollToSection('contact')
                }
                className="footer-contact-link"
              >
                Get in Touch

                <span aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} RideSure.
              All rights reserved.
            </p>

            <p>
              Built around people. Designed for
              safer journeys.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App