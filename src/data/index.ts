import { physicsQuestions } from './physicsQuestions';
import { chemistryQuestions } from './chemistryQuestions';
import { biologyQuestions } from './biologyQuestions';
import { initialTestMetadata } from './testMetadata';
import { Question, Subject } from '../types';

export const allQuestions: Question[] = [
  ...physicsQuestions,
  ...chemistryQuestions,
  ...biologyQuestions
];

export const testMetadata = initialTestMetadata;

export function getQuestionsByPage(page: number): Question[] {
  return allQuestions.filter(q => q.page === page);
}

export function getQuestionsBySubject(subject: Subject): Question[] {
  return allQuestions.filter(q => q.subject === subject);
}

export function getPageSubject(page: number): Subject | 'Mixed' {
  if (page <= 6) return 'Physics';
  if (page === 7) return 'Mixed'; // Q39-45 Physics, Q46-47 Chemistry
  if (page <= 10) return 'Chemistry';
  if (page === 11) return 'Mixed'; // Q89-90 Chemistry, Q91-98 Biology
  return 'Biology';
}
