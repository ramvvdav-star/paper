import React from 'react';
import { Question } from '../types';
import { DiagramRenderer } from './DiagramRenderer';

interface QuestionCardProps {
  question: Question;
  showAnswers?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, showAnswers = false }) => {
  const isMatch = question.type === 'match' && question.listI && question.listII;
  const hasDiagram = !!question.diagramType;

  return (
    <div className="py-1 text-[12.5px] sm:text-[13px] leading-[1.55] text-black font-normal break-inside-avoid exam-font select-text">
      {/* Question Header & Prompt */}
      <div>
        <div className="flex justify-between items-baseline gap-2">
          <span className="font-bold whitespace-nowrap text-[13px] sm:text-[13.5px]">{question.id}.</span>
          <span className="flex-1 font-serif text-justify">{question.question}</span>
        </div>
        <div className="text-right text-[10px] sm:text-[10.5px] font-bold text-stone-900 tracking-tight mt-0.5">
          [{question.ncertPage}]
        </div>
      </div>

      {/* SVG Diagram if applicable */}
      {hasDiagram && (
        <div className="my-1.5">
          <DiagramRenderer diagramType={question.diagramType} />
        </div>
      )}

      {/* Match Table if applicable */}
      {isMatch && (
        <div className="my-2 border border-black/70 rounded-xs overflow-hidden text-[11px]">
          <div className="grid grid-cols-2 bg-stone-100 font-bold border-b border-black/70 px-2 py-1">
            <div>{question.listName1 || 'List-I'}</div>
            <div>{question.listName2 || 'List-II'}</div>
          </div>
          <div className="divide-y divide-black/30">
            {question.listI!.map((item, idx) => {
              const item2 = question.listII![idx];
              return (
                <div key={idx} className="grid grid-cols-2 px-2 py-0.5">
                  <div>
                    <span className="font-bold mr-1">{item.id}.</span>
                    <span>{item.text}</span>
                  </div>
                  <div>
                    {item2 && (
                      <>
                        <span className="font-bold mr-1">{item2.id}.</span>
                        <span>{item2.text}</span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Statements List if applicable */}
      {question.statements && question.statements.length > 0 && (
        <div className="my-1.5 space-y-1 pl-3 text-[12px]">
          {question.statements.map((st) => (
            <div key={st.id} className="flex items-start gap-1.5">
              <span className="font-bold">({st.id})</span>
              <span>{st.text}</span>
            </div>
          ))}
        </div>
      )}

      {/* Options */}
      <div className="mt-1.5 space-y-1 pl-2 text-[12px]">
        {question.options.some(opt => opt.length > 35) ? (
          // Stacked options
          question.options.map((opt, idx) => {
            const optNum = idx + 1;
            const isCorrect = showAnswers && question.correctAnswer === optNum;
            return (
              <div
                key={idx}
                className={`flex items-start gap-1.5 py-0.5 rounded-xs px-1 ${
                  isCorrect ? 'bg-emerald-100 font-bold text-emerald-900 border border-emerald-500' : ''
                }`}
              >
                <span className="font-bold">({optNum})</span>
                <span className="flex-1">{opt}</span>
              </div>
            );
          })
        ) : (
          // 2x2 compact grid
          <div className="grid grid-cols-2 gap-x-3 gap-y-1">
            {question.options.map((opt, idx) => {
              const optNum = idx + 1;
              const isCorrect = showAnswers && question.correctAnswer === optNum;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-1.5 py-0.5 rounded-xs px-1 ${
                    isCorrect ? 'bg-emerald-100 font-bold text-emerald-900 border border-emerald-500' : ''
                  }`}
                >
                  <span className="font-bold">({optNum})</span>
                  <span className="truncate">{opt}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Explanation when showAnswers is enabled */}
      {showAnswers && question.explanation && (
        <div className="mt-2 p-1.5 bg-amber-50/80 border border-amber-300 rounded text-[11px] text-amber-950">
          <span className="font-bold">Ans ({question.correctAnswer}): </span>
          <span>{question.explanation}</span>
        </div>
      )}
    </div>
  );
};
