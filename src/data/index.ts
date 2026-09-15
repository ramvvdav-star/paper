import { physicsQuestions } from './physicsQuestions';
import { chemistryQuestions } from './chemistryQuestions';
import { biologyQuestions } from './biologyQuestions';
import { initialTestMetadata } from './testMetadata';
import { Question, Subject } from '../types';

export const allQuestions: Question[] = [
  ...physicsQuestions,
  ...chemistryQuestions,
  ...biologyQuestions
].map(q => {
  let page = 2;
  let column: 'left' | 'right' = 'left';

  if (q.id <= 45) {
    // Physics: 45 questions across 5 pages (Pages 2 to 6, 9 questions/page)
    const idx = q.id - 1; // 0 to 44
    page = 2 + Math.floor(idx / 9);
    column = (idx % 9) < 5 ? 'left' : 'right'; // 5 left, 4 right
  } else if (q.id <= 90) {
    // Chemistry: 45 questions across 5 pages (Pages 7 to 11, 9 questions/page)
    const idx = q.id - 46; // 0 to 44
    page = 7 + Math.floor(idx / 9);
    column = (idx % 9) < 5 ? 'left' : 'right'; // 5 left, 4 right
  } else {
    // Biology: 90 questions across 9 pages (Pages 12 to 20, 10 questions/page)
    const idx = q.id - 91; // 0 to 89
    page = 12 + Math.floor(idx / 10);
    column = (idx % 10) < 5 ? 'left' : 'right'; // 5 left, 5 right
  }

  return { ...q, page, column };
});

export const testMetadata = initialTestMetadata;

export function getQuestionsByPage(page: number): Question[] {
  return allQuestions.filter(q => q.page === page);
}

export function getQuestionsBySubject(subject: Subject): Question[] {
  return allQuestions.filter(q => q.subject === subject);
}

export function getPageSubject(page: number): Subject | 'Cover' {
  if (page <= 1) return 'Cover' as any;
  if (page <= 6) return 'Physics';
  if (page <= 11) return 'Chemistry';
  return 'Biology';
}
