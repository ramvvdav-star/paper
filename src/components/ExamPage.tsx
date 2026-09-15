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

  // Check section banners
  const isPhysicsStart = pageNumber === 3;
  const isPage7 = pageNumber === 7;
  const isPage11 = pageNumber === 11;

  // For page 7: Physics Q39-45, then Chemistry banner, then Q46-47
  const p7PhysicsLeft = questions.filter(q => q.id >= 39 && q.id <= 42);
  const p7PhysicsRight = questions.filter(q => q.id >= 43 && q.id <= 45);
  const p7ChemLeft = questions.filter(q => q.id === 46);
  const p7ChemRight = questions.filter(q => q.id === 47);

  // For page 11: Chemistry Q89-90, then Biology banner, then Q91-98
  const p11ChemLeft = questions.filter(q => q.id === 89);
  const p11ChemRight = questions.filter(q => q.id === 90);
  const p11BioLeft = questions.filter(q => q.id >= 91 && q.id <= 94);
  const p11BioRight = questions.filter(q => q.id >= 95 && q.id <= 98);

  return (
    <div className="a4-sheet p-8 exam-font text-black flex flex-col justify-between select-text">
      <div>
        {/* Page Header */}
        <div className="relative mb-2">
          <div className={`flex items-center ${isOdd ? 'justify-start' : 'justify-end'}`}>
            <div className="border border-black px-2.5 py-0.5 rounded-xs text-[11px] font-bold tracking-tight">
              Pg-{pageNumber}
            </div>
          </div>
          <div className="border-b border-black mt-1"></div>
        </div>

        {/* Page 3: Physics Top Header */}
        {isPhysicsStart && (
          <div className="my-2 text-center">
            <div className="inline-block px-12 py-1 bg-stone-100 border border-black/80 rounded text-sm font-bold tracking-wider">
              Physics
            </div>
          </div>
        )}

        {/* Normal Page Layout (Pages 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20) */}
        {!isPage7 && !isPage11 && (
          <div className="grid grid-cols-2 gap-x-6 relative">
            {/* Center Vertical Divider Line */}
            <div className="absolute top-0 bottom-0 left-1/2 -ml-[0.5px] w-[1px] bg-black/60 pointer-events-none"></div>

            {/* Left Column */}
            <div className="pr-3">
              {leftQuestions.map(q => (
                <QuestionCard key={q.id} question={q} showAnswers={showAnswers} />
              ))}
            </div>

            {/* Right Column */}
            <div className="pl-3">
              {rightQuestions.map(q => (
                <QuestionCard key={q.id} question={q} showAnswers={showAnswers} />
              ))}
            </div>
          </div>
        )}

        {/* Page 7: Mixed Physics and Chemistry */}
        {isPage7 && (
          <div>
            {/* Upper Section: Physics Q39 - Q45 */}
            <div className="grid grid-cols-2 gap-x-6 relative">
              <div className="absolute top-0 bottom-0 left-1/2 -ml-[0.5px] w-[1px] bg-black/60 pointer-events-none"></div>
              <div className="pr-3">
                {p7PhysicsLeft.map(q => (
                  <QuestionCard key={q.id} question={q} showAnswers={showAnswers} />
                ))}
              </div>
              <div className="pl-3">
                {p7PhysicsRight.map(q => (
                  <QuestionCard key={q.id} question={q} showAnswers={showAnswers} />
                ))}
              </div>
            </div>

            {/* Shaded Chemistry Header Banner */}
            <div className="my-3 text-center">
              <div className="w-full py-1 bg-amber-100/60 border border-amber-900/30 rounded text-sm font-bold tracking-wider text-black">
                Chemistry
              </div>
            </div>

            {/* Lower Section: Chemistry Q46 & Q47 */}
            <div className="grid grid-cols-2 gap-x-6 relative">
              <div className="absolute top-0 bottom-0 left-1/2 -ml-[0.5px] w-[1px] bg-black/60 pointer-events-none"></div>
              <div className="pr-3">
                {p7ChemLeft.map(q => (
                  <QuestionCard key={q.id} question={q} showAnswers={showAnswers} />
                ))}
              </div>
              <div className="pl-3">
                {p7ChemRight.map(q => (
                  <QuestionCard key={q.id} question={q} showAnswers={showAnswers} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Page 11: Mixed Chemistry and Biology */}
        {isPage11 && (
          <div>
            {/* Upper Section: Chemistry Q89 & Q90 */}
            <div className="grid grid-cols-2 gap-x-6 relative">
              <div className="absolute top-0 bottom-0 left-1/2 -ml-[0.5px] w-[1px] bg-black/60 pointer-events-none"></div>
              <div className="pr-3">
                {p11ChemLeft.map(q => (
                  <QuestionCard key={q.id} question={q} showAnswers={showAnswers} />
                ))}
              </div>
              <div className="pl-3">
                {p11ChemRight.map(q => (
                  <QuestionCard key={q.id} question={q} showAnswers={showAnswers} />
                ))}
              </div>
            </div>

            {/* Shaded Biology Header Banner */}
            <div className="my-3 text-center">
              <div className="w-full py-1 bg-emerald-100/60 border border-emerald-900/30 rounded text-sm font-bold tracking-wider text-black">
                Biology
              </div>
            </div>

            {/* Lower Section: Biology Q91 to Q98 */}
            <div className="grid grid-cols-2 gap-x-6 relative">
              <div className="absolute top-0 bottom-0 left-1/2 -ml-[0.5px] w-[1px] bg-black/60 pointer-events-none"></div>
              <div className="pr-3">
                {p11BioLeft.map(q => (
                  <QuestionCard key={q.id} question={q} showAnswers={showAnswers} />
                ))}
              </div>
              <div className="pl-3">
                {p11BioRight.map(q => (
                  <QuestionCard key={q.id} question={q} showAnswers={showAnswers} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Subtle bottom note */}
      <div className="border-t border-black/20 pt-1 text-center text-[9px] text-stone-700">
        NEET (UG) - 2026 | PART TEST - XI / 02 | Test Booklet Code: PT-2
      </div>
    </div>
  );
};
