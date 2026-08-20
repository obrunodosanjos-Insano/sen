import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, CheckCircle2, RotateCcw, ArrowRight, Bot, Award, Trophy, Layers } from 'lucide-react';
import { QUIZ_QUESTIONS, FIRST_CATEGORIES } from '../data/firstData';
import { CategoryId } from '../types';

interface CategoryQuizProps {
  onSelectCategory: (cat: CategoryId) => void;
  onClose?: () => void;
}

export const CategoryQuiz: React.FC<CategoryQuizProps> = ({ onSelectCategory, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [scores, setScores] = useState<{ fll: number; ftc: number; frc: number }>({
    fll: 0,
    ftc: 0,
    frc: 0,
  });
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    setSelectedOptionIndex(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOptionIndex === null) return;

    const chosenOption = currentQuestion.options[selectedOptionIndex];
    const newScores = {
      fll: scores.fll + chosenOption.categoryScore.fll,
      ftc: scores.ftc + chosenOption.categoryScore.ftc,
      frc: scores.frc + chosenOption.categoryScore.frc,
    };

    setScores(newScores);
    setSelectedOptionIndex(null);

    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      // Trigger festive confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Safe fallback
      }
    }
  };

  const handleRestart = () => {
    setScores({ fll: 0, ftc: 0, frc: 0 });
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsCompleted(false);
  };

  // Determine top winning category
  const getWinningCategory = (): CategoryId => {
    if (scores.fll >= scores.ftc && scores.fll >= scores.frc) return 'fll';
    if (scores.ftc >= scores.fll && scores.ftc >= scores.frc) return 'ftc';
    return 'frc';
  };

  const winningCategory = FIRST_CATEGORIES[getWinningCategory()];

  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl">
      {!isCompleted ? (
        <div className="space-y-8">
          {/* Header & Progress Indicator */}
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
              <span className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Diagnóstico Personalizado
              </span>
              <span>
                Pergunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 rounded-full"
                style={{
                  width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {currentQuestion.question}
            </h3>
            <p className="text-sm text-slate-400">{currentQuestion.context}</p>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQuestion.options.map((opt, idx) => {
              const isSelected = selectedOptionIndex === idx;
              return (
                <button
                  key={idx}
                  id={`quiz-opt-${currentQuestion.id}-${idx}`}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full p-4 sm:p-5 rounded-2xl text-left border transition-all duration-150 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div
                    className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500 text-slate-950'
                        : 'border-slate-600'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-4 h-4 fill-slate-950 text-white" />}
                  </div>
                  <div>
                    <span className="font-bold text-white text-base block mb-0.5">
                      {opt.label}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-400 leading-relaxed block">
                      {opt.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="flex justify-end pt-4">
            <button
              id="quiz-next-btn"
              disabled={selectedOptionIndex === null}
              onClick={handleNextQuestion}
              className={`flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg transition-all ${
                selectedOptionIndex !== null
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20 cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              }`}
            >
              <span>
                {currentQuestionIndex + 1 === QUIZ_QUESTIONS.length
                  ? 'Ver Recomendação Final'
                  : 'Próxima Pergunta'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Completed Result Card */
        <div className="text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-3xl bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center shadow-lg">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Resultado do Seu Diagnóstico
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              A Categoria Ideal Para Você é a{' '}
              <span className="text-amber-400">{winningCategory.acronym}</span>!
            </h3>
            <p className="text-base text-slate-300 max-w-xl mx-auto mt-2">
              Com base nas suas respostas de faixa etária, espaço, orçamento e tamanho da equipe, o{' '}
              <strong>{winningCategory.name}</strong> é o melhor ponto de partida.
            </p>
          </div>

          {/* Winning Category Summary Card */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <span className="font-extrabold text-white text-lg">{winningCategory.name}</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold">
                {winningCategory.ageRange}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{winningCategory.fullDesc}</p>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-slate-400 block mb-0.5">Tecnologia / Hardware:</span>
                <strong className="text-slate-200">{winningCategory.hardwareKit}</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                <span className="text-slate-400 block mb-0.5">Investimento Estimado:</span>
                <strong className="text-slate-200">{winningCategory.estimatedBudget}</strong>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="quiz-view-category-details"
              onClick={() => onSelectCategory(winningCategory.id)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <span>Ver Guia Completo da {winningCategory.acronym}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="quiz-restart-btn"
              onClick={handleRestart}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm border border-slate-700 flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
