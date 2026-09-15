export type Subject = 'Physics' | 'Chemistry' | 'Biology';

export type QuestionType = 
  | 'standard'
  | 'match'
  | 'assertion_reason'
  | 'statements'
  | 'diagram';

export interface MatchPair {
  id: string;
  text: string;
}

export interface StatementItem {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  subject: Subject;
  type: QuestionType;
  question: string;
  ncertPage: string;
  options: [string, string, string, string];
  correctAnswer: 1 | 2 | 3 | 4;
  page: number;
  column: 'left' | 'right';
  explanation?: string;
  // Specialized formats
  diagramType?: string;
  assertion?: string;
  reason?: string;
  statementI?: string;
  statementII?: string;
  statements?: StatementItem[];
  listI?: MatchPair[];
  listII?: MatchPair[];
  listName1?: string;
  listName2?: string;
}

export interface TestMetadata {
  bookletNo: string;
  bookletCode: string;
  testSeries: string;
  partTest: string;
  targetExam: string;
  durationHours: number;
  totalQuestions: number;
  maxMarks: number;
  syllabus: {
    physics: string;
    chemistry: string;
    biology: string;
  };
}
