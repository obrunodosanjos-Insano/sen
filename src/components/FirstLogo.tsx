import React from 'react';

export const FirstLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* FIRST iconic geometric mark: Triangle (Blue), Circle (Red), Square/Bar */}
      <polygon points="50,10 90,80 10,80" fill="#0066B2" />
      <circle cx="50" cy="55" r="22" fill="#ED1C24" />
      <rect x="36" y="42" width="28" height="28" rx="4" fill="#F57E25" />
    </svg>
  );
};
