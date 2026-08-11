import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LifetimeLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const heightClass = size === 'sm' ? 'h-8 sm:h-9' : size === 'lg' ? 'h-12 sm:h-14' : 'h-9 sm:h-11';

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        viewBox="0 0 280 85" 
        className={`${heightClass} w-auto overflow-visible select-none`}
        aria-label="Lifetime Fitness Club Logo"
      >
        {/* Stopwatch Icon on Top-Left */}
        <g transform="translate(2, 0)">
          {/* Top button */}
          <rect x="22" y="2" width="10" height="4" rx="1" fill="#38BDF8" />
          <rect x="25" y="6" width="4" height="4" fill="#38BDF8" />
          {/* Side buttons */}
          <rect x="10" y="8" width="5" height="3" rx="1" fill="#38BDF8" transform="rotate(-30 12 9.5)" />
          <rect x="39" y="8" width="5" height="3" rx="1" fill="#38BDF8" transform="rotate(30 41.5 9.5)" />
          {/* Main Dial Ring */}
          <circle cx="27" cy="27" r="18" fill="none" stroke="#38BDF8" strokeWidth="3.5" />
          {/* Inner ticks */}
          <line x1="27" y1="12" x2="27" y2="16" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="39" y1="27" x2="42" y2="27" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          {/* Stopwatch Hand */}
          <line x1="27" y1="27" x2="35" y2="19" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="27" cy="27" r="2.5" fill="#38BDF8" />
        </g>

        {/* LIFETIME Text - Electric Sky Blue */}
        <text 
          x="56" 
          y="38" 
          fill="#38BDF8" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="36" 
          fontStyle="italic" 
          letterSpacing="-0.5"
        >
          LIFETIME
        </text>

        {/* FITNESS Text - White */}
        <text 
          x="56" 
          y="72" 
          fill="#FFFFFF" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="36" 
          fontStyle="italic" 
          letterSpacing="0"
        >
          FITNESS
        </text>

        {/* Running Athlete Graphic on the Right */}
        <g transform="translate(222, 10)" fill="#38BDF8">
          {/* Head */}
          <circle cx="22" cy="6" r="4.5" />
          {/* Speed motion trails */}
          <line x1="-10" y1="18" x2="2" y2="18" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <line x1="-14" y1="26" x2="-2" y2="26" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <line x1="-8" y1="34" x2="3" y2="34" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          {/* Torso & Arms */}
          <path d="M 18,12 L 26,20 L 20,36 L 14,26 Z" />
          <path d="M 22,16 L 32,14 L 36,22" fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 20,18 L 10,22 L 4,16" fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Running Legs */}
          <path d="M 20,34 L 32,46 L 40,44" fill="none" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 18,34 L 8,44 L 2,56" fill="none" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* CLUB Text below athlete */}
        <text 
          x="230" 
          y="74" 
          fill="#FFFFFF" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="800" 
          fontSize="15" 
          letterSpacing="0.5"
        >
          CLUB
        </text>
      </svg>
    </div>
  );
};
