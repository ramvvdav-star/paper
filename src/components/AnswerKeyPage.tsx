import React, { useState } from 'react';
import { allQuestions } from '../data';
import { Subject } from '../types';
import { Download, Printer, Search, CheckCircle, FileText } from 'lucide-react';
import { generateAndDownloadAnswerDocx } from '../utils/docxExport';

interface AnswerKeyPageProps {
  onPrint?: () => void;
  onDirectPdf?: () => void;
}

export const AnswerKeyPage: React.FC<AnswerKeyPageProps> = ({ onPrint, onDirectPdf }) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExporting, setIsExporting] = useState(false);

  const filteredQuestions = allQuestions.filter(q => {
    const matchesSub = selectedSubject === 'All' || q.subject === selectedSubject;
    const matchesSearch = 
      q.id.toString().includes(searchQuery) ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (q.explanation && q.explanation.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (q.ncertPage && q.ncertPage.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSub && matchesSearch;
  });

  const handleDownloadDocx = async () => {
    try {
      setIsExporting(true);
      await generateAndDownloadAnswerDocx();
    } finally {
      setIsExporting(false);
    }
  };

  const physicsQuestions = allQuestions.filter(q => q.subject === 'Physics');
  const chemQuestions = allQuestions.filter(q => q.subject === 'Chemistry');
  const bioQuestions = allQuestions.filter(q => q.subject === 'Biology');

  return (
    <div className="w-full flex flex-col items-center">
      {/* Answer Paper Dedicated Banner / Controls */}
      <div className="no-print w-full max-w-4xl mb-6 bg-stone-900 text-white p-4 rounded-xl shadow-lg border border-stone-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-stone-950 text-xs font-black px-2 py-0.5 rounded">
              SEPARATE DOCUMENT
            </span>
            <h2 className="text-base font-bold">Official Answer Paper & Detailed Solutions</h2>
          </div>
          <p className="text-xs text-stone-400 mt-0.5">
            Test Booklet Code: PT-2 | 180 Questions with verified NCERT justifications
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDownloadDocx}
            disabled={isExporting}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer"
            title="Export separate Word Document (.docx) for Answer Paper only"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isExporting ? 'Generating...' : 'Word (.docx)'}</span>
          </button>
          {onDirectPdf && (
            <button
              onClick={onDirectPdf}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer"
              title="Download exact high-res PDF file directly"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exact PDF (.pdf)</span>
            </button>
          )}
          <button
            onClick={onPrint || (() => window.print())}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-200 text-xs font-bold transition-colors cursor-pointer"
            title="Print or Save Answer Paper as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print (Ctrl+P)</span>
          </button>
        </div>
      </div>

      {/* Answer Paper Sheet 1: Master OMR Matrix */}
      <div className="a4-sheet p-8 exam-font text-black flex flex-col justify-between select-text mb-8">
        <div>
          {/* Header */}
          <div className="text-center mb-5 border-b-2 border-black pb-3">
            <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-1">
              <span>TEST BOOKLET CODE: PT-2</span>
              <span>NEET (UG) - 2026 | PART TEST - XI / 02</span>
              <span>MAX MARKS: 720</span>
            </div>
            <h1 className="text-2xl font-black uppercase tracking-tight">
              Official Master Answer Paper
            </h1>
            <p className="text-xs text-stone-600 mt-1">
              Final Official Keys for 180 Questions (Physics: Q1-45, Chemistry: Q46-90, Biology: Q91-180)
            </p>
          </div>

          {/* Quick Matrix Section */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-xs uppercase tracking-wide">
                Part I: Complete 180-Question Answer Key Matrix
              </span>
              <span className="text-[10.5px] text-stone-500">
                Format: Q.No [Correct Option]
              </span>
            </div>

            {/* Physics 1-45 */}
            <div className="mb-3 p-2 bg-stone-50 border border-black/60 rounded-xs">
              <div className="font-bold text-[11px] text-stone-800 uppercase mb-1.5 pb-0.5 border-b border-stone-300 flex justify-between">
                <span>Physics (Questions 1 to 45)</span>
                <span className="text-stone-500">45 Questions</span>
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-9 md:grid-cols-15 gap-1 text-[10.5px]">
                {physicsQuestions.map(q => (
                  <div key={q.id} className="border border-black/30 p-1 text-center bg-white rounded-xs">
                    <div className="text-[9.5px] text-stone-500 font-bold">Q{q.id}</div>
                    <div className="font-black text-[11px] text-blue-900">({q.correctAnswer})</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chemistry 46-90 */}
            <div className="mb-3 p-2 bg-amber-50/40 border border-black/60 rounded-xs">
              <div className="font-bold text-[11px] text-amber-950 uppercase mb-1.5 pb-0.5 border-b border-amber-300 flex justify-between">
                <span>Chemistry (Questions 46 to 90)</span>
                <span className="text-stone-500">45 Questions</span>
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-9 md:grid-cols-15 gap-1 text-[10.5px]">
                {chemQuestions.map(q => (
                  <div key={q.id} className="border border-black/30 p-1 text-center bg-white rounded-xs">
                    <div className="text-[9.5px] text-stone-500 font-bold">Q{q.id}</div>
                    <div className="font-black text-[11px] text-amber-900">({q.correctAnswer})</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Biology 91-180 */}
            <div className="p-2 bg-emerald-50/40 border border-black/60 rounded-xs">
              <div className="font-bold text-[11px] text-emerald-950 uppercase mb-1.5 pb-0.5 border-b border-emerald-300 flex justify-between">
                <span>Biology (Questions 91 to 180)</span>
                <span className="text-stone-500">90 Questions</span>
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-9 md:grid-cols-15 gap-1 text-[10.5px]">
                {bioQuestions.map(q => (
                  <div key={q.id} className="border border-black/30 p-1 text-center bg-white rounded-xs">
                    <div className="text-[9.5px] text-stone-500 font-bold">Q{q.id}</div>
                    <div className="font-black text-[11px] text-emerald-900">({q.correctAnswer})</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-stone-100 rounded-xs text-[11px] text-stone-700 leading-normal">
            <span className="font-bold text-black">Scoring Scheme: </span>
            <span>+4 Marks for each correct response | -1 Mark for each incorrect response | 0 Mark for unattempted questions. Maximum Marks = 720.</span>
          </div>
        </div>

        <div className="border-t border-black/20 pt-2 text-center text-[9px] text-stone-600 mt-4">
          NEET (UG) - 2026 | Answer Paper Sheet 1: Master Answer Key | Test Booklet Code: PT-2
        </div>
      </div>

      {/* Answer Paper Sheet 2+: Detailed Solutions */}
      <div className="a4-sheet p-8 exam-font text-black flex flex-col justify-between select-text mb-8">
        <div>
          {/* Detailed Solutions Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-2 border-b-2 border-black">
            <div>
              <h2 className="text-lg font-black uppercase">Part II: Detailed Step-by-Step Solutions</h2>
              <p className="text-[11px] text-stone-600">Complete NCERT Citations & Mathematical Steps</p>
            </div>

            {/* Filter controls (no-print) */}
            <div className="no-print flex items-center gap-2">
              <div className="flex rounded border border-stone-300 overflow-hidden text-xs">
                {(['All', 'Physics', 'Chemistry', 'Biology'] as const).map(sub => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubject(sub)}
                    className={`px-2.5 py-1 font-medium transition-colors cursor-pointer ${
                      selectedSubject === sub ? 'bg-stone-900 text-white' : 'bg-white hover:bg-stone-100 text-stone-700'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2 top-2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Filter Q# or text..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-7 pr-2.5 py-1 text-xs border border-stone-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-stone-500 w-36 sm:w-48"
                />
              </div>
            </div>
          </div>

          {/* Solutions List */}
          <div className="space-y-3">
            {filteredQuestions.map(q => (
              <div key={q.id} className="p-3 bg-stone-50 border border-stone-300 rounded-xs text-[11.5px] leading-relaxed break-inside-avoid">
                <div className="flex items-start justify-between gap-2 font-bold mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-black font-black text-[12px]">Q{q.id}.</span>
                    <span className="text-stone-600 font-normal">[{q.subject}]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-xs font-black border border-emerald-300">
                      Answer: ({q.correctAnswer})
                    </span>
                    <span className="text-[10px] text-stone-500 font-bold">
                      [{q.ncertPage}]
                    </span>
                  </div>
                </div>

                <div className="text-stone-800 font-serif mb-1.5 text-justify">
                  {q.question}
                </div>

                {q.explanation && (
                  <div className="bg-white p-2 rounded-xs border border-stone-200 text-stone-800 mt-1">
                    <span className="font-bold text-amber-950">Explanation & NCERT Basis: </span>
                    <span>{q.explanation}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-black/20 pt-2 text-center text-[9px] text-stone-600 mt-6">
          NEET (UG) - 2026 | Answer Paper Sheet 2: Detailed Solutions | Test Booklet Code: PT-2
        </div>
      </div>
    </div>
  );
};
