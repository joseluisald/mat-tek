import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  theme?: 'light' | 'dark';
}

export const MatTekLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  theme = 'light',
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    hero: 'w-24 h-24',
  }[size];

  const titleSize = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    hero: 'text-4xl md:text-5xl',
  }[size];

  const subSize = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[11px] tracking-wider',
    lg: 'text-xs tracking-widest',
    hero: 'text-xs md:text-sm tracking-widest',
  }[size];

  const textColor = theme === 'dark' ? 'text-white' : 'text-[#1F2327]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon matching the logo shield, gears, wrench hand and red dynamic arc */}
      <div className={`relative shrink-0 ${iconDimensions} flex items-center justify-center`}>
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dynamic Red Swoosh / Ring */}
          <path
            d="M 148 78 C 148 116 117 148 79 148 C 42 148 14 118 12 82 C 10 50 32 20 62 14 C 54 20 46 29 44 42 C 40 68 62 90 88 90 C 114 90 144 80 148 78 Z"
            fill="#E31B23"
          />
          
          {/* Outer red boundary arc */}
          <path
            d="M 144 82 C 142 120 110 144 76 144 C 42 144 18 116 16 84 C 18 122 46 148 82 148 C 122 148 152 116 144 82 Z"
            fill="#B81219"
          />

          {/* Roof Peak / Workshop chevron in deep red */}
          <path
            d="M 80 18 L 132 58 L 122 66 L 80 34 L 38 66 L 28 58 Z"
            fill="#E31B23"
          />

          {/* Inner dark workshop chamber */}
          <path
            d="M 38 66 L 80 34 L 122 66 L 122 122 L 38 122 Z"
            fill="#1E2227"
          />

          {/* Section Dividers in the emblem */}
          <rect x="63" y="46" width="3" height="76" fill="#FFFFFF" opacity="0.3" />
          <rect x="94" y="46" width="3" height="76" fill="#FFFFFF" opacity="0.3" />

          {/* Left panel: Industrial Gears (white silhouettes) */}
          <g fill="#FFFFFF">
            <circle cx="50" cy="74" r="9" />
            <circle cx="50" cy="74" r="4" fill="#1E2227" />
            {/* Gear teeth */}
            <rect x="48" y="62" width="4" height="4" rx="1" />
            <rect x="48" y="82" width="4" height="4" rx="1" />
            <rect x="38" y="72" width="4" height="4" rx="1" />
            <rect x="58" y="72" width="4" height="4" rx="1" />

            <circle cx="52" cy="100" r="11" />
            <circle cx="52" cy="100" r="5" fill="#1E2227" />
            <rect x="50" y="86" width="4" height="4" rx="1" />
            <rect x="50" y="110" width="4" height="4" rx="1" />
            <rect x="38" y="98" width="4" height="4" rx="1" />
            <rect x="62" y="98" width="4" height="4" rx="1" />
          </g>

          {/* Center panel: Hand Gripping Wrench (strong tool symbol) */}
          <g fill="#FFFFFF">
            {/* Wrench head */}
            <path d="M 79 50 C 73 50 68 55 68 61 C 68 64 69 67 71 69 L 75 65 C 75 62 77 60 80 60 C 83 60 85 62 85 65 L 89 69 C 91 67 92 64 92 61 C 92 55 86 50 79 50 Z" />
            {/* Wrench shaft */}
            <rect x="76" y="66" width="7" height="42" rx="2" />
            {/* Fist fingers gripping shaft */}
            <rect x="70" y="78" width="18" height="4" rx="2" fill="#E31B23" />
            <rect x="71" y="84" width="17" height="4" rx="2" fill="#E31B23" />
            <rect x="72" y="90" width="16" height="4" rx="2" fill="#E31B23" />
            <rect x="73" y="96" width="15" height="4" rx="2" fill="#E31B23" />
          </g>

          {/* Right panel: Screwdriver and Open End Spanner */}
          <g fill="#FFFFFF">
            {/* Screwdriver */}
            <path d="M 103 62 L 107 58 L 109 60 L 105 64 L 106 90 L 103 92 L 100 90 L 101 64 Z" />
            <rect x="101" y="86" width="4" height="24" rx="1.5" />
            
            {/* Spanner wrench */}
            <path d="M 112 66 C 110 66 109 68 109 70 C 109 71 110 72 111 73 L 114 96 L 117 96 L 114 73 C 115 72 116 71 116 70 C 116 68 114 66 112 66 Z" />
          </g>
        </svg>
      </div>

      {/* Brand Typography matching official logo */}
      <div className="flex flex-col">
        <div className={`font-extrabold tracking-tight leading-none ${titleSize} ${textColor} flex items-center`}>
          <span>MAT</span>
          <span className="text-[#E31B23] mx-[2px] font-black">-</span>
          <span>TEK</span>
        </div>

        {showSubtitle && (
          <div className="flex flex-col mt-0.5">
            <span className={`font-bold text-[#E31B23] uppercase ${subSize} leading-tight`}>
              MÁQUINAS • MOTORES • FERRAMENTAS
            </span>
            <span className={`font-semibold text-[#B81219] uppercase ${subSize} leading-tight`}>
              ASSISTÊNCIA TÉCNICA
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
