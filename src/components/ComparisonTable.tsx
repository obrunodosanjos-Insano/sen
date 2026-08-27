import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { FrcLogo } from './FrcLogo';

export const ComparisonTable: React.FC = () => {
  const rows = [
    {
      label: 'Faixa Etária Oficial',
      fll: '9 a 16 anos (Ensino Fundamental II)',
      ftc: '12 a 18 anos (Fundamental II ao Médio)',
      frc: '14 a 18 anos (Ensino Médio e Técnico)',
    },
    {
      label: 'Tamanho Típico da Equipe',
      fll: '2 a 10 estudantes',
      ftc: '4 a 15 estudantes',
      frc: '10 a 50+ estudantes',
    },
    {
      label: 'Peso Médio do Robô',
      fll: '1 a 2 kg',
      ftc: 'Até 15 kg (~35 lbs)',
      frc: 'Até 56 kg (125 lbs sem bateria/bumpers)',
    },
    {
      label: 'Dimensões Iniciais',
      fll: 'Compacto (área de inspeção LEGO)',
      ftc: 'Cubo de 45,7 cm (18 polegadas)',
      frc: 'Perímetro do chassi até ~300 cm',
    },
    {
      label: 'Controlador (Cérebro)',
      fll: 'LEGO® SPIKE™ Prime Hub / EV3',
      ftc: 'REV Control Hub (base Android)',
      frc: 'NI roboRIO 2.0 (National Instruments)',
    },
    {
      label: 'Linguagens de Programação',
      fll: 'Word Blocks (Scratch) ou Python',
      ftc: 'Java (Android Studio) ou Blocks',
      frc: 'Java (WPILib), C++ ou Python',
    },
    {
      label: 'Duração da Partida',
      fll: '2m30s (100% Autônomo)',
      ftc: '2m30s (30s Autônomo + 2m Drivers)',
      frc: '2m30s (15s Autônomo + 2m15s Drivers)',
    },
    {
      label: 'Formato da Competição',
      fll: '1 robô por mesa de tapete (2,4m × 1,2m)',
      ftc: 'Alianças 2v2 em arena fechada (3,6m × 3,6m)',
      frc: 'Alianças 3v3 em quadra (~16m × 8m)',
    },
    {
      label: 'Componente Extracampo',
      fll: 'Projeto de Inovação Científica',
      ftc: 'Caderno de Engenharia (Portfolio)',
      frc: 'Gestão Empresarial & Impacto Comunitário',
    },
    {
      label: 'Complexidade de Fabricação',
      fll: 'Montagem com peças plásticas de encaixe',
      ftc: 'Perfis de alumínio, impressão 3D e usinagem leve',
      frc: 'Usinagem pesada CNC, corte a laser, Swerve e solda',
    },
  ];

  return (
    <section id="comparativo" className="py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200 dark:border-slate-700">
            <Layers className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
            <span>Matriz Comparativa</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            Comparativo Direto entre as Modalidades
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2">
            Visão consolidada para comparar regras, materiais e requisitos de cada programa.
          </p>
        </div>

        {/* Table wrapper */}
        <div className="overflow-hidden rounded-none border border-slate-200 dark:border-slate-700 shadow-xs bg-white dark:bg-slate-800/90">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-display">
                  <th className="py-4 px-5 font-bold w-1/4">Aspecto / Requisito</th>
                  <th className="py-4 px-5 font-bold text-slate-900 dark:text-white w-1/4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-none bg-slate-900 dark:bg-white inline-block" />
                      <span>FLL Challenge</span>
                    </div>
                  </th>
                  <th className="py-4 px-5 font-bold text-slate-900 dark:text-white w-1/4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-none bg-slate-700 dark:bg-slate-300 inline-block" />
                      <span>FTC</span>
                    </div>
                  </th>
                  <th className="py-4 px-5 font-bold text-slate-900 dark:text-white w-1/4">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-5 flex items-center">
                        <FrcLogo variant="emblem" className="h-full w-full" />
                      </div>
                      <span>FRC</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/80 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-850">
                {rows.map((row, index) => (
                  <tr 
                    key={index}
                    className={
                      index % 2 === 0 
                        ? 'bg-white dark:bg-slate-800/40 hover:bg-slate-50/70 dark:hover:bg-slate-800/80' 
                        : 'bg-slate-50/40 dark:bg-slate-800/70 hover:bg-slate-50/90 dark:hover:bg-slate-800'
                    }
                  >
                    <td className="py-3.5 px-5 font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
                      {row.label}
                    </td>
                    <td className="py-3.5 px-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {row.fll}
                    </td>
                    <td className="py-3.5 px-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {row.ftc}
                    </td>
                    <td className="py-3.5 px-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {row.frc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note underneath table */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-2">
          <span>* Todas as categorias são regidas pelos mesmos Core Values e espírito de Coopertition®.</span>
          <span className="hidden sm:inline">Atualizado conforme manuais oficiais da FIRST.</span>
        </div>
      </div>
    </section>
  );
};
