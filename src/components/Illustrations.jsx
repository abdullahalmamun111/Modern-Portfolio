import React from 'react';

/**
 * User Profile Photo Portrait matching user's uploaded picture
 */
export function AvatarPortrait({ className = "w-28 h-28" }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      {/* Profile image */}
      <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg bg-slate-900">
        <img
          src="/profile.png"
          alt="Abdullah"
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Online indicator dot — positioned outside the image at bottom-right corner */}
      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#10b981] border-2 border-[var(--color-sidebar-bg)] shadow-[0_0_8px_#10b981] animate-online-pulse" />
    </div>
  );
}

/**
 * Bangladesh Flag Component (Red circle on bottle green background)
 */
export function BangladeshFlag({ className = "w-5 h-5" }) {
  return (
    <div className={`rounded-full overflow-hidden border border-slate-300/30 shadow-xs shrink-0 ${className}`}>
      <svg viewBox="0 0 512 512" className="w-full h-full object-cover">
        <rect width="512" height="512" fill="#006a4e" />
        <circle cx="230" cy="256" r="140" fill="#f42a41" />
      </svg>
    </div>
  );
}

/**
 * USA Flag Component
 */
export function UsFlag({ className = "w-5 h-5" }) {
  return (
    <div className={`rounded-full overflow-hidden border border-slate-300/30 shadow-xs shrink-0 ${className}`}>
      <svg viewBox="0 0 512 512" className="w-full h-full object-cover">
        <path fill="#bd3d44" d="M0 0h512v512H0z"/>
        <path stroke="#fff" strokeWidth="37" d="M0 55h512M0 129h512M0 203h512M0 277h512M0 351h512M0 425h512"/>
        <path fill="#192f5d" d="M0 0h256v256H0z"/>
        <circle cx="128" cy="128" r="70" fill="#fff" opacity="0.9"/>
      </svg>
    </div>
  );
}

/**
 * Hexagonal Data Analyst illustration with monitor, graphs, and desk lines matching Image 1
 */
export function DataAnalystIllustration({ className = "w-44 h-44" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-sm">
        <defs>
          {/* Hexagon background gradient matching Image 1 */}
          <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="50%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        {/* Rounded Hexagon Background */}
        <path
          d="M 100 12 
             L 175 55 A 14 14 0 0 1 183 67 
             L 183 133 A 14 14 0 0 1 175 145 
             L 100 188 A 14 14 0 0 1 88 188 
             L 13 145 A 14 14 0 0 1 5 133 
             L 5 67 A 14 14 0 0 1 13 55 
             L 88 12 A 14 14 0 0 1 100 12 Z"
          fill="url(#hexGrad)"
        />

        {/* Computer Monitor Base & Stand */}
        <path d="M 68 144 L 132 144 L 126 135 L 74 135 Z" fill="#0f172a" />
        <rect x="94" y="125" width="12" height="12" fill="#0f172a" />

        {/* Computer Monitor Outer Frame */}
        <rect x="42" y="55" width="116" height="74" rx="8" fill="#0f172a" stroke="#082f49" strokeWidth="2" />

        {/* Monitor Screen Area */}
        <rect x="47" y="60" width="106" height="58" rx="4" fill="#020617" />

        {/* Chart Line with Points */}
        <path
          d="M 54 96 L 72 82 L 90 92 L 110 74 L 128 80 L 144 68"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data Chart 7 Vertical Bars */}
        <rect x="58" y="98" width="5" height="14" rx="1.5" fill="#ffffff" />
        <rect x="70" y="86" width="5" height="26" rx="1.5" fill="#ffffff" />
        <rect x="82" y="92" width="5" height="20" rx="1.5" fill="#ffffff" />
        <rect x="94" y="78" width="5" height="34" rx="1.5" fill="#ffffff" />
        <rect x="106" y="88" width="5" height="24" rx="1.5" fill="#ffffff" />
        <rect x="118" y="72" width="5" height="40" rx="1.5" fill="#ffffff" />
        <rect x="130" y="82" width="5" height="30" rx="1.5" fill="#ffffff" />

        {/* Screen Bottom Strip / Small Tick Marks */}
        <line x1="52" y1="114" x2="148" y2="114" stroke="#1e293b" strokeWidth="2" strokeDasharray="3 2" />

        {/* Desk Shadow Lines Underneath Monitor matching Image 1 */}
        <path d="M 52 166 L 148 166" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
        <path d="M 40 172 L 80 172" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        <path d="M 90 172 L 160 172" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        <circle cx="166" cy="172" r="1.5" fill="#0f172a" opacity="0.85" />
      </svg>
    </div>
  );
}

/**
 * Certification Avatars matching Image 1 & Image 2
 */
export function CertAvatar({ type }) {
  if (type === 'avatar1') {
    // Male professional in suit (Power BI)
    return (
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/70 shadow-sm shrink-0 bg-slate-800 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full object-cover">
          <circle cx="50" cy="50" r="50" fill="#1e293b" />
          <circle cx="50" cy="38" r="18" fill="#fcd34d" />
          <path d="M 46 54 L 50 62 L 54 54 Z" fill="#f59e0b" />
          <path d="M 32 35 C 32 20 68 20 68 35 C 68 24 55 23 50 24 C 44 24 32 26 32 35 Z" fill="#0f172a" />
          <path d="M 22 100 C 22 75 35 64 50 64 C 65 64 78 75 78 100 Z" fill="#0f172a" />
          <polygon points="50,64 42,75 58,75" fill="#ffffff" />
          <polygon points="50,75 47,95 53,95" fill="#dc2626" />
        </svg>
      </div>
    );
  }

  if (type === 'avatar2') {
    // Young instructor photo (MySirG.com) matching Image 2
    return (
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/80 shadow-md shrink-0 bg-amber-700 flex items-center justify-center relative">
        <svg viewBox="0 0 100 100" className="w-full h-full object-cover">
          {/* Background cozy blurred library tone */}
          <rect width="100" height="100" fill="#78350f" />
          <circle cx="80" cy="20" r="30" fill="#b45309" opacity="0.6" />
          <circle cx="20" cy="30" r="25" fill="#d97706" opacity="0.4" />
          
          {/* Head & Skin */}
          <circle cx="50" cy="40" r="20" fill="#fed7aa" />
          
          {/* Hair */}
          <path d="M 30 36 C 30 18 70 18 70 36 C 70 24 58 20 50 20 C 40 20 30 25 30 36 Z" fill="#1c1917" />
          
          {/* Eyes, Glasses and Smile */}
          <circle cx="43" cy="38" r="2" fill="#1c1917" />
          <circle cx="57" cy="38" r="2" fill="#1c1917" />
          <path d="M 45 48 Q 50 52 55 48" stroke="#7c2d12" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Striped Navy/Orange Polo Shirt matching screenshot */}
          <path d="M 18 100 C 18 70 32 60 50 60 C 68 60 82 70 82 100 Z" fill="#1e3a8a" />
          {/* Orange stripes */}
          <line x1="32" y1="65" x2="32" y2="100" stroke="#f97316" strokeWidth="3" />
          <line x1="44" y1="62" x2="44" y2="100" stroke="#ffffff" strokeWidth="2" />
          <line x1="56" y1="62" x2="56" y2="100" stroke="#ffffff" strokeWidth="2" />
          <line x1="68" y1="65" x2="68" y2="100" stroke="#f97316" strokeWidth="3" />
        </svg>
      </div>
    );
  }

  // IBM Logo on black circle matching Image 2 & 3
  return (
    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/80 shadow-md shrink-0 bg-black flex items-center justify-center p-2">
      <svg viewBox="0 0 100 45" className="w-full">
        {/* Authentic IBM 8-bar striped logo */}
        <g fill="#ffffff">
          {/* 'I' */}
          <rect x="8" y="2" width="16" height="3" />
          <rect x="8" y="7" width="16" height="3" />
          <rect x="12" y="12" width="8" height="3" />
          <rect x="12" y="17" width="8" height="3" />
          <rect x="12" y="22" width="8" height="3" />
          <rect x="12" y="27" width="8" height="3" />
          <rect x="8" y="32" width="16" height="3" />
          <rect x="8" y="37" width="16" height="3" />

          {/* 'B' */}
          <rect x="30" y="2" width="22" height="3" />
          <rect x="30" y="7" width="26" height="3" />
          <rect x="30" y="12" width="9" height="3" /><rect x="47" y="12" width="9" height="3" />
          <rect x="30" y="17" width="24" height="3" />
          <rect x="30" y="22" width="24" height="3" />
          <rect x="30" y="27" width="9" height="3" /><rect x="47" y="27" width="9" height="3" />
          <rect x="30" y="32" width="26" height="3" />
          <rect x="30" y="37" width="22" height="3" />

          {/* 'M' */}
          <rect x="62" y="2" width="7" height="3" /><rect x="85" y="2" width="7" height="3" />
          <rect x="62" y="7" width="9" height="3" /><rect x="73" y="7" width="8" height="3" /><rect x="83" y="7" width="9" height="3" />
          <rect x="62" y="12" width="7" height="3" /><rect x="75" y="12" width="4" height="3" /><rect x="85" y="12" width="7" height="3" />
          <rect x="62" y="17" width="7" height="3" /><rect x="75" y="17" width="4" height="3" /><rect x="85" y="17" width="7" height="3" />
          <rect x="62" y="22" width="7" height="3" /><rect x="85" y="22" width="7" height="3" />
          <rect x="62" y="27" width="7" height="3" /><rect x="85" y="27" width="7" height="3" />
          <rect x="62" y="32" width="7" height="3" /><rect x="85" y="32" width="7" height="3" />
          <rect x="62" y="37" width="7" height="3" /><rect x="85" y="37" width="7" height="3" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Clean SVG Brand Icons
 */
export function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/**
 * Icons for Personal Interests matching Image 3
 */
export function InterestIcon({ type }) {
  switch (type) {
    case 'searchChart':
      // Magnifying glass with chart bars inside
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--color-text-primary)]">
          <circle cx="10.5" cy="10.5" r="7.5" />
          <path d="M21 21l-5.2-5.2" />
          <line x1="8" y1="13" x2="8" y2="10" strokeWidth="2.5" />
          <line x1="10.5" y1="13" x2="10.5" y2="8" strokeWidth="2.5" />
          <line x1="13" y1="13" x2="13" y2="11" strokeWidth="2.5" />
        </svg>
      );
    case 'laptopCode':
      // Laptop with < > on display
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--color-text-primary)]">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M2 20h20" />
          <path d="M9 8.5L7 10l2 1.5" />
          <path d="M15 8.5l2 1.5-2 1.5" />
        </svg>
      );
    case 'barChart':
      // 3 clean vertical chart bars
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--color-text-primary)]">
          <rect x="4" y="11" width="3.5" height="9" rx="1" />
          <rect x="10.25" y="6" width="3.5" height="14" rx="1" />
          <rect x="16.5" y="9" width="3.5" height="11" rx="1" />
        </svg>
      );
    case 'pieChart':
      // Pie chart with slice
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--color-text-primary)]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1H12V2z" />
          <path d="M14 2.05V10h7.95C21.46 5.8 18.2 2.54 14 2.05z" />
        </svg>
      );
    case 'database':
      // 3 stacked database cylinders
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--color-text-primary)]">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4" />
          <path d="M3 17v2c0 1.66 4.03 3 9 3s9-1.34 9-3v-2" />
        </svg>
      );
    case 'heart':
      // Solid heart
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--color-text-primary)]">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
    default:
      return null;
  }
}
