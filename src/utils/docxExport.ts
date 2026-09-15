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
import { allQuestions, testMetadata, getQuestionsByPage } from '../data';
import { Question } from '../types';

/**
 * Generates the clean 20-page NEET Question Paper (.docx)
 * Strictly contains the 20 pages (Cover + 19 question pages) without answers.
 */
export async function generateAndDownloadDocx(): Promise<void> {
  const docChildren: (Paragraph | Table)[] = [];

  // ================= PAGE 1: COVER PAGE =================
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
                spacing: { after: 80 },
                children: [
                  new TextRun({
                    text: 'SYLLABUS FOR TEST',
                    bold: true,
                    font: 'Times New Roman',
                    size: 20
                  })
                ]
              }),
              new Paragraph({
                spacing: { after: 40 },
                children: [
                  new TextRun({ text: 'PHYSICS: ', bold: true, font: 'Times New Roman', size: 18 }),
                  new TextRun({ text: testMetadata.syllabus.physics, font: 'Times New Roman', size: 18 })
                ]
              }),
              new Paragraph({
                spacing: { after: 40 },
                children: [
                  new TextRun({ text: 'CHEMISTRY: ', bold: true, font: 'Times New Roman', size: 18 }),
                  new TextRun({ text: testMetadata.syllabus.chemistry, font: 'Times New Roman', size: 18 })
                ]
              }),
              new Paragraph({
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

  // Instructions
  docChildren.push(
    new Paragraph({
      spacing: { before: 180, after: 60 },
      children: [
        new TextRun({
          text: 'IMPORTANT INSTRUCTIONS:',
          bold: true,
          font: 'Times New Roman',
          size: 20
        })
      ]
    })
  );

  const instructions = [
    '1. The test is of 3 Hours duration and the maximum mark is 720.',
    '2. The Test Booklet contains 180 multiple-choice questions [Physics: 45, Chemistry: 45, Biology: 90]. All questions are compulsory.',
    '3. Each question carries 4 marks. For each correct response, candidate will get 4 marks; 1 mark will be deducted for incorrect responses.',
    '4. Use Blue/Black Ball Point Pen only for writing particulars and marking responses.',
    '5. Rough work is to be done on the rough sheets provided in the Examination Hall.',
    '6. Calculators, cellular phones, or electronic gadgets are strictly prohibited inside the hall.'
  ];

  instructions.forEach(ins => {
    docChildren.push(
      new Paragraph({
        spacing: { after: 40 },
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

  // Candidate Particulars
  docChildren.push(
    new Paragraph({
      spacing: { before: 180, after: 60 },
      children: [
        new TextRun({
          text: "Candidate's Name (in Capital) : __________________________________   Roll No : __________________",
          font: 'Times New Roman',
          size: 18
        })
      ]
    })
  );

  docChildren.push(
    new Paragraph({
      spacing: { after: 120 },
      children: [
        new TextRun({
          text: "Candidate's Signature : _________________________   Invigilator's Signature : _________________________",
          font: 'Times New Roman',
          size: 18
        })
      ]
    })
  );

  // ================= PAGES 2 TO 20: QUESTIONS =================
  for (let p = 2; p <= 20; p++) {
    // Page Break to start new page
    docChildren.push(
      new Paragraph({
        children: [new PageBreak()]
      })
    );

    // Top Page Header
    docChildren.push(
      new Paragraph({
        alignment: p % 2 !== 0 ? AlignmentType.LEFT : AlignmentType.RIGHT,
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: `Pg-${p}`,
            bold: true,
            font: 'Times New Roman',
            size: 18
          })
        ]
      })
    );

    // Subject Banner
    if (p === 2) {
      docChildren.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 80, after: 100 },
          heading: HeadingLevel.HEADING_2,
          children: [
            new TextRun({
              text: '--- PHYSICS ---',
              bold: true,
              font: 'Times New Roman',
              size: 24
            })
          ]
        })
      );
    } else if (p === 7) {
      docChildren.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 80, after: 100 },
          heading: HeadingLevel.HEADING_2,
          children: [
            new TextRun({
              text: '--- CHEMISTRY ---',
              bold: true,
              font: 'Times New Roman',
              size: 24
            })
          ]
        })
      );
    } else if (p === 12) {
      docChildren.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 80, after: 100 },
          heading: HeadingLevel.HEADING_2,
          children: [
            new TextRun({
              text: '--- BIOLOGY ---',
              bold: true,
              font: 'Times New Roman',
              size: 24
            })
          ]
        })
      );
    }

    // Questions for this page
    const pageQuestions = getQuestionsByPage(p);
    pageQuestions.forEach((q: Question) => {
      // Question Number and Text
      docChildren.push(
        new Paragraph({
          spacing: { before: 80, after: 30 },
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

      // Match Table if applicable
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

      // Statements if applicable
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
          spacing: { before: 30, after: 15 },
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
          spacing: { after: 50 },
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

    // End of Question Paper marker on Page 20
    if (p === 20) {
      docChildren.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 120, after: 80 },
          children: [
            new TextRun({
              text: '*** END OF THE QUESTION PAPER / प्रश्न पत्र समाप्त ***',
              bold: true,
              font: 'Times New Roman',
              size: 22
            })
          ]
        })
      );
    }
  }

  // Build the complete Question Paper docx document
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,
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
  saveAs(blob, `NEET_2026_PT-2_Question_Paper_20Pages.docx`);
}

/**
 * Generates the dedicated SEPARATE Answer Paper (.docx)
 * Contains the complete 180-Question Master OMR Grid & Detailed Step-by-Step Solutions.
 */
export async function generateAndDownloadAnswerDocx(): Promise<void> {
  const docChildren: (Paragraph | Table)[] = [];

  // Header
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: 'NEET (UG) - 2026 | PART TEST - XI / 02',
          bold: true,
          font: 'Times New Roman',
          size: 24
        })
      ]
    })
  );

  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: 'OFFICIAL MASTER ANSWER PAPER & DETAILED SOLUTIONS',
          bold: true,
          font: 'Times New Roman',
          size: 32
        })
      ]
    })
  );

  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 180 },
      children: [
        new TextRun({
          text: 'Test Booklet Code: PT-2 | Maximum Marks: 720 | 180 Questions (Physics: 1-45, Chemistry: 46-90, Biology: 91-180)',
          font: 'Times New Roman',
          size: 20
        })
      ]
    })
  );

  // Section 1: Quick Master OMR Answer Key Table
  docChildren.push(
    new Paragraph({
      spacing: { before: 100, after: 80 },
      heading: HeadingLevel.HEADING_2,
      children: [
        new TextRun({
          text: 'PART I: MASTER ANSWER KEY MATRIX (180 QUESTIONS)',
          bold: true,
          font: 'Times New Roman',
          size: 24
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
                  bold: true,
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

  // Page break for Detailed Solutions
  docChildren.push(
    new Paragraph({
      children: [new PageBreak()]
    })
  );

  // Section 2: Detailed Solutions
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 120, after: 120 },
      heading: HeadingLevel.HEADING_1,
      children: [
        new TextRun({
          text: 'PART II: DETAILED STEP-BY-STEP SOLUTIONS & EXPLANATIONS',
          bold: true,
          font: 'Times New Roman',
          size: 28
        })
      ]
    })
  );

  let curSub = '';
  allQuestions.forEach((q: Question) => {
    if (q.subject !== curSub) {
      curSub = q.subject;
      docChildren.push(
        new Paragraph({
          spacing: { before: 200, after: 80 },
          heading: HeadingLevel.HEADING_2,
          children: [
            new TextRun({
              text: `=== ${curSub.toUpperCase()} SOLUTIONS ===`,
              bold: true,
              font: 'Times New Roman',
              size: 24
            })
          ]
        })
      );
    }

    docChildren.push(
      new Paragraph({
        spacing: { before: 60, after: 20 },
        children: [
          new TextRun({ text: `Q${q.id}. `, bold: true, font: 'Times New Roman', size: 20 }),
          new TextRun({ text: `Correct Option: (${q.correctAnswer})`, bold: true, font: 'Times New Roman', size: 20, color: '006600' }),
          new TextRun({ text: `   [Ref: ${q.ncertPage}]`, italics: true, font: 'Times New Roman', size: 18 })
        ]
      })
    );

    docChildren.push(
      new Paragraph({
        spacing: { after: 20 },
        indent: { left: 240 },
        children: [
          new TextRun({ text: `Question: `, bold: true, font: 'Times New Roman', size: 18 }),
          new TextRun({ text: q.question, font: 'Times New Roman', size: 18 })
        ]
      })
    );

    if (q.explanation) {
      docChildren.push(
        new Paragraph({
          spacing: { after: 60 },
          indent: { left: 240 },
          children: [
            new TextRun({ text: `Explanation: `, bold: true, font: 'Times New Roman', size: 18, color: '883300' }),
            new TextRun({ text: q.explanation, font: 'Times New Roman', size: 18 })
          ]
        })
      );
    }
  });

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,
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
  saveAs(blob, `NEET_2026_PT-2_Separate_Answer_Paper_and_Solutions.docx`);
}
