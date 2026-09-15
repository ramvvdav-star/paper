import React, { useState, useEffect, useRef } from 'react';
import { 
  FileDown, 
  Printer, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Search, 
  Eye, 
  EyeOff,
  Sparkles,
  Info
} from 'lucide-react';
import { CoverPage } from './components/CoverPage';
import { ExamPage } from './components/ExamPage';
import { AnswerKeyPage } from './components/AnswerKeyPage';
import { allQuestions, getQuestionsByPage, testMetadata } from './data';
import { generateAndDownloadDocx } from './utils/docxExport';
import { triggerPrintToPdf } from './utils/pdfExport';

export default function App() {
  // Navigation & view states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'single' | 'all' | 'answers'>('single');
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [isExportingDocx, setIsExportingDocx] = useState<boolean>(false);
  const [questionSearch, setQuestionSearch] = useState<string>('');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Pages range from 1 to 20
  const totalPages = 20;

  // Jump to page containing specific question
  const handleJumpToQuestion = (qNumStr: string) => {
    const qNum = parseInt(qNumStr, 10);
    if (!isNaN(qNum) && qNum >= 1 && qNum <= 180) {
      const q = allQuestions.find(item => item.id === qNum);
      if (q) {
        setCurrentPage(q.page);
        if (viewMode === 'answers') {
          setViewMode('single');
        }
      }
    }
  };

  const handleDocxDownload = async () => {
    try {
      setIsExportingDocx(true);
      await generateAndDownloadDocx();
      setDownloadSuccess('Word Document (.docx) generated and downloaded successfully!');
      setTimeout(() => setDownloadSuccess(null), 4000);
    } catch (err) {
      console.error('Failed to export DOCX:', err);
    } finally {
      setIsExportingDocx(false);
    }
  };

  const handlePdfDownload = () => {
    // Switch to all pages view for comprehensive printing, then trigger print
    if (viewMode !== 'all') {
      setViewMode('all');
      setTimeout(() => {
        triggerPrintToPdf();
      }, 300);
    } else {
      triggerPrintToPdf();
    }
  };

  return (
    <div className="min-h-screen bg-stone-200 text-stone-900 flex flex-col antialiased">
      {/* Top Application Toolbar */}
      <header className="no-print sticky top-0 z-50 bg-stone-900 text-white shadow-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Title and Metadata */}
          <div className="flex items-center space-x-3">
            <div className="bg-amber-500 text-stone-950 px-2.5 py-1 rounded font-black text-sm uppercase tracking-wider">
              {testMetadata.bookletCode}
            </div>
            <div>
              <h1 className="font-bold text-sm sm:text-base leading-tight">
                NEET 2026 Test Paper (Changed Questions • Exact Format)
              </h1>
              <p className="text-xs text-stone-400 hidden sm:block">
                180 Questions • Physics, Chemistry & Biology • Exact Times New Roman Typography
              </p>
            </div>
          </div>

          {/* Action Buttons: Word (.docx) & PDF */}
          <div className="flex items-center flex-wrap gap-2">
            <button
              id="download-word-btn"
              onClick={handleDocxDownload}
              disabled={isExportingDocx}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium text-xs sm:text-sm px-3.5 py-1.5 rounded shadow transition-all cursor-pointer disabled:opacity-50"
              title="Download editable Microsoft Word document (.docx) with exact questions, options, and tables"
            >
              <FileDown className="w-4 h-4" />
              <span>{isExportingDocx ? 'Generating Word...' : 'Download Word (.docx)'}</span>
            </button>

            <button
              id="download-pdf-btn"
              onClick={handlePdfDownload}
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-medium text-xs sm:text-sm px-3.5 py-1.5 rounded shadow transition-all cursor-pointer"
              title="Print or save as high-fidelity vector PDF matching exact exam paper booklet"
            >
              <Printer className="w-4 h-4" />
              <span>Download PDF / Print</span>
            </button>

            {/* Answer Toggle */}
            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className={`inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded border transition-colors cursor-pointer ${
                showAnswers 
                  ? 'bg-emerald-800 border-emerald-600 text-emerald-100' 
                  : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700'
              }`}
              title="Toggle answer key markings on pages"
            >
              {showAnswers ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{showAnswers ? 'Hide Answers' : 'Show Answers'}</span>
            </button>
          </div>
        </div>

        {/* Secondary Navigation Ribbon */}
        <div className="bg-stone-800/90 border-t border-stone-700 px-4 sm:px-6 py-2">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* View Mode Controls */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setViewMode('single')}
                className={`px-3 py-1 rounded transition-colors font-medium cursor-pointer ${
                  viewMode === 'single' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:bg-stone-700'
                }`}
              >
                Page-by-Page
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`px-3 py-1 rounded transition-colors font-medium cursor-pointer ${
                  viewMode === 'all' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:bg-stone-700'
                }`}
              >
                All 20 Pages
              </button>
              <button
                onClick={() => setViewMode('answers')}
                className={`px-3 py-1 rounded transition-colors font-medium cursor-pointer ${
                  viewMode === 'answers' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:bg-stone-700'
                }`}
              >
                Answer Key & Solutions
              </button>
            </div>

            {/* Page Selector & Question Jumper */}
            <div className="flex items-center gap-3">
              {viewMode === 'single' && (
                <div className="flex items-center space-x-1.5">
                  <button
                    disabled={currentPage <= 1}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className="p-1 rounded bg-stone-700 hover:bg-stone-600 disabled:opacity-40 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="px-2 py-0.5 font-mono text-stone-300">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className="p-1 rounded bg-stone-700 hover:bg-stone-600 disabled:opacity-40 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Jump to Question */}
              <div className="flex items-center gap-1.5">
                <span className="text-stone-400">Go to Q#:</span>
                <input
                  type="number"
                  min="1"
                  max="180"
                  placeholder="1-180"
                  value={questionSearch}
                  onChange={e => {
                    setQuestionSearch(e.target.value);
                    handleJumpToQuestion(e.target.value);
                  }}
                  className="w-16 px-2 py-0.5 rounded bg-stone-900 border border-stone-600 text-white text-xs focus:ring-1 focus:ring-amber-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Success Notification Banner */}
      {downloadSuccess && (
        <div className="no-print bg-emerald-600 text-white py-2 px-4 text-center text-xs font-semibold shadow flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{downloadSuccess}</span>
        </div>
      )}

      {/* Main Document Preview Stage */}
      <main className="flex-1 py-8 px-2 sm:px-4 flex flex-col items-center overflow-x-auto">
        {/* VIEW MODE 1: SINGLE PAGE BOOKLET */}
        {viewMode === 'single' && (
          <div className="w-full flex flex-col items-center">
            {currentPage === 1 && <CoverPage />}
            {currentPage === 2 && (
              <div className="a4-sheet p-10 exam-font text-black flex flex-col justify-between select-text">
                <div className="border border-black px-2.5 py-0.5 rounded-xs text-[11px] font-bold tracking-tight inline-block w-max">
                  Pg-2
                </div>
                <div className="text-center my-auto text-stone-500 italic text-sm">
                  (Space for Rough Work / Blank Page as in Original Test Booklet)
                </div>
                <div className="border-t border-black/20 pt-1 text-center text-[9px] text-stone-700">
                  NEET (UG) - 2026 | PART TEST - XI / 02 | Test Booklet Code: PT-2
                </div>
              </div>
            )}
            {currentPage >= 3 && currentPage <= 20 && (
              <ExamPage
                pageNumber={currentPage}
                questions={getQuestionsByPage(currentPage)}
                showAnswers={showAnswers}
              />
            )}

            {/* Bottom Page Navigation Controls */}
            <div className="no-print mt-6 flex items-center gap-4 bg-white/90 backdrop-blur-xs px-5 py-2 rounded-full shadow border border-stone-300">
              <button
                disabled={currentPage <= 1}
                onClick={() => {
                  setCurrentPage(p => Math.max(1, p - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded hover:bg-stone-100 disabled:opacity-30 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Page</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    onClick={() => {
                      setCurrentPage(p);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-7 h-7 text-xs rounded-full font-medium transition-colors cursor-pointer ${
                      currentPage === p 
                        ? 'bg-stone-900 text-white font-bold' 
                        : 'text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage >= totalPages}
                onClick={() => {
                  setCurrentPage(p => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded hover:bg-stone-100 disabled:opacity-30 cursor-pointer"
              >
                <span>Next Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: ALL 20 PAGES CONTINUOUS (Print Ready) */}
        {viewMode === 'all' && (
          <div className="w-full flex flex-col items-center space-y-8">
            {/* Page 1: Cover */}
            <CoverPage />

            {/* Page 2: Blank / Rough Work */}
            <div className="a4-sheet p-10 exam-font text-black flex flex-col justify-between page-break select-text">
              <div className="border border-black px-2.5 py-0.5 rounded-xs text-[11px] font-bold tracking-tight inline-block w-max">
                Pg-2
              </div>
              <div className="text-center my-auto text-stone-500 italic text-sm">
                (Space for Rough Work / Blank Page as in Original Test Booklet)
              </div>
              <div className="border-t border-black/20 pt-1 text-center text-[9px] text-stone-700">
                NEET (UG) - 2026 | PART TEST - XI / 02 | Test Booklet Code: PT-2
              </div>
            </div>

            {/* Pages 3 to 20 */}
            {Array.from({ length: 18 }, (_, idx) => idx + 3).map(pageNo => (
              <div key={pageNo} className="page-break">
                <ExamPage
                  pageNumber={pageNo}
                  questions={getQuestionsByPage(pageNo)}
                  showAnswers={showAnswers}
                />
              </div>
            ))}
          </div>
        )}

        {/* VIEW MODE 3: OFFICIAL ANSWER KEY & SOLUTIONS */}
        {viewMode === 'answers' && (
          <div className="w-full flex flex-col items-center">
            <AnswerKeyPage />
          </div>
        )}
      </main>

      {/* Footer Info for quick assistance */}
      <footer className="no-print bg-stone-900 text-stone-400 text-xs py-4 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-400" />
            <span>
              All 180 questions have been modified while maintaining the exact original test series syllabus, format, typography, NCERT references, and diagrams.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleDocxDownload}
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Export .docx
            </button>
            <span>•</span>
            <button
              onClick={handlePdfDownload}
              className="text-red-400 hover:underline cursor-pointer"
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
