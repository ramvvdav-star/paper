import { Question } from '../types';

export const chemistryQuestions: Question[] = [
  // Page 7: Q46 - Q47
  {
    id: 46,
    subject: 'Chemistry',
    type: 'standard',
    question: 'The standard enthalpy of formation (ΔfH°) of CO₂(g), H₂O(l) and CH₄(g) are -393.5, -285.8 and -74.8 kJ mol⁻¹ respectively. The enthalpy of combustion of methane at 298 K is:',
    ncertPage: 'NCERT Page 143',
    options: ['-890.3 kJ mol⁻¹', '-604.5 kJ mol⁻¹', '-965.1 kJ mol⁻¹', '+890.3 kJ mol⁻¹'],
    correctAnswer: 1,
    page: 7,
    column: 'left',
    explanation: 'CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l). ΔcH° = [ΔfH°(CO₂) + 2ΔfH°(H₂O)] - [ΔfH°(CH₄)] = [-393.5 + 2(-285.8)] - [-74.8] = -965.1 + 74.8 = -890.3 kJ mol⁻¹.'
  },
  {
    id: 47,
    subject: 'Chemistry',
    type: 'statements',
    question: 'From the following, select the correct statements regarding SF₆ molecule:',
    ncertPage: 'NCERT Page 120',
    statements: [
      { id: 'A', text: 'Central sulfur atom undergoes sp³d² hybridization.' },
      { id: 'B', text: 'The molecule possesses regular octahedral geometry.' },
      { id: 'C', text: 'All S-F bond lengths are equivalent.' },
      { id: 'D', text: 'It has a non-zero dipole moment.' }
    ],
    options: ['A, B and C only', 'A and B only', 'B, C and D only', 'A, B, C and D'],
    correctAnswer: 1,
    page: 7,
    column: 'right',
    explanation: 'SF₆ has sp³d² hybridization with regular octahedral geometry where all 6 S-F bond lengths are equivalent, and by symmetry its dipole moment is zero.'
  },

  // Page 8: Q48 - Q61
  {
    id: 48,
    subject: 'Chemistry',
    type: 'standard',
    question: 'Given the bond enthalpies: C-H = 414 kJ mol⁻¹, C-C = 347 kJ mol⁻¹, C=C = 614 kJ mol⁻¹, and H-H = 436 kJ mol⁻¹. The enthalpy change for the hydrogenation of ethene: C₂H₄(g) + H₂(g) → C₂H₆(g) is:',
    ncertPage: 'NCERT Page 153',
    options: ['-125 kJ mol⁻¹', '+125 kJ mol⁻¹', '-250 kJ mol⁻¹', '+250 kJ mol⁻¹'],
    correctAnswer: 1,
    page: 8,
    column: 'left',
    explanation: 'Bonds broken: 1 C=C (614) + 1 H-H (436) = 1050 kJ. Bonds formed: 1 C-C (347) + 2 C-H (2 × 414 = 828) = 1175 kJ. ΔH = 1050 - 1175 = -125 kJ mol⁻¹.'
  },
  {
    id: 49,
    subject: 'Chemistry',
    type: 'standard',
    question: 'According to Fajan’s rules, which among the following compounds has the highest covalent character?',
    ncertPage: 'NCERT Page 112',
    options: ['AlCl₃', 'MgCl₂', 'NaCl', 'SiCl₄'],
    correctAnswer: 4,
    page: 8,
    column: 'left',
    explanation: 'Higher positive charge and smaller cation size increase polarizing power. Si⁴⁺ has highest charge and smallest radius, imparting highest covalent character to SiCl₄.'
  },
  {
    id: 50,
    subject: 'Chemistry',
    type: 'standard',
    question: 'Two moles of an ideal gas expand isothermally and reversibly from 2 L to 20 L at 300 K. The work done by the gas is (R = 8.314 J K⁻¹ mol⁻¹):',
    ncertPage: 'NCERT Page 142',
    options: ['-11.49 kJ', '-5.74 kJ', '+11.49 kJ', '-22.98 kJ'],
    correctAnswer: 1,
    page: 8,
    column: 'left',
    explanation: 'Wrev = -2.303 n R T log(V₂/V₁) = -2.303 × 2 × 8.314 × 300 × log(10) = -11488 J = -11.49 kJ.'
  },
  {
    id: 51,
    subject: 'Chemistry',
    type: 'match',
    question: 'Match the species in Column-I with their molecular shapes in Column-II based on VSEPR theory:',
    ncertPage: 'NCERT Page 125',
    listName1: 'Column-I (Molecule)',
    listName2: 'Column-II (Shape)',
    listI: [
      { id: 'A', text: 'ClF₃' },
      { id: 'B', text: 'XeF₄' },
      { id: 'C', text: 'SF₄' },
      { id: 'D', text: 'BF₃' }
    ],
    listII: [
      { id: 'p', text: 'Square planar' },
      { id: 'q', text: 'T-shaped' },
      { id: 'r', text: 'Trigonal planar' },
      { id: 's', text: 'See-saw' }
    ],
    options: [
      'A - (q), B - (p), C - (s), D - (r)',
      'A - (p), B - (q), C - (r), D - (s)',
      'A - (q), B - (s), C - (p), D - (r)',
      'A - (s), B - (p), C - (q), D - (r)'
    ],
    correctAnswer: 1,
    page: 8,
    column: 'left',
    explanation: 'ClF₃: 3 bp + 2 lp = T-shaped; XeF₄: 4 bp + 2 lp = Square planar; SF₄: 4 bp + 1 lp = See-saw; BF₃: 3 bp = Trigonal planar.'
  },
  {
    id: 52,
    subject: 'Chemistry',
    type: 'standard',
    question: 'Which of the following pairs of molecules has the same bond order?',
    ncertPage: 'NCERT Page 111',
    options: ['O₂⁺ and NO', 'CO and NO⁺', 'N₂ and O₂', 'C₂ and N₂⁺'],
    correctAnswer: 2,
    page: 8,
    column: 'left',
    explanation: 'CO (14 electrons) has bond order 3. NO⁺ (14 electrons) also has bond order 3.'
  },
  {
    id: 53,
    subject: 'Chemistry',
    type: 'statements',
    question: 'Given below are two statements:\nStatement I: The boiling point of H₂O is abnormally higher than H₂S due to extensive intermolecular hydrogen bonding.\nStatement II: Hydrogen bonding is stronger in HF than in H₂O because fluorine is more electronegative than oxygen.',
    ncertPage: 'NCERT Page 131',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 1,
    page: 8,
    column: 'left',
    explanation: 'Both statements are true facts: each H-F hydrogen bond is individually stronger than an H-O bond due to F electronegativity; H₂O forms higher boiling liquids because of 4 H-bonds per molecule forming an extensive 3D network.'
  },
  {
    id: 54,
    subject: 'Chemistry',
    type: 'standard',
    question: 'For the reaction: N₂(g) + 3H₂(g) → 2NH₃(g), if ΔH = -92.4 kJ at 298 K, then the value of ΔU at 298 K is (R = 8.314 J K⁻¹ mol⁻¹):',
    ncertPage: 'NCERT Page 143',
    options: ['-87.45 kJ', '-97.35 kJ', '-92.40 kJ', '-82.50 kJ'],
    correctAnswer: 1,
    page: 8,
    column: 'right',
    explanation: 'Δng = 2 - (1 + 3) = -2. ΔH = ΔU + Δng RT ⇒ ΔU = ΔH - Δng RT = -92.4 - [(-2) × 8.314 × 298 / 1000] = -92.4 + 4.95 = -87.45 kJ.'
  },
  {
    id: 55,
    subject: 'Chemistry',
    type: 'standard',
    question: 'Under which of the following conditions is ΔH equal to ΔU for a chemical reaction involving gases?',
    ncertPage: 'NCERT Page 143',
    options: [
      'When Δng = 0',
      'When the reaction is carried out at constant volume',
      'When the reaction is carried out at constant pressure only',
      'Both (1) and (2)'
    ],
    correctAnswer: 1,
    page: 8,
    column: 'right',
    explanation: 'ΔH = ΔU + Δng RT. When Δng = 0 (no net change in moles of gaseous species), ΔH = ΔU.'
  },
  {
    id: 56,
    subject: 'Chemistry',
    type: 'standard',
    question: 'According to VSEPR theory, the repulsive interactions follow the order:',
    ncertPage: 'NCERT Page 114',
    options: [
      'Lone pair - Lone pair > Lone pair - Bond pair > Bond pair - Bond pair',
      'Bond pair - Bond pair > Lone pair - Bond pair > Lone pair - Lone pair',
      'Lone pair - Bond pair > Lone pair - Lone pair > Bond pair - Bond pair',
      'Lone pair - Lone pair > Bond pair - Bond pair > Lone pair - Bond pair'
    ],
    correctAnswer: 1,
    page: 8,
    column: 'right',
    explanation: 'Standard VSEPR postulate: lp-lp > lp-bp > bp-bp repulsion.'
  },
  {
    id: 57,
    subject: 'Chemistry',
    type: 'standard',
    question: 'One mole of ice at 0°C melts to liquid water at 0°C. If the molar enthalpy of fusion of ice is 6.0 kJ mol⁻¹, the entropy change ΔS is:',
    ncertPage: 'NCERT Page 162',
    options: ['21.98 J K⁻¹ mol⁻¹', '60.0 J K⁻¹ mol⁻¹', '219.8 J K⁻¹ mol⁻¹', '6.0 J K⁻¹ mol⁻¹'],
    correctAnswer: 1,
    page: 8,
    column: 'right',
    explanation: 'ΔSfusion = ΔHfusion / T = 6000 J mol⁻¹ / 273.15 K = 21.98 J K⁻¹ mol⁻¹.'
  },
  {
    id: 58,
    subject: 'Chemistry',
    type: 'standard',
    question: 'Which of the following molecules has zero dipole moment?',
    ncertPage: 'NCERT Page 111',
    options: ['BeCl₂ and BCl₃', 'H₂O and NH₃', 'SO₂ and CHCl₃', 'NF₃ and CO₂'],
    correctAnswer: 1,
    page: 8,
    column: 'right',
    explanation: 'BeCl₂ is linear (dipoles cancel) and BCl₃ is trigonal planar (dipoles cancel), so both have zero dipole moment.'
  },
  {
    id: 59,
    subject: 'Chemistry',
    type: 'standard',
    question: 'The formal charge on the central oxygen atom in the ozone molecule (O₃) is:',
    ncertPage: 'NCERT Page 102',
    options: ['+1', '0', '-1', '+2'],
    correctAnswer: 1,
    page: 8,
    column: 'right',
    explanation: 'In Lewis structure of O₃: central O has 1 lone pair (2 electrons) and 3 bonds (6 shared electrons). Formal charge = 6 - 2 - (1/2)(6) = +1.'
  },
  {
    id: 60,
    subject: 'Chemistry',
    type: 'statements',
    question: 'Given below are two statements:\nStatement I: For an isolated system undergoing an irreversible spontaneous process, the entropy of the system always increases (ΔS > 0).\nStatement II: For a cyclic reversible process, the total entropy change of the universe is zero.',
    ncertPage: 'NCERT Page 162',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 1,
    page: 8,
    column: 'right',
    explanation: 'Second Law of Thermodynamics states that spontaneous processes in isolated systems increase entropy, and reversible cyclic processes leave the universe entropy unchanged (ΔSuniv = 0).'
  },
  {
    id: 61,
    subject: 'Chemistry',
    type: 'standard',
    question: 'The hybridization of central atoms in I₃⁻, PCl₅, and XeOF₄ are respectively:',
    ncertPage: 'NCERT Page 120',
    options: [
      'sp³d, sp³d, sp³d²',
      'sp³d, sp³d², sp³d',
      'sp³d², sp³d, sp³d²',
      'sp³, sp³d, sp³d²'
    ],
    correctAnswer: 1,
    page: 8,
    column: 'right',
    explanation: 'I₃⁻: 2 bp + 3 lp = steric number 5 (sp³d); PCl₅: 5 bp + 0 lp = steric number 5 (sp³d); XeOF₄: 5 bp + 1 lp = steric number 6 (sp³d²).'
  },

  // Page 9: Q62 - Q74
  {
    id: 62,
    subject: 'Chemistry',
    type: 'standard',
    question: 'For the reaction: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH° = -198 kJ. The standard enthalpy of formation of SO₃(g) is -395.7 kJ mol⁻¹. The standard enthalpy of formation of SO₂(g) is:',
    ncertPage: 'NCERT Page 154',
    options: ['-296.7 kJ mol⁻¹', '-494.7 kJ mol⁻¹', '+296.7 kJ mol⁻¹', '-198.0 kJ mol⁻¹'],
    correctAnswer: 1,
    page: 9,
    column: 'left',
    explanation: 'ΔH° = 2ΔfH°(SO₃) - [2ΔfH°(SO₂) + 0] ⇒ -198 = 2(-395.7) - 2ΔfH°(SO₂) ⇒ 2ΔfH°(SO₂) = -791.4 + 198 = -593.4 ⇒ ΔfH°(SO₂) = -296.7 kJ mol⁻¹.'
  },
  {
    id: 63,
    subject: 'Chemistry',
    type: 'match',
    question: 'Match the species in Column-I with their bond orders in Column-II:',
    ncertPage: 'NCERT Page 125',
    listName1: 'Column-I (Species)',
    listName2: 'Column-II (Bond order)',
    listI: [
      { id: 'A', text: 'O₂⁺' },
      { id: 'B', text: 'O₂' },
      { id: 'C', text: 'O₂⁻' },
      { id: 'D', text: 'O₂²⁻' }
    ],
    listII: [
      { id: 'p', text: '2.5' },
      { id: 'q', text: '2.0' },
      { id: 'r', text: '1.5' },
      { id: 's', text: '1.0' }
    ],
    options: [
      'A - (p), B - (q), C - (r), D - (s)',
      'A - (q), B - (p), C - (s), D - (r)',
      'A - (s), B - (r), C - (q), D - (p)',
      'A - (p), B - (r), C - (q), D - (s)'
    ],
    correctAnswer: 1,
    page: 9,
    column: 'left',
    explanation: 'O₂⁺ (15 e⁻) = 2.5; O₂ (16 e⁻) = 2.0; O₂⁻ (17 e⁻) = 1.5; O₂²⁻ (18 e⁻) = 1.0.'
  },
  {
    id: 64,
    subject: 'Chemistry',
    type: 'standard',
    question: 'Which of the following statements is TRUE regarding an adiabatic reversible expansion of an ideal gas?',
    ncertPage: 'NCERT Page 154',
    options: [
      'q = 0, ΔU = w < 0, and temperature drops',
      'q > 0, ΔU = 0, and temperature remains constant',
      'q = 0, ΔU = 0, and temperature rises',
      'w = 0, q = ΔU, and temperature drops'
    ],
    correctAnswer: 1,
    page: 9,
    column: 'left',
    explanation: 'In an adiabatic process q = 0. In expansion w < 0 (gas does work on surroundings), so ΔU = w < 0, which means internal energy decreases and temperature drops.'
  },
  {
    id: 65,
    subject: 'Chemistry',
    type: 'standard',
    question: 'The heat of combustion of carbon to CO₂ is -393.5 kJ mol⁻¹, and that of CO to CO₂ is -283.0 kJ mol⁻¹. The enthalpy of formation of CO(g) is:',
    ncertPage: 'NCERT Page 154',
    options: ['-110.5 kJ mol⁻¹', '+110.5 kJ mol⁻¹', '-676.5 kJ mol⁻¹', '-55.25 kJ mol⁻¹'],
    correctAnswer: 1,
    page: 9,
    column: 'left',
    explanation: 'C + O₂ → CO₂ (ΔH = -393.5); CO + (1/2)O₂ → CO₂ (ΔH = -283.0). Subtracting eq 2 from eq 1 gives C + (1/2)O₂ → CO with ΔH = -393.5 - (-283.0) = -110.5 kJ mol⁻¹.'
  },
  {
    id: 66,
    subject: 'Chemistry',
    type: 'standard',
    question: 'For the reaction: A(g) + B(g) → C(g) + D(g), ΔH = -40 kJ mol⁻¹ and ΔS = -50 J K⁻¹ mol⁻¹. The temperature above which the reaction becomes non-spontaneous is:',
    ncertPage: 'NCERT Page 154',
    options: ['800 K', '400 K', '600 K', '1200 K'],
    correctAnswer: 1,
    page: 9,
    column: 'left',
    explanation: 'ΔG = ΔH - TΔS. At equilibrium ΔG = 0 ⇒ T = ΔH / ΔS = -40000 J / (-50 J K⁻¹) = 800 K. Since ΔS is negative, at T > 800 K, ΔG becomes positive (non-spontaneous).'
  },
  {
    id: 67,
    subject: 'Chemistry',
    type: 'match',
    question: 'Match the state functions in Column-I with their mathematical relationships in Column-II for an ideal gas:',
    ncertPage: 'NCERT Page 143',
    listName1: 'Column-I',
    listName2: 'Column-II',
    listI: [
      { id: 'A', text: 'Isochoric process' },
      { id: 'B', text: 'Isobaric process' },
      { id: 'C', text: 'Isothermal process' },
      { id: 'D', text: 'Adiabatic process' }
    ],
    listII: [
      { id: 'p', text: 'q = ΔU' },
      { id: 'q', text: 'q = ΔH' },
      { id: 'r', text: 'ΔU = 0' },
      { id: 's', text: 'q = 0' }
    ],
    options: [
      'A - (p), B - (q), C - (r), D - (s)',
      'A - (q), B - (p), C - (s), D - (r)',
      'A - (r), B - (s), C - (p), D - (q)',
      'A - (s), B - (p), C - (q), D - (r)'
    ],
    correctAnswer: 1,
    page: 9,
    column: 'left',
    explanation: 'Isochoric: w = 0 ⇒ qv = ΔU; Isobaric: qp = ΔH; Isothermal: ΔT = 0 ⇒ ΔU = 0; Adiabatic: q = 0.'
  },
  {
    id: 68,
    subject: 'Chemistry',
    type: 'standard',
    question: 'For the dissociation reaction: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) at 25°C, ΔH° = 124.0 kJ mol⁻¹. The value of ΔU° at 25°C is (R = 8.314 J K⁻¹ mol⁻¹):',
    ncertPage: 'NCERT Page 142',
    options: ['121.52 kJ mol⁻¹', '126.48 kJ mol⁻¹', '124.0 kJ mol⁻¹', '118.25 kJ mol⁻¹'],
    correctAnswer: 1,
    page: 9,
    column: 'right',
    explanation: 'Δng = 2 - 1 = 1. ΔU° = ΔH° - Δng RT = 124.0 - (1 × 8.314 × 298 / 1000) = 124.0 - 2.48 = 121.52 kJ mol⁻¹.'
  },
  {
    id: 69,
    subject: 'Chemistry',
    type: 'standard',
    question: 'In which of the following pairs of molecules do the central atoms exhibit sp³d² hybridization?',
    ncertPage: 'NCERT Page 120',
    options: ['SF₆ and XeF₄', 'PCl₅ and BrF₃', 'IF₇ and SF₆', 'XeF₂ and I₃⁻'],
    correctAnswer: 1,
    page: 9,
    column: 'right',
    explanation: 'SF₆ has 6 bp + 0 lp = 6 (sp³d²). XeF₄ has 4 bp + 2 lp = 6 (sp³d²).'
  },
  {
    id: 70,
    subject: 'Chemistry',
    type: 'standard',
    question: 'Which of the following sets contains ONLY intensive properties?',
    ncertPage: 'NCERT Page 144',
    options: [
      'Density, temperature, refractive index, molar heat capacity',
      'Volume, mass, enthalpy, entropy',
      'Heat capacity, density, pressure, mass',
      'Internal energy, mole fraction, surface tension, volume'
    ],
    correctAnswer: 1,
    page: 9,
    column: 'right',
    explanation: 'Density, temperature, refractive index, and molar heat capacity are all independent of the size/quantity of the system, hence intensive.'
  },
  {
    id: 71,
    subject: 'Chemistry',
    type: 'statements',
    question: 'Given below are two statements:\nStatement I: An endothermic reaction with positive entropy change (ΔH > 0, ΔS > 0) can be spontaneous at high temperatures.\nStatement II: The Gibbs free energy change (ΔG) becomes negative when TΔS exceeds ΔH.',
    ncertPage: 'NCERT Page 158',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 1,
    page: 9,
    column: 'right',
    explanation: 'ΔG = ΔH - TΔS. When ΔH > 0 and ΔS > 0, at high temperatures TΔS > ΔH, making ΔG < 0 (spontaneous).'
  },
  {
    id: 72,
    subject: 'Chemistry',
    type: 'standard',
    question: 'For a process occurring at constant temperature and pressure, the criterion for spontaneity in terms of system variables is:',
    ncertPage: 'NCERT Page 157',
    options: ['ΔGsys < 0', 'ΔSsys > 0', 'ΔHsys < 0', 'ΔUsys < 0'],
    correctAnswer: 1,
    page: 9,
    column: 'right',
    explanation: 'At constant T and P, a process is spontaneous if and only if the change in Gibbs free energy of the system is negative: ΔGsys < 0.'
  },
  {
    id: 73,
    subject: 'Chemistry',
    type: 'standard',
    question: 'According to Molecular Orbital Theory, the total number of anti-bonding electrons in O₂ molecule is:',
    ncertPage: 'NCERT Page 125',
    options: ['6', '4', '8', '2'],
    correctAnswer: 1,
    page: 9,
    column: 'right',
    explanation: 'Configuration for O₂ (16 e⁻): σ1s² σ*1s² σ2s² σ*2s² σ2pz² (π2px² = π2py²) (π*2px¹ = π*2py¹). Anti-bonding electrons = 2 (from σ*1s) + 2 (from σ*2s) + 2 (from π*) = 6.'
  },
  {
    id: 74,
    subject: 'Chemistry',
    type: 'standard',
    question: 'Which of the following diatomic species is diamagnetic and possesses a bond order of 2?',
    ncertPage: 'NCERT Page 125',
    options: ['C₂', 'O₂', 'B₂', 'N₂²⁻'],
    correctAnswer: 1,
    page: 9,
    column: 'right',
    explanation: 'C₂ (12 electrons): σ1s² σ*1s² σ2s² σ*2s² (π2px² = π2py²). All electrons are paired (diamagnetic) and bond order = (8 - 4)/2 = 2.'
  },

  // Page 10: Q75 - Q88
  {
    id: 75,
    subject: 'Chemistry',
    type: 'standard',
    question: 'Which of the following species has all paired electrons and is diamagnetic?',
    ncertPage: 'NCERT Page 125',
    options: ['N₂', 'NO', 'O₂', 'B₂'],
    correctAnswer: 1,
    page: 10,
    column: 'left',
    explanation: 'N₂ has 14 electrons; all electrons are completely paired in bonding and antibonding MOs, hence it is diamagnetic.'
  },
  {
    id: 76,
    subject: 'Chemistry',
    type: 'standard',
    question: 'Which of the following alkali metal halides has the highest lattice energy?',
    ncertPage: 'NCERT Page 112',
    options: ['LiF', 'NaCl', 'KBr', 'CsI'],
    correctAnswer: 1,
    page: 10,
    column: 'left',
    explanation: 'Lattice energy ∝ (q₁q₂)/(r₊ + r₋). Li⁺ and F⁻ have the smallest ionic radii, giving LiF the maximum lattice energy.'
  },
  {
    id: 77,
    subject: 'Chemistry',
    type: 'statements',
    question: 'Given below are two statements:\nStatement I: The bond angle in H₂O (104.5°) is smaller than in NH₃ (107°) because H₂O has two lone pairs on oxygen causing greater repulsion.\nStatement II: Both H₂O and NH₃ have sp³ hybridized central atoms.',
    ncertPage: 'NCERT Page 112',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 1,
    page: 10,
    column: 'left',
    explanation: 'Both statements are correct. In both H₂O and NH₃, the central atom is sp³ hybridized. H₂O has 2 lone pairs while NH₃ has 1 lone pair; greater lp-lp repulsion compresses the bond angle in H₂O to 104.5°.'
  },
  {
    id: 78,
    subject: 'Chemistry',
    type: 'standard',
    question: 'The shape of the BrF₅ molecule is:',
    ncertPage: 'NCERT Page 120',
    options: ['Square pyramidal', 'Trigonal bipyramidal', 'Pentagonal planar', 'See-saw'],
    correctAnswer: 1,
    page: 10,
    column: 'left',
    explanation: 'BrF₅ has 5 bond pairs and 1 lone pair (steric number 6, sp³d²), which gives a square pyramidal geometry.'
  },
  {
    id: 79,
    subject: 'Chemistry',
    type: 'standard',
    question: 'Which of the following compounds exhibits both intramolecular and intermolecular hydrogen bonding in different isomers?',
    ncertPage: 'NCERT Page 111',
    options: [
      'o-Nitrophenol and p-Nitrophenol',
      'Water and ammonia',
      'Ethanol and dimethyl ether',
      'o-Cresol and m-Cresol'
    ],
    correctAnswer: 1,
    page: 10,
    column: 'left',
    explanation: 'o-Nitrophenol forms intramolecular H-bonding (chelation), whereas p-nitrophenol forms intermolecular H-bonding.'
  },
  {
    id: 80,
    subject: 'Chemistry',
    type: 'assertion_reason',
    question: 'Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): CCl₄ is non-polar and insoluble in water, whereas CHCl₃ has a net dipole moment.\nReason (R): In CCl₄, the individual C-Cl bond dipoles cancel out symmetrically due to regular tetrahedral geometry.',
    ncertPage: 'NCERT Page 107, 112',
    assertion: 'CCl₄ is non-polar and insoluble in water, whereas CHCl₃ has a net dipole moment.',
    reason: 'In CCl₄, the individual C-Cl bond dipoles cancel out symmetrically due to regular tetrahedral geometry.',
    options: [
      'Both (A) and (R) are correct and (R) is the correct explanation of (A).',
      'Both (A) and (R) are correct but (R) is NOT the correct explanation of (A).',
      '(A) is correct but (R) is incorrect.',
      '(A) is incorrect but (R) is correct.'
    ],
    correctAnswer: 1,
    page: 10,
    column: 'left',
    explanation: 'In CCl₄, the 4 identical tetrahedral bond dipoles sum to zero vectorially, giving μ = 0. In CHCl₃ the dipole moments do not cancel, so μ ≠ 0.'
  },
  {
    id: 81,
    subject: 'Chemistry',
    type: 'standard',
    question: 'A reaction has ΔH = +30 kJ mol⁻¹ and ΔS = +100 J K⁻¹ mol⁻¹. The minimum temperature above which the reaction becomes spontaneous is:',
    ncertPage: 'NCERT Page 158',
    options: ['300 K', '30 K', '3000 K', '273 K'],
    correctAnswer: 1,
    page: 10,
    column: 'left',
    explanation: 'For spontaneity ΔG = ΔH - TΔS < 0 ⇒ T > ΔH / ΔS = 30000 J / (100 J K⁻¹) = 300 K.'
  },
  {
    id: 82,
    subject: 'Chemistry',
    type: 'standard',
    question: 'Which of the following bonds has the highest percent ionic character?',
    ncertPage: 'NCERT Page 112',
    options: ['Cs-F', 'Na-Cl', 'K-Br', 'Li-I'],
    correctAnswer: 1,
    page: 10,
    column: 'left',
    explanation: 'Cs has the lowest electronegativity (0.7) and F has the highest (4.0). The maximum difference in electronegativity (ΔEN = 3.3) gives Cs-F the highest ionic character.'
  },
  {
    id: 83,
    subject: 'Chemistry',
    type: 'standard',
    question: 'An ideal gas expands from 1.0 L to 3.0 L against a constant external pressure of 2.0 atm. During this process, 250 J of heat is absorbed by the gas. The change in internal energy (ΔU) is (1 L·atm = 101.3 J):',
    ncertPage: 'NCERT Page 143',
    options: ['-155.2 J', '+155.2 J', '-405.2 J', '+405.2 J'],
    correctAnswer: 1,
    page: 10,
    column: 'right',
    explanation: 'w = -Pext ΔV = -2.0 atm × (3.0 - 1.0 L) = -4.0 L·atm = -4.0 × 101.3 J = -405.2 J. ΔU = q + w = +250 J - 405.2 J = -155.2 J.'
  },
  {
    id: 84,
    subject: 'Chemistry',
    type: 'standard',
    question: 'From the given thermochemical data at 298 K:\nC(s, graphite) + O₂(g) → CO₂(g), ΔH° = -393.5 kJ mol⁻¹\nC(s, diamond) + O₂(g) → CO₂(g), ΔH° = -395.4 kJ mol⁻¹\nThe enthalpy change for the transition C(graphite) → C(diamond) is:',
    ncertPage: 'NCERT Page 154',
    options: ['+1.9 kJ mol⁻¹', '-1.9 kJ mol⁻¹', '+788.9 kJ mol⁻¹', '-788.9 kJ mol⁻¹'],
    correctAnswer: 1,
    page: 10,
    column: 'right',
    explanation: 'Equation (1) - Equation (2): C(graphite) - C(diamond) = -393.5 - (-395.4) = +1.9 kJ mol⁻¹ ⇒ C(graphite) → C(diamond) has ΔH° = +1.9 kJ mol⁻¹.'
  },
  {
    id: 85,
    subject: 'Chemistry',
    type: 'standard',
    question: 'According to Molecular Orbital Theory, which of the following molecules has a fractional bond order?',
    ncertPage: 'NCERT Page 125',
    options: ['O₂⁺', 'N₂', 'C₂', 'F₂'],
    correctAnswer: 1,
    page: 10,
    column: 'right',
    explanation: 'O₂⁺ has 15 electrons, bond order = (10 - 5)/2 = 2.5 (fractional).'
  },
  {
    id: 86,
    subject: 'Chemistry',
    type: 'statements',
    question: 'Given below are two statements:\nStatement I: The octet rule fails to explain the stability of odd-electron molecules such as NO and NO₂.\nStatement II: In PCl₅ and SF₆, the central atom possesses expanded octet with more than 8 valence electrons.',
    ncertPage: 'NCERT Page 105',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 1,
    page: 10,
    column: 'right',
    explanation: 'Both statements are true. Odd-electron molecules and hypervalent molecules with expanded octets (PCl₅ has 10 electrons, SF₆ has 12 electrons) are well-known exceptions to the octet rule.'
  },
  {
    id: 87,
    subject: 'Chemistry',
    type: 'statements',
    question: 'Consider the following statements regarding hydrogen bonding:\nA. Hydrogen bond is a weak electrostatic dipole-dipole attraction.\nB. Density of ice is less than that of liquid water because ice has an open cage-like structure held by hydrogen bonds.\nC. Boiling point of NH₃ is higher than PH₃ due to hydrogen bonding.\nThe correct statement(s) is/are:',
    ncertPage: 'NCERT Page 131',
    options: ['A, B and C', 'A and B only', 'B and C only', 'A and C only'],
    correctAnswer: 1,
    page: 10,
    column: 'right',
    explanation: 'All three statements A, B, and C are factual and accurate according to NCERT.'
  },
  {
    id: 88,
    subject: 'Chemistry',
    type: 'match',
    question: 'Match the molecules in Column-I with their central atom hybridization in Column-II:',
    ncertPage: 'NCERT Page 120',
    listName1: 'Column-I (Molecule)',
    listName2: 'Column-II (Hybridization)',
    listI: [
      { id: 'A', text: 'CH₄' },
      { id: 'B', text: 'C₂H₄' },
      { id: 'C', text: 'C₂H₂' },
      { id: 'D', text: 'PCl₅' }
    ],
    listII: [
      { id: 'p', text: 'sp³' },
      { id: 'q', text: 'sp²' },
      { id: 'r', text: 'sp' },
      { id: 's', text: 'sp³d' }
    ],
    options: [
      'A - (p), B - (q), C - (r), D - (s)',
      'A - (q), B - (p), C - (s), D - (r)',
      'A - (p), B - (r), C - (q), D - (s)',
      'A - (s), B - (q), C - (r), D - (p)'
    ],
    correctAnswer: 1,
    page: 10,
    column: 'right',
    explanation: 'CH₄ is sp³, C₂H₄ (ethene) is sp², C₂H₂ (ethyne) is sp, and PCl₅ is sp³d.'
  },

  // Page 11: Q89 - Q90
  {
    id: 89,
    subject: 'Chemistry',
    type: 'statements',
    question: 'Which of the following statements regarding thermodynamic quantities is CORRECT?\nA. Enthalpy is an extensive state function.\nB. Heat (q) and work (w) are state functions.\nC. For an exothermic reaction at standard conditions, ΔrH° < 0.\nD. Absolute entropy of a perfectly crystalline substance at 0 K is zero according to the Third Law.',
    ncertPage: 'NCERT Page 114, 163',
    options: ['A, C and D only', 'A and B only', 'B, C and D only', 'A, B and C only'],
    correctAnswer: 1,
    page: 11,
    column: 'left',
    explanation: 'Heat and work are path functions (not state functions). A, C, and D are all correct.'
  },
  {
    id: 90,
    subject: 'Chemistry',
    type: 'match',
    question: 'Match the thermodynamic relations in Column-I with the formulas in Column-II:',
    ncertPage: 'NCERT Page 125',
    listName1: 'Column-I',
    listName2: 'Column-II',
    listI: [
      { id: 'A', text: 'ΔG°' },
      { id: 'B', text: 'ΔH' },
      { id: 'C', text: 'ΔS' },
      { id: 'D', text: 'ΔG' }
    ],
    listII: [
      { id: 'p', text: '-RT ln K' },
      { id: 'q', text: 'ΔU + PΔV' },
      { id: 'r', text: 'qrev / T' },
      { id: 's', text: 'ΔH - TΔS' }
    ],
    options: [
      'A - (p), B - (q), C - (r), D - (s)',
      'A - (q), B - (p), C - (s), D - (r)',
      'A - (p), B - (r), C - (q), D - (s)',
      'A - (s), B - (q), C - (r), D - (p)'
    ],
    correctAnswer: 1,
    page: 11,
    column: 'left',
    explanation: 'ΔG° = -RT ln K; ΔH = ΔU + PΔV; ΔS = qrev / T; ΔG = ΔH - TΔS.'
  }
];
