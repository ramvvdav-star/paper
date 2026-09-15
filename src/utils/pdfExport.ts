import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export interface PdfExportResult {
  success: boolean;
  blob?: Blob;
  url?: string;
  filename: string;
  pageCount: number;
  error?: string;
}

/**
 * Triggers the browser's native print dialog
 */
export function triggerPrintToPdf(): void {
  window.print();
}

/**
 * Robustly initiates a file download for a Blob using multiple fallback techniques:
 * 1. file-saver saveAs
 * 2. Programmatic <a> click with object URL
 */
export function triggerDownloadBlob(blob: Blob, filename: string): string {
  const url = URL.createObjectURL(blob);

  // Technique 1: file-saver saveAs
  try {
    saveAs(blob, filename);
  } catch (err) {
    console.warn('saveAs encountered an issue, trying direct anchor click:', err);
  }

  // Technique 2: HTML Anchor element click
  try {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      if (document.body.contains(a)) {
        document.body.removeChild(a);
      }
    }, 4000);
  } catch (err) {
    console.warn('Anchor click fallback failed:', err);
  }

  return url;
}

/**
 * Generates an exact, pixel-perfect PDF from a list of DOM elements.
 * Optimized for speed, memory efficiency, and rock-solid reliability in iframes.
 *
 * @param sheets Array of HTMLElement (e.g. .a4-sheet elements)
 * @param filename Output filename
 * @param onProgress Progress callback with (current, total, statusText)
 */
export async function generatePdfFromElements(
  sheets: HTMLElement[],
  filename: string = 'NEET_2026_PT-2_Question_Paper.pdf',
  onProgress?: (current: number, total: number, statusText: string) => void
): Promise<PdfExportResult> {
  if (!sheets || sheets.length === 0) {
    throw new Error('No pages found to export.');
  }

  const total = sheets.length;

  // Initialize jsPDF in portrait A4 (210 x 297 mm)
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  const pdfWidth = 210;
  const pdfHeight = 297;

  for (let i = 0; i < total; i++) {
    const sheet = sheets[i];
    const pageNum = i + 1;

    if (onProgress) {
      onProgress(pageNum, total, `Rendering page ${pageNum} of ${total}...`);
    }

    try {
      // Use scale: 1.35 which gives crisp 130 DPI reading & print quality,
      // while staying fast and avoiding mobile/iframe memory crashes.
      const canvas = await html2canvas(sheet, {
        scale: 1.35,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff',
        ignoreElements: (element) => {
          return element.classList.contains('no-print');
        }
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.92);

      if (i > 0) {
        pdf.addPage('a4', 'portrait');
      }

      // Add image precisely fitting standard A4 dimensions (0, 0, 210mm, 297mm)
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

      // Free canvas memory immediately to prevent browser memory spikes
      canvas.width = 0;
      canvas.height = 0;

      // Small tick pause to allow browser GC and let React update the UI progress bar smoothly
      await new Promise(resolve => setTimeout(resolve, 35));
    } catch (pageErr) {
      console.error(`Error rendering page ${pageNum} for PDF:`, pageErr);
      // Even if one page encounters an issue, continue with the rest of the document
    }
  }

  if (onProgress) {
    onProgress(total, total, 'Finalizing and packaging PDF file...');
  }

  // Create Blob
  const blob = pdf.output('blob');
  
  // Trigger download and get reusable URL
  const url = triggerDownloadBlob(blob, filename);

  return {
    success: true,
    blob,
    url,
    filename,
    pageCount: total
  };
}

/**
 * Convenience function: exports all .a4-sheet elements inside a container element
 */
export async function generateDirectPdf(
  containerElement: HTMLElement,
  filename: string = 'NEET_2026_PT-2_Question_Paper.pdf',
  onProgress?: (current: number, total: number, statusText: string) => void
): Promise<PdfExportResult> {
  // Check if container has a zoom applied (e.g. from the website's zoom controls)
  const origZoom = containerElement.style.zoom;
  if (origZoom && origZoom !== '100%' && origZoom !== '1') {
    containerElement.style.zoom = '100%';
  }

  try {
    const sheetNodeList = containerElement.querySelectorAll<HTMLElement>('.a4-sheet');
    const sheets = Array.from(sheetNodeList);

    if (sheets.length === 0) {
      throw new Error('No .a4-sheet pages found in container.');
    }

    return await generatePdfFromElements(sheets, filename, onProgress);
  } finally {
    // Restore original zoom level after capture
    if (origZoom) {
      containerElement.style.zoom = origZoom;
    }
  }
}
