import React from 'react';

interface FrcLogoProps {
  className?: string;
  variant?: 'full' | 'emblem' | 'horizontal';
  showText?: boolean;
}

export const FrcLogo: React.FC<FrcLogoProps> = ({
  className = 'w-auto h-12',
  variant = 'full',
  showText = true,
}) => {
  if (variant === 'emblem') {
    return (
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="FIRST Robotics Competition Emblem"
      >
        <defs>
          <linearGradient id="frcSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
          <linearGradient id="frcRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="frcBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0066B2" />
          </linearGradient>
          <filter id="frcDrop" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0f172a" floodOpacity="0.15" />
          </filter>
        </defs>

        <g filter="url(#frcDrop)">
          {/* 3D Extrusion Behind (Darker Shadows) */}
          {/* Triangle shadow bevel */}
          <polygon points="56,12 51,14 27,94 33,94" fill="#64748B" />
          <polygon points="56,12 33,94 44,94 62,35" fill="#475569" opacity="0.6" />

          {/* Central Metallic Ring 3D */}
          <ellipse cx="78" cy="62" rx="28" ry="24" stroke="#64748B" strokeWidth="9" fill="none" />
          <ellipse cx="78" cy="62" rx="28" ry="24" stroke="url(#frcSilverGrad)" strokeWidth="7" fill="none" />

          {/* Left Red 3D Isometric Triangle */}
          <g>
            {/* 3D Left side extrusion */}
            <polygon points="56,12 50,14 25,92 33,94" fill="#94A3B8" />
            {/* Front Red Triangle Frame */}
            <path
              d="M58,15 L28,92 L80,72 Z"
              fill="none"
              stroke="url(#frcRedGrad)"
              strokeWidth="9"
              strokeLinejoin="miter"
            />
          </g>

          {/* Right Blue 3D Isometric Diamond/Square */}
          <g>
            {/* 3D Bottom right extrusion */}
            <polygon points="124,62 127,65 98,102 93,98" fill="#475569" />
            {/* Front Blue Square Frame */}
            <path
              d="M92,16 L124,58 L94,100 L64,60 Z"
              fill="none"
              stroke="url(#frcBlueGrad)"
              strokeWidth="9"
              strokeLinejoin="miter"
            />
          </g>
        </g>
      </svg>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Emblem */}
        <svg
          viewBox="0 0 160 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto flex-shrink-0"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="frcSilverGradH" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="50%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
            <linearGradient id="frcRedGradH" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
            <linearGradient id="frcBlueGradH" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#009FE3" />
              <stop offset="100%" stopColor="#0066B2" />
            </linearGradient>
          </defs>
          <ellipse cx="78" cy="62" rx="28" ry="24" stroke="url(#frcSilverGradH)" strokeWidth="8" fill="none" />
          <path
            d="M58,15 L28,92 L80,72 Z"
            fill="none"
            stroke="url(#frcRedGradH)"
            strokeWidth="9"
            strokeLinejoin="miter"
          />
          <path
            d="M92,16 L124,58 L94,100 L64,60 Z"
            fill="none"
            stroke="url(#frcBlueGradH)"
            strokeWidth="9"
            strokeLinejoin="miter"
          />
        </svg>

        {/* Typography */}
        {showText && (
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-0.5">
              <span className="font-black italic text-slate-900 tracking-tight text-lg leading-none font-display">
                FIRST
              </span>
              <span className="text-[9px] font-bold text-slate-700 leading-none">®</span>
            </div>
            <span className="font-black text-[#009FE3] text-xs uppercase tracking-tight leading-tight">
              ROBOTICS COMPETITION
            </span>
          </div>
        )}
      </div>
    );
  }

  // Full Stacked Logo (Exact Match to uploaded image)
  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* 3D Geometric Emblem */}
      <svg
        viewBox="0 0 160 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-h-24 object-contain"
        aria-label="FIRST Robotics Competition 3D Emblem"
      >
        <defs>
          <linearGradient id="frcSilverMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="40%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
          <linearGradient id="frcRedFront" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="frcBlueFront" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#009FE3" />
            <stop offset="100%" stopColor="#0066B2" />
          </linearGradient>
        </defs>

        {/* 3D Shadows / Thickness */}
        <polygon points="56,12 48,15 24,93 32,95" fill="#64748B" opacity="0.8" />
        <polygon points="123,59 129,63 99,103 94,98" fill="#475569" opacity="0.8" />

        {/* Center Silver Ring */}
        <ellipse cx="78" cy="62" rx="27" ry="23" stroke="#475569" strokeWidth="8" fill="none" opacity="0.4" />
        <ellipse cx="78" cy="62" rx="27" ry="23" stroke="url(#frcSilverMain)" strokeWidth="7" fill="none" />

        {/* Red Triangle */}
        <path
          d="M58,15 L27,92 L80,72 Z"
          fill="none"
          stroke="url(#frcRedFront)"
          strokeWidth="9.5"
          strokeLinejoin="miter"
        />

        {/* Blue Square Diamond */}
        <path
          d="M92,16 L124,58 L94,100 L64,60 Z"
          fill="none"
          stroke="url(#frcBlueFront)"
          strokeWidth="9.5"
          strokeLinejoin="miter"
        />
      </svg>

      {/* Text block from the logo */}
      {showText && (
        <div className="mt-1 flex flex-col items-center">
          {/* FIRST® */}
          <div className="flex items-center justify-center leading-none">
            <span className="font-black italic text-slate-900 tracking-tighter text-2xl sm:text-3xl font-display uppercase">
              FIRST
            </span>
            <span className="text-[10px] font-bold text-slate-900 ml-0.5 mb-2.5">®</span>
          </div>

          {/* ROBOTICS */}
          <span className="font-black text-[#009FE3] text-sm sm:text-base tracking-normal uppercase leading-none mt-0.5">
            ROBOTICS
          </span>

          {/* COMPETITION */}
          <span className="font-black text-[#009FE3] text-sm sm:text-base tracking-normal uppercase leading-none mt-0.5">
            COMPETITION
          </span>
        </div>
      )}
    </div>
  );
};
