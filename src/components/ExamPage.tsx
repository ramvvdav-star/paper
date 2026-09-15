import React from 'react';
import { Question } from '../types';
import { QuestionCard } from './QuestionCard';

interface ExamPageProps {
  pageNumber: number;
  questions: Question[];
  showAnswers?: boolean;
}

export const ExamPage: React.FC<ExamPageProps> = ({ pageNumber, questions, showAnswers = false }) => {
  const isOdd = pageNumber % 2 !== 0;

  // Split questions into left and right column
  const leftQuestions = questions.filter(q => q.column === 'left');
  const rightQuestions = questions.filter(q => q.column === 'right');

  // Check section start banners
  const isPhysicsStart = pageNumber === 2;
  const isChemStart = pageNumber === 7;
  const isBioStart = pageNumber === 12;
  const isLastPage = pageNumber === 20;

  return (
    <div className="a4-sheet p-8 exam-font text-black flex flex-col justify-between select-text">
      {/* Top Section: Header and optional Subject Banner */}
      <div>
        {/* Page Top Header with Page Number */}
        <div className="relative mb-2">
          <div className={`flex items-center ${isOdd ? 'justify-start' : 'justify-end'}`}>
            <div className="border border-black px-2.5 py-0.5 rounded-xs text-[11px] font-bold tracking-tight">
              Pg-{pageNumber}
            </div>
          </div>
          <div className="border-b border-black mt-1"></div>
        </div>

        {/* Physics Top Header (Page 2) */}
        {isPhysicsStart && (
          <div className="mb-2 text-center">
            <div className="inline-block px-12 py-1 bg-stone-100 border border-black/80 rounded text-sm font-bold tracking-wider uppercase">
              Physics
            </div>
          </div>
        )}

        {/* Chemistry Top Header (Page 7) */}
        {isChemStart && (
          <div className="mb-2 text-center">
            <div className="inline-block px-12 py-1 bg-stone-100 border border-black/80 rounded text-sm font-bold tracking-wider uppercase">
              Chemistry
            </div>
          </div>
        )}

        {/* Biology Top Header (Page 12) */}
        {isBioStart && (
          <div className="mb-2 text-center">
            <div className="inline-block px-12 py-1 bg-stone-100 border border-black/80 rounded text-sm font-bold tracking-wider uppercase">
              Biology
            </div>
          </div>
        )}
      </div>

      {/* Two Column Question Layout: Natural uniform spacing without artificial gaps between questions */}
      <div className="grid grid-cols-2 gap-x-6 relative flex-1 min-h-0 my-1">
        {/* Center Vertical Divider Line extending full height */}
        <div className="absolute top-0 bottom-0 left-1/2 -ml-[0.5px] w-[1px] bg-black/60 pointer-events-none"></div>

        {/* Left Column: Natural exam spacing, no forced gaps between questions */}
        <div className="pr-3 space-y-3">
          {leftQuestions.map(q => (
            <QuestionCard key={q.id} question={q} showAnswers={showAnswers} />
          ))}
        </div>

        {/* Right Column: Natural exam spacing, no forced gaps between questions */}
        <div className="pl-3 space-y-3">
          {rightQuestions.map(q => (
            <QuestionCard key={q.id} question={q} showAnswers={showAnswers} />
          ))}
        </div>
      </div>

      {/* Bottom Section: End of paper marker (page 20) and clean footer line */}
      <div>
        {isLastPage && (
          <div className="my-1.5 py-1 text-center font-bold text-xs uppercase border-y border-black tracking-wider bg-stone-100">
            *** END OF THE QUESTION PAPER / प्रश्न पत्र समाप्त ***
          </div>
        )}

        <div className="border-t border-black mt-2 pt-1 text-center text-[9px] text-stone-700">
          NEET (UG) - 2026 | PART TEST - XI / 02 | Test Booklet Code: PT-2
        </div>
      </div>
    </div>
  );
};
