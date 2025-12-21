'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Calendar, Instagram } from 'lucide-react'
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
                src={urlFor(siteSettings.logo).width(80).height(80).quality(90).url()}
                alt={siteSettings.siteName || 'Logo'}
                width={80}
                height={80}
                style={{ objectFit: 'contain' }}
                priority
              />
            )}
          </Link>

          {/* Right Section with Coming Up and Hamburger */}
          <div className="right-section">
            {/* Coming Up Schedule */}
            {upcomingEvent && (
              <Link href="/schedule" className="coming-up">
                <Calendar className="calendar-icon" size={24} />
              </Link>
            )}

            {/* Hamburger Menu */}
            <button
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              style={{ opacity: isMenuOpen ? 0 : 1, pointerEvents: isMenuOpen ? 'none' : 'auto' }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
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

          {/* Social Media Icons */}
          {(siteSettings?.instagramUrl || siteSettings?.tiktokUrl) && (
            <div className="nav-social-icons">
              {siteSettings?.instagramUrl && (
                <a 
                  href={siteSettings.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-social-icon"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
              )}
              {siteSettings?.tiktokUrl && (
                <a 
                  href={siteSettings.tiktokUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-social-icon"
                  aria-label="TikTok"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              )}
            </div>
          )}
        </nav>
      )}
    </>
  )
}
