import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  PageBreak
} from 'docx';
import { saveAs } from 'file-saver';
import { allQuestions, testMetadata } from '../data';
import { Question } from '../types';

export async function generateAndDownloadDocx(): Promise<void> {
  const docChildren: (Paragraph | Table)[] = [];

  // Top header line
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
    })
  );

  // Big Title
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 100, after: 80 },
      children: [
        new TextRun({
          text: testMetadata.testSeries,
          bold: true,
          font: 'Times New Roman',
          size: 36
        })
      ]
    })
  );

  // Subtitle
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: `${testMetadata.partTest}  |  ${testMetadata.targetExam}`,
          bold: true,
          font: 'Times New Roman',
          size: 24
        })
      ]
    })
  );

  // Warning text
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 180 },
      children: [
        new TextRun({
          text: 'Do not open this Test Booklet until you are asked to do so.',
          bold: true,
          italics: true,
          font: 'Times New Roman',
          size: 20
        })
      ]
    })
  );

  // Syllabus Box
  const syllabusTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            margins: { top: 120, bottom: 120, left: 160, right: 160 },
            borders: {
              top: { style: BorderStyle.DASHED, size: 2, color: '000000' },
              bottom: { style: BorderStyle.DASHED, size: 2, color: '000000' },
              left: { style: BorderStyle.DASHED, size: 2, color: '000000' },
              right: { style: BorderStyle.DASHED, size: 2, color: '000000' }
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { after: 100 },
                children: [
                  new TextRun({
                    text: '— Syllabus —',
                    bold: true,
                    font: 'Times New Roman',
                    size: 22
                  })
                ]
              }),
              new Paragraph({
                spacing: { after: 60 },
                children: [
                  new TextRun({ text: 'PHYSICS: ', bold: true, font: 'Times New Roman', size: 18 }),
                  new TextRun({ text: testMetadata.syllabus.physics, font: 'Times New Roman', size: 18 })
                ]
              }),
              new Paragraph({
                spacing: { after: 60 },
                children: [
                  new TextRun({ text: 'CHEMISTRY: ', bold: true, font: 'Times New Roman', size: 18 }),
                  new TextRun({ text: testMetadata.syllabus.chemistry, font: 'Times New Roman', size: 18 })
                ]
              }),
              new Paragraph({
                spacing: { after: 60 },
                children: [
                  new TextRun({ text: 'BIOLOGY: ', bold: true, font: 'Times New Roman', size: 18 }),
                  new TextRun({ text: testMetadata.syllabus.biology, font: 'Times New Roman', size: 18 })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
  docChildren.push(syllabusTable);

  // Instructions Header
  docChildren.push(
    new Paragraph({
      spacing: { before: 200, after: 80 },
      children: [
        new TextRun({
          text: 'Important Instructions :',
          bold: true,
          font: 'Times New Roman',
          size: 22
        })
      ]
    })
  );

  const instructions = [
    '1. This test is of 3 Hours duration.',
    '2. The Test Booklet contains 180 multiple-choice questions [four options (1), (2), (3) & (4) with a single correct answer] from Physics (45 Questions), Chemistry (45 Questions) & Biology (90 Questions). All questions are compulsory.',
    '3. Each question carries 4 marks. For each correct response, the candidate will get 4 marks. For each incorrect response, 1 mark will be deducted from the total score. No mark will be deducted for unattempted questions. The maximum marks is 720.',
    '4. Use Blue/Black Ball Point Pen only for writing particulars on this page/special Answer Sheet (OMR).',
    '5. Do not encode or darken more than one circle for answering a particular question for it will be treated as a wrong answer.',
    '6. Rough work is to be done on the space provided for this purpose in the Test Booklet only.',
    '7. Calculators, Slide Rules, Log Tables, Geometry Box, Electronic Digital Watches with facilities of calculators, cellular phones, pagers or any other electronic gadget are not allowed inside the Examination Hall.'
  ];

  instructions.forEach(ins => {
    docChildren.push(
      new Paragraph({
        spacing: { after: 50 },
        children: [
          new TextRun({
            text: ins,
            font: 'Times New Roman',
            size: 18
          })
        ]
      })
    );
  });

  // Candidate Information Box
  docChildren.push(
    new Paragraph({
      spacing: { before: 200, after: 80 },
      children: [
        new TextRun({
          text: 'Name of Candidate (in Capital) : ____________________________________________________',
          font: 'Times New Roman',
          size: 18
        })
      ]
    })
  );

  docChildren.push(
    new Paragraph({
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: 'Centre Name (in Capital) : __________________________________   Date : _______________',
          font: 'Times New Roman',
          size: 18
        })
      ]
    })
  );

  docChildren.push(
    new Paragraph({
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: "Candidate's Signature : _________________________   Invigilator's Signature : _________________________",
          font: 'Times New Roman',
          size: 18
        })
      ]
    })
  );

  // Page break to start questions
  docChildren.push(
    new Paragraph({
      children: [new PageBreak()]
    })
  );

  // Helper to append question
  let currentSubject = '';

  allQuestions.forEach((q: Question) => {
    // Subject Section Banner
    if (q.subject !== currentSubject) {
      currentSubject = q.subject;
      docChildren.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 240, after: 120 },
          heading: HeadingLevel.HEADING_2,
          children: [
            new TextRun({
              text: `--- ${currentSubject.toUpperCase()} ---`,
              bold: true,
              font: 'Times New Roman',
              size: 26
            })
          ]
        })
      );
    }

    // Question Number and Text
    docChildren.push(
      new Paragraph({
        spacing: { before: 100, after: 40 },
        children: [
          new TextRun({
            text: `${q.id}.  `,
            bold: true,
            font: 'Times New Roman',
            size: 20
          }),
          new TextRun({
            text: q.question,
            font: 'Times New Roman',
            size: 20
          }),
          new TextRun({
            text: `    [${q.ncertPage}]`,
            italics: true,
            bold: true,
            font: 'Times New Roman',
            size: 17
          })
        ]
      })
    );

    // If matching question
    if (q.type === 'match' && q.listI && q.listII) {
      const matchRows: TableRow[] = [];
      const titleRow = new TableRow({
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: q.listName1 || 'List-I',
                    bold: true,
                    font: 'Times New Roman',
                    size: 18
                  })
                ]
              })
            ]
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: q.listName2 || 'List-II',
                    bold: true,
                    font: 'Times New Roman',
                    size: 18
                  })
                ]
              })
            ]
          })
        ]
      });
      matchRows.push(titleRow);

      const maxLen = Math.max(q.listI.length, q.listII.length);
      for (let i = 0; i < maxLen; i++) {
        const item1 = q.listI[i];
        const item2 = q.listII[i];
        matchRows.push(
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: item1 ? `${item1.id}. ${item1.text}` : '',
                        font: 'Times New Roman',
                        size: 18
                      })
                    ]
                  })
                ]
              }),
              new TableCell({
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: item2 ? `${item2.id}. ${item2.text}` : '',
                        font: 'Times New Roman',
                        size: 18
                      })
                    ]
                  })
                ]
              })
            ]
          })
        );
      }

      docChildren.push(
        new Table({
          width: { size: 90, type: WidthType.PERCENTAGE },
          rows: matchRows
        })
      );
    }

    // If statements question
    if (q.statements && q.statements.length > 0) {
      q.statements.forEach(st => {
        docChildren.push(
          new Paragraph({
            spacing: { after: 20 },
            indent: { left: 360 },
            children: [
              new TextRun({
                text: `(${st.id}) ${st.text}`,
                font: 'Times New Roman',
                size: 19
              })
            ]
          })
        );
      });
    }

    // Options
    docChildren.push(
      new Paragraph({
        spacing: { before: 40, after: 20 },
        indent: { left: 240 },
        children: [
          new TextRun({ text: '(1) ', bold: true, font: 'Times New Roman', size: 19 }),
          new TextRun({ text: `${q.options[0]}        `, font: 'Times New Roman', size: 19 }),
          new TextRun({ text: '(2) ', bold: true, font: 'Times New Roman', size: 19 }),
          new TextRun({ text: `${q.options[1]}`, font: 'Times New Roman', size: 19 })
        ]
      })
    );

    docChildren.push(
      new Paragraph({
        spacing: { after: 60 },
        indent: { left: 240 },
        children: [
          new TextRun({ text: '(3) ', bold: true, font: 'Times New Roman', size: 19 }),
          new TextRun({ text: `${q.options[2]}        `, font: 'Times New Roman', size: 19 }),
          new TextRun({ text: '(4) ', bold: true, font: 'Times New Roman', size: 19 }),
          new TextRun({ text: `${q.options[3]}`, font: 'Times New Roman', size: 19 })
        ]
      })
    );
  });

  // Page break for Answer Key
  docChildren.push(
    new Paragraph({
      children: [new PageBreak()]
    })
  );

  // Answer Key Section
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 120, after: 120 },
      children: [
        new TextRun({
          text: 'OFFICIAL ANSWER KEY & SOLUTIONS SUMMARY',
          bold: true,
          font: 'Times New Roman',
          size: 26
        })
      ]
    })
  );

  // 180 questions table of answers (10 columns x 18 rows)
  const answerRows: TableRow[] = [];
  const headerCells: TableCell[] = [];
  for (let c = 0; c < 10; c++) {
    headerCells.push(
      new TableCell({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: 'Q# (Ans)', bold: true, font: 'Times New Roman', size: 16 })]
          })
        ]
      })
    );
  }
  answerRows.push(new TableRow({ children: headerCells }));

  for (let r = 0; r < 18; r++) {
    const rowCells: TableCell[] = [];
    for (let c = 0; c < 10; c++) {
      const qNum = r * 10 + c + 1;
      const qObj = allQuestions.find(item => item.id === qNum);
      rowCells.push(
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `${qNum}: (${qObj?.correctAnswer || 1})`,
                  font: 'Times New Roman',
                  size: 16
                })
              ]
            })
          ]
        })
      );
    }
    answerRows.push(new TableRow({ children: rowCells }));
  }

  docChildren.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: answerRows
    })
  );

  // Build the complete docx document
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720, // 0.5 inch
              bottom: 720,
              left: 720,
              right: 720
            }
          }
        },
        children: docChildren
      }
    ]
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `NEET_2026_PT-2_Question_Paper_Changed.docx`);
}
