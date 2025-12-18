'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, Menu, X } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

export default function Header({ siteSettings }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            {siteSettings?.logo && (
              <Image
                src={urlFor(siteSettings.logo).url()}
                alt={siteSettings.siteName || 'Logo'}
                width={120}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            )}
          </div>

          {/* Coming Up */}
          <div className="coming-up">
            <Calendar className="calendar-icon" size={20} />
            <span>Coming Up</span>
          </div>

          {/* Hamburger Menu */}
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <ul>
            {siteSettings?.navigation?.map((item, index) => (
              <li key={index}>
                <a href={item.url} onClick={() => setIsMenuOpen(false)}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
