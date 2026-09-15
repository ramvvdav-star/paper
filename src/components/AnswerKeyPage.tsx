import React, { useState } from 'react';
import { allQuestions } from '../data';
import { Subject } from '../types';

export const AnswerKeyPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = allQuestions.filter(q => {
    const matchesSub = selectedSubject === 'All' || q.subject === selectedSubject;
    const matchesSearch = 
      q.id.toString().includes(searchQuery) ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (q.explanation && q.explanation.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSub && matchesSearch;
  });

  return (
    <div className="a4-sheet p-8 exam-font text-black flex flex-col justify-between select-text">
      <div>
        {/* Header */}
        <div className="text-center mb-6 border-b-2 border-black pb-3">
          <h2 className="text-xl font-bold uppercase tracking-wider">NEET (UG) - 2026 | PART TEST - XI / 02</h2>
          <h1 className="text-2xl font-black uppercase mt-1">Official Master Answer Key & Solutions</h1>
          <p className="text-xs text-stone-700 mt-1">Test Booklet Code: PT-2 | Maximum Marks: 720 | 180 Questions</p>
        </div>

        {/* Quick Grid Table of 180 Answers */}
        <div className="mb-6">
          <div className="font-bold text-xs uppercase mb-2">Answer Matrix (Q.No : Answer Key)</div>
          <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-12 gap-1 text-[11px]">
            {allQuestions.map(q => (
              <div
                key={q.id}
                className="border border-black/60 p-1 text-center bg-stone-50 rounded-xs"
              >
                <div className="text-[10px] text-stone-600 font-bold">Q{q.id}</div>
                <div className="font-black text-xs text-blue-900">({q.correctAnswer})</div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Solutions Section */}
        <div className="no-print mt-6 border-t border-black/30 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h3 className="font-bold text-base">Question Solutions & Explanations</h3>
            
            <div className="flex items-center gap-2">
              <div className="flex rounded border border-stone-300 overflow-hidden text-xs">
                {(['All', 'Physics', 'Chemistry', 'Biology'] as const).map(sub => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubject(sub)}
                    className={`px-3 py-1 font-medium transition-colors ${
                      selectedSubject === sub ? 'bg-stone-900 text-white' : 'bg-white hover:bg-stone-100 text-stone-700'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="Search Q# or keyword..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="px-2.5 py-1 text-xs border border-stone-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-stone-500"
              />
            </div>
          </div>

          <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-2">
            {filteredQuestions.map(q => (
              <div key={q.id} className="p-3 bg-stone-50 border border-stone-200 rounded text-xs leading-relaxed">
                <div className="flex items-start justify-between gap-2 font-bold mb-1">
                  <span>Q{q.id}. {q.subject}</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Correct Option: ({q.correctAnswer})
                  </span>
                </div>
                <div className="text-stone-800 mb-1.5">{q.question}</div>
                {q.explanation && (
                  <div className="bg-white p-2 rounded border border-stone-200 text-stone-700">
                    <span className="font-bold text-stone-900">Explanation: </span>
                    {q.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-black/20 pt-2 text-center text-[10px] text-stone-600 mt-6">
        Test Series NEET 2026 | Verified Answer Key & Solutions
      </div>
    </div>
  );
};
