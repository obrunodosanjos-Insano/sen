import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { ImpactSection } from './components/ImpactSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ComparisonTable } from './components/ComparisonTable';
import { StepsGuide } from './components/StepsGuide';
import { PhotoUploadSection } from './components/PhotoUploadSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* 1. Header & Navigation (FIRST Inspires authentic top bar + navbar) */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 2. Hero Section (More Than Robots & PreK-12 Progression) */}
        <Hero />

        {/* 3. Filosofia FIRST, Dr. Woodie Flowers & Valores Fundamentais */}
        <Philosophy />

        {/* 4. Impacto Comprovado, Bolsas Universitárias ($80M+) e Formação STEM */}
        <ImpactSection />

        {/* 5. As 3 Categorias Oficiais em Detalhe (FLL, FTC, FRC) */}
        <CategoriesSection />

        {/* 6. Matriz Comparativa Direta */}
        <ComparisonTable />

        {/* 7. Guia Oficial: Como Criar uma Equipe no Brasil (SESI) */}
        <StepsGuide />

        {/* 8. Campo para Adicionar Fotos da Equipe & Robôs */}
        <PhotoUploadSection />

        {/* 9. Perguntas Frequentes & Termos Essenciais */}
        <FaqSection />
      </main>

      {/* 10. Institutional Footer */}
      <Footer />
    </div>
  );
}
