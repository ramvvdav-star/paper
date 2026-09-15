import { Question } from '../types';

export const biologyQuestions: Question[] = [
  // Page 11: Q91 - Q98
  {
    id: 91,
    subject: 'Biology',
    type: 'standard',
    question: 'The rough endoplasmic reticulum (RER) is actively involved in the synthesis of:',
    ncertPage: 'NCERT Page 95',
    options: ['Proteins and glycoproteins', 'Steroidal hormones and lipids', 'Glycogen and cholesterol', 'Phospholipids only'],
    correctAnswer: 1,
    page: 11,
    column: 'left',
    explanation: 'RER has ribosomes studded on its outer surface and is actively involved in protein synthesis and secretion.'
  },
  {
    id: 92,
    subject: 'Biology',
    type: 'standard',
    question: 'Identify the statement that is NOT correct regarding leaf anatomy and morphology:',
    ncertPage: 'NCERT Page 60',
    options: [
      'Monocot leaves typically exhibit reticulate venation.',
      'A typical leaf consists of three main parts: leaf base, petiole, and lamina.',
      'In monocotyledons, the leaf base expands into a sheath covering the stem partially or wholly.',
      'Leaves originate from shoot apical meristems and are arranged in an acropetal order.'
    ],
    correctAnswer: 1,
    page: 11,
    column: 'left',
    explanation: 'Monocot leaves typically exhibit parallel venation, whereas reticulate venation is characteristic of dicotyledonous leaves.'
  },
  {
    id: 93,
    subject: 'Biology',
    type: 'assertion_reason',
    question: 'Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Mycoplasmas can survive without oxygen and are resistant to penicillin.\nReason (R): Mycoplasmas completely lack a cell wall.',
    ncertPage: 'NCERT Page 89',
    assertion: 'Mycoplasmas can survive without oxygen and are resistant to penicillin.',
    reason: 'Mycoplasmas completely lack a cell wall.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 1,
    page: 11,
    column: 'left',
    explanation: 'Penicillin targets peptidoglycan cell wall biosynthesis. Since mycoplasmas completely lack a cell wall, they are naturally unaffected by penicillin.'
  },
  {
    id: 94,
    subject: 'Biology',
    type: 'diagram',
    diagramType: 'seed_anatomy',
    question: 'In a typical dicotyledonous seed, the protective outer covering consists of an outer testa and an inner:',
    ncertPage: 'NCERT Page 66',
    options: ['Tegmen', 'Aleurone layer', 'Perisperm', 'Scutellum'],
    correctAnswer: 1,
    page: 11,
    column: 'left',
    explanation: 'The seed coat of a dicot seed has two layers: the outer thick layer is the testa and the inner thin layer is the tegmen.'
  },
  {
    id: 95,
    subject: 'Biology',
    type: 'standard',
    question: 'The arrangement of ovules within the ovary is known as placentation. In pea plants, the placentation is:',
    ncertPage: 'NCERT Page 65',
    options: ['Marginal', 'Axile', 'Parietal', 'Free-central'],
    correctAnswer: 1,
    page: 11,
    column: 'right',
    explanation: 'In marginal placentation, the placenta forms a ridge along the ventral suture of the ovary and ovules are borne along this ridge, as in pea.'
  },
  {
    id: 96,
    subject: 'Biology',
    type: 'match',
    question: 'Match the plant anatomical structures in List-I with their functions/features in List-II:',
    ncertPage: 'NCERT Page 71, 77',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Bulliform cells' },
      { id: 'B', text: 'Trichomes' },
      { id: 'C', text: 'Casparian strips' },
      { id: 'D', text: 'Lenticels' }
    ],
    listII: [
      { id: 'I', text: 'Exchange of gases' },
      { id: 'II', text: 'Suberized endodermis' },
      { id: 'III', text: 'Minimizing water loss in grasses' },
      { id: 'IV', text: 'Preventing water loss in shoot epidermis' }
    ],
    options: [
      'A - III, B - IV, C - II, D - I',
      'A - II, B - III, C - I, D - IV',
      'A - IV, B - I, C - II, D - III',
      'A - III, B - I, C - IV, D - II'
    ],
    correctAnswer: 1,
    page: 11,
    column: 'right',
    explanation: 'Bulliform cells roll leaves in grasses to reduce water loss; Trichomes prevent water loss on stem; Casparian strips are in endodermis; Lenticels facilitate gas exchange in woody stems.'
  },
  {
    id: 97,
    subject: 'Biology',
    type: 'statements',
    question: 'Given below are two statements:\nStatement I: The primary cell wall of a young plant cell is capable of growth, which gradually diminishes as the cell matures.\nStatement II: The secondary cell wall is formed on the inner (towards membrane) side of the cell.',
    ncertPage: 'NCERT Page 96, 97',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 1,
    page: 11,
    column: 'right',
    explanation: 'Both statements are verbatim true as per NCERT Cell: Unit of Life chapter.'
  },
  {
    id: 98,
    subject: 'Biology',
    type: 'standard',
    question: 'Which of the following fruits develops from a monocarpellary superior ovary and is one-seeded?',
    ncertPage: 'NCERT Page 66',
    options: ['Drupe (Mango)', 'Pome (Apple)', 'Berry (Tomato)', 'Hesperidium (Orange)'],
    correctAnswer: 1,
    page: 11,
    column: 'right',
    explanation: 'Mango and coconut are drupes, developing from monocarpellary superior ovaries and are one-seeded.'
  },

  // Page 12: Q99 - Q109
  {
    id: 99,
    subject: 'Biology',
    type: 'standard',
    question: 'The 70S ribosomes found in prokaryotes and eukaryotic organelles consist of two subunits:',
    ncertPage: 'NCERT Page 98',
    options: ['50S and 30S', '60S and 40S', '50S and 40S', '60S and 30S'],
    correctAnswer: 1,
    page: 12,
    column: 'left',
    explanation: '70S ribosomes are composed of two subunits: 50S (large) and 30S (small).'
  },
  {
    id: 100,
    subject: 'Biology',
    type: 'standard',
    question: 'Which of the following organelle pairs possesses its own DNA, 70S ribosomes, and replicates semi-autonomously?',
    ncertPage: 'NCERT Page 100',
    options: [
      'Mitochondria and Chloroplasts',
      'Golgi apparatus and Endoplasmic Reticulum',
      'Lysosomes and Peroxisomes',
      'Nucleolus and Centrosome'
    ],
    correctAnswer: 1,
    page: 12,
    column: 'left',
    explanation: 'Mitochondria and chloroplasts are semi-autonomous organelles containing circular DNA and 70S ribosomes.'
  },
  {
    id: 101,
    subject: 'Biology',
    type: 'match',
    question: 'Match the cellular structures in List-I with their characteristics in List-II:',
    ncertPage: 'NCERT Page 95, 97-99',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Thylakoids' },
      { id: 'B', text: 'Cristae' },
      { id: 'C', text: 'Cisternae' },
      { id: 'D', text: 'Chromatin' }
    ],
    listII: [
      { id: 'I', text: 'Flattened sacs in Golgi apparatus' },
      { id: 'II', text: 'Infoldings of inner mitochondrial membrane' },
      { id: 'III', text: 'Membranous sacs in plastid stroma' },
      { id: 'IV', text: 'Nucleoprotein fibres in nucleus' }
    ],
    options: [
      'A - III, B - II, C - I, D - IV',
      'A - II, B - III, C - I, D - IV',
      'A - III, B - I, C - II, D - IV',
      'A - I, B - II, C - III, D - IV'
    ],
    correctAnswer: 1,
    page: 12,
    column: 'left',
    explanation: 'Thylakoids: sacs in chloroplast stroma; Cristae: infoldings in mitochondria; Cisternae: disc sacs in Golgi; Chromatin: nucleoprotein fibres.'
  },
  {
    id: 102,
    subject: 'Biology',
    type: 'standard',
    question: 'Which of the following cellular components is absent in all animal cells but universally present in higher plant cells?',
    ncertPage: 'NCERT Page 94',
    options: ['Cellulosic cell wall', 'Mitochondria', 'Endoplasmic reticulum', 'Ribosomes'],
    correctAnswer: 1,
    page: 12,
    column: 'left',
    explanation: 'Plant cells universally possess a cellulosic cell wall, which is absent in animal cells.'
  },
  {
    id: 103,
    subject: 'Biology',
    type: 'assertion_reason',
    question: 'Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Lipids are not strictly macromolecules.\nReason (R): Molecular weight of lipids does not exceed 800 Da, but they appear in the acid-insoluble fraction because they form vesicular structures.',
    ncertPage: 'NCERT Page 108, 109',
    assertion: 'Lipids are not strictly macromolecules.',
    reason: 'Molecular weight of lipids does not exceed 800 Da, but they appear in the acid-insoluble fraction because they form vesicular structures.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 1,
    page: 12,
    column: 'left',
    explanation: 'Lipids have molecular weights < 800 Da and do not form polymers; when tissue is ground, membranes break into vesicles that do not dissolve in acid, retaining them with macromolecules.'
  },
  {
    id: 104,
    subject: 'Biology',
    type: 'statements',
    question: 'Consider the following statements regarding the fluid mosaic model of cell membrane:\nA. Integral proteins are partially or totally buried in the membrane.\nB. The quasi-fluid nature of lipid enables lateral movement of proteins within overall bilayer.\nC. Lipids are arranged in a bilayer with polar heads facing the inner aqueous side.\nThe correct statements are:',
    ncertPage: 'NCERT Page 97',
    options: ['A and B only', 'B and C only', 'A and C only', 'A, B and C'],
    correctAnswer: 1,
    page: 12,
    column: 'left',
    explanation: 'Polar heads face outwards towards the aqueous environment, while hydrophobic tails are directed towards inner part. Thus C is incorrect, A and B are correct.'
  },
  {
    id: 105,
    subject: 'Biology',
    type: 'standard',
    question: 'When a flower can be divided into two similar halves only in one particular vertical plane, it is termed as:',
    ncertPage: 'NCERT Page 62',
    options: ['Zygomorphic', 'Actinomorphic', 'Asymmetric', 'Epigynous'],
    correctAnswer: 1,
    page: 12,
    column: 'right',
    explanation: 'Bilateral symmetry in flowers (divided into halves only along one plane) is termed zygomorphic (e.g., Pea, Gulmohur, Bean, Cassia).'
  },
  {
    id: 106,
    subject: 'Biology',
    type: 'standard',
    question: 'Which of the following organelles is NOT considered a part of the endomembrane system?',
    ncertPage: 'NCERT Page 95',
    options: ['Peroxisome and Mitochondria', 'Endoplasmic Reticulum', 'Golgi complex', 'Lysosome'],
    correctAnswer: 1,
    page: 12,
    column: 'right',
    explanation: 'The endomembrane system includes ER, Golgi, lysosomes, and vacuoles. Mitochondria, chloroplasts, and peroxisomes are not part of it.'
  },
  {
    id: 107,
    subject: 'Biology',
    type: 'statements',
    question: 'From the statements given below, choose the CORRECT option regarding chloroplasts:\nA. Chloroplasts are double-membrane bound organelles.\nB. The stroma contains enzymes required for the synthesis of carbohydrates and proteins.\nC. Thylakoids are arranged in stacks like the piles of coins called grana.\nD. Inner membrane of chloroplast is more permeable than the outer membrane.',
    ncertPage: 'NCERT Page 96, 97',
    options: ['A, B and C only', 'B, C and D only', 'A and D only', 'A, B, C and D'],
    correctAnswer: 1,
    page: 12,
    column: 'right',
    explanation: 'The inner membrane of chloroplast is relatively less permeable than the outer membrane. Statements A, B, and C are correct.'
  },
  {
    id: 108,
    subject: 'Biology',
    type: 'statements',
    question: 'Which of the following conditions is observed when stamens are attached to petals?',
    ncertPage: 'NCERT Page 64',
    options: ['Epipetalous (e.g., Brinjal)', 'Epiphyllous (e.g., Lily)', 'Monadelphous (e.g., China rose)', 'Diadelphous (e.g., Pea)'],
    correctAnswer: 1,
    page: 12,
    column: 'right',
    explanation: 'When stamens are attached to the petals, they are epipetalous as in brinjal.'
  },
  {
    id: 109,
    subject: 'Biology',
    type: 'standard',
    question: 'Starch gives an intense blue-black colour with iodine solution because:',
    ncertPage: 'NCERT Page 110',
    options: [
      'Starch forms helical secondary structures that trap I₂ molecules in the interior of helical coils.',
      'Starch chemically oxidizes iodine into iodide ions.',
      'Cellulose and starch both have unbranched linear helical chains.',
      'Starch has free reducing aldehyde groups that react with iodine.'
    ],
    correctAnswer: 1,
    page: 12,
    column: 'right',
    explanation: 'Amylose in starch forms helical secondary structures that accommodate and trap iodine molecules in the helical core, giving blue color.'
  },

  // Page 13: Q110 - Q120
  {
    id: 110,
    subject: 'Biology',
    type: 'standard',
    question: 'The major site for the synthesis of steroidal hormones and lipids in animal cells is:',
    ncertPage: 'NCERT Page 97',
    options: ['Smooth Endoplasmic Reticulum (SER)', 'Rough Endoplasmic Reticulum (RER)', 'Golgi apparatus', 'Peroxisome'],
    correctAnswer: 1,
    page: 13,
    column: 'left',
    explanation: 'In animal cells, steroidal hormones are synthesized in the Smooth Endoplasmic Reticulum (SER).'
  },
  {
    id: 111,
    subject: 'Biology',
    type: 'standard',
    question: 'In which of the following plants is the edible part correctly matched?',
    ncertPage: 'NCERT Page 66',
    options: [
      'Coconut - Endosperm',
      'Mango - Endocarp',
      'Apple - Mesocarp only',
      'Tomato - Pericarp only'
    ],
    correctAnswer: 1,
    page: 13,
    column: 'left',
    explanation: 'In coconut, the edible part is the cellular and nuclear endosperm. In mango, it is the fleshy mesocarp.'
  },
  {
    id: 112,
    subject: 'Biology',
    type: 'standard',
    question: 'In ribosomes, the letter "S" stands for the Svedberg unit, which is an indirect measure of:',
    ncertPage: 'NCERT Page 98',
    options: ['Density and size (Sedimentation coefficient)', 'Weight and volume', 'Number of RNA molecules', 'Electrical charge'],
    correctAnswer: 1,
    page: 13,
    column: 'left',
    explanation: 'Svedberg unit (S) stands for sedimentation coefficient; it is indirectly a measure of density and size.'
  },
  {
    id: 113,
    subject: 'Biology',
    type: 'statements',
    question: 'Given below are two statements:\nStatement I: Epidermal hairs on the stem called trichomes are usually multicellular and prevent water loss due to transpiration.\nStatement II: Root hairs are unicellular elongations of epidermal cells that absorb water and minerals from the soil.',
    ncertPage: 'NCERT Page 89',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 1,
    page: 13,
    column: 'left',
    explanation: 'Both statements are true facts as described in NCERT Anatomy of Flowering Plants.'
  },
  {
    id: 114,
    subject: 'Biology',
    type: 'match',
    question: 'Match the chromosome terms in List-I with their descriptions in List-II:',
    ncertPage: 'NCERT Page 99, 101, 102',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Kinetochore' },
      { id: 'B', text: 'Centromere' },
      { id: 'C', text: 'Satellite' },
      { id: 'D', text: 'Acrocentric' }
    ],
    listII: [
      { id: 'I', text: 'Primary constriction holding chromatids' },
      { id: 'II', text: 'Disc-shaped protein structure on centromere' },
      { id: 'III', text: 'Non-staining secondary constriction fragment' },
      { id: 'IV', text: 'Centromere situated close to one end' }
    ],
    options: [
      'A - II, B - I, C - III, D - IV',
      'A - I, B - II, C - III, D - IV',
      'A - II, B - III, C - I, D - IV',
      'A - III, B - I, C - II, D - IV'
    ],
    correctAnswer: 1,
    page: 13,
    column: 'left',
    explanation: 'Kinetochore: disc structure for spindle attachment; Centromere: primary constriction; Satellite: secondary constriction; Acrocentric: centromere close to end.'
  },
  {
    id: 115,
    subject: 'Biology',
    type: 'standard',
    question: 'Which of the following seeds is non-endospermic (exalbuminous)?',
    ncertPage: 'NCERT Page 66, 67',
    options: ['Gram and Pea', 'Castor', 'Maize', 'Wheat'],
    correctAnswer: 1,
    page: 13,
    column: 'left',
    explanation: 'In dicots like gram, pea, and bean, the endosperm is completely consumed during embryo development (non-endospermic). In castor and monocots, endosperm persists.'
  },
  {
    id: 116,
    subject: 'Biology',
    type: 'standard',
    question: 'The sequential pathway for protein secretion from a eukaryotic cell is:',
    ncertPage: 'NCERT Page 95, 96',
    options: [
      'Rough ER → Transport vesicle → Cis face of Golgi → Trans face of Golgi → Secretory vesicle → Plasma membrane',
      'Rough ER → Lysosome → Trans face of Golgi → Secretory vesicle → Plasma membrane',
      'Smooth ER → Rough ER → Golgi cisternae → Nuclear envelope',
      'Golgi trans face → Cis face → RER → Plasma membrane'
    ],
    correctAnswer: 1,
    page: 13,
    column: 'right',
    explanation: 'Proteins enter RER lumen, are packaged into transport vesicles, fuse with the cis (forming) face of Golgi, pass through cisternae to trans (maturing) face, bud off in secretory vesicles, and fuse with plasma membrane.'
  },
  {
    id: 117,
    subject: 'Biology',
    type: 'standard',
    question: 'In a dorsiventral (dicotyledonous) leaf, which of the following is correct?',
    ncertPage: 'NCERT Page 76',
    options: [
      'Stomata are generally more numerous on the abaxial (lower) epidermis.',
      'Mesophyll is not differentiated into palisade and spongy tissue.',
      'Stomata are equally distributed on both surfaces (amphistomatic).',
      'Vascular bundles are all of identical size irrespective of venation.'
    ],
    correctAnswer: 1,
    page: 13,
    column: 'right',
    explanation: 'In a dorsiventral leaf, stomata are more frequent on the lower (abaxial) surface, and the mesophyll is distinctly differentiated into palisade and spongy parenchyma.'
  },
  {
    id: 118,
    subject: 'Biology',
    type: 'standard',
    question: 'In coconut fruit, the fibrous portion used for coir manufacture is derived from:',
    ncertPage: 'NCERT Page 65, 66',
    options: ['Mesocarp', 'Endocarp', 'Epicarp', 'Testa'],
    correctAnswer: 1,
    page: 13,
    column: 'right',
    explanation: 'In coconut (a drupe), the epicarp is thin, mesocarp is fibrous (yielding coir), and endocarp is stony hard.'
  },
  {
    id: 119,
    subject: 'Biology',
    type: 'statements',
    question: 'Choose the CORRECT statement regarding eukaryotic cilia and flagella:\nA. Core of cilium is called axoneme.\nB. Axoneme usually has nine pairs of doublets of radially arranged peripheral microtubules and a pair of central microtubules (9 + 2 array).\nC. Both cilium and flagellum emerge from centriole-like structures called basal bodies.\nD. Peripheral doublets are interconnected by radial spokes.',
    ncertPage: 'NCERT Page 99',
    options: ['A, B, C and D', 'A, B and C only', 'B and D only', 'A and C only'],
    correctAnswer: 1,
    page: 13,
    column: 'right',
    explanation: 'All statements A, B, C, and D accurately describe the 9+2 ultrastructure and origin of eukaryotic cilia and flagella.'
  },
  {
    id: 120,
    subject: 'Biology',
    type: 'match',
    question: 'Match the types of placentation in List-I with their representative plants in List-II:',
    ncertPage: 'NCERT Page 65',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Marginal' },
      { id: 'B', text: 'Axile' },
      { id: 'C', text: 'Parietal' },
      { id: 'D', text: 'Free central' }
    ],
    listII: [
      { id: 'I', text: 'Pea' },
      { id: 'II', text: 'Tomato, Lemon' },
      { id: 'III', text: 'Mustard, Argemone' },
      { id: 'IV', text: 'Dianthus, Primrose' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - IV, B - II, C - I, D - III'
    ],
    correctAnswer: 1,
    page: 13,
    column: 'right',
    explanation: 'Marginal: Pea; Axile: Tomato/Lemon/China rose; Parietal: Mustard/Argemone; Free central: Dianthus/Primrose.'
  },

  // Page 14: Q121 - Q129
  {
    id: 121,
    subject: 'Biology',
    type: 'statements',
    question: 'Choose the correct statements regarding bacterial cell envelope:\nA. It consists of a tightly bound three-layered structure: glycocalyx, cell wall, and plasma membrane.\nB. Glycocalyx could be a loose sheath called slime layer or thick and tough called capsule.\nC. Mesosomes are formed by invaginations of plasma membrane into the cell.\nD. Gram-positive bacteria have thick lipopolysaccharide outer membranes.',
    ncertPage: 'NCERT Page 90, 91',
    options: ['A, B and C only', 'B, C and D only', 'A and D only', 'A, B, C and D'],
    correctAnswer: 1,
    page: 14,
    column: 'left',
    explanation: 'Gram-negative bacteria possess lipopolysaccharide in their outer membrane, not Gram-positive. A, B, and C are correct.'
  },
  {
    id: 122,
    subject: 'Biology',
    type: 'standard',
    question: 'A chromosome having a terminal centromere is called:',
    ncertPage: 'NCERT Page 101',
    options: ['Telocentric', 'Metacentric', 'Sub-metacentric', 'Acrocentric'],
    correctAnswer: 1,
    page: 14,
    column: 'left',
    explanation: 'A telocentric chromosome has a terminal centromere located right at the tip.'
  },
  {
    id: 123,
    subject: 'Biology',
    type: 'assertion_reason',
    question: 'Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Vascular bundles in monocot stem are conjoint, collateral, and closed.\nReason (R): Cambium is absent between xylem and phloem in monocot vascular bundles.',
    ncertPage: 'NCERT Page 73',
    assertion: 'Vascular bundles in monocot stem are conjoint, collateral, and closed.',
    reason: 'Cambium is absent between xylem and phloem in monocot vascular bundles.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 1,
    page: 14,
    column: 'left',
    explanation: 'A vascular bundle is designated as "closed" specifically because it lacks intrafascicular cambium and hence cannot produce secondary tissues.'
  },
  {
    id: 124,
    subject: 'Biology',
    type: 'diagram',
    diagramType: 'embryo_anatomy',
    question: 'In a monocot seed embryo (e.g., maize), the shield-shaped single large cotyledon is known as:',
    ncertPage: 'NCERT Page 67',
    options: ['Scutellum', 'Coleoptile', 'Coleorhiza', 'Epiblast'],
    correctAnswer: 1,
    page: 14,
    column: 'left',
    explanation: 'In the grass family, the single cotyledon is shield-shaped and termed the scutellum.'
  },
  {
    id: 125,
    subject: 'Biology',
    type: 'standard',
    question: 'When stamens are united into two bundles, the condition is termed:',
    ncertPage: 'NCERT Page 64',
    options: ['Diadelphous (as in Pea)', 'Monadelphous (as in China rose)', 'Polyadelphous (as in Citrus)', 'Syngenesious (as in Sunflower)'],
    correctAnswer: 1,
    page: 14,
    column: 'left',
    explanation: 'When stamens are fused into two bundles (e.g., 9 + 1 in pea), it is termed diadelphous.'
  },
  {
    id: 126,
    subject: 'Biology',
    type: 'standard',
    question: 'The primary root and its branches constitute the tap root system. It originates directly from the elongation of:',
    ncertPage: 'NCERT Page 68',
    options: ['Radicle', 'Plumule', 'Hypocotyl', 'Cotyledonary node'],
    correctAnswer: 1,
    page: 14,
    column: 'right',
    explanation: 'Direct elongation of the radicle leads to the formation of the primary tap root.'
  },
  {
    id: 127,
    subject: 'Biology',
    type: 'match',
    question: 'Match the cell organelles in List-I with their principal functions in List-II:',
    ncertPage: 'NCERT Page 95-98',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Golgi apparatus' },
      { id: 'B', text: 'Lysosome' },
      { id: 'C', text: 'Mitochondria' },
      { id: 'D', text: 'Ribosome' }
    ],
    listII: [
      { id: 'I', text: 'Packaging and glycosylation of proteins' },
      { id: 'II', text: 'Intracellular digestion via hydrolytic enzymes' },
      { id: 'III', text: 'ATP generation via oxidative phosphorylation' },
      { id: 'IV', text: 'Protein synthesis' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - IV, B - II, C - I, D - III'
    ],
    correctAnswer: 1,
    page: 14,
    column: 'right',
    explanation: 'Golgi: packaging; Lysosomes: intracellular digestion; Mitochondria: cellular respiration/ATP; Ribosomes: protein synthesis.'
  },
  {
    id: 128,
    subject: 'Biology',
    type: 'match',
    question: 'Match the vascular bundle arrangements in List-I with their plant organs in List-II:',
    ncertPage: 'NCERT Page 73',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Radial vascular bundles' },
      { id: 'B', text: 'Conjoint, collateral, and open' },
      { id: 'C', text: 'Conjoint, collateral, and closed' },
      { id: 'D', text: 'Bicollateral bundles' }
    ],
    listII: [
      { id: 'I', text: 'Roots (Dicot and Monocot)' },
      { id: 'II', text: 'Dicot stem' },
      { id: 'III', text: 'Monocot stem and leaves' },
      { id: 'IV', text: 'Cucurbita stem' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - III, B - II, C - I, D - IV',
      'A - I, B - III, C - II, D - IV'
    ],
    correctAnswer: 1,
    page: 14,
    column: 'right',
    explanation: 'Radial: roots; Conjoint open: dicot stem; Conjoint closed: monocot stem; Bicollateral: cucurbits.'
  },
  {
    id: 129,
    subject: 'Biology',
    type: 'assertion_reason',
    question: 'Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Interfascicular cambium and cork cambium are secondary meristems.\nReason (R): They arise from permanent tissues through the process of dedifferentiation.',
    ncertPage: 'NCERT Page 101',
    assertion: 'Interfascicular cambium and cork cambium are secondary meristems.',
    reason: 'They arise from permanent tissues through the process of dedifferentiation.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 1,
    page: 14,
    column: 'right',
    explanation: 'Secondary meristems (like interfascicular cambium and phellogen) originate by dedifferentiation of differentiated permanent cells.'
  },

  // Page 15: Q130 - Q139
  {
    id: 130,
    subject: 'Biology',
    type: 'diagram',
    diagramType: 'dicot_root_cross_section',
    question: 'In a transverse section of a typical dicot root, the innermost layer of the cortex characterized by suberin deposition (Casparian strips) is called:',
    ncertPage: 'NCERT Page 74',
    options: ['Endodermis', 'Pericycle', 'Epiblema', 'Exodermis'],
    correctAnswer: 1,
    page: 15,
    column: 'left',
    explanation: 'The endodermis is the innermost cortex layer in dicot roots, with tangential and radial walls impregnated with water-impermeable suberin forming Casparian strips.'
  },
  {
    id: 131,
    subject: 'Biology',
    type: 'match',
    question: 'Match the stamen conditions in List-I with their botanical examples in List-II:',
    ncertPage: 'NCERT Page 64',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Epipetalous' },
      { id: 'B', text: 'Epiphyllous' },
      { id: 'C', text: 'Monadelphous' },
      { id: 'D', text: 'Polyadelphous' }
    ],
    listII: [
      { id: 'I', text: 'Brinjal' },
      { id: 'II', text: 'Lily' },
      { id: 'III', text: 'China rose' },
      { id: 'IV', text: 'Citrus' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - IV, C - II, D - III',
      'A - III, B - II, C - I, D - IV'
    ],
    correctAnswer: 1,
    page: 15,
    column: 'left',
    explanation: 'Epipetalous: Brinjal; Epiphyllous: Lily; Monadelphous: China rose; Polyadelphous: Citrus.'
  },
  {
    id: 132,
    subject: 'Biology',
    type: 'assertion_reason',
    question: 'Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): In hypogynous flowers, the ovary is superior.\nReason (R): In hypogynous flowers, the gynoecium occupies the highest position while the other floral whorls are situated below it.',
    ncertPage: 'NCERT Page 62',
    assertion: 'In hypogynous flowers, the ovary is superior.',
    reason: 'In hypogynous flowers, the gynoecium occupies the highest position while the other floral whorls are situated below it.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 1,
    page: 15,
    column: 'left',
    explanation: 'By definition, in a hypogynous flower (mustard, china rose, brinjal), gynoecium sits at top and calyx, corolla, stamens are below it, making ovary superior.'
  },
  {
    id: 133,
    subject: 'Biology',
    type: 'standard',
    question: 'Which of the following cell organelles is bounded by a single unit membrane?',
    ncertPage: 'NCERT Page 95',
    options: ['Lysosome and Vacuole', 'Chloroplast', 'Mitochondria', 'Nucleus'],
    correctAnswer: 1,
    page: 15,
    column: 'right',
    explanation: 'Lysosomes and vacuoles are single-membrane bound organelles, whereas mitochondria, chloroplasts, and nuclei are double-membrane bound.'
  },
  {
    id: 134,
    subject: 'Biology',
    type: 'assertion_reason',
    question: 'Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Cellulose does not give a blue colour with iodine.\nReason (R): Cellulose consists of unbranched β-glucose chains and does not form complex helical structures to hold iodine molecules.',
    ncertPage: 'NCERT Page 110',
    assertion: 'Cellulose does not give a blue colour with iodine.',
    reason: 'Cellulose consists of unbranched β-glucose chains and does not form complex helical structures to hold iodine molecules.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 1,
    page: 15,
    column: 'right',
    explanation: 'Unlike starch, cellulose does not have helices to hold I₂ molecules, so it gives no color with iodine.'
  },
  {
    id: 135,
    subject: 'Biology',
    type: 'standard',
    question: 'Exarch xylem development, where protoxylem lies towards the periphery and metaxylem towards the center, is characteristic of:',
    ncertPage: 'NCERT Page 76',
    options: ['Roots (both dicot and monocot)', 'Stems (both dicot and monocot)', 'Dicot stem only', 'Monocot stem only'],
    correctAnswer: 1,
    page: 15,
    column: 'right',
    explanation: 'In roots, protoxylem lies towards periphery and metaxylem towards centre (exarch xylem). In stems, protoxylem lies towards centre (endarch).'
  },
  {
    id: 136,
    subject: 'Biology',
    type: 'statements',
    question: 'From the statements given below regarding carbohydrates, choose the CORRECT option:\nA. Glycogen is a branched storage polysaccharide in animals and fungi.\nB. Chitin is a complex homopolymer of N-acetylglucosamine (NAG).\nC. Inulin is a polymer of fructose.\nD. Starch is a polymer of galactose.',
    ncertPage: 'NCERT Page 110, 111',
    options: ['A, B and C only', 'B, C and D only', 'A and D only', 'A, B, C and D'],
    correctAnswer: 1,
    page: 15,
    column: 'right',
    explanation: 'Starch is a polymer of glucose, not galactose. A, B, and C are true facts.'
  },
  {
    id: 137,
    subject: 'Biology',
    type: 'standard',
    question: 'Which of the following is a pyrimidine nitrogenous base found only in RNA and not in DNA?',
    ncertPage: 'NCERT Page 106',
    options: ['Uracil', 'Thymine', 'Cytosine', 'Adenine'],
    correctAnswer: 1,
    page: 15,
    column: 'right',
    explanation: 'Uracil is a pyrimidine present exclusively in RNA in place of thymine.'
  },
  {
    id: 138,
    subject: 'Biology',
    type: 'standard',
    question: 'In a polypeptide chain, the first amino acid synthesized at the beginning of the chain corresponds to the:',
    ncertPage: 'NCERT Page 112',
    options: ['N-terminal amino acid', 'C-terminal amino acid', 'Carboxyl terminal', 'Phosphorylated residue'],
    correctAnswer: 1,
    page: 15,
    column: 'right',
    explanation: 'The first amino acid of a polypeptide has a free amino group and is called the N-terminal amino acid.'
  },
  {
    id: 139,
    subject: 'Biology',
    type: 'standard',
    question: 'Inhibition of succinate dehydrogenase by malonate is a classic textbook example of:',
    ncertPage: 'NCERT Page 117',
    options: ['Competitive reversible inhibition', 'Non-competitive irreversible inhibition', 'Allosteric feedback inhibition', 'Uncompetitive inhibition'],
    correctAnswer: 1,
    page: 15,
    column: 'right',
    explanation: 'Malonate closely resembles the substrate succinate in structure and competes for the active site of succinate dehydrogenase (competitive inhibition).'
  },

  // Page 16: Q140 - Q148
  {
    id: 140,
    subject: 'Biology',
    type: 'standard',
    question: 'Identify the statement that is NOT correct regarding protein structure:',
    ncertPage: 'NCERT Page 111, 112',
    options: [
      'Tertiary structure is completely destroyed upon protein synthesis and is absent in active enzymes.',
      'Primary structure gives the positional sequence of amino acids.',
      'Secondary structure includes α-helix and β-pleated sheet.',
      'Quaternary structure is exhibited by proteins consisting of two or more polypeptide subunits (e.g., hemoglobin).'
    ],
    correctAnswer: 1,
    page: 16,
    column: 'left',
    explanation: 'Tertiary structure is essential for the biological catalytic activity of enzymes, not absent or destroyed.'
  },
  {
    id: 141,
    subject: 'Biology',
    type: 'standard',
    question: 'A nucleoside differs from a nucleotide in lacking a:',
    ncertPage: 'NCERT Page 106',
    options: ['Phosphate group', 'Nitrogenous base', 'Ribose/deoxyribose sugar', 'Glycosidic bond'],
    correctAnswer: 1,
    page: 16,
    column: 'left',
    explanation: 'Nucleoside = Nitrogen base + Sugar. Nucleotide = Nitrogen base + Sugar + Phosphate group.'
  },
  {
    id: 142,
    subject: 'Biology',
    type: 'match',
    question: 'Match the biomolecules in List-I with their descriptions in List-II:',
    ncertPage: 'NCERT Page 106',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Palmitic acid' },
      { id: 'B', text: 'Arachidonic acid' },
      { id: 'C', text: 'Glycerol' },
      { id: 'D', text: 'Lecithin' }
    ],
    listII: [
      { id: 'I', text: '16 carbons including carboxyl carbon' },
      { id: 'II', text: '20 carbons including carboxyl carbon' },
      { id: 'III', text: 'Trihydroxy propane' },
      { id: 'IV', text: 'Phospholipid found in cell membrane' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - III, D - IV',
      'A - I, B - III, C - II, D - IV',
      'A - IV, B - II, C - I, D - III'
    ],
    correctAnswer: 1,
    page: 16,
    column: 'left',
    explanation: 'Palmitic acid: 16 C; Arachidonic: 20 C; Glycerol: trihydroxy propane; Lecithin: membrane phospholipid.'
  },
  {
    id: 143,
    subject: 'Biology',
    type: 'statements',
    question: 'From the statements given below regarding nucleic acids, choose the CORRECT option:\nA. Adenine and Guanine are substituted purines.\nB. Cytosine, Uracil and Thymine are pyrimidines.\nC. Adjacent nucleotides in a polynucleotide chain are linked via 3\'-5\' phosphodiester bonds.\nD. B-DNA has 10 base pairs per turn with a pitch of 3.4 nm.',
    ncertPage: 'NCERT Page 111',
    options: ['A, B, C and D', 'A and B only', 'A, C and D only', 'B and D only'],
    correctAnswer: 1,
    page: 16,
    column: 'left',
    explanation: 'All statements A, B, C, and D are classical Watson-Crick B-DNA and nucleic acid biochemistry facts from NCERT.'
  },
  {
    id: 144,
    subject: 'Biology',
    type: 'match',
    question: 'Match the nucleotide/nucleoside names in List-I with their categories in List-II:',
    ncertPage: 'NCERT Page 106',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Adenosine' },
      { id: 'B', text: 'Adenylic acid' },
      { id: 'C', text: 'Adenine' },
      { id: 'D', text: 'DNA' }
    ],
    listII: [
      { id: 'I', text: 'Nucleoside' },
      { id: 'II', text: 'Nucleotide' },
      { id: 'III', text: 'Nitrogenous base' },
      { id: 'IV', text: 'Polynucleotide macromolecule' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - III, D - IV',
      'A - I, B - III, C - II, D - IV',
      'A - III, B - I, C - II, D - IV'
    ],
    correctAnswer: 1,
    page: 16,
    column: 'left',
    explanation: 'Adenosine: nucleoside; Adenylic acid: nucleotide; Adenine: purine base; DNA: polynucleotide.'
  },
  {
    id: 145,
    subject: 'Biology',
    type: 'match',
    question: 'Match the cellular components in List-I with their average percentage of total cellular mass in List-II:',
    ncertPage: 'NCERT Page 109',
    listName1: 'List-I (Component)',
    listName2: 'List-II (% Cellular Mass)',
    listI: [
      { id: 'A', text: 'Water' },
      { id: 'B', text: 'Proteins' },
      { id: 'C', text: 'Nucleic acids' },
      { id: 'D', text: 'Carbohydrates' }
    ],
    listII: [
      { id: 'I', text: '70 - 90%' },
      { id: 'II', text: '10 - 15%' },
      { id: 'III', text: '5 - 7%' },
      { id: 'IV', text: '3%' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - III, B - II, C - I, D - IV'
    ],
    correctAnswer: 1,
    page: 16,
    column: 'right',
    explanation: 'As per NCERT Table 9.4: Water: 70-90%, Proteins: 10-15%, Nucleic acids: 5-7%, Carbohydrates: 3%, Lipids: 2%, Ions: 1%.'
  },
  {
    id: 146,
    subject: 'Biology',
    type: 'match',
    question: 'Match the levels of protein structure in List-I with their features in List-II:',
    ncertPage: 'NCERT Page 112',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Primary structure' },
      { id: 'B', text: 'Secondary structure' },
      { id: 'C', text: 'Tertiary structure' },
      { id: 'D', text: 'Quaternary structure' }
    ],
    listII: [
      { id: 'I', text: 'Linear sequence of amino acids' },
      { id: 'II', text: 'Right-handed α-helix and β-pleated sheets' },
      { id: 'III', text: '3D folding creating active sites' },
      { id: 'IV', text: 'Assembly of multiple polypeptide subunits' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - IV, B - II, C - I, D - III'
    ],
    correctAnswer: 1,
    page: 16,
    column: 'right',
    explanation: 'Primary: linear sequence; Secondary: α-helix/β-sheet; Tertiary: 3D conformation; Quaternary: spatial arrangement of subunits.'
  },
  {
    id: 147,
    subject: 'Biology',
    type: 'assertion_reason',
    question: 'Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Enzymes increase the rate of biochemical reactions immensely.\nReason (R): Enzymes lower the activation energy required to convert substrate into transition state.',
    ncertPage: 'NCERT Page 112',
    assertion: 'Enzymes increase the rate of biochemical reactions immensely.',
    reason: 'Enzymes lower the activation energy required to convert substrate into transition state.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 1,
    page: 16,
    column: 'right',
    explanation: 'Enzymes accelerate reaction velocity by lowering the activation energy barrier between ground state and transition state complex.'
  },
  {
    id: 148,
    subject: 'Biology',
    type: 'match',
    question: 'Match the secondary metabolites in List-I with their chemical categories in List-II:',
    ncertPage: 'NCERT Page 108',
    listName1: 'List-I (Metabolite)',
    listName2: 'List-II (Category)',
    listI: [
      { id: 'A', text: 'Morphine, Codeine' },
      { id: 'B', text: 'Abrin, Ricin' },
      { id: 'C', text: 'Concanavalin A' },
      { id: 'D', text: 'Vinblastin, Curcumin' }
    ],
    listII: [
      { id: 'I', text: 'Alkaloids' },
      { id: 'II', text: 'Toxins' },
      { id: 'III', text: 'Lectins' },
      { id: 'IV', text: 'Drugs' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - IV, B - II, C - I, D - III'
    ],
    correctAnswer: 1,
    page: 16,
    column: 'right',
    explanation: 'NCERT Table 9.3: Alkaloids: Morphine/Codeine; Toxins: Abrin/Ricin; Lectins: Concanavalin A; Drugs: Vinblastin/Curcumin.'
  },

  // Page 17: Q149 - Q158
  {
    id: 149,
    subject: 'Biology',
    type: 'match',
    question: 'Match the polysaccharides in List-I with their structural characteristics in List-II:',
    ncertPage: 'NCERT Page 110, 111',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Cellulose' },
      { id: 'B', text: 'Inulin' },
      { id: 'C', text: 'Glycogen' },
      { id: 'D', text: 'Starch' }
    ],
    listII: [
      { id: 'I', text: 'Unbranched homopolymer of glucose with β-1,4 linkages' },
      { id: 'II', text: 'Polymer of fructose' },
      { id: 'III', text: 'Branched glucose polymer stored in liver' },
      { id: 'IV', text: 'Plant storage glucan with helical amylose' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - III, B - II, C - I, D - IV'
    ],
    correctAnswer: 1,
    page: 17,
    column: 'left',
    explanation: 'Cellulose: linear β-glucan; Inulin: fructan; Glycogen: branched animal glucan; Starch: helical plant glucan.'
  },
  {
    id: 150,
    subject: 'Biology',
    type: 'standard',
    question: 'Which of the following is the most abundant protein in the whole of the biosphere?',
    ncertPage: 'NCERT Page 106, 111',
    options: ['RuBisCO', 'Collagen', 'Insulin', 'Hemoglobin'],
    correctAnswer: 1,
    page: 17,
    column: 'left',
    explanation: 'Ribulose bisphosphate carboxylase-oxygenase (RuBisCO) is the most abundant protein in the entire biosphere. Collagen is the most abundant in the animal world.'
  },
  {
    id: 151,
    subject: 'Biology',
    type: 'match',
    question: 'Match the amino acids in List-I with their functional chemical natures in List-II:',
    ncertPage: 'NCERT Page 106, 108',
    listName1: 'List-I (Amino Acid)',
    listName2: 'List-II (Nature)',
    listI: [
      { id: 'A', text: 'Glutamic acid' },
      { id: 'B', text: 'Lysine' },
      { id: 'C', text: 'Valine' },
      { id: 'D', text: 'Tyrosine' }
    ],
    listII: [
      { id: 'I', text: 'Acidic' },
      { id: 'II', text: 'Basic' },
      { id: 'III', text: 'Neutral' },
      { id: 'IV', text: 'Aromatic' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - IV, B - II, C - I, D - III'
    ],
    correctAnswer: 1,
    page: 17,
    column: 'left',
    explanation: 'Glutamic acid is acidic; Lysine is basic; Valine is neutral; Tyrosine, Tryptophan, and Phenylalanine are aromatic.'
  },
  {
    id: 152,
    subject: 'Biology',
    type: 'standard',
    question: 'Select the INCORRECT match among secondary metabolites and their classes:',
    ncertPage: 'NCERT Page 108',
    options: [
      'Monoterpenes - Curcumin',
      'Essential oil - Lemon grass oil',
      'Polymeric substances - Rubber, Gums',
      'Alkaloids - Morphine, Codeine'
    ],
    correctAnswer: 1,
    page: 17,
    column: 'left',
    explanation: 'Curcumin is classified as a Drug, not a monoterpene (Monoterpenes include pinene, camphor, etc.).'
  },
  {
    id: 153,
    subject: 'Biology',
    type: 'match',
    question: 'Match the enzyme categories in List-I with their catalyzed reactions in List-II:',
    ncertPage: 'NCERT Page 106',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Oxidoreductases' },
      { id: 'B', text: 'Transferases' },
      { id: 'C', text: 'Hydrolases' },
      { id: 'D', text: 'Lyases' }
    ],
    listII: [
      { id: 'I', text: 'Redox reactions between two substrates' },
      { id: 'II', text: 'Transfer of a group other than hydrogen' },
      { id: 'III', text: 'Cleavage of bonds with water addition' },
      { id: 'IV', text: 'Cleavage of bonds leaving double bonds without hydrolysis' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - III, B - II, C - I, D - IV'
    ],
    correctAnswer: 1,
    page: 17,
    column: 'left',
    explanation: 'Standard IUBMB 6 classes: Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, Ligases.'
  },
  {
    id: 154,
    subject: 'Biology',
    type: 'standard',
    question: 'Which of the following elements is present in maximum percentage (by weight) in human body?',
    ncertPage: 'NCERT Page 109',
    options: ['Oxygen (65.0%)', 'Carbon (18.5%)', 'Nitrogen (3.3%)', 'Hydrogen (0.5%)'],
    correctAnswer: 1,
    page: 17,
    column: 'right',
    explanation: 'As per NCERT Table 9.1, Oxygen comprises 65.0% of the human body by weight, followed by Carbon (18.5%).'
  },
  {
    id: 155,
    subject: 'Biology',
    type: 'standard',
    question: 'Enzymes generally have maximum catalytic activity at:',
    ncertPage: 'NCERT Page 112, 113',
    options: ['Optimum pH and optimum temperature', '0°C', '100°C', 'Strongly alkaline pH 14'],
    correctAnswer: 1,
    page: 17,
    column: 'right',
    explanation: 'Enzymes function over a narrow range and display maximum velocity at optimum temperature and optimum pH.'
  },
  {
    id: 156,
    subject: 'Biology',
    type: 'diagram',
    diagramType: 'glycogen_branch',
    question: 'In a branched polysaccharide such as glycogen, the linear chain linkages and branch point linkages are respectively:',
    ncertPage: 'NCERT Page 110',
    options: [
      'α-1,4-glycosidic and α-1,6-glycosidic',
      'β-1,4-glycosidic and β-1,6-glycosidic',
      'α-1,6-glycosidic and α-1,4-glycosidic',
      'β-1,3-glycosidic and α-1,4-glycosidic'
    ],
    correctAnswer: 1,
    page: 17,
    column: 'right',
    explanation: 'Glycogen has α-1,4-glucosidic bonds in linear chains and α-1,6-glucosidic bonds at branching points.'
  },
  {
    id: 157,
    subject: 'Biology',
    type: 'standard',
    question: 'Identify the statement that is NOT correct regarding biomolecules:',
    ncertPage: 'NCERT Page 110, 111',
    options: [
      'Cellulose can be easily digested by humans as we produce cellulase.',
      'Glycogen is a branched homopolysaccharide stored in liver and muscle.',
      'Chitin forms the exoskeleton of arthropods.',
      'Starch consists of amylose and amylopectin.'
    ],
    correctAnswer: 1,
    page: 17,
    column: 'right',
    explanation: 'Humans lack the enzyme cellulase and cannot digest cellulose.'
  },
  {
    id: 158,
    subject: 'Biology',
    type: 'assertion_reason',
    question: 'Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): Collagen is the most abundant protein in the animal world.\nReason (R): It provides high tensile strength to connective tissues such as tendons and skin.',
    ncertPage: 'NCERT Page 108',
    assertion: 'Collagen is the most abundant protein in the animal world.',
    reason: 'It provides high tensile strength to connective tissues such as tendons and skin.',
    options: [
      'Both (A) and (R) are true and (R) is the correct explanation of (A).',
      'Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(A) is true but (R) is false.',
      '(A) is false but (R) is true.'
    ],
    correctAnswer: 1,
    page: 17,
    column: 'right',
    explanation: 'Collagen forms fibrous structural networks throughout extracellular matrix in connective tissues across animals.'
  },

  // Page 18: Q159 - Q167
  {
    id: 159,
    subject: 'Biology',
    type: 'standard',
    question: 'Identify the statement that is NOT correct regarding cofactors of enzymes:',
    ncertPage: 'NCERT Page 114, 118',
    options: [
      'Cofactors always remain irreversibly bound to the apoenzyme and cannot be separated without denaturing the protein.',
      'A coenzyme is an organic non-protein compound transiently associated during catalysis.',
      'A prosthetic group is an organic cofactor tightly bound to the apoenzyme.',
      'Metal ions form coordination bonds with side chains at the active site.'
    ],
    correctAnswer: 1,
    page: 18,
    column: 'left',
    explanation: 'Coenzymes are loosely and transiently bound, and catalytic activity is lost if cofactors are removed, but they do not always remain irreversibly bound.'
  },
  {
    id: 160,
    subject: 'Biology',
    type: 'match',
    question: 'Match the cofactors in List-I with their associated enzymes in List-II:',
    ncertPage: 'NCERT Page 108',
    listName1: 'List-I (Cofactor)',
    listName2: 'List-II (Enzyme)',
    listI: [
      { id: 'A', text: 'Haem' },
      { id: 'B', text: 'Zinc (Zn²⁺)' },
      { id: 'C', text: 'NAD / NADP' },
      { id: 'D', text: 'Magnesium (Mg²⁺)' }
    ],
    listII: [
      { id: 'I', text: 'Catalase and Peroxidase' },
      { id: 'II', text: 'Carboxypeptidase' },
      { id: 'III', text: 'Dehydrogenases (contain Niacin)' },
      { id: 'IV', text: 'Hexokinase' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - IV, B - II, C - I, D - III'
    ],
    correctAnswer: 1,
    page: 18,
    column: 'left',
    explanation: 'Haem: prosthetic group of catalase/peroxidase; Zn²⁺: carboxypeptidase; NAD: contains niacin; Mg²⁺: hexokinase.'
  },
  {
    id: 161,
    subject: 'Biology',
    type: 'match',
    question: 'Match the enzyme classes in List-I with their catalyzed reactions in List-II:',
    ncertPage: 'NCERT Page 117',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Isomerases' },
      { id: 'B', text: 'Ligases' },
      { id: 'C', text: 'Hydrolases' },
      { id: 'D', text: 'Lyases' }
    ],
    listII: [
      { id: 'I', text: 'Interconversion of optical, geometric, or positional isomers' },
      { id: 'II', text: 'Catalyze linking together of two compounds (e.g., C-O, C-S, C-N bonds)' },
      { id: 'III', text: 'Hydrolysis of ester, ether, peptide, or glycosidic bonds' },
      { id: 'IV', text: 'Removal of groups from substrates mechanism other than hydrolysis' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - III, B - II, C - I, D - IV'
    ],
    correctAnswer: 1,
    page: 18,
    column: 'left',
    explanation: 'Official IUBMB definitions as detailed in NCERT Biomolecules chapter.'
  },
  {
    id: 162,
    subject: 'Biology',
    type: 'statements',
    question: 'Given below are two statements:\nStatement I: The acid-soluble pool consists of biomicromolecules with molecular weights roughly from 18 to 800 Daltons.\nStatement II: The acid-insoluble fraction contains four types of organic compounds: proteins, nucleic acids, polysaccharides, and lipids.',
    ncertPage: 'NCERT Page 108, 109',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 1,
    page: 18,
    column: 'left',
    explanation: 'Both statements are directly taken from NCERT text under How to Analyse Chemical Composition.'
  },
  {
    id: 163,
    subject: 'Biology',
    type: 'diagram',
    diagramType: 'enzyme_activation_energy',
    question: 'In an energy profile diagram of an enzymatic reaction, the presence of an enzyme:',
    ncertPage: 'NCERT Page 115',
    options: [
      'Decreases the activation energy of the reaction',
      'Increases the activation energy of the reaction',
      'Changes the overall free energy change (ΔG) of the reaction',
      'Converts an endergonic reaction into an exergonic reaction'
    ],
    correctAnswer: 1,
    page: 18,
    column: 'right',
    explanation: 'Enzymes lower the activation energy barrier without altering the initial or final energy states or ΔG.'
  },
  {
    id: 164,
    subject: 'Biology',
    type: 'match',
    question: 'Match the enzyme terms in List-I with their definitions in List-II:',
    ncertPage: 'NCERT Page 117',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Apoenzyme' },
      { id: 'B', text: 'Holoenzyme' },
      { id: 'C', text: 'Prosthetic group' },
      { id: 'D', text: 'Coenzyme' }
    ],
    listII: [
      { id: 'I', text: 'Protein portion of enzyme' },
      { id: 'II', text: 'Active enzyme-cofactor complex' },
      { id: 'III', text: 'Tightly bound organic cofactor' },
      { id: 'IV', text: 'Loosely/transiently bound organic cofactor' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - III, B - II, C - I, D - IV'
    ],
    correctAnswer: 1,
    page: 18,
    column: 'right',
    explanation: 'Apoenzyme (protein) + Cofactor = Holoenzyme (active complex).'
  },
  {
    id: 165,
    subject: 'Biology',
    type: 'match',
    question: 'Match the polymers in List-I with their monomers in List-II:',
    ncertPage: 'NCERT Page 109-111',
    listName1: 'List-I (Polymer)',
    listName2: 'List-II (Monomer)',
    listI: [
      { id: 'A', text: 'Protein' },
      { id: 'B', text: 'Nucleic acid' },
      { id: 'C', text: 'Cellulose' },
      { id: 'D', text: 'Inulin' }
    ],
    listII: [
      { id: 'I', text: 'Amino acids' },
      { id: 'II', text: 'Nucleotides' },
      { id: 'III', text: 'Glucose' },
      { id: 'IV', text: 'Fructose' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - IV, B - II, C - I, D - III'
    ],
    correctAnswer: 1,
    page: 18,
    column: 'right',
    explanation: 'Proteins: amino acids; Nucleic acid: nucleotides; Cellulose: glucose; Inulin: fructose.'
  },
  {
    id: 166,
    subject: 'Biology',
    type: 'match',
    question: 'Match the plant anatomical terms in List-I with their descriptions in List-II:',
    ncertPage: 'NCERT Page 110',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Heartwood' },
      { id: 'B', text: 'Sapwood' },
      { id: 'C', text: 'Cork (Phellem)' },
      { id: 'D', text: 'Secondary cortex (Phelloderm)' }
    ],
    listII: [
      { id: 'I', text: 'Non-functional dead central secondary xylem with tannins' },
      { id: 'II', text: 'Peripheral living secondary xylem conducting water' },
      { id: 'III', text: 'Suberized cells produced outward by cork cambium' },
      { id: 'IV', text: 'Parenchymatous cells produced inward by cork cambium' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - III, B - II, C - I, D - IV'
    ],
    correctAnswer: 1,
    page: 18,
    column: 'right',
    explanation: 'Heartwood (duramen): central dark durable dead wood; Sapwood (alburnum): light conducting wood; Phellem: outer cork; Phelloderm: inner secondary cortex.'
  },
  {
    id: 167,
    subject: 'Biology',
    type: 'statements',
    question: 'Given below are two statements:\nStatement I: Adult human haemoglobin consists of 4 subunits: two α-type and two β-type chains.\nStatement II: This represents a quaternary structure of protein.',
    ncertPage: 'NCERT Page 111, 112',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 1,
    page: 18,
    column: 'right',
    explanation: 'Hemoglobin is an exemplary multimeric protein with 2 α and 2 β subunits arranged in quaternary conformation.'
  },

  // Page 19: Q168 - Q176
  {
    id: 168,
    subject: 'Biology',
    type: 'standard',
    question: 'Identify the statement that is NOT correct regarding secondary metabolites:',
    ncertPage: 'NCERT Page 118',
    options: [
      'All secondary metabolites have direct, identifiable roles in primary physiological processes like photosynthesis and respiration of the producing plant.',
      'Many secondary metabolites are useful to human welfare (e.g., rubber, drugs, scents, pigments).',
      'Some secondary metabolites have high ecological importance in defense against herbivores.',
      'Alkaloids, flavonoids, and essential oils are examples of secondary metabolites.'
    ],
    correctAnswer: 1,
    page: 19,
    column: 'left',
    explanation: 'By definition, secondary metabolites do not have identifiable direct roles in primary growth, development, or respiration in the host organism.'
  },
  {
    id: 169,
    subject: 'Biology',
    type: 'standard',
    question: 'Select the CORRECTLY matched pair:',
    ncertPage: 'NCERT Page 118',
    options: [
      'Catalase - Haem prosthetic group',
      'Carboxypeptidase - Magnesium cofactor',
      'Peroxidase - Zinc cofactor',
      'Apoenzyme - Non-protein part'
    ],
    correctAnswer: 1,
    page: 19,
    column: 'left',
    explanation: 'Haem is the prosthetic group for both catalase and peroxidase enzymes.'
  },
  {
    id: 170,
    subject: 'Biology',
    type: 'statements',
    question: 'From the statements given below, choose the correct statements:\nA. Oils have lower melting point than fats and remain as liquid in winters.\nB. Palmitic acid has 20 carbon atoms including carboxyl carbon.\nC. Lipids are generally water-insoluble.\nD. Phospholipids have a hydrophilic head and hydrophobic hydrocarbon tails.',
    ncertPage: 'NCERT Page 105, 106',
    options: ['A, C and D only', 'A and B only', 'B, C and D only', 'A, B, C and D'],
    correctAnswer: 1,
    page: 19,
    column: 'left',
    explanation: 'Palmitic acid has 16 carbons, whereas arachidonic acid has 20 carbons. A, C, and D are correct.'
  },
  {
    id: 171,
    subject: 'Biology',
    type: 'statements',
    question: 'Given below are two statements:\nStatement I: Starch is a homopolymer of glucose and serves as the major energy storage in plants.\nStatement II: Glycogen is also a homopolymer of glucose and serves as the storage carbohydrate in animals.',
    ncertPage: 'NCERT Page 110',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 1,
    page: 19,
    column: 'left',
    explanation: 'Both starch and glycogen are homopolymers composed entirely of α-D-glucose units.'
  },
  {
    id: 172,
    subject: 'Biology',
    type: 'match',
    question: 'Match the steps in catalytic cycle of an enzyme in List-I with their descriptions in List-II:',
    ncertPage: 'NCERT Page 115',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Substrate binds to active site' },
      { id: 'B', text: 'Formation of ES complex' },
      { id: 'C', text: 'Transition state alteration' },
      { id: 'D', text: 'Product release' }
    ],
    listII: [
      { id: 'I', text: 'Induces conformational fit in enzyme' },
      { id: 'II', text: 'Transient and unstable intermediate complex' },
      { id: 'III', text: 'Bonds of substrate are broken/formed' },
      { id: 'IV', text: 'Free enzyme is regenerated to bind new substrate' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - III, B - II, C - I, D - IV'
    ],
    correctAnswer: 1,
    page: 19,
    column: 'left',
    explanation: 'Classical sequence of catalytic cycle as detailed in NCERT.'
  },
  {
    id: 173,
    subject: 'Biology',
    type: 'statements',
    question: 'From the statements given below, choose the CORRECT statement(s):\nA. In a polysaccharide chain, the right end is called the reducing end and the left end is called the non-reducing end.\nB. Cellulose consists of β-glucose units linked by β-1,4-glycosidic bonds.\nC. Starch reacts with iodine to produce a yellow colour.',
    ncertPage: 'NCERT Page 110, 111',
    options: ['A and B only', 'B and C only', 'A and C only', 'A, B and C'],
    correctAnswer: 1,
    page: 19,
    column: 'right',
    explanation: 'Starch reacts with iodine to give an intense blue-black color, not yellow. A and B are correct.'
  },
  {
    id: 174,
    subject: 'Biology',
    type: 'standard',
    question: 'Nicotinamide adenine dinucleotide (NAD) and NADP contain the vitamin:',
    ncertPage: 'NCERT Page 117, 118',
    options: ['Niacin (Vitamin B₃)', 'Thiamine (Vitamin B₁)', 'Riboflavin (Vitamin B₂)', 'Biotin'],
    correctAnswer: 1,
    page: 19,
    column: 'right',
    explanation: 'Coenzymes NAD and NADP contain the vitamin niacin.'
  },
  {
    id: 175,
    subject: 'Biology',
    type: 'statements',
    question: 'Given below are two statements:\nStatement I: Ribozymes are catalytic RNA molecules that act as biological enzymes.\nStatement II: Almost all enzymes are proteins, but some nucleic acids behave like enzymes.',
    ncertPage: 'NCERT Page 106',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 1,
    page: 19,
    column: 'right',
    explanation: 'NCERT opening sentence of enzymes section: "Almost all enzymes are proteins. There are some nucleic acids that behave like enzymes. These are called ribozymes."'
  },
  {
    id: 176,
    subject: 'Biology',
    type: 'statements',
    question: 'Given below are two statements:\nStatement I: Primary structure of a protein determines its 3D conformation and functional properties.\nStatement II: Peptide bond formation involves a dehydration condensation reaction between -COOH of one amino acid and -NH₂ of the next.',
    ncertPage: 'NCERT Page 111',
    options: [
      'Both Statement I and Statement II are correct.',
      'Both Statement I and Statement II are incorrect.',
      'Statement I is correct but Statement II is incorrect.',
      'Statement I is incorrect but Statement II is correct.'
    ],
    correctAnswer: 1,
    page: 19,
    column: 'right',
    explanation: 'Both statements are scientifically accurate and conform directly to NCERT Biomolecules.'
  },

  // Page 20: Q177 - Q180
  {
    id: 177,
    subject: 'Biology',
    type: 'standard',
    question: 'Identify the statement that is NOT correct regarding enzymes:',
    ncertPage: 'NCERT Page 110, 112',
    options: [
      'Competitive inhibitor increases both Km and Vmax of the enzymatic reaction.',
      'Substrate binds specifically at the active site of the enzyme.',
      'Enzymes work by lowering the activation energy barrier.',
      'At high temperatures, enzymes lose activity due to thermal denaturation.'
    ],
    correctAnswer: 1,
    page: 20,
    column: 'left',
    explanation: 'A competitive inhibitor increases the apparent Km, but does NOT alter the Vmax (since sufficiently high substrate concentration overcomes the competition).'
  },
  {
    id: 178,
    subject: 'Biology',
    type: 'diagram',
    diagramType: 'michaelis_menten',
    question: 'The graph represents the effect of substrate concentration [S] on the velocity of an enzyme-catalyzed reaction (V). In the Michaelis-Menten plot, Km represents:',
    ncertPage: 'NCERT Page 116',
    options: [
      'The substrate concentration at which reaction velocity reaches half of Vmax (Vmax / 2)',
      'The velocity at half substrate concentration',
      'The maximum velocity attained by the enzyme at infinite substrate',
      'The concentration of enzyme molecules in the solution'
    ],
    correctAnswer: 1,
    page: 20,
    column: 'left',
    explanation: 'Km (Michaelis constant) is defined as the substrate concentration at which the velocity of the reaction is equal to half of its maximum velocity (Vmax/2).'
  },
  {
    id: 179,
    subject: 'Biology',
    type: 'match',
    question: 'Match the cofactors in List-I with their chemical nature in List-II:',
    ncertPage: 'NCERT Page 118',
    listName1: 'List-I',
    listName2: 'List-II',
    listI: [
      { id: 'A', text: 'Prosthetic group' },
      { id: 'B', text: 'Coenzyme' },
      { id: 'C', text: 'Metal ion' },
      { id: 'D', text: 'Apoenzyme' }
    ],
    listII: [
      { id: 'I', text: 'Tightly bound organic compound' },
      { id: 'II', text: 'Transiently bound organic compound often containing vitamins' },
      { id: 'III', text: 'Inorganic coordination center (e.g., Zn²⁺, Fe²⁺)' },
      { id: 'IV', text: 'Protein portion of the conjugated enzyme' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - IV, B - II, C - I, D - III'
    ],
    correctAnswer: 1,
    page: 20,
    column: 'right',
    explanation: 'Prosthetic: tightly bound organic; Coenzyme: transient organic; Metal ion: inorganic coordination; Apoenzyme: protein.'
  },
  {
    id: 180,
    subject: 'Biology',
    type: 'match',
    question: 'Match the chemical elements in List-I with their approximate percentage of total human body weight in List-II:',
    ncertPage: 'NCERT Page 105, 109',
    listName1: 'List-I (Element)',
    listName2: 'List-II (% Weight in Human)',
    listI: [
      { id: 'A', text: 'Hydrogen' },
      { id: 'B', text: 'Carbon' },
      { id: 'C', text: 'Nitrogen' },
      { id: 'D', text: 'Oxygen' }
    ],
    listII: [
      { id: 'I', text: '0.5%' },
      { id: 'II', text: '18.5%' },
      { id: 'III', text: '3.3%' },
      { id: 'IV', text: '65.0%' }
    ],
    options: [
      'A - I, B - II, C - III, D - IV',
      'A - II, B - I, C - IV, D - III',
      'A - I, B - III, C - II, D - IV',
      'A - IV, B - II, C - I, D - III'
    ],
    correctAnswer: 1,
    page: 20,
    column: 'right',
    explanation: 'NCERT Table 9.1: Hydrogen: 0.5%, Carbon: 18.5%, Nitrogen: 3.3%, Oxygen: 65.0%.'
  }
];
