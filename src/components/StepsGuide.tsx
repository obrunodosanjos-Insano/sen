import React from 'react';
import { 
  Users2, 
  ClipboardCheck, 
  PackageOpen, 
  SplitSquareVertical, 
  ExternalLink
} from 'lucide-react';

export const StepsGuide: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Formar o Núcleo (Estudantes e Mentores)',
      desc: 'Reúna estudantes dentro da faixa etária da categoria desejada e pelo menos 2 mentores adultos responsáveis (professores, pais ou engenheiros voluntários).',
      tag: 'Equipe e Mentoria',
      icon: Users2,
    },
    {
      num: '02',
      title: 'Registro no Portal Oficial e SESI',
      desc: 'Faça o cadastro da equipe no portal internacional FIRST Inspires e acompanhe as inscrições para as etapas regionais no site do SESI Robótica Brasil.',
      tag: 'Inscrição Oficial',
      icon: ClipboardCheck,
    },
    {
      num: '03',
      title: 'Aquisição do Kit e Arena de Treino',
      desc: 'Adquira o kit inicial e o conjunto de elementos de arena da temporada (Game Set / Challenge Set) para praticar na escola ou espaço comunitário.',
      tag: 'Materiais & Arena',
      icon: PackageOpen,
    },
    {
      num: '04',
      title: 'Estruturação das Sub-Áreas da Equipe',
      desc: 'Divida os integrantes em áreas de atuação: Mecânica/Construção, Programação/Elétrica, Mídias/Marketing e Gestão/Projeto de Inovação.',
      tag: 'Organização Interna',
      icon: SplitSquareVertical,
    },
  ];

  return (
    <section id="como-participar" className="py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Passo a Passo Prático</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            Como Criar uma Equipe no Brasil
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
            Qualquer escola pública, privada, grupo de garagem ou organização social pode formar uma equipe oficial.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800/90 rounded-none border border-slate-200 dark:border-slate-700 p-6 sm:p-7 shadow-xs hover:border-slate-300 dark:hover:border-slate-600 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-none bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white uppercase tracking-wider">
                      Passo {step.num}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-display">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Banner SESI */}
        <div className="rounded-none border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Operador Oficial no Brasil
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              SESI Robótica Brasil
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              Consulte os editais abertos, o cronograma das etapas regionais e o Festival Nacional de Robótica.
            </p>
          </div>

          <a
            href="http://portaldaindustria.com.br/sesi/canais/torneio-de-robotica/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-none bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-black dark:hover:bg-slate-100 font-bold text-sm shadow-xs transition-all whitespace-nowrap flex-shrink-0"
          >
            <span>Acessar Portal do SESI</span>
            <ExternalLink className="w-4 h-4 text-white dark:text-slate-900" />
          </a>
        </div>
      </div>
    </section>
  );
};
