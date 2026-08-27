import React from 'react';

interface SenaiLogoProps {
  className?: string;
  variant?: 'banner' | 'badge';
}

export const SenaiLogo: React.FC<SenaiLogoProps> = ({ className = 'h-7 w-auto', variant = 'banner' }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`} title="SENAI - Serviço Nacional de Aprendizagem Industrial">
      <svg
        viewBox="0 0 480 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-h-full object-contain"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Fundo Vermelho Oficial SENAI */}
        <rect width="480" height="120" fill="#E30613" />

        {/* 5 Listras Brancas da Esquerda */}
        <line x1="0" y1="18" x2="26" y2="18" stroke="#FFFFFF" strokeWidth="3.5" />
        <line x1="0" y1="39" x2="26" y2="39" stroke="#FFFFFF" strokeWidth="3.5" />
        <line x1="0" y1="60" x2="26" y2="60" stroke="#FFFFFF" strokeWidth="3.5" />
        <line x1="0" y1="81" x2="26" y2="81" stroke="#FFFFFF" strokeWidth="3.5" />
        <line x1="0" y1="102" x2="26" y2="102" stroke="#FFFFFF" strokeWidth="3.5" />

        {/* 5 Listras Brancas da Direita */}
        <line x1="454" y1="18" x2="480" y2="18" stroke="#FFFFFF" strokeWidth="3.5" />
        <line x1="454" y1="39" x2="480" y2="39" stroke="#FFFFFF" strokeWidth="3.5" />
        <line x1="454" y1="60" x2="480" y2="60" stroke="#FFFFFF" strokeWidth="3.5" />
        <line x1="454" y1="81" x2="480" y2="81" stroke="#FFFFFF" strokeWidth="3.5" />
        <line x1="454" y1="102" x2="480" y2="102" stroke="#FFFFFF" strokeWidth="3.5" />

        {/* Letreiro SENAI em Branco Negrito Itálico com Kerning Preciso */}
        <text
          x="240"
          y="88"
          fill="#FFFFFF"
          textAnchor="middle"
          style={{
            fontFamily: "'Arial Black', 'Montserrat', 'Helvetica Neue', sans-serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: '94px',
            letterSpacing: '1px',
          }}
        >
          SENAI
        </text>
      </svg>
    </div>
  );
};
