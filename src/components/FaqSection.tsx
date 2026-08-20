import React, { useState } from 'react';
import { HelpCircle, ChevronDown, BookOpen } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Qualquer escola pode participar ou apenas unidades do SESI/SENAI?',
      a: 'Qualquer escola pública, escola privada, grupo comunitário de garagem ou organização sem fins lucrativos pode formar uma equipe e se inscrever nas etapas regionais oficiais.',
    },
    {
      q: 'O que é a "Pit Area" (Área de Boxes)?',
      a: 'É o espaço de oficina de cada equipe dentro do evento oficial. Funciona como os boxes da Fórmula 1: local onde os alunos fazem manutenções rápidas, calibram sensores, recebem a visita dos jurados e ajudam outras equipes.',
    },
    {
      q: 'O que é "Scouting" nas competições da FIRST?',
      a: 'Scouting é a estratégia de coleta de dados estatísticos em tempo real durante o torneio. Alunos nas arquibancadas registram o desempenho de cada robô em campo (pontuação em autônomo, tempo de ciclo, faltas) para escolher os melhores parceiros de aliança na fase final de playoffs.',
    },
    {
      q: 'O que é a tração "Swerve Drive" no FRC?',
      a: 'É um sistema avançado de tração onde cada uma das quatro rodas gira e é tracionada de forma independente por motores dedicados. Isso permite que o robô translade em qualquer direção enquanto gira simultaneamente no próprio eixo com agilidade máxima.',
    },
    {
      q: 'Qual é o prêmio mais importante da FIRST?',
      a: 'É o FIRST Impact Award (antigo Chairman’s Award no FRC) e o Inspire Award (no FTC). Essas honrarias premiam a equipe que causa a maior transformação positiva e duradoura em sua comunidade, disseminando a ciência e os valores da FIRST.',
    },
    {
      q: 'Como funcionam os temas anuais das temporadas?',
      a: 'Todo ano em setembro/janeiro, a FIRST lança um desafio global temático com regras, arenas e missões inéditas para todas as modalidades (exemplos recentes: FIRST DIVE / SUBMERGED, CENTERSTAGE, CRESCENDO).',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-slate-700" />
            <span>Perguntas Frequentes & Termos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Tudo o que você precisa saber
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Respostas diretas e os principais termos da cultura da robótica competitiva.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-none border border-slate-200/90 bg-white overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-50/80 transition-colors text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-slate-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
