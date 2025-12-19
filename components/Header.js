'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Menu, X } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

export default function Header({ siteSettings }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <Link href="/" className="logo">
            {siteSettings?.logo && (
              <Image
                src={urlFor(siteSettings.logo).url()}
                alt={siteSettings.siteName || 'Logo'}
                width={120}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            )}
          </Link>

          {/* Right Side: Coming Up & Hamburger Menu */}
          <div className="right-section">
            <Link href="/schedule" className="coming-up">
              <Calendar className="calendar-icon" size={20} />
              <span>Coming Up</span>
            </Link>

            <button
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Navigation Menu */}
      {isMenuOpen && (
        <nav className="fullscreen-nav">
          <div className="nav-grid">
            <div className="nav-column nav-left">
              {siteSettings?.navigation?.slice(0, 3).map((item, index) => (
                <div key={index} className="nav-item">
                  {item.url ? (
                    <Link href={item.url} onClick={() => setIsMenuOpen(false)}>
                      {item.title}
                    </Link>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="nav-column nav-right">
              {siteSettings?.navigation?.slice(3, 6).map((item, index) => (
                <div key={index} className="nav-item">
                  {item.url ? (
                    <Link href={item.url} onClick={() => setIsMenuOpen(false)}>
                      {item.title}
                    </Link>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {siteSettings?.navigation?.[6] && (
            <div className="nav-center-bottom">
              {siteSettings.navigation[6].url ? (
                <Link 
                  href={siteSettings.navigation[6].url} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {siteSettings.navigation[6].title}
                </Link>
              ) : (
                <span>{siteSettings.navigation[6].title}</span>
              )}
            </div>
          )}
        </nav>
      )}
    </>
  )
}
