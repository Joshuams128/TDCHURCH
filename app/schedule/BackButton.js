'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="schedule-back-button"
      style={{
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1rem',
        fontWeight: '600',
        textDecoration: 'none',
        background: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
        padding: '0.75rem',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        cursor: 'pointer',
        width: '48px',
        height: '48px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <X size={24} />
    </button>
  );
}
