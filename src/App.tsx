import React, { useState, useEffect, useRef } from 'react';
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
  FileCheck,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Download,
  Loader2
} from 'lucide-react';
import { CoverPage } from './components/CoverPage';
import { ExamPage } from './components/ExamPage';
import { AnswerKeyPage } from './components/AnswerKeyPage';
import { allQuestions, getQuestionsByPage, testMetadata } from './data';
import { generateAndDownloadDocx, generateAndDownloadAnswerDocx } from './utils/docxExport';
import { triggerPrintToPdf, generateDirectPdf } from './utils/pdfExport';

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

  // Zoom In / Zoom Out states (50% to 200%)
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  // Direct PDF Export states
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const [pdfProgress, setPdfProgress] = useState<{ current: number; total: number } | null>(null);

  // Reference to main stage for PDF capturing
  const documentStageRef = useRef<HTMLDivElement>(null);

  // Total pages is strictly 20
  const totalPages = 20;

  // Zoom handlers
  const handleZoomIn = () => setZoomLevel(prev => Math.min(200, prev + 10));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(50, prev - 10));
  const handleResetZoom = () => setZoomLevel(100);
  const handleFitPage = () => setZoomLevel(80);

  // Keyboard shortcut listener for Zoom
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+')) {
        e.preventDefault();
        handleZoomIn();
      } else if ((e.ctrlKey || e.metaKey) && e.key === '-') {
        e.preventDefault();
        handleZoomOut();
      } else if ((e.ctrlKey || e.metaKey) && e.key === '0') {
        e.preventDefault();
        handleResetZoom();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  // DOCX Export
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

  // Direct PDF Download: Creates exact replica of on-screen pages without browser print interference
  const handleExactPdfDownload = async (allPages: boolean = true) => {
    try {
      setIsGeneratingPdf(true);
      setPdfProgress({ current: 0, total: allPages ? totalPages : 1 });

      if (activeDocument === 'question_paper') {
        // If user wants all 20 pages but is in single view, temporarily switch to all pages view
        if (allPages && viewMode !== 'all') {
          setViewMode('all');
          // Allow DOM to render all pages
          await new Promise(resolve => setTimeout(resolve, 500));
        }

        if (documentStageRef.current) {
          const filename = allPages 
            ? 'NEET_2026_PT-2_Exact_Question_Paper_20Pages.pdf' 
            : `NEET_2026_PT-2_Page_${currentPage}.pdf`;

          await generateDirectPdf(
            documentStageRef.current,
            filename,
            (current, total) => setPdfProgress({ current, total })
          );
          setDownloadSuccess(`Exact PDF (${filename}) generated and downloaded successfully!`);
          setTimeout(() => setDownloadSuccess(null), 4000);
        }
      } else {
        // Answer paper PDF
        if (documentStageRef.current) {
          await generateDirectPdf(
            documentStageRef.current,
            'NEET_2026_PT-2_Exact_Answer_Paper_and_Solutions.pdf',
            (current, total) => setPdfProgress({ current, total })
          );
          setDownloadSuccess('Answer Paper Exact PDF generated and downloaded successfully!');
          setTimeout(() => setDownloadSuccess(null), 4000);
        }
      }
    } catch (err) {
      console.error('Failed to generate direct PDF:', err);
      alert('Could not generate direct PDF. You can also use the "Print / System PDF" button.');
    } finally {
      setIsGeneratingPdf(false);
      setPdfProgress(null);
    }
  };

  // Native Browser Print Dialog
  const handleBrowserPrint = () => {
    if (activeDocument === 'question_paper') {
      if (viewMode !== 'all') {
        setViewMode('all');
        setTimeout(() => {
          triggerPrintToPdf();
        }, 400);
      } else {
        triggerPrintToPdf();
      }
    } else {
      triggerPrintToPdf();
    }
  };

  return (
    <div className="min-h-screen bg-stone-200 text-stone-900 flex flex-col antialiased relative">
      {/* Top Application Header */}
      <header className="no-print sticky top-0 z-50 bg-stone-900 text-white shadow-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Title and Metadata */}
          <div className="flex items-center space-x-3">
            <div className="bg-amber-500 text-stone-950 px-2 py-0.5 rounded font-black text-sm uppercase tracking-wider">
              {testMetadata.bookletCode}
            </div>
            <div>
              <h1 className="font-bold text-sm sm:text-base leading-tight">
                NEET 2026 Test Booklet (Strict 20 Pages + Standalone Answer Paper)
              </h1>
              <p className="text-xs text-stone-400 hidden sm:block">
                180 Modified Questions • Exact Typography • Natural Exam Spacing • Direct PDF & Zoom
              </p>
            </div>
          </div>

          {/* Action Buttons: Word (.docx) & PDF */}
          <div className="flex items-center flex-wrap gap-2">
            {/* Word DOCX Button */}
            <button
              id="download-word-btn"
              onClick={handleDocxDownload}
              disabled={isExportingDocx}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium text-xs px-3 py-1.5 rounded shadow transition-all cursor-pointer disabled:opacity-50"
              title={activeDocument === 'question_paper' ? "Download 20-Page Question Paper (.docx)" : "Download Standalone Answer Paper (.docx)"}
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>
                {isExportingDocx 
                  ? 'Generating Word...' 
                  : activeDocument === 'question_paper' 
                    ? 'Word (.docx)' 
                    : 'Answer Paper (.docx)'}
              </span>
            </button>

            {/* Direct Exact PDF Button (Pixel-perfect copy of website, zero extra spaces) */}
            <button
              id="download-exact-pdf-btn"
              onClick={() => handleExactPdfDownload(true)}
              disabled={isGeneratingPdf}
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs px-3 py-1.5 rounded shadow transition-all cursor-pointer disabled:opacity-50"
              title="Download exact high-resolution PDF file directly without browser printer dialog"
            >
              {isGeneratingPdf ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>
                {isGeneratingPdf 
                  ? `Saving PDF (${pdfProgress ? `${pdfProgress.current}/${pdfProgress.total}` : '...'})` 
                  : 'Download Exact PDF'}
              </span>
            </button>

            {/* Browser Print / System PDF */}
            <button
              id="download-pdf-btn"
              onClick={handleBrowserPrint}
              className="inline-flex items-center gap-1.5 bg-stone-700 hover:bg-stone-600 text-stone-200 font-medium text-xs px-2.5 py-1.5 rounded shadow transition-all cursor-pointer"
              title="Open browser print dialog (Ctrl+P)"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Print / System PDF</span>
            </button>

            {/* Answer markings preview toggle on question paper */}
            {activeDocument === 'question_paper' && (
              <button
                onClick={() => setShowAnswers(!showAnswers)}
                className={`inline-flex items-center gap-1 text-xs px-2 py-1.5 rounded border transition-colors cursor-pointer ${
                  showAnswers 
                    ? 'bg-emerald-800 border-emerald-600 text-emerald-100' 
                    : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700'
                }`}
                title="Toggle inline answer key hints on question paper"
              >
                {showAnswers ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                <span className="hidden lg:inline">{showAnswers ? 'Hide Answers' : 'Show Answers'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Secondary Navigation Ribbon: Document Switcher, Zoom Controls & Page Controls */}
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

            {/* ZOOM CONTROLS (Requested: Zoom In and Zoom Out to view pages as big or small as wanted) */}
            <div className="flex items-center space-x-1 bg-stone-900 px-2 py-1 rounded-lg border border-stone-700 text-stone-200">
              <span className="text-[11px] text-stone-400 mr-1 hidden sm:inline">Zoom:</span>
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 50}
                className="p-1 rounded hover:bg-stone-700 disabled:opacity-40 cursor-pointer transition-colors"
                title="Zoom Out (-10%) [Ctrl + -]"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleResetZoom}
                className="px-2 py-0.5 font-mono text-[11px] font-bold rounded hover:bg-stone-700 cursor-pointer text-amber-400"
                title="Click to reset zoom to 100% [Ctrl + 0]"
              >
                {zoomLevel}%
              </button>

              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 200}
                className="p-1 rounded hover:bg-stone-700 disabled:opacity-40 cursor-pointer transition-colors"
                title="Zoom In (+10%) [Ctrl + +]"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>

              <div className="border-l border-stone-700 h-3.5 mx-1"></div>

              <button
                onClick={handleFitPage}
                className={`px-1.5 py-0.5 rounded text-[10.5px] transition-colors cursor-pointer ${
                  zoomLevel === 80 ? 'bg-stone-700 text-white font-bold' : 'text-stone-400 hover:text-white'
                }`}
                title="Fit Page to screen (80%)"
              >
                Fit
              </button>

              <button
                onClick={handleResetZoom}
                className={`px-1.5 py-0.5 rounded text-[10.5px] transition-colors cursor-pointer ${
                  zoomLevel === 100 ? 'bg-stone-700 text-white font-bold' : 'text-stone-400 hover:text-white'
                }`}
                title="Actual 100% Size"
              >
                100%
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
                    All 20 Pages
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

      {/* Generating PDF Modal / Overlay */}
      {isGeneratingPdf && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full text-center border border-stone-200">
            <Loader2 className="w-10 h-10 text-emerald-600 animate-spin mx-auto mb-3" />
            <h3 className="font-bold text-base text-stone-900 mb-1">
              Generating Exact PDF
            </h3>
            <p className="text-xs text-stone-600 mb-4">
              Creating a pixel-perfect copy matching the on-screen view without spaces between questions...
            </p>
            {pdfProgress && (
              <div className="w-full">
                <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
                  <span>Page {pdfProgress.current} of {pdfProgress.total}</span>
                  <span>{Math.round((pdfProgress.current / pdfProgress.total) * 100)}%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-emerald-600 h-2 transition-all duration-200 rounded-full"
                    style={{ width: `${(pdfProgress.current / pdfProgress.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Success Notification Banner */}
      {downloadSuccess && (
        <div className="no-print bg-emerald-600 text-white py-2 px-4 text-center text-xs font-semibold shadow flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{downloadSuccess}</span>
        </div>
      )}

      {/* Main Document Stage with Zoom Scaling Container */}
      <main className="flex-1 py-6 px-2 sm:px-4 flex flex-col items-center overflow-x-auto">
        <div 
          ref={documentStageRef}
          style={{
            zoom: `${zoomLevel}%`
          }}
          className="w-full flex flex-col items-center transition-all duration-150 origin-top"
        >
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
              <AnswerKeyPage 
                onPrint={handleBrowserPrint} 
                onDirectPdf={() => handleExactPdfDownload(true)} 
              />
            </div>
          )}
        </div>
      </main>

      {/* FLOATING ZOOM WIDGET AT BOTTOM-RIGHT FOR EASY ACCESS AT ALL SCROLL POSITIONS */}
      <div className="no-print fixed bottom-5 right-5 z-40 bg-stone-900/90 text-white backdrop-blur-md shadow-xl border border-stone-700/80 rounded-full px-3 py-1.5 flex items-center space-x-2 text-xs">
        <button
          onClick={handleZoomOut}
          disabled={zoomLevel <= 50}
          className="p-1 rounded-full hover:bg-stone-700 disabled:opacity-40 cursor-pointer"
          title="Zoom Out (-10%)"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={handleResetZoom}
          className="px-1.5 py-0.5 font-mono text-[11px] font-bold text-amber-400 hover:text-amber-300 cursor-pointer"
          title="Reset Zoom to 100%"
        >
          {zoomLevel}%
        </button>

        <button
          onClick={handleZoomIn}
          disabled={zoomLevel >= 200}
          className="p-1 rounded-full hover:bg-stone-700 disabled:opacity-40 cursor-pointer"
          title="Zoom In (+10%)"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={handleFitPage}
          className="p-1 rounded-full hover:bg-stone-700 cursor-pointer text-stone-400 hover:text-white ml-1"
          title="Fit Page Width (80%)"
        >
          <Maximize2 className="w-3 h-3" />
        </button>
      </div>

      {/* Footer Info */}
      <footer className="no-print bg-stone-900 text-stone-400 text-xs py-4 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              NEET (UG) - 2026 Test Paper: Exactly 20 pages (Page 1 Cover, Pages 2-20 all 180 questions with natural question spacing, zero gaps) + Standalone Answer Paper.
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleExactPdfDownload(true)}
              className="text-emerald-400 hover:underline cursor-pointer font-semibold"
            >
              Download Exact PDF
            </button>
            <span>•</span>
            <button
              onClick={handleDocxDownload}
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Export Word (.docx)
            </button>
            <span>•</span>
            <button
              onClick={handleBrowserPrint}
              className="text-stone-300 hover:underline cursor-pointer"
            >
              Browser Print (Ctrl+P)
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
