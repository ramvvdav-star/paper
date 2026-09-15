import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Triggers the browser's native print-to-pdf dialog
 */
export function triggerPrintToPdf(): void {
  window.print();
}

/**
 * Generates an exact, pixel-perfect PDF file from DOM elements using html2canvas and jsPDF.
 * This directly downloads the exact rendering shown on screen as a PDF.
 *
 * @param containerElement The container element holding the .a4-sheet elements
 * @param filename The output PDF filename
 * @param onProgress Callback to report progress (current, total)
 */
export async function generateDirectPdf(
  containerElement: HTMLElement,
  filename: string = 'NEET_2026_PT-2_Question_Paper.pdf',
  onProgress?: (current: number, total: number) => void
): Promise<void> {
  // Find all .a4-sheet elements
  const sheets = containerElement.querySelectorAll<HTMLElement>('.a4-sheet');
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
    if (onProgress) {
      onProgress(i + 1, total);
    }

    const sheet = sheets[i];

    // Render sheet to canvas at 2x scale for crisp, print-quality text and lines
    const canvas = await html2canvas(sheet, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: sheet.scrollWidth,
      windowHeight: sheet.scrollHeight
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);

    if (i > 0) {
      pdf.addPage('a4', 'portrait');
    }

    // Add image precisely fitting the A4 page (0, 0, 210mm, 297mm)
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
  }

  // Save the generated PDF
  pdf.save(filename);
}
