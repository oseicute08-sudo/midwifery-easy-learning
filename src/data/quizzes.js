/**
 * Quiz data architecture for Midwifery Easy Learning Center
 * Sample questions for BND 101 — expandable to all courses.
 */

export const quizzes = [
  {
    id: 'quiz-bnd101-intro',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Human Anatomy 1 — Foundations',
    type: 'course',
    description: 'Test your understanding of anatomical position, directional terms, planes and body cavities.',
    timeLimit: 15,
    passingScore: 70,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        question: 'In the anatomical position, the palms of the hands face:',
        options: ['Backward', 'Forward', 'Toward the midline', 'Toward the sides'],
        correctIndex: 1,
        explanation:
          'In the anatomical position the body is upright with palms facing forward (anteriorly). This standardises the description of the radius and ulna as parallel.',
      },
      {
        id: 'q2',
        type: 'mcq',
        question: 'Which directional term means “toward the head”?',
        options: ['Inferior', 'Lateral', 'Superior', 'Distal'],
        correctIndex: 2,
        explanation: 'Superior (cranial) means toward the head or upper part of a structure.',
      },
      {
        id: 'q3',
        type: 'mcq',
        question: 'The plane that divides the body into anterior and posterior portions is the:',
        options: ['Sagittal plane', 'Transverse plane', 'Frontal (coronal) plane', 'Oblique plane'],
        correctIndex: 2,
        explanation: 'The frontal (coronal) plane divides the body into front (anterior) and back (posterior) parts.',
      },
      {
        id: 'q4',
        type: 'mcq',
        question: 'Which cavity contains the heart and lungs?',
        options: ['Abdominal cavity', 'Pelvic cavity', 'Thoracic cavity', 'Cranial cavity'],
        correctIndex: 2,
        explanation: 'The thoracic cavity houses the heart (pericardial cavity) and lungs (pleural cavities).',
      },
      {
        id: 'q5',
        type: 'mcq',
        question: 'The term “proximal” is most appropriately used when describing structures of the:',
        options: ['Trunk', 'Limbs', 'Head', 'Abdomen'],
        correctIndex: 1,
        explanation: 'Proximal and distal refer to positions closer to or farther from the point of attachment of a limb.',
      },
      {
        id: 'q6',
        type: 'mcq',
        question: 'The diaphragm separates which two cavities?',
        options: [
          'Cranial and vertebral',
          'Thoracic and abdominopelvic',
          'Abdominal and pelvic',
          'Pleural and pericardial',
        ],
        correctIndex: 1,
        explanation: 'The diaphragm is the muscular partition between the thoracic cavity above and the abdominopelvic cavity below.',
      },
      {
        id: 'q7',
        type: 'mcq',
        question: 'A structure lying closer to the midline of the body is described as:',
        options: ['Lateral', 'Medial', 'Distal', 'Superficial'],
        correctIndex: 1,
        explanation: 'Medial means toward the midline; lateral means away from the midline.',
      },
      {
        id: 'q8',
        type: 'mcq',
        question: 'Which of the following is part of the dorsal body cavity?',
        options: ['Thoracic cavity', 'Abdominal cavity', 'Cranial cavity', 'Pelvic cavity'],
        correctIndex: 2,
        explanation: 'The dorsal body cavity consists of the cranial cavity and the vertebral cavity.',
      },
    ],
  },
  {
    id: 'quiz-bnd101-terms',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Directional Terms Practice',
    type: 'topic',
    description: 'Quick practice on anatomical directional vocabulary.',
    timeLimit: 8,
    passingScore: 70,
    questions: [
      {
        id: 't1',
        type: 'mcq',
        question: 'The elbow is ______ to the wrist.',
        options: ['Distal', 'Proximal', 'Lateral', 'Inferior'],
        correctIndex: 1,
        explanation: 'The elbow is closer to the point of attachment (shoulder) than the wrist, so it is proximal to the wrist.',
      },
      {
        id: 't2',
        type: 'mcq',
        question: 'The skin is ______ to the muscles.',
        options: ['Deep', 'Medial', 'Superficial', 'Proximal'],
        correctIndex: 2,
        explanation: 'Skin is closer to the body surface than the underlying muscles; therefore it is superficial.',
      },
      {
        id: 't3',
        type: 'mcq',
        question: 'The right kidney and left kidney are ______ to each other.',
        options: ['Ipsilateral', 'Contralateral', 'Proximal', 'Anterior'],
        correctIndex: 1,
        explanation: 'Structures on opposite sides of the body are contralateral.',
      },
      {
        id: 't4',
        type: 'mcq',
        question: 'The nose is ______ to the ears.',
        options: ['Lateral', 'Medial', 'Posterior', 'Distal'],
        correctIndex: 1,
        explanation: 'The nose lies closer to the midline than the ears, so it is medial to the ears.',
      },
    ],
  },

  {
    id: 'quiz-bnd101-l01',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 1 — Introduction to Human Anatomy',
    type: 'topic',
    description: 'Check understanding of introduction to human anatomy.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an1q1', type: 'mcq', question: 'Anatomy is the study of:', options: ['Body function only', 'Body structure', 'Only diseases', 'Only chemistry'], correctIndex: 1, explanation: 'Anatomy studies structure.' },
      { id: 'an1q2', type: 'mcq', question: 'Physiology studies:', options: ['Only bones', 'Body function', 'Only surface landmarks', 'Only Latin names'], correctIndex: 1, explanation: 'Physiology studies function.' },
      { id: 'an1q3', type: 'mcq', question: 'Surface anatomy is useful for:', options: ['Ignoring landmarks', 'Locating structures by external landmarks', 'Replacing imaging always', 'Avoiding palpation'], correctIndex: 1, explanation: 'Landmarks guide examination.' },
      { id: 'an1q4', type: 'mcq', question: 'Midwives use anatomy knowledge to:', options: ['Avoid assessment', 'Understand labour mechanisms and examine safely', 'Replace clinical protocols', 'Ignore fetal position'], correctIndex: 1, explanation: 'Anatomy underpins maternity assessment.' },
      { id: 'an1q5', type: 'mcq', question: 'Structural organisation from simple to complex includes:', options: ['Organ → cell → atom', 'Cell → tissue → organ → system', 'System → atom only', 'Only tissues exist'], correctIndex: 1, explanation: 'Cells form tissues, organs, systems.' }
    ],
  },
  {
    id: 'quiz-bnd101-l02',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 2 — Anatomical Position',
    type: 'topic',
    description: 'Check understanding of anatomical position.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an2q1', type: 'mcq', question: 'In the anatomical position, the person stands:', options: ['Lying prone with palms back', 'Erect, facing forward, palms forward', 'Sitting with arms crossed', 'Side-lying always'], correctIndex: 1, explanation: 'Standard anatomical position faces forward with palms forward.' },
      { id: 'an2q2', type: 'mcq', question: 'The anatomical position is used because:', options: ['It is decorative', 'It provides a consistent reference for terms', 'It replaces examination', 'It only applies to cadavers'], correctIndex: 1, explanation: 'Consistent reference for description.' },
      { id: 'an2q3', type: 'mcq', question: 'Palms face:', options: ['Backward', 'Forward', 'Toward the thighs only', 'Upward always'], correctIndex: 1, explanation: 'Palms face forward.' },
      { id: 'an2q4', type: 'mcq', question: 'Feet in anatomical position are:', options: ['Crossed', 'Together or slightly apart, toes forward', 'Pointing backward', 'Irrelevant'], correctIndex: 1, explanation: 'Toes point forward.' },
      { id: 'an2q5', type: 'mcq', question: 'Directional terms assume:', options: ['Random posture', 'Anatomical position', 'Prone position only', 'Sitting position only'], correctIndex: 1, explanation: 'Terms assume anatomical position.' }
    ],
  },
  {
    id: 'quiz-bnd101-l03',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 3 — Anatomical Terms of Direction',
    type: 'topic',
    description: 'Check understanding of anatomical terms of direction.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an3q1', type: 'mcq', question: 'This lesson focuses on Anatomical Terms of Direction. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an3q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an3q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an3q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an3q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l04',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 4 — Body Planes and Sections',
    type: 'topic',
    description: 'Check understanding of body planes and sections.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an4q1', type: 'mcq', question: 'This lesson focuses on Body Planes and Sections. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an4q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an4q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an4q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an4q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l05',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 5 — Body Cavities',
    type: 'topic',
    description: 'Check understanding of body cavities.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an5q1', type: 'mcq', question: 'This lesson focuses on Body Cavities. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an5q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an5q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an5q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an5q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l06',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 6 — Body Regions',
    type: 'topic',
    description: 'Check understanding of body regions.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an6q1', type: 'mcq', question: 'This lesson focuses on Body Regions. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an6q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an6q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an6q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an6q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l07',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 7 — Cells and Basic Organization',
    type: 'topic',
    description: 'Check understanding of cells and basic organization.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an7q1', type: 'mcq', question: 'This lesson focuses on Cells and Basic Organization. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an7q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an7q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an7q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an7q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l08',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 8 — Tissues',
    type: 'topic',
    description: 'Check understanding of tissues.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an8q1', type: 'mcq', question: 'This lesson focuses on Tissues. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an8q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an8q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an8q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an8q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l09',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 9 — Skeletal System',
    type: 'topic',
    description: 'Check understanding of skeletal system.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an9q1', type: 'mcq', question: 'The skeletal system provides:', options: ['Only blood storage', 'Support, protection and lever systems for movement', 'Only hormone production', 'Only digestion'], correctIndex: 1, explanation: 'Support, protection, movement levers.' },
      { id: 'an9q2', type: 'mcq', question: 'Axial skeleton includes:', options: ['Only the limbs', 'Skull, vertebral column and thoracic cage', 'Only the pelvis', 'Only the hands'], correctIndex: 1, explanation: 'Axial = skull, spine, thorax.' },
      { id: 'an9q3', type: 'mcq', question: 'Pelvic anatomy is critical in midwifery because:', options: ['It is unrelated to birth', 'It forms the birth canal and influences labour progress', 'It only affects walking', 'It has no bony landmarks'], correctIndex: 1, explanation: 'Pelvis forms the birth canal.' },
      { id: 'an9q4', type: 'mcq', question: 'Bone marrow is important for:', options: ['Only calcium taste', 'Blood cell production among other roles', 'Only nerve signals', 'Only skin colour'], correctIndex: 1, explanation: 'Marrow produces blood cells.' },
      { id: 'an9q5', type: 'mcq', question: 'A fracture is:', options: ['Always harmless', 'A break in bone continuity', 'Only a soft tissue injury', 'Never seen in pregnancy'], correctIndex: 1, explanation: 'Fracture = break in bone.' }
    ],
  },
  {
    id: 'quiz-bnd101-l10',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 10 — Joints',
    type: 'topic',
    description: 'Check understanding of joints.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an10q1', type: 'mcq', question: 'This lesson focuses on Joints. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an10q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an10q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an10q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an10q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l11',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 11 — Muscular System',
    type: 'topic',
    description: 'Check understanding of muscular system.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an11q1', type: 'mcq', question: 'This lesson focuses on Muscular System. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an11q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an11q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an11q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an11q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l12',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 12 — Nervous System Introduction',
    type: 'topic',
    description: 'Check understanding of nervous system introduction.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an12q1', type: 'mcq', question: 'This lesson focuses on Nervous System Introduction. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an12q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an12q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an12q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an12q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l13',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 13 — Cardiovascular System Introduction',
    type: 'topic',
    description: 'Check understanding of cardiovascular system introduction.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an13q1', type: 'mcq', question: 'This lesson focuses on Cardiovascular System Introduction. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an13q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an13q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an13q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an13q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l14',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 14 — Respiratory System Introduction',
    type: 'topic',
    description: 'Check understanding of respiratory system introduction.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an14q1', type: 'mcq', question: 'This lesson focuses on Respiratory System Introduction. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an14q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an14q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an14q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an14q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l15',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 15 — Digestive System Introduction',
    type: 'topic',
    description: 'Check understanding of digestive system introduction.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an15q1', type: 'mcq', question: 'This lesson focuses on Digestive System Introduction. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an15q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an15q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an15q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an15q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l16',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 16 — Urinary System Introduction',
    type: 'topic',
    description: 'Check understanding of urinary system introduction.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an16q1', type: 'mcq', question: 'This lesson focuses on Urinary System Introduction. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an16q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an16q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an16q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an16q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l17',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 17 — Reproductive System Introduction',
    type: 'topic',
    description: 'Check understanding of reproductive system introduction.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an17q1', type: 'mcq', question: 'This lesson focuses on Reproductive System Introduction. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an17q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an17q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an17q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an17q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l18',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 18 — Endocrine System Introduction',
    type: 'topic',
    description: 'Check understanding of endocrine system introduction.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an18q1', type: 'mcq', question: 'This lesson focuses on Endocrine System Introduction. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an18q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an18q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an18q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an18q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l19',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 19 — Lymphatic and Immune System Introduction',
    type: 'topic',
    description: 'Check understanding of lymphatic and immune system introduction.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an19q1', type: 'mcq', question: 'This lesson focuses on Lymphatic and Immune System Introduction. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an19q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an19q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an19q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an19q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd101-l20',
    courseId: 'bnd-101',
    courseCode: 'BND 101',
    title: 'Lesson 20 — Integrated Anatomical Review',
    type: 'topic',
    description: 'Check understanding of integrated anatomical review.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'an20q1', type: 'mcq', question: 'This lesson focuses on Integrated Anatomical Review. Best statement:', options: ['Anatomy is optional for midwives', 'These structures support safe clinical assessment', 'Only surgeons need this', 'Ignore landmarks'], correctIndex: 1, explanation: 'Anatomy supports safe assessment.' },
      { id: 'an20q2', type: 'mcq', question: 'Midwifery relevance includes:', options: ['No link to practice', 'Understanding maternal and fetal anatomy for safe care', 'Replacing observation', 'Avoiding pelvic knowledge'], correctIndex: 1, explanation: 'Anatomy underpins maternity care.' },
      { id: 'an20q3', type: 'mcq', question: 'Best study approach:', options: ['Memorise only Latin without meaning', 'Link structure to function and clinical landmarks', 'Skip diagrams', 'Avoid review'], correctIndex: 1, explanation: 'Structure–function–clinical links help learning.' },
      { id: 'an20q4', type: 'mcq', question: 'These concepts are:', options: ['Only theoretical', 'Relevant to examination and labour care', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'Relevant to clinical practice.' },
      { id: 'an20q5', type: 'mcq', question: 'After this lesson you should:', options: ['Forget directional terms', 'Explain key structures and their clinical relevance', 'Avoid the dictionary', 'Skip the quiz'], correctIndex: 1, explanation: 'Explain and apply key points.' }
    ],
  },
  {
    id: 'quiz-bnd103-l01',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 1 — Introduction to Chemistry',
    type: 'topic',
    description: 'Why chemistry matters for midwifery and nursing.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'c01q1', type: 'mcq', question: 'Chemistry is the study of:', options: ['Only living organisms', 'Matter and its changes', 'Only medicines', 'Hospital equipment'], correctIndex: 1, explanation: 'Chemistry studies matter — composition, properties and changes.' },
      { id: 'c01q2', type: 'mcq', question: 'Which branch focuses on chemical processes in living organisms?', options: ['Organic chemistry only', 'Biochemistry', 'Physical geography', 'Anatomy'], correctIndex: 1, explanation: 'Biochemistry is the chemistry of living systems.' },
      { id: 'c01q3', type: 'mcq', question: 'Why is chemistry relevant to midwifery?', options: ['It is not relevant', 'It explains pH, electrolytes, fluids and metabolism', 'Only for laboratory staff', 'Only for prescribing doctors'], correctIndex: 1, explanation: 'Clinical care depends on chemical principles daily.' },
      { id: 'c01q4', type: 'mcq', question: 'Matter is defined as anything that:', options: ['Is visible', 'Has mass and occupies space', 'Is alive', 'Is solid'], correctIndex: 1, explanation: 'Matter has mass and takes up space.' },
      { id: 'c01q5', type: 'mcq', question: 'Blood electrolyte results are examples of:', options: ['Anatomical measurements', 'Chemical measurements', 'Surgical findings', 'Psychological scores'], correctIndex: 1, explanation: 'Electrolyte values are chemical concentrations.' },
    ],
  },
  {
    id: 'quiz-bnd103-l02',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 2 — Matter and Its Properties',
    type: 'topic',
    description: 'States of matter and physical vs chemical properties.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'c02q1', type: 'mcq', question: 'Which is a liquid in the body?', options: ['Bone', 'Blood', 'Tooth enamel', 'Hair'], correctIndex: 1, explanation: 'Blood is a liquid.' },
      { id: 'c02q2', type: 'mcq', question: 'A physical property is one that:', options: ['Always changes the substance into something new', 'Can be observed without changing chemical identity', 'Only applies to gases', 'Is only measured in laboratories'], correctIndex: 1, explanation: 'Physical properties do not change identity.' },
      { id: 'c02q3', type: 'mcq', question: 'Oxygen used in therapy is typically a:', options: ['Solid', 'Liquid only', 'Gas', 'Mixture of metals'], correctIndex: 2, explanation: 'Medical oxygen is supplied as a gas.' },
      { id: 'c02q4', type: 'mcq', question: 'Melting ice is a:', options: ['Chemical change', 'Physical change', 'Nuclear change', 'Biological mutation'], correctIndex: 1, explanation: 'Ice and water are the same substance (H₂O).' },
      { id: 'c02q5', type: 'mcq', question: 'Which state has fixed volume but takes the shape of its container?', options: ['Solid', 'Liquid', 'Gas', 'Plasma only'], correctIndex: 1, explanation: 'Liquids have fixed volume and variable shape.' },
    ],
  },
  {
    id: 'quiz-bnd103-l05',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 5 — Structure of the Atom',
    type: 'topic',
    description: 'Protons, neutrons and electrons.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'c05q1', type: 'mcq', question: 'Protons have a charge that is:', options: ['Negative', 'Positive', 'Zero', 'Variable'], correctIndex: 1, explanation: 'Protons are positively charged.' },
      { id: 'c05q2', type: 'mcq', question: 'Electrons are found:', options: ['Only in the nucleus', 'Around the nucleus', 'Only in solids', 'Only in metals'], correctIndex: 1, explanation: 'Electrons occupy space around the nucleus.' },
      { id: 'c05q3', type: 'mcq', question: 'In a neutral atom, the number of protons equals the number of:', options: ['Neutrons only', 'Electrons', 'Molecules', 'Bonds'], correctIndex: 1, explanation: 'Neutral atoms have equal protons and electrons.' },
      { id: 'c05q4', type: 'mcq', question: 'Almost all of an atom’s mass is in the:', options: ['Electron cloud', 'Nucleus', 'Outer shell only', 'Bonds'], correctIndex: 1, explanation: 'The nucleus contains protons and neutrons.' },
      { id: 'c05q5', type: 'mcq', question: 'Na⁺ is a sodium atom that has:', options: ['Gained a proton', 'Lost an electron', 'Gained a neutron', 'Lost a proton'], correctIndex: 1, explanation: 'Losing an electron creates a positive ion.' },
    ],
  },
  {
    id: 'quiz-bnd103-l11',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 11 — Ionic Bonds',
    type: 'topic',
    description: 'Ionic bonding and electrolytes.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'c11q1', type: 'mcq', question: 'An ionic bond involves:', options: ['Sharing of electrons only', 'Transfer of electrons', 'No electrons', 'Only protons moving'], correctIndex: 1, explanation: 'Ionic bonds form by electron transfer.' },
      { id: 'c11q2', type: 'mcq', question: 'When NaCl dissolves in water it forms:', options: ['Neutral NaCl molecules only', 'Na⁺ and Cl⁻ ions', 'Only Na atoms', 'Only gas'], correctIndex: 1, explanation: 'Ionic compounds dissociate into ions in water.' },
      { id: 'c11q3', type: 'mcq', question: 'A cation is:', options: ['A negative ion', 'A positive ion', 'A neutral atom', 'A molecule of water'], correctIndex: 1, explanation: 'Cations are positive ions.' },
      { id: 'c11q4', type: 'mcq', question: 'Which is a major electrolyte in blood?', options: ['Na⁺', 'Pure gold', 'Helium gas', 'Diamond'], correctIndex: 0, explanation: 'Sodium ion is a key plasma electrolyte.' },
      { id: 'c11q5', type: 'mcq', question: 'Cl⁻ forms when chlorine:', options: ['Loses an electron', 'Gains an electron', 'Loses a proton', 'Shares two protons'], correctIndex: 1, explanation: 'Gaining an electron creates a negative ion.' },
    ],
  },
  {
    id: 'quiz-bnd103-l15',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 15 — Acids, Bases and pH',
    type: 'topic',
    description: 'pH scale and blood pH.',
    timeLimit: 8,
    passingScore: 70,
    questions: [
      { id: 'c15q1', type: 'mcq', question: 'Normal arterial blood pH is approximately:', options: ['6.0–6.5', '7.0 exactly', '7.35–7.45', '8.0–8.5'], correctIndex: 2, explanation: 'Normal blood pH is tightly kept around 7.35–7.45.' },
      { id: 'c15q2', type: 'mcq', question: 'An acid tends to:', options: ['Raise pH', 'Lower pH', 'Have no effect on H⁺', 'Remove all water'], correctIndex: 1, explanation: 'Acids increase H⁺ and lower pH.' },
      { id: 'c15q3', type: 'mcq', question: 'A pH of 7 is considered:', options: ['Strongly acidic', 'Neutral', 'Strongly alkaline', 'The same as blood'], correctIndex: 1, explanation: 'pH 7 is neutral; blood is slightly above 7.' },
      { id: 'c15q4', type: 'mcq', question: 'Buffers in blood help to:', options: ['Ignore pH changes', 'Resist changes in pH', 'Always make blood acidic', 'Remove all electrolytes'], correctIndex: 1, explanation: 'Buffers minimise pH change.' },
      { id: 'c15q5', type: 'mcq', question: 'Acidosis means blood pH is:', options: ['Too high', 'Too low', 'Exactly 7', 'Unmeasurable'], correctIndex: 1, explanation: 'Acidosis is lower than normal pH.' },
    ],
  },
  {
    id: 'quiz-bnd103-l17',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 17 — Concentration and Dilution',
    type: 'topic',
    description: 'Understanding concentration concepts.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'c17q1', type: 'mcq', question: 'Concentration describes:', options: ['Only the colour of a fluid', 'How much solute is in a given amount of solution', 'Only temperature', 'Only the container size'], correctIndex: 1, explanation: 'Concentration is amount of solute per amount of solution.' },
      { id: 'c17q2', type: 'mcq', question: 'Dilution:', options: ['Increases concentration', 'Decreases concentration by adding solvent', 'Removes all solute', 'Changes the chemical identity of the solute'], correctIndex: 1, explanation: 'Adding solvent lowers concentration.' },
      { id: 'c17q3', type: 'mcq', question: 'mmol/L is a unit of:', options: ['Temperature', 'Concentration', 'Length', 'Time'], correctIndex: 1, explanation: 'Millimoles per litre measures concentration.' },
      { id: 'c17q4', type: 'mcq', question: 'Why must concentration units be checked carefully?', options: ['They are decorative', 'Different units can lead to serious errors if confused', 'Units never matter', 'Only colour matters'], correctIndex: 1, explanation: 'Misreading units can cause clinical harm.' },
      { id: 'c17q5', type: 'mcq', question: 'In a solution, the solvent is usually present in:', options: ['The smaller amount', 'The greater amount', 'Equal amount only', 'Solid form only'], correctIndex: 1, explanation: 'The solvent is the major component.' },
    ],
  },
  {
    id: 'quiz-bnd103-l18',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 18 — Organic Compounds',
    type: 'topic',
    description: 'Carbohydrates, lipids, proteins and nucleic acids.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'c18q1', type: 'mcq', question: 'The main sugar used by cells for energy is:', options: ['Sodium', 'Glucose', 'Calcium', 'Chloride'], correctIndex: 1, explanation: 'Glucose is the primary cellular fuel.' },
      { id: 'c18q2', type: 'mcq', question: 'Proteins are made of:', options: ['Fatty acids only', 'Amino acids', 'Glucose units only', 'Metal ions only'], correctIndex: 1, explanation: 'Proteins are polymers of amino acids.' },
      { id: 'c18q3', type: 'mcq', question: 'DNA and RNA are:', options: ['Lipids', 'Nucleic acids', 'Simple salts', 'Noble gases'], correctIndex: 1, explanation: 'Nucleic acids store and transfer genetic information.' },
      { id: 'c18q4', type: 'mcq', question: 'Lipids are important for:', options: ['Only bone structure', 'Energy storage and cell membranes', 'Only carrying oxygen', 'Only nerve insulation in plants'], correctIndex: 1, explanation: 'Lipids store energy and form membranes.' },
      { id: 'c18q5', type: 'mcq', question: 'Gestational diabetes primarily involves disordered:', options: ['Bone growth', 'Carbohydrate (glucose) metabolism', 'Hair colour', 'Hearing'], correctIndex: 1, explanation: 'It is a disorder of glucose regulation in pregnancy.' },
    ],
  },
  {
    id: 'quiz-bnd103-l19',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 19 — Water, Electrolytes and Minerals',
    type: 'topic',
    description: 'Body water and key ions/minerals.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'c19q1', type: 'mcq', question: 'The main solvent in the human body is:', options: ['Alcohol', 'Water', 'Oil', 'Nitrogen gas'], correctIndex: 1, explanation: 'Water is the primary body solvent.' },
      { id: 'c19q2', type: 'mcq', question: 'Which ion is especially critical for heart muscle function?', options: ['K⁺ (potassium)', 'Helium', 'Gold', 'Silicon'], correctIndex: 0, explanation: 'Potassium is vital for cardiac and muscle function.' },
      { id: 'c19q3', type: 'mcq', question: 'Iron is needed in pregnancy mainly for:', options: ['Hair colour', 'Haemoglobin and oxygen transport', 'Tooth enamel only', 'Producing vitamin C'], correctIndex: 1, explanation: 'Iron is essential for haemoglobin.' },
      { id: 'c19q4', type: 'mcq', question: 'Electrolytes are:', options: ['Neutral sugars only', 'Ions that conduct electricity in solution', 'Only solid metals', 'Gases in the lungs'], correctIndex: 1, explanation: 'Electrolytes are free ions in solution.' },
      { id: 'c19q5', type: 'mcq', question: 'Sodium mainly helps control:', options: ['Hair growth', 'Extracellular fluid volume', 'Eye colour', 'Bone length only'], correctIndex: 1, explanation: 'Na⁺ is a major determinant of ECF volume.' },
    ],
  },

  {
    id: 'quiz-bnd103-l03',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 3 — Elements Compounds Mixtures',
    type: 'topic',
    description: 'Check understanding of elements compounds mixtures.',
    timeLimit: 5,
    passingScore: 70,
    questions: [
      { id: 'c3q1', type: 'mcq', question: 'This lesson focuses on Elements Compounds Mixtures. Which statement is most accurate?', options: ['Chemistry is unrelated to healthcare', 'Understanding these concepts supports safe clinical practice', 'Only laboratory staff need this knowledge', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Chemistry underpins clinical measurements and safe care.' },
      { id: 'c3q2', type: 'mcq', question: 'Why should midwifery students learn this topic?', options: ['For decoration only', 'To interpret findings and understand body processes', 'It replaces clinical experience', 'It is optional trivia'], correctIndex: 1, explanation: 'Conceptual chemistry improves clinical reasoning.' },
      { id: 'c3q3', type: 'mcq', question: 'The best way to use this knowledge is to:', options: ['Ignore lab units', 'Link principles to real patient data and fluids', 'Memorise only without understanding', 'Avoid all numbers'], correctIndex: 1, explanation: 'Application to real clinical data is the goal.' },
      { id: 'c3q4', type: 'mcq', question: 'Chemical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Directly relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'c3q5', type: 'mcq', question: 'After studying this lesson you should be able to:', options: ['Prescribe unrestricted drugs', 'Explain core ideas in simple clinical language', 'Ignore electrolyte results', 'Skip fluid labels'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' },
    ],
  },

  {
    id: 'quiz-bnd103-l04',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 4 — Physical Chemical Changes',
    type: 'topic',
    description: 'Check understanding of physical chemical changes.',
    timeLimit: 5,
    passingScore: 70,
    questions: [
      { id: 'c4q1', type: 'mcq', question: 'This lesson focuses on Physical Chemical Changes. Which statement is most accurate?', options: ['Chemistry is unrelated to healthcare', 'Understanding these concepts supports safe clinical practice', 'Only laboratory staff need this knowledge', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Chemistry underpins clinical measurements and safe care.' },
      { id: 'c4q2', type: 'mcq', question: 'Why should midwifery students learn this topic?', options: ['For decoration only', 'To interpret findings and understand body processes', 'It replaces clinical experience', 'It is optional trivia'], correctIndex: 1, explanation: 'Conceptual chemistry improves clinical reasoning.' },
      { id: 'c4q3', type: 'mcq', question: 'The best way to use this knowledge is to:', options: ['Ignore lab units', 'Link principles to real patient data and fluids', 'Memorise only without understanding', 'Avoid all numbers'], correctIndex: 1, explanation: 'Application to real clinical data is the goal.' },
      { id: 'c4q4', type: 'mcq', question: 'Chemical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Directly relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'c4q5', type: 'mcq', question: 'After studying this lesson you should be able to:', options: ['Prescribe unrestricted drugs', 'Explain core ideas in simple clinical language', 'Ignore electrolyte results', 'Skip fluid labels'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' },
    ],
  },

  {
    id: 'quiz-bnd103-l06',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 6 — Atomic Number Isotopes',
    type: 'topic',
    description: 'Check understanding of atomic number isotopes.',
    timeLimit: 5,
    passingScore: 70,
    questions: [
      { id: 'c6q1', type: 'mcq', question: 'This lesson focuses on Atomic Number Isotopes. Which statement is most accurate?', options: ['Chemistry is unrelated to healthcare', 'Understanding these concepts supports safe clinical practice', 'Only laboratory staff need this knowledge', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Chemistry underpins clinical measurements and safe care.' },
      { id: 'c6q2', type: 'mcq', question: 'Why should midwifery students learn this topic?', options: ['For decoration only', 'To interpret findings and understand body processes', 'It replaces clinical experience', 'It is optional trivia'], correctIndex: 1, explanation: 'Conceptual chemistry improves clinical reasoning.' },
      { id: 'c6q3', type: 'mcq', question: 'The best way to use this knowledge is to:', options: ['Ignore lab units', 'Link principles to real patient data and fluids', 'Memorise only without understanding', 'Avoid all numbers'], correctIndex: 1, explanation: 'Application to real clinical data is the goal.' },
      { id: 'c6q4', type: 'mcq', question: 'Chemical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Directly relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'c6q5', type: 'mcq', question: 'After studying this lesson you should be able to:', options: ['Prescribe unrestricted drugs', 'Explain core ideas in simple clinical language', 'Ignore electrolyte results', 'Skip fluid labels'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' },
    ],
  },

  {
    id: 'quiz-bnd103-l07',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 7 — Electronic Structure',
    type: 'topic',
    description: 'Check understanding of electronic structure.',
    timeLimit: 5,
    passingScore: 70,
    questions: [
      { id: 'c7q1', type: 'mcq', question: 'This lesson focuses on Electronic Structure. Which statement is most accurate?', options: ['Chemistry is unrelated to healthcare', 'Understanding these concepts supports safe clinical practice', 'Only laboratory staff need this knowledge', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Chemistry underpins clinical measurements and safe care.' },
      { id: 'c7q2', type: 'mcq', question: 'Why should midwifery students learn this topic?', options: ['For decoration only', 'To interpret findings and understand body processes', 'It replaces clinical experience', 'It is optional trivia'], correctIndex: 1, explanation: 'Conceptual chemistry improves clinical reasoning.' },
      { id: 'c7q3', type: 'mcq', question: 'The best way to use this knowledge is to:', options: ['Ignore lab units', 'Link principles to real patient data and fluids', 'Memorise only without understanding', 'Avoid all numbers'], correctIndex: 1, explanation: 'Application to real clinical data is the goal.' },
      { id: 'c7q4', type: 'mcq', question: 'Chemical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Directly relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'c7q5', type: 'mcq', question: 'After studying this lesson you should be able to:', options: ['Prescribe unrestricted drugs', 'Explain core ideas in simple clinical language', 'Ignore electrolyte results', 'Skip fluid labels'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' },
    ],
  },

  {
    id: 'quiz-bnd103-l08',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 8 — Periodic Table',
    type: 'topic',
    description: 'Check understanding of periodic table.',
    timeLimit: 5,
    passingScore: 70,
    questions: [
      { id: 'c8q1', type: 'mcq', question: 'This lesson focuses on Periodic Table. Which statement is most accurate?', options: ['Chemistry is unrelated to healthcare', 'Understanding these concepts supports safe clinical practice', 'Only laboratory staff need this knowledge', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Chemistry underpins clinical measurements and safe care.' },
      { id: 'c8q2', type: 'mcq', question: 'Why should midwifery students learn this topic?', options: ['For decoration only', 'To interpret findings and understand body processes', 'It replaces clinical experience', 'It is optional trivia'], correctIndex: 1, explanation: 'Conceptual chemistry improves clinical reasoning.' },
      { id: 'c8q3', type: 'mcq', question: 'The best way to use this knowledge is to:', options: ['Ignore lab units', 'Link principles to real patient data and fluids', 'Memorise only without understanding', 'Avoid all numbers'], correctIndex: 1, explanation: 'Application to real clinical data is the goal.' },
      { id: 'c8q4', type: 'mcq', question: 'Chemical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Directly relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'c8q5', type: 'mcq', question: 'After studying this lesson you should be able to:', options: ['Prescribe unrestricted drugs', 'Explain core ideas in simple clinical language', 'Ignore electrolyte results', 'Skip fluid labels'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' },
    ],
  },

  {
    id: 'quiz-bnd103-l09',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 9 — Periodic Trends',
    type: 'topic',
    description: 'Check understanding of periodic trends.',
    timeLimit: 5,
    passingScore: 70,
    questions: [
      { id: 'c9q1', type: 'mcq', question: 'This lesson focuses on Periodic Trends. Which statement is most accurate?', options: ['Chemistry is unrelated to healthcare', 'Understanding these concepts supports safe clinical practice', 'Only laboratory staff need this knowledge', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Chemistry underpins clinical measurements and safe care.' },
      { id: 'c9q2', type: 'mcq', question: 'Why should midwifery students learn this topic?', options: ['For decoration only', 'To interpret findings and understand body processes', 'It replaces clinical experience', 'It is optional trivia'], correctIndex: 1, explanation: 'Conceptual chemistry improves clinical reasoning.' },
      { id: 'c9q3', type: 'mcq', question: 'The best way to use this knowledge is to:', options: ['Ignore lab units', 'Link principles to real patient data and fluids', 'Memorise only without understanding', 'Avoid all numbers'], correctIndex: 1, explanation: 'Application to real clinical data is the goal.' },
      { id: 'c9q4', type: 'mcq', question: 'Chemical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Directly relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'c9q5', type: 'mcq', question: 'After studying this lesson you should be able to:', options: ['Prescribe unrestricted drugs', 'Explain core ideas in simple clinical language', 'Ignore electrolyte results', 'Skip fluid labels'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' },
    ],
  },

  {
    id: 'quiz-bnd103-l10',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 10 — Chemical Bonds',
    type: 'topic',
    description: 'Check understanding of chemical bonds.',
    timeLimit: 5,
    passingScore: 70,
    questions: [
      { id: 'c10q1', type: 'mcq', question: 'This lesson focuses on Chemical Bonds. Which statement is most accurate?', options: ['Chemistry is unrelated to healthcare', 'Understanding these concepts supports safe clinical practice', 'Only laboratory staff need this knowledge', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Chemistry underpins clinical measurements and safe care.' },
      { id: 'c10q2', type: 'mcq', question: 'Why should midwifery students learn this topic?', options: ['For decoration only', 'To interpret findings and understand body processes', 'It replaces clinical experience', 'It is optional trivia'], correctIndex: 1, explanation: 'Conceptual chemistry improves clinical reasoning.' },
      { id: 'c10q3', type: 'mcq', question: 'The best way to use this knowledge is to:', options: ['Ignore lab units', 'Link principles to real patient data and fluids', 'Memorise only without understanding', 'Avoid all numbers'], correctIndex: 1, explanation: 'Application to real clinical data is the goal.' },
      { id: 'c10q4', type: 'mcq', question: 'Chemical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Directly relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'c10q5', type: 'mcq', question: 'After studying this lesson you should be able to:', options: ['Prescribe unrestricted drugs', 'Explain core ideas in simple clinical language', 'Ignore electrolyte results', 'Skip fluid labels'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' },
    ],
  },

  {
    id: 'quiz-bnd103-l12',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 12 — Covalent Bonds',
    type: 'topic',
    description: 'Check understanding of covalent bonds.',
    timeLimit: 5,
    passingScore: 70,
    questions: [
      { id: 'c12q1', type: 'mcq', question: 'This lesson focuses on Covalent Bonds. Which statement is most accurate?', options: ['Chemistry is unrelated to healthcare', 'Understanding these concepts supports safe clinical practice', 'Only laboratory staff need this knowledge', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Chemistry underpins clinical measurements and safe care.' },
      { id: 'c12q2', type: 'mcq', question: 'Why should midwifery students learn this topic?', options: ['For decoration only', 'To interpret findings and understand body processes', 'It replaces clinical experience', 'It is optional trivia'], correctIndex: 1, explanation: 'Conceptual chemistry improves clinical reasoning.' },
      { id: 'c12q3', type: 'mcq', question: 'The best way to use this knowledge is to:', options: ['Ignore lab units', 'Link principles to real patient data and fluids', 'Memorise only without understanding', 'Avoid all numbers'], correctIndex: 1, explanation: 'Application to real clinical data is the goal.' },
      { id: 'c12q4', type: 'mcq', question: 'Chemical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Directly relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'c12q5', type: 'mcq', question: 'After studying this lesson you should be able to:', options: ['Prescribe unrestricted drugs', 'Explain core ideas in simple clinical language', 'Ignore electrolyte results', 'Skip fluid labels'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' },
    ],
  },

  {
    id: 'quiz-bnd103-l13',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 13 — Formulas Naming',
    type: 'topic',
    description: 'Check understanding of formulas naming.',
    timeLimit: 5,
    passingScore: 70,
    questions: [
      { id: 'c13q1', type: 'mcq', question: 'This lesson focuses on Formulas Naming. Which statement is most accurate?', options: ['Chemistry is unrelated to healthcare', 'Understanding these concepts supports safe clinical practice', 'Only laboratory staff need this knowledge', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Chemistry underpins clinical measurements and safe care.' },
      { id: 'c13q2', type: 'mcq', question: 'Why should midwifery students learn this topic?', options: ['For decoration only', 'To interpret findings and understand body processes', 'It replaces clinical experience', 'It is optional trivia'], correctIndex: 1, explanation: 'Conceptual chemistry improves clinical reasoning.' },
      { id: 'c13q3', type: 'mcq', question: 'The best way to use this knowledge is to:', options: ['Ignore lab units', 'Link principles to real patient data and fluids', 'Memorise only without understanding', 'Avoid all numbers'], correctIndex: 1, explanation: 'Application to real clinical data is the goal.' },
      { id: 'c13q4', type: 'mcq', question: 'Chemical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Directly relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'c13q5', type: 'mcq', question: 'After studying this lesson you should be able to:', options: ['Prescribe unrestricted drugs', 'Explain core ideas in simple clinical language', 'Ignore electrolyte results', 'Skip fluid labels'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' },
    ],
  },

  {
    id: 'quiz-bnd103-l14',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 14 — Reactions Equations',
    type: 'topic',
    description: 'Check understanding of reactions equations.',
    timeLimit: 5,
    passingScore: 70,
    questions: [
      { id: 'c14q1', type: 'mcq', question: 'This lesson focuses on Reactions Equations. Which statement is most accurate?', options: ['Chemistry is unrelated to healthcare', 'Understanding these concepts supports safe clinical practice', 'Only laboratory staff need this knowledge', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Chemistry underpins clinical measurements and safe care.' },
      { id: 'c14q2', type: 'mcq', question: 'Why should midwifery students learn this topic?', options: ['For decoration only', 'To interpret findings and understand body processes', 'It replaces clinical experience', 'It is optional trivia'], correctIndex: 1, explanation: 'Conceptual chemistry improves clinical reasoning.' },
      { id: 'c14q3', type: 'mcq', question: 'The best way to use this knowledge is to:', options: ['Ignore lab units', 'Link principles to real patient data and fluids', 'Memorise only without understanding', 'Avoid all numbers'], correctIndex: 1, explanation: 'Application to real clinical data is the goal.' },
      { id: 'c14q4', type: 'mcq', question: 'Chemical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Directly relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'c14q5', type: 'mcq', question: 'After studying this lesson you should be able to:', options: ['Prescribe unrestricted drugs', 'Explain core ideas in simple clinical language', 'Ignore electrolyte results', 'Skip fluid labels'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' },
    ],
  },

  {
    id: 'quiz-bnd103-l16',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 16 — Solutions',
    type: 'topic',
    description: 'Check understanding of solutions.',
    timeLimit: 5,
    passingScore: 70,
    questions: [
      { id: 'c16q1', type: 'mcq', question: 'This lesson focuses on Solutions. Which statement is most accurate?', options: ['Chemistry is unrelated to healthcare', 'Understanding these concepts supports safe clinical practice', 'Only laboratory staff need this knowledge', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Chemistry underpins clinical measurements and safe care.' },
      { id: 'c16q2', type: 'mcq', question: 'Why should midwifery students learn this topic?', options: ['For decoration only', 'To interpret findings and understand body processes', 'It replaces clinical experience', 'It is optional trivia'], correctIndex: 1, explanation: 'Conceptual chemistry improves clinical reasoning.' },
      { id: 'c16q3', type: 'mcq', question: 'The best way to use this knowledge is to:', options: ['Ignore lab units', 'Link principles to real patient data and fluids', 'Memorise only without understanding', 'Avoid all numbers'], correctIndex: 1, explanation: 'Application to real clinical data is the goal.' },
      { id: 'c16q4', type: 'mcq', question: 'Chemical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Directly relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'c16q5', type: 'mcq', question: 'After studying this lesson you should be able to:', options: ['Prescribe unrestricted drugs', 'Explain core ideas in simple clinical language', 'Ignore electrolyte results', 'Skip fluid labels'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' },
    ],
  },

  {
    id: 'quiz-bnd103-l20',
    courseId: 'bnd-103',
    courseCode: 'BND 103',
    title: 'Lesson 20 — Chemistry in Practice',
    type: 'topic',
    description: 'Check understanding of chemistry in practice.',
    timeLimit: 5,
    passingScore: 70,
    questions: [
      { id: 'c20q1', type: 'mcq', question: 'This lesson focuses on Chemistry in Practice. Which statement is most accurate?', options: ['Chemistry is unrelated to healthcare', 'Understanding these concepts supports safe clinical practice', 'Only laboratory staff need this knowledge', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Chemistry underpins clinical measurements and safe care.' },
      { id: 'c20q2', type: 'mcq', question: 'Why should midwifery students learn this topic?', options: ['For decoration only', 'To interpret findings and understand body processes', 'It replaces clinical experience', 'It is optional trivia'], correctIndex: 1, explanation: 'Conceptual chemistry improves clinical reasoning.' },
      { id: 'c20q3', type: 'mcq', question: 'The best way to use this knowledge is to:', options: ['Ignore lab units', 'Link principles to real patient data and fluids', 'Memorise only without understanding', 'Avoid all numbers'], correctIndex: 1, explanation: 'Application to real clinical data is the goal.' },
      { id: 'c20q4', type: 'mcq', question: 'Chemical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Directly relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'c20q5', type: 'mcq', question: 'After studying this lesson you should be able to:', options: ['Prescribe unrestricted drugs', 'Explain core ideas in simple clinical language', 'Ignore electrolyte results', 'Skip fluid labels'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' },
    ],
  },

  {
    id: 'quiz-bnd105-l01',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 1 — Introduction to Physics',
    type: 'topic',
    description: 'Check understanding of introduction to physics.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p1q1', type: 'mcq', question: 'Physics is the study of:', options: ['Only living cells', 'Matter, energy, motion and forces', 'Only medicines', 'Hospital administration'], correctIndex: 1, explanation: 'Physics studies the physical world: matter, energy, motion and forces.' },
      { id: 'p1q2', type: 'mcq', question: 'Which clinical task depends on fluid pressure?', options: ['Hair colour assessment', 'Blood pressure measurement', 'Naming a baby', 'Writing a letter'], correctIndex: 1, explanation: 'Blood pressure is fluid pressure in arteries.' },
      { id: 'p1q3', type: 'mcq', question: 'Why should midwives learn physics?', options: ['It is unrelated to care', 'It explains measurement, pressure, heat, sound and equipment safety', 'Only engineers need it', 'It replaces clinical training'], correctIndex: 1, explanation: 'Physics underpins many daily clinical tasks.' },
      { id: 'p1q4', type: 'mcq', question: 'Sound used in fetal heart monitoring is an example of:', options: ['Nuclear physics only', 'Wave physics', 'Pure chemistry', 'Botany'], correctIndex: 1, explanation: 'Sound is a wave phenomenon.' },
      { id: 'p1q5', type: 'mcq', question: 'Electrical safety on the ward is mainly a topic of:', options: ['Fashion', 'Physics applied to healthcare', 'Ancient history', 'Music theory'], correctIndex: 1, explanation: 'Electrical safety is applied physics.' }
    ],
  },

  {
    id: 'quiz-bnd105-l02',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 2 — Quantities Units Measurement',
    type: 'topic',
    description: 'Check understanding of quantities units measurement.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p2q1', type: 'mcq', question: 'This lesson focuses on Quantities Units Measurement. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p2q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p2q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p2q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p2q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l03',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 3 — Scalars and Vectors',
    type: 'topic',
    description: 'Check understanding of scalars and vectors.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p3q1', type: 'mcq', question: 'This lesson focuses on Scalars and Vectors. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p3q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p3q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p3q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p3q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l04',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 4 — Motion Speed Velocity',
    type: 'topic',
    description: 'Check understanding of motion speed velocity.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p4q1', type: 'mcq', question: 'This lesson focuses on Motion Speed Velocity. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p4q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p4q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p4q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p4q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l05',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 5 — Force Mass Weight Pressure',
    type: 'topic',
    description: 'Check understanding of force mass weight pressure.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p5q1', type: 'mcq', question: 'Pressure equals:', options: ['Force × area', 'Force ÷ area', 'Mass × velocity', 'Distance ÷ time'], correctIndex: 1, explanation: 'Pressure = force ÷ area.' },
      { id: 'p5q2', type: 'mcq', question: 'Why does a sharp needle pierce skin more easily?', options: ['Larger area increases pressure', 'Smaller area increases pressure for the same force', 'It has no mass', 'It is colder'], correctIndex: 1, explanation: 'Small area → high pressure.' },
      { id: 'p5q3', type: 'mcq', question: 'Mass is measured in:', options: ['Newtons', 'Kilograms', 'Pascals', 'Watts'], correctIndex: 1, explanation: 'Mass SI unit is kilogram.' },
      { id: 'p5q4', type: 'mcq', question: 'Weight is:', options: ['The same as mass everywhere', 'Gravitational force on a mass', 'Only a volume measure', 'Always zero in water'], correctIndex: 1, explanation: 'Weight is a force due to gravity.' },
      { id: 'p5q5', type: 'mcq', question: 'Blood pressure is a measure of:', options: ['Temperature', 'Fluid pressure in arteries', 'Only heart rate', 'Bone density'], correctIndex: 1, explanation: 'BP is pressure of blood on vessel walls.' }
    ],
  },

  {
    id: 'quiz-bnd105-l06',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 6 — Work Energy Power',
    type: 'topic',
    description: 'Check understanding of work energy power.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p6q1', type: 'mcq', question: 'This lesson focuses on Work Energy Power. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p6q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p6q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p6q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p6q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l07',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 7 — Heat and Temperature',
    type: 'topic',
    description: 'Check understanding of heat and temperature.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p7q1', type: 'mcq', question: 'Temperature measures:', options: ['Total heat energy only', 'How hot or cold something is', 'Only electrical current', 'Only mass'], correctIndex: 1, explanation: 'Temperature indicates hotness/coldness.' },
      { id: 'p7q2', type: 'mcq', question: 'Heat is:', options: ['The same as temperature', 'Energy transferred due to temperature difference', 'Only a chemical property', 'A unit of mass'], correctIndex: 1, explanation: 'Heat is energy in transit due to temperature difference.' },
      { id: 'p7q3', type: 'mcq', question: 'Which is a method of heat transfer?', options: ['Conduction', 'Photosynthesis', 'Digestion only', 'Osmosis only'], correctIndex: 0, explanation: 'Conduction is heat transfer through contact.' },
      { id: 'p7q4', type: 'mcq', question: 'Newborns lose heat quickly partly because of:', options: ['Small surface area', 'Large surface-area-to-mass ratio', 'Inability to cry', 'Having no skin'], correctIndex: 1, explanation: 'High surface-area-to-mass ratio increases heat loss.' },
      { id: 'p7q5', type: 'mcq', question: 'Evaporation of sweat:', options: ['Warms the body', 'Cools the body by removing heat energy', 'Has no effect on temperature', 'Only works in solids'], correctIndex: 1, explanation: 'Evaporation requires energy from the body.' }
    ],
  },

  {
    id: 'quiz-bnd105-l08',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 8 — States of Matter',
    type: 'topic',
    description: 'Check understanding of states of matter.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p8q1', type: 'mcq', question: 'This lesson focuses on States of Matter. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p8q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p8q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p8q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p8q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l09',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 9 — Density and Buoyancy',
    type: 'topic',
    description: 'Check understanding of density and buoyancy.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p9q1', type: 'mcq', question: 'This lesson focuses on Density and Buoyancy. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p9q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p9q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p9q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p9q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l10',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 10 — Pressure in Fluids',
    type: 'topic',
    description: 'Check understanding of pressure in fluids.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p10q1', type: 'mcq', question: 'Fluid pressure with increasing depth:', options: ['Decreases', 'Increases', 'Stays exactly the same', 'Becomes zero'], correctIndex: 1, explanation: 'Pressure increases with depth due to weight of fluid above.' },
      { id: 'p10q2', type: 'mcq', question: 'Raising an IV bag higher generally:', options: ['Decreases driving pressure', 'Increases hydrostatic driving pressure', 'Stops all flow permanently', 'Changes the drug chemically'], correctIndex: 1, explanation: 'Greater height increases hydrostatic pressure.' },
      { id: 'p10q3', type: 'mcq', question: 'Blood pressure is reported clinically in:', options: ['kg only', 'mmHg commonly', 'litres only', 'watts'], correctIndex: 1, explanation: 'mmHg is the usual clinical unit for BP.' },
      { id: 'p10q4', type: 'mcq', question: 'Pascal’s principle relates to:', options: ['Pressure in enclosed fluids', 'Only sound waves', 'Only light', 'Only magnetism'], correctIndex: 0, explanation: 'Pressure applied to an enclosed fluid is transmitted equally.' },
      { id: 'p10q5', type: 'mcq', question: 'Supine position in late pregnancy can affect:', options: ['Only hair growth', 'Venous return and blood pressure via vessel compression', 'Only tooth colour', 'Only hearing'], correctIndex: 1, explanation: 'Aortocaval compression is a pressure/position issue.' }
    ],
  },

  {
    id: 'quiz-bnd105-l11',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 11 — Waves',
    type: 'topic',
    description: 'Check understanding of waves.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p11q1', type: 'mcq', question: 'This lesson focuses on Waves. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p11q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p11q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p11q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p11q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l12',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 12 — Sound and Hearing',
    type: 'topic',
    description: 'Check understanding of sound and hearing.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p12q1', type: 'mcq', question: 'This lesson focuses on Sound and Hearing. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p12q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p12q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p12q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p12q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l13',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 13 — Light Reflection Refraction',
    type: 'topic',
    description: 'Check understanding of light reflection refraction.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p13q1', type: 'mcq', question: 'This lesson focuses on Light Reflection Refraction. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p13q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p13q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p13q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p13q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l14',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 14 — Electricity and Safety',
    type: 'topic',
    description: 'Check understanding of electricity and safety.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p14q1', type: 'mcq', question: 'Ohm’s law in simple form is:', options: ['V = I × R', 'F = m × a only', 'P = F/A only', 'E = mc² only'], correctIndex: 0, explanation: 'V = I × R relates voltage, current and resistance.' },
      { id: 'p14q2', type: 'mcq', question: 'Electric current is measured in:', options: ['Volts', 'Amperes', 'Ohms', 'Watts only'], correctIndex: 1, explanation: 'Current unit is ampere (A).' },
      { id: 'p14q3', type: 'mcq', question: 'A complete circuit is needed for:', options: ['Continuous current flow', 'Only magnetic fields', 'Only heat without electricity', 'Stopping all energy'], correctIndex: 0, explanation: 'Current needs a closed path.' },
      { id: 'p14q4', type: 'mcq', question: 'Damaged electrical cables should be:', options: ['Ignored if the device works', 'Reported and not used until safe', 'Covered with water', 'Used only at night'], correctIndex: 1, explanation: 'Damaged cables are hazardous.' },
      { id: 'p14q5', type: 'mcq', question: 'Water near electrical equipment is dangerous because:', options: ['Water is a good insulator always', 'Water can conduct electricity and increase shock risk', 'Water has no effect', 'Water only affects sound'], correctIndex: 1, explanation: 'Water increases conductivity and shock risk.' }
    ],
  },

  {
    id: 'quiz-bnd105-l15',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 15 — Magnetism',
    type: 'topic',
    description: 'Check understanding of magnetism.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p15q1', type: 'mcq', question: 'This lesson focuses on Magnetism. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p15q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p15q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p15q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p15q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l16',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 16 — Physics of the Human Body',
    type: 'topic',
    description: 'Check understanding of physics of the human body.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p16q1', type: 'mcq', question: 'This lesson focuses on Physics of the Human Body. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p16q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p16q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p16q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p16q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l17',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 17 — Respiration and Gas Exchange',
    type: 'topic',
    description: 'Check understanding of respiration and gas exchange.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p17q1', type: 'mcq', question: 'This lesson focuses on Respiration and Gas Exchange. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p17q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p17q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p17q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p17q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l18',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 18 — Blood Flow and Circulation',
    type: 'topic',
    description: 'Check understanding of blood flow and circulation.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p18q1', type: 'mcq', question: 'This lesson focuses on Blood Flow and Circulation. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p18q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p18q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p18q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p18q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l19',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 19 — Healthcare Equipment',
    type: 'topic',
    description: 'Check understanding of healthcare equipment.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p19q1', type: 'mcq', question: 'This lesson focuses on Healthcare Equipment. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p19q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p19q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p19q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p19q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd105-l20',
    courseId: 'bnd-105',
    courseCode: 'BND 105',
    title: 'Lesson 20 — Applications in Midwifery',
    type: 'topic',
    description: 'Check understanding of applications in midwifery.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'p20q1', type: 'mcq', question: 'This lesson focuses on Applications in Midwifery. The most accurate statement is:', options: ['Physics is unrelated to healthcare', 'These concepts support safe clinical practice', 'Only laboratory staff need this', 'These ideas never appear on the ward'], correctIndex: 1, explanation: 'Physics principles underpin measurement, safety and body function.' },
      { id: 'p20q2', type: 'mcq', question: 'Midwifery students should learn this topic in order to:', options: ['Decorate notes only', 'Interpret findings and use equipment more safely', 'Replace clinical experience', 'Avoid all numbers'], correctIndex: 1, explanation: 'Conceptual physics improves clinical reasoning and safety.' },
      { id: 'p20q3', type: 'mcq', question: 'The best use of this knowledge is to:', options: ['Ignore equipment manuals', 'Link principles to real measurements and devices', 'Memorise without understanding', 'Avoid vital signs'], correctIndex: 1, explanation: 'Application to real clinical tools is the goal.' },
      { id: 'p20q4', type: 'mcq', question: 'Physical principles in this lesson are:', options: ['Only theoretical with no clinical link', 'Relevant to body function and care', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'These principles appear in daily maternity care.' },
      { id: 'p20q5', type: 'mcq', question: 'After this lesson you should be able to:', options: ['Ignore safety rules', 'Explain core ideas in simple clinical language', 'Skip equipment checks', 'Avoid all monitors'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the learning outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l01',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 1 — Introduction to Physiology and Homeostasis',
    type: 'topic',
    description: 'Check understanding of introduction to physiology and homeostasis.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g1q1', type: 'mcq', question: 'Homeostasis means:', options: ['Ignoring external change', 'Maintaining a stable internal environment', 'Only fever control', 'Stopping all body processes'], correctIndex: 1, explanation: 'Homeostasis keeps the internal environment stable.' },
      { id: 'g1q2', type: 'mcq', question: 'Most homeostatic control uses:', options: ['Positive feedback only', 'Negative feedback', 'No feedback', 'Only conscious thought'], correctIndex: 1, explanation: 'Negative feedback reverses change and stabilises variables.' },
      { id: 'g1q3', type: 'mcq', question: 'An example of positive feedback is:', options: ['Sweating when hot', 'Oxytocin and labour contractions', 'Shivering when cold', 'Insulin lowering glucose'], correctIndex: 1, explanation: 'Labour uses positive feedback via oxytocin.' },
      { id: 'g1q4', type: 'mcq', question: 'Vital signs mainly reflect:', options: ['Only psychology', 'Homeostatic status', 'Only bone health', 'Only skin colour'], correctIndex: 1, explanation: 'Vital signs are windows into homeostasis.' },
      { id: 'g1q5', type: 'mcq', question: 'Physiology is the study of:', options: ['Body structure only', 'Body function', 'Only diseases', 'Only drugs'], correctIndex: 1, explanation: 'Physiology studies function.' }
    ],
  },

  {
    id: 'quiz-bnd107-l02',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 2 — Cell Membrane',
    type: 'topic',
    description: 'Check understanding of cell membrane.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g2q1', type: 'mcq', question: 'This lesson focuses on Cell Membrane. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g2q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g2q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g2q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g2q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l03',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 3 — Membrane Transport',
    type: 'topic',
    description: 'Check understanding of membrane transport.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g3q1', type: 'mcq', question: 'Osmosis is:', options: ['Movement of any solute', 'Diffusion of water across a membrane', 'Active pumping of sodium only', 'Production of ATP'], correctIndex: 1, explanation: 'Osmosis is water diffusion across a selectively permeable membrane.' },
      { id: 'g3q2', type: 'mcq', question: 'Active transport requires:', options: ['No energy', 'ATP (energy)', 'Only gravity', 'Only light'], correctIndex: 1, explanation: 'Active transport moves substances against gradients using energy.' },
      { id: 'g3q3', type: 'mcq', question: 'The sodium-potassium pump moves:', options: ['Na+ in and K+ out', 'Na+ out and K+ in', 'Only water', 'Only glucose'], correctIndex: 1, explanation: 'It pumps Na+ out and K+ in.' },
      { id: 'g3q4', type: 'mcq', question: 'Diffusion moves substances:', options: ['Against their gradient only', 'From high to low concentration', 'Only with ATP', 'Only in solids'], correctIndex: 1, explanation: 'Diffusion is down the concentration gradient.' },
      { id: 'g3q5', type: 'mcq', question: 'IV fluid tonicity relates to:', options: ['Only colour', 'Osmotic effects on cells', 'Only temperature', 'Only taste'], correctIndex: 1, explanation: 'Tonicity describes effective osmotic pressure relative to body fluids.' }
    ],
  },

  {
    id: 'quiz-bnd107-l04',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 4 — Nervous System Physiology',
    type: 'topic',
    description: 'Check understanding of nervous system physiology.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g4q1', type: 'mcq', question: 'This lesson focuses on Nervous System Physiology. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g4q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g4q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g4q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g4q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l05',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 5 — Endocrine Physiology',
    type: 'topic',
    description: 'Check understanding of endocrine physiology.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g5q1', type: 'mcq', question: 'This lesson focuses on Endocrine Physiology. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g5q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g5q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g5q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g5q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l06',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 6 — Cardiovascular — Heart',
    type: 'topic',
    description: 'Check understanding of cardiovascular — heart.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g6q1', type: 'mcq', question: 'This lesson focuses on Cardiovascular — Heart. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g6q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g6q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g6q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g6q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l07',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 7 — Blood and Circulation',
    type: 'topic',
    description: 'Check understanding of blood and circulation.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g7q1', type: 'mcq', question: 'This lesson focuses on Blood and Circulation. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g7q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g7q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g7q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g7q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l08',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 8 — Respiratory Physiology',
    type: 'topic',
    description: 'Check understanding of respiratory physiology.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g8q1', type: 'mcq', question: 'This lesson focuses on Respiratory Physiology. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g8q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g8q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g8q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g8q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l09',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 9 — Digestive Physiology',
    type: 'topic',
    description: 'Check understanding of digestive physiology.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g9q1', type: 'mcq', question: 'This lesson focuses on Digestive Physiology. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g9q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g9q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g9q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g9q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l10',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 10 — Renal Physiology',
    type: 'topic',
    description: 'Check understanding of renal physiology.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g10q1', type: 'mcq', question: 'This lesson focuses on Renal Physiology. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g10q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g10q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g10q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g10q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l11',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 11 — Fluid and Electrolyte Balance',
    type: 'topic',
    description: 'Check understanding of fluid and electrolyte balance.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g11q1', type: 'mcq', question: 'This lesson focuses on Fluid and Electrolyte Balance. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g11q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g11q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g11q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g11q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l12',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 12 — Acid-Base Balance',
    type: 'topic',
    description: 'Check understanding of acid-base balance.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g12q1', type: 'mcq', question: 'Normal arterial blood pH is about:', options: ['6.8-7.0', '7.35-7.45', '8.0-8.5', '5.0-5.5'], correctIndex: 1, explanation: 'Normal arterial pH is approximately 7.35-7.45.' },
      { id: 'g12q2', type: 'mcq', question: 'Increasing ventilation tends to:', options: ['Lower pH', 'Raise pH by eliminating CO2', 'Have no effect on CO2', 'Stop all buffering'], correctIndex: 1, explanation: 'Blowing off CO2 reduces acidity and raises pH.' },
      { id: 'g12q3', type: 'mcq', question: 'Acidosis means pH is:', options: ['Too high', 'Too low', 'Exactly 7.0 always', 'Unmeasurable'], correctIndex: 1, explanation: 'Acidosis is pH below the normal range.' },
      { id: 'g12q4', type: 'mcq', question: 'The bicarbonate system is a major:', options: ['Hormone', 'Buffer in blood', 'Bone mineral only', 'Digestive enzyme'], correctIndex: 1, explanation: 'Bicarbonate is a key blood buffer.' },
      { id: 'g12q5', type: 'mcq', question: 'Renal compensation for acid-base balance is generally:', options: ['Faster than lungs', 'Slower than respiratory compensation', 'Instantaneous', 'Absent in adults'], correctIndex: 1, explanation: 'Kidneys act more slowly than lungs.' }
    ],
  },

  {
    id: 'quiz-bnd107-l13',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 13 — Musculoskeletal Physiology',
    type: 'topic',
    description: 'Check understanding of musculoskeletal physiology.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g13q1', type: 'mcq', question: 'This lesson focuses on Musculoskeletal Physiology. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g13q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g13q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g13q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g13q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l14',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 14 — Temperature Regulation',
    type: 'topic',
    description: 'Check understanding of temperature regulation.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g14q1', type: 'mcq', question: 'This lesson focuses on Temperature Regulation. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g14q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g14q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g14q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g14q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l15',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 15 — Integration of Systems',
    type: 'topic',
    description: 'Check understanding of integration of systems.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g15q1', type: 'mcq', question: 'This lesson focuses on Integration of Systems. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g15q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g15q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g15q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g15q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l16',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 16 — Female Reproductive Physiology',
    type: 'topic',
    description: 'Check understanding of female reproductive physiology.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g16q1', type: 'mcq', question: 'This lesson focuses on Female Reproductive Physiology. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g16q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g16q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g16q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g16q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd107-l17',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 17 — Menstrual Cycle',
    type: 'topic',
    description: 'Check understanding of menstrual cycle.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g17q1', type: 'mcq', question: 'Ovulation is triggered mainly by:', options: ['A surge of LH', 'Only progesterone rise', 'Only insulin', 'Only ADH'], correctIndex: 0, explanation: 'LH surge triggers ovulation.' },
      { id: 'g17q2', type: 'mcq', question: 'The luteal phase is dominated by:', options: ['FSH only', 'Progesterone from the corpus luteum', 'Only adrenaline', 'Only thyroxine'], correctIndex: 1, explanation: 'Corpus luteum produces progesterone in the luteal phase.' },
      { id: 'g17q3', type: 'mcq', question: 'Menstruation occurs when:', options: ['Hormone support of the endometrium is withdrawn', 'Ovulation starts', 'hCG peaks', 'Only during pregnancy'], correctIndex: 0, explanation: 'Falling hormones cause endometrial shedding.' },
      { id: 'g17q4', type: 'mcq', question: 'GnRH is released from the:', options: ['Ovary', 'Hypothalamus', 'Uterus', 'Liver'], correctIndex: 1, explanation: 'Hypothalamus releases GnRH.' },
      { id: 'g17q5', type: 'mcq', question: 'Combined hormonal contraceptives mainly work by:', options: ['Increasing ovulation', 'Suppressing ovulation via feedback', 'Destroying the uterus', 'Blocking all nutrients'], correctIndex: 1, explanation: 'They use negative feedback to suppress ovulation.' }
    ],
  },

  {
    id: 'quiz-bnd107-l18',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 18 — Fertilisation and Implantation',
    type: 'topic',
    description: 'Check understanding of fertilisation and implantation.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g18q1', type: 'mcq', question: 'Fertilisation usually occurs in the:', options: ['Uterus', 'Uterine tube', 'Vagina only', 'Ovary only'], correctIndex: 1, explanation: 'Fertilisation is usually in the fallopian tube.' },
      { id: 'g18q2', type: 'mcq', question: 'Implantation occurs in the:', options: ['Uterine tube wall normally', 'Endometrium of the uterus', 'Cervix only', 'Bladder'], correctIndex: 1, explanation: 'Blastocyst implants in the endometrium.' },
      { id: 'g18q3', type: 'mcq', question: 'hCG is produced by the:', options: ['Maternal liver only', 'Trophoblast', 'Fetal brain only', 'Maternal bone'], correctIndex: 1, explanation: 'Trophoblast produces hCG.' },
      { id: 'g18q4', type: 'mcq', question: 'hCG maintains the:', options: ['Corpus luteum in early pregnancy', 'Only the thyroid', 'Only skeletal muscle', 'Only hair growth'], correctIndex: 0, explanation: 'hCG maintains corpus luteum progesterone production.' },
      { id: 'g18q5', type: 'mcq', question: 'Ectopic pregnancy means implantation:', options: ['In the uterine cavity', 'Outside the uterine cavity', 'Only after birth', 'Only in the skin'], correctIndex: 1, explanation: 'Ectopic = outside the uterine cavity.' }
    ],
  },

  {
    id: 'quiz-bnd107-l19',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 19 — Physiological Changes in Pregnancy',
    type: 'topic',
    description: 'Check understanding of physiological changes in pregnancy.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g19q1', type: 'mcq', question: 'Blood volume in pregnancy typically:', options: ['Decreases by half', 'Increases substantially', 'Does not change', 'Becomes zero'], correctIndex: 1, explanation: 'Plasma volume expands markedly in pregnancy.' },
      { id: 'g19q2', type: 'mcq', question: 'GFR in pregnancy typically:', options: ['Falls', 'Rises', 'Stops', 'Only affects the liver'], correctIndex: 1, explanation: 'Glomerular filtration rate increases.' },
      { id: 'g19q3', type: 'mcq', question: 'Physiological anaemia of pregnancy is partly due to:', options: ['Increased plasma volume diluting haemoglobin', 'Complete absence of iron', 'Bone marrow failure always', 'Only dehydration'], correctIndex: 0, explanation: 'Plasma volume expands more than red cell mass.' },
      { id: 'g19q4', type: 'mcq', question: 'Insulin resistance in later pregnancy:', options: ['Never occurs', 'Increases and raises gestational diabetes risk', 'Only affects men', 'Stops all metabolism'], correctIndex: 1, explanation: 'Pregnancy induces insulin resistance.' },
      { id: 'g19q5', type: 'mcq', question: 'Hypercoagulability in pregnancy:', options: ['Reduces clotting', 'Increases thrombosis risk', 'Has no clinical meaning', 'Only affects hair'], correctIndex: 1, explanation: 'Pregnancy is a hypercoagulable state.' }
    ],
  },

  {
    id: 'quiz-bnd107-l20',
    courseId: 'bnd-107',
    courseCode: 'BND 107',
    title: 'Lesson 20 — Physiology in Midwifery Practice',
    type: 'topic',
    description: 'Check understanding of physiology in midwifery practice.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'g20q1', type: 'mcq', question: 'This lesson focuses on Physiology in Midwifery Practice. Best statement:', options: ['Physiology is unrelated to care', 'These concepts support safe clinical practice', 'Only lab staff need this', 'Never appears on the ward'], correctIndex: 1, explanation: 'Physiology underpins clinical observations and care.' },
      { id: 'g20q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Decorate notes', 'Interpret findings using physiological principles', 'Replace clinical experience', 'Avoid all labs'], correctIndex: 1, explanation: 'Physiology improves clinical reasoning.' },
      { id: 'g20q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore vital signs', 'Link principles to real patient data', 'Memorise without understanding', 'Skip assessments'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'g20q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to body function and midwifery', 'Only for engineers', 'Outdated'], correctIndex: 1, explanation: 'They appear throughout maternity care.' },
      { id: 'g20q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore abnormal findings', 'Explain core ideas in simple clinical language', 'Skip documentation', 'Avoid teamwork'], correctIndex: 1, explanation: 'Clear explanation of core ideas is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l01',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 1 — Introduction to Nursing',
    type: 'topic',
    description: 'Check understanding of introduction to nursing.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n1q1', type: 'mcq', question: 'Nursing is best described as:', options: ['Only giving injections', 'A profession promoting health and caring holistically', 'Only following orders without judgement', 'Unrelated to midwifery'], correctIndex: 1, explanation: 'Nursing combines science, skill and holistic care.' },
      { id: 'n1q2', type: 'mcq', question: 'Why study nursing foundations as a midwifery student?', options: ['They are optional trivia', 'They provide ethics, communication and process used in clinical care', 'Only for hospital managers', 'They replace anatomy'], correctIndex: 1, explanation: 'Foundations guide all clinical interactions.' },
      { id: 'n1q3', type: 'mcq', question: 'Holistic care means:', options: ['Only physical tasks', 'Considering physical, psychological, social and spiritual dimensions', 'Ignoring the family', 'Focusing only on lab results'], correctIndex: 1, explanation: 'Holistic care addresses the whole person.' },
      { id: 'n1q4', type: 'mcq', question: 'Aims of nursing include:', options: ['Only curing every disease', 'Promoting health, preventing illness and supporting people', 'Avoiding all documentation', 'Working without a team'], correctIndex: 1, explanation: 'Nursing aims include health promotion and support.' },
      { id: 'n1q5', type: 'mcq', question: 'Professional nursing requires:', options: ['Only speed', 'Knowledge, skill and professional values', 'Ignoring patient preferences', 'Working outside competence'], correctIndex: 1, explanation: 'Competence and values together define professional practice.' }
    ],
  },

  {
    id: 'quiz-bnd109-l02',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 2 — History of Nursing',
    type: 'topic',
    description: 'Check understanding of history of nursing.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n2q1', type: 'mcq', question: 'This lesson focuses on History of Nursing. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n2q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n2q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n2q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n2q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l03',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 3 — Nursing Concepts',
    type: 'topic',
    description: 'Check understanding of nursing concepts.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n3q1', type: 'mcq', question: 'This lesson focuses on Nursing Concepts. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n3q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n3q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n3q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n3q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l04',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 4 — Nursing Theories',
    type: 'topic',
    description: 'Check understanding of nursing theories.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n4q1', type: 'mcq', question: 'This lesson focuses on Nursing Theories. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n4q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n4q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n4q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n4q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l05',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 5 — Roles and Responsibilities',
    type: 'topic',
    description: 'Check understanding of roles and responsibilities.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n5q1', type: 'mcq', question: 'This lesson focuses on Roles and Responsibilities. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n5q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n5q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n5q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n5q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l06',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 6 — Professionalism',
    type: 'topic',
    description: 'Check understanding of professionalism.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n6q1', type: 'mcq', question: 'This lesson focuses on Professionalism. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n6q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n6q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n6q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n6q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l07',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 7 — Ethics in Nursing',
    type: 'topic',
    description: 'Check understanding of ethics in nursing.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n7q1', type: 'mcq', question: 'Non-maleficence means:', options: ['Do good only', 'Do no harm', 'Always follow patient preference even if illegal', 'Ignore consent'], correctIndex: 1, explanation: 'Non-maleficence is the duty to do no harm.' },
      { id: 'n7q2', type: 'mcq', question: 'Autonomy in ethics refers to:', options: ['Nurse control of all decisions', 'Respect for the person’s right to choose', 'Ignoring information needs', 'Only family decisions'], correctIndex: 1, explanation: 'Autonomy respects the patient’s right to decide.' },
      { id: 'n7q3', type: 'mcq', question: 'Informed consent requires:', options: ['Only a signature', 'Information, capacity and voluntariness', 'No explanation', 'Force if needed'], correctIndex: 1, explanation: 'Consent needs adequate information, capacity and free choice.' },
      { id: 'n7q4', type: 'mcq', question: 'Beneficence means:', options: ['Do harm', 'Do good', 'Avoid all action', 'Only document'], correctIndex: 1, explanation: 'Beneficence is acting to benefit the patient.' },
      { id: 'n7q5', type: 'mcq', question: 'When ethical principles conflict, students should:', options: ['Decide alone always', 'Escalate and use team/policy support', 'Ignore the issue', 'Hide the conflict'], correctIndex: 1, explanation: 'Complex dilemmas need escalation and structured support.' }
    ],
  },

  {
    id: 'quiz-bnd109-l08',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 8 — Patient Rights and Dignity',
    type: 'topic',
    description: 'Check understanding of patient rights and dignity.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n8q1', type: 'mcq', question: 'This lesson focuses on Patient Rights and Dignity. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n8q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n8q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n8q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n8q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l09',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 9 — Communication',
    type: 'topic',
    description: 'Check understanding of communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n9q1', type: 'mcq', question: 'This lesson focuses on Communication. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n9q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n9q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n9q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n9q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l10',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 10 — Therapeutic Communication',
    type: 'topic',
    description: 'Check understanding of therapeutic communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n10q1', type: 'mcq', question: 'This lesson focuses on Therapeutic Communication. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n10q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n10q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n10q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n10q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l11',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 11 — Health Illness Wellness',
    type: 'topic',
    description: 'Check understanding of health illness wellness.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n11q1', type: 'mcq', question: 'This lesson focuses on Health Illness Wellness. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n11q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n11q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n11q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n11q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l12',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 12 — Basic Human Needs',
    type: 'topic',
    description: 'Check understanding of basic human needs.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n12q1', type: 'mcq', question: 'This lesson focuses on Basic Human Needs. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n12q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n12q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n12q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n12q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l13',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 13 — Nursing Process Overview',
    type: 'topic',
    description: 'Check understanding of nursing process overview.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n13q1', type: 'mcq', question: 'The nursing process steps include:', options: ['Only documentation', 'Assessment, diagnosis, planning, implementation, evaluation', 'Only medical orders', 'Ignoring evaluation'], correctIndex: 1, explanation: 'The classic five-step process guides systematic care.' },
      { id: 'n13q2', type: 'mcq', question: 'The nursing process is best described as:', options: ['Strictly one-way only', 'Cyclic and continuous', 'Optional for experienced staff', 'Only for managers'], correctIndex: 1, explanation: 'New data can restart assessment at any time.' },
      { id: 'n13q3', type: 'mcq', question: 'Assessment is the step where you:', options: ['Give all medications', 'Collect subjective and objective data', 'Stop all care', 'Only write goals'], correctIndex: 1, explanation: 'Assessment gathers the data foundation.' },
      { id: 'n13q4', type: 'mcq', question: 'Evaluation asks:', options: ['Whether goals were met', 'Only the doctor’s opinion', 'Nothing about outcomes', 'Only about cost'], correctIndex: 0, explanation: 'Evaluation compares outcomes to goals.' },
      { id: 'n13q5', type: 'mcq', question: 'Why use a systematic process?', options: ['To slow care down only', 'To make care purposeful, individualised and accountable', 'To avoid talking to patients', 'To replace teamwork'], correctIndex: 1, explanation: 'Process improves safety and accountability.' }
    ],
  },

  {
    id: 'quiz-bnd109-l14',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 14 — Assessment',
    type: 'topic',
    description: 'Check understanding of assessment.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n14q1', type: 'mcq', question: 'Subjective data is:', options: ['What you measure', 'What the patient reports', 'Only lab values', 'Only blood pressure'], correctIndex: 1, explanation: 'Subjective data is the patient’s report.' },
      { id: 'n14q2', type: 'mcq', question: 'Objective data includes:', options: ['Patient feelings only', 'Observable and measurable findings', 'Only family opinions', 'Guesses'], correctIndex: 1, explanation: 'Objective data is observed or measured.' },
      { id: 'n14q3', type: 'mcq', question: 'A baseline assessment is important because:', options: ['It is optional', 'It allows comparison when the patient changes', 'It replaces ongoing checks', 'It is only done at discharge'], correctIndex: 1, explanation: 'Baseline enables detection of change.' },
      { id: 'n14q4', type: 'mcq', question: 'Ongoing assessment is especially critical in:', options: ['Only stable outpatients', 'Labour and acute care settings', 'Never in maternity', 'Only annual reviews'], correctIndex: 1, explanation: 'Continuous change requires continuous assessment.' },
      { id: 'n14q5', type: 'mcq', question: 'If you did not assess something, you should:', options: ['Assume it is normal', 'Not claim it is normal without data', 'Ignore it forever', 'Document false findings'], correctIndex: 1, explanation: 'Assessment must precede claims of normality.' }
    ],
  },

  {
    id: 'quiz-bnd109-l15',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 15 — Nursing Diagnosis',
    type: 'topic',
    description: 'Check understanding of nursing diagnosis.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n15q1', type: 'mcq', question: 'This lesson focuses on Nursing Diagnosis. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n15q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n15q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n15q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n15q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l16',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 16 — Planning',
    type: 'topic',
    description: 'Check understanding of planning.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n16q1', type: 'mcq', question: 'This lesson focuses on Planning. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n16q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n16q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n16q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n16q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l17',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 17 — Implementation',
    type: 'topic',
    description: 'Check understanding of implementation.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n17q1', type: 'mcq', question: 'This lesson focuses on Implementation. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n17q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n17q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n17q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n17q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l18',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 18 — Evaluation',
    type: 'topic',
    description: 'Check understanding of evaluation.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n18q1', type: 'mcq', question: 'This lesson focuses on Evaluation. Best statement:', options: ['Nursing theory is unrelated to care', 'These concepts support safe professional practice', 'Only managers need this', 'Never used on the ward'], correctIndex: 1, explanation: 'Nursing foundations guide safe, ethical care.' },
      { id: 'n18q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Ignore patients', 'Apply professional standards to maternal and newborn care', 'Replace clinical skills', 'Avoid teamwork'], correctIndex: 1, explanation: 'Foundations transfer directly to maternity practice.' },
      { id: 'n18q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Link principles to real patient interactions', 'Skip documentation', 'Avoid communication'], correctIndex: 1, explanation: 'Application to real care is the goal.' },
      { id: 'n18q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday nursing and midwifery', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They appear in every clinical shift.' },
      { id: 'n18q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore ethics', 'Explain core ideas in simple professional language', 'Work outside competence', 'Avoid escalation'], correctIndex: 1, explanation: 'Clear professional understanding is the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd109-l19',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 19 — Documentation and Reporting',
    type: 'topic',
    description: 'Check understanding of documentation and reporting.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n19q1', type: 'mcq', question: 'Good documentation should be:', options: ['Late and vague', 'Accurate, timely, factual and clear', 'Full of personal opinions as facts', 'Shared publicly on social media'], correctIndex: 1, explanation: 'Documentation must be accurate, timely and factual.' },
      { id: 'n19q2', type: 'mcq', question: 'SBAR is used mainly for:', options: ['Entertainment', 'Structured handover communication', 'Billing only', 'Ignoring risks'], correctIndex: 1, explanation: 'SBAR structures Situation, Background, Assessment, Recommendation.' },
      { id: 'n19q3', type: 'mcq', question: 'If care was not documented:', options: ['It is always assumed done', 'It is difficult to prove it was done', 'It does not matter legally', 'Only managers care'], correctIndex: 1, explanation: 'Documentation is the professional and legal record.' },
      { id: 'n19q4', type: 'mcq', question: 'Confidentiality in documentation means:', options: ['Anyone may read charts freely', 'Protect patient information according to policy', 'Hide all errors always', 'Never write vital signs'], correctIndex: 1, explanation: 'Patient information must be protected.' },
      { id: 'n19q5', type: 'mcq', question: 'Handover should include:', options: ['Only social chat', 'Current status, changes, pending tasks and risks', 'Only the patient’s age', 'Nothing about concerns'], correctIndex: 1, explanation: 'Effective handover transfers responsibility safely.' }
    ],
  },

  {
    id: 'quiz-bnd109-l20',
    courseId: 'bnd-109',
    courseCode: 'BND 109',
    title: 'Lesson 20 — Patient Safety and Quality',
    type: 'topic',
    description: 'Check understanding of patient safety and quality.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'n20q1', type: 'mcq', question: 'Patient safety means:', options: ['Accepting all preventable harm', 'Reducing preventable harm', 'Only speed of care', 'Avoiding all documentation'], correctIndex: 1, explanation: 'Safety is about preventing avoidable harm.' },
      { id: 'n20q2', type: 'mcq', question: 'A key student safety behaviour is:', options: ['Working beyond competence without help', 'Correct patient identification and escalation of concerns', 'Ignoring infection control', 'Skipping handover'], correctIndex: 1, explanation: 'ID checks and escalation protect patients.' },
      { id: 'n20q3', type: 'mcq', question: 'Poor communication is often linked to:', options: ['Better outcomes always', 'Adverse events', 'No clinical relevance', 'Only paperwork issues'], correctIndex: 1, explanation: 'Communication failures are a major factor in harm.' },
      { id: 'n20q4', type: 'mcq', question: 'Speaking up about safety concerns is:', options: ['Unprofessional', 'A professional responsibility', 'Only for managers', 'Optional always'], correctIndex: 1, explanation: 'Speaking up protects patients.' },
      { id: 'n20q5', type: 'mcq', question: 'Quality care is:', options: ['Only the cheapest care', 'Effective, person-centred, safe and timely', 'Ignoring patient preferences', 'Task lists without evaluation'], correctIndex: 1, explanation: 'Quality includes effectiveness, safety and person-centredness.' }
    ],
  },

  {
    id: 'quiz-bnd111-l01',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 1 — Introduction to Clinical Practice',
    type: 'topic',
    description: 'Check understanding of introduction to clinical practice.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl1q1', type: 'mcq', question: 'This clinical course primarily provides:', options: ['Competency certification', 'Educational preparation for supervised practice', 'Authority to work independently', 'Replacement for college assessment'], correctIndex: 1, explanation: 'The app educates; institutions supervise and certify.' },
      { id: 'cl1q2', type: 'mcq', question: 'If unsure how to perform a skill clinically, a student should:', options: ['Guess', 'Stop and ask a supervisor', 'Watch social media videos only', 'Skip documentation'], correctIndex: 1, explanation: 'Stop and ask when unsure.' },
      { id: 'cl1q3', type: 'mcq', question: 'Student scope of practice means:', options: ['Doing any task on the ward', 'Only what education and authorisation allow under supervision', 'Ignoring local policy', 'Working alone at night'], correctIndex: 1, explanation: 'Stay within authorised supervised scope.' },
      { id: 'cl1q4', type: 'mcq', question: 'Clinical learning includes:', options: ['Only reading', 'Observation, supervised practice, reflection and documentation', 'Avoiding feedback', 'Hiding mistakes'], correctIndex: 1, explanation: 'Learning is active and reflective under supervision.' },
      { id: 'cl1q5', type: 'mcq', question: 'Who grants clinical competency?', options: ['This learning app', 'The training institution after supervised assessment', 'Any senior student', 'Patients'], correctIndex: 1, explanation: 'Only the institution certifies competency.' }
    ],
  },

  {
    id: 'quiz-bnd111-l02',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 2 — Clinical Environment and Conduct',
    type: 'topic',
    description: 'Check understanding of clinical environment and conduct.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl2q1', type: 'mcq', question: 'This lesson focuses on Clinical Environment and Conduct. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl2q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl2q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl2q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl2q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l03',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 3 — Patient Identification',
    type: 'topic',
    description: 'Check understanding of patient identification.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl3q1', type: 'mcq', question: 'Correct patient identification prevents:', options: ['Only paperwork delays', 'Wrong-patient errors and harm', 'Hand hygiene needs', 'All communication'], correctIndex: 1, explanation: 'ID checks prevent wrong-patient harm.' },
      { id: 'cl3q2', type: 'mcq', question: 'If name and ID band do not match, you should:', options: ['Proceed quickly', 'Stop and escalate', 'Use the bed number only', 'Ask another patient'], correctIndex: 1, explanation: 'Mismatch means stop and escalate.' },
      { id: 'cl3q3', type: 'mcq', question: 'Patient ID checks are needed:', options: ['Only at admission', 'Before care, observations, procedures and documentation', 'Only for surgery', 'Never for observations'], correctIndex: 1, explanation: 'Check before actions that affect the patient.' },
      { id: 'cl3q4', type: 'mcq', question: 'Relying only on facial recognition is:', options: ['Best practice', 'Unsafe — formal identifiers are required', 'Required by policy always', 'Enough for medications'], correctIndex: 1, explanation: 'Recognition is not a substitute for formal ID.' },
      { id: 'cl3q5', type: 'mcq', question: 'Two identifiers typically include:', options: ['Bed number and room only', 'Name and date of birth (or as local policy states)', 'Only the diagnosis', 'Only the nurse’s memory'], correctIndex: 1, explanation: 'Follow local policy; name and DOB are common.' }
    ],
  },

  {
    id: 'quiz-bnd111-l04',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 4 — Hand Hygiene',
    type: 'topic',
    description: 'Check understanding of hand hygiene.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl4q1', type: 'mcq', question: 'The most important routine infection-prevention practice is:', options: ['Wearing jewellery', 'Hand hygiene at key moments', 'Skipping PPE always', 'Sharing towels'], correctIndex: 1, explanation: 'Hand hygiene is foundational.' },
      { id: 'cl4q2', type: 'mcq', question: 'Standard precautions apply to:', options: ['Only isolation patients', 'All patients', 'Only surgical cases', 'Only staff with symptoms'], correctIndex: 1, explanation: 'Standard precautions are for everyone.' },
      { id: 'cl4q3', type: 'mcq', question: 'Hands should be cleaned:', options: ['Only at the end of the shift', 'Before and after patient contact and at other key moments', 'Only if visibly dirty always', 'Never when wearing gloves'], correctIndex: 1, explanation: 'Key moments include before and after contact.' },
      { id: 'cl4q4', type: 'mcq', question: 'Gloves:', options: ['Replace hand hygiene', 'Do not replace hand hygiene', 'Are never needed', 'Can be reused freely'], correctIndex: 1, explanation: 'Gloves do not replace hand hygiene.' },
      { id: 'cl4q5', type: 'mcq', question: 'Visibly soiled hands generally need:', options: ['Alcohol rub only always', 'Soap and water washing as per policy', 'No cleaning', 'Only gloves'], correctIndex: 1, explanation: 'Soap and water when visibly soiled or as policy requires.' }
    ],
  },

  {
    id: 'quiz-bnd111-l05',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 5 — PPE',
    type: 'topic',
    description: 'Check understanding of ppe.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl5q1', type: 'mcq', question: 'This lesson focuses on PPE. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl5q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl5q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl5q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl5q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l06',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 6 — Privacy Dignity Consent',
    type: 'topic',
    description: 'Check understanding of privacy dignity consent.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl6q1', type: 'mcq', question: 'This lesson focuses on Privacy Dignity Consent. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl6q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl6q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl6q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl6q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l07',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 7 — Therapeutic Communication',
    type: 'topic',
    description: 'Check understanding of therapeutic communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl7q1', type: 'mcq', question: 'This lesson focuses on Therapeutic Communication. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl7q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl7q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl7q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl7q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l08',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 8 — Vital Signs',
    type: 'topic',
    description: 'Check understanding of vital signs.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl8q1', type: 'mcq', question: 'Vital signs commonly include:', options: ['Only weight', 'Temperature, pulse, respiration, blood pressure', 'Only lab results', 'Only pain medication doses'], correctIndex: 1, explanation: 'T, P, R, BP are core vital signs.' },
      { id: 'cl8q2', type: 'mcq', question: 'An abnormal vital sign should be:', options: ['Ignored if the patient looks fine', 'Rechecked if appropriate and escalated promptly', 'Deleted from the chart', 'Shared only on social media'], correctIndex: 1, explanation: 'Report abnormal or changing values.' },
      { id: 'cl8q3', type: 'mcq', question: 'Accurate BP measurement requires:', options: ['Any cuff size', 'Correct cuff size and technique as trained', 'No patient rest ever', 'Guessing the number'], correctIndex: 1, explanation: 'Cuff size and technique matter.' },
      { id: 'cl8q4', type: 'mcq', question: 'Trends in vital signs are important because:', options: ['Single values never matter', 'Change over time can signal deterioration', 'Charts are decorative', 'Only doctors read them'], correctIndex: 1, explanation: 'Trends detect deterioration early.' },
      { id: 'cl8q5', type: 'mcq', question: 'This lesson on vital signs is:', options: ['Permission to measure without training', 'Conceptual preparation; skills need supervised practice', 'Optional for maternity students', 'Only about thermometers'], correctIndex: 1, explanation: 'Concepts here; skills under supervision.' }
    ],
  },

  {
    id: 'quiz-bnd111-l09',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 9 — Pain Assessment',
    type: 'topic',
    description: 'Check understanding of pain assessment.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl9q1', type: 'mcq', question: 'This lesson focuses on Pain Assessment. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl9q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl9q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl9q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl9q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l10',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 10 — Positioning and Mobility',
    type: 'topic',
    description: 'Check understanding of positioning and mobility.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl10q1', type: 'mcq', question: 'This lesson focuses on Positioning and Mobility. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl10q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl10q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl10q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl10q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l11',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 11 — Bed Making and Comfort',
    type: 'topic',
    description: 'Check understanding of bed making and comfort.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl11q1', type: 'mcq', question: 'This lesson focuses on Bed Making and Comfort. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl11q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl11q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl11q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl11q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l12',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 12 — Hygiene and Personal Care',
    type: 'topic',
    description: 'Check understanding of hygiene and personal care.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl12q1', type: 'mcq', question: 'This lesson focuses on Hygiene and Personal Care. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl12q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl12q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl12q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl12q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l13',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 13 — Nutrition Hydration Elimination',
    type: 'topic',
    description: 'Check understanding of nutrition hydration elimination.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl13q1', type: 'mcq', question: 'This lesson focuses on Nutrition Hydration Elimination. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl13q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl13q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl13q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl13q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l14',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 14 — Intake and Output',
    type: 'topic',
    description: 'Check understanding of intake and output.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl14q1', type: 'mcq', question: 'This lesson focuses on Intake and Output. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl14q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl14q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl14q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl14q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l15',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 15 — Observation and Reporting',
    type: 'topic',
    description: 'Check understanding of observation and reporting.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl15q1', type: 'mcq', question: 'This lesson focuses on Observation and Reporting. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl15q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl15q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl15q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl15q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l16',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 16 — Documentation',
    type: 'topic',
    description: 'Check understanding of documentation.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl16q1', type: 'mcq', question: 'Clinical documentation should be:', options: ['Vague and late', 'Factual, timely and clear', 'Full of unverified opinions as facts', 'Posted online'], correctIndex: 1, explanation: 'Factual, timely, clear records are required.' },
      { id: 'cl16q2', type: 'mcq', question: 'Documenting care you did not give is:', options: ['Helpful', 'Falsification and unprofessional', 'Required for busy shifts', 'Standard practice'], correctIndex: 1, explanation: 'Never document false care.' },
      { id: 'cl16q3', type: 'mcq', question: 'Documentation supports:', options: ['Only billing', 'Continuity, safety and legal accountability', 'Gossip', 'Skipping handover'], correctIndex: 1, explanation: 'Records support safe continuity of care.' },
      { id: 'cl16q4', type: 'mcq', question: 'Confidentiality applies to:', options: ['Spoken information only', 'All patient information including records', 'Only VIP patients', 'Nothing electronic'], correctIndex: 1, explanation: 'All patient information is protected.' },
      { id: 'cl16q5', type: 'mcq', question: 'Errors in paper notes should be:', options: ['Obliterated completely', 'Corrected according to local policy without obliteration', 'Ignored', 'Deleted by tearing pages'], correctIndex: 1, explanation: 'Correct per policy; do not obliterate.' }
    ],
  },

  {
    id: 'quiz-bnd111-l17',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 17 — Handover and Teamwork',
    type: 'topic',
    description: 'Check understanding of handover and teamwork.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl17q1', type: 'mcq', question: 'This lesson focuses on Handover and Teamwork. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl17q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl17q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl17q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl17q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l18',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 18 — Patient Safety Risks',
    type: 'topic',
    description: 'Check understanding of patient safety risks.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl18q1', type: 'mcq', question: 'A near miss is:', options: ['Harm that reached the patient', 'An event that could have caused harm but did not', 'Always ignored', 'Only a medication issue'], correctIndex: 1, explanation: 'Near misses are opportunities to improve systems.' },
      { id: 'cl18q2', type: 'mcq', question: 'Common preventable harms include:', options: ['Only paper cuts', 'Falls, pressure injuries, infection and ID errors', 'Only staff fatigue', 'None in maternity'], correctIndex: 1, explanation: 'These are classic preventable risks.' },
      { id: 'cl18q3', type: 'mcq', question: 'If you see a wet floor hazard, you should:', options: ['Walk away', 'Act or escalate immediately', 'Wait for annual audit only', 'Photograph for social media'], correctIndex: 1, explanation: 'Immediate hazards need immediate action.' },
      { id: 'cl18q4', type: 'mcq', question: 'Working beyond competence without supervision is:', options: ['Brave', 'Unsafe and unprofessional', 'Expected of all students', 'Required on night duty'], correctIndex: 1, explanation: 'Stay within competence.' },
      { id: 'cl18q5', type: 'mcq', question: 'Reporting safety concerns is:', options: ['Optional gossip', 'A professional duty', 'Only for managers', 'A sign of weakness'], correctIndex: 1, explanation: 'Speaking up is professional.' }
    ],
  },

  {
    id: 'quiz-bnd111-l19',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 19 — Reflection and Accountability',
    type: 'topic',
    description: 'Check understanding of reflection and accountability.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl19q1', type: 'mcq', question: 'This lesson focuses on Reflection and Accountability. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl19q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl19q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl19q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl19q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd111-l20',
    courseId: 'bnd-111',
    courseCode: 'BND 111',
    title: 'Lesson 20 — Integrating Clinical Skills',
    type: 'topic',
    description: 'Check understanding of integrating clinical skills.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cl20q1', type: 'mcq', question: 'This lesson focuses on Integrating Clinical Skills. Best statement:', options: ['Clinical skills need no theory', 'These principles support safe supervised practice', 'Only managers need this', 'Students may ignore safety rules'], correctIndex: 1, explanation: 'Foundational clinical principles protect patients.' },
      { id: 'cl20q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Skip supervision', 'Apply safety and care concepts in maternity settings under supervision', 'Replace college assessment', 'Work alone'], correctIndex: 1, explanation: 'Concepts transfer to supervised maternity practice.' },
      { id: 'cl20q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Ignore local protocols', 'Combine with supervised skills training and local policy', 'Post procedures online', 'Avoid escalation'], correctIndex: 1, explanation: 'Education plus supervision plus policy equals safe practice.' },
      { id: 'cl20q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant to everyday clinical safety', 'Outdated', 'Optional always'], correctIndex: 1, explanation: 'They apply on every shift.' },
      { id: 'cl20q5', type: 'mcq', question: 'After this lesson you should:', options: ['Practise invasive skills unsupervised', 'Explain core safety ideas and know when to ask for help', 'Skip hand hygiene', 'Falsify notes'], correctIndex: 1, explanation: 'Understanding and safe limits are the outcome.' }
    ],
  },

  {
    id: 'quiz-bnd113-l01',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 1 — Professional Adjustment Intro',
    type: 'topic',
    description: 'Check understanding of professional adjustment intro.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa1q1', type: 'mcq', question: 'Professional adjustment means:', options: ['Ignoring professional values', 'Adapting to professional values, behaviours and demands', 'Avoiding clinical placements', 'Working without accountability'], correctIndex: 1, explanation: 'Adjustment is adapting to professional life.' },
      { id: 'pa1q2', type: 'mcq', question: 'Good adjustment supports:', options: ['Only exam scores', 'Patient safety and student wellbeing', 'Isolation from peers', 'Avoiding feedback'], correctIndex: 1, explanation: 'Adjustment protects safety and wellbeing.' },
      { id: 'pa1q3', type: 'mcq', question: 'Domains of adjustment include:', options: ['Only uniform rules', 'Identity, ethics, teamwork, stress management and reflection', 'Only salary negotiation', 'Avoiding learning'], correctIndex: 1, explanation: 'Multiple domains develop together.' },
      { id: 'pa1q4', type: 'mcq', question: 'Students are expected to:', options: ['Arrive fully formed', 'Grow deliberately through training', 'Never ask for help', 'Ignore ethics'], correctIndex: 1, explanation: 'Growth is expected; perfection is not.' },
      { id: 'pa1q5', type: 'mcq', question: 'Poor adjustment can lead to:', options: ['Only higher grades', 'Errors, conflict, burnout or withdrawal', 'Automatic promotion', 'No consequences'], correctIndex: 1, explanation: 'Poor adjustment risks safety and retention.' }
    ],
  },

  {
    id: 'quiz-bnd113-l02',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 2 — Nursing as a Profession',
    type: 'topic',
    description: 'Check understanding of nursing as a profession.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa2q1', type: 'mcq', question: 'This lesson focuses on Nursing as a Profession. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa2q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa2q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa2q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa2q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l03',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 3 — Professional Identity',
    type: 'topic',
    description: 'Check understanding of professional identity.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa3q1', type: 'mcq', question: 'This lesson focuses on Professional Identity. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa3q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa3q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa3q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa3q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l04',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 4 — Transition to Education',
    type: 'topic',
    description: 'Check understanding of transition to education.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa4q1', type: 'mcq', question: 'This lesson focuses on Transition to Education. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa4q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa4q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa4q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa4q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l05',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 5 — Clinical Adjustment',
    type: 'topic',
    description: 'Check understanding of clinical adjustment.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa5q1', type: 'mcq', question: 'This lesson focuses on Clinical Adjustment. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa5q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa5q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa5q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa5q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l06',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 6 — Attitudes and Behaviour',
    type: 'topic',
    description: 'Check understanding of attitudes and behaviour.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa6q1', type: 'mcq', question: 'This lesson focuses on Attitudes and Behaviour. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa6q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa6q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa6q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa6q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l07',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 7 — Accountability',
    type: 'topic',
    description: 'Check understanding of accountability.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa7q1', type: 'mcq', question: 'Accountability means:', options: ['Never making mistakes', 'Answering for actions and omissions', 'Only managers are accountable', 'Blaming juniors'], correctIndex: 1, explanation: 'Accountability includes omissions.' },
      { id: 'pa7q2', type: 'mcq', question: 'Students are accountable for:', options: ['Independent complex decisions outside training', 'Honesty, following policy, and escalating beyond competence', 'Nothing until graduation', 'Only paperwork'], correctIndex: 1, explanation: 'Escalation and honesty are student duties.' },
      { id: 'pa7q3', type: 'mcq', question: 'Responsibility differs from accountability in that:', options: ['They are identical always', 'Responsibility is the duty; accountability is answering for outcomes', 'Accountability is optional', 'Only doctors have accountability'], correctIndex: 1, explanation: 'Duty vs answering for outcomes.' },
      { id: 'pa7q4', type: 'mcq', question: 'Owning a mistake is:', options: ['Unprofessional', 'Part of accountability', 'A reason to hide documentation', 'Only for managers'], correctIndex: 1, explanation: 'Honesty about error is professional.' },
      { id: 'pa7q5', type: 'mcq', question: '“I did not know” is improved by:', options: ['Remaining silent', 'Asking and being taught', 'Guessing', 'Blaming the patient'], correctIndex: 1, explanation: 'Asking is stronger than silent ignorance.' }
    ],
  },

  {
    id: 'quiz-bnd113-l08',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 8 — Ethical Decision-Making',
    type: 'topic',
    description: 'Check understanding of ethical decision-making.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa8q1', type: 'mcq', question: 'This lesson focuses on Ethical Decision-Making. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa8q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa8q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa8q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa8q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l09',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 9 — Confidentiality and Boundaries',
    type: 'topic',
    description: 'Check understanding of confidentiality and boundaries.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa9q1', type: 'mcq', question: 'Confidentiality requires:', options: ['Sharing patient stories on social media', 'Need-to-know sharing only, per policy', 'Discussing patients in public corridors freely', 'Posting de-identified cases online'], correctIndex: 1, explanation: 'Need-to-know only; no social media.' },
      { id: 'pa9q2', type: 'mcq', question: 'Professional boundaries keep relationships:', options: ['Personal and open-ended', 'Therapeutic and focused on patient needs', 'Secretive', 'Based on gifts'], correctIndex: 1, explanation: 'Therapeutic, not personal.' },
      { id: 'pa9q3', type: 'mcq', question: 'A boundary risk for students is:', options: ['Introducing yourself', 'Befriending patients on social media', 'Asking for supervision', 'Documenting care'], correctIndex: 1, explanation: 'Social media contact with patients is a risk.' },
      { id: 'pa9q4', type: 'mcq', question: 'Need-to-know means:', options: ['Everyone on the ward may read all notes for curiosity', 'Share only with those who need information for care', 'Hide all information from the team', 'Only families decide'], correctIndex: 1, explanation: 'Share for care, not curiosity.' },
      { id: 'pa9q5', type: 'mcq', question: 'If unsure about a boundary issue, students should:', options: ['Ignore it', 'Discuss with a supervisor', 'Ask the patient for a personal phone number', 'Post online for advice'], correctIndex: 1, explanation: 'Supervisors help with grey areas.' }
    ],
  },

  {
    id: 'quiz-bnd113-l10',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 10 — Culturally Responsive Care',
    type: 'topic',
    description: 'Check understanding of culturally responsive care.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa10q1', type: 'mcq', question: 'This lesson focuses on Culturally Responsive Care. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa10q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa10q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa10q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa10q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l11',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 11 — Nurse-Patient Relationships',
    type: 'topic',
    description: 'Check understanding of nurse-patient relationships.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa11q1', type: 'mcq', question: 'This lesson focuses on Nurse-Patient Relationships. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa11q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa11q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa11q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa11q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l12',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 12 — Multidisciplinary Teams',
    type: 'topic',
    description: 'Check understanding of multidisciplinary teams.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa12q1', type: 'mcq', question: 'Multidisciplinary teams improve safety because:', options: ['One profession knows everything', 'Complementary expertise reduces error', 'Teams eliminate the need for communication', 'Hierarchy should never be questioned'], correctIndex: 1, explanation: 'Teams combine expertise.' },
      { id: 'pa12q2', type: 'mcq', question: 'Psychological safety means:', options: ['Never speaking up', 'Feeling able to raise concerns without fear of inappropriate punishment', 'Avoiding all conflict', 'Only seniors may talk'], correctIndex: 1, explanation: 'Safe to speak up.' },
      { id: 'pa12q3', type: 'mcq', question: 'Closed-loop communication involves:', options: ['Ignoring instructions', 'Confirming critical information by read-back', 'Only written notes', 'Whispering'], correctIndex: 1, explanation: 'Confirm understanding.' },
      { id: 'pa12q4', type: 'mcq', question: 'Interprofessional respect includes:', options: ['Blaming other roles', 'Using names/roles and sharing information promptly', 'Avoiding other professions', 'Working in isolation'], correctIndex: 1, explanation: 'Respect and information sharing.' },
      { id: 'pa12q5', type: 'mcq', question: 'Speaking up across hierarchy is:', options: ['Always rude', 'A safety duty when risk is present', 'Only allowed after graduation', 'Unnecessary'], correctIndex: 1, explanation: 'Speak up for safety.' }
    ],
  },

  {
    id: 'quiz-bnd113-l13',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 13 — Professional Communication',
    type: 'topic',
    description: 'Check understanding of professional communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa13q1', type: 'mcq', question: 'This lesson focuses on Professional Communication. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa13q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa13q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa13q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa13q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l14',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 14 — Conflict Management',
    type: 'topic',
    description: 'Check understanding of conflict management.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa14q1', type: 'mcq', question: 'This lesson focuses on Conflict Management. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa14q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa14q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa14q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa14q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l15',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 15 — Leadership and Followership',
    type: 'topic',
    description: 'Check understanding of leadership and followership.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa15q1', type: 'mcq', question: 'This lesson focuses on Leadership and Followership. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa15q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa15q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa15q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa15q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l16',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 16 — Time Management',
    type: 'topic',
    description: 'Check understanding of time management.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa16q1', type: 'mcq', question: 'This lesson focuses on Time Management. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa16q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa16q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa16q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa16q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l17',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 17 — Stress and Resilience',
    type: 'topic',
    description: 'Check understanding of stress and resilience.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa17q1', type: 'mcq', question: 'Resilience is best described as:', options: ['Never feeling stress', 'Capacity to recover and keep functioning ethically', 'Ignoring support services', 'Working without breaks always'], correctIndex: 1, explanation: 'Recover and continue ethically.' },
      { id: 'pa17q2', type: 'mcq', question: 'Healthy coping strategies include:', options: ['Substance misuse', 'Sleep, peer support, debrief and seeking help when needed', 'Isolation only', 'Skipping all rest'], correctIndex: 1, explanation: 'Healthy strategies protect function.' },
      { id: 'pa17q3', type: 'mcq', question: 'Warning signs of harmful stress include:', options: ['Occasional exam nerves', 'Persistent insomnia, isolation, or thoughts of self-harm', 'Asking for help', 'Taking scheduled breaks'], correctIndex: 1, explanation: 'Persistent or severe signs need support.' },
      { id: 'pa17q4', type: 'mcq', question: 'Caring for yourself as a student is:', options: ['Selfish', 'Part of professional responsibility', 'Optional always', 'Discouraged'], correctIndex: 1, explanation: 'Self-care supports safe patient care.' },
      { id: 'pa17q5', type: 'mcq', question: 'After a traumatic clinical event, students should:', options: ['Never discuss it', 'Use structured debrief and support as available', 'Hide all feelings permanently', 'Blame themselves in silence'], correctIndex: 1, explanation: 'Debrief supports processing and learning.' }
    ],
  },

  {
    id: 'quiz-bnd113-l18',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 18 — Reflection and Feedback',
    type: 'topic',
    description: 'Check understanding of reflection and feedback.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa18q1', type: 'mcq', question: 'This lesson focuses on Reflection and Feedback. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa18q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa18q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa18q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa18q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l19',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 19 — Continuing Professional Development',
    type: 'topic',
    description: 'Check understanding of continuing professional development.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa19q1', type: 'mcq', question: 'This lesson focuses on Continuing Professional Development. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa19q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa19q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa19q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa19q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd113-l20',
    courseId: 'bnd-113',
    courseCode: 'BND 113',
    title: 'Lesson 20 — Professional Identity Integration',
    type: 'topic',
    description: 'Check understanding of professional identity integration.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'pa20q1', type: 'mcq', question: 'This lesson focuses on Professional Identity Integration. Best statement:', options: ['Professional adjustment is optional', 'These concepts support safe professional development', 'Only managers need this', 'Ignore feedback always'], correctIndex: 1, explanation: 'Professional adjustment concepts guide safe growth.' },
      { id: 'pa20q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid teamwork', 'Build identity, ethics and resilience for maternity practice', 'Replace clinical skills', 'Work without accountability'], correctIndex: 1, explanation: 'Adjustment skills transfer to midwifery practice.' },
      { id: 'pa20q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise values, communication and reflection daily', 'Avoid supervisors', 'Hide mistakes'], correctIndex: 1, explanation: 'Daily practice forms identity.' },
      { id: 'pa20q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant throughout training and career', 'Outdated', 'Optional after year one'], correctIndex: 1, explanation: 'They apply throughout professional life.' },
      { id: 'pa20q5', type: 'mcq', question: 'After this lesson you should:', options: ['Ignore stress', 'Explain core ideas and apply one improvement habit', 'Avoid CPD', 'Work beyond scope'], correctIndex: 1, explanation: 'Understanding plus one habit is progress.' }
    ],
  },

  {
    id: 'quiz-bnd115-l01',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 1 — Introduction to Microbiology',
    type: 'topic',
    description: 'Check understanding of introduction to microbiology.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi1q1', type: 'mcq', question: 'Microbiology is the study of:', options: ['Only human anatomy', 'Microorganisms', 'Only hospital buildings', 'Only nutrition'], correctIndex: 1, explanation: 'Microbiology studies microorganisms.' },
      { id: 'mi1q2', type: 'mcq', question: 'This course teaches:', options: ['How to culture pathogens at home', 'Educational concepts for safe IPC practice', 'Independent lab certification', 'How to deliberately spread microbes'], correctIndex: 1, explanation: 'Educational concepts only — no culturing instructions.' },
      { id: 'mi1q3', type: 'mcq', question: 'Why do midwives need microbiology?', options: ['It is unrelated to birth', 'To prevent maternal and newborn infection', 'Only for laboratory careers', 'To replace hand hygiene'], correctIndex: 1, explanation: 'IPC protects mothers and newborns.' },
      { id: 'mi1q4', type: 'mcq', question: 'Antibiotics primarily target:', options: ['Viruses always', 'Bacteria (when appropriate)', 'All microbes equally always', 'Only fungi'], correctIndex: 1, explanation: 'Antibiotics are antibacterial agents.' },
      { id: 'mi1q5', type: 'mcq', question: 'Safe learning means:', options: ['Skipping precautions', 'Following local protocols and supervised practice', 'Ignoring outbreaks', 'Reusing single-use devices'], correctIndex: 1, explanation: 'Protocols and supervision guide real practice.' }
    ],
  },

  {
    id: 'quiz-bnd115-l02',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 2 — Microbial Classification',
    type: 'topic',
    description: 'Check understanding of microbial classification.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi2q1', type: 'mcq', question: 'This lesson focuses on Microbial Classification. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi2q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi2q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi2q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi2q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l03',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 3 — Bacteria',
    type: 'topic',
    description: 'Check understanding of bacteria.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi3q1', type: 'mcq', question: 'This lesson focuses on Bacteria. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi3q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi3q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi3q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi3q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l04',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 4 — Viruses',
    type: 'topic',
    description: 'Check understanding of viruses.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi4q1', type: 'mcq', question: 'This lesson focuses on Viruses. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi4q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi4q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi4q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi4q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l05',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 5 — Fungi and Protozoa',
    type: 'topic',
    description: 'Check understanding of fungi and protozoa.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi5q1', type: 'mcq', question: 'This lesson focuses on Fungi and Protozoa. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi5q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi5q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi5q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi5q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l06',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 6 — Normal Microbiota',
    type: 'topic',
    description: 'Check understanding of normal microbiota.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi6q1', type: 'mcq', question: 'This lesson focuses on Normal Microbiota. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi6q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi6q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi6q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi6q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l07',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 7 — Pathogens and Opportunists',
    type: 'topic',
    description: 'Check understanding of pathogens and opportunists.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi7q1', type: 'mcq', question: 'This lesson focuses on Pathogens and Opportunists. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi7q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi7q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi7q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi7q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l08',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 8 — Infection and Disease',
    type: 'topic',
    description: 'Check understanding of infection and disease.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi8q1', type: 'mcq', question: 'This lesson focuses on Infection and Disease. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi8q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi8q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi8q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi8q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l09',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 9 — Chain of Infection',
    type: 'topic',
    description: 'Check understanding of chain of infection.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi9q1', type: 'mcq', question: 'The chain of infection includes:', options: ['Only the host', 'Agent, reservoir, exit, transmission, entry, susceptible host', 'Only antibiotics', 'Only ventilation'], correctIndex: 1, explanation: 'Six classic links.' },
      { id: 'mi9q2', type: 'mcq', question: 'Breaking any link can:', options: ['Increase spread', 'Help prevent infection', 'Replace all vaccines', 'Eliminate the need for hand hygiene'], correctIndex: 1, explanation: 'Break a link, stop the chain.' },
      { id: 'mi9q3', type: 'mcq', question: 'Hand hygiene mainly interrupts:', options: ['Only the reservoir in soil', 'Transmission', 'Only genetic mutation', 'Only food supply'], correctIndex: 1, explanation: 'It interrupts transmission.' },
      { id: 'mi9q4', type: 'mcq', question: 'A reservoir is:', options: ['Always a hospital only', 'Where the organism lives and multiplies', 'Only a vaccine', 'Only PPE'], correctIndex: 1, explanation: 'Reservoir is the habitat of the organism.' },
      { id: 'mi9q5', type: 'mcq', question: 'Maternity example of chain-breaking includes:', options: ['Ignoring GBS protocols', 'Indicated intrapartum antibiotics and hygienic newborn care per guidelines', 'Sharing uncleaned equipment', 'Skipping hand hygiene before baby contact'], correctIndex: 1, explanation: 'Evidence-based protocols break links.' }
    ],
  },

  {
    id: 'quiz-bnd115-l10',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 10 — Modes of Transmission',
    type: 'topic',
    description: 'Check understanding of modes of transmission.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi10q1', type: 'mcq', question: 'This lesson focuses on Modes of Transmission. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi10q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi10q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi10q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi10q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l11',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 11 — Healthcare-Associated Infections',
    type: 'topic',
    description: 'Check understanding of healthcare-associated infections.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi11q1', type: 'mcq', question: 'This lesson focuses on Healthcare-Associated Infections. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi11q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi11q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi11q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi11q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l12',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 12 — Standard Precautions',
    type: 'topic',
    description: 'Check understanding of standard precautions.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi12q1', type: 'mcq', question: 'This lesson focuses on Standard Precautions. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi12q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi12q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi12q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi12q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l13',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 13 — Hand Hygiene',
    type: 'topic',
    description: 'Check understanding of hand hygiene.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi13q1', type: 'mcq', question: 'The most important routine IPC practice is:', options: ['Wearing jewellery', 'Hand hygiene at key moments', 'Skipping PPE', 'Reusing gloves'], correctIndex: 1, explanation: 'Hand hygiene is foundational.' },
      { id: 'mi13q2', type: 'mcq', question: 'Alcohol hand rub is typically used when hands are:', options: ['Visibly soiled with heavy dirt', 'Visibly clean', 'Covered in blood always only wash', 'Never'], correctIndex: 1, explanation: 'Rub for visibly clean hands; wash when soiled or as policy requires.' },
      { id: 'mi13q3', type: 'mcq', question: 'Gloves:', options: ['Replace hand hygiene', 'Do not replace hand hygiene', 'Are never needed in maternity', 'Can be reused between patients'], correctIndex: 1, explanation: 'Gloves complement, not replace, hand hygiene.' },
      { id: 'mi13q4', type: 'mcq', question: 'Key moments include:', options: ['Only at end of shift', 'Before patient contact and before aseptic tasks, among others', 'Only after lunch', 'Never after touching surroundings'], correctIndex: 1, explanation: 'WHO/local 5 moments include before contact and aseptic tasks.' },
      { id: 'mi13q5', type: 'mcq', question: 'Before examining a newborn, you should:', options: ['Skip hand hygiene if busy', 'Perform hand hygiene', 'Only wear rings for luck', 'Touch the baby then clean hands'], correctIndex: 1, explanation: 'Clean hands before newborn contact.' }
    ],
  },

  {
    id: 'quiz-bnd115-l14',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 14 — PPE',
    type: 'topic',
    description: 'Check understanding of ppe.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi14q1', type: 'mcq', question: 'This lesson focuses on PPE. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi14q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi14q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi14q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi14q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l15',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 15 — Cleaning Disinfection Sterilization',
    type: 'topic',
    description: 'Check understanding of cleaning disinfection sterilization.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi15q1', type: 'mcq', question: 'This lesson focuses on Cleaning Disinfection Sterilization. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi15q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi15q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi15q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi15q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l16',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 16 — Aseptic Principles',
    type: 'topic',
    description: 'Check understanding of aseptic principles.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi16q1', type: 'mcq', question: 'This lesson focuses on Aseptic Principles. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi16q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi16q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi16q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi16q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l17',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 17 — Specimen Handling',
    type: 'topic',
    description: 'Check understanding of specimen handling.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi17q1', type: 'mcq', question: 'This lesson focuses on Specimen Handling. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi17q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi17q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi17q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi17q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd115-l18',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 18 — Antimicrobial Resistance',
    type: 'topic',
    description: 'Check understanding of antimicrobial resistance.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi18q1', type: 'mcq', question: 'Antimicrobial resistance means:', options: ['Drugs always work better', 'Microbes survive drugs meant to kill or inhibit them', 'Viruses become bacteria', 'Hand hygiene is unnecessary'], correctIndex: 1, explanation: 'Microbes resist the drugs.' },
      { id: 'mi18q2', type: 'mcq', question: 'A driver of AMR is:', options: ['Appropriate targeted antibiotic use only', 'Unnecessary antibiotic use and poor IPC', 'Vaccination', 'Hand hygiene'], correctIndex: 1, explanation: 'Misuse and spread drive resistance.' },
      { id: 'mi18q3', type: 'mcq', question: 'Stewardship includes:', options: ['Giving antibiotics for all viral colds', 'Right drug, dose, duration and strong IPC', 'Stopping all antibiotics forever', 'Ignoring culture results always'], correctIndex: 1, explanation: 'Right use plus IPC.' },
      { id: 'mi18q4', type: 'mcq', question: 'Nurses and midwives contribute by:', options: ['Pressuring for unneeded antibiotics', 'IPC, correct administration, and patient education', 'Skipping doses randomly', 'Sharing leftover antibiotics'], correctIndex: 1, explanation: 'Frontline stewardship actions.' },
      { id: 'mi18q5', type: 'mcq', question: 'Multidrug-resistant organisms require:', options: ['No special attention', 'Enhanced IPC attention per policy', 'Only vitamin therapy', 'Avoiding all documentation'], correctIndex: 1, explanation: 'Follow local MDR protocols.' }
    ],
  },

  {
    id: 'quiz-bnd115-l19',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 19 — IPC in Midwifery',
    type: 'topic',
    description: 'Check understanding of ipc in midwifery.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi19q1', type: 'mcq', question: 'A major maternity IPC priority is:', options: ['Avoiding all contact with newborns', 'Hand hygiene before every newborn contact', 'Sharing towels between babies', 'Skipping wound care'], correctIndex: 1, explanation: 'Hands before baby contact.' },
      { id: 'mi19q2', type: 'mcq', question: 'Prolonged rupture of membranes increases risk of:', options: ['Only baldness', 'Ascending infection', 'Improved immunity always', 'No clinical change'], correctIndex: 1, explanation: 'Prolonged ROM raises infection risk.' },
      { id: 'mi19q3', type: 'mcq', question: 'Maternal or neonatal sepsis signs should be:', options: ['Ignored overnight', 'Escalated promptly', 'Treated only with fluids at home without assessment', 'Hidden from the team'], correctIndex: 1, explanation: 'Escalate early.' },
      { id: 'mi19q4', type: 'mcq', question: 'Visitors should be supported to:', options: ['Skip hand hygiene', 'Practise hand hygiene', 'Touch all wounds freely', 'Bring sick relatives to the nursery without guidance'], correctIndex: 1, explanation: 'Teach visitor hand hygiene.' },
      { id: 'mi19q5', type: 'mcq', question: 'IPC in midwifery is:', options: ['Optional', 'Core professional practice', 'Only the doctor’s job', 'Only relevant in surgery'], correctIndex: 1, explanation: 'IPC is core midwifery work.' }
    ],
  },

  {
    id: 'quiz-bnd115-l20',
    courseId: 'bnd-115',
    courseCode: 'BND 115',
    title: 'Lesson 20 — Integrating Microbiology and IPC',
    type: 'topic',
    description: 'Check understanding of integrating microbiology and ipc.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'mi20q1', type: 'mcq', question: 'This lesson focuses on Integrating Microbiology and IPC. Best statement:', options: ['IPC is optional', 'These concepts support safer patient care', 'Only lab staff need this', 'Antibiotics replace hygiene'], correctIndex: 1, explanation: 'Microbiology and IPC protect patients.' },
      { id: 'mi20q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Culture pathogens at home', 'Prevent maternal and newborn infection under institutional protocols', 'Ignore outbreaks', 'Skip hand hygiene'], correctIndex: 1, explanation: 'Prevention in maternity care is the goal.' },
      { id: 'mi20q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply precautions and escalate infection risks', 'Reuse single-use devices', 'Avoid PPE'], correctIndex: 1, explanation: 'Application and escalation matter.' },
      { id: 'mi20q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every clinical shift', 'Outdated', 'Optional in maternity'], correctIndex: 1, explanation: 'IPC is every-shift work.' },
      { id: 'mi20q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop cleaning hands', 'Explain core ideas and practise safe habits', 'Culture bacteria unsupervised', 'Share patient specimens on social media'], correctIndex: 1, explanation: 'Understanding plus safe habits.' }
    ],
  },

  {
    id: 'quiz-bnd117-l01',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 1 — Foundations of Communication',
    type: 'topic',
    description: 'Check understanding of foundations of communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm1q1', type: 'mcq', question: 'Communication in healthcare is primarily:', options: ['Optional soft skill only', 'A clinical and safety skill', 'Only for managers', 'Unrelated to consent'], correctIndex: 1, explanation: 'Communication is clinical and safety-critical.' },
      { id: 'cm1q2', type: 'mcq', question: 'Poor communication can contribute to:', options: ['Only longer breaks', 'Adverse events and delayed care', 'Automatic improvement', 'Better handovers always'], correctIndex: 1, explanation: 'Communication failure is a common root cause of harm.' },
      { id: 'cm1q3', type: 'mcq', question: 'Speaking up about risk is:', options: ['Rude always', 'A safety behaviour', 'Only allowed after graduation', 'Optional gossip'], correctIndex: 1, explanation: 'Speaking up protects patients.' },
      { id: 'cm1q4', type: 'mcq', question: 'Maternity care depends on communication with:', options: ['Only laboratory staff', 'Women, families and the healthcare team', 'Only administrators', 'No one during labour'], correctIndex: 1, explanation: 'Women, families and teams all need clear communication.' },
      { id: 'cm1q5', type: 'mcq', question: 'Trust is built partly through:', options: ['Ignoring concerns', 'Clear, respectful communication', 'Withholding all information', 'Avoiding introductions'], correctIndex: 1, explanation: 'Respectful clarity builds trust.' }
    ],
  },

  {
    id: 'quiz-bnd117-l02',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 2 — Communication Process',
    type: 'topic',
    description: 'Check understanding of communication process.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm2q1', type: 'mcq', question: 'This lesson focuses on Communication Process. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm2q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm2q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm2q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm2q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l03',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 3 — Verbal Communication',
    type: 'topic',
    description: 'Check understanding of verbal communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm3q1', type: 'mcq', question: 'This lesson focuses on Verbal Communication. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm3q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm3q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm3q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm3q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l04',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 4 — Non-Verbal Communication',
    type: 'topic',
    description: 'Check understanding of non-verbal communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm4q1', type: 'mcq', question: 'This lesson focuses on Non-Verbal Communication. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm4q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm4q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm4q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm4q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l05',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 5 — Written Communication',
    type: 'topic',
    description: 'Check understanding of written communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm5q1', type: 'mcq', question: 'This lesson focuses on Written Communication. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm5q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm5q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm5q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm5q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l06',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 6 — Active Listening',
    type: 'topic',
    description: 'Check understanding of active listening.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm6q1', type: 'mcq', question: 'Active listening includes:', options: ['Planning your reply while they talk only', 'Attending, reflecting and clarifying', 'Changing the subject quickly', 'False reassurance'], correctIndex: 1, explanation: 'Attend, reflect, clarify.' },
      { id: 'cm6q2', type: 'mcq', question: 'A listening failure is:', options: ['Allowing silence', 'Interrupting with premature advice', 'Summarising', 'Facing the speaker'], correctIndex: 1, explanation: 'Premature advice blocks listening.' },
      { id: 'cm6q3', type: 'mcq', question: 'Silence in a conversation can:', options: ['Only mean boredom', 'Invite more information', 'Always be unprofessional', 'Replace assessment'], correctIndex: 1, explanation: 'Silence can help the speaker continue.' },
      { id: 'cm6q4', type: 'mcq', question: 'Reflecting feelings means:', options: ['Ignoring emotion', 'Acknowledging the emotion you hear', 'Changing the topic to labs only', 'Laughing off concerns'], correctIndex: 1, explanation: 'Name the emotion respectfully.' },
      { id: 'cm6q5', type: 'mcq', question: 'Missed symptoms are sometimes due to:', options: ['Too much listening', 'Failed listening rather than lack of knowledge', 'Perfect communication', 'Only equipment failure'], correctIndex: 1, explanation: 'Listening failures miss clinical data.' }
    ],
  },

  {
    id: 'quiz-bnd117-l07',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 7 — Therapeutic Communication',
    type: 'topic',
    description: 'Check understanding of therapeutic communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm7q1', type: 'mcq', question: 'This lesson focuses on Therapeutic Communication. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm7q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm7q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm7q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm7q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l08',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 8 — Empathy Respect Rapport',
    type: 'topic',
    description: 'Check understanding of empathy respect rapport.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm8q1', type: 'mcq', question: 'This lesson focuses on Empathy Respect Rapport. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm8q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm8q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm8q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm8q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l09',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 9 — Communication Barriers',
    type: 'topic',
    description: 'Check understanding of communication barriers.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm9q1', type: 'mcq', question: 'This lesson focuses on Communication Barriers. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm9q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm9q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm9q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm9q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l10',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 10 — Cultural Sensitivity',
    type: 'topic',
    description: 'Check understanding of cultural sensitivity.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm10q1', type: 'mcq', question: 'This lesson focuses on Cultural Sensitivity. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm10q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm10q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm10q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm10q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l11',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 11 — Patient Education',
    type: 'topic',
    description: 'Check understanding of patient education.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm11q1', type: 'mcq', question: 'This lesson focuses on Patient Education. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm11q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm11q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm11q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm11q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l12',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 12 — Documentation Communication',
    type: 'topic',
    description: 'Check understanding of documentation communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm12q1', type: 'mcq', question: 'This lesson focuses on Documentation Communication. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm12q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm12q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm12q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm12q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l13',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 13 — Handover and SBAR',
    type: 'topic',
    description: 'Check understanding of handover and sbar.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm13q1', type: 'mcq', question: 'SBAR stands for:', options: ['Situation, Background, Assessment, Recommendation', 'Simple, Brief, Accurate, Random', 'Staff, Bed, Age, Room', 'Stop, Breathe, Ask, Run'], correctIndex: 0, explanation: 'Situation, Background, Assessment, Recommendation.' },
      { id: 'cm13q2', type: 'mcq', question: 'Handover transfers:', options: ['Only gossip', 'Responsibility and critical information', 'Only the uniform', 'Nothing important'], correctIndex: 1, explanation: 'Responsibility and key information.' },
      { id: 'cm13q3', type: 'mcq', question: 'Maternity handover should include:', options: ['Only the mother’s favourite food', 'Mother and baby status, risks and plans', 'Only the room number', 'No pending results'], correctIndex: 1, explanation: 'Mother and baby, risks, plans.' },
      { id: 'cm13q4', type: 'mcq', question: 'Closed-loop communication involves:', options: ['Ignoring instructions', 'Confirming critical information by read-back', 'Only written notes never spoken', 'Whispering only'], correctIndex: 1, explanation: 'Read-back confirms understanding.' },
      { id: 'cm13q5', type: 'mcq', question: 'Handover is considered:', options: ['Low risk always', 'A high-risk communication moment', 'Unnecessary if you know the patient', 'Only for doctors'], correctIndex: 1, explanation: 'Handover is high-risk for omissions.' }
    ],
  },

  {
    id: 'quiz-bnd117-l14',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 14 — Team Communication',
    type: 'topic',
    description: 'Check understanding of team communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm14q1', type: 'mcq', question: 'This lesson focuses on Team Communication. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm14q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm14q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm14q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm14q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l15',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 15 — Conflict Resolution',
    type: 'topic',
    description: 'Check understanding of conflict resolution.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm15q1', type: 'mcq', question: 'This lesson focuses on Conflict Resolution. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm15q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm15q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm15q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm15q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l16',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 16 — Difficult Conversations',
    type: 'topic',
    description: 'Check understanding of difficult conversations.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm16q1', type: 'mcq', question: 'Before a difficult conversation, you should:', options: ['Speak in a public corridor', 'Prepare facts, privacy and support as appropriate', 'Give all details in one breath without pause', 'Avoid any supervisor involvement always'], correctIndex: 1, explanation: 'Prepare facts, setting and support.' },
      { id: 'cm16q2', type: 'mcq', question: 'False reassurance is:', options: ['Always comforting and accurate', 'Often unhelpful because it can break trust', 'Required by policy', 'The same as empathy'], correctIndex: 1, explanation: 'It can damage trust.' },
      { id: 'cm16q3', type: 'mcq', question: 'Information in hard conversations should be given:', options: ['All at once without pause', 'In short chunks with pauses to check understanding', 'Only in writing never spoken', 'Only to staff never to patients'], correctIndex: 1, explanation: 'Chunks and pauses help processing.' },
      { id: 'cm16q4', type: 'mcq', question: 'Students facing major bad-news conversations should:', options: ['Always lead alone', 'Involve supervisors as required', 'Avoid documentation', 'Use social media for advice'], correctIndex: 1, explanation: 'High-stakes talks need supervision.' },
      { id: 'cm16q5', type: 'mcq', question: 'After a difficult conversation, useful steps include:', options: ['Never documenting', 'Documenting and ensuring support is available', 'Forgetting the interaction', 'Blaming the patient'], correctIndex: 1, explanation: 'Document and support.' }
    ],
  },

  {
    id: 'quiz-bnd117-l17',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 17 — Confidentiality and Boundaries',
    type: 'topic',
    description: 'Check understanding of confidentiality and boundaries.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm17q1', type: 'mcq', question: 'This lesson focuses on Confidentiality and Boundaries. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm17q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm17q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm17q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm17q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l18',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 18 — Telephone and Digital',
    type: 'topic',
    description: 'Check understanding of telephone and digital.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm18q1', type: 'mcq', question: 'This lesson focuses on Telephone and Digital. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm18q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm18q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm18q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm18q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd117-l19',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 19 — Maternity Communication',
    type: 'topic',
    description: 'Check understanding of maternity communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm19q1', type: 'mcq', question: 'In active labour, verbal cues should often be:', options: ['Long technical lectures', 'Short and clear', 'Delivered only in writing', 'Avoided entirely'], correctIndex: 1, explanation: 'Short clear phrases match capacity.' },
      { id: 'cm19q2', type: 'mcq', question: 'Antenatal education should use:', options: ['Only jargon', 'Plain language and teach-back', 'No checking of understanding', 'Fear as the only motivator'], correctIndex: 1, explanation: 'Plain language and teach-back.' },
      { id: 'cm19q3', type: 'mcq', question: 'Postnatal teaching works best when:', options: ['The mother is exhausted and interrupted constantly without support', 'Key points are prioritised and understanding is checked', 'Only leaflets are left without explanation', 'Partners are always excluded'], correctIndex: 1, explanation: 'Prioritise and verify understanding.' },
      { id: 'cm19q4', type: 'mcq', question: 'Shared decision-making means:', options: ['Staff decide everything silently', 'Women receive understandable information and participate in choices', 'Ignoring clinical evidence', 'Avoiding all documentation of preferences'], correctIndex: 1, explanation: 'Information plus participation.' },
      { id: 'cm19q5', type: 'mcq', question: 'Labour ward handover must cover:', options: ['Only staffing gossip', 'Mother and baby', 'Only the midwife’s break time', 'Nothing about risks'], correctIndex: 1, explanation: 'Mother and baby status.' }
    ],
  },

  {
    id: 'quiz-bnd117-l20',
    courseId: 'bnd-117',
    courseCode: 'BND 117',
    title: 'Lesson 20 — Integrated Communication',
    type: 'topic',
    description: 'Check understanding of integrated communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'cm20q1', type: 'mcq', question: 'This lesson focuses on Integrated Communication. Best statement:', options: ['Communication is optional', 'These skills support safer, more respectful care', 'Only managers need this', 'Ignore patient understanding'], correctIndex: 1, explanation: 'Communication skills improve safety and respect.' },
      { id: 'cm20q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid talking to women', 'Communicate clearly with women, families and teams', 'Replace clinical observation', 'Use jargon always'], correctIndex: 1, explanation: 'Clear communication is core midwifery practice.' },
      { id: 'cm20q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Practise listening, plain language and structured handover', 'Skip teach-back', 'Discuss patients on social media'], correctIndex: 1, explanation: 'Practice builds skill.' },
      { id: 'cm20q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every shift', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every shift needs clear communication.' },
      { id: 'cm20q5', type: 'mcq', question: 'After this lesson you should:', options: ['Stop listening', 'Explain core ideas and apply one improved habit', 'Avoid SBAR', 'Interrupt more'], correctIndex: 1, explanation: 'Understanding plus one habit.' }
    ],
  },

  {
    id: 'quiz-bnd119-l01',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 1 — Introduction to Informatics',
    type: 'topic',
    description: 'Check understanding of introduction to informatics.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf1q1', type: 'mcq', question: 'Nursing and midwifery informatics focuses on:', options: ['Only repairing computers', 'Using data and technology to support care', 'Replacing clinical judgement entirely', 'Ignoring documentation'], correctIndex: 1, explanation: 'Informatics supports care with data and technology.' },
      { id: 'inf1q2', type: 'mcq', question: 'This course replaces local EHR training:', options: ['Yes completely', 'No — it teaches concepts; local systems need local training', 'Only for managers', 'Only offline'], correctIndex: 1, explanation: 'Local system training remains required.' },
      { id: 'inf1q3', type: 'mcq', question: 'Everyday informatics tasks include:', options: ['Sharing passwords', 'Secure login, documentation and result retrieval', 'Posting records online', 'Skipping identity checks'], correctIndex: 1, explanation: 'Login, document, retrieve — safely.' },
      { id: 'inf1q4', type: 'mcq', question: 'Technology should:', options: ['Replace looking at the patient', 'Serve clinical care', 'Always override clinician judgement', 'Be used without training'], correctIndex: 1, explanation: 'Technology serves care.' },
      { id: 'inf1q5', type: 'mcq', question: 'Maternity informatics examples include:', options: ['Only billing codes', 'Antenatal records, labour documentation and newborn charts', 'Only social media', 'Only paper forever with no concepts'], correctIndex: 1, explanation: 'Digital maternity records are increasingly common.' }
    ],
  },

  {
    id: 'quiz-bnd119-l02',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 2 — Data Information Knowledge Wisdom',
    type: 'topic',
    description: 'Check understanding of data information knowledge wisdom.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf2q1', type: 'mcq', question: 'This lesson focuses on Data Information Knowledge Wisdom. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf2q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf2q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf2q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf2q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l03',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 3 — Health Information and Data',
    type: 'topic',
    description: 'Check understanding of health information and data.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf3q1', type: 'mcq', question: 'This lesson focuses on Health Information and Data. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf3q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf3q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf3q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf3q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l04',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 4 — Digital Literacy',
    type: 'topic',
    description: 'Check understanding of digital literacy.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf4q1', type: 'mcq', question: 'This lesson focuses on Digital Literacy. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf4q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf4q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf4q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf4q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l05',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 5 — Electronic Health Records',
    type: 'topic',
    description: 'Check understanding of electronic health records.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf5q1', type: 'mcq', question: 'An EHR is:', options: ['A paper binder only', 'A digital longitudinal health record used in care', 'A social media profile', 'An unsecured spreadsheet on a phone'], correctIndex: 1, explanation: 'EHR is a digital clinical record.' },
      { id: 'inf5q2', type: 'mcq', question: 'A benefit of EHRs is:', options: ['Guaranteed zero errors', 'Legibility and shared access when used well', 'No need for identity checks', 'Unlimited public access'], correctIndex: 1, explanation: 'Legibility and access are benefits.' },
      { id: 'inf5q3', type: 'mcq', question: 'Copy-paste in EHRs is risky because:', options: ['It is always perfect', 'It can import outdated or wrong-patient information', 'It improves privacy', 'It removes the need for assessment'], correctIndex: 1, explanation: 'Copy-paste can propagate errors.' },
      { id: 'inf5q4', type: 'mcq', question: 'Before documenting you should:', options: ['Assume the chart is correct', 'Verify the correct patient', 'Share your password', 'Document tomorrow only'], correctIndex: 1, explanation: 'Verify patient identity.' },
      { id: 'inf5q5', type: 'mcq', question: 'Alert fatigue means:', options: ['Enjoying alerts', 'Becoming desensitised to too many alerts', 'Never receiving alerts', 'Turning off all power'], correctIndex: 1, explanation: 'Too many alerts reduce attention.' }
    ],
  },

  {
    id: 'quiz-bnd119-l06',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 6 — Health Information Systems',
    type: 'topic',
    description: 'Check understanding of health information systems.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf6q1', type: 'mcq', question: 'This lesson focuses on Health Information Systems. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf6q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf6q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf6q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf6q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l07',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 7 — Documentation and Data Quality',
    type: 'topic',
    description: 'Check understanding of documentation and data quality.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf7q1', type: 'mcq', question: 'This lesson focuses on Documentation and Data Quality. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf7q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf7q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf7q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf7q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l08',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 8 — Information Retrieval and EBP',
    type: 'topic',
    description: 'Check understanding of information retrieval and ebp.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf8q1', type: 'mcq', question: 'This lesson focuses on Information Retrieval and EBP. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf8q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf8q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf8q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf8q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l09',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 9 — Digital Communication',
    type: 'topic',
    description: 'Check understanding of digital communication.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf9q1', type: 'mcq', question: 'This lesson focuses on Digital Communication. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf9q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf9q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf9q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf9q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l10',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 10 — Privacy and Confidentiality',
    type: 'topic',
    description: 'Check understanding of privacy and confidentiality.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf10q1', type: 'mcq', question: 'Need-to-know access means:', options: ['Open any chart for curiosity', 'Access information only when required for authorised role/care', 'Share passwords for convenience', 'Post records publicly'], correctIndex: 1, explanation: 'Access only for authorised need.' },
      { id: 'inf10q2', type: 'mcq', question: 'Privacy differs from confidentiality in that privacy is:', options: ['A duty only for IT staff', 'A right to control personal information; confidentiality is the duty to protect it', 'Irrelevant in hospitals', 'The same as cybersecurity only'], correctIndex: 1, explanation: 'Right vs duty.' },
      { id: 'inf10q3', type: 'mcq', question: 'Opening a neighbour’s chart without a care role is:', options: ['Professional development', 'A confidentiality breach', 'Required training', 'Encouraged'], correctIndex: 1, explanation: 'Curiosity access is a breach.' },
      { id: 'inf10q4', type: 'mcq', question: 'Audit trails:', options: ['Never exist', 'Often record who accessed records', 'Delete all history daily', 'Are only for paper notes'], correctIndex: 1, explanation: 'Access is often logged.' },
      { id: 'inf10q5', type: 'mcq', question: 'Maternity data is sensitive because:', options: ['It is never clinical', 'It includes intimate reproductive information', 'It is always public', 'It cannot be digital'], correctIndex: 1, explanation: 'Intimate reproductive details require discretion.' }
    ],
  },

  {
    id: 'quiz-bnd119-l11',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 11 — Cybersecurity',
    type: 'topic',
    description: 'Check understanding of cybersecurity.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf11q1', type: 'mcq', question: 'Phishing aims to:', options: ['Improve passwords automatically', 'Trick people into revealing credentials or installing malware', 'Backup servers', 'Train midwives only'], correctIndex: 1, explanation: 'Phishing is social engineering for access or malware.' },
      { id: 'inf11q2', type: 'mcq', question: 'Sharing passwords is:', options: ['Best practice', 'Unsafe and prohibited', 'Required for students', 'Only a problem offline'], correctIndex: 1, explanation: 'Never share passwords.' },
      { id: 'inf11q3', type: 'mcq', question: 'If you suspect a security incident you should:', options: ['Hide it', 'Report promptly via institutional channels', 'Post on social media', 'Ignore it until annual review'], correctIndex: 1, explanation: 'Report early.' },
      { id: 'inf11q4', type: 'mcq', question: 'Ransomware can:', options: ['Only affect games', 'Disrupt clinical systems and delay care', 'Improve EHR speed always', 'Replace hand hygiene'], correctIndex: 1, explanation: 'Ransomware can halt clinical IT.' },
      { id: 'inf11q5', type: 'mcq', question: 'Screen locking is:', options: ['Optional decoration', 'A basic security behaviour', 'Only for managers', 'Unnecessary in maternity'], correctIndex: 1, explanation: 'Lock screens to protect data.' }
    ],
  },

  {
    id: 'quiz-bnd119-l12',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 12 — Clinical Decision Support',
    type: 'topic',
    description: 'Check understanding of clinical decision support.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf12q1', type: 'mcq', question: 'This lesson focuses on Clinical Decision Support. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf12q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf12q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf12q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf12q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l13',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 13 — Technology and Patient Safety',
    type: 'topic',
    description: 'Check understanding of technology and patient safety.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf13q1', type: 'mcq', question: 'This lesson focuses on Technology and Patient Safety. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf13q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf13q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf13q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf13q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l14',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 14 — Telehealth',
    type: 'topic',
    description: 'Check understanding of telehealth.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf14q1', type: 'mcq', question: 'This lesson focuses on Telehealth. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf14q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf14q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf14q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf14q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l15',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 15 — Nursing Midwifery Information Systems',
    type: 'topic',
    description: 'Check understanding of nursing midwifery information systems.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf15q1', type: 'mcq', question: 'This lesson focuses on Nursing Midwifery Information Systems. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf15q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf15q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf15q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf15q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l16',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 16 — Data Collection and Interpretation',
    type: 'topic',
    description: 'Check understanding of data collection and interpretation.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf16q1', type: 'mcq', question: 'This lesson focuses on Data Collection and Interpretation. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf16q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf16q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf16q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf16q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l17',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 17 — Interoperability',
    type: 'topic',
    description: 'Check understanding of interoperability.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf17q1', type: 'mcq', question: 'This lesson focuses on Interoperability. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf17q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf17q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf17q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf17q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l18',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 18 — Ethics of Healthcare Technology',
    type: 'topic',
    description: 'Check understanding of ethics of healthcare technology.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf18q1', type: 'mcq', question: 'This lesson focuses on Ethics of Healthcare Technology. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf18q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf18q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf18q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf18q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },

  {
    id: 'quiz-bnd119-l19',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 19 — AI and Emerging Technologies',
    type: 'topic',
    description: 'Check understanding of ai and emerging technologies.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf19q1', type: 'mcq', question: 'AI clinical tools should be treated as:', options: ['Infallible orders', 'Assistance requiring human oversight and governance', 'Replacements for licensed clinicians', 'Reasons to paste patient notes into public chatbots'], correctIndex: 1, explanation: 'AI assists under oversight.' },
      { id: 'inf19q2', type: 'mcq', question: 'Putting identifiable patient data into unapproved consumer AI tools is:', options: ['Always fine', 'A confidentiality risk and usually prohibited', 'Required documentation', 'The best backup method'], correctIndex: 1, explanation: 'Unapproved tools risk breaches.' },
      { id: 'inf19q3', type: 'mcq', question: 'A risk of AI in healthcare is:', options: ['Perfect fairness always', 'Bias and confident errors', 'Elimination of all privacy issues', 'No need for policies'], correctIndex: 1, explanation: 'Bias and error are real risks.' },
      { id: 'inf19q4', type: 'mcq', question: 'Accountability for clinical decisions remains with:', options: ['The algorithm alone', 'Licensed clinicians and organisations under policy', 'Random web users', 'No one'], correctIndex: 1, explanation: 'Clinicians remain accountable.' },
      { id: 'inf19q5', type: 'mcq', question: 'Emerging technologies in maternity care require:', options: ['No validation', 'Governance and validation before clinical reliance', 'Immediate mandatory use without training', 'Ignoring local policy'], correctIndex: 1, explanation: 'Governance first.' }
    ],
  },

  {
    id: 'quiz-bnd119-l20',
    courseId: 'bnd-119',
    courseCode: 'BND 119',
    title: 'Lesson 20 — Integrated Informatics Practice',
    type: 'topic',
    description: 'Check understanding of integrated informatics practice.',
    timeLimit: 6,
    passingScore: 70,
    questions: [
      { id: 'inf20q1', type: 'mcq', question: 'This lesson focuses on Integrated Informatics Practice. Best statement:', options: ['Informatics is optional for clinicians', 'These concepts support safer digital practice', 'Only IT staff need this', 'Passwords should be shared'], correctIndex: 1, explanation: 'Informatics concepts support safe care.' },
      { id: 'inf20q2', type: 'mcq', question: 'Midwifery students learn this to:', options: ['Avoid documentation', 'Use records, privacy rules and digital tools safely in maternity care', 'Replace clinical observation', 'Ignore downtime plans'], correctIndex: 1, explanation: 'Digital maternity care still needs professional standards.' },
      { id: 'inf20q3', type: 'mcq', question: 'Best use of this knowledge:', options: ['Memorise only', 'Apply identity checks, approved channels and thoughtful alerts', 'Browse charts for curiosity', 'Disable all safety alerts always'], correctIndex: 1, explanation: 'Apply safe digital habits.' },
      { id: 'inf20q4', type: 'mcq', question: 'These principles are:', options: ['Only theoretical', 'Relevant every time you log in', 'Outdated', 'Optional in emergencies'], correctIndex: 1, explanation: 'Every login is an informatics moment.' },
      { id: 'inf20q5', type: 'mcq', question: 'After this lesson you should:', options: ['Share logins', 'Explain core ideas and practise safe system use under local policy', 'Paste notes into public AI tools', 'Skip identity verification'], correctIndex: 1, explanation: 'Understanding plus safe practice.' }
    ],
  },
];

export function getQuizById(id) {
  return quizzes.find((q) => q.id === id);
}

export function getQuizzesByCourse(courseId) {
  return quizzes.filter((q) => q.courseId === courseId);
}

export function getAllQuizzes() {
  return quizzes;
}
