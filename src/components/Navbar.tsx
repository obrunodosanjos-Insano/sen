import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Globe, Award, Sparkles } from 'lucide-react';
import { FirstLogo } from './FirstLogo';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe a navbar somente quando o usuário rolar mais de 120px para baixo
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md transition-all duration-300 transform ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Utility Top Bar */}
      <div className="bg-slate-50 text-slate-600 text-[11px] font-medium py-1.5 px-4 border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
              <Globe className="w-3 h-3 text-slate-600" />
              <span>FIRST® Inspires Brasil</span>
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-slate-500">
              Operação Oficial de Torneios por <strong>SESI Robótica</strong>
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <a
              href="https://www.firstinspires.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors flex items-center gap-1"
            >
              <span>firstinspires.org</span>
              <ArrowUpRight className="w-2.5 h-2.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-none bg-slate-900 flex items-center justify-center p-2 shadow-xs group-hover:bg-black transition-colors">
            <FirstLogo className="w-full h-full text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-slate-900 tracking-tight text-lg font-display">FIRST®</span>
              <span className="text-slate-500 font-normal text-sm">Brasil</span>
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              More Than Robots®
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-slate-700">
          <a
            href="#programas"
            className="px-3.5 py-2 rounded-none hover:text-black hover:bg-slate-50 transition-colors"
          >
            Programas
          </a>
          <a
            href="#sobre"
            className="px-3.5 py-2 rounded-none hover:text-black hover:bg-slate-50 transition-colors"
          >
            Sobre a FIRST
          </a>
          <a
            href="#impacto"
            className="px-3.5 py-2 rounded-none hover:text-black hover:bg-slate-50 transition-colors"
          >
            Impacto & Bolsas
          </a>
          <a
            href="#comparativo"
            className="px-3.5 py-2 rounded-none hover:text-black hover:bg-slate-50 transition-colors"
          >
            Comparativo
          </a>
          <a
            href="#como-participar"
            className="px-3.5 py-2 rounded-none hover:text-black hover:bg-slate-50 transition-colors"
          >
            Como Iniciar
          </a>
          <a
            href="#galeria"
            className="px-3.5 py-2 rounded-none hover:text-black hover:bg-slate-50 transition-colors text-slate-900 font-bold"
          >
            Galeria & Fotos
          </a>
          <a
            href="#faq"
            className="px-3.5 py-2 rounded-none hover:text-black hover:bg-slate-50 transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="http://portaldaindustria.com.br/sesi/canais/torneio-de-robotica/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-none bg-slate-900 hover:bg-black text-white transition-all shadow-xs"
          >
            <span>Torneios SESI</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-none text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label="Menu de Navegação"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-3 space-y-1 text-sm font-semibold text-slate-700 shadow-lg">
          <a
            href="#programas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-none hover:bg-slate-50"
          >
            Programas (FLL, FTC, FRC)
          </a>
          <a
            href="#sobre"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-none hover:bg-slate-50"
          >
            Sobre a FIRST & Filosofia
          </a>
          <a
            href="#impacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-none hover:bg-slate-50"
          >
            Impacto Comprovado & Bolsas
          </a>
          <a
            href="#comparativo"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-none hover:bg-slate-50"
          >
            Tabela Comparativa
          </a>
          <a
            href="#como-participar"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-none hover:bg-slate-50"
          >
            Como Criar uma Equipe
          </a>
          <a
            href="#galeria"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-none hover:bg-slate-50 text-slate-900 font-bold"
          >
            Galeria & Fotos da Equipe
          </a>
          <a
            href="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-none hover:bg-slate-50"
          >
            Dúvidas Frequentes
          </a>
          <div className="pt-2 border-t border-slate-100">
            <a
              href="http://portaldaindustria.com.br/sesi/canais/torneio-de-robotica/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-none bg-slate-900 hover:bg-black text-white text-xs font-bold"
            >
              <span>Acessar Portal do SESI Robótica</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
