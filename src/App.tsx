import React, { useState } from 'react';
import { 
  FileDown, 
  Printer, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Eye, 
  EyeOff,
  Info,
  BookOpen,
  FileCheck
} from 'lucide-react';
import { CoverPage } from './components/CoverPage';
import { ExamPage } from './components/ExamPage';
import { AnswerKeyPage } from './components/AnswerKeyPage';
import { allQuestions, getQuestionsByPage, testMetadata } from './data';
import { generateAndDownloadDocx, generateAndDownloadAnswerDocx } from './utils/docxExport';
import { triggerPrintToPdf } from './utils/pdfExport';

export default function App() {
  // Document selection: 'question_paper' or 'answer_paper'
  const [activeDocument, setActiveDocument] = useState<'question_paper' | 'answer_paper'>('question_paper');

  // Question Paper navigation states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [isExportingDocx, setIsExportingDocx] = useState<boolean>(false);
  const [questionSearch, setQuestionSearch] = useState<string>('');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Question Paper is exactly 20 pages (Page 1 = Cover, Pages 2 to 20 = 180 Questions)
  const totalPages = 20;

  // Jump to page containing specific question
  const handleJumpToQuestion = (qNumStr: string) => {
    const qNum = parseInt(qNumStr, 10);
    if (!isNaN(qNum) && qNum >= 1 && qNum <= 180) {
      const q = allQuestions.find(item => item.id === qNum);
      if (q) {
        setActiveDocument('question_paper');
        setCurrentPage(q.page);
      }
    }
  };

  const handleDocxDownload = async () => {
    try {
      setIsExportingDocx(true);
      if (activeDocument === 'question_paper') {
        await generateAndDownloadDocx();
        setDownloadSuccess('Question Paper (.docx - 20 Pages) downloaded successfully!');
      } else {
        await generateAndDownloadAnswerDocx();
        setDownloadSuccess('Separate Answer Paper & Solutions (.docx) downloaded successfully!');
      }
      setTimeout(() => setDownloadSuccess(null), 4000);
    } catch (err) {
      console.error('Failed to export DOCX:', err);
    } finally {
      setIsExportingDocx(false);
    }
  };

  const handlePdfDownload = () => {
    if (activeDocument === 'question_paper') {
      if (viewMode !== 'all') {
        setViewMode('all');
        setTimeout(() => {
          triggerPrintToPdf();
        }, 300);
      } else {
        triggerPrintToPdf();
      }
    } else {
      triggerPrintToPdf();
    }
  };

  return (
    <div className="min-h-screen bg-stone-200 text-stone-900 flex flex-col antialiased">
      {/* Top Application Header */}
      <header className="no-print sticky top-0 z-50 bg-stone-900 text-white shadow-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Title and Metadata */}
          <div className="flex items-center space-x-3">
            <div className="bg-amber-500 text-stone-950 px-2.5 py-1 rounded font-black text-sm uppercase tracking-wider">
              {testMetadata.bookletCode}
            </div>
            <div>
              <h1 className="font-bold text-sm sm:text-base leading-tight">
                NEET 2026 Test Booklet (Strict 20 Pages + Separate Answer Paper)
              </h1>
              <p className="text-xs text-stone-400 hidden sm:block">
                180 Modified Questions • Pages 1-20 Question Booklet • Zero Waste Blank Space • Standalone Answer Paper
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
              title={activeDocument === 'question_paper' ? "Download 20-Page Question Paper (.docx)" : "Download Separate Answer Paper (.docx)"}
            >
              <FileDown className="w-4 h-4" />
              <span>
                {isExportingDocx 
                  ? 'Generating Word...' 
                  : activeDocument === 'question_paper' 
                    ? 'Download Question Paper (.docx)' 
                    : 'Download Answer Paper (.docx)'}
              </span>
            </button>

            <button
              id="download-pdf-btn"
              onClick={handlePdfDownload}
              className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-medium text-xs sm:text-sm px-3.5 py-1.5 rounded shadow transition-all cursor-pointer"
              title={activeDocument === 'question_paper' ? "Print or Save all 20 pages as vector PDF" : "Print or Save Separate Answer Paper as vector PDF"}
            >
              <Printer className="w-4 h-4" />
              <span>
                {activeDocument === 'question_paper' ? 'Print Question Paper (PDF)' : 'Print Answer Paper (PDF)'}
              </span>
            </button>

            {/* Answer markings preview toggle on question paper */}
            {activeDocument === 'question_paper' && (
              <button
                onClick={() => setShowAnswers(!showAnswers)}
                className={`inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded border transition-colors cursor-pointer ${
                  showAnswers 
                    ? 'bg-emerald-800 border-emerald-600 text-emerald-100' 
                    : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700'
                }`}
                title="Toggle inline answer key hints on question paper"
              >
                {showAnswers ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                <span className="hidden lg:inline">{showAnswers ? 'Hide Key Hints' : 'Show Key Hints'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Secondary Navigation Ribbon: Document Switcher & Page Controls */}
        <div className="bg-stone-800/95 border-t border-stone-700 px-4 sm:px-6 py-2">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Primary Document Switcher */}
            <div className="flex items-center space-x-1.5 bg-stone-900 p-0.5 rounded-lg border border-stone-700">
              <button
                onClick={() => setActiveDocument('question_paper')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-bold cursor-pointer transition-colors ${
                  activeDocument === 'question_paper' 
                    ? 'bg-amber-500 text-stone-950 shadow-xs' 
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Question Paper (Exact 20 Pages)</span>
              </button>

              <button
                onClick={() => setActiveDocument('answer_paper')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-bold cursor-pointer transition-colors ${
                  activeDocument === 'answer_paper' 
                    ? 'bg-amber-500 text-stone-950 shadow-xs' 
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                <FileCheck className="w-3.5 h-3.5" />
                <span>Separate Answer Paper</span>
              </button>
            </div>

            {/* Question Paper Sub-Controls */}
            {activeDocument === 'question_paper' && (
              <div className="flex items-center gap-3">
                {/* View Mode Buttons */}
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setViewMode('single')}
                    className={`px-2.5 py-1 rounded transition-colors font-medium cursor-pointer ${
                      viewMode === 'single' ? 'bg-stone-700 text-white font-bold' : 'text-stone-300 hover:bg-stone-700/50'
                    }`}
                  >
                    Page-by-Page
                  </button>
                  <button
                    onClick={() => setViewMode('all')}
                    className={`px-2.5 py-1 rounded transition-colors font-medium cursor-pointer ${
                      viewMode === 'all' ? 'bg-stone-700 text-white font-bold' : 'text-stone-300 hover:bg-stone-700/50'
                    }`}
                  >
                    All 20 Pages (Print Ready)
                  </button>
                </div>

                {/* Page Prev/Next when in Single Page mode */}
                {viewMode === 'single' && (
                  <div className="flex items-center space-x-1">
                    <button
                      disabled={currentPage <= 1}
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      className="p-1 rounded bg-stone-700 hover:bg-stone-600 disabled:opacity-40 cursor-pointer"
                      title="Previous Page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="px-2 py-0.5 font-mono text-stone-300 text-[11px]">
                      Pg {currentPage} / {totalPages}
                    </span>
                    <button
                      disabled={currentPage >= totalPages}
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      className="p-1 rounded bg-stone-700 hover:bg-stone-600 disabled:opacity-40 cursor-pointer"
                      title="Next Page"
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
                    className="w-14 px-2 py-0.5 rounded bg-stone-900 border border-stone-600 text-white text-xs focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
              </div>
            )}
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

      {/* Main Document Stage */}
      <main className="flex-1 py-8 px-2 sm:px-4 flex flex-col items-center overflow-x-auto">
        {/* DOCUMENT 1: QUESTION PAPER (20 PAGES) */}
        {activeDocument === 'question_paper' && (
          <div className="w-full flex flex-col items-center">
            {/* View Mode 1: Single Page Interactive */}
            {viewMode === 'single' && (
              <div className="w-full flex flex-col items-center">
                {currentPage === 1 && <CoverPage />}
                {currentPage >= 2 && currentPage <= 20 && (
                  <ExamPage
                    pageNumber={currentPage}
                    questions={getQuestionsByPage(currentPage)}
                    showAnswers={showAnswers}
                  />
                )}

                {/* Bottom Page Navigation Controls */}
                <div className="no-print mt-6 flex items-center gap-3 bg-white/95 backdrop-blur-xs px-5 py-2 rounded-full shadow border border-stone-300">
                  <button
                    disabled={currentPage <= 1}
                    onClick={() => {
                      setCurrentPage(p => Math.max(1, p - 1));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded hover:bg-stone-100 disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Prev</span>
                  </button>

                  <div className="flex items-center gap-1 overflow-x-auto max-w-[50vw] sm:max-w-none px-1 py-0.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                      <button
                        key={p}
                        onClick={() => {
                          setCurrentPage(p);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-7 h-7 text-xs rounded-full font-medium transition-colors cursor-pointer shrink-0 ${
                          currentPage === p 
                            ? 'bg-stone-900 text-white font-bold' 
                            : 'text-stone-600 hover:bg-stone-200'
                        }`}
                        title={`Page ${p}`}
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
                    className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded hover:bg-stone-100 disabled:opacity-30 cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* View Mode 2: All 20 Pages Continuous (Full Booklet View) */}
            {viewMode === 'all' && (
              <div className="w-full flex flex-col items-center space-y-6">
                {/* Page 1: Cover Page */}
                <div className="page-break w-full flex justify-center">
                  <CoverPage />
                </div>

                {/* Pages 2 to 20: 19 Question Pages */}
                {Array.from({ length: 19 }, (_, idx) => idx + 2).map(pageNo => (
                  <div key={pageNo} className="page-break w-full flex justify-center">
                    <ExamPage
                      pageNumber={pageNo}
                      questions={getQuestionsByPage(pageNo)}
                      showAnswers={showAnswers}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* DOCUMENT 2: SEPARATE ANSWER PAPER & SOLUTIONS */}
        {activeDocument === 'answer_paper' && (
          <div className="w-full flex flex-col items-center">
            <AnswerKeyPage onPrint={triggerPrintToPdf} />
          </div>
        )}
      </main>

      {/* Footer Info */}
      <footer className="no-print bg-stone-900 text-stone-400 text-xs py-4 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              NEET (UG) - 2026 Test Paper: Exactly 20 pages (Page 1 Cover, Pages 2-20 all 180 questions with Space for Rough Work, zero waste space) + Separate Standalone Answer Paper.
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={handleDocxDownload}
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Export Word (.docx)
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
