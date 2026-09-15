import { TestMetadata } from '../types';

export const initialTestMetadata: TestMetadata = {
  bookletNo: '20261102',
  bookletCode: 'PT-2',
  testSeries: 'Test Series - NEET',
  partTest: 'PART TEST - XI / 02',
  targetExam: 'NEET(UG)-2026',
  durationHours: 3,
  totalQuestions: 180,
  maxMarks: 720,
  syllabus: {
    physics: 'Work, Energy & Power, System of Particles & Rotational Motion and Gravitation',
    chemistry: 'Chemical Bonding and Molecular Structure, Thermodynamics',
    biology: 'Morphology of Flowering Plants, Anatomy of Flowering Plants, Cell: The Unit of Life, Biomolecules'
  }
};
