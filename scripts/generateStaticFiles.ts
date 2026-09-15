import fs from 'fs';
import path from 'path';
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, BorderStyle, PageBreak } from 'docx';
import { allQuestions, testMetadata, getQuestionsByPage } from '../src/data';
import { Question } from '../src/types';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

console.log('Generating static files for direct download...');

// ==========================================
// 1. GENERATE QUESTION PAPER PDF (20 PAGES)
// ==========================================
function generateQuestionPaperPdf() {
  console.log('Generating 20-Page Question Paper PDF...');
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const leftColX = 12;
  const rightColX = 110;
  const colWidth = 88;
  const centerDividerX = 105;

  // PAGE 1: COVER PAGE
  // Header row
  doc.setFont('times', 'bold');
  doc.setFontSize(10);
  doc.text(`TEST BOOKLET NO. ${testMetadata.bookletNo}`, 15, 16);
  doc.text('TEST BOOKLET CODE', 170, 14, { align: 'center' });
  doc.rect(155, 16, 30, 10);
  doc.setFontSize(16);
  doc.text(testMetadata.bookletCode, 170, 23.5, { align: 'center' });

  // Roll number box
  doc.setFontSize(9);
  doc.text('ROLL NUMBER', 15, 33);
  for (let i = 0; i < 9; i++) {
    doc.rect(15 + i * 8, 35, 8, 8);
  }

  // Title
  doc.setFontSize(17);
  doc.text(testMetadata.testSeries, pageWidth / 2, 54, { align: 'center' });
  doc.setFontSize(13);
  doc.text(testMetadata.partTest, pageWidth / 2, 61, { align: 'center' });
  doc.setFontSize(12);
  doc.text(testMetadata.targetExam, pageWidth / 2, 68, { align: 'center' });
  doc.setFont('times', 'italic');
  doc.setFontSize(9.5);
  doc.text('Do not open this Test Booklet until you are asked to do so.', pageWidth / 2, 74, { align: 'center' });

  // Test Specs table
  doc.rect(15, 80, 180, 20);
  doc.line(15, 87, 195, 87);
  doc.line(75, 80, 75, 100);
  doc.line(135, 80, 135, 100);
  doc.setFont('times', 'bold');
  doc.setFontSize(8.5);
  doc.text('Time Allowed: 3 Hours 20 Minutes', 45, 85, { align: 'center' });
  doc.text('Maximum Marks: 720', 105, 85, { align: 'center' });
  doc.text('Number of Questions: 180', 165, 85, { align: 'center' });

  doc.setFont('times', 'normal');
  doc.setFontSize(8);
  doc.text('Physics (Sec A: 35, Sec B: 10)', 45, 94, { align: 'center' });
  doc.text('Chemistry (Sec A: 35, Sec B: 10)', 105, 94, { align: 'center' });
  doc.text('Biology (Botany: 45, Zoology: 45)', 165, 94, { align: 'center' });

  // Instructions Header
  doc.setFont('times', 'bold');
  doc.setFontSize(10.5);
  doc.text('IMPORTANT INSTRUCTIONS / महत्वपूर्ण निर्देश', pageWidth / 2, 107, { align: 'center' });
  doc.line(15, 109, 195, 109);

  // Instructions
  const instructions = [
    '1. The test consists of 180 questions divided into four subjects: Physics, Chemistry, Botany, and Zoology.',
    '2. Each correct answer carries 4 marks (+4). For each incorrect response, one mark (-1) will be deducted from the total score.',
    '3. Unanswered/unattempted questions will be given no mark (0).',
    '4. Use Blue/Black Ball Point Pen only for writing particulars on this page and marking responses on the OMR Answer Sheet.',
    '5. The test is strictly of 3 hours 20 minutes duration (200 minutes).',
    '6. Rough work is to be done in the space provided for this purpose in the Test Booklet only.',
    '7. On completion of the test, the candidate must hand over the OMR Answer Sheet to the invigilator before leaving the Room/Hall.',
    '8. Candidates are allowed to take away this Test Booklet with them after conclusion of the examination.',
    '9. The candidate should ensure that the Answer Sheet is not folded. Do not make any stray marks on the Answer Sheet.',
    '10. Electronic devices, mobile phones, calculators, and slide rules are strictly prohibited in the Examination Hall.'
  ];

  doc.setFont('times', 'normal');
  doc.setFontSize(8.5);
  let instY = 115;
  for (const inst of instructions) {
    const lines = doc.splitTextToSize(inst, 178);
    doc.text(lines, 16, instY);
    instY += lines.length * 4.2 + 1.5;
  }

  // Declaration & Signature Box
  doc.rect(15, 230, 180, 50);
  doc.line(15, 238, 195, 238);
  doc.setFont('times', 'bold');
  doc.setFontSize(9);
  doc.text('CANDIDATE DECLARATION / परीक्षार्थी घोषणा', 18, 235);

  doc.setFont('times', 'normal');
  doc.setFontSize(8);
  const declText = 'I have read all the instructions given above and adhere to the guidelines. I hereby declare that the particulars filled in by me are true and complete.';
  doc.text(doc.splitTextToSize(declText, 174), 18, 244);

  doc.setFont('times', 'bold');
  doc.text("Candidate's Name: ____________________________________", 18, 258);
  doc.text("Candidate's Signature: ____________________________", 18, 272);
  doc.text("Invigilator's Signature: ____________________________", 110, 272);

  // PAGES 2 TO 20
  for (let p = 2; p <= 20; p++) {
    doc.addPage('a4', 'portrait');

    const isOdd = p % 2 !== 0;
    const questions = getQuestionsByPage(p);
    const leftQuestions = questions.filter(q => q.column === 'left');
    const rightQuestions = questions.filter(q => q.column === 'right');

    // Page number box
    doc.setFont('times', 'bold');
    doc.setFontSize(8.5);
    const pgBoxX = isOdd ? 12 : 185;
    doc.rect(pgBoxX, 8, 13, 5);
    doc.text(`Pg-${p}`, pgBoxX + 6.5, 11.5, { align: 'center' });

    // Top rule
    doc.setLineWidth(0.3);
    doc.line(12, 14.5, 198, 14.5);

    let startY = 18;

    // Subject Banner if start of subject
    if (p === 2) {
      doc.setFillColor(245, 245, 245);
      doc.rect(pageWidth / 2 - 25, startY, 50, 6, 'FD');
      doc.setFontSize(10);
      doc.text('PHYSICS / भौतिकी', pageWidth / 2, startY + 4.2, { align: 'center' });
      startY += 9;
    } else if (p === 7) {
      doc.setFillColor(245, 245, 245);
      doc.rect(pageWidth / 2 - 25, startY, 50, 6, 'FD');
      doc.setFontSize(10);
      doc.text('CHEMISTRY / रसायन विज्ञान', pageWidth / 2, startY + 4.2, { align: 'center' });
      startY += 9;
    } else if (p === 12) {
      doc.setFillColor(245, 245, 245);
      doc.rect(pageWidth / 2 - 25, startY, 50, 6, 'FD');
      doc.setFontSize(10);
      doc.text('BIOLOGY / जीव विज्ञान', pageWidth / 2, startY + 4.2, { align: 'center' });
      startY += 9;
    }

    // Center divider line
    doc.setDrawColor(180, 180, 180);
    doc.line(centerDividerX, startY, centerDividerX, 285);
    doc.setDrawColor(0, 0, 0);

    // Helper to render a column of questions
    const renderCol = (qs: Question[], startX: number) => {
      let curY = startY;
      for (const q of qs) {
        if (curY > 275) break;

        // Question header & NCERT tag
        doc.setFont('times', 'bold');
        doc.setFontSize(8.5);
        doc.text(`${q.id}.`, startX, curY);

        doc.setFont('times', 'normal');
        doc.setFontSize(7.8);
        const qLines = doc.splitTextToSize(q.question, colWidth - 8);
        doc.text(qLines, startX + 6, curY);
        curY += qLines.length * 3.4;

        // NCERT tag
        doc.setFont('times', 'bold');
        doc.setFontSize(6.8);
        doc.text(`[${q.ncertPage}]`, startX + colWidth - 2, curY, { align: 'right' });
        curY += 3.2;

        // Render options
        doc.setFont('times', 'normal');
        doc.setFontSize(7.5);

        const opt1 = String(q.options?.[0] || '');
        const opt2 = String(q.options?.[1] || '');
        const opt3 = String(q.options?.[2] || '');
        const opt4 = String(q.options?.[3] || '');

        // Check if options are short enough for 2x2 grid
        const maxOptLen = Math.max(opt1.length, opt2.length, opt3.length, opt4.length);
        if (maxOptLen < 18) {
          doc.text(`(1) ${opt1}`, startX + 4, curY);
          doc.text(`(2) ${opt2}`, startX + colWidth / 2 + 2, curY);
          curY += 3.4;
          doc.text(`(3) ${opt3}`, startX + 4, curY);
          doc.text(`(4) ${opt4}`, startX + colWidth / 2 + 2, curY);
          curY += 4.5;
        } else {
          for (let optIdx = 0; optIdx < 4; optIdx++) {
            const optText = String(q.options?.[optIdx] || '');
            const optLines = doc.splitTextToSize(`(${optIdx + 1}) ${optText}`, colWidth - 6);
            doc.text(optLines, startX + 4, curY);
            curY += optLines.length * 3.3;
          }
          curY += 2;
        }

        curY += 1.5; // Natural space between questions
      }
    };

    renderCol(leftQuestions, leftColX);
    renderCol(rightQuestions, rightColX);

    // End of paper marker on Page 20
    if (p === 20) {
      doc.setFillColor(245, 245, 245);
      doc.rect(12, 276, 186, 6, 'FD');
      doc.setFont('times', 'bold');
      doc.setFontSize(8);
      doc.text('*** END OF THE QUESTION PAPER / प्रश्न पत्र समाप्त ***', pageWidth / 2, 280.2, { align: 'center' });
    }

    // Footer rule
    doc.setLineWidth(0.3);
    doc.line(12, 286, 198, 286);
    doc.setFont('times', 'normal');
    doc.setFontSize(7);
    doc.text('NEET (UG) - 2026 | PART TEST - XI / 02 | Test Booklet Code: PT-2', pageWidth / 2, 289.5, { align: 'center' });
  }

  const pdfOutput = doc.output('arraybuffer');
  const filePath = path.join(PUBLIC_DIR, 'NEET_2026_PT_2_Question_Paper_20Pages.pdf');
  fs.writeFileSync(filePath, Buffer.from(pdfOutput));
  console.log(`Saved: ${filePath} (${(fs.statSync(filePath).size / (1024 * 1024)).toFixed(2)} MB)`);
}

// ==========================================
// 2. GENERATE SEPARATE ANSWER PAPER PDF
// ==========================================
function generateAnswerPaperPdf() {
  console.log('Generating Answer Paper PDF...');
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  const pageWidth = 210;

  // Title
  doc.setFont('times', 'bold');
  doc.setFontSize(14);
  doc.text('NEET (UG) - 2026: MASTER ANSWER KEY & EXPLANATIONS', pageWidth / 2, 14, { align: 'center' });
  doc.setFontSize(10);
  doc.text('Test Booklet Code: PT-2 | 180 Questions with Detailed NCERT Reference', pageWidth / 2, 20, { align: 'center' });
  doc.line(12, 23, 198, 23);

  // Table of Answers (6 columns of 30 questions each)
  doc.setFontSize(8);
  const startY = 28;
  const colW = 31;

  for (let col = 0; col < 6; col++) {
    const colX = 12 + col * colW;
    // Header
    doc.setFillColor(235, 235, 235);
    doc.rect(colX, startY, colW - 1, 5, 'FD');
    doc.setFont('times', 'bold');
    doc.text('Q#  Ans   NCERT', colX + 2, startY + 3.5);

    doc.setFont('times', 'normal');
    for (let r = 0; r < 30; r++) {
      const qNum = col * 30 + r + 1;
      const q = allQuestions.find(item => item.id === qNum);
      const rowY = startY + 6 + r * 5.2;

      if (r % 2 === 1) {
        doc.setFillColor(250, 250, 250);
        doc.rect(colX, rowY - 3.5, colW - 1, 5.2, 'F');
      }

      if (q) {
        doc.setFont('times', 'bold');
        doc.text(`${q.id}.`, colX + 1.5, rowY);
        doc.text(`(${q.correctAnswer})`, colX + 9, rowY);
        doc.setFont('times', 'normal');
        doc.setFontSize(6.5);
        doc.text(`${q.ncertPage.replace('NCERT XI ', '')}`, colX + 17, rowY);
        doc.setFontSize(8);
      }
    }
  }

  // Explanations Section
  doc.addPage('a4', 'portrait');
  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.text('DETAILED STEP-BY-STEP EXPLANATIONS', pageWidth / 2, 15, { align: 'center' });
  doc.line(12, 18, 198, 18);

  let curY = 24;
  for (const q of allQuestions) {
    if (curY > 275) {
      doc.addPage('a4', 'portrait');
      curY = 15;
    }

    doc.setFont('times', 'bold');
    doc.setFontSize(8.5);
    doc.text(`Question ${q.id} [Answer: (${q.correctAnswer})] - ${q.subject} (${q.ncertPage})`, 12, curY);
    curY += 4;

    doc.setFont('times', 'normal');
    doc.setFontSize(7.5);
    const expLines = doc.splitTextToSize(`Explanation: ${q.explanation}`, 186);
    doc.text(expLines, 12, curY);
    curY += expLines.length * 3.3 + 3.5;
  }

  const pdfOutput = doc.output('arraybuffer');
  const filePath = path.join(PUBLIC_DIR, 'NEET_2026_PT_2_Separate_Answer_Paper.pdf');
  fs.writeFileSync(filePath, Buffer.from(pdfOutput));
  console.log(`Saved: ${filePath} (${(fs.statSync(filePath).size / (1024 * 1024)).toFixed(2)} MB)`);
}

// ==========================================
// 3. GENERATE QUESTION PAPER DOCX
// ==========================================
async function generateQuestionPaperDocx() {
  console.log('Generating Question Paper DOCX...');
  const docChildren: (Paragraph | Table)[] = [];

  // Cover Page
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { after: 100 },
      children: [
        new TextRun({
          text: `TEST BOOKLET NO. ${testMetadata.bookletNo}                                              TEST BOOKLET CODE: ${testMetadata.bookletCode}`,
          bold: true,
          font: 'Times New Roman',
          size: 20
        })
      ]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 100, after: 80 },
      children: [
        new TextRun({
          text: testMetadata.testSeries,
          bold: true,
          font: 'Times New Roman',
          size: 32
        })
      ]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: `${testMetadata.partTest} • ${testMetadata.targetExam}`,
          bold: true,
          font: 'Times New Roman',
          size: 24
        })
      ]
    }),
    new Paragraph({
      children: [new PageBreak()]
    })
  );

  // Pages 2 to 20
  for (let p = 2; p <= 20; p++) {
    const pageQuestions = getQuestionsByPage(p);
    docChildren.push(
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { after: 100 },
        children: [
          new TextRun({
            text: `[Page ${p} of 20] | NEET 2026 PT-2`,
            italics: true,
            font: 'Times New Roman',
            size: 16
          })
        ]
      })
    );

    for (const q of pageQuestions) {
      docChildren.push(
        new Paragraph({
          spacing: { before: 60, after: 30 },
          children: [
            new TextRun({
              text: `Q${q.id}. ${q.question} `,
              bold: true,
              font: 'Times New Roman',
              size: 20
            }),
            new TextRun({
              text: `[${q.ncertPage}]`,
              italics: true,
              font: 'Times New Roman',
              size: 16
            })
          ]
        }),
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({
              text: `(1) ${q.options?.[0] || ''}        (2) ${q.options?.[1] || ''}\n(3) ${q.options?.[2] || ''}        (4) ${q.options?.[3] || ''}`,
              font: 'Times New Roman',
              size: 19
            })
          ]
        })
      );
    }

    if (p < 20) {
      docChildren.push(new Paragraph({ children: [new PageBreak()] }));
    }
  }

  const doc = new Document({
    sections: [{ children: docChildren }]
  });

  const buffer = await Packer.toBuffer(doc);
  const filePath = path.join(PUBLIC_DIR, 'NEET_2026_PT_2_Question_Paper_20Pages.docx');
  fs.writeFileSync(filePath, buffer);
  console.log(`Saved: ${filePath} (${(fs.statSync(filePath).size / (1024 * 1024)).toFixed(2)} MB)`);
}

// ==========================================
// 4. GENERATE SEPARATE ANSWER PAPER DOCX
// ==========================================
async function generateAnswerPaperDocx() {
  console.log('Generating Answer Paper DOCX...');
  const docChildren: (Paragraph | Table)[] = [];

  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: 'NEET 2026 PT-2: OFFICIAL MASTER ANSWER KEY & SOLUTIONS',
          bold: true,
          font: 'Times New Roman',
          size: 28
        })
      ]
    })
  );

  for (const q of allQuestions) {
    docChildren.push(
      new Paragraph({
        spacing: { before: 80, after: 20 },
        children: [
          new TextRun({
            text: `Q${q.id}. Correct Answer: (${q.correctAnswer}) - [Ref: ${q.ncertPage}]`,
            bold: true,
            font: 'Times New Roman',
            size: 20
          })
        ]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({
            text: `Question: ${q.question}`,
            font: 'Times New Roman',
            size: 18
          })
        ]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: `Solution & Explanation: ${q.explanation}`,
            italics: true,
            font: 'Times New Roman',
            size: 18
          })
        ]
      })
    );
  }

  const doc = new Document({
    sections: [{ children: docChildren }]
  });

  const buffer = await Packer.toBuffer(doc);
  const filePath = path.join(PUBLIC_DIR, 'NEET_2026_PT_2_Separate_Answer_Paper.docx');
  fs.writeFileSync(filePath, buffer);
  console.log(`Saved: ${filePath} (${(fs.statSync(filePath).size / (1024 * 1024)).toFixed(2)} MB)`);
}

// Run all
async function main() {
  generateQuestionPaperPdf();
  generateAnswerPaperPdf();
  await generateQuestionPaperDocx();
  await generateAnswerPaperDocx();
  console.log('All static files (PDF + DOCX) successfully generated in public/ directory!');
}

main().catch(console.error);

