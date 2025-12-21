'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mkowolzo");

  if (state.succeeded) {
    return (
      <main className="content-page">
        <section className="content-hero">
          <div className="content-container" style={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}>
            <h1 className="page-heading" style={{ marginBottom: '1.5rem' }}>Thank You!</h1>
            <p style={{ fontSize: '1.125rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Your message has been sent successfully. We'll get back to you as soon as possible.
            </p>
            <a 
              href="/" 
              className="giving-button" 
              style={{ marginTop: '2rem', display: 'inline-block' }}
            >
              Return Home
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="content-page">
      <section className="content-hero">
        <div className="content-container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <h1 className="page-heading">Contact Us</h1>
          <p className="page-content" style={{ maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center', fontSize: '1.125rem', color: '#666' }}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600', 
                    fontSize: '0.95rem',
                    color: '#333'
                  }}
                >
                  Name <span style={{ color: '#e74c3c' }}>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4a90e2'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  placeholder="Your full name"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name" 
                  errors={state.errors}
                  style={{ color: '#e74c3c', fontSize: '0.875rem', marginTop: '0.25rem' }}
                />
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600', 
                    fontSize: '0.95rem',
                    color: '#333'
                  }}
                >
                  Email <span style={{ color: '#e74c3c' }}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4a90e2'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  placeholder="your.email@example.com"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email" 
                  errors={state.errors}
                  style={{ color: '#e74c3c', fontSize: '0.875rem', marginTop: '0.25rem' }}
                />
              </div>

              {/* Message Field */}
              <div>
                <label 
                  htmlFor="message" 
                  style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600', 
                    fontSize: '0.95rem',
                    color: '#333'
                  }}
                >
                  Message <span style={{ color: '#e74c3c' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4a90e2'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                  placeholder="How can we help you?"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message" 
                  errors={state.errors}
                  style={{ color: '#e74c3c', fontSize: '0.875rem', marginTop: '0.25rem' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="giving-button"
                style={{
                  width: '100%',
                  marginTop: '1rem',
                  opacity: state.submitting ? 0.6 : 1,
                  cursor: state.submitting ? 'not-allowed' : 'pointer'
                }}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
