'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Calendar } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

export default function Header({ siteSettings, upcomingEvent }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Split navigation items based on showOnTop property
  const topNavItems = siteSettings?.navigation?.filter(item => item.showOnTop).slice(0, 4) || []
  const bottomNavItems = siteSettings?.navigation?.filter(item => !item.showOnTop) || []

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <Link href="/" className="logo">
            {siteSettings?.logo && (
              <Image
                src={urlFor(siteSettings.logo).width(240).height(120).quality(90).url()}
                alt={siteSettings.siteName || 'Logo'}
                width={120}
                height={60}
                style={{ objectFit: 'contain' }}
                priority
              />
            )}
          </Link>

          {/* Right Section with Coming Up and Hamburger */}
          <div className="right-section">
            {/* Coming Up Schedule */}
            {upcomingEvent && (
              <Link href="/schedule" className="coming-up" style={{ background: 'rgba(0, 0, 0, 0.6)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
                <Calendar className="calendar-icon" size={20} />
                <span>Coming Up: {upcomingEvent.eventTitle}</span>
              </Link>
            )}

            {/* Hamburger Menu */}
            <button
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Navigation Menu */}
      {isMenuOpen && (
        <nav className="fullscreen-nav">
          <button 
            className="nav-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          {/* Top Row Navigation */}
          {topNavItems.length > 0 && (
            <div className="nav-top-row">
              {topNavItems.map((item, index) => (
                <div key={index} className="nav-top-item">
                  {item.url ? (
                    <Link 
                      href={item.url} 
                      onClick={() => setIsMenuOpen(false)}
                      style={{ color: item.highlightColor || 'white' }}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span style={{ color: item.highlightColor || 'white' }}>{item.title}</span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Bottom Grid Navigation */}
          {bottomNavItems.length > 0 && (
            <div className="nav-bottom-grid">
              {bottomNavItems.map((item, index) => (
                <div key={index} className="nav-grid-item">
                  {item.url ? (
                    <Link 
                      href={item.url} 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>
      )}
    </>
  )
}
