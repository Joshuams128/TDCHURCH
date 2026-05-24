'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm({ contactPage }) {
  const [state, handleSubmit] = useForm("xlgeazdn");

  if (state.succeeded) {
    return (
      <main className="contact-modern-page">
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '8rem 2rem 4rem', textAlign: 'center' }}>
          <span className="section-eyebrow">{contactPage?.successEyebrow || 'Message Sent'}</span>
          <h1 className="page-heading" style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
            {contactPage?.successHeading || 'Thank You!'}
          </h1>
          <span className="divider-accent"></span>
          <p style={{ fontSize: '1.125rem', color: '#555', maxWidth: '600px', margin: '1.5rem auto 0', lineHeight: '1.7' }}>
            {contactPage?.successText ||
              "Your message has been received. We'll be in touch with you soon — in the meantime, we're praying for you."}
          </p>
          <a
            href="/"
            className="giving-button"
            style={{ marginTop: '2.5rem', display: 'inline-block', borderRadius: '50px', padding: '1rem 2.5rem', letterSpacing: '1px' }}
          >
            Return Home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="contact-modern-page">
      <div className="contact-modern-grid">
        {/* Left: Info Side */}
        <div className="contact-info-side">
          <span className="contact-info-eyebrow">{contactPage?.eyebrow || 'Get in Touch'}</span>
          <h1 className="contact-info-heading">
            {contactPage?.heading || "We'd Love to Hear From You"}
          </h1>
          <span className="divider-accent left"></span>
          <p className="contact-info-text" style={{ marginTop: '1.5rem' }}>
            {contactPage?.introText ||
              "Whether you have a question, a prayer request, or you just want to say hello — reach out. We read every message, and we'd be honored to walk with you."}
          </p>

          <div className="contact-info-list">
            {contactPage?.email && (
              <div className="contact-info-item">
                <span className="contact-info-label">Email</span>
                <a href={`mailto:${contactPage.email}`} className="contact-info-value">
                  {contactPage.email}
                </a>
              </div>
            )}
            {contactPage?.phone && (
              <div className="contact-info-item">
                <span className="contact-info-label">Phone</span>
                <a href={`tel:${contactPage.phone}`} className="contact-info-value">
                  {contactPage.phone}
                </a>
              </div>
            )}
            {contactPage?.address && (
              <div className="contact-info-item">
                <span className="contact-info-label">Visit Us</span>
                <span className="contact-info-value">{contactPage.address}</span>
              </div>
            )}
            {(contactPage?.prayerLabel || contactPage?.prayerText) && (
              <div className="contact-info-item">
                <span className="contact-info-label">{contactPage?.prayerLabel || 'Prayer Request'}</span>
                <span className="contact-info-value" style={{ fontWeight: 400, fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>
                  {contactPage?.prayerText ||
                    "Need someone to pray with you? Just send a note below — our team will lift you up."}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Form Side */}
        <div className="contact-form-card">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label
                htmlFor="name"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  color: '#000',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px'
                }}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  fontSize: '1rem',
                  border: '2px solid #e8e8e8',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  background: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#000'}
                onBlur={(e) => e.target.style.borderColor = '#e8e8e8'}
                placeholder="Your full name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                style={{ color: '#e74c3c', fontSize: '0.875rem', marginTop: '0.25rem' }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  color: '#000',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px'
                }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  fontSize: '1rem',
                  border: '2px solid #e8e8e8',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  background: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#000'}
                onBlur={(e) => e.target.style.borderColor = '#e8e8e8'}
                placeholder="you@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                style={{ color: '#e74c3c', fontSize: '0.875rem', marginTop: '0.25rem' }}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  color: '#000',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px'
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  fontSize: '1rem',
                  border: '2px solid #e8e8e8',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  background: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#000'}
                onBlur={(e) => e.target.style.borderColor = '#e8e8e8'}
                placeholder="Tell us how we can help, or share a prayer request..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                style={{ color: '#e74c3c', fontSize: '0.875rem', marginTop: '0.25rem' }}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              style={{
                width: '100%',
                padding: '1.1rem 2rem',
                background: '#000',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                cursor: state.submitting ? 'not-allowed' : 'pointer',
                opacity: state.submitting ? 0.6 : 1,
                transition: 'all 0.3s ease',
                marginTop: '0.5rem'
              }}
              onMouseOver={(e) => {
                if (!state.submitting) {
                  e.currentTarget.style.background = '#FFEB3B'
                  e.currentTarget.style.color = '#000'
                }
              }}
              onMouseOut={(e) => {
                if (!state.submitting) {
                  e.currentTarget.style.background = '#000'
                  e.currentTarget.style.color = 'white'
                }
              }}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
