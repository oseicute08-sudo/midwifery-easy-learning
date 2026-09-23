/**
 * BND 101 — Human Anatomy 1
 * Fully authored learning pathway for Midwifery Easy Learning Center.
 * Educational content for Level 100 midwifery/nursing students.
 * Not an official institutional syllabus document.
 */

export const lessonContent = {

  'bnd101-l01': {
    id: 'bnd101-l01',
    courseId: 'bnd-101',
    number: 1,
    title: 'Introduction to Human Anatomy',
    duration: '20 min',
    objectives: [
      'Define anatomy and explain its main branches',
      'Distinguish gross, microscopic, developmental, regional, systemic, surface and clinical anatomy',
      'Explain why anatomy is essential for safe midwifery practice',
      'Relate anatomical knowledge to everyday clinical tasks',
    ],
    introduction:
      'Anatomy is the scientific study of the structure of the body. For a student midwife, it is the foundation of almost every skill you will practise — from abdominal palpation to understanding labour and birth. This lesson introduces the meaning of anatomy, its major branches, and why it matters in midwifery.',
    heroImage: {
      src: '/images/midwifery-student.png',
      alt: 'Midwifery student in clinical uniform',
      caption: 'Student midwives build confidence through structured anatomical learning and clinical practice.',
    },
    sections: [
      {
        heading: 'What is Anatomy?',
        content:
          'Anatomy comes from Greek words meaning "to cut up" or "to dissect." It is the study of the structure of living organisms — how the body is built from cells up to complete systems.\n\nPhysiology studies how those structures work. Anatomy and physiology are inseparable in practice: structure enables function, and function shapes structure.',
      },
      {
        heading: 'Branches of Anatomy',
        content: 'Several approaches help us study the body systematically:',
        list: [
          'Gross (macroscopic) anatomy — structures visible to the naked eye (organs, bones, muscles).',
          'Microscopic anatomy — tissues (histology) and cells (cytology) studied with microscopes.',
          'Developmental anatomy (embryology) — structural changes from fertilisation through growth.',
          'Regional anatomy — all structures in a particular body region (e.g. the pelvis).',
          'Systemic anatomy — one organ system at a time (e.g. the cardiovascular system).',
          'Surface anatomy — external landmarks that indicate deeper structures.',
          'Clinical anatomy — application of anatomical knowledge to diagnosis and procedures.',
        ],
      },
      {
        heading: 'Why Anatomy Matters for Midwives',
        content:
          'Every clinical skill depends on anatomy. Measuring fundal height, performing Leopold\u2019s manoeuvres, assessing fetal presentation, understanding the birth canal, recognising complications, and explaining findings to clients all require accurate structural knowledge.\n\nWithout anatomy, assessment becomes guesswork and interventions become unsafe.',
      },
    ],
    terminology: [
      { term: 'Anatomy', meaning: 'Study of body structure', example: 'Learning the bones of the pelvis' },
      { term: 'Gross anatomy', meaning: 'Visible structures without a microscope', example: 'Examining a heart model' },
      { term: 'Histology', meaning: 'Study of tissues under the microscope', example: 'Examining epithelial lining of the uterus' },
      { term: 'Surface anatomy', meaning: 'External landmarks related to deeper structures', example: 'Locating the iliac crest by palpation' },
      { term: 'Clinical anatomy', meaning: 'Anatomy applied to patient care', example: 'Choosing a safe injection site' },
    ],
    clinicalConnection:
      'When you document "fundus is at the level of the umbilicus," you are using surface and regional anatomy. Accurate anatomical language keeps the whole team aligned.',
    midwiferyConnection:
      'Understanding the bony pelvis, soft tissues of the birth canal, and reproductive organs is essential for labour support, assisted birth, and recognising obstructed labour early.',
    keyPoints: [
      'Anatomy studies structure; physiology studies function — both are needed for clinical care.',
      'Gross, microscopic, developmental, regional, systemic, surface and clinical anatomy are complementary approaches.',
      'Surface landmarks guide safe examination and procedures.',
      'Midwifery decisions depend on precise knowledge of pelvic and reproductive anatomy.',
    ],
    commonMistakes: [
      {
        mistake: 'Thinking anatomy is only about memorising lists of bones and muscles.',
        correction: 'Anatomy is about relationships, surface landmarks and clinical application — not isolated names.',
      },
      {
        mistake: 'Assuming anatomical knowledge is only useful in the dissection lab.',
        correction: 'You use anatomy every time you palpate, measure, inject, or explain a finding.',
      },
    ],
    rememberThis:
      'Anatomy is the language of the body. Master the language early — every later clinical skill builds on it.',
    quickReview: [
      { q: 'What is the difference between gross and microscopic anatomy?', a: 'Gross anatomy studies structures visible to the naked eye; microscopic anatomy studies tissues and cells with a microscope.' },
      { q: 'Why is surface anatomy important in clinical practice?', a: 'It links external landmarks to deeper structures, guiding examination and procedures safely.' },
      { q: 'Name three branches of anatomy relevant to midwifery.', a: 'Examples: regional (pelvis), surface (landmarks), clinical (applied to birth), systemic (reproductive system).' },
    ],
    quizId: 'quiz-bnd101-l01',
    keyTerms: ['Anatomy', 'Gross anatomy', 'Histology', 'Surface anatomy', 'Clinical anatomy', 'Embryology'],
  },

  'bnd101-l02': {
    id: 'bnd101-l02', courseId: 'bnd-101', number: 2,
    title: 'Anatomical Position', duration: '15 min',
    objectives: [
      'Describe the standard anatomical position precisely',
      'Explain why a universal reference position is necessary',
      'Use anatomical position correctly when describing structures',
      'Recognise common clinical body orientations (supine, prone, lateral)',
    ],
    introduction: 'The anatomical position is the universal starting point for all directional terms and structural descriptions. Without it, words like "above," "in front of," or "to the side" become ambiguous.',
    sections: [
      { heading: 'The Standard Anatomical Position', content: 'In the anatomical position the body is:', list: [
        'Standing upright', 'Facing forward (eyes looking straight ahead)', 'Arms at the sides',
        'Palms facing forward (thumbs pointing outward)', 'Feet flat and slightly apart, toes pointing forward',
      ]},
      { heading: 'Why a Standard Position Matters', content: 'A shared reference removes ambiguity so descriptions mean the same thing everywhere. Clinicians worldwide understand the same directional language.' },
      { heading: 'Clinical Orientations', content: 'Patients are rarely examined while standing in anatomical position. Common orientations include:', list: [
        'Supine — lying on the back, face up', 'Prone — lying face down',
        'Lateral (left or right) — lying on one side',
        'Lithotomy — supine with hips and knees flexed (common for pelvic examination and birth)',
      ]},
    ],
    diagram: { title: 'Anatomical Position — Reference Posture', description: 'Upright body, face forward, palms forward, feet slightly apart. All directional terms assume this position even when the patient is lying down.', caption: 'Educational reference: anatomical position with major orientation cues.' },
    terminology: [
      { term: 'Anatomical position', meaning: 'Standard upright reference posture', example: 'Palms face forward' },
      { term: 'Supine', meaning: 'Lying face up', example: 'Antenatal examination position' },
      { term: 'Prone', meaning: 'Lying face down', example: 'Some physiotherapy positions' },
      { term: 'Lithotomy', meaning: 'Supine with flexed hips and knees', example: 'Second stage of labour / pelvic exam' },
    ],
    clinicalConnection: 'When you write "incision 2 cm superior to the umbilicus," the reader assumes anatomical position even if the client was supine on the couch.',
    midwiferyConnection: 'During labour a woman may change position frequently. Clear communication of fetal position and maternal landmarks still uses the language of anatomical position.',
    keyPoints: [
      'Anatomical position: upright, face forward, palms forward, feet slightly apart.',
      'All directional terms are defined relative to this position.',
      'Supine, prone, lateral and lithotomy are clinical orientations — language still refers to anatomical position.',
    ],
    commonMistakes: [{ mistake: 'Describing "left" and "right" from the observer\'s view instead of the patient\'s.', correction: 'Always use the patient\'s left and right, based on anatomical position.' }],
    rememberThis: 'Palms face forward in the anatomical position — that is why the radius and ulna are described as parallel.',
    quickReview: [
      { q: 'List the key features of the anatomical position.', a: 'Upright, face forward, arms at sides, palms forward, feet slightly apart and forward.' },
      { q: 'What does supine mean?', a: 'Lying on the back, face up.' },
    ],
    quizId: 'quiz-bnd101-l02',
    keyTerms: ['Anatomical position', 'Supine', 'Prone', 'Lateral position', 'Lithotomy'],
  },

  'bnd101-l03': {
    id: 'bnd101-l03', courseId: 'bnd-101', number: 3,
    title: 'Anatomical Terms of Direction and Relationship', duration: '25 min',
    objectives: [
      'Define the core directional terms used in anatomy',
      'Apply each term to anatomical, clinical and midwifery examples',
      'Use ipsilateral, contralateral, unilateral and bilateral correctly',
      'Communicate locations precisely in clinical notes',
    ],
    introduction: 'Directional terms give us a precise vocabulary for locating structures. Mastering them early prevents confusion in textbooks, handovers and documentation.',
    sections: [
      { heading: 'Core Directional Pairs', content: 'These pairs form the foundation of anatomical language. Always assume the anatomical position when using them.' },
    ],
    directionalTerms: [
      { term: 'Superior (cranial)', definition: 'Toward the head or upper part of a structure.', simple: 'Higher up / closer to the head.', anatomical: 'The heart is superior to the diaphragm.', clinical: 'A wound 3 cm superior to the umbilicus.', midwifery: 'Fundal height measured superior to the pubic symphysis.' },
      { term: 'Inferior (caudal)', definition: 'Away from the head or toward the lower part of a structure.', simple: 'Lower down / closer to the feet.', anatomical: 'The stomach is inferior to the lungs.', clinical: 'Pain inferior to the costal margin.', midwifery: 'Presenting part descending inferiorly through the pelvis.' },
      { term: 'Anterior (ventral)', definition: 'Toward the front of the body.', simple: 'In front.', anatomical: 'The sternum is anterior to the heart.', clinical: 'Anterior abdominal wall tenderness.', midwifery: 'Occipito-anterior fetal position is generally favourable for labour.' },
      { term: 'Posterior (dorsal)', definition: 'Toward the back of the body.', simple: 'Behind / at the back.', anatomical: 'The spine is posterior to the heart.', clinical: 'Posterior iliac spine as a landmark.', midwifery: 'Persistent occipito-posterior position may prolong labour.' },
      { term: 'Medial', definition: 'Toward the midline of the body.', simple: 'Closer to the centre line.', anatomical: 'The nose is medial to the eyes.', clinical: 'Medial malleolus of the ankle.', midwifery: 'Fetal spine described as left or right of the maternal midline.' },
      { term: 'Lateral', definition: 'Away from the midline of the body.', simple: 'Toward the side.', anatomical: 'The ears are lateral to the eyes.', clinical: 'Lateral aspect of the thigh for injection.', midwifery: 'Left lateral position in labour; lateral fetal positions.' },
      { term: 'Proximal', definition: 'Closer to the point of attachment of a limb (or to the trunk).', simple: 'Nearer to where the limb joins the body.', anatomical: 'The elbow is proximal to the wrist.', clinical: 'Proximal deep vein thrombosis.', midwifery: 'Assessing oedema proximal vs distal in the legs.' },
      { term: 'Distal', definition: 'Farther from the point of attachment of a limb.', simple: 'Farther from the body (toward fingers or toes).', anatomical: 'The fingers are distal to the wrist.', clinical: 'Distal capillary refill time.', midwifery: 'Checking peripheral perfusion and distal pulses in pregnancy.' },
      { term: 'Superficial', definition: 'Closer to the body surface.', simple: 'Nearer the skin.', anatomical: 'The skin is superficial to the muscles.', clinical: 'Superficial wound vs deep wound.', midwifery: 'Superficial perineal structures during examination.' },
      { term: 'Deep', definition: 'Farther from the body surface.', simple: 'Deeper inside.', anatomical: 'Bones are deep to the muscles.', clinical: 'Deep pelvic pain.', midwifery: 'Deep transverse arrest of the fetal head.' },
      { term: 'Ipsilateral', definition: 'On the same side of the body.', simple: 'Same side.', anatomical: 'Left arm and left leg are ipsilateral.', clinical: 'Ipsilateral reflex response.', midwifery: 'Comparing findings on the same side of the abdomen.' },
      { term: 'Contralateral', definition: 'On the opposite side of the body.', simple: 'Opposite side.', anatomical: 'Left arm and right leg are contralateral.', clinical: 'Contralateral neurological signs.', midwifery: 'Comparing findings on contralateral sides of the abdomen.' },
      { term: 'Unilateral / Bilateral', definition: 'One side / both sides.', simple: 'One side only / both sides.', anatomical: 'The spleen is unilateral; the kidneys are bilateral.', clinical: 'Bilateral ankle oedema.', midwifery: 'Bilateral breast engorgement; unilateral mastitis.' },
    ],
    diagram: { title: 'Directional Terminology Diagram', description: 'Body shown in anatomical position with arrows indicating superior/inferior, anterior/posterior, medial/lateral, proximal/distal.', caption: 'Reference diagram for directional terms used throughout clinical practice.' },
    clinicalConnection: 'Clear directional language in notes (e.g. "tenderness in the right lower quadrant, medial to the iliac crest") allows any colleague to locate the finding accurately.',
    midwiferyConnection: 'Fetal position (e.g. left occipito-anterior), station, and descent are all described with directional vocabulary relative to the maternal pelvis.',
    keyPoints: [
      'Superior/inferior, anterior/posterior, medial/lateral, proximal/distal, superficial/deep form the core vocabulary.',
      'Always assume anatomical position.',
      'Proximal and distal are used mainly for limbs.',
      'Ipsilateral = same side; contralateral = opposite side.',
    ],
    commonMistakes: [
      { mistake: 'Using "proximal" and "distal" for structures on the trunk.', correction: 'Prefer superior/inferior or medial/lateral for the trunk; reserve proximal/distal for limbs.' },
      { mistake: 'Mixing up medial and lateral.', correction: 'Medial = toward midline; lateral = away from midline.' },
    ],
    rememberThis: 'The heart is medial to the lungs, superior to the diaphragm, and anterior to the spine.',
    quickReview: [
      { q: 'The elbow is _____ to the wrist.', a: 'Proximal' },
      { q: 'The skin is _____ to the muscles.', a: 'Superficial' },
      { q: 'Structures on opposite sides are _____.', a: 'Contralateral' },
    ],
    quizId: 'quiz-bnd101-l03',
    keyTerms: ['Superior', 'Inferior', 'Anterior', 'Posterior', 'Medial', 'Lateral', 'Proximal', 'Distal', 'Superficial', 'Deep', 'Ipsilateral', 'Contralateral'],
  },

  'bnd101-l04': {
    id: 'bnd101-l04', courseId: 'bnd-101', number: 4,
    title: 'Body Planes and Sections', duration: '18 min',
    objectives: ['Name and define the three primary body planes', 'Explain midsagittal vs parasagittal', 'Relate planes to clinical imaging', 'Interpret plane-based descriptions'],
    introduction: 'Body planes are imaginary flat surfaces that divide the body. They are essential for describing sections, understanding imaging, and communicating findings.',
    sections: [
      { heading: 'Sagittal Plane', content: 'A vertical plane dividing left and right. Midsagittal is the exact midline; parasagittal is offset.' },
      { heading: 'Frontal (Coronal) Plane', content: 'Vertical plane dividing anterior and posterior.' },
      { heading: 'Transverse Plane', content: 'Horizontal plane dividing superior and inferior. Also called axial.' },
      { heading: 'Oblique Planes', content: 'Planes at an angle; common in ultrasound.' },
    ],
    diagram: { title: 'Major Body Planes', description: 'Sagittal, frontal/coronal and transverse planes.', caption: 'Primary anatomical planes.' },
    clinicalConnection: 'CT and MRI use axial, coronal and sagittal series.',
    midwiferyConnection: 'Obstetric ultrasound uses longitudinal and transverse views of the uterus and fetus.',
    keyPoints: ['Sagittal = left/right', 'Frontal = front/back', 'Transverse = upper/lower'],
    rememberThis: 'A transverse section through the abdomen shows a cross-section of the trunk.',
    quickReview: [
      { q: 'Which plane divides anterior from posterior?', a: 'Frontal (coronal).' },
      { q: 'What is the midsagittal plane?', a: 'The exact midline sagittal plane.' },
    ],
    quizId: 'quiz-bnd101-l04',
    keyTerms: ['Sagittal', 'Midsagittal', 'Frontal', 'Transverse', 'Oblique'],
  },
  'bnd101-l05': {
    id: 'bnd101-l05', courseId: 'bnd-101', number: 5,
    title: 'Body Cavities', duration: '20 min',
    objectives: ['Identify dorsal and ventral cavities', 'List major organs in each', 'Explain the diaphragm', 'Relate pelvic cavity to pregnancy and birth'],
    introduction: 'Body cavities are protected spaces housing organs. The pelvic cavity is central to midwifery.',
    sections: [
      { heading: 'Dorsal Body Cavity', content: 'Cranial cavity (brain) and vertebral cavity (spinal cord).' },
      { heading: 'Ventral Body Cavity', content: 'Thoracic cavity and abdominopelvic cavity, separated by the diaphragm.' },
      { heading: 'Thoracic Cavity', content: 'Pleural cavities (lungs), mediastinum, pericardial cavity (heart).' },
      { heading: 'Abdominopelvic Cavity', content: 'Abdominal cavity (digestive organs, kidneys) and pelvic cavity (bladder, reproductive organs, rectum).' },
      { heading: 'Pelvic Cavity and Midwifery', content: 'The bony pelvis protects pelvic organs. In pregnancy the uterus expands into the abdomen. During labour the fetus descends through inlet, cavity and outlet.' },
    ],
    diagram: { title: 'Body Cavities', description: 'Cranial, vertebral, thoracic and abdominopelvic cavities.', caption: 'Major body cavities.' },
    clinicalConnection: 'Abdominal pain is localised using four quadrants or nine regions.',
    midwiferyConnection: 'Pelvic cavity houses uterus, ovaries, bladder and rectum — central to engagement, station and labour progress.',
    keyPoints: ['Dorsal protects CNS', 'Diaphragm separates thorax from abdomen', 'Pelvic cavity is key for birth'],
    rememberThis: 'The diaphragm is the key muscular boundary between thorax and abdomen.',
    quickReview: [
      { q: 'What does the dorsal cavity contain?', a: 'Brain and spinal cord.' },
      { q: 'Name pelvic structures relevant to midwifery.', a: 'Uterus, bladder, rectum, ovaries.' },
    ],
    quizId: 'quiz-bnd101-l05',
    keyTerms: ['Cranial cavity', 'Thoracic cavity', 'Pelvic cavity', 'Diaphragm', 'Mediastinum'],
  },

  'bnd101-l06': {
    id: 'bnd101-l06', courseId: 'bnd-101', number: 6,
    title: 'Body Regions', duration: '16 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Major body regions and abdominal quadrants used in clinical description.',
    sections: [
      { heading: 'Overview', content: 'Major body regions and abdominal quadrants used in clinical description.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Body Regions — Diagram', description: 'Educational diagram placeholder for body regions. Labelled illustration can be added in a future update.', caption: 'Visual support for Body Regions.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'The umbilicus is the centre point for the four-quadrant system.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Body Regions.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l06',
    keyTerms: ['Cephalic', 'Thoracic', 'Abdominal', 'Pelvic', 'Quadrants'],
  },

  'bnd101-l07': {
    id: 'bnd101-l07', courseId: 'bnd-101', number: 7,
    title: 'Cells and Basic Organization', duration: '22 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Cell structure, organelles and levels of organisation from chemical to organism.',
    sections: [
      { heading: 'Overview', content: 'Cell structure, organelles and levels of organisation from chemical to organism.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Cells and Basic Organization — Diagram', description: 'Educational diagram placeholder for cells and basic organization. Labelled illustration can be added in a future update.', caption: 'Visual support for Cells and Basic Organization.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'Structure enables function at every level.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Cells and Basic Organization.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l07',
    keyTerms: ['Cell membrane', 'Nucleus', 'Mitochondria', 'Tissue', 'Organ'],
  },

  'bnd101-l08': {
    id: 'bnd101-l08', courseId: 'bnd-101', number: 8,
    title: 'Tissues', duration: '20 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Epithelial, connective, muscle and nervous tissue — structure, function and examples.',
    sections: [
      { heading: 'Overview', content: 'Epithelial, connective, muscle and nervous tissue — structure, function and examples.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Tissues — Diagram', description: 'Educational diagram placeholder for tissues. Labelled illustration can be added in a future update.', caption: 'Visual support for Tissues.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'Organs combine two or more tissue types.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Tissues.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l08',
    keyTerms: ['Epithelial tissue', 'Connective tissue', 'Muscle tissue', 'Nervous tissue'],
  },

  'bnd101-l09': {
    id: 'bnd101-l09', courseId: 'bnd-101', number: 9,
    title: 'Skeletal System', duration: '28 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Skeleton functions, axial vs appendicular, and obstetric focus on the bony pelvis, inlet and outlet.',
    sections: [
      { heading: 'Overview', content: 'Skeleton functions, axial vs appendicular, and obstetric focus on the bony pelvis, inlet and outlet.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Skeletal System — Diagram', description: 'Educational diagram placeholder for skeletal system. Labelled illustration can be added in a future update.', caption: 'Visual support for Skeletal System.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'The pelvic inlet is the gateway; the outlet is the exit.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Skeletal System.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l09',
    keyTerms: ['Axial skeleton', 'Pelvic inlet', 'Pelvic outlet', 'Ilium', 'Sacrum'],
  },

  'bnd101-l10': {
    id: 'bnd101-l10', courseId: 'bnd-101', number: 10,
    title: 'Joints', duration: '18 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Fibrous, cartilaginous and synovial joints; pregnancy-related joint laxity.',
    sections: [
      { heading: 'Overview', content: 'Fibrous, cartilaginous and synovial joints; pregnancy-related joint laxity.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Joints — Diagram', description: 'Educational diagram placeholder for joints. Labelled illustration can be added in a future update.', caption: 'Visual support for Joints.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'The pubic symphysis softens in pregnancy.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Joints.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l10',
    keyTerms: ['Synovial joint', 'Pubic symphysis', 'Relaxin'],
  },

  'bnd101-l11': {
    id: 'bnd101-l11', courseId: 'bnd-101', number: 11,
    title: 'Muscular System', duration: '20 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Skeletal, smooth and cardiac muscle with midwifery examples (myometrium, pelvic floor).',
    sections: [
      { heading: 'Overview', content: 'Skeletal, smooth and cardiac muscle with midwifery examples (myometrium, pelvic floor).' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Muscular System — Diagram', description: 'Educational diagram placeholder for muscular system. Labelled illustration can be added in a future update.', caption: 'Visual support for Muscular System.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'Labour is powered by smooth muscle; pushing by skeletal muscle.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Muscular System.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l11',
    keyTerms: ['Skeletal muscle', 'Smooth muscle', 'Myometrium', 'Pelvic floor'],
  },

  'bnd101-l12': {
    id: 'bnd101-l12', courseId: 'bnd-101', number: 12,
    title: 'Nervous System Introduction', duration: '22 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'CNS, PNS, autonomic system and introductory links to pain and labour.',
    sections: [
      { heading: 'Overview', content: 'CNS, PNS, autonomic system and introductory links to pain and labour.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Nervous System Introduction — Diagram', description: 'Educational diagram placeholder for nervous system introduction. Labelled illustration can be added in a future update.', caption: 'Visual support for Nervous System Introduction.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'Pain is a nervous-system experience.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Nervous System Introduction.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l12',
    keyTerms: ['CNS', 'PNS', 'Sympathetic', 'Parasympathetic'],
  },

  'bnd101-l13': {
    id: 'bnd101-l13', courseId: 'bnd-101', number: 13,
    title: 'Cardiovascular System Introduction', duration: '22 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Heart, vessels, circulation and pregnancy circulatory adaptations.',
    sections: [
      { heading: 'Overview', content: 'Heart, vessels, circulation and pregnancy circulatory adaptations.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Cardiovascular System Introduction — Diagram', description: 'Educational diagram placeholder for cardiovascular system introduction. Labelled illustration can be added in a future update.', caption: 'Visual support for Cardiovascular System Introduction.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'Left ventricle = systemic pump; right ventricle = pulmonary pump.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Cardiovascular System Introduction.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l13',
    keyTerms: ['Atrium', 'Ventricle', 'Artery', 'Vein', 'Capillary'],
  },

  'bnd101-l14': {
    id: 'bnd101-l14', courseId: 'bnd-101', number: 14,
    title: 'Respiratory System Introduction', duration: '18 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Airway, alveoli, gas exchange and pregnancy oxygen demand.',
    sections: [
      { heading: 'Overview', content: 'Airway, alveoli, gas exchange and pregnancy oxygen demand.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Respiratory System Introduction — Diagram', description: 'Educational diagram placeholder for respiratory system introduction. Labelled illustration can be added in a future update.', caption: 'Visual support for Respiratory System Introduction.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'The fetus depends on maternal oxygenation.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Respiratory System Introduction.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l14',
    keyTerms: ['Alveoli', 'Trachea', 'Bronchi', 'Gas exchange'],
  },

  'bnd101-l15': {
    id: 'bnd101-l15', courseId: 'bnd-101', number: 15,
    title: 'Digestive System Introduction', duration: '18 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Digestive tract, accessory organs and pregnancy-related digestive changes.',
    sections: [
      { heading: 'Overview', content: 'Digestive tract, accessory organs and pregnancy-related digestive changes.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Digestive System Introduction — Diagram', description: 'Educational diagram placeholder for digestive system introduction. Labelled illustration can be added in a future update.', caption: 'Visual support for Digestive System Introduction.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'Absorption delivers nutrients for mother and fetus.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Digestive System Introduction.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l15',
    keyTerms: ['Stomach', 'Small intestine', 'Liver', 'Pancreas'],
  },

  'bnd101-l16': {
    id: 'bnd101-l16', courseId: 'bnd-101', number: 16,
    title: 'Urinary System Introduction', duration: '16 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Kidneys, bladder, nephron and urinary changes in pregnancy.',
    sections: [
      { heading: 'Overview', content: 'Kidneys, bladder, nephron and urinary changes in pregnancy.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Urinary System Introduction — Diagram', description: 'Educational diagram placeholder for urinary system introduction. Labelled illustration can be added in a future update.', caption: 'Visual support for Urinary System Introduction.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'Proteinuria in pregnancy needs further assessment.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Urinary System Introduction.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l16',
    keyTerms: ['Kidney', 'Bladder', 'Nephron', 'Ureter'],
  },

  'bnd101-l17': {
    id: 'bnd101-l17', courseId: 'bnd-101', number: 17,
    title: 'Reproductive System Introduction', duration: '30 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Female and male reproductive anatomy, menstrual cycle, fertilisation and implantation.',
    sections: [
      { heading: 'Overview', content: 'Female and male reproductive anatomy, menstrual cycle, fertilisation and implantation.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Reproductive System Introduction — Diagram', description: 'Educational diagram placeholder for reproductive system introduction. Labelled illustration can be added in a future update.', caption: 'Visual support for Reproductive System Introduction.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'Fertilisation usually occurs in the uterine tube; implantation in the endometrium.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Reproductive System Introduction.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l17',
    keyTerms: ['Ovary', 'Uterus', 'Cervix', 'Vagina', 'Fertilisation', 'Implantation'],
  },

  'bnd101-l18': {
    id: 'bnd101-l18', courseId: 'bnd-101', number: 18,
    title: 'Endocrine System Introduction', duration: '18 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Hormones, major glands and reproductive/pregnancy hormonal regulation.',
    sections: [
      { heading: 'Overview', content: 'Hormones, major glands and reproductive/pregnancy hormonal regulation.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Endocrine System Introduction — Diagram', description: 'Educational diagram placeholder for endocrine system introduction. Labelled illustration can be added in a future update.', caption: 'Visual support for Endocrine System Introduction.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'Oxytocin links labour contractions and milk ejection.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Endocrine System Introduction.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l18',
    keyTerms: ['Hormone', 'Pituitary', 'Oxytocin', 'Oestrogen'],
  },

  'bnd101-l19': {
    id: 'bnd101-l19', courseId: 'bnd-101', number: 19,
    title: 'Lymphatic and Immune System Introduction', duration: '16 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Lymphatics, immune defence and infection prevention in maternity care.',
    sections: [
      { heading: 'Overview', content: 'Lymphatics, immune defence and infection prevention in maternity care.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Lymphatic and Immune System Introduction — Diagram', description: 'Educational diagram placeholder for lymphatic and immune system introduction. Labelled illustration can be added in a future update.', caption: 'Visual support for Lymphatic and Immune System Introduction.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'Hand hygiene is a cornerstone of infection prevention.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Lymphatic and Immune System Introduction.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l19',
    keyTerms: ['Lymph node', 'Innate immunity', 'Adaptive immunity', 'Antibody'],
  },

  'bnd101-l20': {
    id: 'bnd101-l20', courseId: 'bnd-101', number: 20,
    title: 'Integrated Anatomical Review', duration: '25 min',
    objectives: [
      'Understand the core structures and terminology of this topic',
      'Link anatomical knowledge to clinical examination',
      'Apply concepts to midwifery practice scenarios',
    ],
    introduction: 'Comprehensive review of BND 101 concepts for midwifery practice.',
    sections: [
      { heading: 'Overview', content: 'Comprehensive review of BND 101 concepts for midwifery practice.' },
      { heading: 'Key Learning Focus', content: 'Study the structures and relationships in this lesson. Connect each concept to clinical examination and midwifery practice. Use key points and quick review to check understanding.' },
      { heading: 'Clinical Application', content: 'Apply this anatomical knowledge whenever you assess, document or explain findings related to this system or region.' },
    ],
    diagram: { title: 'Integrated Anatomical Review — Diagram', description: 'Educational diagram placeholder for integrated anatomical review. Labelled illustration can be added in a future update.', caption: 'Visual support for Integrated Anatomical Review.' },
    clinicalConnection: 'Clinical assessment and documentation in this area rely on accurate anatomical knowledge.',
    midwiferyConnection: 'Midwifery practice draws on the structures and relationships introduced here, especially where they relate to pregnancy, labour, birth and the puerperium.',
    keyPoints: [
      'Master the core structures and terminology of this topic.',
      'Link each structure to at least one clinical or midwifery action.',
      'Use directional language and surface landmarks where relevant.',
    ],
    rememberThis: 'Anatomy is the map; midwifery is the journey.',
    quickReview: [
      { q: 'What is the main focus of this lesson?', a: 'Integrated Anatomical Review.' },
      { q: 'Why does this matter for a student midwife?', a: 'It underpins safe assessment, documentation and clinical decision-making.' },
    ],
    quizId: 'quiz-bnd101-l20',
    keyTerms: ['Anatomical position', 'Body planes', 'Pelvic inlet', 'Uterus'],
  },


  /* ================================================================
     BND 103 — INTRODUCTION CHEMISTRY
     Fully authored learning pathway for Midwifery Easy Learning Center.
     Educational content for Level 100 midwifery/nursing students.
     Not an official institutional syllabus document.
     ================================================================ */

  'bnd103-l01': {
    id: 'bnd103-l01',
    courseId: 'bnd-103',
    number: 1,
    title: 'Introduction to Chemistry',
    duration: '15 min',
    objectives: [
      'Define chemistry and its main branches relevant to healthcare',
      'Explain why chemistry matters for nursing and midwifery students',
      'Distinguish pure substances from mixtures at a basic level',
      'List everyday clinical situations that depend on chemical principles',
    ],
    introduction:
      'Chemistry is the study of matter — what things are made of and how they change. For a student midwife or nurse, chemistry explains why blood has a stable pH, how medications dissolve, why electrolytes matter, and how the body uses nutrients. This lesson introduces chemistry as a practical foundation for clinical care.',
    sections: [
      {
        heading: 'What is Chemistry?',
        content:
          'Chemistry studies the composition, structure, properties and changes of matter. Matter is anything that has mass and takes up space — including the air we breathe, the water we drink, the tissues of the body and the medicines we give.\n\nBranches useful in healthcare include general chemistry (atoms, bonds, reactions), organic chemistry (carbon compounds such as carbohydrates, lipids and proteins) and biochemistry (chemical processes inside living organisms).',
      },
      {
        heading: 'Why Chemistry Matters in Midwifery and Nursing',
        content:
          'You will use chemistry ideas when you:',
        list: [
          'Interpret blood gas and electrolyte results',
          'Understand why IV fluids are formulated in specific concentrations',
          'Explain pH and acid–base balance to colleagues',
          'Recognise how pregnancy changes fluid and electrolyte needs',
          'Appreciate how drugs and nutrients work at a molecular level',
        ],
      },
      {
        heading: 'Chemistry as a Language of the Body',
        content:
          'The body is a chemical system. Digestion breaks food into molecules; respiration exchanges gases; the kidneys regulate ions; the placenta transfers nutrients. Learning the language of chemistry helps you understand physiology and pathology instead of only memorising numbers.',
      },
    ],
    terminology: [
      { term: 'Chemistry', meaning: 'Study of matter and its changes', example: 'Studying how salt dissolves in water' },
      { term: 'Matter', meaning: 'Anything with mass that occupies space', example: 'Blood, oxygen, medication tablets' },
      { term: 'Biochemistry', meaning: 'Chemistry of living organisms', example: 'How glucose is used for energy' },
    ],
    clinicalConnection:
      'Laboratory values (sodium, potassium, glucose, pH, bicarbonate) are chemical measurements. Understanding what they represent improves how you interpret results and communicate with the clinical team.',
    midwiferyConnection:
      'Pregnancy alters fluid volume, electrolyte balance and metabolic demand. Chemistry knowledge helps you recognise normal adaptation versus concerning change.',
    keyPoints: [
      'Chemistry studies matter and how it changes.',
      'Healthcare depends on chemical principles every day.',
      'Biochemistry links chemistry to body function.',
    ],
    commonMistakes: [
      {
        mistake: 'Thinking chemistry is only for the laboratory and not for the ward.',
        correction: 'Every fluid, drug, blood result and metabolic process involves chemistry.',
      },
    ],
    rememberThis:
      'Chemistry is the foundation under physiology. Master the basics early and clinical numbers will make more sense.',
    quickReview: [
      { q: 'What is chemistry?', a: 'The study of matter — its composition, properties and changes.' },
      { q: 'Name one clinical situation that depends on chemistry.', a: 'Examples: interpreting electrolytes, understanding pH, preparing solutions, drug action.' },
    ],
    quizId: 'quiz-bnd103-l01',
    keyTerms: ['Chemistry', 'Matter', 'Biochemistry'],
  },

  'bnd103-l02': {
    id: 'bnd103-l02',
    courseId: 'bnd-103',
    number: 2,
    title: 'Matter and Its Properties',
    duration: '18 min',
    objectives: [
      'Define matter and list the three common states',
      'Distinguish physical and chemical properties',
      'Give healthcare examples of solids, liquids and gases',
      'Explain why state of matter matters clinically',
    ],
    introduction:
      'Everything you touch, breathe or give as a medicine is matter. Understanding states of matter and basic properties helps you handle fluids, gases and solid medications safely and understand body processes.',
    sections: [
      {
        heading: 'States of Matter',
        content:
          'Matter commonly exists as:',
        list: [
          'Solid — fixed shape and volume (e.g. tablets, bone)',
          'Liquid — fixed volume, takes the shape of its container (e.g. blood, IV fluid, amniotic fluid)',
          'Gas — no fixed shape or volume (e.g. oxygen, carbon dioxide, anaesthetic gases)',
        ],
      },
      {
        heading: 'Physical vs Chemical Properties',
        content:
          'Physical properties can be observed without changing the identity of the substance (colour, melting point, density, solubility).\n\nChemical properties describe how a substance reacts or changes into something new (flammability, reactivity with acid, ability to oxidise).',
      },
      {
        heading: 'Clinical Relevance of State',
        content:
          'Oxygen is stored and delivered as a gas. IV fluids are liquids. Many drugs are solids that must dissolve before absorption. Body temperature and pressure affect whether substances stay dissolved or change state.',
      },
    ],
    diagram: {
      title: 'States of Matter',
      description: 'Simple comparison of solid, liquid and gas particle arrangement and clinical examples.',
      caption: 'States of matter with healthcare examples.',
    },
    clinicalConnection:
      'Knowing whether a drug is solid, liquid or gas guides storage, administration route and safety precautions (e.g. oxygen therapy).',
    midwiferyConnection:
      'Amniotic fluid, blood and breast milk are liquids. Fetal gas exchange depends on dissolved oxygen and carbon dioxide in blood.',
    keyPoints: [
      'Matter has mass and occupies space.',
      'Solids, liquids and gases differ in shape and volume behaviour.',
      'Physical properties do not change identity; chemical properties describe reactivity.',
    ],
    rememberThis:
      'Most of the body is liquid — blood, intracellular fluid and extracellular fluid. Fluid balance is chemical as well as physiological.',
    quickReview: [
      { q: 'Name the three common states of matter.', a: 'Solid, liquid and gas.' },
      { q: 'Is boiling a physical or chemical change?', a: 'Physical — water remains H₂O.' },
    ],
    quizId: 'quiz-bnd103-l02',
    keyTerms: ['Matter', 'Solid', 'Liquid', 'Gas', 'Physical property', 'Chemical property'],
  },

  'bnd103-l03': {
    id: 'bnd103-l03',
    courseId: 'bnd-103',
    number: 3,
    title: 'Elements, Compounds and Mixtures',
    duration: '16 min',
    objectives: [
      'Define element, compound and mixture',
      'Give biological examples of each',
      'Explain why pure substances differ from mixtures',
    ],
    introduction:
      'All matter is made of elements, compounds or mixtures. Blood is a mixture; water is a compound; oxygen gas is an element. These distinctions matter when you interpret lab results and understand body composition.',
    sections: [
      {
        heading: 'Elements',
        content:
          'An element is a pure substance that cannot be broken down into simpler substances by ordinary chemical means. Each element has a chemical symbol (O for oxygen, Na for sodium, K for potassium, Fe for iron).\n\nAbout 25 elements are essential for human life. The most abundant in the body include oxygen, carbon, hydrogen and nitrogen.',
      },
      {
        heading: 'Compounds',
        content:
          'A compound is formed when two or more elements combine chemically in a fixed ratio. Water (H₂O), carbon dioxide (CO₂), glucose (C₆H₁₂O₆) and sodium chloride (NaCl) are compounds. Compounds have properties different from their constituent elements.',
      },
      {
        heading: 'Mixtures',
        content:
          'A mixture contains two or more substances that are not chemically bonded. Blood, urine, air and most IV fluids are mixtures. Mixtures can usually be separated by physical methods (filtration, evaporation, centrifugation).',
      },
    ],
    clinicalConnection:
      'Serum electrolytes measure elements/ions in a complex mixture (blood). Understanding the difference helps you interpret “sodium 138 mmol/L” as a concentration of Na⁺ within plasma.',
    midwiferyConnection:
      'Amniotic fluid and breast milk are complex mixtures. Their composition changes with gestation and maternal nutrition.',
    keyPoints: [
      'Element = pure, cannot be broken down chemically.',
      'Compound = elements chemically combined in fixed ratio.',
      'Mixture = substances physically combined; composition can vary.',
    ],
    rememberThis:
      'Water is a compound (H₂O). Blood is a mixture. Oxygen gas (O₂) is an elemental form of the element oxygen.',
    quickReview: [
      { q: 'Is water an element, compound or mixture?', a: 'Compound (H₂O).' },
      { q: 'Is blood an element, compound or mixture?', a: 'Mixture.' },
    ],
    quizId: 'quiz-bnd103-l03',
    keyTerms: ['Element', 'Compound', 'Mixture', 'Symbol'],
  },

  'bnd103-l04': {
    id: 'bnd103-l04',
    courseId: 'bnd-103',
    number: 4,
    title: 'Physical and Chemical Changes',
    duration: '15 min',
    objectives: [
      'Distinguish physical and chemical changes',
      'Give clinical examples of each',
      'Recognise signs that a chemical change has occurred',
    ],
    introduction:
      'Matter can change in two main ways: physically (same substance, different form) or chemically (new substances formed). Both types of change occur constantly in the body and in clinical practice.',
    sections: [
      {
        heading: 'Physical Changes',
        content:
          'Physical changes alter appearance or state but not chemical identity. Examples: melting ice, dissolving sugar, evaporating sweat, crushing a tablet. The substance remains the same.',
      },
      {
        heading: 'Chemical Changes',
        content:
          'Chemical changes produce new substances. Signs include colour change, gas production, heat/light, or formation of a precipitate. Examples: digestion of food, combustion, rusting, metabolic reactions that release energy from glucose.',
      },
      {
        heading: 'Body Examples',
        content:
          'Digestion is largely chemical change. Dissolving a drug in water before injection is physical. Cellular respiration is chemical. Filtration of blood in the kidney involves physical separation processes.',
      },
    ],
    clinicalConnection:
      'Drug reconstitution often involves physical change (powder dissolving). Once the drug is metabolised by the liver, chemical change has occurred.',
    midwiferyConnection:
      'Uterine contractions are powered by chemical energy from ATP. Lactation involves chemical synthesis of milk components.',
    keyPoints: [
      'Physical change = same substance, different form.',
      'Chemical change = new substance(s) formed.',
      'Metabolism is a series of chemical changes.',
    ],
    rememberThis:
      'If you can get the original substance back easily (e.g. by evaporating water), the change was probably physical.',
    quickReview: [
      { q: 'Is dissolving salt in water a physical or chemical change?', a: 'Physical — salt can be recovered by evaporation.' },
      { q: 'Is digestion a physical or chemical change?', a: 'Mainly chemical — new smaller molecules are formed.' },
    ],
    quizId: 'quiz-bnd103-l04',
    keyTerms: ['Physical change', 'Chemical change', 'Metabolism'],
  },


  'bnd103-l05': {
    id: 'bnd103-l05', courseId: 'bnd-103', number: 5,
    title: 'Structure of the Atom', duration: '20 min',
    objectives: [
      'Describe the basic structure of the atom',
      'Identify protons, neutrons and electrons and their charges',
      'Explain where mass and charge are located in the atom',
    ],
    introduction: 'Atoms are the building blocks of all matter. Understanding protons, neutrons and electrons is the starting point for bonding, ions and every chemical process in the body.',
    sections: [
      { heading: 'Subatomic Particles', content: 'Atoms contain:\n• Protons — positive charge, in the nucleus, mass ≈ 1 amu\n• Neutrons — no charge, in the nucleus, mass ≈ 1 amu\n• Electrons — negative charge, orbit the nucleus, very small mass\n\nThe nucleus is tiny but contains almost all the atom’s mass. Electrons occupy the space around the nucleus.' },
      { heading: 'Neutral Atoms', content: 'In a neutral atom the number of protons equals the number of electrons, so overall charge is zero. When electrons are gained or lost, ions form (covered later).' },
      { heading: 'Why Atoms Matter Clinically', content: 'Ions such as Na⁺, K⁺, Ca²⁺ and Cl⁻ are atoms (or groups) that have gained or lost electrons. Their concentrations in blood are measured daily and are critical for nerve, muscle and fluid function.' },
    ],
    diagram: { title: 'Atomic Structure', description: 'Simple model showing nucleus (protons + neutrons) and electron shells.', caption: 'Basic atomic structure for healthcare students.' },
    clinicalConnection: 'Electrolyte panels measure charged particles (ions) derived from atoms. Understanding atomic structure explains why ions exist and why charge balance matters.',
    midwiferyConnection: 'Fetal and maternal nerve conduction, uterine muscle contraction and fluid balance all depend on ion gradients created by charged atoms.',
    keyPoints: ['Protons +, neutrons 0, electrons −', 'Nucleus holds almost all mass', 'Neutral atom: protons = electrons'],
    rememberThis: 'Change the number of electrons and you change the charge — that is how ions form.',
    quickReview: [
      { q: 'Where are protons found?', a: 'In the nucleus.' },
      { q: 'What is the charge of an electron?', a: 'Negative.' },
    ],
    quizId: 'quiz-bnd103-l05',
    keyTerms: ['Atom', 'Proton', 'Neutron', 'Electron', 'Nucleus'],
  },

  'bnd103-l06': {
    id: 'bnd103-l06', courseId: 'bnd-103', number: 6,
    title: 'Atomic Number, Mass Number and Isotopes', duration: '16 min',
    objectives: [
      'Define atomic number and mass number',
      'Explain what isotopes are',
      'Relate atomic number to element identity',
    ],
    introduction: 'Atomic number identifies the element. Mass number counts protons plus neutrons. Isotopes of the same element differ in neutron number — important in medicine for imaging and therapy.',
    sections: [
      { heading: 'Atomic Number (Z)', content: 'Atomic number = number of protons. It defines the element. Carbon always has 6 protons; oxygen always has 8. Change the proton number and you change the element.' },
      { heading: 'Mass Number (A)', content: 'Mass number = protons + neutrons. It is not the same as atomic mass on the periodic table (which is a weighted average), but it is the whole-number count used in basic calculations.' },
      { heading: 'Isotopes', content: 'Isotopes are atoms of the same element (same protons) with different numbers of neutrons. Example: carbon-12 and carbon-14. Some isotopes are radioactive and used in medical imaging (e.g. technetium-99m) or treatment.' },
    ],
    clinicalConnection: 'Radioisotopes are used in nuclear medicine scans. Understanding isotopes helps you appreciate how imaging agents work without needing to operate the equipment.',
    midwiferyConnection: 'Radiation safety principles matter when pregnant women need imaging. Knowledge of isotopes supports informed discussion of risks and benefits.',
    keyPoints: ['Atomic number = protons = element identity', 'Mass number = protons + neutrons', 'Isotopes differ in neutrons'],
    rememberThis: 'Same atomic number → same element. Different neutrons → different isotope.',
    quickReview: [
      { q: 'What does atomic number tell you?', a: 'Number of protons (and the identity of the element).' },
      { q: 'What is an isotope?', a: 'Atoms of the same element with different numbers of neutrons.' },
    ],
    quizId: 'quiz-bnd103-l06',
    keyTerms: ['Atomic number', 'Mass number', 'Isotope'],
  },

  'bnd103-l07': {
    id: 'bnd103-l07', courseId: 'bnd-103', number: 7,
    title: 'Electronic Structure', duration: '18 min',
    objectives: [
      'Describe electron shells at an introductory level',
      'Explain why outer electrons determine chemical behaviour',
      'Link electron arrangement to ion formation',
    ],
    introduction: 'Electrons are arranged in shells around the nucleus. The outermost electrons determine how an atom bonds and whether it forms ions — the basis of almost all body chemistry.',
    sections: [
      { heading: 'Electron Shells', content: 'Electrons occupy energy levels (shells). The first shell holds up to 2 electrons; the second up to 8; the third up to 8 in simple models used at this level. Atoms are most stable with full outer shells.' },
      { heading: 'Valence Electrons', content: 'Valence electrons are those in the outermost shell. They participate in bonding. Atoms tend to gain, lose or share valence electrons to achieve a full outer shell (octet rule for many elements).' },
      { heading: 'From Atoms to Ions', content: 'If an atom loses electrons it becomes a positive ion (cation). If it gains electrons it becomes a negative ion (anion). Na loses one electron → Na⁺. Cl gains one electron → Cl⁻.' },
    ],
    clinicalConnection: 'The behaviour of electrolytes in the body is the behaviour of ions — atoms that have gained or lost electrons.',
    midwiferyConnection: 'Nerve impulses and muscle contraction (including the uterus) depend on the movement of ions across membranes.',
    keyPoints: ['Outer electrons control chemistry', 'Full outer shell is stable', 'Gain/lose electrons → ions'],
    rememberThis: 'Chemistry is mostly about what the outer electrons are doing.',
    quickReview: [
      { q: 'What are valence electrons?', a: 'Electrons in the outermost shell.' },
      { q: 'How does a neutral atom become a positive ion?', a: 'By losing one or more electrons.' },
    ],
    quizId: 'quiz-bnd103-l07',
    keyTerms: ['Electron shell', 'Valence electron', 'Ion', 'Cation', 'Anion'],
  },

  'bnd103-l08': {
    id: 'bnd103-l08', courseId: 'bnd-103', number: 8,
    title: 'The Periodic Table', duration: '18 min',
    objectives: [
      'Describe the organisation of the periodic table',
      'Locate periods and groups',
      'Identify common elements important in the human body',
    ],
    introduction: 'The periodic table organises all known elements by atomic number and recurring chemical properties. It is the map of chemistry — and many of its landmarks appear in blood results and nutrition.',
    sections: [
      { heading: 'Organisation', content: 'Elements are arranged in order of increasing atomic number. Horizontal rows are periods. Vertical columns are groups (families) with similar outer-electron configurations and similar chemistry.' },
      { heading: 'Metals, Non-metals and Metalloids', content: 'Metals (left and centre) tend to lose electrons and form positive ions. Non-metals (right) tend to gain electrons or share them. Metalloids have intermediate properties.' },
      { heading: 'Elements of the Body', content: 'Major elements: O, C, H, N. Important minerals/electrolytes: Na, K, Ca, Mg, Cl, P, S, Fe, I, Zn and others. You do not need to memorise the whole table — focus on elements you meet in clinical care.' },
    ],
    diagram: { title: 'Periodic Table Overview', description: 'Simplified view highlighting major body elements and group/period structure.', caption: 'Periodic table orientation for healthcare students.' },
    clinicalConnection: 'Lab reports use element symbols (Na, K, Ca, Cl). Knowing they are elements — and that they exist as ions in the body — makes results more meaningful.',
    midwiferyConnection: 'Iron (Fe) is critical in pregnancy for haemoglobin. Iodine (I) is needed for thyroid hormones. Calcium (Ca) supports maternal and fetal bone health.',
    keyPoints: ['Ordered by atomic number', 'Groups share chemical behaviour', 'Focus on clinically relevant elements'],
    rememberThis: 'Na, K, Ca, Cl, Mg, Fe, I — learn these symbols early; they appear constantly in maternity care.',
    quickReview: [
      { q: 'What does a group on the periodic table share?', a: 'Similar outer-electron configuration and chemical properties.' },
      { q: 'Name four elements abundant in the human body.', a: 'Oxygen, carbon, hydrogen, nitrogen (and many minerals).' },
    ],
    quizId: 'quiz-bnd103-l08',
    keyTerms: ['Periodic table', 'Period', 'Group', 'Metal', 'Non-metal'],
  },

  'bnd103-l09': {
    id: 'bnd103-l09', courseId: 'bnd-103', number: 9,
    title: 'Periodic Trends — Introduction', duration: '15 min',
    objectives: [
      'Describe basic trends in atomic size and reactivity at an introductory level',
      'Relate trends to ion formation',
    ],
    introduction: 'Properties of elements change in predictable ways across the periodic table. Even a simple awareness of trends helps explain why sodium forms Na⁺ and chlorine forms Cl⁻.',
    sections: [
      { heading: 'Atomic Size', content: 'Atomic size generally decreases across a period (left to right) and increases down a group. More protons pull electrons closer; more shells make atoms larger.' },
      { heading: 'Tendency to Form Ions', content: 'Metals on the left readily lose electrons (form cations). Non-metals on the right readily gain electrons (form anions). This underpins ionic bonding and the electrolytes in body fluids.' },
      { heading: 'Why Trends Matter', content: 'You do not need advanced trend calculations. You do need to know that sodium and potassium (Group 1) form +1 ions, magnesium and calcium form +2 ions, and chlorine forms a −1 ion — because those are the ions measured in blood.' },
    ],
    clinicalConnection: 'Electrolyte behaviour in the body reflects periodic trends: Group 1 metals form +1 ions; Group 2 form +2 ions.',
    midwiferyConnection: 'Understanding why Na⁺ and K⁺ behave similarly (both +1) but are carefully regulated separately helps when interpreting electrolyte results in pregnancy.',
    keyPoints: ['Size decreases across a period, increases down a group', 'Left side → cations; right side → anions', 'Know the common body ions'],
    rememberThis: 'Na⁺ and K⁺ are both +1, but the body keeps their concentrations very different — that difference drives nerve and muscle function.',
    quickReview: [
      { q: 'Do atoms get larger or smaller across a period (left to right)?', a: 'Generally smaller.' },
      { q: 'What ion does chlorine typically form?', a: 'Cl⁻ (gains one electron).' },
    ],
    quizId: 'quiz-bnd103-l09',
    keyTerms: ['Periodic trend', 'Cation', 'Anion'],
  },


  'bnd103-l10': {
    id: 'bnd103-l10', courseId: 'bnd-103', number: 10,
    title: 'Chemical Bonds', duration: '16 min',
    objectives: [
      'Define a chemical bond',
      'Distinguish ionic and covalent bonding at an introductory level',
      'Explain why bonding creates stable compounds',
    ],
    introduction: 'Atoms bond to achieve more stable electron arrangements. The two main types you need are ionic bonds (electron transfer) and covalent bonds (electron sharing). Both are essential in body chemistry.',
    sections: [
      { heading: 'Why Atoms Bond', content: 'Atoms are more stable with full outer electron shells. Bonding is the process of achieving that stability by transferring or sharing electrons.' },
      { heading: 'Two Main Bond Types', content: '• Ionic bond — electrons are transferred from one atom to another, creating oppositely charged ions that attract.\n• Covalent bond — electrons are shared between atoms.\n\nMany compounds involve a mixture of character, but the simple classification is a useful starting point.' },
      { heading: 'Bonds in the Body', content: 'Ionic compounds dissolve into ions in body fluids (e.g. NaCl → Na⁺ + Cl⁻). Covalent bonds hold organic molecules together (water, glucose, proteins, DNA).' },
    ],
    clinicalConnection: 'When salt dissolves in plasma it separates into ions. Those ions conduct electricity and participate in physiological processes — that is why electrolytes matter.',
    midwiferyConnection: 'The structure of hormones, enzymes and membrane channels depends on covalent bonding; their function often depends on ionic gradients.',
    keyPoints: ['Bonds create stability', 'Ionic = transfer; covalent = share', 'Body uses both extensively'],
    rememberThis: 'Ionic compounds often dissolve into free ions in water; covalent molecules usually stay intact.',
    quickReview: [
      { q: 'What is an ionic bond?', a: 'A bond formed by transfer of electrons, creating ions that attract.' },
      { q: 'What is a covalent bond?', a: 'A bond formed by sharing electrons between atoms.' },
    ],
    quizId: 'quiz-bnd103-l10',
    keyTerms: ['Chemical bond', 'Ionic bond', 'Covalent bond'],
  },

  'bnd103-l11': {
    id: 'bnd103-l11', courseId: 'bnd-103', number: 11,
    title: 'Ionic Bonds', duration: '16 min',
    objectives: [
      'Describe how ionic bonds form',
      'Give examples of ionic compounds important in healthcare',
      'Explain what happens when ionic compounds dissolve in water',
    ],
    introduction: 'Ionic bonds form when electrons transfer from metals to non-metals, producing cations and anions. In the body, dissolved ions are the electrolytes you measure and manage.',
    sections: [
      { heading: 'Formation of Ionic Bonds', content: 'A metal atom loses one or more electrons (becomes a cation). A non-metal atom gains those electrons (becomes an anion). Opposite charges attract, forming an ionic compound (e.g. NaCl).' },
      { heading: 'Common Body Ions', content: 'Na⁺, K⁺, Ca²⁺, Mg²⁺, Cl⁻, HCO₃⁻, HPO₄²⁻. These are not optional details — they appear on almost every electrolyte panel.' },
      { heading: 'Dissolving in Water', content: 'Many ionic compounds dissociate in water into free ions. That is why saline solution contains Na⁺ and Cl⁻ ions rather than intact NaCl molecules.' },
    ],
    diagram: { title: 'Ionic Bonding and Dissociation', description: 'Electron transfer forming Na⁺ and Cl⁻, and dissociation in water.', caption: 'Ionic bond formation and behaviour in solution.' },
    clinicalConnection: 'Hyponatraemia, hyperkalaemia and other electrolyte imbalances are disorders of ionic concentrations. Treatment aims to restore safe ion levels.',
    midwiferyConnection: 'Pregnancy changes total body sodium and water. Interpreting Na⁺ and K⁺ results requires understanding that these are free ions in solution.',
    keyPoints: ['Electron transfer creates ions', 'Opposite charges attract', 'Many ionic compounds dissociate in water'],
    rememberThis: 'When you see Na⁺ on a lab form, you are looking at a sodium ion — an atom that has lost one electron.',
    quickReview: [
      { q: 'How does sodium become Na⁺?', a: 'It loses one electron.' },
      { q: 'What happens to NaCl in water?', a: 'It dissociates into Na⁺ and Cl⁻ ions.' },
    ],
    quizId: 'quiz-bnd103-l11',
    keyTerms: ['Ionic bond', 'Cation', 'Anion', 'Dissociation', 'Electrolyte'],
  },

  'bnd103-l12': {
    id: 'bnd103-l12', courseId: 'bnd-103', number: 12,
    title: 'Covalent Bonds', duration: '16 min',
    objectives: [
      'Describe how covalent bonds form',
      'Give examples of covalent molecules in the body',
      'Contrast covalent and ionic behaviour in water',
    ],
    introduction: 'Covalent bonds form when atoms share electrons. Water, oxygen gas, carbon dioxide, glucose and the backbone of proteins and DNA are held together by covalent bonds.',
    sections: [
      { heading: 'Sharing Electrons', content: 'In a covalent bond, atoms share one or more pairs of electrons so that each achieves a more stable outer shell. Single, double and triple bonds share one, two or three pairs respectively.' },
      { heading: 'Important Covalent Molecules', content: 'H₂O (water), O₂ (oxygen), CO₂ (carbon dioxide), C₆H₁₂O₆ (glucose). These molecules do not break into ions when they dissolve or mix in body fluids (though water can ionise slightly).' },
      { heading: 'Polar vs Non-polar (Intro)', content: 'If electrons are shared unequally, the bond is polar (as in water). Polarity explains why water is an excellent solvent for ionic and polar substances — critical for transporting nutrients and wastes.' },
    ],
    clinicalConnection: 'Glucose remains a whole molecule in blood until cells take it up and metabolise it. Oxygen is carried partly dissolved and mostly bound to haemoglobin — both depend on covalent molecular structure.',
    midwiferyConnection: 'Fetal oxygen supply depends on O₂ molecules and maternal–fetal gas exchange. Water’s covalent polar structure makes it the universal solvent of body fluids.',
    keyPoints: ['Covalent = electron sharing', 'Water, gases and organic molecules are covalent', 'Polarity makes water a good solvent'],
    rememberThis: 'Ionic compounds often become ions in water; covalent molecules usually stay as molecules.',
    quickReview: [
      { q: 'How do covalent bonds form?', a: 'By sharing electron pairs between atoms.' },
      { q: 'Is water ionic or covalent?', a: 'Covalent (polar).' },
    ],
    quizId: 'quiz-bnd103-l12',
    keyTerms: ['Covalent bond', 'Polar', 'Molecule'],
  },

  'bnd103-l13': {
    id: 'bnd103-l13', courseId: 'bnd-103', number: 13,
    title: 'Chemical Formulas and Naming Compounds', duration: '18 min',
    objectives: [
      'Read simple chemical formulas',
      'Interpret subscripts in formulas',
      'Recognise common compound names used in healthcare',
    ],
    introduction: 'Chemical formulas are a compact language. H₂O, CO₂, NaCl, C₆H₁₂O₆ and NaHCO₃ appear in textbooks and sometimes on labels. Learning to read them prevents confusion.',
    sections: [
      { heading: 'Reading Formulas', content: 'Symbols show elements. Subscripts show how many atoms of each element are in one unit of the compound. H₂O = 2 hydrogen + 1 oxygen. CO₂ = 1 carbon + 2 oxygen. NaCl = 1 sodium + 1 chlorine.' },
      { heading: 'Common Healthcare Formulas', content: 'NaCl (sodium chloride / salt), NaHCO₃ (sodium bicarbonate), C₆H₁₂O₆ (glucose), H₂CO₃ (carbonic acid), CO₂ (carbon dioxide), O₂ (oxygen).' },
      { heading: 'Naming Basics', content: 'Ionic compounds are often named as metal + non-metal with “-ide” (sodium chloride). Many polyatomic ions have specific names (bicarbonate, phosphate, sulphate) that you will meet clinically.' },
    ],
    clinicalConnection: 'Drug labels and fluid bags use chemical names and formulas. Accurate reading prevents medication errors.',
    midwiferyConnection: 'Sodium bicarbonate may be discussed in acid–base management. Glucose formulas appear in nutrition and diabetes education.',
    keyPoints: ['Subscript = number of atoms', 'Learn common clinical formulas', 'Names follow patterns'],
    rememberThis: 'H₂O is water, not “H2O the drug.” Context and correct reading matter.',
    quickReview: [
      { q: 'How many oxygen atoms are in CO₂?', a: 'Two.' },
      { q: 'What is the formula for sodium chloride?', a: 'NaCl.' },
    ],
    quizId: 'quiz-bnd103-l13',
    keyTerms: ['Chemical formula', 'Subscript', 'Sodium chloride', 'Glucose'],
  },

  'bnd103-l14': {
    id: 'bnd103-l14', courseId: 'bnd-103', number: 14,
    title: 'Chemical Reactions and Equations', duration: '18 min',
    objectives: [
      'Define a chemical reaction',
      'Identify reactants and products',
      'Explain conservation of mass at a basic level',
      'Relate reactions to metabolism',
    ],
    introduction: 'A chemical reaction rearranges atoms into new substances. Metabolism is a vast network of reactions. Understanding the idea of reactants, products and balanced change is enough at this level.',
    sections: [
      { heading: 'Reactants and Products', content: 'Reactants are starting materials. Products are substances formed. In respiration, glucose and oxygen are reactants; carbon dioxide and water are products (simplified).' },
      { heading: 'Chemical Equations', content: 'Equations show reactants on the left and products on the right. Example: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (cellular respiration overview). Atoms are conserved — the same numbers appear on both sides when balanced.' },
      { heading: 'Types (Overview)', content: 'Reactions can combine substances, break them apart, or exchange parts. You do not need to master every classification yet — recognise that the body constantly runs synthesis and breakdown reactions.' },
    ],
    clinicalConnection: 'Drug metabolism is a series of chemical reactions, mainly in the liver. Understanding that drugs are chemically altered explains duration of action and some interactions.',
    midwiferyConnection: 'Labour requires continuous ATP production through metabolic reactions. Fetal growth depends on synthetic reactions building new tissue.',
    keyPoints: ['Reactions produce new substances', 'Reactants → products', 'Atoms are conserved'],
    rememberThis: 'Metabolism = controlled chemical reactions that keep the mother and fetus alive and growing.',
    quickReview: [
      { q: 'What are reactants?', a: 'The starting substances in a chemical reaction.' },
      { q: 'What does a chemical equation show?', a: 'Reactants on the left and products on the right.' },
    ],
    quizId: 'quiz-bnd103-l14',
    keyTerms: ['Chemical reaction', 'Reactant', 'Product', 'Equation', 'Metabolism'],
  },


  'bnd103-l15': {
    id: 'bnd103-l15', courseId: 'bnd-103', number: 15,
    title: 'Acids, Bases and pH', duration: '22 min',
    objectives: [
      'Define acid, base and pH at an introductory level',
      'Explain the pH scale',
      'Describe the normal pH of blood and why it matters',
      'Relate acid–base concepts to pregnancy and clinical care',
    ],
    introduction: 'Acids release hydrogen ions (H⁺); bases accept them. pH measures how acidic or alkaline a solution is. Blood pH is tightly controlled because enzyme function and cell life depend on it.',
    sections: [
      { heading: 'Acids and Bases', content: 'In simple terms:\n• Acid — substance that increases H⁺ concentration in solution (sour, pH < 7).\n• Base (alkali) — substance that decreases H⁺ concentration or increases OH⁻ (bitter, slippery, pH > 7).\n• Neutral — pH 7 (pure water at standard conditions).' },
      { heading: 'The pH Scale', content: 'pH runs from 0 (strongly acidic) to 14 (strongly alkaline). Each whole-number step is a tenfold change in H⁺ concentration. Blood is normally about 7.35–7.45 — slightly alkaline. Values outside this range are dangerous.' },
      { heading: 'Buffers', content: 'Buffers resist changes in pH. The bicarbonate buffer system is especially important in blood. The lungs and kidneys help maintain acid–base balance by adjusting CO₂ and bicarbonate.' },
      { heading: 'Clinical Context', content: 'Acidosis (pH too low) and alkalosis (pH too high) can be respiratory or metabolic in origin. You will meet arterial blood gas interpretation later; this lesson gives the chemical foundation.' },
    ],
    diagram: { title: 'pH Scale', description: 'Scale from 0 to 14 with common examples (gastric acid, blood, soap) and the narrow normal blood range highlighted.', caption: 'pH scale with clinical reference points.' },
    clinicalConnection: 'Arterial blood gas results include pH, PaCO₂ and bicarbonate. Understanding that pH reflects H⁺ concentration helps you interpret the numbers.',
    midwiferyConnection: 'Pregnancy can affect acid–base balance. Labour and inadequate ventilation can cause respiratory acidosis. Understanding pH supports safe maternal assessment.',
    keyPoints: [
      'Acids increase H⁺; bases decrease H⁺ or increase OH⁻',
      'Blood pH is normally 7.35–7.45',
      'Buffers, lungs and kidneys protect pH',
    ],
    commonMistakes: [
      { mistake: 'Thinking neutral pH (7) is the same as normal blood pH.', correction: 'Normal blood is slightly alkaline (about 7.4), not exactly 7.' },
    ],
    rememberThis: 'A small change in blood pH is a big deal — the scale is logarithmic and the body works in a narrow window.',
    quickReview: [
      { q: 'What is the approximate normal pH of blood?', a: '7.35–7.45.' },
      { q: 'Does an acid raise or lower pH?', a: 'Lower pH (more acidic).' },
    ],
    quizId: 'quiz-bnd103-l15',
    keyTerms: ['Acid', 'Base', 'pH', 'Buffer', 'Acidosis', 'Alkalosis'],
  },

  'bnd103-l16': {
    id: 'bnd103-l16', courseId: 'bnd-103', number: 16,
    title: 'Solutions, Solutes and Solvents', duration: '16 min',
    objectives: [
      'Define solution, solute and solvent',
      'Give clinical examples of solutions',
      'Explain why water is the main solvent in the body',
    ],
    introduction: 'Almost every fluid you give or measure is a solution. Understanding solute, solvent and solution is essential for safe fluid therapy and for interpreting concentrations.',
    sections: [
      { heading: 'Definitions', content: '• Solution — homogeneous mixture of two or more substances.\n• Solvent — the substance present in greater amount (usually water in the body).\n• Solute — the substance dissolved in the solvent.\n\nExample: in normal saline, water is the solvent and sodium chloride is the solute.' },
      { heading: 'Aqueous Solutions', content: 'When water is the solvent, the solution is aqueous. Body fluids (plasma, interstitial fluid, intracellular fluid) are aqueous solutions containing many solutes: ions, glucose, proteins, urea and more.' },
      { heading: 'Solubility', content: 'Solubility is how much solute can dissolve in a given amount of solvent at a given temperature. Temperature and the nature of solute and solvent affect solubility.' },
    ],
    clinicalConnection: 'IV fluids are carefully formulated solutions. Knowing that “0.9% sodium chloride” means a specific amount of NaCl dissolved in water helps you understand fluid labels.',
    midwiferyConnection: 'Amniotic fluid and breast milk are complex aqueous solutions. Maternal plasma composition changes in pregnancy.',
    keyPoints: ['Solution = solute + solvent', 'Water is the body\'s main solvent', 'Most clinical fluids are aqueous solutions'],
    rememberThis: 'If it is dissolved evenly throughout and does not settle, it is a solution.',
    quickReview: [
      { q: 'In saline, what is the solvent?', a: 'Water.' },
      { q: 'What is a solute?', a: 'The substance dissolved in the solvent.' },
    ],
    quizId: 'quiz-bnd103-l16',
    keyTerms: ['Solution', 'Solute', 'Solvent', 'Aqueous'],
  },

  'bnd103-l17': {
    id: 'bnd103-l17', courseId: 'bnd-103', number: 17,
    title: 'Concentration and Dilution', duration: '18 min',
    objectives: [
      'Explain what concentration means',
      'Recognise common concentration expressions used clinically',
      'Describe dilution in simple terms',
      'Stress the importance of accuracy without giving unsafe preparation protocols',
    ],
    introduction: 'Concentration tells you how much solute is present in a given amount of solution. Clinical care depends on correct concentrations — of electrolytes, glucose, drugs and IV fluids. This lesson builds conceptual understanding, not procedural recipes.',
    sections: [
      { heading: 'What Concentration Means', content: 'Concentration = amount of solute ÷ amount of solution (or solvent). Higher concentration means more solute particles in the same volume.' },
      { heading: 'Common Expressions', content: 'You will see:\n• mmol/L (millimoles per litre) — standard for many electrolytes\n• % (percentage) — e.g. 0.9% sodium chloride\n• mg/mL or mg/L — mass per volume\nExact calculation methods are taught in clinical skills and pharmacology; here the goal is to understand the idea.' },
      { heading: 'Dilution', content: 'Dilution reduces concentration by adding more solvent. The amount of solute stays the same; the volume increases, so concentration falls. Accurate dilution is critical for safety — always follow institutional protocols and double-check calculations.' },
    ],
    clinicalConnection: 'Lab results report concentrations. Fluid prescriptions specify concentrations. Misreading units (e.g. mmol/L vs mg/dL) can lead to serious errors.',
    midwiferyConnection: 'Glucose concentrations in maternal blood and IV fluids, and electrolyte concentrations in pregnancy, are clinically important. Conceptual clarity supports safe practice.',
    keyPoints: [
      'Concentration = solute per amount of solution',
      'Units matter — always read them',
      'Dilution lowers concentration by adding solvent',
    ],
    commonMistakes: [
      { mistake: 'Ignoring units when comparing concentrations.', correction: 'Always check whether values are in mmol/L, mg/dL or another unit before interpreting.' },
    ],
    rememberThis: 'Concentration is a ratio. Changing the volume without changing the solute changes the concentration.',
    quickReview: [
      { q: 'What does concentration measure?', a: 'How much solute is present in a given amount of solution.' },
      { q: 'What does dilution do to concentration?', a: 'Decreases it by adding solvent.' },
    ],
    quizId: 'quiz-bnd103-l17',
    keyTerms: ['Concentration', 'Dilution', 'mmol/L', 'Percentage'],
  },

  'bnd103-l18': {
    id: 'bnd103-l18', courseId: 'bnd-103', number: 18,
    title: 'Organic Compounds in the Human Body', duration: '22 min',
    objectives: [
      'Define organic compounds in a healthcare context',
      'Describe carbohydrates, lipids, proteins and nucleic acids at an introductory level',
      'Relate each class to body function and midwifery care',
    ],
    introduction: 'Organic compounds contain carbon and are the molecules of life. Carbohydrates, lipids, proteins and nucleic acids build tissues, store energy, catalyse reactions and carry genetic information.',
    sections: [
      { heading: 'Carbohydrates', content: 'Sugars and starches. Glucose is the primary fuel for cells, especially the brain. Glycogen is the storage form in liver and muscle. In pregnancy, glucose regulation is critical for mother and fetus.' },
      { heading: 'Lipids', content: 'Fats, oils and related compounds. They store energy, form cell membranes (phospholipids) and act as steroid hormones. Essential fatty acids must come from the diet.' },
      { heading: 'Proteins', content: 'Made of amino acids. They form enzymes, structural tissues, antibodies, transporters and many hormones. Adequate protein intake supports fetal growth and maternal tissue maintenance.' },
      { heading: 'Nucleic Acids', content: 'DNA and RNA store and transmit genetic information. They direct protein synthesis. Understanding them at a basic level prepares you for genetics and congenital conditions education.' },
    ],
    clinicalConnection: 'Blood glucose, lipid profiles and protein status are routine clinical measurements. Enzyme levels in blood tests reflect protein function.',
    midwiferyConnection: 'Gestational diabetes is a disorder of carbohydrate metabolism. Protein and energy needs rise in pregnancy. Fetal development depends on correct nucleic acid and protein synthesis.',
    keyPoints: [
      'Carbohydrates = energy',
      'Lipids = energy stores and membranes',
      'Proteins = structure and function',
      'Nucleic acids = genetic information',
    ],
    rememberThis: 'Glucose, fats, proteins and DNA are all organic chemistry in action inside every patient you care for.',
    quickReview: [
      { q: 'What is the main energy sugar in blood?', a: 'Glucose.' },
      { q: 'What are proteins made of?', a: 'Amino acids.' },
    ],
    quizId: 'quiz-bnd103-l18',
    keyTerms: ['Organic compound', 'Carbohydrate', 'Lipid', 'Protein', 'Nucleic acid', 'Glucose'],
  },

  'bnd103-l19': {
    id: 'bnd103-l19', courseId: 'bnd-103', number: 19,
    title: 'Water, Electrolytes and Minerals', duration: '20 min',
    objectives: [
      'Explain why water is essential for body function',
      'Define electrolytes and list major ones',
      'Describe basic roles of key minerals in pregnancy and health',
    ],
    introduction: 'Water is the main component of the body and the solvent for almost all chemical processes. Electrolytes are ions that conduct electricity and drive nerve, muscle and fluid balance. Minerals support structure and metabolism.',
    sections: [
      { heading: 'Water', content: 'Water is a polar covalent molecule and an excellent solvent. It transports nutrients and wastes, participates in reactions, stabilises temperature and provides a medium for cells. Dehydration and fluid overload both disrupt chemistry and physiology.' },
      { heading: 'Electrolytes', content: 'Major electrolytes: Na⁺, K⁺, Ca²⁺, Mg²⁺, Cl⁻, HCO₃⁻, phosphate. They maintain fluid balance, membrane potentials and pH. Sodium largely controls extracellular fluid volume; potassium is critical for heart and muscle function.' },
      { heading: 'Minerals in Pregnancy', content: 'Iron — haemoglobin and oxygen transport.\nCalcium — bones, teeth, muscle and clotting.\nIodine — thyroid hormones.\nZinc and others — enzyme function and immunity.\nRequirements often increase in pregnancy; dietary assessment and supplementation follow clinical guidelines.' },
    ],
    clinicalConnection: 'Fluid balance charts, electrolyte panels and mineral supplements are everyday clinical tools grounded in this chemistry.',
    midwiferyConnection: 'Pregnancy expands blood volume and changes electrolyte handling. Iron-deficiency anaemia is common. Calcium and iodine status affect maternal and fetal health.',
    keyPoints: [
      'Water is the universal body solvent',
      'Electrolytes are free ions in solution',
      'Key minerals support oxygen transport, bone, thyroid and enzymes',
    ],
    rememberThis: 'Na⁺ outside cells, K⁺ inside cells — the gradient is life. Water and electrolytes move together.',
    quickReview: [
      { q: 'Name three major electrolytes.', a: 'Examples: Na⁺, K⁺, Ca²⁺, Cl⁻, Mg²⁺, HCO₃⁻.' },
      { q: 'Why is iron important in pregnancy?', a: 'It is needed for haemoglobin and oxygen transport to mother and fetus.' },
    ],
    quizId: 'quiz-bnd103-l19',
    keyTerms: ['Water', 'Electrolyte', 'Sodium', 'Potassium', 'Iron', 'Calcium', 'Iodine'],
  },

  'bnd103-l20': {
    id: 'bnd103-l20', courseId: 'bnd-103', number: 20,
    title: 'Chemistry in Nursing and Midwifery', duration: '18 min',
    objectives: [
      'Integrate major BND 103 concepts into clinical thinking',
      'List chemistry topics most relevant to daily midwifery practice',
      'Commit to linking lab values and fluid therapy back to chemical principles',
    ],
    introduction: 'This final lesson ties the course together. Chemistry is not an isolated subject — it is the reason blood has a stable pH, why electrolytes are measured, how drugs dissolve and how the fetus receives oxygen and nutrients.',
    sections: [
      { heading: 'Core Themes Revisited', content: 'Matter and atoms → ions and molecules.\nBonding → structure of water, gases and organic compounds.\nReactions → metabolism.\nAcids, bases and pH → blood gas interpretation.\nSolutions and concentration → fluids and lab results.\nOrganic compounds → nutrition and physiology.\nWater and electrolytes → fluid balance and nerve/muscle function.' },
      { heading: 'Daily Clinical Links', content: 'When you see a sodium result, think ion and fluid balance.\nWhen you see pH, think hydrogen ion concentration and buffers.\nWhen you hang an IV fluid, think solute, solvent and concentration.\nWhen you discuss glucose, think carbohydrate chemistry and energy.\nWhen you encourage iron-rich foods, think haemoglobin and oxygen.' },
      { heading: 'Moving Forward', content: 'You do not need to become a chemist. You need to stay curious about the chemical reasons behind the numbers and treatments you use. Revisit these lessons whenever a lab value or fluid order feels abstract — the chemistry will make it concrete.' },
    ],
    clinicalConnection: 'Every electrolyte panel, blood gas, glucose check and IV prescription is applied chemistry.',
    midwiferyConnection: 'Safe maternity care rests on understanding maternal and fetal physiology — and physiology rests on chemistry.',
    keyPoints: [
      'Chemistry underpins physiology and clinical numbers',
      'Focus on ions, pH, solutions, organic molecules and water',
      'Keep linking practice back to principles',
    ],
    rememberThis: 'Structure and charge explain function. When you understand the chemistry, the clinical picture becomes clearer.',
    quickReview: [
      { q: 'Name three chemistry topics essential for midwifery practice.', a: 'Examples: pH/acid–base, electrolytes, solutions/concentration, organic compounds, water balance.' },
      { q: 'Why does chemistry matter on the ward?', a: 'It explains lab values, fluid therapy, drug behaviour and body function.' },
    ],
    quizId: 'quiz-bnd103-l20',
    keyTerms: ['Electrolyte', 'pH', 'Solution', 'Metabolism', 'Fluid balance'],
  },


  /* ================================================================
     BND 105 — INTRODUCTION TO PHYSICS
     Fully authored learning pathway for Midwifery Easy Learning Center.
     Educational content for Level 100 midwifery/nursing students.
     Not an official institutional syllabus document.
     ================================================================ */

  'bnd105-l01': {
    id: 'bnd105-l01', courseId: 'bnd-105', number: 1,
    title: 'Introduction to Physics and Its Importance in Healthcare',
    duration: '15 min',
    objectives: [
      'Define physics in simple terms',
      'Explain why physics matters for nursing and midwifery students',
      'List clinical situations that depend on physical principles',
    ],
    introduction: 'Physics is the study of matter, energy, motion and forces. For a student midwife, physics explains blood pressure, fluid flow, body temperature, sound used in fetal heart monitoring, light in examination, and electrical safety around equipment.',
    sections: [
      { heading: 'What is Physics?', content: 'Physics studies how the physical world works — motion, forces, energy, heat, waves, electricity and more. It provides the rules behind measurement, pressure, flow and many devices used in clinical care.' },
      { heading: 'Why Physics Matters in Midwifery', content: 'You use physics when you:', list: [
        'Measure blood pressure (fluid pressure)',
        'Assess fetal heart sounds (sound waves)',
        'Position a mother safely (force, balance, pressure)',
        'Understand IV fluid flow (pressure and resistance)',
        'Use electronic monitors and ensure electrical safety',
        'Interpret temperature and heat loss in newborns',
      ]},
      { heading: 'Physics as a Foundation', content: 'You do not need advanced mathematics. You need clear concepts that link to real care: why pressure matters in blood vessels, why surface area affects heat loss, why correct positioning reduces injury risk.' },
    ],
    clinicalConnection: 'Every blood pressure reading, every infusion, every temperature check and every monitor relies on physical principles.',
    midwiferyConnection: 'Labour positioning, maternal–fetal circulation, newborn thermoregulation and auscultation all rest on physics.',
    keyPoints: ['Physics studies matter, energy, motion and forces', 'Clinical care depends on physical principles daily', 'Focus on concepts linked to patient safety'],
    rememberThis: 'Physics is not abstract on the ward — it is blood pressure, fluid flow, heat and safe movement.',
    quickReview: [
      { q: 'What does physics study?', a: 'Matter, energy, motion, forces and related phenomena.' },
      { q: 'Name one midwifery task that depends on physics.', a: 'Examples: BP measurement, fetal heart auscultation, positioning, IV flow, temperature care.' },
    ],
    quizId: 'quiz-bnd105-l01',
    keyTerms: ['Physics', 'Force', 'Energy', 'Pressure'],
  },

  'bnd105-l02': {
    id: 'bnd105-l02', courseId: 'bnd-105', number: 2,
    title: 'Physical Quantities, Units and Measurement',
    duration: '18 min',
    objectives: [
      'Distinguish base and derived quantities',
      'Use SI units for length, mass, time, temperature and others',
      'Explain why accurate measurement matters clinically',
    ],
    introduction: 'Safe care depends on accurate measurement. Physics provides standard quantities and units so that a blood pressure, weight or temperature means the same thing everywhere.',
    sections: [
      { heading: 'Physical Quantities', content: 'A physical quantity is a property that can be measured. Base quantities include length, mass, time, electric current and temperature. Derived quantities are calculated from base ones (e.g. speed = distance/time, pressure = force/area).' },
      { heading: 'SI Units', content: 'The International System (SI) standardises units:\n• Length — metre (m)\n• Mass — kilogram (kg)\n• Time — second (s)\n• Temperature — kelvin (K); clinically we often use °C\n• Pressure — pascal (Pa); clinically mmHg is common for blood pressure', list: [] },
      { heading: 'Clinical Measurement', content: 'Weight, height, temperature, blood pressure, fluid volumes and time intervals must be measured carefully. Wrong units or wrong technique lead to wrong decisions.' },
    ],
    clinicalConnection: 'Drug doses, fluid rates and vital signs all depend on correct units and accurate measurement.',
    midwiferyConnection: 'Maternal weight, fundal height, fetal heart rate and blood pressure are core measurements in antenatal and intrapartum care.',
    keyPoints: ['Use standard units', 'Derived quantities come from base quantities', 'Accuracy protects patients'],
    rememberThis: 'A number without a unit is incomplete. Always check units on monitors and charts.',
    quickReview: [
      { q: 'What is the SI unit of mass?', a: 'Kilogram (kg).' },
      { q: 'Why do units matter clinically?', a: 'Wrong units can lead to dangerous dosing or misinterpretation of results.' },
    ],
    quizId: 'quiz-bnd105-l02',
    keyTerms: ['SI unit', 'Quantity', 'Measurement', 'Metre', 'Kilogram'],
  },

  'bnd105-l03': {
    id: 'bnd105-l03', courseId: 'bnd-105', number: 3,
    title: 'Scalars, Vectors and Basic Mathematical Concepts',
    duration: '16 min',
    objectives: [
      'Define scalar and vector quantities',
      'Give healthcare examples of each',
      'Use simple ratios and averages relevant to clinical data',
    ],
    introduction: 'Some quantities have only size (scalars). Others have size and direction (vectors). Knowing the difference helps you interpret motion, force and flow.',
    sections: [
      { heading: 'Scalars', content: 'Scalars have magnitude only: mass, temperature, time, energy, speed (in everyday use), blood glucose concentration.' },
      { heading: 'Vectors', content: 'Vectors have magnitude and direction: force, velocity, acceleration, displacement. Direction matters — a force upward is not the same as a force downward.' },
      { heading: 'Simple Maths for Care', content: 'You will use addition, averages, percentages and ratios. Example: average blood pressure over readings; percentage of fluid absorbed; ratio of constituents in a mixture. Always double-check calculations that affect patients.' },
    ],
    clinicalConnection: 'Force and pressure are vector-related ideas; temperature and mass are scalars. Understanding which is which avoids confusion when reading equipment manuals or physiology texts.',
    midwiferyConnection: 'When assisting movement or assessing posture, direction of force matters for safety of mother and midwife.',
    keyPoints: ['Scalar = magnitude only', 'Vector = magnitude + direction', 'Check clinical calculations carefully'],
    rememberThis: 'Speed is how fast; velocity is how fast and in which direction.',
    quickReview: [
      { q: 'Is temperature a scalar or a vector?', a: 'Scalar.' },
      { q: 'Is force a scalar or a vector?', a: 'Vector.' },
    ],
    quizId: 'quiz-bnd105-l03',
    keyTerms: ['Scalar', 'Vector', 'Magnitude', 'Direction'],
  },

  'bnd105-l04': {
    id: 'bnd105-l04', courseId: 'bnd-105', number: 4,
    title: 'Motion, Speed, Velocity and Acceleration',
    duration: '18 min',
    objectives: [
      'Define speed, velocity and acceleration',
      'Relate motion concepts to body movement and clinical observation',
    ],
    introduction: 'Motion is change of position. Speed, velocity and acceleration describe how that change happens. These ideas appear in blood flow, breathing movements and safe handling of patients.',
    sections: [
      { heading: 'Speed and Velocity', content: 'Speed is distance travelled per unit time (scalar). Velocity is displacement per unit time and includes direction (vector). Average speed = total distance ÷ total time.' },
      { heading: 'Acceleration', content: 'Acceleration is change of velocity per unit time. Speeding up, slowing down or changing direction all involve acceleration.' },
      { heading: 'Clinical Links', content: 'Blood moves with varying speed through vessels of different sizes. Respiratory rate describes cyclic motion of the chest. Sudden acceleration or deceleration in trauma transfers force to tissues.' },
    ],
    diagram: { title: 'Speed vs Velocity', description: 'Simple comparison: speed as magnitude only; velocity with an arrow showing direction.', caption: 'Speed is scalar; velocity is vector.' },
    clinicalConnection: 'Flow rates (mL/hour) describe how fast fluid moves. Understanding rate helps you monitor infusions and urine output.',
    midwiferyConnection: 'Fetal movements, maternal mobility in labour and controlled descent of the presenting part all involve motion concepts.',
    keyPoints: ['Speed = distance/time', 'Velocity includes direction', 'Acceleration = change of velocity/time'],
    rememberThis: 'Same speed in opposite directions means different velocities.',
    quickReview: [
      { q: 'What is the difference between speed and velocity?', a: 'Velocity includes direction; speed does not.' },
      { q: 'What is acceleration?', a: 'Change of velocity per unit time.' },
    ],
    quizId: 'quiz-bnd105-l04',
    keyTerms: ['Speed', 'Velocity', 'Acceleration', 'Motion'],
  },

  'bnd105-l05': {
    id: 'bnd105-l05', courseId: 'bnd-105', number: 5,
    title: 'Force, Mass, Weight and Pressure',
    duration: '20 min',
    objectives: [
      'Define force, mass, weight and pressure',
      'State the relationship pressure = force/area',
      'Apply pressure concepts to blood pressure and body positioning',
    ],
    introduction: 'Force causes acceleration or deformation. Mass is the amount of matter; weight is the gravitational force on that mass. Pressure is force spread over an area — one of the most important ideas in clinical physics.',
    sections: [
      { heading: 'Force, Mass and Weight', content: 'Force is a push or pull (unit: newton, N). Mass is measured in kilograms. Weight = mass × gravitational field strength (on Earth ≈ 9.8 N/kg). Mass is the same everywhere; weight depends on gravity.' },
      { heading: 'Pressure', content: 'Pressure = force ÷ area. Same force on a smaller area produces higher pressure. That is why a sharp needle pierces skin easily and why a wide cuff spreads force during BP measurement.' },
      { heading: 'Blood Pressure', content: 'Blood pressure is the pressure exerted by blood on vessel walls. It is reported in mmHg. Systolic and diastolic values reflect force during heart contraction and relaxation.' },
      { heading: 'Positioning and Pressure', content: 'Prolonged pressure on a small area of skin can cause pressure injury. Spreading force over larger area (good positioning, pressure-relieving surfaces) reduces risk.' },
    ],
    diagram: { title: 'Pressure = Force / Area', description: 'Same force on large vs small area showing different pressure; link to cuff and needle examples.', caption: 'Pressure depends on force and the area it acts on.' },
    clinicalConnection: 'Blood pressure cuffs, injection technique and pressure-area care all depend on force and area.',
    midwiferyConnection: 'Maternal BP monitoring is fundamental. Positioning in labour and the postnatal period affects pressure on skin, pelvis and major vessels (e.g. avoiding aortocaval compression).',
    keyPoints: ['Pressure = force/area', 'Weight ≠ mass', 'Blood pressure is fluid pressure in arteries'],
    commonMistakes: [
      { mistake: 'Using mass and weight as if they were identical.', correction: 'Mass is amount of matter (kg); weight is gravitational force (N).' },
    ],
    rememberThis: 'Increase area → decrease pressure for the same force. That protects skin and guides cuff choice.',
    quickReview: [
      { q: 'What is the formula for pressure?', a: 'Pressure = force ÷ area.' },
      { q: 'Why does a sharp needle need less force to pierce skin?', a: 'Small area → high pressure for the same force.' },
    ],
    quizId: 'quiz-bnd105-l05',
    keyTerms: ['Force', 'Mass', 'Weight', 'Pressure', 'Blood pressure'],
  },


  'bnd105-l06': {
    id: 'bnd105-l06', courseId: 'bnd-105', number: 6,
    title: 'Work, Energy and Power', duration: '18 min',
    objectives: [
      'Define work, energy and power in simple physical terms',
      'Distinguish kinetic and potential energy',
      'Relate energy concepts to body metabolism and clinical effort',
    ],
    introduction: 'Work is done when a force moves an object. Energy is the capacity to do work. Power is the rate of doing work. The body constantly converts chemical energy into movement, heat and physiological work.',
    sections: [
      { heading: 'Work', content: 'In physics, work = force × distance moved in the direction of the force. If there is no movement, no work is done in this technical sense (holding a heavy object still requires muscular effort but does zero physical work).' },
      { heading: 'Energy', content: 'Forms include kinetic (motion), potential (stored, e.g. gravitational or chemical), thermal (heat) and electrical. Energy is conserved — it changes form but is not destroyed.' },
      { heading: 'Power', content: 'Power = work ÷ time (or energy transferred ÷ time). Unit: watt (W). A higher power means energy is transferred faster.' },
      { heading: 'Body and Clinical Links', content: 'Muscles do work when moving the body or assisting a patient. Metabolism releases chemical energy from food. Labour requires sustained energy transfer; exhaustion is a clinical concern.' },
    ],
    clinicalConnection: 'Understanding energy balance supports nutrition assessment and recognition of fatigue in patients and staff.',
    midwiferyConnection: 'Labour is physically demanding. Supporting maternal nutrition, rest and efficient positioning helps conserve energy for birth.',
    keyPoints: ['Work needs force and movement', 'Energy changes form but is conserved', 'Power is rate of energy transfer'],
    rememberThis: 'Chemical energy in food → kinetic energy of movement + heat. That is the body as an energy system.',
    quickReview: [
      { q: 'What is required for physical work to be done?', a: 'A force acting through a distance.' },
      { q: 'What is power?', a: 'The rate of doing work or transferring energy.' },
    ],
    quizId: 'quiz-bnd105-l06',
    keyTerms: ['Work', 'Energy', 'Power', 'Kinetic energy', 'Potential energy'],
  },

  'bnd105-l07': {
    id: 'bnd105-l07', courseId: 'bnd-105', number: 7,
    title: 'Heat and Temperature', duration: '18 min',
    objectives: [
      'Distinguish heat and temperature',
      'Describe heat transfer by conduction, convection and radiation',
      'Apply concepts to fever, hypothermia and newborn care',
    ],
    introduction: 'Temperature measures how hot or cold something is. Heat is energy transferred because of a temperature difference. Controlling heat loss and gain is critical for mothers and especially for newborns.',
    sections: [
      { heading: 'Temperature vs Heat', content: 'Temperature is a measure of average kinetic energy of particles (°C or K). Heat is energy in transit due to temperature difference (joules). A large object and a small object at the same temperature contain different amounts of thermal energy.' },
      { heading: 'Heat Transfer', content: '• Conduction — through direct contact\n• Convection — through fluid movement (air or liquid)\n• Radiation — through electromagnetic waves (no medium needed)\nEvaporation of sweat also removes heat from the body.' },
      { heading: 'Clinical Application', content: 'Fever is elevated body temperature. Hypothermia is dangerously low temperature. Newborns lose heat rapidly because of large surface-area-to-mass ratio and limited ability to shiver.' },
    ],
    diagram: { title: 'Heat Transfer Methods', description: 'Conduction, convection, radiation and evaporation with body/clinical examples.', caption: 'Four ways heat moves — all relevant to patient care.' },
    clinicalConnection: 'Thermometers, warming devices and fever management all depend on heat and temperature principles.',
    midwiferyConnection: 'Immediate drying, skin-to-skin contact and covering the head reduce newborn heat loss. Maternal fever in labour requires assessment and action.',
    keyPoints: ['Temperature ≠ heat', 'Heat moves by conduction, convection, radiation and evaporation', 'Newborns are highly vulnerable to heat loss'],
    rememberThis: 'Dry, cover and keep the newborn in skin-to-skin contact — you are controlling conduction, convection, radiation and evaporation.',
    quickReview: [
      { q: 'What is the difference between heat and temperature?', a: 'Temperature measures hotness; heat is energy transferred due to temperature difference.' },
      { q: 'Name three ways heat is transferred.', a: 'Conduction, convection, radiation (and evaporation from the body).' },
    ],
    quizId: 'quiz-bnd105-l07',
    keyTerms: ['Heat', 'Temperature', 'Conduction', 'Convection', 'Radiation', 'Evaporation'],
  },

  'bnd105-l08': {
    id: 'bnd105-l08', courseId: 'bnd-105', number: 8,
    title: 'States of Matter and Changes of State', duration: '16 min',
    objectives: [
      'Describe solid, liquid and gas in terms of particle behaviour',
      'Explain melting, boiling, condensation and evaporation',
      'Link changes of state to clinical examples',
    ],
    introduction: 'Matter changes state when energy is added or removed. Evaporation of sweat cools the body; condensation appears on cold surfaces; sterilisation and humidification involve controlled changes of state.',
    sections: [
      { heading: 'Particle Model', content: 'Solids — particles closely packed, vibrate in place.\nLiquids — particles close but can move past each other.\nGases — particles far apart, move freely.' },
      { heading: 'Changes of State', content: 'Melting (solid→liquid), freezing (liquid→solid), boiling/evaporation (liquid→gas), condensation (gas→liquid). Energy is absorbed or released during these changes without necessarily changing temperature during the transition.' },
      { heading: 'Clinical Links', content: 'Sweat evaporation cools skin. Humidified oxygen prevents airway drying. Steam sterilisation uses high-temperature vapour. Understanding state changes supports safe equipment use and patient comfort.' },
    ],
    clinicalConnection: 'Respiratory therapy and infection-control processes often involve controlled humidity and temperature.',
    midwiferyConnection: 'Amniotic fluid is liquid; water vapour in exhaled air is gas. Thermoregulation involves evaporation from maternal and neonatal skin.',
    keyPoints: ['States differ by particle arrangement and motion', 'Energy drives changes of state', 'Evaporation is an important cooling mechanism'],
    rememberThis: 'Evaporation requires energy — that energy comes from the body, which is why sweating cools you.',
    quickReview: [
      { q: 'What happens to particles when a liquid becomes a gas?', a: 'They move further apart and more freely.' },
      { q: 'How does sweating cool the body?', a: 'Evaporation of sweat removes heat energy from the skin.' },
    ],
    quizId: 'quiz-bnd105-l08',
    keyTerms: ['Solid', 'Liquid', 'Gas', 'Evaporation', 'Condensation', 'Melting'],
  },

  'bnd105-l09': {
    id: 'bnd105-l09', courseId: 'bnd-105', number: 9,
    title: 'Density, Buoyancy and Fluid Principles', duration: '18 min',
    objectives: [
      'Define density and buoyancy',
      'Explain why objects float or sink',
      'Relate fluid principles to body fluids and clinical observations',
    ],
    introduction: 'Density is mass per unit volume. Buoyancy is the upward force a fluid exerts on an immersed object. These ideas help explain floating, sinking and the behaviour of body fluids.',
    sections: [
      { heading: 'Density', content: 'Density = mass ÷ volume. SI unit: kg/m³. Water has a density of about 1000 kg/m³. Substances denser than the fluid they are in tend to sink; less dense tend to float.' },
      { heading: 'Buoyancy', content: 'Archimedes’ principle: the upward buoyant force equals the weight of fluid displaced. This is why a person can float in water and why dense instruments sink in a bowl of antiseptic.' },
      { heading: 'Body Fluids', content: 'Blood and other body fluids have characteristic densities. Changes in composition (e.g. dehydration, haemorrhage) can alter properties that affect measurement and physiology.' },
    ],
    clinicalConnection: 'Urine specific gravity is related to density and reflects concentration. Understanding density supports interpretation of some lab and bedside tests.',
    midwiferyConnection: 'Amniotic fluid volume and density concepts appear in discussions of oligohydramnios and polyhydramnios, though clinical diagnosis uses ultrasound and other methods.',
    keyPoints: ['Density = mass/volume', 'Buoyancy = weight of fluid displaced', 'Relative density explains floating and sinking'],
    rememberThis: 'If an object is denser than the fluid, it sinks; if less dense, it floats.',
    quickReview: [
      { q: 'What is the formula for density?', a: 'Density = mass ÷ volume.' },
      { q: 'What does Archimedes’ principle state?', a: 'Buoyant force equals the weight of fluid displaced.' },
    ],
    quizId: 'quiz-bnd105-l09',
    keyTerms: ['Density', 'Buoyancy', 'Fluid', 'Specific gravity'],
  },

  'bnd105-l10': {
    id: 'bnd105-l10', courseId: 'bnd-105', number: 10,
    title: 'Pressure in Fluids and the Human Body', duration: '20 min',
    objectives: [
      'Explain fluid pressure and factors that affect it',
      'Relate fluid pressure to blood pressure and IV flow',
      'Describe hydrostatic pressure in simple terms',
    ],
    introduction: 'Fluids exert pressure in all directions. In the body, blood pressure, cerebrospinal fluid pressure and amniotic fluid pressure are all fluid pressures. Gravity and depth affect pressure in a column of fluid.',
    sections: [
      { heading: 'Fluid Pressure Basics', content: 'Pressure in a fluid increases with depth because of the weight of fluid above. Pressure acts equally in all directions at a given depth (Pascal’s principle underlies hydraulic systems).' },
      { heading: 'Blood Pressure Revisited', content: 'Arterial blood pressure is generated by the heart and influenced by vessel diameter, blood volume and viscosity. Measurement with a cuff uses external pressure to briefly stop and then detect flow.' },
      { heading: 'IV Fluids and Height', content: 'The height of an IV bag above the entry site affects the pressure driving the fluid. Higher bag → greater hydrostatic pressure → potentially faster flow (other factors also matter: tubing resistance, viscosity, cannula size).' },
      { heading: 'Positioning', content: 'Lying flat versus sitting changes hydrostatic pressure in vessels. Aortocaval compression in supine late pregnancy is partly a pressure and vessel-compression problem.' },
    ],
    diagram: { title: 'Fluid Pressure and Depth', description: 'Column of fluid showing pressure increasing with depth; clinical link to BP and IV height.', caption: 'Pressure in a fluid increases with depth.' },
    clinicalConnection: 'Understanding pressure helps you interpret BP readings, manage infusions and recognise posture-related cardiovascular effects.',
    midwiferyConnection: 'Maternal position affects venous return and blood pressure. Amniotic fluid pressure plays a role in labour mechanics.',
    keyPoints: ['Fluid pressure increases with depth', 'BP is fluid pressure in arteries', 'IV height influences driving pressure'],
    rememberThis: 'Raise the bag, raise the pressure — but always follow prescribed rates and safety checks.',
    quickReview: [
      { q: 'Does fluid pressure increase or decrease with depth?', a: 'Increase.' },
      { q: 'Why does IV bag height matter?', a: 'Greater height increases hydrostatic pressure driving the fluid.' },
    ],
    quizId: 'quiz-bnd105-l10',
    keyTerms: ['Fluid pressure', 'Hydrostatic pressure', 'Blood pressure', 'Pascal’s principle'],
  },


  'bnd105-l11': {
    id: 'bnd105-l11', courseId: 'bnd-105', number: 11,
    title: 'Waves and Their Properties', duration: '16 min',
    objectives: [
      'Define a wave and its basic properties',
      'Distinguish transverse and longitudinal waves',
      'Introduce frequency, wavelength and amplitude',
    ],
    introduction: 'Waves transfer energy without permanently transferring matter. Sound, light and some monitoring technologies depend on wave behaviour.',
    sections: [
      { heading: 'What is a Wave?', content: 'A wave is a disturbance that transfers energy through a medium or space. Particles of the medium may oscillate, but the wave moves energy from place to place.' },
      { heading: 'Types of Waves', content: '• Transverse — oscillation perpendicular to direction of travel (e.g. light, waves on a string).\n• Longitudinal — oscillation parallel to direction of travel (e.g. sound in air).' },
      { heading: 'Key Properties', content: '• Amplitude — maximum displacement (related to intensity/loudness for sound).\n• Wavelength — distance between consecutive similar points.\n• Frequency — number of cycles per second (hertz, Hz).\n• Speed = frequency × wavelength.' },
    ],
    diagram: { title: 'Wave Properties', description: 'Labelled wave showing amplitude, wavelength and direction of travel for transverse and longitudinal examples.', caption: 'Amplitude, wavelength and frequency describe a wave.' },
    clinicalConnection: 'Ultrasound imaging uses high-frequency sound waves. Understanding frequency and wavelength supports basic appreciation of how imaging works.',
    midwiferyConnection: 'Fetal heart auscultation and cardiotocography rely on detecting rhythmic signals; ultrasound is central to antenatal assessment.',
    keyPoints: ['Waves transfer energy', 'Frequency in Hz; wavelength is a distance', 'Sound is longitudinal; light is transverse'],
    rememberThis: 'Higher frequency → more cycles per second. In sound, we often perceive this as higher pitch.',
    quickReview: [
      { q: 'What does a wave transfer?', a: 'Energy.' },
      { q: 'Is sound a transverse or longitudinal wave in air?', a: 'Longitudinal.' },
    ],
    quizId: 'quiz-bnd105-l11',
    keyTerms: ['Wave', 'Frequency', 'Wavelength', 'Amplitude', 'Transverse', 'Longitudinal'],
  },

  'bnd105-l12': {
    id: 'bnd105-l12', courseId: 'bnd-105', number: 12,
    title: 'Sound and Hearing', duration: '16 min',
    objectives: [
      'Describe how sound is produced and transmitted',
      'Relate frequency to pitch and amplitude to loudness',
      'Connect sound to clinical auscultation and fetal monitoring',
    ],
    introduction: 'Sound is a longitudinal wave produced by vibrating objects and transmitted through a medium (usually air). Hearing converts these waves into neural signals. Auscultation is applied acoustics.',
    sections: [
      { heading: 'Production and Transmission', content: 'Vibrating objects create compressions and rarefactions in air. Sound needs a medium — it does not travel through vacuum. Speed of sound is faster in solids and liquids than in air.' },
      { heading: 'Pitch and Loudness', content: 'Pitch relates mainly to frequency. Loudness relates mainly to amplitude (and intensity). Clinical sounds (heart, lungs, fetal heart) have characteristic patterns.' },
      { heading: 'Auscultation', content: 'Stethoscopes channel sound from the body to the ear. Pinard stethoscopes and Doppler devices are used to hear the fetal heart. Quiet environment and correct placement improve detection.' },
    ],
    clinicalConnection: 'Heart and lung sounds guide assessment. Understanding that sound intensity falls with distance and obstacles improves technique.',
    midwiferyConnection: 'Fetal heart rate monitoring by auscultation or Doppler is a core midwifery skill grounded in sound physics.',
    keyPoints: ['Sound needs a medium', 'Frequency ↔ pitch; amplitude ↔ loudness', 'Auscultation is clinical use of sound'],
    rememberThis: 'No air (or other medium) → no sound. That is why space is silent.',
    quickReview: [
      { q: 'What type of wave is sound in air?', a: 'Longitudinal.' },
      { q: 'What does a stethoscope do?', a: 'Channels body sounds to the listener’s ears.' },
    ],
    quizId: 'quiz-bnd105-l12',
    keyTerms: ['Sound', 'Pitch', 'Loudness', 'Auscultation', 'Frequency'],
  },

  'bnd105-l13': {
    id: 'bnd105-l13', courseId: 'bnd-105', number: 13,
    title: 'Light, Reflection and Refraction', duration: '16 min',
    objectives: [
      'Describe light as an electromagnetic wave',
      'Explain reflection and refraction simply',
      'Link light principles to vision and clinical examination',
    ],
    introduction: 'Light allows us to see and is used in examination, phototherapy and many instruments. Reflection and refraction explain mirrors, lenses and why objects look bent in water.',
    sections: [
      { heading: 'Nature of Light', content: 'Light is an electromagnetic wave and also behaves as particles (photons). It travels extremely fast and does not need a medium. Visible light is a small part of the electromagnetic spectrum.' },
      { heading: 'Reflection and Refraction', content: 'Reflection — light bounces off a surface (mirrors).\nRefraction — light bends when entering a different medium (air to water, air to eye lens).\nLenses use refraction to focus images on the retina or in optical instruments.' },
      { heading: 'Clinical Links', content: 'Good lighting is essential for examination. Phototherapy for neonatal jaundice uses specific wavelengths of light. Eye care and visual assessment depend on optical principles.' },
    ],
    clinicalConnection: 'Examination lamps, ophthalmoscopes and phototherapy units are applications of light physics.',
    midwiferyConnection: 'Newborn eye care, jaundice assessment and phototherapy are part of postnatal midwifery practice.',
    keyPoints: ['Light is electromagnetic', 'Reflection bounces; refraction bends', 'Lenses focus by refraction'],
    rememberThis: 'Phototherapy works because certain wavelengths of light help break down bilirubin — physics serving newborn care.',
    quickReview: [
      { q: 'What is refraction?', a: 'Bending of light as it passes from one medium into another.' },
      { q: 'Does light need a medium to travel?', a: 'No.' },
    ],
    quizId: 'quiz-bnd105-l13',
    keyTerms: ['Light', 'Reflection', 'Refraction', 'Lens', 'Phototherapy'],
  },

  'bnd105-l14': {
    id: 'bnd105-l14', courseId: 'bnd-105', number: 14,
    title: 'Electricity and Electrical Safety', duration: '20 min',
    objectives: [
      'Define current, voltage and resistance at an introductory level',
      'State a simple form of Ohm’s law',
      'List key electrical safety principles in healthcare settings',
    ],
    introduction: 'Electricity powers monitors, lights, infusion pumps and life-support equipment. Understanding basic terms and safety rules protects patients and staff.',
    sections: [
      { heading: 'Basic Terms', content: '• Current (I) — flow of electric charge (amperes, A).\n• Voltage (V) — electrical “pressure” or potential difference (volts, V).\n• Resistance (R) — opposition to current (ohms, Ω).\nOhm’s law (simple form): V = I × R.' },
      { heading: 'Circuits', content: 'A complete path is needed for continuous current. Breaks in the path stop the flow. Fuses and circuit breakers interrupt excessive current to prevent damage and fire.' },
      { heading: 'Electrical Safety', content: '• Keep liquids away from electrical equipment.\n• Do not use damaged cables or plugs.\n• Follow institutional policies for equipment checks.\n• Be especially careful with patients who have reduced skin resistance (wet skin, invasive lines).\n• Know emergency procedures for electrical incidents.' },
    ],
    diagram: { title: 'Simple Circuit and Safety', description: 'Basic circuit with source, load and switch; safety icons for water, damaged cables and earthing awareness.', caption: 'Current needs a complete path; safety prevents harm.' },
    clinicalConnection: 'Monitors, defibrillators and pumps are electrical devices. Safe use is a professional responsibility.',
    midwiferyConnection: 'Labour wards and theatres are equipment-rich. Electrical safety protects mother, baby and staff.',
    keyPoints: ['V = I × R', 'Current needs a complete circuit', 'Water + electricity = danger'],
    commonMistakes: [
      { mistake: 'Ignoring frayed cables because the device still works.', correction: 'Damaged cables are a serious hazard — report and replace.' },
    ],
    rememberThis: 'If it is wet, sparking or damaged, do not use it — report it.',
    quickReview: [
      { q: 'What is Ohm’s law in simple form?', a: 'V = I × R.' },
      { q: 'Why is water a risk near electrical equipment?', a: 'Water can conduct electricity and increase shock risk.' },
    ],
    quizId: 'quiz-bnd105-l14',
    keyTerms: ['Current', 'Voltage', 'Resistance', 'Circuit', 'Ohm’s law'],
  },

  'bnd105-l15': {
    id: 'bnd105-l15', courseId: 'bnd-105', number: 15,
    title: 'Magnetism and Electromagnetic Principles', duration: '15 min',
    objectives: [
      'Describe basic magnetic behaviour',
      'Introduce electromagnetic induction simply',
      'Link electromagnetism to common medical technologies',
    ],
    introduction: 'Magnets attract certain metals and have north and south poles. Moving charges and changing magnetic fields link electricity and magnetism — the basis of many devices including some imaging systems.',
    sections: [
      { heading: 'Magnets and Fields', content: 'Like poles repel; unlike poles attract. A magnetic field is the region around a magnet where magnetic forces act. Earth itself acts as a large magnet.' },
      { heading: 'Electromagnetism (Intro)', content: 'Electric currents produce magnetic fields. Changing magnetic fields can induce electric currents. This relationship is used in generators, motors and transformers.' },
      { heading: 'Healthcare Links', content: 'MRI uses strong magnetic fields and radio waves for imaging. Many motors in pumps and fans use electromagnetic principles. Staff must follow MRI safety rules (no ferromagnetic objects).' },
    ],
    clinicalConnection: 'MRI safety is mandatory knowledge for anyone near the scanner. Ferromagnetic objects can become projectiles.',
    midwiferyConnection: 'Pregnant women may need imaging; understanding that MRI does not use ionising radiation (unlike X-ray/CT) supports informed discussion, while still following specialist guidance.',
    keyPoints: ['Opposite poles attract', 'Currents create magnetic fields', 'MRI safety is non-negotiable'],
    rememberThis: 'No metal into the MRI room unless it is confirmed MRI-safe.',
    quickReview: [
      { q: 'What happens when like magnetic poles face each other?', a: 'They repel.' },
      { q: 'Why is MRI safety strict about metal?', a: 'Strong magnets can pull ferromagnetic objects violently.' },
    ],
    quizId: 'quiz-bnd105-l15',
    keyTerms: ['Magnetism', 'Magnetic field', 'Electromagnetism', 'MRI'],
  },


  'bnd105-l16': {
    id: 'bnd105-l16', courseId: 'bnd-105', number: 16,
    title: 'Physics of the Human Body', duration: '18 min',
    objectives: [
      'Apply force, pressure and leverage ideas to body mechanics',
      'Explain centre of gravity and balance in simple terms',
      'Relate physics to safe patient handling and posture',
    ],
    introduction: 'The body is a mechanical system of levers, forces and balances. Understanding basic body mechanics protects mothers and midwives from injury and improves positioning in labour.',
    sections: [
      { heading: 'Levers in the Body', content: 'Bones act as levers; joints as fulcrums; muscles provide force. Different lever classes trade force against speed and range of movement. You do not need to classify every joint — recognise that posture and technique change mechanical advantage.' },
      { heading: 'Centre of Gravity and Balance', content: 'Centre of gravity is the balance point of the body’s weight. Pregnancy shifts the centre of gravity forward, affecting posture and increasing strain on the lower back. A wider base of support improves stability.' },
      { heading: 'Safe Handling', content: 'Bend at the hips and knees, keep loads close to the body, avoid twisting, and use team lifts when needed. These rules reduce force on the spine by improving leverage and reducing moment arms.' },
    ],
    clinicalConnection: 'Back injury is a major occupational risk in healthcare. Physics-based handling technique is part of professional self-care.',
    midwiferyConnection: 'Assisting mothers to change position in labour, supporting legs, and helping with transfers all require good body mechanics from the midwife.',
    keyPoints: ['Body uses levers', 'Pregnancy shifts centre of gravity', 'Good technique reduces injury risk'],
    rememberThis: 'Keep the load close, bend your knees, do not twist — physics protects your back.',
    quickReview: [
      { q: 'What happens to the centre of gravity in pregnancy?', a: 'It tends to shift forward.' },
      { q: 'Why keep a load close to the body when lifting?', a: 'It reduces the turning effect (moment) on the spine.' },
    ],
    quizId: 'quiz-bnd105-l16',
    keyTerms: ['Lever', 'Centre of gravity', 'Balance', 'Body mechanics'],
  },

  'bnd105-l17': {
    id: 'bnd105-l17', courseId: 'bnd-105', number: 17,
    title: 'Physics of Respiration and Gas Exchange', duration: '18 min',
    objectives: [
      'Describe pressure changes that drive breathing',
      'Explain diffusion of gases in simple terms',
      'Link physics to maternal and fetal oxygenation',
    ],
    introduction: 'Breathing is a pressure-driven process. Gas exchange in the lungs depends on diffusion — movement of molecules from higher to lower concentration. These principles underpin oxygen therapy and respiratory assessment.',
    sections: [
      { heading: 'Pressure and Breathing', content: 'Inspiration: chest volume increases → lung pressure falls below atmospheric → air flows in.\nExpiration: chest volume decreases → lung pressure rises → air flows out.\nThe diaphragm and intercostal muscles power these volume changes.' },
      { heading: 'Diffusion', content: 'Gases move from regions of higher partial pressure to lower partial pressure. Oxygen diffuses from alveoli into blood; carbon dioxide diffuses from blood into alveoli.' },
      { heading: 'Maternal–Fetal Oxygen', content: 'The fetus depends on maternal oxygenation and placental transfer. Maternal breathing problems, anaemia or reduced placental function can compromise fetal oxygen supply.' },
    ],
    diagram: { title: 'Breathing and Diffusion', description: 'Chest volume/pressure cycle and alveolar gas exchange arrows for O₂ and CO₂.', caption: 'Pressure drives airflow; diffusion drives gas exchange.' },
    clinicalConnection: 'Respiratory rate, effort and oxygen saturation reflect the physics and physiology of gas movement.',
    midwiferyConnection: 'Supporting effective maternal breathing in labour and recognising respiratory distress are essential skills.',
    keyPoints: ['Volume change → pressure change → airflow', 'Diffusion moves O₂ and CO₂', 'Fetus depends on maternal oxygenation'],
    rememberThis: 'Air flows from high pressure to low pressure — that is why expanding the chest draws air in.',
    quickReview: [
      { q: 'What causes air to flow into the lungs?', a: 'Lung pressure falling below atmospheric pressure when chest volume increases.' },
      { q: 'How do oxygen molecules enter the blood?', a: 'By diffusion from higher to lower partial pressure.' },
    ],
    quizId: 'quiz-bnd105-l17',
    keyTerms: ['Pressure', 'Diffusion', 'Inspiration', 'Expiration', 'Partial pressure'],
  },

  'bnd105-l18': {
    id: 'bnd105-l18', courseId: 'bnd-105', number: 18,
    title: 'Physics of Blood Flow and Circulation', duration: '18 min',
    objectives: [
      'Relate pressure, flow and resistance in blood vessels',
      'Explain why vessel diameter strongly affects flow',
      'Connect physics to blood pressure and haemorrhage response',
    ],
    introduction: 'Blood flows because the heart creates a pressure difference. Resistance in vessels opposes flow. Small changes in vessel radius have large effects on resistance — a key idea in cardiovascular physiology.',
    sections: [
      { heading: 'Pressure and Flow', content: 'Flow increases when the pressure difference increases and when resistance decreases. The heart raises arterial pressure; veins return blood at lower pressure.' },
      { heading: 'Resistance and Diameter', content: 'Resistance rises sharply as vessels narrow. Vasoconstriction increases resistance and can raise blood pressure; vasodilation does the opposite. Atherosclerosis and compression also affect resistance.' },
      { heading: 'Clinical Links', content: 'Blood pressure measurement, shock (inadequate flow to tissues), and the effect of haemorrhage (reduced volume → reduced pressure) are all rooted in these relationships.' },
    ],
    clinicalConnection: 'Interpreting BP, pulse and signs of shock requires understanding pressure and flow.',
    midwiferyConnection: 'Haemorrhage is a leading cause of maternal mortality. Rapid recognition that falling volume reduces pressure and flow drives emergency response.',
    keyPoints: ['Flow depends on pressure difference and resistance', 'Narrow vessels → high resistance', 'Volume loss threatens pressure and perfusion'],
    rememberThis: 'A little narrowing causes a big rise in resistance — vessel diameter is powerful.',
    quickReview: [
      { q: 'What two main factors determine blood flow?', a: 'Pressure difference and resistance.' },
      { q: 'What happens to resistance when a vessel narrows?', a: 'Resistance increases (strongly).' },
    ],
    quizId: 'quiz-bnd105-l18',
    keyTerms: ['Flow', 'Resistance', 'Blood pressure', 'Perfusion'],
  },

  'bnd105-l19': {
    id: 'bnd105-l19', courseId: 'bnd-105', number: 19,
    title: 'Physics Behind Common Healthcare Equipment', duration: '18 min',
    objectives: [
      'Identify physical principles behind common devices',
      'Explain basic ideas behind BP monitors, thermometers, ultrasound and electrical devices',
      'Stress correct use and safety without providing device-specific protocols',
    ],
    introduction: 'Monitors, pumps, thermometers and imaging devices are applied physics. Knowing the principle helps you use equipment intelligently and recognise when readings may be unreliable.',
    sections: [
      { heading: 'Blood Pressure Devices', content: 'Manual sphygmomanometers use cuff pressure and auscultation or detection of flow return. Automated devices use oscillometric methods. Correct cuff size is a pressure/area issue — wrong size → wrong reading.' },
      { heading: 'Temperature Devices', content: 'Digital and infrared thermometers measure temperature via electronic sensors or emitted radiation. Technique and site affect accuracy.' },
      { heading: 'Ultrasound', content: 'High-frequency sound waves reflect from tissue boundaries. Timing and intensity of echoes build an image. Gel improves coupling by reducing air gaps (sound needs a medium).' },
      { heading: 'Electrical Devices', content: 'Infusion pumps, CTG machines and monitors convert electrical signals into displays. Power supply, alarms and sensor contact all matter for reliable data.' },
    ],
    clinicalConnection: 'If a reading does not match the clinical picture, check technique, cuff size, sensor placement and equipment — physics and method both matter.',
    midwiferyConnection: 'CTG, Doppler, BP monitors and thermometers are daily tools. Understanding principles supports better troubleshooting.',
    keyPoints: ['Cuff size affects BP accuracy', 'Ultrasound needs a coupling medium', 'Question readings that do not fit the patient'],
    rememberThis: 'Wrong cuff size is a common cause of wrong blood pressure — check the fit.',
    quickReview: [
      { q: 'Why is ultrasound gel used?', a: 'To improve sound transmission by reducing air between probe and skin.' },
      { q: 'Why does cuff size matter?', a: 'Incorrect area/force relationship gives inaccurate pressure readings.' },
    ],
    quizId: 'quiz-bnd105-l19',
    keyTerms: ['Sphygmomanometer', 'Ultrasound', 'Thermometer', 'Monitor'],
  },

  'bnd105-l20': {
    id: 'bnd105-l20', courseId: 'bnd-105', number: 20,
    title: 'Applications of Physics in Nursing and Midwifery', duration: '18 min',
    objectives: [
      'Integrate major BND 105 concepts into clinical thinking',
      'List physics topics most relevant to daily midwifery practice',
      'Commit to linking measurements and equipment back to physical principles',
    ],
    introduction: 'This final lesson consolidates the course. Physics is present in every blood pressure check, every position change, every temperature measurement and every monitor alarm.',
    sections: [
      { heading: 'Core Themes Revisited', content: 'Measurement and units → trustworthy data.\nForce and pressure → BP, positioning, pressure care.\nEnergy and heat → metabolism, thermoregulation.\nFluids → IV flow, blood flow, amniotic fluid context.\nWaves and sound → auscultation, ultrasound.\nLight → examination, phototherapy.\nElectricity → equipment safety.\nBody mechanics → safe handling.' },
      { heading: 'Daily Practice Links', content: 'When BP is unexpected — check cuff, position, technique.\nWhen a newborn is cold — think conduction, convection, radiation, evaporation.\nWhen assisting movement — think levers, centre of gravity, keep load close.\nWhen using electrical devices — think safety and complete circuits.\nWhen listening to the fetal heart — think sound transmission.' },
      { heading: 'Moving Forward', content: 'You do not need to become a physicist. You need to stay curious about why equipment and physiology behave as they do. Revisit these lessons when a reading or device feels mysterious — the physics will often clarify it.' },
    ],
    clinicalConnection: 'Safe, accurate care is applied physics as much as applied biology.',
    midwiferyConnection: 'Confident midwives use physical principles to protect mothers, babies and themselves.',
    keyPoints: [
      'Physics underpins measurement, pressure, heat, flow, sound and safety',
      'Link every device and vital sign back to a principle',
      'Protect yourself with good body mechanics',
    ],
    rememberThis: 'Measurement, pressure, heat, flow and safety — master these physical ideas and clinical tools make more sense.',
    quickReview: [
      { q: 'Name three physics topics essential for midwifery practice.', a: 'Examples: pressure/BP, heat/thermoregulation, sound/auscultation, electricity safety, body mechanics.' },
      { q: 'Why does physics matter on the labour ward?', a: 'It explains measurements, equipment, positioning, fluid flow and safety.' },
    ],
    quizId: 'quiz-bnd105-l20',
    keyTerms: ['Pressure', 'Heat', 'Flow', 'Sound', 'Electrical safety', 'Body mechanics'],
  },


  /* ================================================================
     BND 107 — HUMAN PHYSIOLOGY 1
     Fully authored learning pathway for Midwifery Easy Learning Center.
     Educational content for Level 100 midwifery/nursing students.
     Not an official institutional syllabus document.
     ================================================================ */

  'bnd107-l01': {
    id: 'bnd107-l01', courseId: 'bnd-107', number: 1,
    title: 'Introduction to Physiology and Homeostasis', duration: '18 min',
    objectives: [
      'Define physiology and homeostasis',
      'Explain negative and positive feedback with examples',
      'Relate homeostasis to clinical observation of vital signs',
    ],
    introduction: 'Physiology is the study of how the body functions. Homeostasis is the maintenance of a stable internal environment despite external changes. Almost every clinical observation — temperature, blood pressure, glucose, pH — reflects homeostatic control.',
    sections: [
      { heading: 'What is Physiology?', content: 'Physiology explains how cells, tissues, organs and systems work together. It builds on anatomy: structure enables function. For midwives, physiology explains pregnancy adaptations, labour, and newborn transition.' },
      { heading: 'Homeostasis', content: 'The body keeps variables such as temperature, blood glucose, fluid volume and pH within narrow ranges. Sensors detect change, control centres process information, and effectors produce responses.' },
      { heading: 'Feedback', content: 'Negative feedback reverses a change (e.g. sweating cools the body when temperature rises). Positive feedback amplifies a change (e.g. oxytocin and uterine contractions in labour). Most homeostasis uses negative feedback; labour uses positive feedback productively.' },
    ],
    clinicalConnection: 'Vital signs are windows into homeostasis. Abnormal values suggest the system is stressed or failing to compensate.',
    midwiferyConnection: 'Labour is a rare physiological positive-feedback loop. Pregnancy itself is a sustained adaptation of many homeostatic systems.',
    keyPoints: ['Physiology = function', 'Homeostasis keeps the internal environment stable', 'Negative feedback stabilises; positive feedback amplifies'],
    rememberThis: 'When a vital sign is abnormal, ask: is this a failure of homeostasis or a normal adaptation (as in pregnancy)?',
    quickReview: [
      { q: 'What is homeostasis?', a: 'Maintenance of a stable internal environment.' },
      { q: 'Give an example of positive feedback in midwifery.', a: 'Oxytocin and contractions in labour.' },
    ],
    quizId: 'quiz-bnd107-l01',
    keyTerms: ['Physiology', 'Homeostasis', 'Negative feedback', 'Positive feedback'],
  },

  'bnd107-l02': {
    id: 'bnd107-l02', courseId: 'bnd-107', number: 2,
    title: 'Cell Physiology and the Cell Membrane', duration: '18 min',
    objectives: [
      'Describe the main functions of the cell membrane',
      'Explain selective permeability',
      'Link membrane function to nerve and muscle activity',
    ],
    introduction: 'The cell membrane separates the cell from its surroundings and controls what enters and leaves. Membrane function underpins nerve impulses, muscle contraction and nutrient uptake.',
    sections: [
      { heading: 'Membrane Structure (Overview)', content: 'The membrane is a phospholipid bilayer with embedded proteins. Lipids form a barrier to many water-soluble substances; proteins act as channels, carriers and receptors.' },
      { heading: 'Selective Permeability', content: 'Some substances cross freely (e.g. oxygen, carbon dioxide); others need channels or carriers (e.g. glucose, ions). This selectivity maintains different compositions inside and outside the cell.' },
      { heading: 'Clinical Relevance', content: 'Many drugs act on membrane receptors or channels. Electrolyte imbalances disrupt membrane potentials and can affect the heart and nerves.' },
    ],
    clinicalConnection: 'Understanding membranes helps explain why ion concentrations matter and how some medications work.',
    midwiferyConnection: 'Uterine muscle contraction and fetal nerve development depend on healthy membrane function.',
    keyPoints: ['Membrane is selectively permeable', 'Proteins provide channels and receptors', 'Ion gradients across membranes are essential for life'],
    rememberThis: 'The membrane is a gatekeeper — not a wall.',
    quickReview: [
      { q: 'What does selective permeability mean?', a: 'Some substances can cross the membrane more easily than others.' },
      { q: 'Name one function of membrane proteins.', a: 'Channels, carriers or receptors.' },
    ],
    quizId: 'quiz-bnd107-l02',
    keyTerms: ['Cell membrane', 'Selective permeability', 'Phospholipid', 'Receptor'],
  },

  'bnd107-l03': {
    id: 'bnd107-l03', courseId: 'bnd-107', number: 3,
    title: 'Membrane Transport', duration: '20 min',
    objectives: [
      'Distinguish passive and active transport',
      'Explain diffusion, osmosis and facilitated transport',
      'Describe active transport and the sodium–potassium pump at an introductory level',
    ],
    introduction: 'Substances cross membranes by passive processes (no energy required) or active processes (energy required). Osmosis — movement of water — is especially important for fluid balance.',
    sections: [
      { heading: 'Passive Transport', content: 'Diffusion: movement from high to low concentration.\nFacilitated diffusion: uses protein carriers/channels but still down a gradient.\nOsmosis: diffusion of water across a selectively permeable membrane.' },
      { heading: 'Active Transport', content: 'Moves substances against their concentration gradient using energy (ATP). The sodium–potassium pump moves Na⁺ out and K⁺ in, maintaining gradients essential for nerve and muscle function.' },
      { heading: 'Tonicity (Intro)', content: 'Isotonic solutions have similar effective osmotic pressure to body fluids. Hypotonic and hypertonic solutions can cause cells to swell or shrink — relevant to IV fluid choice (follow clinical protocols).' },
    ],
    diagram: { title: 'Membrane Transport Overview', description: 'Simple comparison of diffusion, osmosis, facilitated diffusion and active transport.', caption: 'Passive vs active movement across membranes.' },
    clinicalConnection: 'IV fluid tonicity and electrolyte therapy are based on transport and osmotic principles.',
    midwiferyConnection: 'Fluid shifts in pregnancy and the need for careful fluid management in labour and postpartum relate to osmotic balance.',
    keyPoints: ['Passive = down gradient, no ATP', 'Active = against gradient, needs ATP', 'Osmosis is water movement'],
    rememberThis: 'Na⁺ high outside, K⁺ high inside — the pump maintains that, and nerves depend on it.',
    quickReview: [
      { q: 'What is osmosis?', a: 'Diffusion of water across a selectively permeable membrane.' },
      { q: 'Does active transport require energy?', a: 'Yes (ATP).' },
    ],
    quizId: 'quiz-bnd107-l03',
    keyTerms: ['Diffusion', 'Osmosis', 'Active transport', 'Sodium–potassium pump', 'Tonicity'],
  },

  'bnd107-l04': {
    id: 'bnd107-l04', courseId: 'bnd-107', number: 4,
    title: 'Nervous System Physiology', duration: '20 min',
    objectives: [
      'Outline how nerve impulses are generated and transmitted',
      'Distinguish CNS and PNS roles',
      'Introduce the autonomic nervous system',
    ],
    introduction: 'The nervous system senses, integrates and responds. Nerve cells use electrical and chemical signals. Understanding basic nerve physiology supports assessment of consciousness, pain and autonomic responses in labour.',
    sections: [
      { heading: 'Neurons and Impulses', content: 'Neurons transmit signals via changes in membrane potential (action potentials). At synapses, chemical neurotransmitters carry the signal to the next cell.' },
      { heading: 'CNS and PNS', content: 'CNS (brain and spinal cord) integrates information. PNS carries sensory input and motor output. Reflexes can occur at spinal level without conscious thought.' },
      { heading: 'Autonomic Nervous System', content: 'Sympathetic division prepares for stress (“fight or flight”). Parasympathetic supports rest and digestion. Both influence heart rate, blood pressure, digestion and uterine activity.' },
    ],
    clinicalConnection: 'Pain pathways, level of consciousness and reflex testing are clinical applications of nervous physiology.',
    midwiferyConnection: 'Labour pain, maternal stress responses and fetal nervous system development are central midwifery concerns.',
    keyPoints: ['Action potentials are electrical signals', 'Synapses use chemical messengers', 'ANS regulates involuntary functions'],
    rememberThis: 'Sympathetic speeds the heart; parasympathetic slows it — both are normal physiology.',
    quickReview: [
      { q: 'What is the CNS?', a: 'Brain and spinal cord.' },
      { q: 'Name the two divisions of the autonomic nervous system.', a: 'Sympathetic and parasympathetic.' },
    ],
    quizId: 'quiz-bnd107-l04',
    keyTerms: ['Neuron', 'Action potential', 'Synapse', 'Sympathetic', 'Parasympathetic'],
  },

  'bnd107-l05': {
    id: 'bnd107-l05', courseId: 'bnd-107', number: 5,
    title: 'Endocrine System Physiology', duration: '18 min',
    objectives: [
      'Explain how hormones act as chemical messengers',
      'List major endocrine glands and example hormones',
      'Introduce the hypothalamic–pituitary axis',
    ],
    introduction: 'The endocrine system uses hormones carried in the blood to regulate growth, metabolism, stress responses and reproduction. Hormonal control is slower than nervous control but longer lasting.',
    sections: [
      { heading: 'Hormones', content: 'Hormones bind to receptors on or in target cells and change cell activity. Only cells with the right receptors respond.' },
      { heading: 'Major Glands', content: 'Pituitary (master regulator; also oxytocin and ADH), thyroid (metabolism), adrenals (cortisol, adrenaline, aldosterone), pancreas (insulin, glucagon), ovaries/testes (sex hormones).' },
      { heading: 'Hypothalamic–Pituitary Control', content: 'The hypothalamus links nervous and endocrine systems. It controls the anterior pituitary with releasing/inhibiting hormones and produces oxytocin and ADH stored in the posterior pituitary.' },
    ],
    clinicalConnection: 'Diabetes, thyroid disorders and adrenal problems are endocrine diseases with major clinical impact.',
    midwiferyConnection: 'Oxytocin drives labour contractions and milk ejection. Pregnancy is a profound endocrine state.',
    keyPoints: ['Hormones act on receptors', 'Pituitary is central to many axes', 'Oxytocin is critical in labour and lactation'],
    rememberThis: 'Same hormone, different effects — depends on the receptor and the tissue.',
    quickReview: [
      { q: 'Where is oxytocin released from?', a: 'Posterior pituitary (produced in hypothalamus).' },
      { q: 'What does insulin do?', a: 'Lowers blood glucose by promoting cellular uptake and storage.' },
    ],
    quizId: 'quiz-bnd107-l05',
    keyTerms: ['Hormone', 'Pituitary', 'Oxytocin', 'Insulin', 'Receptor'],
  },


  'bnd107-l06': {
    id: 'bnd107-l06', courseId: 'bnd-107', number: 6,
    title: 'Cardiovascular Physiology — The Heart', duration: '20 min',
    objectives: [
      'Describe the path of blood through the heart',
      'Explain the cardiac cycle in simple terms',
      'Relate heart rate and stroke volume to cardiac output',
    ],
    introduction: 'The heart is a dual pump: right side to the lungs, left side to the body. Cardiac output must meet tissue demand — including the increased demand of pregnancy.',
    sections: [
      { heading: 'Chambers and Flow', content: 'Right atrium → right ventricle → lungs → left atrium → left ventricle → body. Valves prevent backflow. The left ventricle has the thickest wall because it pumps against higher systemic resistance.' },
      { heading: 'Cardiac Cycle', content: 'Systole = contraction; diastole = relaxation. Atrial systole fills ventricles; ventricular systole ejects blood; diastole allows filling again. Heart sounds relate to valve closure.' },
      { heading: 'Cardiac Output', content: 'Cardiac output (CO) = heart rate × stroke volume. CO rises in pregnancy. Factors affecting stroke volume include preload, contractility and afterload.' },
    ],
    diagram: { title: 'Blood Flow Through the Heart', description: 'Simplified four-chamber path with valves and pulmonary vs systemic circuits.', caption: 'Right heart → lungs; left heart → body.' },
    clinicalConnection: 'Pulse, BP and signs of heart failure reflect cardiac performance.',
    midwiferyConnection: 'Pregnancy increases blood volume and cardiac output. Pre-existing heart disease needs specialist care.',
    keyPoints: ['Dual pump', 'CO = HR × SV', 'Pregnancy increases cardiac demand'],
    rememberThis: 'Left ventricle = systemic pump; right ventricle = pulmonary pump.',
    quickReview: [
      { q: 'What is cardiac output?', a: 'Heart rate × stroke volume.' },
      { q: 'Which chamber pumps blood to the body?', a: 'Left ventricle.' },
    ],
    quizId: 'quiz-bnd107-l06',
    keyTerms: ['Cardiac output', 'Systole', 'Diastole', 'Stroke volume'],
  },

  'bnd107-l07': {
    id: 'bnd107-l07', courseId: 'bnd-107', number: 7,
    title: 'Blood and Circulation Physiology', duration: '18 min',
    objectives: [
      'List main components and functions of blood',
      'Describe systemic and pulmonary circulation',
      'Explain basic regulation of blood pressure',
    ],
    introduction: 'Blood transports oxygen, nutrients, hormones and wastes. Circulation is the pathway; pressure and resistance determine flow.',
    sections: [
      { heading: 'Blood Components', content: 'Plasma (water, proteins, electrolytes, nutrients). Red cells (oxygen transport via haemoglobin). White cells (defence). Platelets (haemostasis).' },
      { heading: 'Circuits', content: 'Pulmonary circulation oxygenates blood. Systemic circulation delivers it to tissues. Capillaries are the exchange sites.' },
      { heading: 'Blood Pressure Regulation (Intro)', content: 'Short-term: neural (baroreceptors, autonomic nervous system). Longer-term: hormones (e.g. renin–angiotensin–aldosterone, ADH) and fluid volume. Pregnancy changes both volume and vascular resistance.' },
    ],
    clinicalConnection: 'Haemoglobin, haematocrit and clotting studies assess blood function. BP reflects circulatory status.',
    midwiferyConnection: 'Blood volume expands in pregnancy. Anaemia and haemorrhage are major midwifery concerns. Hypercoagulability increases thrombosis risk.',
    keyPoints: ['Blood = plasma + cells', 'Capillaries exchange', 'Volume and resistance shape BP'],
    rememberThis: 'More volume and lower resistance in pregnancy — both change the numbers you measure.',
    quickReview: [
      { q: 'What do red blood cells mainly transport?', a: 'Oxygen (bound to haemoglobin).' },
      { q: 'Where does gas exchange with tissues occur?', a: 'Capillaries.' },
    ],
    quizId: 'quiz-bnd107-l07',
    keyTerms: ['Plasma', 'Haemoglobin', 'Capillary', 'Systemic circulation'],
  },

  'bnd107-l08': {
    id: 'bnd107-l08', courseId: 'bnd-107', number: 8,
    title: 'Respiratory Physiology', duration: '20 min',
    objectives: [
      'Describe ventilation and gas exchange',
      'Explain oxygen transport in blood',
      'Relate respiratory physiology to pregnancy',
    ],
    introduction: 'Respiration moves air and exchanges gases. Oxygen must reach mitochondria; carbon dioxide must be removed. Pregnancy increases oxygen demand and alters breathing mechanics.',
    sections: [
      { heading: 'Ventilation', content: 'Inspiration and expiration change thoracic volume and pressure so air flows. Diaphragm is the primary muscle. Airway resistance and lung compliance affect how easy breathing is.' },
      { heading: 'Gas Exchange and Transport', content: 'O₂ and CO₂ diffuse across alveolar and capillary membranes. Most oxygen binds to haemoglobin; some dissolves. CO₂ is carried as bicarbonate, bound to haemoglobin and dissolved.' },
      { heading: 'Control of Breathing', content: 'Chemoreceptors sense CO₂, pH and O₂. CO₂ is normally the main driver of ventilation. In labour, pain and anxiety also alter breathing patterns.' },
    ],
    clinicalConnection: 'Respiratory rate, effort, SpO₂ and blood gases reflect respiratory function.',
    midwiferyConnection: 'Mild dyspnoea is common in pregnancy. Pathological breathlessness needs assessment. Maternal oxygenation supports the fetus.',
    keyPoints: ['Ventilation moves air; diffusion exchanges gases', 'Haemoglobin carries most O₂', 'CO₂ strongly drives breathing'],
    rememberThis: 'The fetus has no direct access to air — only to maternal blood oxygen.',
    quickReview: [
      { q: 'What is the main muscle of inspiration?', a: 'Diaphragm.' },
      { q: 'How is most oxygen carried in blood?', a: 'Bound to haemoglobin.' },
    ],
    quizId: 'quiz-bnd107-l08',
    keyTerms: ['Ventilation', 'Gas exchange', 'Haemoglobin', 'Chemoreceptor'],
  },

  'bnd107-l09': {
    id: 'bnd107-l09', courseId: 'bnd-107', number: 9,
    title: 'Digestive Physiology', duration: '18 min',
    objectives: [
      'Outline digestion and absorption',
      'Describe roles of major digestive organs',
      'Link digestive changes to pregnancy symptoms',
    ],
    introduction: 'Digestion breaks food into absorbable molecules; absorption delivers them to blood and lymph. Hormones and reduced motility in pregnancy explain common gastrointestinal symptoms.',
    sections: [
      { heading: 'Process Overview', content: 'Mechanical and chemical digestion begin in the mouth, continue in the stomach, and complete in the small intestine. The large intestine absorbs water and forms faeces.' },
      { heading: 'Key Organs', content: 'Stomach: acid and enzymes. Pancreas: enzymes and bicarbonate. Liver/gallbladder: bile for fat emulsification. Small intestine: main absorption site.' },
      { heading: 'Pregnancy Effects', content: 'Progesterone slows gut motility → constipation. Relaxed lower oesophageal sphincter → reflux. Nausea is multifactorial. Nutrition must still meet maternal and fetal needs.' },
    ],
    clinicalConnection: 'Appetite, bowel habit, nausea and abdominal findings are part of routine assessment.',
    midwiferyConnection: 'Supporting nutrition and managing common GI symptoms improves maternal wellbeing.',
    keyPoints: ['Small intestine absorbs most nutrients', 'Motility slows in pregnancy', 'Reflux and constipation are common'],
    rememberThis: 'Slower gut + growing uterus = more reflux and constipation — anticipate and advise.',
    quickReview: [
      { q: 'Where does most nutrient absorption occur?', a: 'Small intestine.' },
      { q: 'Why is constipation common in pregnancy?', a: 'Reduced motility (progesterone) and mechanical effects of the uterus.' },
    ],
    quizId: 'quiz-bnd107-l09',
    keyTerms: ['Digestion', 'Absorption', 'Peristalsis', 'Bile'],
  },

  'bnd107-l10': {
    id: 'bnd107-l10', courseId: 'bnd-107', number: 10,
    title: 'Renal and Urinary Physiology', duration: '20 min',
    objectives: [
      'Describe basic nephron function',
      'Explain filtration, reabsorption and secretion',
      'Relate renal physiology to pregnancy changes',
    ],
    introduction: 'The kidneys filter blood, regulate fluid and electrolytes, help control acid–base balance and produce urine. Pregnancy increases kidney workload and changes urinary tract anatomy.',
    sections: [
      { heading: 'Nephron Functions', content: 'Filtration at the glomerulus forms filtrate. Reabsorption reclaims wanted substances. Secretion adds additional wastes. What remains becomes urine.' },
      { heading: 'Regulation', content: 'ADH controls water reabsorption. Aldosterone and other hormones affect sodium and potassium. The kidneys also contribute to blood pressure control via the renin–angiotensin system.' },
      { heading: 'Pregnancy', content: 'GFR rises. Ureters dilate and urinary stasis increases UTI risk. Frequency is common. Proteinuria needs evaluation (e.g. for pre-eclampsia).' },
    ],
    clinicalConnection: 'Urine output, urinalysis and renal blood tests assess kidney function.',
    midwiferyConnection: 'Screening for UTI and proteinuria is routine. Fluid balance matters in labour and postpartum, especially after haemorrhage.',
    keyPoints: ['Nephron filters, reabsorbs, secretes', 'GFR rises in pregnancy', 'UTI and proteinuria are key concerns'],
    rememberThis: 'Protein in urine in pregnancy is never “just normal” — assess further.',
    quickReview: [
      { q: 'What is the functional unit of the kidney?', a: 'Nephron.' },
      { q: 'Why are UTIs more common in pregnancy?', a: 'Dilated ureters and urinary stasis.' },
    ],
    quizId: 'quiz-bnd107-l10',
    keyTerms: ['Nephron', 'GFR', 'ADH', 'Aldosterone', 'Proteinuria'],
  },


  'bnd107-l11': {
    id: 'bnd107-l11', courseId: 'bnd-107', number: 11,
    title: 'Fluid and Electrolyte Balance', duration: '20 min',
    objectives: [
      'Describe body fluid compartments',
      'Explain roles of major electrolytes',
      'Relate fluid balance to clinical assessment',
    ],
    introduction: 'Total body water is divided into intracellular and extracellular compartments. Electrolytes determine distribution of water and enable nerve and muscle function. Pregnancy expands plasma volume substantially.',
    sections: [
      { heading: 'Fluid Compartments', content: 'Intracellular fluid (inside cells) is the largest compartment. Extracellular fluid includes plasma and interstitial fluid. Water moves by osmosis according to solute concentrations.' },
      { heading: 'Key Electrolytes', content: 'Na⁺ — main extracellular cation; drives fluid volume.\nK⁺ — main intracellular cation; critical for heart and muscle.\nCa²⁺ — clotting, muscle, nerve.\nCl⁻ and HCO₃⁻ — major anions.\nMg²⁺ — enzyme and neuromuscular function.' },
      { heading: 'Clinical Assessment', content: 'Intake/output, weight, skin turgor, mucous membranes, oedema, and lab electrolytes guide fluid status. Overload and dehydration are both dangerous.' },
    ],
    clinicalConnection: 'IV fluids, haemorrhage, vomiting and diarrhoea all disrupt fluid and electrolyte balance.',
    midwiferyConnection: 'Plasma volume rises ~40–50% in pregnancy. Oedema can be normal or a warning sign. Postpartum diuresis is expected.',
    keyPoints: ['Na⁺ rules ECF volume', 'K⁺ is critical for the heart', 'Pregnancy expands plasma volume'],
    rememberThis: 'Where sodium goes, water follows.',
    quickReview: [
      { q: 'What is the main extracellular cation?', a: 'Sodium (Na⁺).' },
      { q: 'Why is potassium closely monitored?', a: 'Abnormal K⁺ can cause dangerous cardiac arrhythmias.' },
    ],
    quizId: 'quiz-bnd107-l11',
    keyTerms: ['Intracellular fluid', 'Extracellular fluid', 'Sodium', 'Potassium', 'Oedema'],
  },

  'bnd107-l12': {
    id: 'bnd107-l12', courseId: 'bnd-107', number: 12,
    title: 'Acid–Base Balance', duration: '20 min',
    objectives: [
      'Define acidosis and alkalosis',
      'Describe buffer, respiratory and renal control of pH',
      'Interpret the idea of blood gas components at an introductory level',
    ],
    introduction: 'Blood pH is tightly held near 7.4. Buffers, lungs and kidneys cooperate to keep it there. Acid–base disorders are classified as respiratory or metabolic.',
    sections: [
      { heading: 'pH and Buffers', content: 'Normal arterial pH ≈ 7.35–7.45. The bicarbonate buffer system is central in blood. Haemoglobin and other buffers also help.' },
      { heading: 'Respiratory Control', content: 'CO₂ forms carbonic acid in blood. Increasing ventilation blows off CO₂ and raises pH; decreasing ventilation retains CO₂ and lowers pH. Response is rapid.' },
      { heading: 'Renal Control', content: 'Kidneys adjust H⁺ secretion and bicarbonate reabsorption/generation. Slower than lungs but powerful for longer-term balance.' },
      { heading: 'Disorders (Intro)', content: 'Respiratory acidosis: high CO₂ (e.g. hypoventilation).\nRespiratory alkalosis: low CO₂ (e.g. hyperventilation).\nMetabolic acidosis/alkalosis: primary changes in bicarbonate.' },
    ],
    clinicalConnection: 'Arterial blood gases report pH, PaCO₂ and bicarbonate — the chemical picture of acid–base status.',
    midwiferyConnection: 'Hyperventilation in labour can cause respiratory alkalosis. Hypoventilation or exhaustion can cause acidosis. Maternal acid–base affects the fetus.',
    keyPoints: ['Normal pH 7.35–7.45', 'Lungs adjust CO₂ quickly', 'Kidneys adjust bicarbonate more slowly'],
    rememberThis: 'CO₂ is an acid when dissolved — breathe more, become less acidic.',
    quickReview: [
      { q: 'What is the normal arterial pH range?', a: 'About 7.35–7.45.' },
      { q: 'How do the lungs raise pH quickly?', a: 'By increasing ventilation and eliminating CO₂.' },
    ],
    quizId: 'quiz-bnd107-l12',
    keyTerms: ['pH', 'Buffer', 'Acidosis', 'Alkalosis', 'Bicarbonate'],
  },

  'bnd107-l13': {
    id: 'bnd107-l13', courseId: 'bnd-107', number: 13,
    title: 'Musculoskeletal Physiology', duration: '16 min',
    objectives: [
      'Describe basic muscle contraction physiology',
      'Explain the role of calcium in contraction',
      'Relate musculoskeletal changes to pregnancy',
    ],
    introduction: 'Skeletal muscle moves the body; smooth muscle moves contents of organs; cardiac muscle pumps blood. Calcium is essential for contraction in all types.',
    sections: [
      { heading: 'Contraction Overview', content: 'Electrical signals trigger calcium release inside muscle cells. Calcium allows actin and myosin filaments to interact and shorten the muscle. ATP provides energy.' },
      { heading: 'Smooth Muscle and the Uterus', content: 'Uterine myometrium is smooth muscle. Oxytocin and prostaglandins promote contraction; progesterone tends to promote quiescence during pregnancy.' },
      { heading: 'Pregnancy Musculoskeletal Effects', content: 'Hormonal ligament laxity, shifted centre of gravity and weight gain increase back and pelvic strain. Exercise and posture advice help.' },
    ],
    clinicalConnection: 'Muscle strength, tone and pain are assessed in many clinical contexts.',
    midwiferyConnection: 'Labour is myometrial physiology in action. Pelvic girdle pain is a common pregnancy complaint.',
    keyPoints: ['Calcium is required for contraction', 'Uterus is smooth muscle', 'Pregnancy changes posture and joint laxity'],
    rememberThis: 'No calcium, no contraction — in skeletal muscle and in the uterus.',
    quickReview: [
      { q: 'What ion is essential for muscle contraction?', a: 'Calcium (Ca²⁺).' },
      { q: 'What type of muscle is the myometrium?', a: 'Smooth muscle.' },
    ],
    quizId: 'quiz-bnd107-l13',
    keyTerms: ['Contraction', 'Calcium', 'Myometrium', 'ATP'],
  },

  'bnd107-l14': {
    id: 'bnd107-l14', courseId: 'bnd-107', number: 14,
    title: 'Temperature Regulation', duration: '16 min',
    objectives: [
      'Describe how the body produces and loses heat',
      'Explain the role of the hypothalamus',
      'Apply concepts to fever and neonatal thermoregulation',
    ],
    introduction: 'Core temperature is regulated around 37°C. The hypothalamus acts as thermostat. Newborns have limited ability to maintain temperature and need active support.',
    sections: [
      { heading: 'Heat Production and Loss', content: 'Heat is produced by metabolism and muscle activity. Heat is lost by radiation, conduction, convection and evaporation. Behaviour (clothing, environment) and physiology (sweating, shivering, blood flow to skin) adjust the balance.' },
      { heading: 'Fever', content: 'Fever is a regulated rise in set-point, often due to infection. It differs from uncontrolled hyperthermia. Clinical assessment looks for cause, not only the number.' },
      { heading: 'Newborn Thermoregulation', content: 'Large surface-area-to-mass ratio, thin skin, limited fat and limited shivering make newborns vulnerable. Skin-to-skin, drying, covering and warm environment are essential.' },
    ],
    clinicalConnection: 'Temperature is a vital sign. Fever in mother or newborn needs systematic evaluation.',
    midwiferyConnection: 'Immediate newborn care prioritises thermoregulation. Maternal fever in labour has implications for mother and baby.',
    keyPoints: ['Hypothalamus regulates set-point', 'Four routes of heat loss', 'Newborns need active thermal care'],
    rememberThis: 'Dry, skin-to-skin, cover the head — the first minutes decide thermal stability.',
    quickReview: [
      { q: 'Where is the body temperature set-point controlled?', a: 'Hypothalamus.' },
      { q: 'Name two ways newborns lose heat.', a: 'Examples: evaporation, radiation, conduction, convection.' },
    ],
    quizId: 'quiz-bnd107-l14',
    keyTerms: ['Thermoregulation', 'Hypothalamus', 'Fever', 'Evaporation'],
  },

  'bnd107-l15': {
    id: 'bnd107-l15', courseId: 'bnd-107', number: 15,
    title: 'Integration of Body Systems', duration: '16 min',
    objectives: [
      'Explain how organ systems cooperate to maintain homeostasis',
      'Give examples of multi-system responses to stress and exercise',
      'Prepare for reproductive and pregnancy physiology modules',
    ],
    introduction: 'No system works alone. Exercise, stress, haemorrhage and pregnancy all require coordinated responses from nervous, endocrine, cardiovascular, respiratory and renal systems.',
    sections: [
      { heading: 'Example: Haemorrhage', content: 'Blood loss → lower venous return → lower cardiac output → baroreceptor response → sympathetic activation → vasoconstriction and raised heart rate; kidneys conserve fluid; thirst increases. Multiple systems defend blood pressure and perfusion.' },
      { heading: 'Example: Exercise', content: 'Muscles need more oxygen and produce more CO₂ and heat. Heart rate and stroke volume rise, vessels to muscle dilate, breathing increases, heat is lost by sweating and radiation.' },
      { heading: 'Pregnancy as Integration', content: 'Pregnancy is a prolonged, coordinated adaptation: blood volume, cardiac output, ventilation, renal filtration, endocrine profiles and metabolic rate all change together to support the fetus.' },
    ],
    clinicalConnection: 'Recognising multi-system patterns (e.g. shock) improves early detection and response.',
    midwiferyConnection: 'Pregnancy and labour are the ultimate integration challenges — physiology across every system.',
    keyPoints: ['Systems cooperate', 'Stress responses are multi-system', 'Pregnancy is coordinated adaptation'],
    rememberThis: 'When one vital sign changes, look at the whole picture — systems talk to each other.',
    quickReview: [
      { q: 'Name two systems that respond to haemorrhage.', a: 'Examples: cardiovascular, nervous (sympathetic), renal, endocrine.' },
      { q: 'Why is pregnancy described as integrated physiology?', a: 'Many systems adapt together to support the fetus.' },
    ],
    quizId: 'quiz-bnd107-l15',
    keyTerms: ['Homeostasis', 'Integration', 'Shock', 'Adaptation'],
  },


  'bnd107-l16': {
    id: 'bnd107-l16', courseId: 'bnd-107', number: 16,
    title: 'Female Reproductive Physiology', duration: '20 min',
    objectives: [
      'Describe the physiological roles of ovaries, uterus and related structures',
      'Explain oestrogen and progesterone actions at an introductory level',
      'Link reproductive physiology to midwifery practice',
    ],
    introduction: 'Female reproductive physiology enables ovulation, fertilisation, implantation, pregnancy and birth. Hormones from the hypothalamus, pituitary and ovaries coordinate the cycle and pregnancy.',
    sections: [
      { heading: 'Ovaries', content: 'Produce oocytes and the hormones oestrogen and progesterone. Follicles mature under FSH; a surge of LH triggers ovulation. The corpus luteum produces progesterone after ovulation.' },
      { heading: 'Uterus', content: 'The endometrium thickens under oestrogen and becomes secretory under progesterone, preparing for implantation. The myometrium remains relatively quiet in pregnancy under progesterone influence until labour begins.' },
      { heading: 'Supporting Structures', content: 'Uterine tubes transport the oocyte and are the usual site of fertilisation. The cervix secretes mucus that changes with the cycle. The vagina is the birth canal.' },
    ],
    clinicalConnection: 'Understanding the cycle helps interpret menstrual history, contraception counselling and early pregnancy care.',
    midwiferyConnection: 'Every pregnancy begins with this physiology. Disorders of ovulation, tubes or endometrium affect fertility and early pregnancy outcomes.',
    keyPoints: ['Ovaries: eggs and hormones', 'Endometrium prepares for implantation', 'Progesterone supports early pregnancy'],
    rememberThis: 'No ovulation → no natural conception; no progesterone support → early pregnancy is at risk.',
    quickReview: [
      { q: 'Which hormone surge triggers ovulation?', a: 'LH (luteinising hormone).' },
      { q: 'What does the corpus luteum mainly produce?', a: 'Progesterone.' },
    ],
    quizId: 'quiz-bnd107-l16',
    keyTerms: ['Ovary', 'Oestrogen', 'Progesterone', 'Endometrium', 'Ovulation'],
  },

  'bnd107-l17': {
    id: 'bnd107-l17', courseId: 'bnd-107', number: 17,
    title: 'Menstrual Cycle and Hormonal Regulation', duration: '22 min',
    objectives: [
      'Outline the follicular, ovulatory and luteal phases',
      'Describe corresponding endometrial changes',
      'Explain hypothalamic–pituitary–ovarian control',
    ],
    introduction: 'The menstrual cycle is a coordinated hormonal loop. Understanding it is essential for fertility awareness, contraception education and recognising deviations that need assessment.',
    sections: [
      { heading: 'Ovarian Phases', content: 'Follicular phase: FSH drives follicle growth; oestrogen rises.\nOvulation: LH surge; oocyte released.\nLuteal phase: corpus luteum produces progesterone (and some oestrogen); if no pregnancy, it regresses and hormone levels fall.' },
      { heading: 'Endometrial Phases', content: 'Proliferative phase (with follicular): endometrium thickens under oestrogen.\nSecretory phase (with luteal): glands become secretory under progesterone.\nMenstruation: shedding when hormone support is withdrawn.' },
      { heading: 'Regulation', content: 'Hypothalamus releases GnRH → pituitary releases FSH and LH → ovaries produce oestrogen and progesterone → feedback to brain. Combined hormonal contraceptives use this feedback to suppress ovulation.' },
    ],
    diagram: { title: 'Menstrual Cycle Overview', description: 'Aligned ovarian hormones, pituitary hormones and endometrial thickness across a 28-day schematic cycle.', caption: 'Hormones and endometrium change together through the cycle.' },
    clinicalConnection: 'Cycle history is part of gynaecological and antenatal assessment. Irregular cycles may indicate endocrine or other disorders.',
    midwiferyConnection: 'Dating pregnancy often uses last menstrual period. Cycle knowledge supports reproductive health education.',
    keyPoints: ['FSH and LH drive the ovary', 'Oestrogen builds endometrium; progesterone matures it', 'Hormone withdrawal causes menstruation'],
    rememberThis: 'Day 1 = first day of bleeding. Ovulation is typically around day 14 in a 28-day cycle — but cycles vary.',
    quickReview: [
      { q: 'What happens to the endometrium in the proliferative phase?', a: 'It thickens under oestrogen.' },
      { q: 'What hormone dominates the luteal phase?', a: 'Progesterone.' },
    ],
    quizId: 'quiz-bnd107-l17',
    keyTerms: ['Follicular phase', 'Luteal phase', 'LH surge', 'GnRH', 'Menstruation'],
  },

  'bnd107-l18': {
    id: 'bnd107-l18', courseId: 'bnd-107', number: 18,
    title: 'Fertilisation and Implantation', duration: '18 min',
    objectives: [
      'Describe where and how fertilisation occurs',
      'Explain early embryonic development to the blastocyst',
      'Describe implantation and hCG',
    ],
    introduction: 'Fertilisation usually occurs in the uterine tube. The resulting zygote develops into a blastocyst that implants in the endometrium. hCG signals the corpus luteum to continue progesterone production.',
    sections: [
      { heading: 'Fertilisation', content: 'Sperm meet the oocyte in the ampulla of the uterine tube. One sperm fertilises the oocyte, restoring the diploid chromosome number. The zygote begins mitotic division as it travels toward the uterus.' },
      { heading: 'Blastocyst and Implantation', content: 'By the time it reaches the uterus, the embryo is a blastocyst with an inner cell mass (future fetus) and trophoblast (future placenta). Implantation into the secretory endometrium begins pregnancy establishment.' },
      { heading: 'hCG', content: 'Trophoblast produces human chorionic gonadotrophin (hCG), which maintains the corpus luteum. Pregnancy tests detect hCG. The placenta later takes over progesterone production.' },
    ],
    clinicalConnection: 'Ectopic pregnancy occurs when implantation is outside the uterine cavity — a surgical emergency. Early pregnancy testing relies on hCG.',
    midwiferyConnection: 'Understanding fertilisation and implantation supports education about conception, early pregnancy symptoms and the importance of early antenatal contact.',
    keyPoints: ['Fertilisation usually in the tube', 'Implantation in the endometrium', 'hCG maintains early progesterone support'],
    commonMistakes: [
      { mistake: 'Thinking fertilisation occurs in the uterus.', correction: 'Fertilisation is usually tubal; implantation is uterine.' },
    ],
    rememberThis: 'Tube for fertilisation, uterus for implantation — location matters for both success and danger (ectopic).',
    quickReview: [
      { q: 'Where does fertilisation usually occur?', a: 'In the uterine (fallopian) tube.' },
      { q: 'What does hCG do in early pregnancy?', a: 'Maintains the corpus luteum so progesterone continues.' },
    ],
    quizId: 'quiz-bnd107-l18',
    keyTerms: ['Fertilisation', 'Zygote', 'Blastocyst', 'Implantation', 'hCG'],
  },

  'bnd107-l19': {
    id: 'bnd107-l19', courseId: 'bnd-107', number: 19,
    title: 'Physiological Changes During Pregnancy', duration: '22 min',
    objectives: [
      'Describe major cardiovascular, respiratory, renal and haematological adaptations',
      'Explain endocrine changes of pregnancy',
      'Distinguish normal adaptation from pathology',
    ],
    introduction: 'Pregnancy is a state of profound physiological adaptation. Blood volume, cardiac output, ventilation, renal filtration and endocrine profiles all change to support the fetus. Knowing the normal pattern helps you spot the abnormal.',
    sections: [
      { heading: 'Cardiovascular and Blood', content: 'Blood volume rises (~40–50%). Cardiac output increases. Systemic vascular resistance falls. Haemoglobin may fall (physiological dilution) but true iron-deficiency anaemia is common and important. Hypercoagulability increases thrombosis risk.' },
      { heading: 'Respiratory and Renal', content: 'Oxygen demand and minute ventilation rise. Mild respiratory alkalosis can occur. GFR increases; frequency and UTI risk rise; mild glycosuria can appear because of increased filtered load.' },
      { heading: 'Endocrine and Metabolic', content: 'hCG, progesterone, oestrogen and placental hormones dominate. Insulin resistance increases in later pregnancy (gestational diabetes risk). Thyroid binding changes affect lab interpretation. Weight and metabolic rate increase.' },
      { heading: 'Other Systems', content: 'GI motility slows (constipation, reflux). Ligaments loosen. Skin pigmentation may change. Breast tissue prepares for lactation.' },
    ],
    clinicalConnection: 'Normal pregnancy values differ from non-pregnant norms (e.g. lower BP mid-pregnancy, higher GFR). Interpret labs in pregnancy context.',
    midwiferyConnection: 'This lesson is the physiological foundation of antenatal care — why we measure BP, haemoglobin, urine protein and glucose, and why we advise on iron, hydration and symptom management.',
    keyPoints: [
      'Volume up, resistance down, output up',
      'Ventilation and GFR rise',
      'Insulin resistance increases later in pregnancy',
      'Normal adaptation ≠ disease — but disease can hide in the same systems',
    ],
    rememberThis: 'Pregnancy changes the baseline. Always interpret findings against pregnancy norms, not non-pregnant textbooks alone.',
    quickReview: [
      { q: 'What happens to blood volume in pregnancy?', a: 'It increases substantially (~40–50%).' },
      { q: 'Why is iron important in pregnancy?', a: 'To support expanded red cell mass and fetal needs; deficiency causes anaemia.' },
    ],
    quizId: 'quiz-bnd107-l19',
    keyTerms: ['Plasma volume', 'Cardiac output', 'GFR', 'Insulin resistance', 'hCG'],
  },

  'bnd107-l20': {
    id: 'bnd107-l20', courseId: 'bnd-107', number: 20,
    title: 'Physiology in Nursing and Midwifery Practice', duration: '18 min',
    objectives: [
      'Integrate major BND 107 concepts into clinical thinking',
      'List physiology topics most relevant to daily midwifery practice',
      'Commit to linking observations and lab values back to physiological principles',
    ],
    introduction: 'Physiology is the “why” behind the observations you make. This final lesson consolidates the course and points forward to clinical application.',
    sections: [
      { heading: 'Core Themes', content: 'Homeostasis and feedback.\nMembranes and transport.\nNervous and endocrine control.\nHeart, blood, lungs, gut, kidneys.\nFluid, electrolytes, acid–base.\nTemperature.\nFemale reproductive cycle.\nFertilisation, implantation and pregnancy adaptations.' },
      { heading: 'Daily Links', content: 'Abnormal BP → cardiovascular and volume physiology.\nFever → thermoregulation and infection response.\nProteinuria → renal and pre-eclampsia awareness.\nReduced fetal movements → oxygenation and placental function.\nLabour contractions → myometrial and endocrine physiology.\nNewborn temperature → thermoregulation.' },
      { heading: 'Moving Forward', content: 'You do not need to memorise every pathway. You need to keep asking why a finding occurs and what the body is trying to do. Revisit these lessons when clinical questions arise.' },
    ],
    clinicalConnection: 'Every vital sign and lab value is applied physiology.',
    midwiferyConnection: 'Safe midwifery is physiology in action — pregnancy, labour, birth and the newborn transition.',
    keyPoints: [
      'Physiology explains clinical findings',
      'Pregnancy rewrites many baselines',
      'Keep linking practice to principles',
    ],
    rememberThis: 'Structure enables function; function serves mother and baby. Physiology is the bridge between anatomy and care.',
    quickReview: [
      { q: 'Name three physiology topics essential for midwifery.', a: 'Examples: pregnancy adaptations, menstrual/reproductive physiology, fluid balance, acid–base, thermoregulation, cardiac output.' },
      { q: 'Why interpret labs differently in pregnancy?', a: 'Normal values shift with physiological adaptation.' },
    ],
    quizId: 'quiz-bnd107-l20',
    keyTerms: ['Homeostasis', 'Pregnancy adaptation', 'Cardiac output', 'Thermoregulation'],
  },


  /* ================================================================
     BND 109 — FUNDAMENTALS OF NURSING (THEORY)
     Fully authored learning pathway for Midwifery Easy Learning Center.
     Educational content for Level 100 midwifery/nursing students.
     Not an official institutional syllabus document.
     ================================================================ */

  'bnd109-l01': {
    id: 'bnd109-l01', courseId: 'bnd-109', number: 1,
    title: 'Introduction to Nursing', duration: '15 min',
    objectives: [
      'Define nursing in simple professional terms',
      'Explain why nursing theory matters for midwifery students',
      'List broad aims of nursing care',
    ],
    introduction: 'Nursing is a profession focused on promoting health, preventing illness, and caring for people across the lifespan. For midwifery students, nursing foundations provide the language, ethics and process used in all clinical care — including maternal and newborn care.',
    sections: [
      { heading: 'What is Nursing?', content: 'Nursing combines scientific knowledge, technical skill and compassionate presence. Nurses assess needs, plan and deliver care, evaluate outcomes and advocate for patients. Care is holistic: physical, psychological, social and spiritual dimensions matter.' },
      { heading: 'Why This Course Matters', content: 'Before clinical skills come professional identity, ethics, communication and the nursing process. These ideas guide every interaction on the ward, in clinic and in the community.' },
      { heading: 'Aims of Nursing', content: 'Promote health and wellbeing. Prevent disease and injury. Support recovery and adaptation. Ease suffering. Support a peaceful death when cure is not possible. In midwifery, these aims centre on the woman, newborn and family.' },
    ],
    clinicalConnection: 'Every admission, ward round and discharge involves nursing judgement based on these foundations.',
    midwiferyConnection: 'Midwives use nursing process thinking when assessing a labouring woman, planning support and evaluating progress.',
    keyPoints: ['Nursing is both science and caring practice', 'Foundations come before procedures', 'Care is holistic'],
    rememberThis: 'Skill without professional values is incomplete; values without skill cannot fully help.',
    quickReview: [
      { q: 'What is nursing focused on?', a: 'Promoting health, preventing illness and caring for people holistically.' },
      { q: 'Why study nursing theory as a midwifery student?', a: 'It provides ethics, communication and process used in all clinical care.' },
    ],
    quizId: 'quiz-bnd109-l01',
    keyTerms: ['Nursing', 'Holistic care', 'Professional practice'],
  },

  'bnd109-l02': {
    id: 'bnd109-l02', courseId: 'bnd-109', number: 2,
    title: 'History and Development of Nursing', duration: '16 min',
    objectives: [
      'Outline key milestones in the development of modern nursing',
      'Recognise the influence of early nursing leaders',
      'Relate history to current professional standards',
    ],
    introduction: 'Nursing evolved from informal caring roles to a regulated profession with education, ethics and evidence. Knowing this history helps you understand why training, registration and standards exist.',
    sections: [
      { heading: 'Early Care and Religious Traditions', content: 'Caring for the sick has ancient roots in families, communities and religious orders. Organised nursing later emerged with training and hospital systems.' },
      { heading: 'Florence Nightingale and Modern Nursing', content: 'Nightingale emphasised hygiene, environment, observation and trained nurses. Her work in the Crimean War and later reforms shaped nursing education and public health thinking still relevant today.' },
      { heading: 'Professionalisation', content: 'Nursing became regulated through schools, licensing, codes of ethics and professional associations. Today nurses and midwives practise under legal and professional frameworks that protect the public.' },
    ],
    clinicalConnection: 'Infection control, environmental cleanliness and systematic observation have historical roots in nursing reform.',
    midwiferyConnection: 'Midwifery and nursing share histories of professional struggle for recognition, education and autonomous practice within healthcare systems.',
    keyPoints: ['Nursing moved from informal care to regulated profession', 'Education and standards protect patients', 'History explains current professional expectations'],
    rememberThis: 'Registration and codes exist because society learned that untrained care can harm.',
    quickReview: [
      { q: 'Name one contribution associated with Florence Nightingale.', a: 'Examples: hygiene, trained nurses, environmental focus, systematic observation.' },
      { q: 'Why is nursing regulated?', a: 'To protect the public through education, standards and accountability.' },
    ],
    quizId: 'quiz-bnd109-l02',
    keyTerms: ['Professionalisation', 'Nursing history', 'Standards'],
  },

  'bnd109-l03': {
    id: 'bnd109-l03', courseId: 'bnd-109', number: 3,
    title: 'Nursing Concepts and Principles', duration: '16 min',
    objectives: [
      'Identify core nursing concepts such as person, health, environment and nursing',
      'Explain person-centred care',
      'Apply basic principles to simple care scenarios',
    ],
    introduction: 'Nursing is organised around a few big ideas: the person receiving care, their health, the environment, and the nurse’s actions. These concepts keep care focused on the individual rather than only on tasks.',
    sections: [
      { heading: 'The Nursing Metaparadigm (Simple View)', content: 'Person — the individual, family or community.\nHealth — a dynamic state, not only absence of disease.\nEnvironment — physical, social and cultural context.\nNursing — the actions and attributes of the nurse.' },
      { heading: 'Person-Centred Care', content: 'Care is planned with the person, respecting values, preferences and dignity. Tasks serve the person; the person is not reduced to a task list.' },
      { heading: 'Guiding Principles', content: 'Respect, safety, evidence-informed practice, accountability and collaboration with the healthcare team.' },
    ],
    clinicalConnection: 'When care feels fragmented, returning to person, health, environment and nursing helps re-focus priorities.',
    midwiferyConnection: 'Woman-centred and family-centred maternity care are applications of person-centred nursing concepts.',
    keyPoints: ['Person is at the centre', 'Health is more than absence of disease', 'Environment shapes outcomes'],
    rememberThis: 'Ask: who is this person, what does health mean to them, and what in their environment helps or harms?',
    quickReview: [
      { q: 'Name the four common nursing metaparadigm concepts.', a: 'Person, health, environment, nursing.' },
      { q: 'What is person-centred care?', a: 'Care planned with the person, respecting values and dignity.' },
    ],
    quizId: 'quiz-bnd109-l03',
    keyTerms: ['Person-centred care', 'Health', 'Environment', 'Metaparadigm'],
  },

  'bnd109-l04': {
    id: 'bnd109-l04', courseId: 'bnd-109', number: 4,
    title: 'Nursing Theories — An Introduction', duration: '18 min',
    objectives: [
      'Explain what a nursing theory is in simple terms',
      'Give examples of how theories guide practice',
      'Avoid treating theory as empty memorisation',
    ],
    introduction: 'Nursing theories are organised ways of thinking about care. You do not need to memorise every theorist. You do need to understand that theory guides what you notice, how you prioritise and how you evaluate care.',
    sections: [
      { heading: 'What Theories Do', content: 'Theories link concepts, suggest what is important, and guide assessment and intervention. They turn experience into shared professional knowledge.' },
      { heading: 'Examples (Introductory)', content: 'Environmental focus (Nightingale) — clean air, water, light, nutrition.\nSelf-care focus — supporting what people can do for themselves.\nAdaptation focus — helping people adjust to change and stress.\nCaring focus — the moral and relational core of nursing.' },
      { heading: 'Using Theory Practically', content: 'When you assess a postnatal mother, theory reminds you to look beyond a single vital sign: environment, support, self-care ability and emotional state all matter.' },
    ],
    clinicalConnection: 'Care plans and education sessions improve when guided by clear concepts rather than only habits.',
    midwiferyConnection: 'Supporting a woman’s self-care after birth and adapting care to her environment are everyday uses of nursing theory.',
    keyPoints: ['Theory organises thinking', 'Different theories emphasise different aspects of care', 'Use theory to widen what you notice'],
    rememberThis: 'Theory is a lens, not a script. Use it to see more, not to ignore the person in front of you.',
    quickReview: [
      { q: 'What is a nursing theory?', a: 'An organised way of thinking about nursing concepts and care.' },
      { q: 'Name one practical use of theory.', a: 'Guiding what to assess and how to prioritise care.' },
    ],
    quizId: 'quiz-bnd109-l04',
    keyTerms: ['Nursing theory', 'Self-care', 'Adaptation', 'Caring'],
  },

  'bnd109-l05': {
    id: 'bnd109-l05', courseId: 'bnd-109', number: 5,
    title: 'Roles and Responsibilities of the Nurse', duration: '16 min',
    objectives: [
      'List major roles of the nurse',
      'Distinguish independent, dependent and collaborative functions',
      'Relate roles to midwifery team practice',
    ],
    introduction: 'Nurses act as caregivers, educators, advocates, communicators and coordinators. Knowing your roles and limits protects patients and builds good teamwork.',
    sections: [
      { heading: 'Major Roles', content: 'Caregiver — direct support for physical and emotional needs.\nEducator — teaching patients and families.\nAdvocate — standing up for patient rights and preferences.\nCommunicator — sharing accurate information within the team.\nCoordinator — organising care across people and services.' },
      { heading: 'Types of Functions', content: 'Independent — actions within nursing scope based on assessment.\nDependent — actions requiring medical orders where required by policy.\nCollaborative — shared work with midwives, doctors and other professionals.' },
      { heading: 'Accountability', content: 'You are accountable for what you do, what you omit, and what you document. Knowing when to escalate is part of responsibility.' },
    ],
    clinicalConnection: 'Clear role boundaries reduce errors and improve handover quality.',
    midwiferyConnection: 'In maternity units, nurses and midwives collaborate closely; understanding each role improves safety for mother and baby.',
    keyPoints: ['Multiple roles beyond “doing tasks”', 'Know independent vs dependent functions', 'Accountability includes escalation'],
    rememberThis: 'If something is outside your competence or authority, escalate — that is professional responsibility, not failure.',
    quickReview: [
      { q: 'Name three roles of the nurse.', a: 'Examples: caregiver, educator, advocate, communicator, coordinator.' },
      { q: 'What is an independent nursing function?', a: 'An action within nursing scope based on nursing assessment.' },
    ],
    quizId: 'quiz-bnd109-l05',
    keyTerms: ['Advocate', 'Accountability', 'Collaborative care', 'Scope of practice'],
  },


  'bnd109-l06': {
    id: 'bnd109-l06', courseId: 'bnd-109', number: 6,
    title: 'Professionalism and Professional Values', duration: '16 min',
    objectives: [
      'Define professionalism in nursing',
      'List core professional values',
      'Describe behaviours that demonstrate professionalism',
    ],
    introduction: 'Professionalism is more than uniform and punctuality. It is a set of values and behaviours that earn trust: competence, integrity, respect, compassion and accountability.',
    sections: [
      { heading: 'Core Values', content: 'Altruism — concern for others.\nAutonomy — respect for patients’ right to decide.\nHuman dignity — treating every person as worthy of respect.\nIntegrity — honesty and consistency.\nSocial justice — fair access and treatment.' },
      { heading: 'Professional Behaviours', content: 'Maintain competence. Communicate respectfully. Protect confidentiality. Accept feedback. Admit errors and learn from them. Appear and act in ways that build public trust.' },
      { heading: 'Unprofessional Conduct', content: 'Negligence, breach of confidentiality, disrespect, working outside competence without supervision, and dishonest documentation undermine the profession and harm patients.' },
    ],
    clinicalConnection: 'Patients judge professionalism through every interaction — tone, privacy, reliability and honesty.',
    midwiferyConnection: 'Women in labour are vulnerable; professional values directly affect their sense of safety and dignity.',
    keyPoints: ['Values guide behaviour', 'Competence and integrity are non-negotiable', 'Professionalism is visible in small acts'],
    rememberThis: 'How you speak about a patient when they cannot hear you is also professionalism.',
    quickReview: [
      { q: 'Name three professional values.', a: 'Examples: dignity, integrity, autonomy, altruism, social justice.' },
      { q: 'Why is confidentiality a professional duty?', a: 'It protects dignity and maintains trust.' },
    ],
    quizId: 'quiz-bnd109-l06',
    keyTerms: ['Professionalism', 'Integrity', 'Dignity', 'Confidentiality'],
  },

  'bnd109-l07': {
    id: 'bnd109-l07', courseId: 'bnd-109', number: 7,
    title: 'Ethics in Nursing', duration: '18 min',
    objectives: [
      'Define ethics in a healthcare context',
      'Explain beneficence, non-maleficence, autonomy and justice',
      'Apply ethical thinking to simple dilemmas',
    ],
    introduction: 'Ethics asks what ought to be done when values conflict. Nurses face ethical questions about consent, confidentiality, resource use and end-of-life care. Clear principles help, but judgement and team discussion still matter.',
    sections: [
      { heading: 'Key Principles', content: 'Beneficence — do good.\nNon-maleficence — do no harm.\nAutonomy — respect the person’s right to choose.\nJustice — fairness in care and resource distribution.\nFidelity — keep promises and remain loyal to professional duty.' },
      { heading: 'Consent and Truth-Telling', content: 'Informed consent requires adequate information, capacity and voluntariness. Truth-telling supports autonomy; withholding information needs careful ethical and legal justification under local policy.' },
      { heading: 'When Principles Conflict', content: 'A patient may refuse a recommended treatment (autonomy vs beneficence). Teams use discussion, ethics support and legal frameworks to navigate such cases — students escalate rather than decide alone.' },
    ],
    clinicalConnection: 'Every consent conversation and confidentiality decision is applied ethics.',
    midwiferyConnection: 'Respecting a woman’s birth preferences, obtaining consent for procedures and protecting privacy during examinations are daily ethical acts.',
    keyPoints: ['Four principles guide most cases', 'Consent requires information, capacity and voluntariness', 'Escalate complex dilemmas'],
    commonMistakes: [
      { mistake: 'Assuming “doing good” always overrides patient choice.', correction: 'Autonomy matters; explore understanding and reasons before acting against wishes, within legal limits.' },
    ],
    rememberThis: 'Ethical care is not only what you do — it is whether the person understands and agrees.',
    quickReview: [
      { q: 'What does non-maleficence mean?', a: 'Do no harm.' },
      { q: 'What three elements support informed consent?', a: 'Information, capacity, voluntariness.' },
    ],
    quizId: 'quiz-bnd109-l07',
    keyTerms: ['Ethics', 'Autonomy', 'Beneficence', 'Non-maleficence', 'Justice', 'Consent'],
  },

  'bnd109-l08': {
    id: 'bnd109-l08', courseId: 'bnd-109', number: 8,
    title: 'Patient Rights and Dignity', duration: '16 min',
    objectives: [
      'List fundamental patient rights',
      'Explain dignity in practical terms',
      'Describe nursing actions that protect rights and dignity',
    ],
    introduction: 'Patients have rights to information, consent, privacy, respectful treatment and safe care. Dignity means being treated as a person of worth, not as a case or a bed number.',
    sections: [
      { heading: 'Core Rights', content: 'Right to information about condition and care.\nRight to consent or refuse (within legal limits).\nRight to privacy and confidentiality.\nRight to respectful, non-discriminatory care.\nRight to safe care and to raise concerns.' },
      { heading: 'Dignity in Practice', content: 'Close curtains and doors. Explain before touching. Use preferred names. Avoid talking over the patient. Protect body exposure. Involve the person in decisions at their level of understanding.' },
      { heading: 'Vulnerable Groups', content: 'Children, unconscious patients, people with cognitive impairment and those in pain need extra protection. Advocating for them is part of nursing duty.' },
    ],
    clinicalConnection: 'Complaints often arise from dignity breaches even when clinical outcomes are good.',
    midwiferyConnection: 'Labour and birth are intimate experiences. Protecting privacy and choice supports dignity and positive birth experience.',
    keyPoints: ['Rights include information, consent and privacy', 'Dignity is shown in small practical acts', 'Advocacy protects the vulnerable'],
    rememberThis: 'If you would not want it done to your family member, do not do it to the patient.',
    quickReview: [
      { q: 'Name three patient rights.', a: 'Examples: information, consent, privacy, respectful care, safe care.' },
      { q: 'Give one practical way to protect dignity.', a: 'Examples: close curtains, explain before touch, use preferred name.' },
    ],
    quizId: 'quiz-bnd109-l08',
    keyTerms: ['Patient rights', 'Dignity', 'Privacy', 'Advocacy'],
  },

  'bnd109-l09': {
    id: 'bnd109-l09', courseId: 'bnd-109', number: 9,
    title: 'Communication in Nursing', duration: '16 min',
    objectives: [
      'Describe elements of effective communication',
      'Distinguish verbal and non-verbal communication',
      'Identify barriers to communication',
    ],
    introduction: 'Communication is how care is coordinated and how trust is built. Poor communication is a leading factor in adverse events. Good communication is a clinical skill, not only a personality trait.',
    sections: [
      { heading: 'Elements of Communication', content: 'Sender, message, channel, receiver and feedback. Noise (literal or figurative) can distort the message. Confirming understanding closes the loop.' },
      { heading: 'Verbal and Non-Verbal', content: 'Words matter; so do tone, pace, eye contact, posture and silence. Non-verbal cues often reveal anxiety or pain before words do.' },
      { heading: 'Barriers', content: 'Language differences, noise, pain, fear, assumptions, jargon, hierarchy and time pressure all block clear exchange. Anticipate and reduce barriers.' },
    ],
    clinicalConnection: 'Handover, consent and patient education succeed or fail based on communication quality.',
    midwiferyConnection: 'Explaining labour progress, listening to concerns and briefing the team require clear, calm communication.',
    keyPoints: ['Communication is a safety skill', 'Non-verbal cues matter', 'Confirm understanding'],
    rememberThis: 'What you said is less important than what the patient understood.',
    quickReview: [
      { q: 'Why is feedback important in communication?', a: 'It confirms whether the message was understood.' },
      { q: 'Name two barriers to communication.', a: 'Examples: language, noise, pain, jargon, fear, time pressure.' },
    ],
    quizId: 'quiz-bnd109-l09',
    keyTerms: ['Communication', 'Non-verbal communication', 'Feedback', 'Barrier'],
  },

  'bnd109-l10': {
    id: 'bnd109-l10', courseId: 'bnd-109', number: 10,
    title: 'Therapeutic Communication', duration: '18 min',
    objectives: [
      'Define therapeutic communication',
      'List helpful techniques and unhelpful behaviours',
      'Apply therapeutic communication to maternity contexts',
    ],
    introduction: 'Therapeutic communication is purposeful talk that helps the patient express concerns, understand care and feel supported. It is different from casual conversation: it is focused on the patient’s needs.',
    sections: [
      { heading: 'Helpful Techniques', content: 'Active listening. Open questions. Clarifying. Reflecting feelings. Summarising. Silence when appropriate. Empathy without false reassurance.' },
      { heading: 'Unhelpful Behaviours', content: 'Interrupting. Judging. Changing the subject. False reassurance (“everything will be fine”). Giving advice too early. Using jargon. Appearing distracted.' },
      { heading: 'In Maternity Care', content: 'A labouring woman needs calm presence, clear explanations and validation of her experience. Partners and families also need information and support within confidentiality limits.' },
    ],
    clinicalConnection: 'Therapeutic communication reduces anxiety, improves cooperation and reveals important clinical information.',
    midwiferyConnection: 'Birth is emotional as well as physical. How you speak can ease fear or increase it.',
    keyPoints: ['Purpose is the patient’s wellbeing', 'Listen more than you speak', 'Avoid false reassurance'],
    rememberThis: '“Tell me more about what worries you” often helps more than a quick fix statement.',
    quickReview: [
      { q: 'What is therapeutic communication?', a: 'Purposeful communication focused on the patient’s needs and support.' },
      { q: 'Name one unhelpful behaviour.', a: 'Examples: false reassurance, interrupting, judging, jargon.' },
    ],
    quizId: 'quiz-bnd109-l10',
    keyTerms: ['Therapeutic communication', 'Active listening', 'Empathy', 'Open question'],
  },


  'bnd109-l11': {
    id: 'bnd109-l11', courseId: 'bnd-109', number: 11,
    title: 'Health, Illness and Wellness', duration: '16 min',
    objectives: [
      'Define health, illness and wellness in broad terms',
      'Describe the health–illness continuum',
      'Relate these concepts to maternal care',
    ],
    introduction: 'Health is more than absence of disease. Wellness includes physical, mental and social wellbeing. Illness is a personal experience of dysfunction. Pregnancy is a healthy state that still needs monitoring and support.',
    sections: [
      { heading: 'Definitions', content: 'Health — a state of complete physical, mental and social wellbeing (WHO ideal) and also a practical capacity to function and adapt.\nIllness — the lived experience of feeling unwell or having a diagnosed condition.\nWellness — active movement toward higher wellbeing.' },
      { heading: 'Continuum Thinking', content: 'People move along a continuum between optimal wellness and severe illness. Acute events, chronic conditions and life stages shift position on that continuum.' },
      { heading: 'Maternity Context', content: 'A pregnant woman may be “healthy” yet experience symptoms and risks. Midwifery care promotes wellness while screening for illness.' },
    ],
    clinicalConnection: 'Care goals differ for acute illness, chronic disease and health promotion.',
    midwiferyConnection: 'Antenatal care is largely health promotion and risk screening within a normal life event.',
    keyPoints: ['Health is multi-dimensional', 'Illness is experienced as well as diagnosed', 'Pregnancy is normal but not risk-free'],
    rememberThis: 'Do not wait for disease to promote health — wellness work happens every day.',
    quickReview: [
      { q: 'Is health only the absence of disease?', a: 'No — it includes physical, mental and social wellbeing and ability to function.' },
      { q: 'Why is continuum thinking useful?', a: 'People move between wellness and illness; care can promote movement toward wellness.' },
    ],
    quizId: 'quiz-bnd109-l11',
    keyTerms: ['Health', 'Illness', 'Wellness', 'Health–illness continuum'],
  },

  'bnd109-l12': {
    id: 'bnd109-l12', courseId: 'bnd-109', number: 12,
    title: 'Basic Human Needs', duration: '16 min',
    objectives: [
      'Outline a hierarchy of basic human needs',
      'Prioritise needs in clinical situations',
      'Apply needs thinking to mother and newborn',
    ],
    introduction: 'People share basic needs: oxygen, fluid, nutrition, safety, rest, belonging and esteem. When needs compete, life-threatening needs come first. Needs frameworks help prioritise care.',
    sections: [
      { heading: 'Physiological Needs', content: 'Airway, breathing, circulation, nutrition, hydration, elimination, temperature and rest. These dominate in emergencies.' },
      { heading: 'Safety and Higher Needs', content: 'Physical safety, security, pain control, belonging, love, esteem and self-actualisation matter for recovery and dignity. Neglecting them after stabilisation harms outcomes and experience.' },
      { heading: 'Prioritisation', content: 'ABC (airway, breathing, circulation) and similar frameworks guide urgency. After stabilisation, address comfort, information and family support.' },
    ],
    diagram: { title: 'Needs Priority Overview', description: 'Simple hierarchy from physiological survival needs up to psychosocial needs, with maternity examples.', caption: 'Life-threatening needs first; dignity and belonging always matter.' },
    clinicalConnection: 'Triage and care planning use needs prioritisation every shift.',
    midwiferyConnection: 'A labouring woman’s need for oxygen and safety comes first; her need for continuous support and respect is also essential for quality care.',
    keyPoints: ['Physiological needs first in crisis', 'Psychosocial needs are not optional', 'Prioritise, then humanise'],
    rememberThis: 'Fix the airway before the paperwork — but do both.',
    quickReview: [
      { q: 'Which needs are addressed first in an emergency?', a: 'Physiological survival needs (airway, breathing, circulation).' },
      { q: 'Are belonging and dignity real nursing concerns?', a: 'Yes — they affect recovery, trust and quality of care.' },
    ],
    quizId: 'quiz-bnd109-l12',
    keyTerms: ['Human needs', 'Prioritisation', 'Safety', 'Physiological needs'],
  },

  'bnd109-l13': {
    id: 'bnd109-l13', courseId: 'bnd-109', number: 13,
    title: 'The Nursing Process — Overview', duration: '16 min',
    objectives: [
      'List the steps of the nursing process',
      'Explain why a systematic process improves care',
      'Describe the process as cyclic, not strictly linear',
    ],
    introduction: 'The nursing process is a systematic method: assess, diagnose, plan, implement, evaluate. It organises thinking so care is purposeful, individualised and accountable.',
    sections: [
      { heading: 'The Five Steps', content: '1. Assessment — collect data.\n2. Nursing diagnosis — identify problems/responses nurses can treat.\n3. Planning — set goals and choose interventions.\n4. Implementation — carry out the plan.\n5. Evaluation — check whether goals were met and revise.' },
      { heading: 'Why It Matters', content: 'Without a process, care becomes reactive task lists. With a process, you can justify actions, detect change early and improve outcomes.' },
      { heading: 'Cyclic Nature', content: 'New data can send you back to assessment at any time. Evaluation often restarts the cycle.' },
    ],
    diagram: { title: 'Nursing Process Cycle', description: 'Circular flow: Assessment → Diagnosis → Planning → Implementation → Evaluation → back to Assessment.', caption: 'The nursing process is continuous.' },
    clinicalConnection: 'Care plans and progress notes should reflect process thinking.',
    midwiferyConnection: 'Assessing labour progress, identifying problems, planning support, acting and reassessing is the nursing process in maternity form.',
    keyPoints: ['Five steps, continuous cycle', 'Process supports accountability', 'Always ready to reassess'],
    rememberThis: 'If the patient changes, the plan must change — evaluation is not optional.',
    quickReview: [
      { q: 'Name the five steps of the nursing process.', a: 'Assessment, diagnosis, planning, implementation, evaluation.' },
      { q: 'Is the nursing process only linear?', a: 'No — it is cyclic; new data can restart assessment.' },
    ],
    quizId: 'quiz-bnd109-l13',
    keyTerms: ['Nursing process', 'Assessment', 'Evaluation', 'Care plan'],
  },

  'bnd109-l14': {
    id: 'bnd109-l14', courseId: 'bnd-109', number: 14,
    title: 'Assessment', duration: '18 min',
    objectives: [
      'Distinguish subjective and objective data',
      'Describe primary methods of assessment',
      'Explain the importance of baseline and ongoing assessment',
    ],
    introduction: 'Assessment is systematic data collection. It is the foundation of every other step. Incomplete assessment leads to wrong plans.',
    sections: [
      { heading: 'Types of Data', content: 'Subjective — what the patient says (symptoms, feelings, history).\nObjective — what you observe or measure (signs, vital signs, examination findings, lab results).' },
      { heading: 'Methods', content: 'Interview and history. Inspection, palpation, auscultation and other examination skills as trained. Review of records and test results. Observation of behaviour and environment.' },
      { heading: 'Baseline and Ongoing', content: 'Initial assessment establishes baseline. Ongoing assessment detects improvement or deterioration. In labour and postnatal care, ongoing assessment is continuous.' },
    ],
    clinicalConnection: 'Vital signs, pain scores and clinical observation are core assessment tools.',
    midwiferyConnection: 'Maternal observations, fetal heart monitoring and newborn checks are specialised forms of assessment.',
    keyPoints: ['Subjective + objective', 'Baseline enables comparison', 'Ongoing assessment saves lives'],
    rememberThis: 'If you did not assess it, you cannot safely claim it is normal.',
    quickReview: [
      { q: 'What is subjective data?', a: 'Information the patient reports (symptoms, history, feelings).' },
      { q: 'Why is ongoing assessment needed?', a: 'To detect change from baseline and respond early.' },
    ],
    quizId: 'quiz-bnd109-l14',
    keyTerms: ['Assessment', 'Subjective data', 'Objective data', 'Baseline'],
  },

  'bnd109-l15': {
    id: 'bnd109-l15', courseId: 'bnd-109', number: 15,
    title: 'Nursing Diagnosis', duration: '16 min',
    objectives: [
      'Explain what a nursing diagnosis is',
      'Distinguish nursing diagnosis from medical diagnosis',
      'Describe the purpose of stating problems clearly',
    ],
    introduction: 'A nursing diagnosis names a patient’s response to health conditions that nurses are licensed to treat — for example, acute pain, risk of infection, or anxiety. It is not the same as a medical diagnosis.',
    sections: [
      { heading: 'Nursing vs Medical Diagnosis', content: 'Medical diagnosis identifies disease (e.g. pneumonia). Nursing diagnosis identifies human responses nurses can address (e.g. ineffective airway clearance, activity intolerance, knowledge deficit).' },
      { heading: 'Why Name the Problem?', content: 'Clear problem statements guide goal-setting and intervention choice. Vague labels (“patient unwell”) do not direct care.' },
      { heading: 'Risk vs Actual', content: 'Actual problems exist now. Risk diagnoses identify vulnerability before harm occurs (e.g. risk of falls, risk of pressure injury). Prevention is part of nursing.' },
    ],
    clinicalConnection: 'Care plans improve when problems are stated specifically enough to act on.',
    midwiferyConnection: 'Examples: acute pain in labour, risk of infection after rupture of membranes, anxiety related to labour progress — nursing/midwifery diagnoses guide support.',
    keyPoints: ['Nursing diagnosis = response nurses can treat', 'Different from medical diagnosis', 'Risk diagnoses support prevention'],
    rememberThis: 'Name the response, not only the disease — that is where nursing action lives.',
    quickReview: [
      { q: 'How does nursing diagnosis differ from medical diagnosis?', a: 'It focuses on human responses nurses can treat, not the disease label alone.' },
      { q: 'What is a risk nursing diagnosis?', a: 'A statement of vulnerability before the problem has occurred.' },
    ],
    quizId: 'quiz-bnd109-l15',
    keyTerms: ['Nursing diagnosis', 'Medical diagnosis', 'Risk diagnosis'],
  },


  'bnd109-l16': {
    id: 'bnd109-l16', courseId: 'bnd-109', number: 16,
    title: 'Planning', duration: '16 min',
    objectives: [
      'Describe goal-setting in the nursing process',
      'Explain SMART-style goals in simple terms',
      'Link interventions to assessed problems',
    ],
    introduction: 'Planning turns problems into goals and chosen actions. Good plans are individualised, realistic and measurable so evaluation is possible.',
    sections: [
      { heading: 'Goals and Outcomes', content: 'Goals describe the desired patient state. Outcomes should be observable or measurable where possible (e.g. pain score reduced, vital signs within target, patient can demonstrate a skill).' },
      { heading: 'Selecting Interventions', content: 'Interventions are actions nurses take or delegate. They should address the stated problem, fit the patient’s condition and preferences, and follow evidence and policy.' },
      { heading: 'Priorities', content: 'Not everything can be done at once. Life threats first, then problems affecting safety and comfort, then longer-term education and support needs.' },
    ],
    clinicalConnection: 'Written care plans communicate priorities across shifts.',
    midwiferyConnection: 'Birth plans and intrapartum care plans coordinate preferences with safety requirements.',
    keyPoints: ['Goals should be clear enough to evaluate', 'Interventions must match problems', 'Prioritise'],
    rememberThis: 'If you cannot tell whether the goal was met, the goal was not clear enough.',
    quickReview: [
      { q: 'What makes a goal useful?', a: 'It is clear, realistic and evaluable (ideally measurable or observable).' },
      { q: 'Why prioritise interventions?', a: 'Resources and time are limited; life threats and safety come first.' },
    ],
    quizId: 'quiz-bnd109-l16',
    keyTerms: ['Goal', 'Outcome', 'Intervention', 'Care plan'],
  },

  'bnd109-l17': {
    id: 'bnd109-l17', courseId: 'bnd-109', number: 17,
    title: 'Implementation', duration: '16 min',
    objectives: [
      'Define implementation in the nursing process',
      'Describe safe principles for carrying out care',
      'Explain the importance of ongoing assessment during implementation',
    ],
    introduction: 'Implementation is doing the planned care — and adapting when the patient’s condition changes. It includes direct care, education, coordination and documentation.',
    sections: [
      { heading: 'Types of Implementation', content: 'Direct care (hands-on support). Indirect care (coordination, referrals). Education. Emotional support. Collaboration with the team.' },
      { heading: 'Safety Principles', content: 'Verify identity. Follow infection-control standards. Work within competence and policy. Explain before acting. Reassess during and after interventions.' },
      { heading: 'Flexibility', content: 'Plans are guides, not rigid scripts. If the patient deteriorates or refuses, stop, reassess and escalate as needed.' },
    ],
    clinicalConnection: 'Most visible nursing work is implementation — but it must stay linked to assessment and evaluation.',
    midwiferyConnection: 'Supporting positions in labour, assisting breastfeeding and giving information are implementation activities guided by continuous assessment.',
    keyPoints: ['Implement the plan safely', 'Stay within competence', 'Reassess while acting'],
    rememberThis: 'Doing the task is not enough — notice the response.',
    quickReview: [
      { q: 'What is implementation?', a: 'Carrying out the planned nursing interventions.' },
      { q: 'Why reassess during implementation?', a: 'The patient’s condition can change; care must adapt.' },
    ],
    quizId: 'quiz-bnd109-l17',
    keyTerms: ['Implementation', 'Direct care', 'Competence'],
  },

  'bnd109-l18': {
    id: 'bnd109-l18', courseId: 'bnd-109', number: 18,
    title: 'Evaluation', duration: '15 min',
    objectives: [
      'Explain the purpose of evaluation',
      'Describe how to judge whether goals were met',
      'State what to do when goals are not met',
    ],
    introduction: 'Evaluation compares actual outcomes with planned goals. It closes the cycle and often restarts assessment. Without evaluation, care cannot improve.',
    sections: [
      { heading: 'Judging Outcomes', content: 'Met — goal achieved.\nPartially met — some progress.\nNot met — little or no progress.\nUse data: vital signs, pain scores, patient reports, observation.' },
      { heading: 'When Goals Are Not Met', content: 'Ask why: Was the assessment incomplete? Was the goal unrealistic? Was the intervention wrong or poorly timed? Did new problems appear? Then revise the plan.' },
      { heading: 'Continuous Quality', content: 'Evaluation is personal (this patient) and professional (improving practice over time).' },
    ],
    clinicalConnection: 'Progress notes should show whether interventions worked.',
    midwiferyConnection: 'After supporting a position change in labour, evaluate: did comfort improve? Did fetal heart remain reassuring? Adjust accordingly.',
    keyPoints: ['Compare outcomes to goals', 'Unmet goals trigger reassessment', 'Evaluation improves the next cycle'],
    rememberThis: 'Evaluation is not criticism — it is how care gets smarter.',
    quickReview: [
      { q: 'What does evaluation compare?', a: 'Actual outcomes with planned goals.' },
      { q: 'What should you do if a goal is not met?', a: 'Analyse why and revise assessment/plan/interventions.' },
    ],
    quizId: 'quiz-bnd109-l18',
    keyTerms: ['Evaluation', 'Outcome', 'Revision'],
  },

  'bnd109-l19': {
    id: 'bnd109-l19', courseId: 'bnd-109', number: 19,
    title: 'Documentation and Reporting', duration: '18 min',
    objectives: [
      'Explain why documentation is a professional and legal duty',
      'List principles of good documentation',
      'Describe effective handover/reporting',
    ],
    introduction: 'If it is not documented, it is difficult to prove it was done. Documentation communicates care across shifts, supports continuity and provides a legal record. Reporting (handover) transfers responsibility safely.',
    sections: [
      { heading: 'Principles of Documentation', content: 'Accurate, timely, factual, complete and clear. Use approved abbreviations only. Do not record opinions as facts. Correct errors according to policy. Protect confidentiality.' },
      { heading: 'What to Record', content: 'Assessments, interventions, patient responses, education given, communications with the team, and significant events. Record refusal of care and the information provided.' },
      { heading: 'Handover/Reporting', content: 'Structured tools (e.g. SBAR: Situation, Background, Assessment, Recommendation) improve clarity. Include current status, recent changes, pending tasks and risks.' },
    ],
    clinicalConnection: 'Poor documentation contributes to repeated questions, missed tasks and legal vulnerability.',
    midwiferyConnection: 'Partographs, observation charts and birth records are critical maternity documents — accuracy protects mother and baby.',
    keyPoints: ['Document factually and promptly', 'Handover is a safety intervention', 'Confidentiality still applies'],
    commonMistakes: [
      { mistake: 'Leaving documentation until the end of a long shift.', correction: 'Document significant findings close to the time of care whenever possible.' },
    ],
    rememberThis: 'Write so the next nurse or midwife can continue care safely without guessing.',
    quickReview: [
      { q: 'Name three principles of good documentation.', a: 'Examples: accurate, timely, factual, complete, clear, confidential.' },
      { q: 'What does SBAR help with?', a: 'Structured, clear handover communication.' },
    ],
    quizId: 'quiz-bnd109-l19',
    keyTerms: ['Documentation', 'Handover', 'SBAR', 'Confidentiality'],
  },

  'bnd109-l20': {
    id: 'bnd109-l20', courseId: 'bnd-109', number: 20,
    title: 'Patient Safety and Quality Care', duration: '18 min',
    objectives: [
      'Define patient safety and quality care',
      'List common safety priorities for students',
      'Integrate course themes into a safety mindset',
    ],
    introduction: 'Patient safety means reducing preventable harm. Quality care is effective, person-centred, timely and equitable. Everything in this course — assessment, communication, ethics, documentation — serves safety and quality.',
    sections: [
      { heading: 'Safety Priorities', content: 'Correct patient identification. Infection prevention. Medication safety (as trained and authorised). Fall and pressure-injury prevention. Safe handover. Escalation of deterioration. Equipment and electrical safety awareness.' },
      { heading: 'Human Factors', content: 'Fatigue, distraction, hierarchy and poor communication contribute to error. Speaking up, double-checking and using checklists are professional behaviours, not signs of weakness.' },
      { heading: 'Quality and Improvement', content: 'Quality improves when teams learn from near-misses and incidents without blame culture. Students contribute by reporting concerns and following standards.' },
      { heading: 'Course Integration', content: 'Professional values → ethical action.\nCommunication → fewer misunderstandings.\nNursing process → systematic care.\nDocumentation → continuity.\nSafety → the outcome patients deserve.' },
    ],
    clinicalConnection: 'Most serious incidents involve communication or process failures that were preventable.',
    midwiferyConnection: 'Maternal and newborn safety depend on observation, escalation, infection control and respectful teamwork.',
    keyPoints: [
      'Safety is everyone’s responsibility',
      'Communication and process prevent harm',
      'Report concerns early',
    ],
    rememberThis: 'If something feels unsafe, speak up — silence protects the error, not the patient.',
    quickReview: [
      { q: 'What is patient safety?', a: 'Reducing preventable harm to patients.' },
      { q: 'Name two student safety priorities.', a: 'Examples: correct ID, infection control, escalation, safe handover, following competence limits.' },
    ],
    quizId: 'quiz-bnd109-l20',
    keyTerms: ['Patient safety', 'Quality care', 'Escalation', 'Infection prevention'],
  },


  /* ================================================================
     BND 111 — FUNDAMENTALS OF NURSING (CLINICAL) 1
     Fully authored clinical-learning pathway for Midwifery Easy Learning Center.
     Educational content for Level 100 midwifery/nursing students.
     NOT a substitute for supervised institutional clinical instruction,
     competency assessment, or local clinical protocols.
     ================================================================ */

  'bnd111-l01': {
    id: 'bnd111-l01', courseId: 'bnd-111', number: 1,
    title: 'Introduction to Clinical Nursing Practice', duration: '15 min',
    objectives: [
      'Describe the purpose of clinical learning for Level 100 students',
      'Distinguish educational preparation from supervised competency',
      'List expectations of a student in the clinical environment',
    ],
    introduction: 'Clinical learning bridges theory and practice. This course prepares you with concepts, safety principles and professional behaviours. Actual hands-on skills are learned and assessed under institutional supervision using local protocols — this app supports understanding, not competency certification.',
    sections: [
      { heading: 'What Clinical Learning Means', content: 'You will observe, assist within your scope, practise under supervision, reflect and document. You will not work independently beyond what your institution authorises.' },
      { heading: 'Education vs Competency', content: 'Reading and quizzes build knowledge. Supervised practice, feedback and formal assessment build competence. Always follow your college and facility rules.' },
      { heading: 'Student Expectations', content: 'Arrive prepared. Identify yourself as a student. Ask when unsure. Protect patient dignity. Report concerns. Reflect on every experience.' },
    ],
    safetyNotes: 'Never perform a procedure you have not been taught and authorised to do under supervision. When in doubt, stop and ask.',
    clinicalConnection: 'Every clinical shift is a learning opportunity guided by safety and respect.',
    midwiferyConnection: 'Maternity clinical areas demand the same foundations: identification, hygiene, communication and escalation.',
    keyPoints: ['This course educates; supervision certifies', 'Stay within student scope', 'Ask early'],
    rememberThis: 'Knowledge prepares you; supervised practice makes you safe.',
    quickReview: [
      { q: 'Does this app replace supervised clinical assessment?', a: 'No — it supports learning only.' },
      { q: 'What should you do if unsure in clinical practice?', a: 'Stop and ask a supervisor.' },
    ],
    quizId: 'quiz-bnd111-l01',
    keyTerms: ['Clinical learning', 'Supervision', 'Scope of practice'],
  },

  'bnd111-l02': {
    id: 'bnd111-l02', courseId: 'bnd-111', number: 2,
    title: 'Clinical Environment and Professional Conduct', duration: '16 min',
    objectives: [
      'Describe features of a safe clinical environment',
      'List professional conduct expectations for students',
      'Explain why first impressions and behaviour matter',
    ],
    introduction: 'The clinical environment includes people, equipment, noise, time pressure and emotion. Professional conduct — punctuality, appearance, respect, honesty — protects patients and your learning.',
    sections: [
      { heading: 'The Clinical Setting', content: 'Wards, clinics, theatres and community sites each have routines. Learn orientation points: emergency exits, hand hygiene stations, where to find help, and who your supervisor is.' },
      { heading: 'Professional Conduct', content: 'Introduce yourself. Wear required ID and uniform. Keep phones on policy. Speak respectfully. Accept feedback without defensiveness. Admit mistakes promptly.' },
      { heading: 'Boundaries', content: 'Maintain professional relationships. Do not share patient information on social media. Do not give care outside authorised roles.' },
    ],
    safetyNotes: 'Know how to call for help in every clinical area before you need it.',
    clinicalConnection: 'Conduct is observed continuously and forms part of clinical assessment.',
    midwiferyConnection: 'Labour wards are high-emotion environments — calm, respectful conduct supports women and teams.',
    keyPoints: ['Orient yourself early', 'Conduct is part of competence', 'Boundaries protect everyone'],
    rememberThis: 'How you behave when no one seems to be watching is still professional conduct.',
    quickReview: [
      { q: 'Name two professional conduct expectations.', a: 'Examples: punctuality, respectful speech, honest reporting, correct ID.' },
      { q: 'Why know emergency call procedures?', a: 'So you can get help immediately when needed.' },
    ],
    quizId: 'quiz-bnd111-l02',
    keyTerms: ['Professional conduct', 'Clinical environment', 'Boundaries'],
  },

  'bnd111-l03': {
    id: 'bnd111-l03', courseId: 'bnd-111', number: 3,
    title: 'Patient Identification and Safety', duration: '16 min',
    objectives: [
      'Explain why correct patient identification is critical',
      'Describe standard identification checks',
      'Link identification to medication, procedures and documentation',
    ],
    introduction: 'Wrong-patient errors cause serious harm. Identification is a non-negotiable safety step before any care, observation or documentation.',
    sections: [
      { heading: 'Why Identification Matters', content: 'Similar names, shared rooms, language barriers and urgency increase risk. A correct ID check prevents wrong treatment, wrong sample and wrong record entry.' },
      { heading: 'How to Check (Principles)', content: 'Use the identifiers required by local policy (often full name and date of birth, plus ID band where used). Ask the patient to state their name when possible. Match to the record or order. Never skip checks because you “know” the patient.' },
      { heading: 'When to Check', content: 'Before observations, medications (as authorised), procedures, transfers, specimen collection and documentation. Recheck if interrupted.' },
    ],
    diagram: { title: 'Patient ID Check Flow', description: 'Simple flow: approach → ask patient to state identifiers → match to record/band → proceed or stop if mismatch.', caption: 'Identify before you act.' },
    safetyNotes: 'If identifiers do not match, stop and escalate. Do not proceed on assumption.',
    clinicalConnection: 'ID checks are audited safety behaviours in every clinical area.',
    midwiferyConnection: 'Mothers and newborns both need correct identification — especially in busy postnatal areas.',
    keyPoints: ['Two identifiers minimum (follow local policy)', 'Ask the patient to state their name', 'Mismatch = stop'],
    commonMistakes: [
      { mistake: 'Skipping ID because you recognise the face.', correction: 'Always complete the formal check — recognition is not a substitute.' },
    ],
    rememberThis: 'Right patient, every time — before every action.',
    quickReview: [
      { q: 'What should you do if name and ID band do not match?', a: 'Stop and escalate according to policy.' },
      { q: 'When is patient ID required?', a: 'Before care, observations, procedures, samples and documentation.' },
    ],
    quizId: 'quiz-bnd111-l03',
    keyTerms: ['Patient identification', 'Two identifiers', 'Wrong-patient error'],
  },

  'bnd111-l04': {
    id: 'bnd111-l04', courseId: 'bnd-111', number: 4,
    title: 'Hand Hygiene and Infection Prevention', duration: '18 min',
    objectives: [
      'Explain why hand hygiene is the foundation of infection prevention',
      'List key moments for hand hygiene',
      'Describe principles of standard precautions',
    ],
    introduction: 'Most healthcare-associated infections are preventable. Hand hygiene is the single most important routine practice. Standard precautions assume any patient may carry infection.',
    sections: [
      { heading: 'Why Hands Matter', content: 'Hands transfer microorganisms between patients, surfaces and staff. Cleaning hands at the right moments breaks the chain of infection.' },
      { heading: 'Key Moments (Principles)', content: 'Before touching a patient. Before clean/aseptic tasks. After body fluid exposure risk. After touching a patient. After touching patient surroundings. Follow your facility’s WHO or local 5-moments guidance exactly in practice.' },
      { heading: 'Standard Precautions', content: 'Hand hygiene, appropriate PPE, safe handling of sharps and waste, respiratory hygiene, and environmental cleaning. Apply to all patients.' },
    ],
    diagram: { title: 'Hand Hygiene Moments', description: 'Visual of key moments before and after patient contact and procedures.', caption: 'Clean hands at the right moments — every time.' },
    safetyNotes: 'Alcohol rub is effective on visibly clean hands; wash with soap and water when hands are visibly soiled or after certain exposures as per policy. Jewellery and long nails reduce effectiveness — follow local dress code.',
    clinicalConnection: 'Hand hygiene compliance is monitored because it saves lives.',
    midwiferyConnection: 'Newborns and postnatal women are vulnerable to infection — rigorous hand hygiene is non-negotiable.',
    keyPoints: ['Hands are the main vehicle of transmission', 'Moments matter as much as method', 'Standard precautions for all'],
    rememberThis: 'If you are about to touch a patient or a clean site, clean your hands first.',
    quickReview: [
      { q: 'Name two key moments for hand hygiene.', a: 'Examples: before touching a patient; after body fluid exposure; after touching surroundings.' },
      { q: 'What are standard precautions?', a: 'Basic infection-prevention practices applied to all patients.' },
    ],
    quizId: 'quiz-bnd111-l04',
    keyTerms: ['Hand hygiene', 'Standard precautions', 'Infection prevention'],
  },

  'bnd111-l05': {
    id: 'bnd111-l05', courseId: 'bnd-111', number: 5,
    title: 'Personal Protective Equipment (PPE)', duration: '16 min',
    objectives: [
      'Explain the purpose of PPE',
      'List common PPE items and when they are used in principle',
      'Describe safe donning and doffing concepts',
    ],
    introduction: 'PPE protects you and the patient when there is a risk of exposure to blood, body fluids or infectious agents. Using the wrong PPE — or removing it incorrectly — can increase risk.',
    sections: [
      { heading: 'Common PPE', content: 'Gloves, aprons or gowns, masks, eye protection. Selection depends on the task and the risk, following local policy and transmission-based precautions when indicated.' },
      { heading: 'Principles of Use', content: 'Choose PPE based on anticipated exposure. Put on (don) before exposure. Remove (doff) carefully to avoid self-contamination. Perform hand hygiene after removal.' },
      { heading: 'Gloves Are Not Enough', content: 'Gloves do not replace hand hygiene. Change gloves between tasks and patients. Do not touch clean items with contaminated gloves.' },
    ],
    diagram: { title: 'PPE Principles', description: 'Simple sequence: risk assess → select PPE → don → perform task → doff safely → hand hygiene.', caption: 'Right PPE, right order, clean hands after.' },
    safetyNotes: 'Follow institutional donning/doffing sequences taught in skills lab. Never reuse single-use PPE.',
    clinicalConnection: 'PPE failures are a common source of staff and patient exposure.',
    midwiferyConnection: 'Blood and amniotic fluid exposure risk is real in labour and birth — correct PPE is essential.',
    keyPoints: ['PPE is task- and risk-based', 'Doffing is a high-risk moment', 'Hand hygiene after PPE removal'],
    rememberThis: 'Dirty gloves contaminate everything they touch — including your face if you adjust a mask.',
    quickReview: [
      { q: 'Do gloves replace hand hygiene?', a: 'No.' },
      { q: 'When is doffing especially risky?', a: 'When removing contaminated PPE — self-contamination can occur.' },
    ],
    quizId: 'quiz-bnd111-l05',
    keyTerms: ['PPE', 'Donning', 'Doffing', 'Gloves'],
  },


  'bnd111-l06': {
    id: 'bnd111-l06', courseId: 'bnd-111', number: 6,
    title: 'Patient Privacy, Dignity and Consent', duration: '16 min',
    objectives: [
      'Apply privacy and dignity principles in clinical care',
      'Explain consent at a student level',
      'Describe actions when a patient refuses care',
    ],
    introduction: 'Clinical care often involves touch, exposure and personal questions. Privacy, dignity and consent are not optional extras — they are safety and rights requirements.',
    sections: [
      { heading: 'Privacy and Dignity in Practice', content: 'Close curtains and doors. Expose only what is needed. Explain before touching. Use preferred names. Keep voices low. Do not discuss patients in corridors or on social media.' },
      { heading: 'Consent Principles', content: 'Explain what you plan to do and why. Check understanding. Confirm agreement. For students, ensure the patient knows you are a student and accepts your involvement. Follow local consent policy for procedures.' },
      { heading: 'Refusal', content: 'Patients may refuse. Explore concerns, inform the supervisor, document according to policy, and do not coerce. Safety exceptions are governed by law and policy — escalate rather than decide alone.' },
    ],
    safetyNotes: 'Never proceed with intimate care if the patient objects and you have not involved a supervisor as required by policy.',
    clinicalConnection: 'Dignity breaches damage trust even when clinical outcomes are good.',
    midwiferyConnection: 'Labour examinations and birth support require continuous attention to consent and privacy.',
    keyPoints: ['Explain before you touch', 'Student status must be clear', 'Refusal requires respectful response and escalation'],
    rememberThis: 'Curtains, explanation and permission turn a procedure into respectful care.',
    quickReview: [
      { q: 'What should you do before intimate care?', a: 'Explain, seek agreement, protect privacy, involve supervisor as required.' },
      { q: 'If a patient refuses, what should a student do?', a: 'Not coerce; inform supervisor; document per policy.' },
    ],
    quizId: 'quiz-bnd111-l06',
    keyTerms: ['Consent', 'Privacy', 'Dignity', 'Refusal'],
  },

  'bnd111-l07': {
    id: 'bnd111-l07', courseId: 'bnd-111', number: 7,
    title: 'Therapeutic Communication in Clinical Settings', duration: '16 min',
    objectives: [
      'Apply therapeutic communication techniques at the bedside',
      'Manage barriers such as noise, pain and fear',
      'Use calm communication during procedures',
    ],
    introduction: 'In clinical settings, communication must be clear, kind and purposeful under time pressure. How you speak affects cooperation, anxiety and the information you receive.',
    sections: [
      { heading: 'Bedside Techniques', content: 'Introduce yourself and your role. Explain what will happen. Use plain language. Listen actively. Check understanding. Acknowledge feelings without false reassurance.' },
      { heading: 'During Procedures', content: 'Warn before potentially uncomfortable steps. Offer simple choices when possible (e.g. breathing). Watch non-verbal cues of pain or fear and respond.' },
      { heading: 'Difficult Moments', content: 'If a patient is angry or distressed, stay calm, avoid arguing, involve a supervisor early, and prioritise safety.' },
    ],
    safetyNotes: 'Language barriers need interpreters per policy — family members are not always appropriate interpreters for clinical information.',
    clinicalConnection: 'Many complaints and some adverse events start with failed communication.',
    midwiferyConnection: 'Coaching a woman through a contraction is therapeutic communication in action.',
    keyPoints: ['Explain, listen, check understanding', 'Warn before discomfort', 'Escalate conflict early'],
    rememberThis: 'Silence and presence can be as therapeutic as words.',
    quickReview: [
      { q: 'Name one bedside communication technique.', a: 'Examples: introduce role, plain language, active listening, check understanding.' },
      { q: 'Why warn before a painful step?', a: 'It reduces fear and builds trust.' },
    ],
    quizId: 'quiz-bnd111-l07',
    keyTerms: ['Therapeutic communication', 'Plain language', 'Active listening'],
  },

  'bnd111-l08': {
    id: 'bnd111-l08', courseId: 'bnd-111', number: 8,
    title: 'Vital Signs and Basic Observations', duration: '20 min',
    objectives: [
      'List the standard vital signs and what they indicate',
      'Explain principles of accurate measurement',
      'Describe when to escalate abnormal findings',
    ],
    introduction: 'Vital signs are core clinical observations: temperature, pulse, respiration, blood pressure and often oxygen saturation and level of consciousness. Accuracy and timely escalation save lives. Exact techniques are taught and assessed in supervised skills sessions.',
    sections: [
      { heading: 'What Vital Signs Tell You', content: 'Temperature — infection, environment, thermoregulation.\nPulse — rate, rhythm, strength reflecting cardiac and circulatory status.\nRespiration — rate, depth, effort reflecting ventilation and distress.\nBlood pressure — perfusion pressure.\nSpO₂ — oxygenation (when used).\nConsciousness — brain function and safety.' },
      { heading: 'Accuracy Principles', content: 'Correct patient ID. Correct equipment size (e.g. BP cuff). Resting patient when required. Proper site and technique as trained. Record promptly with time and context (e.g. after pain, after activity).' },
      { heading: 'Escalation', content: 'Know normal ranges for the population (including pregnancy norms where relevant). Report values outside expected range, sudden changes, or concerning patterns to the supervising nurse/midwife immediately.' },
    ],
    diagram: { title: 'Vital Signs Overview', description: 'Icons for T, P, R, BP, SpO2 with note to escalate abnormal or changing values.', caption: 'Measure carefully. Report early.' },
    safetyNotes: 'This lesson teaches concepts only. Perform measurements only after supervised training and as authorised. Never ignore a worrying value because “it might be equipment error” without repeating and escalating.',
    clinicalConnection: 'Early warning systems rely on accurate observations and prompt reporting.',
    midwiferyConnection: 'Maternal observations in pregnancy, labour and postpartum use the same principles with pregnancy-specific norms.',
    keyPoints: ['Accuracy depends on technique and equipment', 'Trends matter as much as single values', 'Escalate abnormal or changing findings'],
    rememberThis: 'A vital sign not reported is a vital sign wasted.',
    quickReview: [
      { q: 'Name four vital signs.', a: 'Temperature, pulse, respiration, blood pressure (plus SpO₂/consciousness as used).' },
      { q: 'What should you do with an abnormal reading?', a: 'Recheck if appropriate and escalate to the supervisor promptly.' },
    ],
    quizId: 'quiz-bnd111-l08',
    keyTerms: ['Vital signs', 'Pulse', 'Blood pressure', 'Escalation'],
  },

  'bnd111-l09': {
    id: 'bnd111-l09', courseId: 'bnd-111', number: 9,
    title: 'Pain Assessment', duration: '16 min',
    objectives: [
      'Explain why pain is a vital clinical observation',
      'Describe simple pain assessment approaches',
      'Link pain assessment to reporting and comfort care',
    ],
    introduction: 'Pain is what the patient says it is. Systematic assessment helps the team relieve suffering and detect complications. Students assess and report; prescribing and invasive interventions remain with authorised practitioners.',
    sections: [
      { heading: 'Why Assess Pain', content: 'Unrelieved pain causes distress, reduces mobility, impairs breathing and may signal worsening pathology (e.g. after surgery or in labour complications).' },
      { heading: 'Assessment Principles', content: 'Ask about location, intensity (e.g. 0–10 scale if used), quality, timing, aggravating/relieving factors, and effect on function. Observe non-verbal cues when the patient cannot self-report. Reassess after interventions.' },
      { heading: 'Reporting', content: 'Document and report significant pain, sudden change, or pain out of proportion to expectations so the team can respond.' },
    ],
    safetyNotes: 'Do not dismiss pain. Report it. Follow local pain protocols under supervision.',
    clinicalConnection: 'Pain scores are part of routine observation charts in many settings.',
    midwiferyConnection: 'Labour pain is expected but still assessed; pathological pain (e.g. continuous severe abdominal pain) needs urgent escalation.',
    keyPoints: ['Believe the patient', 'Use a structured approach', 'Reassess after care'],
    rememberThis: 'The patient is the authority on their pain intensity.',
    quickReview: [
      { q: 'Who decides how severe pain is?', a: 'The patient (when able to report).' },
      { q: 'Why reassess pain after an intervention?', a: 'To evaluate whether the intervention helped.' },
    ],
    quizId: 'quiz-bnd111-l09',
    keyTerms: ['Pain assessment', 'Pain scale', 'Reassessment'],
  },

  'bnd111-l10': {
    id: 'bnd111-l10', courseId: 'bnd-111', number: 10,
    title: 'Patient Positioning and Mobility Principles', duration: '18 min',
    objectives: [
      'Explain why positioning matters for comfort and safety',
      'Describe principles of safe positioning and mobility support',
      'Identify risks of immobility',
    ],
    introduction: 'Positioning affects breathing, circulation, pressure areas, comfort and dignity. Assisting movement requires body mechanics that protect both patient and student. Hands-on techniques are learned under supervision.',
    sections: [
      { heading: 'Why Position Matters', content: 'Good alignment supports breathing and reduces pressure on skin and nerves. In maternity, position affects comfort in labour and can influence venous return (e.g. avoiding prolonged supine position in late pregnancy when advised).' },
      { heading: 'Safe Assistance Principles', content: 'Explain the plan. Check ability to help. Use a wide base of support, bend knees, keep load close, avoid twisting. Use approved equipment and enough helpers. Never lift beyond your capacity.' },
      { heading: 'Immobility Risks', content: 'Pressure injury, deep vein thrombosis risk, chest infection risk, muscle weakness and constipation. Encourage safe movement as clinically appropriate.' },
    ],
    diagram: { title: 'Safe Positioning Principles', description: 'Simple figures showing supported alignment, pressure redistribution and helper body mechanics concepts.', caption: 'Align, support, protect skin and backs.' },
    safetyNotes: 'Do not mobilise unstable patients without instruction. Use local manual-handling policies and equipment.',
    clinicalConnection: 'Pressure-area care and fall prevention are daily safety work.',
    midwiferyConnection: 'Labour positioning and postnatal mobilisation are core midwifery-supported activities.',
    keyPoints: ['Position for comfort, breathing and skin', 'Protect your back', 'Immobility has complications'],
    rememberThis: 'If it takes two people, wait for two people.',
    quickReview: [
      { q: 'Name two risks of prolonged immobility.', a: 'Examples: pressure injury, DVT risk, chest infection, weakness.' },
      { q: 'Name one safe body-mechanics principle.', a: 'Examples: wide base, bend knees, keep load close, no twisting.' },
    ],
    quizId: 'quiz-bnd111-l10',
    keyTerms: ['Positioning', 'Mobility', 'Pressure injury', 'Body mechanics'],
  },


  'bnd111-l11': {
    id: 'bnd111-l11', courseId: 'bnd-111', number: 11,
    title: 'Bed Making and Comfort Measures', duration: '16 min',
    objectives: [
      'Explain the purpose of bed making and comfort care',
      'Describe principles of a safe, clean, comfortable bed space',
      'Link comfort measures to recovery and dignity',
    ],
    introduction: 'A clean, dry, well-made bed supports rest, skin integrity and dignity. Comfort measures — positioning aids, lighting, noise control, accessible call bell — are basic nursing care, not luxuries.',
    sections: [
      { heading: 'Bed Making Principles', content: 'Clean linen, smooth surfaces to reduce pressure and friction, secure but not constricting bedding, and safe handling of used linen (infection control). Occupied vs unoccupied techniques are taught in skills lab under supervision.' },
      { heading: 'Comfort Measures', content: 'Adjust pillows and height as appropriate. Keep the call bell in reach. Reduce unnecessary noise and glare. Offer oral care and warm or cool cloths as appropriate. Respect cultural preferences for clothing and covering.' },
      { heading: 'Skin and Moisture', content: 'Damp or wrinkled sheets increase pressure-injury risk. Report incontinence promptly and follow local skin-care protocols under supervision.' },
    ],
    diagram: { title: 'Comfortable Bed Space', description: 'Elements of a safe bed space: smooth linen, reachable call bell, supportive pillows, clear floor path.', caption: 'Comfort is a clinical intervention.' },
    safetyNotes: 'Use linen handling and bed-making methods taught by your institution. Protect your back when changing beds.',
    clinicalConnection: 'Patient experience scores often reflect basic comfort care quality.',
    midwiferyConnection: 'Postnatal rest is aided by a clean, private, comfortable space for mother and baby.',
    keyPoints: ['Smooth, dry linen protects skin', 'Call bell within reach', 'Comfort supports healing'],
    rememberThis: 'A wrinkled wet sheet is a pressure-injury risk — fix it.',
    quickReview: [
      { q: 'Why keep sheets smooth and dry?', a: 'To reduce pressure and moisture damage to skin.' },
      { q: 'Where should the call bell be?', a: 'Within the patient’s reach.' },
    ],
    quizId: 'quiz-bnd111-l11',
    keyTerms: ['Bed making', 'Comfort measures', 'Call bell'],
  },

  'bnd111-l12': {
    id: 'bnd111-l12', courseId: 'bnd-111', number: 12,
    title: 'Basic Hygiene and Personal Care', duration: '16 min',
    objectives: [
      'Explain the importance of personal hygiene care',
      'Describe principles of assisting with hygiene while protecting dignity',
      'Identify opportunities to assess skin and wellbeing during care',
    ],
    introduction: 'Hygiene care maintains skin integrity, comfort, dignity and infection control. It is also a chance to observe skin, mobility and emotional state. Techniques are practised under supervision.',
    sections: [
      { heading: 'Scope of Hygiene Care', content: 'Assistance with bathing or washing, oral care, hair care, perineal care and grooming as needed and accepted by the patient. Always explain and seek agreement.' },
      { heading: 'Dignity and Choice', content: 'Offer choices (order of washing, water temperature within safe limits, who is present). Keep covered. Work efficiently but without rushing the person.' },
      { heading: 'Assessment Opportunity', content: 'Note skin redness, breaks, swelling, pain, or low mood. Report findings. Hygiene is assessment as well as care.' },
    ],
    safetyNotes: 'Perineal and intimate care require consent, privacy and correct technique per local protocol. Students work under supervision.',
    clinicalConnection: 'Missed hygiene contributes to infection, discomfort and loss of dignity.',
    midwiferyConnection: 'Postnatal perineal care and newborn skin care are specialised hygiene domains taught in maternity skills.',
    keyPoints: ['Hygiene protects skin and dignity', 'Consent and privacy always', 'Observe while you care'],
    rememberThis: 'Hygiene time is assessment time — look and listen.',
    quickReview: [
      { q: 'Why is hygiene care clinically important?', a: 'Skin integrity, comfort, dignity, infection control, and assessment.' },
      { q: 'What must you do before intimate hygiene care?', a: 'Explain, seek consent, protect privacy, follow supervision requirements.' },
    ],
    quizId: 'quiz-bnd111-l12',
    keyTerms: ['Personal hygiene', 'Oral care', 'Dignity', 'Skin assessment'],
  },

  'bnd111-l13': {
    id: 'bnd111-l13', courseId: 'bnd-111', number: 13,
    title: 'Nutrition, Hydration and Elimination Support', duration: '16 min',
    objectives: [
      'Describe nursing roles in supporting nutrition and hydration',
      'Explain basic elimination support principles',
      'Recognise when to report concerns',
    ],
    introduction: 'Adequate food, fluid and elimination are basic needs. Nurses and midwives assist, monitor and escalate problems. Special diets, feeding methods and catheter care follow local protocols under supervision.',
    sections: [
      { heading: 'Nutrition and Hydration Support', content: 'Help with positioning for meals, opening packages, encouraging intake as appropriate, and recording what is taken when required. Report poor intake, swallowing difficulty or nausea.' },
      { heading: 'Elimination', content: 'Ensure privacy and timely access to toilet or bedpan. Observe frequency, difficulty, blood, or incontinence. Report abnormalities. Assist with continence care while protecting skin and dignity.' },
      { heading: 'Red Flags to Report', content: 'Inability to swallow safely, persistent vomiting, no urine output when expected, severe abdominal pain, or blood in stool/urine — escalate promptly.' },
    ],
    safetyNotes: 'Do not initiate specialised feeding routes or catheter procedures without training and authorisation. Nil-by-mouth status must be respected.',
    clinicalConnection: 'Nutrition and fluid balance affect wound healing, energy and vital signs.',
    midwiferyConnection: 'Hydration in labour and postnatal nutrition support breastfeeding and recovery.',
    keyPoints: ['Support and monitor intake', 'Protect privacy in elimination care', 'Report red flags early'],
    rememberThis: 'If the patient cannot swallow safely, do not force oral intake — escalate.',
    quickReview: [
      { q: 'Name one nutrition-related finding to report.', a: 'Examples: poor intake, swallowing difficulty, persistent vomiting.' },
      { q: 'Why is privacy important during elimination care?', a: 'Dignity and reduced stress improve cooperation and wellbeing.' },
    ],
    quizId: 'quiz-bnd111-l13',
    keyTerms: ['Nutrition support', 'Hydration', 'Elimination', 'Nil by mouth'],
  },

  'bnd111-l14': {
    id: 'bnd111-l14', courseId: 'bnd-111', number: 14,
    title: 'Intake and Output Concepts', duration: '16 min',
    objectives: [
      'Define intake and output (I&O)',
      'List common items counted as intake or output',
      'Explain why accurate I&O matters',
    ],
    introduction: 'Intake and output records track fluid balance. They guide clinical decisions about hydration, kidney function and bleeding. Accuracy depends on consistent measurement and documentation.',
    sections: [
      { heading: 'What Counts as Intake', content: 'Oral fluids, IV fluids (as recorded by authorised staff), enteral feeds, and other liquid intake as defined by local charts.' },
      { heading: 'What Counts as Output', content: 'Urine, vomit, diarrhoea, wound drainage, blood loss estimates as required, and other measurable losses per protocol.' },
      { heading: 'Clinical Meaning', content: 'Large positive balance may suggest overload; large negative balance may suggest dehydration or losses. Interpretation is done by the clinical team — your role is accurate recording and timely reporting of concerns.' },
    ],
    safetyNotes: 'Use units and forms required by your facility. Estimate only when policy allows and label estimates clearly.',
    clinicalConnection: 'Post-operative and critically ill patients often need strict I&O.',
    midwiferyConnection: 'Fluid balance after haemorrhage or in pre-eclampsia care can be critical — accurate charts matter.',
    keyPoints: ['Measure and record consistently', 'Report unusual volumes', 'Team interprets; student records carefully'],
    rememberThis: 'An empty urine jug emptied into the toilet without measuring is lost data.',
    quickReview: [
      { q: 'Name two examples of output.', a: 'Examples: urine, vomit, drainage, blood loss.' },
      { q: 'Why is accurate I&O important?', a: 'It helps detect fluid imbalance and guides treatment.' },
    ],
    quizId: 'quiz-bnd111-l14',
    keyTerms: ['Intake and output', 'Fluid balance', 'Urine output'],
  },

  'bnd111-l15': {
    id: 'bnd111-l15', courseId: 'bnd-111', number: 15,
    title: 'Observation and Reporting', duration: '16 min',
    objectives: [
      'Describe systematic patient observation',
      'Explain what and when to report',
      'Distinguish routine reporting from urgent escalation',
    ],
    introduction: 'Observation is continuous attention to the patient’s condition. Reporting is communicating what you find so the team can act. Students must know the difference between “mention at handover” and “get help now.”',
    sections: [
      { heading: 'What to Observe', content: 'Vital signs, pain, colour, breathing effort, consciousness, bleeding, mood, skin, mobility, and anything the patient reports as new or worrying.' },
      { heading: 'Routine vs Urgent', content: 'Routine: stable findings for planned handover.\nUrgent: sudden change, severe pain, breathing difficulty, heavy bleeding, collapse, confusion, or values in danger ranges — escalate immediately.' },
      { heading: 'How to Report', content: 'Be clear and structured (e.g. SBAR). State who you are, which patient, what changed, current observations, and what you need.' },
    ],
    safetyNotes: 'If you are unsure whether something is urgent, treat it as urgent and ask.',
    clinicalConnection: 'Failure to escalate is a recurring theme in serious incident reviews.',
    midwiferyConnection: 'Reduced fetal movements, heavy lochia, severe headache or visual changes in pregnancy need prompt reporting.',
    keyPoints: ['Observe broadly', 'Escalate early', 'Use structured reporting'],
    rememberThis: 'It is better to escalate a false alarm than to miss a true emergency.',
    quickReview: [
      { q: 'Name two findings that need urgent escalation.', a: 'Examples: breathing difficulty, heavy bleeding, collapse, sudden confusion, severe unrelieved pain.' },
      { q: 'What does SBAR help you do?', a: 'Structure an urgent or handover report clearly.' },
    ],
    quizId: 'quiz-bnd111-l15',
    keyTerms: ['Observation', 'Escalation', 'SBAR', 'Reporting'],
  },


  'bnd111-l16': {
    id: 'bnd111-l16', courseId: 'bnd-111', number: 16,
    title: 'Basic Nursing Documentation', duration: '18 min',
    objectives: [
      'Explain principles of clinical documentation for students',
      'List what must be recorded after care and observations',
      'Describe legal and safety reasons for accurate notes',
    ],
    introduction: 'Documentation is a clinical act. It records what was assessed, done and observed so others can continue care safely. Students document according to institutional rules and supervision.',
    sections: [
      { heading: 'Documentation Principles', content: 'Write factually, legibly (or correctly in electronic systems), promptly, and with date/time and signature or electronic identity as required. Do not invent data. Correct errors per policy — never obliterate entries.' },
      { heading: 'What to Include', content: 'Observations with time. Care given and patient response. Education provided. Communication with the team. Refusals. Incidents. Keep opinions separate from facts.' },
      { heading: 'Confidentiality', content: 'Store and share records only as policy allows. Never post clinical details on social media.' },
    ],
    safetyNotes: 'If you did not observe it or do it, do not document that you did. False documentation is a serious professional breach.',
    clinicalConnection: 'Courts and incident reviews examine the record — clarity protects patients and staff.',
    midwiferyConnection: 'Maternity notes, partographs and observation charts are legal documents as well as clinical tools.',
    keyPoints: ['Fact, time, identity', 'Prompt entries', 'Never falsify'],
    rememberThis: 'If it is not written, the next shift may not know — and may not be able to prove — what happened.',
    quickReview: [
      { q: 'Name three principles of good documentation.', a: 'Examples: factual, timely, legible/clear, signed, confidential.' },
      { q: 'Should you document care you did not give?', a: 'No — that is falsification.' },
    ],
    quizId: 'quiz-bnd111-l16',
    keyTerms: ['Documentation', 'Factual record', 'Confidentiality'],
  },

  'bnd111-l17': {
    id: 'bnd111-l17', courseId: 'bnd-111', number: 17,
    title: 'Handover and Teamwork', duration: '16 min',
    objectives: [
      'Explain the purpose of clinical handover',
      'Describe elements of a safe handover',
      'Outline behaviours that support teamwork',
    ],
    introduction: 'Handover transfers responsibility and critical information. Teamwork means clear roles, mutual respect and speaking up for safety. Students participate actively within their role.',
    sections: [
      { heading: 'Safe Handover Content', content: 'Identify the patient. Current condition and recent changes. Relevant history. Pending tasks and results. Risks and escalation triggers. Opportunities for questions.' },
      { heading: 'Structured Tools', content: 'SBAR and similar frameworks reduce omitted information. Follow the tool used in your placement.' },
      { heading: 'Teamwork Behaviours', content: 'Introduce yourself. Clarify tasks. Share concerns early. Thank colleagues. Accept feedback. Closed-loop communication: repeat back critical instructions to confirm.' },
    ],
    safetyNotes: 'Never leave the clinical area without ensuring someone has accepted ongoing responsibility for your assigned patients as required by local practice.',
    clinicalConnection: 'Handover failures are a major source of delayed treatment and error.',
    midwiferyConnection: 'Labour and postnatal handovers must include mother and baby status clearly.',
    keyPoints: ['Handover is a safety process', 'Structure reduces omissions', 'Speak up and close the loop'],
    rememberThis: 'Handover is not a chat — it is a transfer of responsibility.',
    quickReview: [
      { q: 'What is the purpose of handover?', a: 'To transfer responsibility and critical information safely.' },
      { q: 'What is closed-loop communication?', a: 'Repeating back critical information to confirm understanding.' },
    ],
    quizId: 'quiz-bnd111-l17',
    keyTerms: ['Handover', 'Teamwork', 'Closed-loop communication', 'SBAR'],
  },

  'bnd111-l18': {
    id: 'bnd111-l18', courseId: 'bnd-111', number: 18,
    title: 'Prevention of Common Patient-Safety Risks', duration: '18 min',
    objectives: [
      'List common preventable harms in clinical settings',
      'Describe student actions that reduce risk',
      'Explain the duty to report hazards and near misses',
    ],
    introduction: 'Many harms are preventable: falls, pressure injuries, infection, wrong-patient care, medication errors and failures to escalate. Students contribute by following standards and reporting problems early.',
    sections: [
      { heading: 'Common Risks', content: 'Falls. Pressure injuries. Healthcare-associated infection. Identification errors. Delayed response to deterioration. Sharps injury. Manual-handling injury to staff.' },
      { heading: 'Student Prevention Actions', content: 'ID checks. Hand hygiene and PPE. Keep call bell and mobility aids in reach. Report wet floors and broken equipment. Stay within competence. Escalate early. Participate in safety briefings.' },
      { heading: 'Reporting Culture', content: 'Near-miss reports improve systems. Reporting is professional behaviour, not blame. Follow local incident-reporting processes.' },
    ],
    safetyNotes: 'If a hazard could hurt someone now, act or escalate immediately — do not wait for a form.',
    clinicalConnection: 'Safety walk-rounds and incident data drive improvement.',
    midwiferyConnection: 'Maternal and neonatal safety bundles (e.g. haemorrhage readiness, infection prevention) rely on every team member’s vigilance.',
    keyPoints: ['Know the common risks', 'Prevent what you can', 'Report hazards and near misses'],
    rememberThis: 'A reported near miss today can prevent harm tomorrow.',
    quickReview: [
      { q: 'Name three common patient-safety risks.', a: 'Examples: falls, pressure injury, infection, ID error, failure to escalate.' },
      { q: 'Why report near misses?', a: 'To improve systems before someone is harmed.' },
    ],
    quizId: 'quiz-bnd111-l18',
    keyTerms: ['Patient safety', 'Near miss', 'Fall prevention', 'Hazard'],
  },

  'bnd111-l19': {
    id: 'bnd111-l19', courseId: 'bnd-111', number: 19,
    title: 'Clinical Reflection and Professional Accountability', duration: '16 min',
    objectives: [
      'Explain the purpose of clinical reflection',
      'Describe a simple reflection structure',
      'Link accountability to learning and safety',
    ],
    introduction: 'Reflection turns experience into learning. Accountability means owning your actions, limits and documentation. Together they build a safe professional identity.',
    sections: [
      { heading: 'Why Reflect', content: 'Clinical days are busy. Without reflection, mistakes repeat and successes are not consolidated. Reflection improves judgement and emotional resilience.' },
      { heading: 'Simple Structure', content: 'What happened? What went well? What did not? What did I learn? What will I do differently next time? Discuss significant events with a supervisor.' },
      { heading: 'Accountability', content: 'Be honest about what you did and did not do. Seek feedback. Correct knowledge gaps. Report errors appropriately. Support colleagues’ safety efforts.' },
    ],
    safetyNotes: 'Reflecting on an error does not replace formal incident reporting when required.',
    clinicalConnection: 'Supervisors look for reflective, accountable students — not perfection.',
    midwiferyConnection: 'Birth experiences are powerful; structured reflection helps process emotion and improve practice.',
    keyPoints: ['Reflection converts experience to skill', 'Accountability includes limits and honesty', 'Seek feedback'],
    rememberThis: 'The goal is not a perfect day — it is a safer next day.',
    quickReview: [
      { q: 'Name one question used in reflection.', a: 'Examples: What happened? What went well? What will I change?' },
      { q: 'What does accountability include for a student?', a: 'Honesty about actions and limits, reporting, and learning from feedback.' },
    ],
    quizId: 'quiz-bnd111-l19',
    keyTerms: ['Reflection', 'Accountability', 'Feedback'],
  },

  'bnd111-l20': {
    id: 'bnd111-l20', courseId: 'bnd-111', number: 20,
    title: 'Integrating Foundational Clinical Nursing Skills', duration: '18 min',
    objectives: [
      'Integrate safety, communication, observation and documentation principles',
      'Describe a safe student approach to a typical clinical encounter',
      'Reaffirm the boundary between education and supervised competency',
    ],
    introduction: 'This final lesson pulls the course together. A safe student encounter follows a pattern: prepare, identify, communicate, observe, care within scope, document, report and reflect.',
    sections: [
      { heading: 'An Integrated Encounter', content: '1. Prepare knowledge and equipment.\n2. Hand hygiene and appropriate PPE.\n3. Identify the patient.\n4. Explain and gain agreement.\n5. Observe and measure as trained.\n6. Provide comfort/hygiene support as authorised.\n7. Document and report.\n8. Reflect and seek feedback.' },
      { heading: 'Non-Negotiables', content: 'Correct ID. Hand hygiene. Privacy. Working within competence. Escalating deterioration. Honest documentation.' },
      { heading: 'Next Steps', content: 'Continue skills lab practice. Seek supervised opportunities. Use theory courses (BND 109 and others) to deepen understanding. Always follow local protocols — they override generic educational text when they differ.' },
    ],
    safetyNotes: 'This app does not authorise independent practice. Competency is granted only by your training institution after supervised assessment.',
    clinicalConnection: 'Integration is what patients experience — not isolated tasks.',
    midwiferyConnection: 'The same integrated pattern applies on the labour ward, postnatal bay and antenatal clinic.',
    keyPoints: [
      'Safety steps come before tasks',
      'Communication and observation run throughout',
      'Education prepares; supervision certifies',
    ],
    rememberThis: 'Identify, protect, observe, care, document, escalate, reflect — that is the student clinical rhythm.',
    quickReview: [
      { q: 'Name three non-negotiable safety steps.', a: 'Examples: patient ID, hand hygiene, working within competence, escalation, honest documentation.' },
      { q: 'Who grants clinical competency?', a: 'Your training institution after supervised assessment — not this app.' },
    ],
    quizId: 'quiz-bnd111-l20',
    keyTerms: ['Clinical integration', 'Supervision', 'Patient safety', 'Competency'],
  },


  /* ================================================================
     BND 113 — PROFESSIONAL ADJUSTMENT IN NURSING
     Fully authored learning pathway for Midwifery Easy Learning Center.
     Educational content for Level 100 midwifery/nursing students.
     Not an official institutional syllabus document.
     ================================================================ */

  'bnd113-l01': {
    id: 'bnd113-l01', courseId: 'bnd-113', number: 1,
    title: 'Introduction to Professional Adjustment in Nursing', duration: '15 min',
    objectives: [
      'Define professional adjustment in nursing education',
      'Explain why adjustment matters for safety and wellbeing',
      'List domains of adjustment students will develop',
    ],
    introduction: 'Professional adjustment is the process of adapting to the values, behaviours, relationships and demands of nursing and midwifery. It includes academic, clinical, social and personal change. Strong adjustment supports safer care and healthier students.',
    sections: [
      { heading: 'What Is Professional Adjustment?', content: 'It is learning to think, act and relate as a developing professional: accepting responsibility, managing stress, working in teams, upholding ethics and seeking growth.' },
      { heading: 'Why It Matters', content: 'Poor adjustment can lead to errors, conflict, burnout or withdrawal from training. Good adjustment builds confidence, belonging and competence over time.' },
      { heading: 'Domains You Will Build', content: 'Identity and values. Ethics and boundaries. Communication and teamwork. Time and stress management. Reflection and lifelong learning.' },
    ],
    clinicalConnection: 'Every clinical day tests adjustment — feedback, hierarchy, time pressure and emotional load.',
    midwiferyConnection: 'Maternity settings are intense; early professional habits protect women, babies and students.',
    keyPoints: ['Adjustment is learnable', 'It protects patients and students', 'Multiple domains develop together'],
    rememberThis: 'You are not expected to arrive fully formed — you are expected to grow deliberately.',
    quickReview: [
      { q: 'What is professional adjustment?', a: 'Adapting to the values, behaviours and demands of the profession.' },
      { q: 'Why does adjustment matter?', a: 'It supports safety, wellbeing and successful training.' },
    ],
    quizId: 'quiz-bnd113-l01',
    keyTerms: ['Professional adjustment', 'Professional identity', 'Resilience'],
  },

  'bnd113-l02': {
    id: 'bnd113-l02', courseId: 'bnd-113', number: 2,
    title: 'Nursing as a Profession', duration: '16 min',
    objectives: [
      'List characteristics of a profession',
      'Relate those characteristics to nursing and midwifery',
      'Explain the social contract of regulated practice',
    ],
    introduction: 'A profession has specialised knowledge, formal education, ethical codes, self-regulation and a commitment to public service. Nursing and midwifery meet these criteria and carry public trust.',
    sections: [
      { heading: 'Marks of a Profession', content: 'Body of knowledge. Systematic education. Code of ethics. Professional organisation. Accountability to the public. Service orientation beyond personal gain.' },
      { heading: 'Nursing and Midwifery as Professions', content: 'Registration, standards of practice, educational pathways and ethical codes define the professions. Society grants autonomy in exchange for competence and integrity.' },
      { heading: 'Implications for Students', content: 'You are joining a regulated community. Your conduct reflects on the profession from day one of training.' },
    ],
    clinicalConnection: 'Professional status explains why competence, documentation and ethics are non-negotiable.',
    midwiferyConnection: 'Midwifery is a distinct profession with shared nursing foundations and specialised autonomous practice in many systems.',
    keyPoints: ['Professions serve the public', 'Regulation protects patients', 'Student conduct counts'],
    rememberThis: 'A uniform does not make a professional — knowledge, ethics and accountability do.',
    quickReview: [
      { q: 'Name three characteristics of a profession.', a: 'Examples: specialised knowledge, education, ethics code, regulation, public service.' },
      { q: 'What does society expect in return for professional status?', a: 'Competence, integrity and accountability.' },
    ],
    quizId: 'quiz-bnd113-l02',
    keyTerms: ['Profession', 'Regulation', 'Code of ethics', 'Public trust'],
  },

  'bnd113-l03': {
    id: 'bnd113-l03', courseId: 'bnd-113', number: 3,
    title: 'Professional Identity and Values', duration: '16 min',
    objectives: [
      'Define professional identity',
      'List core professional values',
      'Describe how identity forms during education',
    ],
    introduction: 'Professional identity is your sense of “who I am as a nurse/midwife.” It grows through learning, role models, feedback and practice. Values such as dignity, integrity and compassion guide decisions when rules are incomplete.',
    sections: [
      { heading: 'Professional Identity', content: 'It is internalising the knowledge, values, behaviours and sense of belonging of the profession. Identity answers: What kind of practitioner am I becoming?' },
      { heading: 'Core Values', content: 'Human dignity. Integrity. Altruism. Autonomy of the patient. Social justice. Excellence and accountability.' },
      { heading: 'How Identity Forms', content: 'Classroom learning, clinical experience, reflection, mentors and peer culture all shape identity. Seek role models who combine competence with kindness.' },
    ],
    clinicalConnection: 'Identity shows in small acts: how you speak about patients, how you prepare, how you respond to error.',
    midwiferyConnection: 'Woman-centred values are central to midwifery professional identity.',
    keyPoints: ['Identity is developed, not assumed', 'Values guide grey-area decisions', 'Choose role models carefully'],
    rememberThis: 'Who you practise being in training becomes who you are under pressure.',
    quickReview: [
      { q: 'What is professional identity?', a: 'Your sense of self as a member of the profession, including values and behaviours.' },
      { q: 'Name three professional values.', a: 'Examples: dignity, integrity, compassion, accountability, justice.' },
    ],
    quizId: 'quiz-bnd113-l03',
    keyTerms: ['Professional identity', 'Values', 'Role model'],
  },

  'bnd113-l04': {
    id: 'bnd113-l04', courseId: 'bnd-113', number: 4,
    title: 'Transition into Nursing Education', duration: '16 min',
    objectives: [
      'Describe common challenges in the transition to nursing/midwifery school',
      'List practical strategies for academic adjustment',
      'Explain the importance of support networks',
    ],
    introduction: 'Starting professional education is a major life transition. Workload, new language, clinical anxiety and identity shift are normal. Planning and support make the transition healthier.',
    sections: [
      { heading: 'Common Challenges', content: 'Heavy reading load. Unfamiliar terminology. Time pressure. Fear of clinical placement. Homesickness or financial stress. Imposter feelings.' },
      { heading: 'Academic Strategies', content: 'Active study (teach-back, practice questions). Weekly planning. Seeking help early. Forming study groups. Using library and skills-lab resources.' },
      { heading: 'Support Networks', content: 'Peers, tutors, mentors, family and student services. Asking for help is a professional skill, not a weakness.' },
    ],
    clinicalConnection: 'Students who manage academic stress well arrive on placement more prepared to learn.',
    midwiferyConnection: 'The same transition skills support later specialty learning in maternity care.',
    keyPoints: ['Transition stress is common', 'Plan study and rest', 'Use support early'],
    rememberThis: 'Struggling silently is harder than asking once.',
    quickReview: [
      { q: 'Name two common transition challenges.', a: 'Examples: workload, clinical anxiety, new language, imposter feelings.' },
      { q: 'Name one academic strategy.', a: 'Examples: active study, weekly planning, study groups, early help-seeking.' },
    ],
    quizId: 'quiz-bnd113-l04',
    keyTerms: ['Transition', 'Academic adjustment', 'Support network'],
  },

  'bnd113-l05': {
    id: 'bnd113-l05', courseId: 'bnd-113', number: 5,
    title: 'Adjustment to Clinical Environments', duration: '16 min',
    objectives: [
      'Describe differences between classroom and clinical learning',
      'List behaviours that help clinical adjustment',
      'Explain how to use orientation and feedback',
    ],
    introduction: 'The clinical environment is unpredictable, hierarchical and emotionally charged. Adjustment means learning the culture while staying true to safety and ethics.',
    sections: [
      { heading: 'Classroom vs Clinical', content: 'Classroom learning is structured and relatively safe. Clinical learning involves real patients, real risk, interruptions and team dynamics. Both are essential.' },
      { heading: 'Helpful Behaviours', content: 'Arrive early. Introduce yourself. Clarify your learning goals. Accept tasks within scope. Ask thoughtful questions. Thank colleagues. Debrief after difficult events.' },
      { heading: 'Orientation and Feedback', content: 'Use orientation to learn emergency procedures, documentation systems and who to call. Treat feedback as data for growth, not as a personal attack.' },
    ],
    clinicalConnection: 'Students who orient well make fewer process errors and escalate more appropriately.',
    midwiferyConnection: 'Labour wards require rapid adjustment to noise, urgency and intimate care — preparation helps.',
    keyPoints: ['Clinical culture must be learned', 'Clarify expectations', 'Feedback fuels growth'],
    rememberThis: 'On day one, your job is to be safe, curious and reliable — not to know everything.',
    quickReview: [
      { q: 'How does clinical learning differ from classroom learning?', a: 'It involves real patients, risk, interruptions and team dynamics.' },
      { q: 'Name two helpful clinical behaviours.', a: 'Examples: introduce yourself, clarify goals, stay in scope, accept feedback.' },
    ],
    quizId: 'quiz-bnd113-l05',
    keyTerms: ['Clinical adjustment', 'Orientation', 'Feedback'],
  },


  'bnd113-l06': {
    id: 'bnd113-l06', courseId: 'bnd-113', number: 6,
    title: 'Professional Attitudes and Behaviour', duration: '16 min',
    objectives: [
      'Describe professional attitudes expected of students',
      'Give examples of professional and unprofessional behaviour',
      'Link attitude to patient trust and team function',
    ],
    introduction: 'Attitude is visible in tone, punctuality, willingness to learn and how you speak about patients. Behaviour is attitude in action. Both are assessed continuously.',
    sections: [
      { heading: 'Professional Attitudes', content: 'Respect. Curiosity. Humility. Reliability. Compassion without loss of boundaries. Commitment to fairness.' },
      { heading: 'Behaviour Examples', content: 'Professional: on time, prepared, confidential, polite under stress, honest about limits.\nUnprofessional: gossip about patients, phone misuse, dismissive language, blaming others, working outside competence.' },
      { heading: 'Impact', content: 'Patients trust calm, respectful staff. Teams rely on predictable behaviour. Unprofessional conduct damages both.' },
    ],
    clinicalConnection: 'Clinical evaluations heavily weight attitude and behaviour alongside skills.',
    midwiferyConnection: 'Women in labour notice kindness, presence and respect as much as technical skill.',
    keyPoints: ['Attitude is observable', 'Small behaviours signal professionalism', 'Patients and teams notice'],
    rememberThis: 'How you talk about a patient in the tea room is still professional behaviour.',
    quickReview: [
      { q: 'Name two professional attitudes.', a: 'Examples: respect, humility, reliability, compassion, curiosity.' },
      { q: 'Give one example of unprofessional behaviour.', a: 'Examples: gossip, phone misuse, dismissive language, working beyond competence.' },
    ],
    quizId: 'quiz-bnd113-l06',
    keyTerms: ['Professional behaviour', 'Attitude', 'Reliability'],
  },

  'bnd113-l07': {
    id: 'bnd113-l07', courseId: 'bnd-113', number: 7,
    title: 'Accountability and Responsibility', duration: '16 min',
    objectives: [
      'Define accountability and responsibility in professional practice',
      'Explain student accountability limits',
      'Describe actions that demonstrate accountability',
    ],
    introduction: 'Responsibility is the duty to perform a role. Accountability is answering for the outcomes of that performance — including omissions. Students are accountable within their scope and for escalating beyond it.',
    sections: [
      { heading: 'Responsibility vs Accountability', content: 'You may be responsible for taking vital signs. You are accountable for doing them correctly, recording them, and reporting abnormalities.' },
      { heading: 'Student Accountability', content: 'Accountable for preparation, honesty, following policy, protecting dignity, documenting truthfully, and calling for help when needed. Not accountable for independent decisions outside training level.' },
      { heading: 'Demonstrating Accountability', content: 'Own mistakes. Correct them when possible. Report promptly. Learn publicly without shame culture. Do not blame patients or juniors for your gaps.' },
    ],
    clinicalConnection: 'Incident reviews examine whether individuals escalated and documented appropriately.',
    midwiferyConnection: 'Accountability for mother and baby observations is a core maternity expectation.',
    keyPoints: ['Accountability includes omissions', 'Escalate outside your limits', 'Honesty is part of accountability'],
    rememberThis: '“I did not know” is weaker than “I asked and was taught.”',
    quickReview: [
      { q: 'What is accountability?', a: 'Answering for the outcomes of your actions and omissions.' },
      { q: 'Are students accountable for escalating beyond their competence?', a: 'Yes — escalation is a student duty.' },
    ],
    quizId: 'quiz-bnd113-l07',
    keyTerms: ['Accountability', 'Responsibility', 'Scope'],
  },

  'bnd113-l08': {
    id: 'bnd113-l08', courseId: 'bnd-113', number: 8,
    title: 'Ethical Principles and Ethical Decision-Making', duration: '18 min',
    objectives: [
      'Apply beneficence, non-maleficence, autonomy and justice to simple cases',
      'Describe a basic ethical decision-making approach',
      'Explain when to seek ethics support',
    ],
    introduction: 'Ethical principles guide action when rules alone are insufficient. Students practise recognising issues and escalating complex dilemmas rather than deciding in isolation.',
    sections: [
      { heading: 'Four Principles Revisited', content: 'Beneficence — promote good.\nNon-maleficence — avoid harm.\nAutonomy — respect informed choice.\nJustice — fairness.' },
      { heading: 'Simple Decision Approach', content: '1. Identify the problem and stakeholders.\n2. Gather facts and relevant policy/law.\n3. Name the principles in tension.\n4. Consider options and consequences.\n5. Decide, document, and review with a supervisor.' },
      { heading: 'Seek Help When', content: 'Consent is unclear. Confidentiality conflicts with safety. Resource limits force hard choices. You feel pressured to act against policy or conscience — escalate.' },
    ],
    clinicalConnection: 'Ethics is everyday work: privacy, consent, truth-telling and fair treatment.',
    midwiferyConnection: 'Birth preferences, refusal of interventions and privacy in labour are ethical practice points.',
    keyPoints: ['Name the principles in conflict', 'Use a structured approach', 'Escalate complex cases'],
    rememberThis: 'Ethical courage includes saying “I need senior input.”',
    quickReview: [
      { q: 'Name the four common ethical principles.', a: 'Beneficence, non-maleficence, autonomy, justice.' },
      { q: 'What should a student do with a complex ethical dilemma?', a: 'Escalate and use structured support — not decide alone.' },
    ],
    quizId: 'quiz-bnd113-l08',
    keyTerms: ['Ethical decision-making', 'Autonomy', 'Justice', 'Beneficence'],
  },

  'bnd113-l09': {
    id: 'bnd113-l09', courseId: 'bnd-113', number: 9,
    title: 'Confidentiality and Professional Boundaries', duration: '18 min',
    objectives: [
      'Explain confidentiality obligations',
      'Define professional boundaries',
      'Identify boundary risks for students',
    ],
    introduction: 'Confidentiality protects private information. Boundaries keep relationships therapeutic rather than personal or exploitative. Both are essential for trust and safety.',
    sections: [
      { heading: 'Confidentiality', content: 'Share clinical information only with those who need it for care, on a need-to-know basis, following policy and law. Never discuss patients in public spaces or on social media.' },
      { heading: 'Professional Boundaries', content: 'Maintain a helpful, respectful relationship focused on the patient’s needs. Avoid dual relationships, gifts that create obligation, personal social media contact with patients, and secrecy.' },
      { heading: 'Student Risks', content: 'Over-sharing personal problems with patients. Accepting inappropriate gifts. Looking up patients online. Befriending patients on social apps. Feeling unable to say no — discuss with supervisors.' },
    ],
    clinicalConnection: 'Boundary crossings can progress to serious professional violations if unaddressed.',
    midwiferyConnection: 'Long antenatal relationships require clear, warm boundaries — especially in community settings.',
    keyPoints: ['Need-to-know sharing only', 'Therapeutic, not personal, relationships', 'Ask supervisors about grey areas'],
    commonMistakes: [
      { mistake: 'Posting a “de-identified” case on social media.', correction: 'Even partial details can identify someone — do not post clinical stories.' },
    ],
    rememberThis: 'If you would not write it in the notes, do not say it in the corridor.',
    quickReview: [
      { q: 'What does confidentiality require?', a: 'Sharing information only with those who need it for care, per policy.' },
      { q: 'Name one boundary risk for students.', a: 'Examples: social media contact with patients, dual relationships, inappropriate gifts.' },
    ],
    quizId: 'quiz-bnd113-l09',
    keyTerms: ['Confidentiality', 'Professional boundaries', 'Need-to-know'],
  },

  'bnd113-l10': {
    id: 'bnd113-l10', courseId: 'bnd-113', number: 10,
    title: 'Respect, Dignity and Culturally Responsive Care', duration: '16 min',
    objectives: [
      'Define culturally responsive care',
      'Describe practical respect and dignity behaviours',
      'Avoid stereotyping while honouring cultural needs',
    ],
    introduction: 'Respect and dignity are universal. Culture shapes beliefs about birth, body, family and decision-making. Culturally responsive care asks, listens and adapts without stereotyping.',
    sections: [
      { heading: 'Respect and Dignity in Action', content: 'Use preferred names and pronouns as appropriate. Protect privacy. Explain before touch. Involve the person in decisions. Challenge discrimination.' },
      { heading: 'Cultural Responsiveness', content: 'Ask about language needs, presence of family, modesty preferences, and important practices. Use interpreters per policy. Do not assume — ask.' },
      { heading: 'Avoiding Stereotypes', content: 'Individuals differ within cultures. Treat each person as the expert on their own preferences while offering evidence-based care.' },
    ],
    clinicalConnection: 'Misunderstood cultural needs can look like “non-compliance” when they are actually communication failures.',
    midwiferyConnection: 'Birth customs, female attendants, and family roles vary — respectful enquiry improves experience and safety.',
    keyPoints: ['Ask, do not assume', 'Dignity is practical', 'Individuals vary within cultures'],
    rememberThis: '“What is important for you during care?” is a professional question.',
    quickReview: [
      { q: 'What is culturally responsive care?', a: 'Care that asks about and adapts to cultural needs without stereotyping.' },
      { q: 'Name one practical dignity behaviour.', a: 'Examples: preferred name, privacy, explain before touch, involve in decisions.' },
    ],
    quizId: 'quiz-bnd113-l10',
    keyTerms: ['Dignity', 'Cultural responsiveness', 'Respect', 'Interpreter'],
  },


  'bnd113-l11': {
    id: 'bnd113-l11', courseId: 'bnd-113', number: 11,
    title: 'Nurse–Patient Relationships', duration: '16 min',
    objectives: [
      'Describe features of a therapeutic nurse–patient relationship',
      'Distinguish therapeutic from social relationships',
      'Explain phases of a professional relationship at a basic level',
    ],
    introduction: 'The nurse–patient relationship is purposeful, time-limited and focused on the patient’s needs. Warmth is appropriate; friendship that blurs boundaries is not.',
    sections: [
      { heading: 'Therapeutic Relationship', content: 'Built on trust, respect, empathy and clear roles. The goal is the patient’s health and wellbeing, not the nurse’s social needs.' },
      { heading: 'Therapeutic vs Social', content: 'Social relationships are mutual and open-ended. Therapeutic relationships are professional, structured and end when care ends. Self-disclosure is limited and purposeful.' },
      { heading: 'Basic Phases', content: 'Orientation — introductions, expectations, trust-building.\nWorking — assessment, interventions, education.\nTermination — summary, handover, goodbye. Students practise beginnings and endings thoughtfully.' },
    ],
    clinicalConnection: 'Trust improves information sharing and cooperation with care.',
    midwiferyConnection: 'Continuity models deepen relationships; boundaries remain essential.',
    keyPoints: ['Purpose is the patient’s good', 'Warmth with boundaries', 'Relationships have a beginning and an end'],
    rememberThis: 'Be kind enough to care, professional enough to protect.',
    quickReview: [
      { q: 'What is the focus of a therapeutic relationship?', a: 'The patient’s needs and wellbeing.' },
      { q: 'How does a therapeutic relationship differ from a social one?', a: 'It is professional, structured and time-limited, not mutual friendship.' },
    ],
    quizId: 'quiz-bnd113-l11',
    keyTerms: ['Therapeutic relationship', 'Trust', 'Empathy', 'Termination'],
  },

  'bnd113-l12': {
    id: 'bnd113-l12', courseId: 'bnd-113', number: 12,
    title: 'Working with Colleagues and Multidisciplinary Teams', duration: '16 min',
    objectives: [
      'Explain the value of multidisciplinary teamwork',
      'Describe behaviours that support effective teams',
      'Outline respectful interprofessional communication',
    ],
    introduction: 'Safe care is team care. Nurses, midwives, doctors, pharmacists, cleaners and others share goals. Hierarchy exists, but speaking up for safety is everyone’s duty.',
    sections: [
      { heading: 'Why Teams Matter', content: 'No single profession holds all knowledge. Coordination reduces duplication, delay and error.' },
      { heading: 'Team Behaviours', content: 'Clear roles. Shared goals. Mutual respect. Closed-loop communication. Willingness to ask and to help. Psychological safety to raise concerns.' },
      { heading: 'Interprofessional Respect', content: 'Use names and roles. Avoid blaming language. Share relevant information promptly. Recognise others’ expertise.' },
    ],
    clinicalConnection: 'Most serious incidents involve teamwork or communication failures.',
    midwiferyConnection: 'Obstetric emergencies require seamless midwife–nurse–doctor collaboration.',
    keyPoints: ['Teams improve safety', 'Speak up is a team skill', 'Respect across roles'],
    rememberThis: 'The quietest person in the room may see the risk first — make it safe to speak.',
    quickReview: [
      { q: 'Why is multidisciplinary teamwork important?', a: 'It reduces error and combines complementary expertise.' },
      { q: 'Name one behaviour that supports teams.', a: 'Examples: clear roles, closed-loop communication, speaking up, mutual respect.' },
    ],
    quizId: 'quiz-bnd113-l12',
    keyTerms: ['Multidisciplinary team', 'Psychological safety', 'Interprofessional'],
  },

  'bnd113-l13': {
    id: 'bnd113-l13', courseId: 'bnd-113', number: 13,
    title: 'Communication in Professional Practice', duration: '16 min',
    objectives: [
      'Apply professional communication standards',
      'Use structured tools for urgent and routine communication',
      'Manage digital and written professional communication',
    ],
    introduction: 'Professional communication is clear, timely, respectful and documented when required. It includes bedside talk, handover, phone calls and written notes.',
    sections: [
      { heading: 'Standards', content: 'Identify yourself and your role. Use plain language with patients. Be precise with colleagues. Confirm understanding. Document significant communications.' },
      { heading: 'Structured Tools', content: 'SBAR for escalation and handover. Read-back for critical values or orders as policy requires. Checklists for procedures.' },
      { heading: 'Digital Caution', content: 'Follow policy for messaging systems. Never discuss identifiable patients on personal social media or unsecured channels.' },
    ],
    clinicalConnection: 'Communication failures are among the most common root causes of adverse events.',
    midwiferyConnection: 'Calling for help in labour requires calm, structured communication under pressure.',
    keyPoints: ['Clarity over cleverness', 'Structure under pressure', 'Secure channels only'],
    rememberThis: 'If it is critical, say it clearly, confirm it, and write it.',
    quickReview: [
      { q: 'What does SBAR structure?', a: 'Situation, Background, Assessment, Recommendation.' },
      { q: 'Is personal social media appropriate for patient discussion?', a: 'No.' },
    ],
    quizId: 'quiz-bnd113-l13',
    keyTerms: ['Professional communication', 'SBAR', 'Read-back'],
  },

  'bnd113-l14': {
    id: 'bnd113-l14', courseId: 'bnd-113', number: 14,
    title: 'Conflict Management', duration: '16 min',
    objectives: [
      'Describe common sources of workplace conflict',
      'Apply basic constructive responses to conflict',
      'Know when to involve a supervisor',
    ],
    introduction: 'Conflict is inevitable where people, stress and high stakes meet. Managed well, it improves care. Managed poorly, it harms teams and patients.',
    sections: [
      { heading: 'Sources of Conflict', content: 'Role ambiguity. Workload. Communication gaps. Personality differences. Ethical disagreement. Hierarchy and power.' },
      { heading: 'Constructive Responses', content: 'Stay calm. Focus on the issue, not the person. Use “I” statements. Listen. Seek shared goals (usually patient safety). Propose options. Know your limits.' },
      { heading: 'When to Escalate Conflict', content: 'If safety is at risk, if behaviour is abusive, or if resolution fails — involve a supervisor or appropriate channel. Students should not mediate serious disputes alone.' },
    ],
    clinicalConnection: 'Unresolved conflict distracts from observation and increases error risk.',
    midwiferyConnection: 'Disagreements about labour management need respectful, evidence-informed dialogue and clear escalation paths.',
    keyPoints: ['Focus on interests and safety', 'Stay respectful', 'Escalate unsafe or abusive situations'],
    rememberThis: 'Winning an argument is worthless if the patient loses safety.',
    quickReview: [
      { q: 'Name two sources of workplace conflict.', a: 'Examples: workload, role confusion, communication gaps, ethical disagreement.' },
      { q: 'When should a student escalate conflict?', a: 'When safety is at risk, behaviour is abusive, or resolution fails.' },
    ],
    quizId: 'quiz-bnd113-l14',
    keyTerms: ['Conflict management', 'Escalation', 'Respectful dialogue'],
  },

  'bnd113-l15': {
    id: 'bnd113-l15', courseId: 'bnd-113', number: 15,
    title: 'Leadership and Followership', duration: '16 min',
    objectives: [
      'Define leadership and followership in clinical teams',
      'Describe student leadership behaviours',
      'Explain why good followership improves safety',
    ],
    introduction: 'Leadership is influence toward a goal — not only a job title. Followership is active, thoughtful support of safe team direction. Students practise both.',
    sections: [
      { heading: 'Leadership Behaviours for Students', content: 'Model punctuality and preparation. Share useful information. Support peers. Speak up about risks. Take initiative within scope (e.g. restocking, comforting, reporting).' },
      { heading: 'Followership', content: 'Listen to the plan. Clarify doubts. Execute reliably. Challenge unsafe instructions respectfully using graded assertiveness as taught. Closed-loop confirmation.' },
      { heading: 'Authority Gradient', content: 'Hierarchy can silence juniors. Training systems encourage speaking up because silence kills. Practise polite assertiveness.' },
    ],
    clinicalConnection: 'Teams with active followers catch more errors before harm occurs.',
    midwiferyConnection: 'Emergency drills train both leadership roles and assertive followership.',
    keyPoints: ['Leadership is behaviour, not only rank', 'Followership is active', 'Speak up across hierarchy'],
    rememberThis: 'A good follower prevents a good leader from making a bad mistake.',
    quickReview: [
      { q: 'What is followership?', a: 'Active, thoughtful support of safe team goals, including speaking up.' },
      { q: 'Name one student leadership behaviour.', a: 'Examples: preparation, sharing information, supporting peers, raising risks.' },
    ],
    quizId: 'quiz-bnd113-l15',
    keyTerms: ['Leadership', 'Followership', 'Assertiveness', 'Authority gradient'],
  },


  'bnd113-l16': {
    id: 'bnd113-l16', courseId: 'bnd-113', number: 16,
    title: 'Time Management and Organization', duration: '16 min',
    objectives: [
      'Explain why time management is a safety skill',
      'List practical organisation strategies for students',
      'Prioritise tasks using clinical urgency principles',
    ],
    introduction: 'Clinical work is interrupt-driven. Time management is not about rushing — it is about prioritising, preparing and protecting attention so important tasks are not missed.',
    sections: [
      { heading: 'Time and Safety', content: 'Missed observations, delayed escalation and incomplete handover often have a time-management component. Organisation protects patients.' },
      { heading: 'Student Strategies', content: 'Prepare the night before. Use checklists. Batch similar tasks when safe. Write down tasks. Confirm priorities with the supervisor. Protect breaks when possible.' },
      { heading: 'Prioritisation', content: 'Life threats first. Then safety and time-critical tasks. Then routine care and learning goals. Ask: “What happens if I delay this?”' },
    ],
    clinicalConnection: 'Handover and medication timing failures often trace to poor task organisation.',
    midwiferyConnection: 'Labour care requires simultaneous monitoring of mother, baby and environment — prioritisation is constant.',
    keyPoints: ['Prioritise by consequence', 'Write it down', 'Ask when overwhelmed'],
    rememberThis: 'If everything is urgent, nothing is — re-triage with a supervisor.',
    quickReview: [
      { q: 'Why is time management a safety skill?', a: 'Poor organisation contributes to missed care and delayed escalation.' },
      { q: 'What question helps prioritise?', a: 'What happens if I delay this?' },
    ],
    quizId: 'quiz-bnd113-l16',
    keyTerms: ['Time management', 'Prioritisation', 'Checklist'],
  },

  'bnd113-l17': {
    id: 'bnd113-l17', courseId: 'bnd-113', number: 17,
    title: 'Stress, Resilience and Healthy Professional Coping', duration: '18 min',
    objectives: [
      'Recognise sources of stress in nursing education',
      'Describe healthy coping strategies',
      'Identify warning signs that need extra support',
    ],
    introduction: 'Stress is expected; chronic unrelieved stress is harmful. Resilience is the capacity to recover and keep functioning ethically. Healthy coping is a professional responsibility to yourself and your patients.',
    sections: [
      { heading: 'Common Stressors', content: 'Exams. Clinical evaluation. Fear of harming patients. Shift work. Financial pressure. Exposure to suffering and death. Conflict.' },
      { heading: 'Healthy Coping', content: 'Sleep and nutrition. Physical activity. Peer support. Supervision debriefs. Boundaries with work talk at home. Mindfulness or prayer as preferred. Professional counselling when needed.' },
      { heading: 'Warning Signs', content: 'Persistent insomnia, substance misuse, isolation, cynicism, panic, or thoughts of self-harm — seek help through student services, occupational health or local crisis resources. You are not alone.' },
    ],
    clinicalConnection: 'Fatigued, unsupported staff make more errors.',
    midwiferyConnection: 'Witnessing traumatic birth can cause secondary stress — structured debrief matters.',
    keyPoints: ['Stress is normal; neglect is not', 'Use healthy coping early', 'Seek help for warning signs'],
    rememberThis: 'Caring for yourself is part of caring for patients — not selfishness.',
    quickReview: [
      { q: 'Name two healthy coping strategies.', a: 'Examples: sleep, exercise, peer support, debrief, counselling.' },
      { q: 'What should you do if stress becomes overwhelming?', a: 'Seek help through student or health support services.' },
    ],
    quizId: 'quiz-bnd113-l17',
    keyTerms: ['Stress', 'Resilience', 'Coping', 'Burnout'],
  },

  'bnd113-l18': {
    id: 'bnd113-l18', courseId: 'bnd-113', number: 18,
    title: 'Reflective Practice and Receiving Feedback', duration: '16 min',
    objectives: [
      'Explain reflective practice',
      'Use a simple reflection framework',
      'Receive feedback constructively',
    ],
    introduction: 'Reflection converts experience into learning. Feedback is external data about your performance. Together they accelerate professional growth.',
    sections: [
      { heading: 'Reflective Practice', content: 'Structured thinking about what happened, why, what you felt, what you learned, and what you will change. Writing or discussing reflections deepens insight.' },
      { heading: 'Simple Framework', content: 'Describe. Analyse (what worked, what did not, why). Conclude (learning points). Plan (next actions).' },
      { heading: 'Receiving Feedback', content: 'Listen without interrupting. Clarify. Thank the giver. Separate identity from performance. Act on one or two points. Feedback is about the work, not your worth.' },
    ],
    clinicalConnection: 'Supervisors value students who use feedback visibly.',
    midwiferyConnection: 'After a difficult birth, guided reflection supports both skill and emotional processing.',
    keyPoints: ['Reflection is deliberate', 'Feedback is information', 'Act on it'],
    rememberThis: 'Defensiveness blocks the lesson the experience is trying to teach.',
    quickReview: [
      { q: 'What is reflective practice?', a: 'Structured thinking that turns experience into learning and change.' },
      { q: 'How should feedback be received?', a: 'Listen, clarify, thank, and act on key points without equating it to personal worth.' },
    ],
    quizId: 'quiz-bnd113-l18',
    keyTerms: ['Reflective practice', 'Feedback', 'Professional growth'],
  },

  'bnd113-l19': {
    id: 'bnd113-l19', courseId: 'bnd-113', number: 19,
    title: 'Continuing Professional Development', duration: '16 min',
    objectives: [
      'Define continuing professional development (CPD)',
      'Explain why CPD is a professional duty',
      'Identify early CPD habits for students',
    ],
    introduction: 'CPD is the ongoing process of learning after initial qualification — and it starts in training. Competence is not a one-time event.',
    sections: [
      { heading: 'What CPD Includes', content: 'Courses, reading, skills updates, audit participation, reflective writing, teaching others, and learning from incidents. Formal requirements vary by regulator.' },
      { heading: 'Why It Matters', content: 'Evidence changes. Skills decay without practice. Patients deserve current, competent care. Many regulators require documented CPD for licence renewal.' },
      { heading: 'Student Habits', content: 'Keep a learning log. Note questions from placement. Read around cases. Attend available teaching. Ask for stretch opportunities within safety limits.' },
    ],
    clinicalConnection: 'Outdated practice is a quality and safety risk.',
    midwiferyConnection: 'Maternity guidelines update frequently — lifelong learning is expected.',
    keyPoints: ['Learning never finishes', 'Document your growth', 'Link learning to practice'],
    rememberThis: 'Graduation is a beginning, not an ending, of professional learning.',
    quickReview: [
      { q: 'What is CPD?', a: 'Ongoing learning to maintain and improve professional competence.' },
      { q: 'Name one CPD habit for students.', a: 'Examples: learning log, reading around cases, attending teaching, reflection.' },
    ],
    quizId: 'quiz-bnd113-l19',
    keyTerms: ['CPD', 'Lifelong learning', 'Competence'],
  },

  'bnd113-l20': {
    id: 'bnd113-l20', courseId: 'bnd-113', number: 20,
    title: 'Building a Confident, Safe and Professional Nursing Identity', duration: '18 min',
    objectives: [
      'Integrate major themes of professional adjustment',
      'Describe habits of a safe developing professional',
      'Commit to ongoing identity formation',
    ],
    introduction: 'This final lesson consolidates the course. Confidence grows from competence, preparation and support — not from pretending to know everything. Safety and professionalism are daily choices.',
    sections: [
      { heading: 'Integrated Habits', content: 'Know your values. Stay within scope. Communicate clearly. Protect confidentiality. Work in teams. Manage time and stress. Reflect and accept feedback. Keep learning.' },
      { heading: 'Confidence Without Arrogance', content: 'Confidence says: I prepared, I know my limits, I will ask. Arrogance says: I need no help. Patients need the first kind.' },
      { heading: 'Your Professional Promise', content: 'To women, babies, families and colleagues: I will be honest, respectful, prepared and accountable. I will escalate when needed. I will grow.' },
    ],
    clinicalConnection: 'Identity shows under pressure — drills and real emergencies reveal habits.',
    midwiferyConnection: 'A safe midwifery identity centres the woman and newborn while upholding professional standards.',
    keyPoints: [
      'Identity is practised daily',
      'Confidence includes knowing limits',
      'Safety and respect are non-negotiable',
    ],
    rememberThis: 'Become the colleague you would trust with your own family.',
    quickReview: [
      { q: 'What is the difference between confidence and arrogance?', a: 'Confidence includes preparation and knowing limits; arrogance rejects help.' },
      { q: 'Name three habits of a safe developing professional.', a: 'Examples: stay in scope, communicate, protect confidentiality, reflect, escalate, keep learning.' },
    ],
    quizId: 'quiz-bnd113-l20',
    keyTerms: ['Professional identity', 'Confidence', 'Accountability', 'Safety'],
  },


  /* ================================================================
     BND 115 — MICROBIOLOGY AND INFECTION PREVENTION/CONTROL
     Fully authored learning pathway for Midwifery Easy Learning Center.
     Educational content for Level 100 midwifery/nursing students.
     NOT laboratory procedure instructions. No culturing or propagation guidance.
     ================================================================ */

  'bnd115-l01': {
    id: 'bnd115-l01', courseId: 'bnd-115', number: 1,
    title: 'Introduction to Microbiology', duration: '15 min',
    objectives: [
      'Define microbiology in a healthcare context',
      'Explain why microbiology matters for nurses and midwives',
      'List major applications in clinical care',
    ],
    introduction: 'Microbiology is the study of microorganisms — bacteria, viruses, fungi, protozoa and related forms. In healthcare, it explains infection, guides prevention, and underpins safe practice around birth, wounds and invasive devices.',
    sections: [
      { heading: 'What Microbiology Covers', content: 'Structure and classification of microbes, how they grow and spread, how they cause disease, and how the body and healthcare systems respond. Clinical microbiology links laboratory findings to patient care.' },
      { heading: 'Why It Matters', content: 'Infection remains a major cause of maternal and neonatal morbidity. Understanding microbes helps you practise hand hygiene, use PPE correctly, protect aseptic fields and recognise when escalation is needed.' },
      { heading: 'Scope of This Course', content: 'Concepts and prevention principles only. Laboratory techniques, culturing and pathogen propagation are taught only in authorised institutional labs under supervision — not in this app.' },
    ],
    clinicalConnection: 'Every swab result, fever work-up and isolation decision rests on microbiology concepts.',
    midwiferyConnection: 'Preventing newborn sepsis and maternal genital tract infection is daily midwifery IPC work.',
    keyPoints: ['Microbiology explains infection risk', 'Prevention is the practical payoff', 'No unsupervised lab work from this course'],
    rememberThis: 'Know enough microbiology to prevent harm — leave culturing to trained laboratory teams.',
    quickReview: [
      { q: 'What is microbiology?', a: 'The study of microorganisms and their effects.' },
      { q: 'Does this course teach how to culture pathogens at home?', a: 'No — educational concepts only.' },
    ],
    quizId: 'quiz-bnd115-l01',
    keyTerms: ['Microbiology', 'Microorganism', 'Infection prevention'],
  },

  'bnd115-l02': {
    id: 'bnd115-l02', courseId: 'bnd-115', number: 2,
    title: 'Microorganisms and Their Classification', duration: '16 min',
    objectives: [
      'List major groups of microorganisms',
      'Distinguish prokaryotic and eukaryotic microbes at a basic level',
      'Explain why classification helps clinical communication',
    ],
    introduction: 'Microorganisms are grouped by structure and biology. Classification helps clinicians communicate risk, choose precautions and interpret laboratory reports.',
    sections: [
      { heading: 'Major Groups', content: 'Bacteria (prokaryotes). Viruses (acellular). Fungi (yeasts and moulds). Protozoa. Helminths (parasitic worms — often discussed with medical parasitology). Prions (infectious proteins) in specialised contexts.' },
      { heading: 'Prokaryote vs Eukaryote (Simple)', content: 'Bacteria lack a true nucleus. Fungi and protozoa are eukaryotic (true nucleus). Viruses are not cells — they need host cells to replicate.' },
      { heading: 'Clinical Use of Names', content: 'Genus and species names (e.g. Staphylococcus aureus) appear on lab reports. Knowing the group guides isolation and treatment discussions with the team.' },
    ],
    diagram: { title: 'Major Microbial Groups', description: 'Simple comparison of bacteria, viruses, fungi and protozoa with size/structure notes at introductory level.', caption: 'Different groups need different prevention approaches.' },
    clinicalConnection: 'Lab reports name organisms; IPC policies name transmission routes.',
    midwiferyConnection: 'Group B Streptococcus, HIV, hepatitis viruses and Candida appear frequently in maternity care contexts.',
    keyPoints: ['Groups differ in structure and control', 'Viruses are not cells', 'Names on reports matter'],
    rememberThis: 'Bacteria and viruses are not controlled the same way — antibiotics do not treat viruses.',
    quickReview: [
      { q: 'Name four major microbial groups.', a: 'Bacteria, viruses, fungi, protozoa (plus others in broader study).' },
      { q: 'Are viruses cellular organisms?', a: 'No — they are acellular and need host cells.' },
    ],
    quizId: 'quiz-bnd115-l02',
    keyTerms: ['Bacteria', 'Virus', 'Fungus', 'Protozoa', 'Classification'],
  },

  'bnd115-l03': {
    id: 'bnd115-l03', courseId: 'bnd-115', number: 3,
    title: 'Bacteria', duration: '18 min',
    objectives: [
      'Describe basic bacterial structure at an introductory level',
      'Explain Gram stain categories in simple terms',
      'Give examples of bacteria relevant to maternity care',
    ],
    introduction: 'Bacteria are single-celled prokaryotes. Some are harmless or helpful; others cause disease. Shape, staining and oxygen needs help laboratories identify them.',
    sections: [
      { heading: 'Basic Structure', content: 'Cell wall, cell membrane, cytoplasm, genetic material (no true nucleus). Some have capsules, flagella or form spores that resist harsh conditions.' },
      { heading: 'Gram Stain (Concept)', content: 'Gram-positive bacteria stain purple; Gram-negative stain pink/red with standard methods. This rough grouping guides early clinical thinking while full identification proceeds.' },
      { heading: 'Maternity-Relevant Examples', content: 'Group B Streptococcus (neonatal risk). Escherichia coli (UTI, some sepsis). Staphylococcus aureus (skin, wound, mastitis contexts). Clostridium species (spore-formers in specialised risks). Always interpret with clinical team guidance.' },
    ],
    clinicalConnection: 'Empiric therapy and isolation decisions often start from Gram stain and clinical syndrome.',
    midwiferyConnection: 'GBS screening and intrapartum antibiotic protocols exist because neonatal infection risk is real — follow local guidelines.',
    keyPoints: ['Bacteria are prokaryotic cells', 'Gram stain is a first sorting tool', 'Spores resist ordinary cleaning'],
    rememberThis: 'Spore-forming bacteria need appropriate disinfection strategies — ordinary wiping may not be enough.',
    quickReview: [
      { q: 'What does Gram-positive typically stain?', a: 'Purple (with standard Gram stain).' },
      { q: 'Why is Group B Streptococcus important in maternity care?', a: 'It is associated with risk of serious newborn infection.' },
    ],
    quizId: 'quiz-bnd115-l03',
    keyTerms: ['Bacteria', 'Gram stain', 'Spore', 'Group B Streptococcus'],
  },

  'bnd115-l04': {
    id: 'bnd115-l04', courseId: 'bnd-115', number: 4,
    title: 'Viruses', duration: '16 min',
    objectives: [
      'Describe viruses as obligate intracellular agents',
      'Explain why antibiotics do not treat viral infections',
      'List viruses of importance in maternity care',
    ],
    introduction: 'Viruses are genetic material in a protein coat (sometimes with an envelope). They replicate only inside host cells. Prevention, vaccination and specific antivirals — not routine antibiotics — are the tools.',
    sections: [
      { heading: 'Viral Nature', content: 'Acellular. Attach to host cells, enter, replicate using host machinery, and exit. Some integrate into host DNA. Enveloped viruses are often more fragile in the environment than non-enveloped ones.' },
      { heading: 'Clinical Implications', content: 'Antibiotics target bacteria, not viruses. Viral diagnosis may use antigen, PCR or serology. Isolation precautions depend on the virus (contact, droplet, airborne as per policy).' },
      { heading: 'Maternity Context', content: 'HIV, hepatitis B and C, herpes simplex, varicella, rubella, cytomegalovirus and influenza have specific maternal–fetal or perinatal implications. Screening and protocols are institution-led.' },
    ],
    clinicalConnection: 'Viral load, serology and vaccination status appear throughout antenatal records.',
    midwiferyConnection: 'Preventing mother-to-child transmission is a major midwifery and public-health goal.',
    keyPoints: ['Viruses need host cells', 'Antibiotics ≠ antivirals', 'Transmission-based precautions vary by virus'],
    rememberThis: 'Do not expect antibiotics to cure a viral cold — or viral hepatitis.',
    quickReview: [
      { q: 'Why do antibiotics not treat viruses?', a: 'Antibiotics target bacterial structures/processes, not viral replication.' },
      { q: 'Name two viruses relevant to maternity care.', a: 'Examples: HIV, hepatitis B, herpes simplex, rubella, influenza.' },
    ],
    quizId: 'quiz-bnd115-l04',
    keyTerms: ['Virus', 'Obligate intracellular', 'Envelope', 'Antiviral'],
  },

  'bnd115-l05': {
    id: 'bnd115-l05', courseId: 'bnd-115', number: 5,
    title: 'Fungi, Protozoa and Other Clinically Relevant Microorganisms', duration: '16 min',
    objectives: [
      'Describe fungi and protozoa at an introductory level',
      'Give clinical examples relevant to general and maternity care',
      'Note other agents (e.g. parasites) in overview',
    ],
    introduction: 'Fungi include yeasts and moulds. Protozoa are single-celled eukaryotes. Both include important human pathogens, especially when immunity or barriers are impaired.',
    sections: [
      { heading: 'Fungi', content: 'Candida species cause thrush and invasive disease in vulnerable patients. Dermatophytes cause skin infections. Spore-forming moulds matter in environmental control for immunocompromised hosts.' },
      { heading: 'Protozoa', content: 'Examples include malaria parasites (Plasmodium), Trichomonas vaginalis, and Toxoplasma gondii — each with distinct transmission and clinical patterns. Follow local epidemiology and guidelines.' },
      { heading: 'Other Agents', content: 'Helminths and ectoparasites are covered in parasitology. Prions are rare but important in specialised infection control.' },
    ],
    clinicalConnection: 'Candida appears in swab results; malaria and toxoplasmosis have specific screening and treatment pathways.',
    midwiferyConnection: 'Vaginal candidiasis is common in pregnancy; some protozoal infections have fetal implications — manage per protocol.',
    keyPoints: ['Fungi include yeasts and moulds', 'Protozoa are eukaryotic single cells', 'Context and guidelines drive action'],
    rememberThis: 'Not every microbe is a bacterium — treatment and precautions differ.',
    quickReview: [
      { q: 'Name a common fungal genus in human care.', a: 'Candida (example).' },
      { q: 'Are protozoa bacteria?', a: 'No — they are eukaryotic microorganisms.' },
    ],
    quizId: 'quiz-bnd115-l05',
    keyTerms: ['Fungus', 'Yeast', 'Protozoa', 'Candida'],
  },


  'bnd115-l06': {
    id: 'bnd115-l06', courseId: 'bnd-115', number: 6,
    title: 'Normal Microbiota and the Human Microbiome', duration: '16 min',
    objectives: [
      'Define normal microbiota and microbiome',
      'Explain benefits and risks of resident flora',
      'Relate microbiota concepts to infection risk',
    ],
    introduction: 'The body hosts vast numbers of microorganisms that usually live in balance with us. Disruption of that balance — or transfer of flora to sterile sites — can cause disease.',
    sections: [
      { heading: 'Normal Microbiota', content: 'Resident microbes of skin, mouth, gut, vagina and other sites. They occupy niches, aid digestion, train immunity and can exclude pathogens.' },
      { heading: 'When Flora Cause Harm', content: 'If barriers break (surgery, catheters, wounds) or immunity falls, normal flora can become opportunistic pathogens. Antibiotics can disrupt protective flora (e.g. leading to C. difficile risk in some settings).' },
      { heading: 'Maternity Note', content: 'Vaginal microbiota composition matters for reproductive health. Newborns acquire microbes from mother and environment — clean hands and safe contact matter.' },
    ],
    clinicalConnection: 'Many “hospital infections” involve the patient’s own flora introduced to a wrong site.',
    midwiferyConnection: 'Perineal care, catheter use and newborn handling all interact with microbiota risk.',
    keyPoints: ['Most microbes on us are normal', 'Wrong place or weak host → infection', 'Antibiotics alter flora'],
    rememberThis: 'Sterile sites must stay sterile — flora that are friendly on skin are dangerous in blood.',
    quickReview: [
      { q: 'What is normal microbiota?', a: 'Microorganisms that normally live on or in the body without causing disease.' },
      { q: 'When can normal flora cause infection?', a: 'When introduced to sterile sites or when host defences are impaired.' },
    ],
    quizId: 'quiz-bnd115-l06',
    keyTerms: ['Microbiota', 'Microbiome', 'Opportunistic', 'Colonisation'],
  },

  'bnd115-l07': {
    id: 'bnd115-l07', courseId: 'bnd-115', number: 7,
    title: 'Pathogens and Opportunistic Infections', duration: '16 min',
    objectives: [
      'Define pathogen and virulence at an introductory level',
      'Explain opportunistic infection',
      'Give examples relevant to healthcare',
    ],
    introduction: 'A pathogen is a microorganism capable of causing disease. Virulence describes how severe that disease can be. Opportunists cause disease mainly when defences are down.',
    sections: [
      { heading: 'Pathogen vs Commensal', content: 'True pathogens can cause disease in healthy hosts. Commensals usually do not, unless circumstances change. The line can blur.' },
      { heading: 'Opportunistic Infection', content: 'Occurs when immunity, barriers or microbiota are disrupted — e.g. after surgery, with catheters, in prematurity, or with immunosuppressive conditions.' },
      { heading: 'Healthcare Context', content: 'Devices, wounds and antimicrobial pressure select for organisms that thrive in hospitals. IPC reduces opportunity.' },
    ],
    clinicalConnection: 'Lab reports and infection-control alerts often flag opportunistic and multidrug-resistant organisms.',
    midwiferyConnection: 'Preterm newborns and women with prolonged rupture of membranes have higher infection vulnerability.',
    keyPoints: ['Pathogens cause disease', 'Opportunity matters as much as organism', 'Protect barriers'],
    rememberThis: 'The same organism can be harmless on intact skin and lethal in the bloodstream.',
    quickReview: [
      { q: 'What is an opportunistic infection?', a: 'Infection by organisms that cause disease mainly when host defences are impaired.' },
      { q: 'Name one factor that increases opportunity for infection.', a: 'Examples: catheters, surgery, immunosuppression, prematurity.' },
    ],
    quizId: 'quiz-bnd115-l07',
    keyTerms: ['Pathogen', 'Virulence', 'Opportunistic infection'],
  },

  'bnd115-l08': {
    id: 'bnd115-l08', courseId: 'bnd-115', number: 8,
    title: 'Infection and Disease Concepts', duration: '16 min',
    objectives: [
      'Distinguish colonisation, infection and disease',
      'Describe local vs systemic infection',
      'Outline stages of infectious disease at a basic level',
    ],
    introduction: 'Not every microbe on a swab means infection. Colonisation is presence without tissue invasion. Infection involves invasion and host response. Disease is the resulting illness.',
    sections: [
      { heading: 'Colonisation vs Infection', content: 'Colonisation: organism present, no invasive disease. Infection: invasion with signs such as inflammation, fever, or organ dysfunction. Treat infection; do not always treat colonisation.' },
      { heading: 'Local and Systemic', content: 'Local — limited to a site (e.g. wound). Systemic — spreads via blood or lymph (e.g. sepsis). Sepsis is a medical emergency.' },
      { heading: 'Course of Illness (Simple)', content: 'Incubation, prodrome, illness, decline, convalescence — timing varies by organism and host.' },
    ],
    clinicalConnection: 'Distinguishing colonisation from infection prevents unnecessary antibiotics.',
    midwiferyConnection: 'Fever in labour or postpartum needs careful assessment for infection versus other causes.',
    keyPoints: ['Colonisation ≠ infection', 'Sepsis is systemic and urgent', 'Host response defines clinical infection'],
    rememberThis: 'A positive swab is a finding — not automatically a prescription.',
    quickReview: [
      { q: 'What is colonisation?', a: 'Presence of microbes without invasive disease.' },
      { q: 'Why is sepsis urgent?', a: 'It is life-threatening systemic infection/response requiring immediate care.' },
    ],
    quizId: 'quiz-bnd115-l08',
    keyTerms: ['Colonisation', 'Infection', 'Disease', 'Sepsis'],
  },

  'bnd115-l09': {
    id: 'bnd115-l09', courseId: 'bnd-115', number: 9,
    title: 'Chain of Infection', duration: '18 min',
    objectives: [
      'List the links in the chain of infection',
      'Explain how breaking any link prevents infection',
      'Apply the chain to a maternity example',
    ],
    introduction: 'Infection spreads through a chain: infectious agent, reservoir, portal of exit, mode of transmission, portal of entry, and susceptible host. IPC breaks links.',
    sections: [
      { heading: 'The Links', content: '1. Infectious agent\n2. Reservoir (where it lives)\n3. Portal of exit\n4. Mode of transmission\n5. Portal of entry\n6. Susceptible host' },
      { heading: 'Breaking the Chain', content: 'Hand hygiene, PPE, cleaning, isolation, vaccination, aseptic technique, safe devices, nutrition and skin integrity each target different links.' },
      { heading: 'Maternity Example', content: 'Agent: GBS. Reservoir: maternal genital tract. Exit/transmission: during birth. Entry: newborn mucosal surfaces. Host: neonate. Intrapartum antibiotics and hygienic care break links per guidelines.' },
    ],
    diagram: { title: 'Chain of Infection', description: 'Six-link chain diagram with example IPC actions on each link.', caption: 'Break any link — stop the spread.' },
    clinicalConnection: 'Every IPC policy maps to one or more chain links.',
    midwiferyConnection: 'Newborn infection prevention is chain-breaking in action.',
    keyPoints: ['Six links', 'Break any link', 'Multiple tactics work together'],
    rememberThis: 'You do not need to eliminate every microbe — break the chain.',
    quickReview: [
      { q: 'Name three links in the chain of infection.', a: 'Examples: agent, reservoir, exit, transmission, entry, susceptible host.' },
      { q: 'How does hand hygiene break the chain?', a: 'It interrupts transmission (and reduces agent on hands as vehicle).' },
    ],
    quizId: 'quiz-bnd115-l09',
    keyTerms: ['Chain of infection', 'Reservoir', 'Portal of entry', 'Susceptible host'],
  },

  'bnd115-l10': {
    id: 'bnd115-l10', courseId: 'bnd-115', number: 10,
    title: 'Modes of Transmission', duration: '16 min',
    objectives: [
      'Describe contact, droplet and airborne transmission',
      'Explain vehicle and vector transmission briefly',
      'Link modes to precaution types',
    ],
    introduction: 'How a microbe travels determines which precautions work. Contact, droplet and airborne routes drive most hospital IPC decisions.',
    sections: [
      { heading: 'Contact', content: 'Direct (person-to-person) or indirect (via fomites — contaminated surfaces/equipment). Most common route in healthcare. Hand hygiene and gloves are key.' },
      { heading: 'Droplet and Airborne', content: 'Droplet: larger respiratory particles over short distances. Airborne: smaller particles that remain suspended and travel farther. Mask types and room controls differ — follow policy.' },
      { heading: 'Other Routes', content: 'Vehicle (water, food, blood products). Vector (insects). Vertical (mother to child) is crucial in midwifery.' },
    ],
    clinicalConnection: 'Isolation signs specify contact, droplet or airborne precautions based on mode.',
    midwiferyConnection: 'Vertical transmission and contact during newborn care are daily concerns.',
    keyPoints: ['Match precautions to mode', 'Contact is most common in hospitals', 'Vertical transmission is maternity-specific'],
    rememberThis: 'Wrong precautions for the mode leave patients and staff exposed.',
    quickReview: [
      { q: 'What is indirect contact transmission?', a: 'Spread via contaminated objects or surfaces (fomites).' },
      { q: 'What is vertical transmission?', a: 'Transmission from mother to child (e.g. during pregnancy or birth).' },
    ],
    quizId: 'quiz-bnd115-l10',
    keyTerms: ['Contact transmission', 'Droplet', 'Airborne', 'Fomite', 'Vertical transmission'],
  },


  'bnd115-l11': {
    id: 'bnd115-l11', courseId: 'bnd-115', number: 11,
    title: 'Healthcare-Associated Infections', duration: '16 min',
    objectives: [
      'Define healthcare-associated infection (HAI)',
      'List common HAI types',
      'Explain why HAIs are a quality and safety priority',
    ],
    introduction: 'Healthcare-associated infections are acquired in healthcare settings. They prolong stays, increase cost and mortality, and are often preventable with consistent IPC.',
    sections: [
      { heading: 'Definition', content: 'Infections linked to hospital or other healthcare exposure, not incubating on admission (exact definitions follow surveillance criteria).' },
      { heading: 'Common Types', content: 'Surgical site infection. Urinary tract infection associated with catheters. Bloodstream infection associated with vascular devices. Pneumonia including ventilator-associated in critical care. Clostridioides difficile colitis in some settings.' },
      { heading: 'Prevention Focus', content: 'Hand hygiene, device care bundles, aseptic technique, environmental cleaning, antimicrobial stewardship and vaccination of staff where recommended.' },
    ],
    clinicalConnection: 'HAI rates are monitored as quality indicators.',
    midwiferyConnection: 'Post-caesarean wound infection and newborn nursery outbreaks are maternity HAI concerns.',
    keyPoints: ['Many HAIs are preventable', 'Devices increase risk', 'Bundles work when followed'],
    rememberThis: 'The safest device is the one removed when no longer needed.',
    quickReview: [
      { q: 'What is an HAI?', a: 'An infection associated with healthcare exposure.' },
      { q: 'Name two common HAI types.', a: 'Examples: surgical site, catheter UTI, bloodstream, pneumonia.' },
    ],
    quizId: 'quiz-bnd115-l11',
    keyTerms: ['HAI', 'Surgical site infection', 'Device-associated infection'],
  },

  'bnd115-l12': {
    id: 'bnd115-l12', courseId: 'bnd-115', number: 12,
    title: 'Standard Precautions', duration: '16 min',
    objectives: [
      'Define standard precautions',
      'List core elements of standard precautions',
      'Explain why they apply to every patient',
    ],
    introduction: 'Standard precautions are IPC practices used for all patients, regardless of known infection status. They assume any blood or body fluid may be infectious.',
    sections: [
      { heading: 'Core Elements', content: 'Hand hygiene. Appropriate PPE based on anticipated exposure. Respiratory hygiene/cough etiquette. Safe sharps handling. Safe injection practices as trained. Clean environment and laundry. Proper waste handling.' },
      { heading: 'Why for Everyone', content: 'Many infections are undiagnosed at first contact. Standard precautions protect staff and patients continuously.' },
      { heading: 'Transmission-Based Add-Ons', content: 'Contact, droplet or airborne precautions are added when specific infections are suspected or confirmed — always plus standard precautions.' },
    ],
    clinicalConnection: 'Standard precautions are the floor, not the ceiling, of IPC.',
    midwiferyConnection: 'Blood and amniotic fluid exposure is expected in birth — standard precautions are non-negotiable.',
    keyPoints: ['All patients, all times', 'PPE matches exposure', 'Add transmission-based when indicated'],
    rememberThis: 'Unknown status is not “no risk” — it is standard precautions.',
    quickReview: [
      { q: 'Who receives standard precautions?', a: 'All patients.' },
      { q: 'Are transmission-based precautions used instead of standard precautions?', a: 'No — they are added on top.' },
    ],
    quizId: 'quiz-bnd115-l12',
    keyTerms: ['Standard precautions', 'Transmission-based precautions', 'Body fluid'],
  },

  'bnd115-l13': {
    id: 'bnd115-l13', courseId: 'bnd-115', number: 13,
    title: 'Hand Hygiene', duration: '18 min',
    objectives: [
      'Explain why hand hygiene is the primary IPC measure',
      'List key moments for hand hygiene',
      'Describe alcohol rub vs soap-and-water principles',
    ],
    introduction: 'Hand hygiene is the single most effective routine practice to prevent HAI. Technique and timing both matter. Skills are practised in lab and on placement per local policy.',
    sections: [
      { heading: 'Why Hands', content: 'Hands transfer microbes between patients, surfaces and invasive sites. Cleaning at the right moments breaks transmission.' },
      { heading: 'Key Moments', content: 'Before touching a patient. Before clean/aseptic procedures. After body fluid exposure risk. After touching a patient. After touching patient surroundings. Follow WHO or local 5-moments guidance in practice.' },
      { heading: 'Method Selection', content: 'Alcohol-based hand rub on visibly clean hands. Soap and water when visibly soiled, after certain organisms as policy states (e.g. spore-forming concerns), and before eating/after toileting as applicable.' },
    ],
    diagram: { title: 'Hand Hygiene Moments', description: 'Five key moments illustrated with maternal/newborn care examples.', caption: 'Right moment + right method = protection.' },
    clinicalConnection: 'Compliance audits exist because the evidence is strong.',
    midwiferyConnection: 'Before newborn examination and after nappy care are non-negotiable moments.',
    keyPoints: ['Moments matter', 'Rub vs wash depends on situation', 'Jewellery and nails affect efficacy — follow dress code'],
    commonMistakes: [
      { mistake: 'Wearing gloves instead of cleaning hands.', correction: 'Gloves do not replace hand hygiene; clean before donning and after doffing.' },
    ],
    rememberThis: 'Gloves are not a substitute for clean hands.',
    quickReview: [
      { q: 'Name three key moments for hand hygiene.', a: 'Examples: before patient contact, before aseptic task, after body fluid risk, after contact, after surroundings.' },
      { q: 'When is soap and water preferred?', a: 'When hands are visibly soiled or as policy requires for specific organisms.' },
    ],
    quizId: 'quiz-bnd115-l13',
    keyTerms: ['Hand hygiene', 'Alcohol-based hand rub', 'Five moments'],
  },

  'bnd115-l14': {
    id: 'bnd115-l14', courseId: 'bnd-115', number: 14,
    title: 'PPE and Safe Infection-Control Practices', duration: '16 min',
    objectives: [
      'Select PPE based on risk in principle',
      'Describe safe donning and doffing concepts',
      'Integrate PPE with hand hygiene',
    ],
    introduction: 'PPE is a barrier when exposure is anticipated. Wrong use or careless removal can increase contamination. Sequences are taught in skills sessions.',
    sections: [
      { heading: 'Risk-Based Selection', content: 'Gloves for possible hand contact with body fluids or contaminated items. Apron/gown for splash risk. Mask and eye protection for splash or droplet risk. Higher-level respiratory protection when airborne precautions require it per policy.' },
      { heading: 'Don and Doff', content: 'Don before exposure. Doff carefully to avoid self-contamination. Hand hygiene after removal. Never reuse single-use items.' },
      { heading: 'Safe Practices', content: 'Change gloves between patients and tasks. Do not touch your face with contaminated gloves. Dispose of PPE in correct waste streams.' },
    ],
    clinicalConnection: 'Outbreaks have been linked to PPE misuse during doffing.',
    midwiferyConnection: 'Birth is a high-splash environment — anticipate and dress for exposure.',
    keyPoints: ['Match PPE to task', 'Doffing is high risk', 'Hand hygiene after PPE'],
    rememberThis: 'The dirtiest moment is often taking PPE off — slow down.',
    quickReview: [
      { q: 'When should gloves be changed?', a: 'Between patients and between dirty and clean tasks.' },
      { q: 'What follows PPE removal?', a: 'Hand hygiene.' },
    ],
    quizId: 'quiz-bnd115-l14',
    keyTerms: ['PPE', 'Donning', 'Doffing', 'Exposure risk'],
  },

  'bnd115-l15': {
    id: 'bnd115-l15', courseId: 'bnd-115', number: 15,
    title: 'Cleaning, Disinfection and Sterilization Concepts', duration: '18 min',
    objectives: [
      'Distinguish cleaning, disinfection and sterilization',
      'Explain when each level is needed in principle',
      'Relate Spaulding-type categories to device risk',
    ],
    introduction: 'Environmental and device reprocessing reduce microbial load. Cleaning removes soil; disinfection kills most microbes on surfaces; sterilization destroys all microbial life including spores. Exact methods are facility-controlled.',
    sections: [
      { heading: 'Definitions', content: 'Cleaning — physical removal of dirt and organic matter (required before disinfection/sterilization).\nDisinfection — elimination of most pathogenic microbes on inanimate objects.\nSterilization — complete elimination of all microbes including spores.' },
      { heading: 'Risk Categories (Concept)', content: 'Critical items (enter sterile tissue/bloodstream) require sterilization.\nSemi-critical (contact mucous membranes) generally need high-level disinfection.\nNon-critical (intact skin) need cleaning and low/intermediate disinfection as policy states.' },
      { heading: 'Practice Reality', content: 'Use hospital-approved products at correct dilution and contact time. Never mix chemicals casually. Single-use devices are not reprocessed.' },
    ],
    clinicalConnection: 'Failed reprocessing has caused outbreaks linked to instruments and scopes.',
    midwiferyConnection: 'Delivery instruments and reusable equipment must meet reprocessing standards.',
    keyPoints: ['Clean before you disinfect', 'Match method to item risk', 'Follow product contact times'],
    rememberThis: 'Dirty instruments cannot be disinfected reliably — soil blocks chemicals.',
    quickReview: [
      { q: 'What is the difference between disinfection and sterilization?', a: 'Sterilization eliminates all microbes including spores; disinfection does not reliably kill all spores.' },
      { q: 'Why clean before disinfecting?', a: 'Organic soil interferes with disinfectant action.' },
    ],
    quizId: 'quiz-bnd115-l15',
    keyTerms: ['Cleaning', 'Disinfection', 'Sterilization', 'Critical item'],
  },


  'bnd115-l16': {
    id: 'bnd115-l16', courseId: 'bnd-115', number: 16,
    title: 'Aseptic Principles', duration: '16 min',
    objectives: [
      'Define asepsis and aseptic technique at an introductory level',
      'Distinguish medical and surgical asepsis concepts',
      'List behaviours that protect a sterile field',
    ],
    introduction: 'Asepsis aims to prevent contamination of susceptible sites. Aseptic technique is used for procedures that could introduce microbes into sterile tissues or devices. Detailed procedures are taught under supervision.',
    sections: [
      { heading: 'Medical vs Surgical Asepsis (Concept)', content: 'Medical asepsis (clean technique) reduces microbes and prevents spread (hand hygiene, clean gloves, environmental cleaning).\nSurgical asepsis (sterile technique) aims to keep objects and areas free of all microorganisms for invasive procedures.' },
      { heading: 'Protecting a Sterile Field', content: 'Know what is sterile vs contaminated. Do not reach across sterile fields. Keep sterile items dry and within view. Replace items that are touched, dropped or out of sight per training. Minimise traffic and talking over fields as taught.' },
      { heading: 'Student Role', content: 'Observe, assist as authorised, and speak up if sterility is broken. Never improvise invasive aseptic procedures without training and supervision.' },
    ],
    clinicalConnection: 'Central lines, urinary catheters and surgical wounds depend on aseptic discipline.',
    midwiferyConnection: 'Vaginal examinations, catheterisation and perineal repair require aseptic standards per protocol.',
    keyPoints: ['Asepsis prevents introduction of microbes', 'Sterile fields are fragile', 'Speak up if sterility is broken'],
    rememberThis: 'If you did not see it stay sterile, treat it as contaminated.',
    quickReview: [
      { q: 'What is the goal of surgical asepsis?', a: 'To keep objects/areas free of all microorganisms for invasive procedures.' },
      { q: 'What should you do if a sterile field is broken?', a: 'Speak up and follow protocol to restore sterility or restart.' },
    ],
    quizId: 'quiz-bnd115-l16',
    keyTerms: ['Asepsis', 'Aseptic technique', 'Sterile field', 'Medical asepsis'],
  },

  'bnd115-l17': {
    id: 'bnd115-l17', courseId: 'bnd-115', number: 17,
    title: 'Specimen Handling and Laboratory Concepts', duration: '16 min',
    objectives: [
      'Explain why correct specimen handling matters',
      'Describe general principles of labelling and transport',
      'Outline what happens in the clinical laboratory at a high level',
    ],
    introduction: 'Laboratory results are only as good as the specimen. Wrong container, delay, or mislabelling can harm patients through wrong treatment. Students follow local collection protocols under supervision.',
    sections: [
      { heading: 'Pre-Analytical Quality', content: 'Correct patient ID. Correct specimen type and container. Adequate volume. Timely transport. Temperature control as required. Biohazard precautions.' },
      { heading: 'Labelling', content: 'Label at the bedside with required identifiers. Never label away from the patient if policy forbids it. Mislabeled specimens are dangerous.' },
      { heading: 'What Labs Do (Overview)', content: 'Microscopy, culture and sensitivity (in authorised labs), antigen tests, molecular tests (e.g. PCR), and serology. Results guide therapy and IPC.' },
    ],
    clinicalConnection: 'Contaminated blood cultures cause false positives and unnecessary antibiotics.',
    midwiferyConnection: 'GBS swabs, MSU samples and placental swabs must be collected and labelled correctly.',
    keyPoints: ['ID and label at source', 'Right container, right time', 'Labs interpret — clinicians act'],
    rememberThis: 'A perfect lab cannot fix a wrong-patient swab.',
    quickReview: [
      { q: 'When should specimens be labelled?', a: 'At the bedside with correct identifiers, per policy.' },
      { q: 'Why does transport time matter?', a: 'Delay can kill organisms of interest or allow overgrowth, distorting results.' },
    ],
    quizId: 'quiz-bnd115-l17',
    keyTerms: ['Specimen', 'Labelling', 'Culture and sensitivity', 'Pre-analytical'],
  },

  'bnd115-l18': {
    id: 'bnd115-l18', courseId: 'bnd-115', number: 18,
    title: 'Antimicrobial Resistance', duration: '18 min',
    objectives: [
      'Define antimicrobial resistance (AMR)',
      'Explain why AMR is a global and local threat',
      'List stewardship behaviours relevant to nurses and midwives',
    ],
    introduction: 'Antimicrobial resistance occurs when microbes survive drugs designed to kill or inhibit them. It makes common infections harder to treat and is driven partly by misuse of antimicrobials.',
    sections: [
      { heading: 'What AMR Means', content: 'Bacteria (and other microbes) acquire mechanisms to resist antibiotics or other agents. Resistant infections can spread in hospitals and communities.' },
      { heading: 'Drivers', content: 'Unnecessary antibiotics. Incomplete courses when completion is advised. Overuse in agriculture. Poor IPC allowing resistant organisms to spread. Lack of diagnostics.' },
      { heading: 'Staff Role in Stewardship', content: 'Obtain cultures before antibiotics when appropriate per protocol. Give right drug, dose, route and duration as prescribed. Do not pressure for antibiotics for viral illness. Practise IPC so resistance does not spread. Educate patients gently about when antibiotics help.' },
    ],
    clinicalConnection: 'Multidrug-resistant organisms require special isolation and limited drug options.',
    midwiferyConnection: 'Intrapartum antibiotics save lives when indicated — stewardship means using them when guidelines say yes, not “just in case” without indication.',
    keyPoints: ['AMR is accelerated by misuse', 'IPC is part of stewardship', 'Right drug, right time, right duration'],
    rememberThis: 'Every unnecessary antibiotic is a vote for resistance.',
    quickReview: [
      { q: 'What is antimicrobial resistance?', a: 'When microbes survive drugs meant to kill or inhibit them.' },
      { q: 'Name one stewardship action for nurses/midwives.', a: 'Examples: IPC, timely cultures per protocol, correct administration, patient education.' },
    ],
    quizId: 'quiz-bnd115-l18',
    keyTerms: ['Antimicrobial resistance', 'Stewardship', 'Multidrug-resistant organism'],
  },

  'bnd115-l19': {
    id: 'bnd115-l19', courseId: 'bnd-115', number: 19,
    title: 'Infection Prevention in Nursing and Midwifery', duration: '18 min',
    objectives: [
      'Apply IPC principles to maternal and newborn care contexts',
      'List high-risk maternity situations for infection',
      'Describe practical prevention priorities on the labour and postnatal ward',
    ],
    introduction: 'Maternity care combines invasive procedures, body fluids, vulnerable newborns and shared environments. IPC is therefore central to midwifery practice.',
    sections: [
      { heading: 'High-Risk Situations', content: 'Prolonged rupture of membranes. Multiple vaginal examinations. Instrumental birth and caesarean section. Indwelling catheters. Preterm or low-birth-weight newborns. Shared nursery equipment if not cleaned properly.' },
      { heading: 'Practical Priorities', content: 'Hand hygiene before every newborn contact. Aseptic technique for examinations and catheterisation. Wound and perineal care per protocol. Exclusive equipment cleaning between patients. Early recognition of maternal fever and newborn sepsis signs with escalation.' },
      { heading: 'Family Education', content: 'Teach hand hygiene to visitors. Support clean breastfeeding practice. Explain when to seek help for fever, foul discharge or poor newborn feeding.' },
    ],
    clinicalConnection: 'Maternal sepsis and neonatal sepsis remain major global causes of death — prevention is midwifery core business.',
    midwiferyConnection: 'This lesson is the maternity application of the entire IPC course.',
    keyPoints: ['Newborns are highly susceptible', 'Hand hygiene before baby contact', 'Escalate early sepsis signs'],
    rememberThis: 'Your hands are either a shield or a bridge for microbes to the newborn — choose shield.',
    quickReview: [
      { q: 'Name two maternity infection risk factors.', a: 'Examples: prolonged ROM, multiple exams, caesarean, prematurity, catheters.' },
      { q: 'What should happen before every newborn examination?', a: 'Hand hygiene.' },
    ],
    quizId: 'quiz-bnd115-l19',
    keyTerms: ['Maternal sepsis', 'Neonatal sepsis', 'Prolonged rupture of membranes', 'IPC'],
  },

  'bnd115-l20': {
    id: 'bnd115-l20', courseId: 'bnd-115', number: 20,
    title: 'Integrating Microbiology and IPC for Safe Care', duration: '16 min',
    objectives: [
      'Integrate microbiology knowledge with daily IPC behaviours',
      'List non-negotiable safety habits for students',
      'Commit to stewardship and escalation',
    ],
    introduction: 'Microbiology without IPC is theory. IPC without microbiology is blind routine. Together they produce safer mothers and babies.',
    sections: [
      { heading: 'Integrated Habits', content: 'Know the organism groups. Think in chain-of-infection links. Use standard precautions always. Clean hands at key moments. Choose PPE for the risk. Protect aseptic fields. Label specimens correctly. Use antimicrobials wisely. Escalate infection warning signs.' },
      { heading: 'Non-Negotiables', content: 'Hand hygiene. Patient ID before specimens. No shortcuts on sharps. Speak up when sterility breaks. Follow local outbreak instructions.' },
      { heading: 'Your Role', content: 'You may not run the lab or prescribe, but you control hands, surfaces, devices, timing and communication — the practical front line of IPC.' },
    ],
    clinicalConnection: 'Outbreaks stop when frontline habits hold under pressure.',
    midwiferyConnection: 'Safe birth is sterile enough, clean enough, and vigilant enough — every shift.',
    keyPoints: [
      'Theory guides; habits protect',
      'Hands, devices, asepsis, stewardship',
      'Escalate early',
    ],
    rememberThis: 'The microbe is small; the consequence of neglect is not.',
    quickReview: [
      { q: 'Name three non-negotiable IPC habits.', a: 'Examples: hand hygiene, correct PPE, aseptic discipline, safe sharps, escalation.' },
      { q: 'What is the student’s practical IPC role?', a: 'Control hands, surfaces, devices, timing and communication on the front line.' },
    ],
    quizId: 'quiz-bnd115-l20',
    keyTerms: ['IPC', 'Standard precautions', 'Stewardship', 'Escalation'],
  },


  /* ================================================================
     BND 117 — COMMUNICATION SKILLS
     Fully authored learning pathway for Midwifery Easy Learning Center.
     Educational content for Level 100 midwifery/nursing students.
     ================================================================ */

  'bnd117-l01': {
    id: 'bnd117-l01', courseId: 'bnd-117', number: 1,
    title: 'Foundations and Importance of Communication', duration: '15 min',
    objectives: [
      'Explain why communication is a core clinical skill',
      'List consequences of poor communication in healthcare',
      'Describe communication as a safety behaviour',
    ],
    introduction: 'Communication is how care is coordinated, consent is obtained, fear is reduced and errors are prevented. In maternity care, clear talk with women, families and teams is as essential as clinical observation.',
    sections: [
      { heading: 'Why Communication Matters', content: 'It builds trust, gathers accurate history, supports informed decisions, coordinates the team and documents care. Without it, even correct clinical knowledge fails at the bedside.' },
      { heading: 'When Communication Fails', content: 'Missed handovers, unclear consent, ignored concerns and rude or rushed talk contribute to complaints, delays and harm. Many serious incidents list communication failure as a root cause.' },
      { heading: 'Communication as Safety', content: 'Speaking up, closed-loop confirmation and structured handover are safety tools, not optional soft skills.' },
    ],
    clinicalConnection: 'Every assessment begins with a conversation.',
    midwiferyConnection: 'A labouring woman’s experience is shaped by how she is spoken to between contractions.',
    keyPoints: ['Communication is clinical', 'Failure causes harm', 'Safety needs clear talk'],
    rememberThis: 'Skill without communication still leaves the patient alone with fear.',
    quickReview: [
      { q: 'Why is communication a safety skill?', a: 'It prevents missed information, supports escalation and coordinates care.' },
      { q: 'Name one consequence of poor communication.', a: 'Examples: delayed care, complaints, consent problems, adverse events.' },
    ],
    quizId: 'quiz-bnd117-l01',
    keyTerms: ['Communication', 'Patient safety', 'Trust'],
  },

  'bnd117-l02': {
    id: 'bnd117-l02', courseId: 'bnd-117', number: 2,
    title: 'Communication Process and Principles', duration: '16 min',
    objectives: [
      'Describe the elements of the communication process',
      'Explain encoding, decoding and feedback',
      'List principles of effective professional communication',
    ],
    introduction: 'Communication is a process: a sender encodes a message, sends it through a channel, a receiver decodes it, and feedback confirms understanding. Noise can distort every step.',
    sections: [
      { heading: 'Process Elements', content: 'Sender → message → channel → receiver → feedback. Context and relationship influence meaning. Noise includes literal sound, jargon, pain, fear and assumptions.' },
      { heading: 'Feedback Closes the Loop', content: 'Without feedback you only hope you were understood. Ask patients to teach back key points. Confirm critical instructions with colleagues.' },
      { heading: 'Principles', content: 'Clarity. Brevity when urgency requires it. Respect. Honesty. Timing. Confidentiality. Cultural humility.' },
    ],
    diagram: { title: 'Communication Process', description: 'Sender-message-channel-receiver-feedback loop with noise sources labelled.', caption: 'Feedback confirms the message arrived intact.' },
    clinicalConnection: 'Read-back of critical results is process discipline.',
    midwiferyConnection: 'Explaining a procedure then checking understanding is feedback in action.',
    keyPoints: ['Process has multiple points of failure', 'Feedback is essential', 'Reduce noise'],
    rememberThis: 'What you meant is less important than what they understood.',
    quickReview: [
      { q: 'What closes the communication loop?', a: 'Feedback.' },
      { q: 'Name two sources of noise.', a: 'Examples: jargon, pain, fear, loud environment, assumptions.' },
    ],
    quizId: 'quiz-bnd117-l02',
    keyTerms: ['Encoding', 'Decoding', 'Feedback', 'Noise'],
  },

  'bnd117-l03': {
    id: 'bnd117-l03', courseId: 'bnd-117', number: 3,
    title: 'Verbal Communication', duration: '16 min',
    objectives: [
      'Describe features of clear verbal communication',
      'Adjust language to the listener',
      'Use questions effectively',
    ],
    introduction: 'Verbal communication is spoken words, tone and pace. In healthcare it must be accurate enough for safety and simple enough for understanding.',
    sections: [
      { heading: 'Clarity Techniques', content: 'Use plain language. Define essential terms. One idea at a time when the patient is stressed. Appropriate volume and pace. Avoid unnecessary jargon.' },
      { heading: 'Questions', content: 'Open questions explore (“How are you coping with the pain?”). Closed questions confirm facts (“Is your name Ama Mensah?”). Leading questions bias answers — use carefully.' },
      { heading: 'Tone and Pace', content: 'Calm tone reduces fear. Rushed speech increases misunderstanding. Silence can invite more information.' },
    ],
    clinicalConnection: 'Consent conversations fail when language is too technical.',
    midwiferyConnection: 'Coaching breathing in labour uses short, clear verbal cues.',
    keyPoints: ['Plain language first', 'Match question type to purpose', 'Tone carries meaning'],
    rememberThis: 'If the patient cannot repeat the plan, the plan was not communicated.',
    quickReview: [
      { q: 'When are open questions useful?', a: 'When exploring feelings, experiences or concerns.' },
      { q: 'What is plain language?', a: 'Clear everyday wording that avoids unnecessary jargon.' },
    ],
    quizId: 'quiz-bnd117-l03',
    keyTerms: ['Verbal communication', 'Plain language', 'Open question', 'Closed question'],
  },

  'bnd117-l04': {
    id: 'bnd117-l04', courseId: 'bnd-117', number: 4,
    title: 'Non-Verbal Communication', duration: '16 min',
    objectives: [
      'List major forms of non-verbal communication',
      'Interpret non-verbal cues cautiously',
      'Align body language with verbal messages',
    ],
    introduction: 'Non-verbal signals — eye contact, posture, facial expression, touch, space and silence — often speak louder than words. Congruence between verbal and non-verbal messages builds trust.',
    sections: [
      { heading: 'Forms', content: 'Facial expression, eye contact, posture, gestures, proximity, touch, appearance and paralanguage (tone, pitch, speed).' },
      { heading: 'Clinical Use', content: 'Notice pain grimaces, withdrawal, or a partner’s anxiety. Sit at eye level when possible. Avoid looking only at charts while the woman speaks.' },
      { heading: 'Caution', content: 'Non-verbal cues are culturally shaped. Do not over-interpret a single gesture. Ask when unsure.' },
    ],
    clinicalConnection: 'Patients detect rushed or dismissive body language instantly.',
    midwiferyConnection: 'A steady presence and calm face can reduce labour anxiety without many words.',
    keyPoints: ['Align words and body language', 'Observe broadly', 'Culture shapes non-verbal norms'],
    rememberThis: 'Your face may answer the patient before your mouth does.',
    quickReview: [
      { q: 'Name three non-verbal channels.', a: 'Examples: facial expression, posture, eye contact, tone, touch, space.' },
      { q: 'Why be careful interpreting non-verbal cues?', a: 'They are influenced by culture, personality and context.' },
    ],
    quizId: 'quiz-bnd117-l04',
    keyTerms: ['Non-verbal communication', 'Congruence', 'Paralanguage'],
  },

  'bnd117-l05': {
    id: 'bnd117-l05', courseId: 'bnd-117', number: 5,
    title: 'Written Communication', duration: '16 min',
    objectives: [
      'Explain standards for professional written communication',
      'List common written forms in clinical care',
      'Avoid ambiguous or unsafe written messages',
    ],
    introduction: 'Written communication includes notes, charts, referrals, messages and education materials. What is written outlives the shift and may be read in court.',
    sections: [
      { heading: 'Standards', content: 'Accurate, timely, legible or correctly typed, factual, complete enough for continuity, and confidential. Use approved abbreviations only.' },
      { heading: 'Clinical Forms', content: 'Progress notes, observation charts, partographs, referral letters, incident reports and patient information leaflets.' },
      { heading: 'Unsafe Writing', content: 'Vague phrases (“patient fine”), missing times, opinions stated as facts, and unidentified authors. Write so the next clinician can act safely.' },
    ],
    clinicalConnection: 'Handover quality depends partly on the written record.',
    midwiferyConnection: 'Partograph entries must be clear enough to show labour progress at a glance.',
    keyPoints: ['Write for the next reader', 'Facts over fluff', 'Confidentiality still applies'],
    rememberThis: 'If it is critical, write it clearly — memory is not a record.',
    quickReview: [
      { q: 'Name three standards of professional writing.', a: 'Examples: accurate, timely, factual, legible, confidential.' },
      { q: 'Why avoid vague notes?', a: 'They do not support safe continuity of care.' },
    ],
    quizId: 'quiz-bnd117-l05',
    keyTerms: ['Written communication', 'Documentation', 'Approved abbreviation'],
  },


  'bnd117-l06': {
    id: 'bnd117-l06', courseId: 'bnd-117', number: 6,
    title: 'Active Listening', duration: '16 min',
    objectives: [
      'Define active listening',
      'Demonstrate listening behaviours',
      'Avoid common listening failures',
    ],
    introduction: 'Active listening is fully attending to the speaker, understanding their message and showing that understanding. It is the foundation of therapeutic work and accurate assessment.',
    sections: [
      { heading: 'Behaviours', content: 'Face the speaker. Minimise interruptions. Use encouraging cues. Reflect content and feelings. Clarify ambiguities. Summarise. Allow silence.' },
      { heading: 'What Listening Achieves', content: 'More accurate histories. Earlier disclosure of fear or abuse. Stronger rapport. Fewer repeated questions.' },
      { heading: 'Failures', content: 'Rehearsing your reply while they talk. Changing the subject. False reassurance. Looking only at the computer. Interrupting with premature advice.' },
    ],
    clinicalConnection: 'Missed symptoms are often missed listening, not missed knowledge.',
    midwiferyConnection: 'Women remember whether anyone truly listened during labour.',
    keyPoints: ['Attend fully', 'Reflect and clarify', 'Silence can help'],
    rememberThis: 'Listening is an action, not a pause before you speak.',
    quickReview: [
      { q: 'Name two active listening behaviours.', a: 'Examples: face the speaker, reflect, clarify, summarise, allow silence.' },
      { q: 'Name one listening failure.', a: 'Examples: interrupting, false reassurance, rehearsing your reply, changing subject.' },
    ],
    quizId: 'quiz-bnd117-l06',
    keyTerms: ['Active listening', 'Reflection', 'Clarifying'],
  },

  'bnd117-l07': {
    id: 'bnd117-l07', courseId: 'bnd-117', number: 7,
    title: 'Therapeutic Communication', duration: '18 min',
    objectives: [
      'Define therapeutic communication',
      'List helpful techniques and unhelpful responses',
      'Apply techniques to maternity scenarios',
    ],
    introduction: 'Therapeutic communication is purposeful talk focused on the patient’s needs, understanding and emotional support. It differs from social chat by intention and boundaries.',
    sections: [
      { heading: 'Helpful Techniques', content: 'Open questions. Clarifying. Reflecting feelings. Summarising. Offering presence. Giving information clearly. Exploring concerns without judgement.' },
      { heading: 'Unhelpful Responses', content: 'False reassurance (“Everything will be fine”). Judging. Advising too early. Changing the subject. Defensiveness. Using jargon as a shield.' },
      { heading: 'Maternity Examples', content: '“Tell me what worries you most about the birth.” “It sounds like you felt unheard — can we go over the plan together?” “Would you like your partner to stay for this discussion?”' },
    ],
    clinicalConnection: 'Therapeutic talk improves cooperation with care and reveals hidden concerns.',
    midwiferyConnection: 'Continuous labour support is largely skilled communication under stress.',
    keyPoints: ['Purpose is the patient’s wellbeing', 'Avoid false reassurance', 'Explore before advising'],
    rememberThis: '“Tell me more” often helps more than a quick fix sentence.',
    quickReview: [
      { q: 'What makes communication therapeutic?', a: 'It is purposeful and focused on the patient’s needs and support.' },
      { q: 'Why is false reassurance unhelpful?', a: 'It dismisses real concerns and can break trust.' },
    ],
    quizId: 'quiz-bnd117-l07',
    keyTerms: ['Therapeutic communication', 'False reassurance', 'Exploring'],
  },

  'bnd117-l08': {
    id: 'bnd117-l08', courseId: 'bnd-117', number: 8,
    title: 'Empathy, Respect and Rapport', duration: '16 min',
    objectives: [
      'Distinguish empathy from sympathy',
      'Describe respect in practical communication',
      'Explain how rapport supports care',
    ],
    introduction: 'Empathy is understanding another’s feelings from their perspective. Respect honours their dignity. Rapport is the working trust that lets hard conversations happen.',
    sections: [
      { heading: 'Empathy', content: '“This sounds frightening” acknowledges emotion without taking over the story. Sympathy may centre the helper’s feelings; empathy centres the patient.' },
      { heading: 'Respect', content: 'Preferred name. Privacy. No talking over the person. Honest information. Inclusion in decisions at their level of understanding.' },
      { heading: 'Rapport', content: 'Built by reliability, warmth, competence and consistency. Lost quickly by dismissal or broken promises.' },
    ],
    clinicalConnection: 'Patients disclose more to clinicians they trust.',
    midwiferyConnection: 'Rapport across antenatal visits supports better labour experiences.',
    keyPoints: ['Empathy centres the other person', 'Respect is behavioural', 'Rapport is earned'],
    rememberThis: 'You do not have to feel what they feel — you have to show you heard it.',
    quickReview: [
      { q: 'How does empathy differ from sympathy?', a: 'Empathy focuses on the patient’s perspective; sympathy can centre the helper’s feelings.' },
      { q: 'Name one respect behaviour.', a: 'Examples: preferred name, privacy, honest information, inclusion in decisions.' },
    ],
    quizId: 'quiz-bnd117-l08',
    keyTerms: ['Empathy', 'Respect', 'Rapport'],
  },

  'bnd117-l09': {
    id: 'bnd117-l09', courseId: 'bnd-117', number: 9,
    title: 'Communication Barriers', duration: '16 min',
    objectives: [
      'Identify common communication barriers',
      'Describe strategies to reduce barriers',
      'Respond to language and sensory barriers appropriately',
    ],
    introduction: 'Barriers block understanding. Some are environmental; some are personal or systemic. Professionals anticipate and reduce them rather than blaming the patient.',
    sections: [
      { heading: 'Common Barriers', content: 'Noise. Pain. Fear. Language difference. Low health literacy. Jargon. Hierarchy. Time pressure. Cultural mismatch. Hearing or cognitive impairment. Assumptions.' },
      { heading: 'Reduction Strategies', content: 'Quiet space when possible. Short sentences. Interpreters per policy. Teach-back. Written aids. Patience. Checking assumptions.' },
      { heading: 'Interpreters', content: 'Use professional interpreters for clinical information when needed. Family members may be inappropriate for sensitive or complex content — follow local policy.' },
    ],
    clinicalConnection: 'Unrecognised barriers look like “non-compliance.”',
    midwiferyConnection: 'Pain and fear in labour are major barriers — adapt pace and method.',
    keyPoints: ['Name the barrier', 'Adapt the method', 'Use interpreters appropriately'],
    rememberThis: 'If they did not understand, the message was not finished.',
    quickReview: [
      { q: 'Name three communication barriers.', a: 'Examples: noise, jargon, language difference, pain, fear, time pressure.' },
      { q: 'What is teach-back?', a: 'Asking the patient to explain the information in their own words to confirm understanding.' },
    ],
    quizId: 'quiz-bnd117-l09',
    keyTerms: ['Communication barrier', 'Health literacy', 'Interpreter', 'Teach-back'],
  },

  'bnd117-l10': {
    id: 'bnd117-l10', courseId: 'bnd-117', number: 10,
    title: 'Cultural Sensitivity and Respectful Communication', duration: '16 min',
    objectives: [
      'Define culturally sensitive communication',
      'Avoid stereotyping while honouring cultural needs',
      'Ask respectful questions about preferences',
    ],
    introduction: 'Culture shapes how people express pain, who makes decisions, and what privacy means. Sensitive communication asks and adapts; it does not assume.',
    sections: [
      { heading: 'Sensitive Practice', content: 'Learn preferred language. Ask who should be present. Respect modesty norms. Explain why information is needed. Avoid jokes about culture or religion.' },
      { heading: 'Avoid Stereotypes', content: 'Individuals differ within cultures. Treat each person as the expert on their preferences while offering evidence-based options.' },
      { heading: 'Useful Questions', content: '“Is there anything about your beliefs or practices we should respect during care?” “Who would you like involved in decisions?”' },
    ],
    clinicalConnection: 'Misread cultural cues cause conflict and reduced trust.',
    midwiferyConnection: 'Birth companions, female attendants and postpartum practices vary — ask early.',
    keyPoints: ['Ask, do not assume', 'Individuals vary', 'Respect is shown in process'],
    rememberThis: 'Curiosity with respect beats confident stereotyping.',
    quickReview: [
      { q: 'What is a key habit of culturally sensitive communication?', a: 'Asking about preferences rather than assuming.' },
      { q: 'Why avoid stereotypes?', a: 'People within the same culture differ widely.' },
    ],
    quizId: 'quiz-bnd117-l10',
    keyTerms: ['Cultural sensitivity', 'Respectful communication', 'Stereotype'],
  },


  'bnd117-l11': {
    id: 'bnd117-l11', courseId: 'bnd-117', number: 11,
    title: 'Patient Education and Health Literacy', duration: '16 min',
    objectives: [
      'Define health literacy',
      'Apply teach-back and plain language in education',
      'Tailor education to readiness and capacity',
    ],
    introduction: 'Patient education helps people understand their condition and participate in care. Health literacy is the ability to obtain, process and use health information. Education fails when literacy and readiness are ignored.',
    sections: [
      { heading: 'Health Literacy', content: 'Many adults struggle with complex health information. Shame may hide confusion. Assume nothing; check understanding routinely.' },
      { heading: 'Effective Education', content: 'Prioritise 2–3 key points. Use plain language and visuals. Demonstrate skills. Use teach-back: “Just to be sure I explained well, how will you take this medicine?”' },
      { heading: 'Timing and Readiness', content: 'Pain, exhaustion and bad news reduce learning. Repeat important points later. Involve support persons with consent.' },
    ],
    clinicalConnection: 'Medication errors after discharge often reflect failed education, not only patient fault.',
    midwiferyConnection: 'Breastfeeding and postnatal warning-sign education need teach-back, not only leaflets.',
    keyPoints: ['Few key points', 'Teach-back confirms', 'Match timing to capacity'],
    rememberThis: 'Teaching is not talking — it is verified understanding.',
    quickReview: [
      { q: 'What is teach-back?', a: 'Asking the learner to explain the information in their own words.' },
      { q: 'Why limit key points?', a: 'Overload reduces retention, especially under stress.' },
    ],
    quizId: 'quiz-bnd117-l11',
    keyTerms: ['Health literacy', 'Patient education', 'Teach-back'],
  },

  'bnd117-l12': {
    id: 'bnd117-l12', courseId: 'bnd-117', number: 12,
    title: 'Documentation and Professional Communication', duration: '16 min',
    objectives: [
      'Link documentation standards to communication quality',
      'Describe what makes a note useful to the next clinician',
      'Avoid communication hazards in the record',
    ],
    introduction: 'The record is a form of professional communication with future readers. It must be clear enough to continue care safely without guessing.',
    sections: [
      { heading: 'Useful Notes', content: 'Who, what, when, response, and plan. Objective language. Time stamps. Identity of author. Significant conversations and refusals.' },
      { heading: 'Hazards', content: 'Copy-paste errors. Unsigned entries. Judgemental language. Missing escalation. Contradictory times.' },
      { heading: 'Alignment', content: 'What you say at handover should match what you wrote. Discrepancies confuse the team.' },
    ],
    clinicalConnection: 'Incident reviews compare verbal accounts with the written record.',
    midwiferyConnection: 'Labour notes and postnatal plans must communicate clearly across shifts.',
    keyPoints: ['Write for continuity', 'Facts and times', 'Match verbal and written'],
    rememberThis: 'The next midwife will treat your note as truth — make it trustworthy.',
    quickReview: [
      { q: 'What should a useful note enable?', a: 'Safe continuation of care by the next clinician.' },
      { q: 'Name one documentation hazard.', a: 'Examples: vague language, missing times, judgemental wording, copy-paste errors.' },
    ],
    quizId: 'quiz-bnd117-l12',
    keyTerms: ['Documentation', 'Professional communication', 'Continuity'],
  },

  'bnd117-l13': {
    id: 'bnd117-l13', courseId: 'bnd-117', number: 13,
    title: 'Handover and SBAR', duration: '18 min',
    objectives: [
      'Explain the purpose of clinical handover',
      'Apply SBAR structure',
      'List elements of a safe maternity handover',
    ],
    introduction: 'Handover transfers responsibility and critical information. SBAR (Situation, Background, Assessment, Recommendation) structures urgent and routine communication to reduce omissions.',
    sections: [
      { heading: 'Why Handover Fails', content: 'Interruptions. Missing data. Unclear ownership. Hierarchy that blocks questions. No read-back of critical items.' },
      { heading: 'SBAR', content: 'Situation — who/what now.\nBackground — relevant context.\nAssessment — what you think is happening.\nRecommendation — what you need.\nInvite questions.' },
      { heading: 'Maternity Handover', content: 'Include mother and baby status, stage of labour or postnatal day, risks, pending results, plans and escalation triggers.' },
    ],
    diagram: { title: 'SBAR Structure', description: 'Four-box SBAR with maternity example phrases.', caption: 'Structure reduces missed information.' },
    clinicalConnection: 'Handover is a recognised high-risk communication moment.',
    midwiferyConnection: 'Shift change on labour ward must leave no ambiguity about who is responsible for whom.',
    keyPoints: ['Handover transfers responsibility', 'SBAR organises urgency', 'Mother and baby both'],
    rememberThis: 'If it is not handed over, it may not be done.',
    quickReview: [
      { q: 'What does SBAR stand for?', a: 'Situation, Background, Assessment, Recommendation.' },
      { q: 'What must maternity handover include?', a: 'Mother and baby status, risks, plans and pending issues.' },
    ],
    quizId: 'quiz-bnd117-l13',
    keyTerms: ['Handover', 'SBAR', 'Closed-loop communication'],
  },

  'bnd117-l14': {
    id: 'bnd117-l14', courseId: 'bnd-117', number: 14,
    title: 'Communication Within Healthcare Teams', duration: '16 min',
    objectives: [
      'Describe features of effective team communication',
      'Use closed-loop techniques',
      'Support psychological safety to speak up',
    ],
    introduction: 'Team communication coordinates roles under pressure. Closed-loop methods and permission to speak up prevent silent errors.',
    sections: [
      { heading: 'Effective Team Talk', content: 'Clear roles. Shared goals. Briefings and debriefs. Precise language. Respect across professions.' },
      { heading: 'Closed-Loop', content: 'Sender gives instruction. Receiver repeats key content. Sender confirms. Used for drugs, emergency actions and critical values as policy requires.' },
      { heading: 'Speaking Up', content: 'Juniors must be able to raise safety concerns. Graded assertiveness helps: question, challenge, take stronger action if risk continues.' },
    ],
    clinicalConnection: 'Emergency drills train team communication deliberately.',
    midwiferyConnection: 'Shoulder dystocia and haemorrhage drills depend on clear team talk.',
    keyPoints: ['Precision under pressure', 'Close the loop', 'Speak up for safety'],
    rememberThis: 'The quiet error is the one nobody challenged.',
    quickReview: [
      { q: 'What is closed-loop communication?', a: 'Repeating and confirming critical information so both parties agree.' },
      { q: 'Why is psychological safety important?', a: 'It allows team members to raise concerns without fear of inappropriate punishment.' },
    ],
    quizId: 'quiz-bnd117-l14',
    keyTerms: ['Team communication', 'Closed-loop', 'Psychological safety'],
  },

  'bnd117-l15': {
    id: 'bnd117-l15', courseId: 'bnd-117', number: 15,
    title: 'Conflict Resolution', duration: '16 min',
    objectives: [
      'Identify sources of conflict in healthcare',
      'Apply constructive resolution steps',
      'Know when to involve a supervisor',
    ],
    introduction: 'Conflict arises from workload, values, roles and stress. Resolved well, it improves care. Resolved poorly, it harms teams and patients.',
    sections: [
      { heading: 'Sources', content: 'Role confusion. Resource limits. Communication gaps. Personality clashes. Ethical disagreement. Hierarchy.' },
      { heading: 'Constructive Steps', content: 'Pause. Focus on the issue and shared goal (usually patient safety). Use respectful “I” statements. Listen. Seek options. Agree next steps.' },
      { heading: 'Escalate When', content: 'Safety is at risk. Behaviour is abusive. Resolution fails. Students should not mediate serious disputes alone.' },
    ],
    clinicalConnection: 'Unresolved conflict distracts from observation and increases error.',
    midwiferyConnection: 'Disagreements about labour plans need calm, evidence-informed dialogue.',
    keyPoints: ['Focus on interests and safety', 'Stay respectful', 'Escalate unsafe situations'],
    rememberThis: 'Winning the argument is useless if the patient loses safety.',
    quickReview: [
      { q: 'Name two sources of workplace conflict.', a: 'Examples: role confusion, workload, communication gaps, ethical disagreement.' },
      { q: 'When should conflict be escalated?', a: 'When safety is threatened, behaviour is abusive, or resolution fails.' },
    ],
    quizId: 'quiz-bnd117-l15',
    keyTerms: ['Conflict resolution', 'Escalation', 'Shared goals'],
  },


  'bnd117-l16': {
    id: 'bnd117-l16', courseId: 'bnd-117', number: 16,
    title: 'Difficult Conversations', duration: '18 min',
    objectives: [
      'Prepare for difficult conversations',
      'Use a structured approach to breaking bad or hard news at student level',
      'Support emotional responses without false reassurance',
    ],
    introduction: 'Difficult conversations include bad news, refused treatment, errors, and limits of care. Students participate within scope and with supervision for high-stakes discussions.',
    sections: [
      { heading: 'Preparation', content: 'Know the facts. Choose a private setting. Ensure the right people are present. Plan plain language. Anticipate emotions. Involve a supervisor for major news.' },
      { heading: 'During the Conversation', content: 'Warn that difficult information is coming. Give information in short chunks. Pause. Check understanding. Acknowledge emotion. Avoid false reassurance. Answer questions honestly within your knowledge.' },
      { heading: 'Afterward', content: 'Document the discussion. Ensure support is available. Debrief with a supervisor if the conversation was intense.' },
    ],
    clinicalConnection: 'How hard news is given affects trust for the rest of the care episode.',
    midwiferyConnection: 'Discussing fetal concerns, stillbirth risk, or unexpected outcomes requires supervised, skilled communication.',
    keyPoints: ['Prepare and privacy', 'Chunks and pauses', 'Honesty without false comfort'],
    rememberThis: 'Presence matters as much as perfect words.',
    quickReview: [
      { q: 'Name two preparation steps for difficult conversations.', a: 'Examples: know facts, private setting, right people present, plan plain language, involve supervisor.' },
      { q: 'Why avoid false reassurance?', a: 'It can break trust when reality differs.' },
    ],
    quizId: 'quiz-bnd117-l16',
    keyTerms: ['Difficult conversation', 'Breaking bad news', 'Emotional support'],
  },

  'bnd117-l17': {
    id: 'bnd117-l17', courseId: 'bnd-117', number: 17,
    title: 'Confidentiality and Professional Boundaries in Communication', duration: '16 min',
    objectives: [
      'Apply confidentiality to spoken and written communication',
      'Maintain boundaries in patient conversations',
      'Handle requests for information from third parties',
    ],
    introduction: 'What you say, write and post can breach confidentiality. Boundaries keep conversations therapeutic. Both protect trust.',
    sections: [
      { heading: 'Confidentiality in Talk', content: 'No corridor gossip. No identifiable social media posts. Share on a need-to-know basis. Verify who is entitled to information before discussing details with callers or visitors.' },
      { heading: 'Boundaries', content: 'Avoid over-sharing personal problems. Do not agree to secrecy that endangers safety — escalate. Keep dual relationships out of care conversations.' },
      { heading: 'Third-Party Requests', content: 'Follow policy before releasing information to family, employers or police. When unsure, ask a supervisor before speaking.' },
    ],
    clinicalConnection: 'Confidentiality breaches are professional conduct issues.',
    midwiferyConnection: 'Partners and families need information with the woman’s consent and within policy.',
    keyPoints: ['Need-to-know', 'No social media cases', 'Ask before releasing information'],
    rememberThis: 'If you would not write it in the notes for anyone to see, do not say it in public.',
    quickReview: [
      { q: 'What is need-to-know sharing?', a: 'Sharing information only with those who require it for care.' },
      { q: 'What should you do before giving details to a caller?', a: 'Verify entitlement per policy; ask a supervisor if unsure.' },
    ],
    quizId: 'quiz-bnd117-l17',
    keyTerms: ['Confidentiality', 'Professional boundaries', 'Need-to-know'],
  },

  'bnd117-l18': {
    id: 'bnd117-l18', courseId: 'bnd-117', number: 18,
    title: 'Telephone and Digital Communication', duration: '16 min',
    objectives: [
      'Apply safety rules to telephone communication',
      'Describe professional standards for digital clinical messages',
      'Avoid common digital risks',
    ],
    introduction: 'Phone and digital channels speed care but remove visual cues and increase identity and confidentiality risks. Structure and policy protect patients.',
    sections: [
      { heading: 'Telephone Principles', content: 'Identify yourself and role. Confirm patient identity as required. Speak clearly. Repeat critical values. Document the call. Do not give complex advice beyond your scope.' },
      { heading: 'Digital Messages', content: 'Use approved clinical systems only. No identifiable patient data on personal apps or social media. Follow encryption and access rules of your facility.' },
      { heading: 'Risks', content: 'Wrong number. Misheard doses. Informal tone that omits critical detail. Screenshots and forwarding.' },
    ],
    clinicalConnection: 'Critical lab results by phone need read-back.',
    midwiferyConnection: 'Triage calls about labour symptoms need careful questioning and clear advice to attend when indicated.',
    keyPoints: ['Identify and confirm', 'Approved channels only', 'Document significant calls'],
    rememberThis: 'If it is not on an approved system, it is not a safe clinical channel.',
    quickReview: [
      { q: 'What should you do with a critical value given by phone?', a: 'Read it back to confirm and document per policy.' },
      { q: 'May personal messaging apps be used for identifiable patient data?', a: 'No — use approved systems only.' },
    ],
    quizId: 'quiz-bnd117-l18',
    keyTerms: ['Telephone communication', 'Digital communication', 'Read-back'],
  },

  'bnd117-l19': {
    id: 'bnd117-l19', courseId: 'bnd-117', number: 19,
    title: 'Communication in Pregnancy, Labour and Postpartum Care', duration: '18 min',
    objectives: [
      'Adapt communication across antenatal, intrapartum and postnatal phases',
      'Support shared decision-making with women and families',
      'Communicate about mother and newborn as a dyad when appropriate',
    ],
    introduction: 'Maternity communication changes with context: calm antenatal education, intense labour coaching, and postpartum teaching under fatigue. The woman remains central.',
    sections: [
      { heading: 'Antenatal', content: 'Build rapport over visits. Explain screening in plain language. Use teach-back for warning signs. Document preferences and birth plans as living documents.' },
      { heading: 'Labour', content: 'Short clear phrases. Consent for examinations. Continuous information about progress. Include the birth companion when the woman wishes. Escalate concerns with structured team communication.' },
      { heading: 'Postpartum and Newborn', content: 'Teach feeding and danger signs when the mother is ready. Communicate newborn status clearly. Support emotional adjustment. Ensure handover covers mother and baby.' },
    ],
    clinicalConnection: 'Informed choice requires understandable information at each phase.',
    midwiferyConnection: 'This lesson is the maternity application of the whole communication course.',
    keyPoints: ['Adapt to phase and capacity', 'Woman-centred decisions', 'Mother and baby in handover'],
    rememberThis: 'Between contractions, she still needs to know what is happening and why.',
    quickReview: [
      { q: 'How should verbal cues change in active labour?', a: 'Shorter, clearer phrases matched to coping capacity.' },
      { q: 'What should postnatal education prioritise?', a: 'Key safety and feeding points with teach-back when the mother can learn.' },
    ],
    quizId: 'quiz-bnd117-l19',
    keyTerms: ['Shared decision-making', 'Birth companion', 'Woman-centred communication'],
  },

  'bnd117-l20': {
    id: 'bnd117-l20', courseId: 'bnd-117', number: 20,
    title: 'Integrated Communication Skills and Professional Reflection', duration: '16 min',
    objectives: [
      'Integrate core communication skills into daily practice habits',
      'Reflect on communication successes and failures',
      'Commit to continuous improvement of professional communication',
    ],
    introduction: 'Communication competence grows with deliberate practice and reflection. This final lesson consolidates the course into habits you can use on every shift.',
    sections: [
      { heading: 'Integrated Habits', content: 'Listen first. Use plain language. Check understanding. Align verbal and non-verbal messages. Structure urgent talk (SBAR). Protect confidentiality. Educate with teach-back. Speak up for safety. Document clearly.' },
      { heading: 'Reflection Questions', content: 'When did someone leave my care more informed? When did I interrupt too soon? When did hierarchy silence me — and what will I do next time? What will I practise this week?' },
      { heading: 'Professional Promise', content: 'I will treat communication as a clinical skill that protects women, babies and teams — and I will keep improving it.' },
    ],
    clinicalConnection: 'Teams notice students who communicate clearly under pressure.',
    midwiferyConnection: 'A midwife’s voice can calm a room or confuse it — choose calm clarity.',
    keyPoints: [
      'Habits over one-off techniques',
      'Reflect after hard conversations',
      'Communication is lifelong skill work',
    ],
    rememberThis: 'Every conversation is practice for the one that will matter most.',
    quickReview: [
      { q: 'Name three integrated communication habits.', a: 'Examples: listen first, plain language, teach-back, SBAR, speak up, clear documentation.' },
      { q: 'Why reflect on communication?', a: 'To turn experience into deliberate improvement.' },
    ],
    quizId: 'quiz-bnd117-l20',
    keyTerms: ['Professional communication', 'Reflection', 'Teach-back', 'SBAR'],
  },


  /* ================================================================
     BND 119 — NURSING AND MIDWIFERY INFORMATICS
     Fully authored learning pathway for Midwifery Easy Learning Center.
     Educational content for Level 100 midwifery/nursing students.
     Not a substitute for institutional systems, local policies, or clinical judgment.
     ================================================================ */

  'bnd119-l01': {
    id: 'bnd119-l01', courseId: 'bnd-119', number: 1,
    title: 'Introduction to Nursing and Midwifery Informatics', duration: '15 min',
    objectives: [
      'Define nursing and midwifery informatics',
      'Explain why informatics matters for safe care',
      'List everyday informatics tasks for students',
    ],
    introduction: 'Informatics is the use of data, information and technology to support nursing and midwifery practice, education and management. It is not only “computers” — it is safer documentation, better decisions and protected patient information.',
    sections: [
      { heading: 'What Informatics Is', content: 'The intersection of nursing/midwifery science, information science and computer science. Goals include better documentation, safer medication processes, clearer communication and usable data for quality improvement.' },
      { heading: 'Why It Matters', content: 'Illegible notes, lost results, privacy breaches and poorly designed systems harm patients. Skilled use of information tools reduces those risks.' },
      { heading: 'Student Reality', content: 'You will log in to systems, document, retrieve results, message within approved channels and protect passwords. Local training on specific software is mandatory — this course teaches concepts.' },
    ],
    clinicalConnection: 'Every login, entry and result review is informatics in practice.',
    midwiferyConnection: 'Antenatal records, partographs and newborn charts increasingly live in digital systems.',
    keyPoints: ['Informatics supports safe practice', 'Concepts transfer across software brands', 'Local systems training is still required'],
    rememberThis: 'Technology serves care — care does not serve the screen.',
    quickReview: [
      { q: 'What is nursing/midwifery informatics?', a: 'Using data, information and technology to support nursing and midwifery practice.' },
      { q: 'Does this course replace local EHR training?', a: 'No — it teaches concepts; institutions train on their systems.' },
    ],
    quizId: 'quiz-bnd119-l01',
    keyTerms: ['Informatics', 'Health information technology', 'Digital documentation'],
  },

  'bnd119-l02': {
    id: 'bnd119-l02', courseId: 'bnd-119', number: 2,
    title: 'Data, Information, Knowledge and Wisdom', duration: '16 min',
    objectives: [
      'Distinguish data, information, knowledge and wisdom',
      'Give clinical examples of each level',
      'Explain why quality data enables wisdom in care',
    ],
    introduction: 'Raw numbers become useful only when organised and interpreted. The data–information–knowledge–wisdom (DIKW) hierarchy explains how documentation turns into clinical judgement.',
    sections: [
      { heading: 'DIKW Hierarchy', content: 'Data — discrete facts (BP 90/60).\nInformation — data in context (BP fell from 120/80 after bleeding).\nKnowledge — patterns and principles (hypotension after haemorrhage needs volume and cause control).\nWisdom — applying knowledge ethically in this patient’s situation.' },
      { heading: 'Clinical Example', content: 'Fetal heart rate values (data) plotted on a partograph (information) interpreted with labour progress knowledge lead to wise decisions about escalation.' },
      { heading: 'Implication', content: 'Garbage in, garbage out. Poor data quality blocks good decisions upstream.' },
    ],
    diagram: { title: 'DIKW Hierarchy', description: 'Pyramid from data to wisdom with maternity examples at each level.', caption: 'Quality data feeds wise care.' },
    clinicalConnection: 'Decision support tools depend on accurate underlying data.',
    midwiferyConnection: 'Partograph interpretation is DIKW in labour care.',
    keyPoints: ['Data needs context to become information', 'Knowledge organises patterns', 'Wisdom applies knowledge well'],
    rememberThis: 'A perfect algorithm cannot fix a wrong blood pressure entry.',
    quickReview: [
      { q: 'What turns data into information?', a: 'Context and organisation.' },
      { q: 'Why does data quality matter?', a: 'Poor data leads to poor decisions.' },
    ],
    quizId: 'quiz-bnd119-l02',
    keyTerms: ['Data', 'Information', 'Knowledge', 'Wisdom', 'DIKW'],
  },

  'bnd119-l03': {
    id: 'bnd119-l03', courseId: 'bnd-119', number: 3,
    title: 'Health Information and Healthcare Data', duration: '16 min',
    objectives: [
      'List types of healthcare data',
      'Distinguish clinical, administrative and public-health data uses',
      'Explain sensitivity of health information',
    ],
    introduction: 'Healthcare data includes observations, diagnoses, medications, images, lab results and administrative details. Much of it is highly sensitive and legally protected.',
    sections: [
      { heading: 'Types of Data', content: 'Demographic. Clinical (notes, vitals, problems). Laboratory and imaging. Medication. Billing and administrative. Patient-generated data (e.g. home BP) in some systems.' },
      { heading: 'Uses', content: 'Direct care. Care coordination. Quality improvement. Research (with ethics approval). Public health surveillance. Payment — each use has different access rules.' },
      { heading: 'Sensitivity', content: 'Sexual health, mental health, HIV status and other categories may have extra protections. Maternity data is intimate — treat it accordingly.' },
    ],
    clinicalConnection: 'Need-to-know access is both ethical and legal.',
    midwiferyConnection: 'Pregnancy records contain sensitive reproductive information — minimise exposure.',
    keyPoints: ['Many data types, many uses', 'Sensitivity varies', 'Access follows role and purpose'],
    rememberThis: 'Curiosity is not a reason to open a record.',
    quickReview: [
      { q: 'Name three types of healthcare data.', a: 'Examples: clinical notes, lab results, medications, demographics.' },
      { q: 'Why is maternity data sensitive?', a: 'It includes intimate reproductive and personal health details.' },
    ],
    quizId: 'quiz-bnd119-l03',
    keyTerms: ['Health information', 'Clinical data', 'Sensitive data'],
  },

  'bnd119-l04': {
    id: 'bnd119-l04', courseId: 'bnd-119', number: 4,
    title: 'Digital Literacy for Healthcare Professionals', duration: '16 min',
    objectives: [
      'Define digital literacy in healthcare',
      'List core digital skills for students',
      'Identify limits of informal digital habits at work',
    ],
    introduction: 'Digital literacy is the ability to use digital tools confidently, critically and safely. Personal smartphone skills do not automatically equal professional system skills.',
    sections: [
      { heading: 'Core Skills', content: 'Secure login. Navigating clinical software. Accurate data entry. Finding results. Using approved messaging. Recognising phishing. Protecting screens from public view.' },
      { heading: 'Critical Use', content: 'Question odd results. Avoid workarounds that break safety checks. Report system problems. Do not rely on memory when the record is available.' },
      { heading: 'Professional vs Personal', content: 'Personal apps, auto-correct errors and informal screenshots do not belong in clinical documentation workflows.' },
    ],
    clinicalConnection: 'Workarounds that bypass alerts have caused serious medication errors elsewhere.',
    midwiferyConnection: 'Busy labour wards still require correct logins and complete digital entries.',
    keyPoints: ['Professional systems ≠ social apps', 'Accuracy over speed', 'Report broken workflows'],
    rememberThis: 'Fast wrong documentation is still wrong.',
    quickReview: [
      { q: 'What is digital literacy in healthcare?', a: 'Using digital tools confidently, critically and safely for care.' },
      { q: 'Should personal messaging apps store patient data?', a: 'No — use approved systems only.' },
    ],
    quizId: 'quiz-bnd119-l04',
    keyTerms: ['Digital literacy', 'Phishing', 'Clinical software'],
  },

  'bnd119-l05': {
    id: 'bnd119-l05', courseId: 'bnd-119', number: 5,
    title: 'Electronic Health Records (EHRs)', duration: '18 min',
    objectives: [
      'Define electronic health records',
      'List benefits and risks of EHRs',
      'Describe professional behaviours when using EHRs',
    ],
    introduction: 'An electronic health record is a digital longitudinal record of a patient’s health information used in care delivery. Benefits depend on good design and good user behaviour.',
    sections: [
      { heading: 'Benefits', content: 'Legibility. Availability across locations. Decision support alerts. Easier retrieval of history and results. Potential for population analysis.' },
      { heading: 'Risks', content: 'Copy-paste errors. Alert fatigue. Downtime. Privacy breaches. Over-focus on the screen instead of the patient.' },
      { heading: 'Professional Behaviours', content: 'Log out. Do not share passwords. Verify patient identity before entry. Document contemporaneously when possible. Look at the patient, not only the screen.' },
    ],
    clinicalConnection: 'Wrong-chart documentation is a classic EHR-related error.',
    midwiferyConnection: 'Digital maternity records must still capture labour events accurately and on time.',
    keyPoints: ['EHRs help when used well', 'Copy-paste is dangerous', 'Patient over screen'],
    commonMistakes: [
      { mistake: 'Documenting in the wrong patient’s chart.', correction: 'Verify identity every time before entry.' },
    ],
    rememberThis: 'The EHR does not know which bed you are standing beside — you must tell it correctly.',
    quickReview: [
      { q: 'Name two EHR benefits.', a: 'Examples: legibility, shared access, alerts, easier retrieval.' },
      { q: 'Name two EHR risks.', a: 'Examples: copy-paste errors, alert fatigue, privacy breaches, screen distraction.' },
    ],
    quizId: 'quiz-bnd119-l05',
    keyTerms: ['EHR', 'Electronic health record', 'Copy-paste error', 'Alert fatigue'],
  },


  'bnd119-l06': {
    id: 'bnd119-l06', courseId: 'bnd-119', number: 6,
    title: 'Health Information Systems', duration: '16 min',
    objectives: [
      'Describe types of health information systems',
      'Explain how systems support clinical workflows',
      'Recognise integration challenges at a basic level',
    ],
    introduction: 'Health information systems include EHRs, laboratory, pharmacy, radiology, scheduling and public-health platforms. Ideally they work together; often they do not fully.',
    sections: [
      { heading: 'System Types', content: 'Electronic health records. Laboratory information systems. Pharmacy systems. Imaging archives. Admission/discharge/transfer systems. Disease registries and surveillance tools.' },
      { heading: 'Workflow Support', content: 'Order entry, result review, medication administration records, care plans and discharge summaries all live in systems that structure daily work.' },
      { heading: 'Integration Reality', content: 'When systems do not share data well, staff re-enter information, increasing error risk. Report gaps; do not invent unsafe workarounds.' },
    ],
    clinicalConnection: 'Result delays often involve system handoffs between lab and ward software.',
    midwiferyConnection: 'Maternity modules may be part of a wider hospital EHR or a specialised system.',
    keyPoints: ['Many systems, one patient', 'Workflows depend on design', 'Report integration failures'],
    rememberThis: 'Re-typing the same data is a warning sign, not a badge of hard work.',
    quickReview: [
      { q: 'Name two types of health information systems.', a: 'Examples: EHR, lab system, pharmacy, imaging, scheduling.' },
      { q: 'Why is poor integration risky?', a: 'Re-entry and missing data increase error.' },
    ],
    quizId: 'quiz-bnd119-l06',
    keyTerms: ['Health information system', 'Workflow', 'Integration'],
  },

  'bnd119-l07': {
    id: 'bnd119-l07', courseId: 'bnd-119', number: 7,
    title: 'Clinical Documentation and Data Quality', duration: '18 min',
    objectives: [
      'List dimensions of data quality',
      'Explain how documentation quality affects care',
      'Apply practical habits for better digital notes',
    ],
    introduction: 'Data quality means accuracy, completeness, timeliness, consistency and legibility (or correct structured entry). Poor quality documentation misleads the whole team.',
    sections: [
      { heading: 'Quality Dimensions', content: 'Accurate — correct values and patient.\nComplete — essential fields filled.\nTimely — recorded close to the event.\nConsistent — same meaning across entries.\nReliable — trustworthy source.' },
      { heading: 'Digital Habits', content: 'Avoid indiscriminate copy-paste. Update problem lists carefully. Correct errors per policy. Use structured fields as designed. Narrative notes for what structured fields cannot capture.' },
      { heading: 'Maternity Documentation', content: 'Times of rupture of membranes, examination findings, fetal heart assessments and blood loss estimates must be precise — later decisions depend on them.' },
    ],
    clinicalConnection: 'Quality improvement and research also depend on good routine data.',
    midwiferyConnection: 'Partograph quality is a safety issue, not paperwork for its own sake.',
    keyPoints: ['Quality has multiple dimensions', 'Copy-paste threatens accuracy', 'Times matter in labour records'],
    rememberThis: 'If the time is wrong, the story of labour is wrong.',
    quickReview: [
      { q: 'Name three data quality dimensions.', a: 'Examples: accuracy, completeness, timeliness, consistency.' },
      { q: 'Why is copy-paste risky?', a: 'It can import outdated or wrong-patient information.' },
    ],
    quizId: 'quiz-bnd119-l07',
    keyTerms: ['Data quality', 'Timeliness', 'Structured data', 'Copy-paste'],
  },

  'bnd119-l08': {
    id: 'bnd119-l08', courseId: 'bnd-119', number: 8,
    title: 'Information Retrieval and Evidence-Based Practice', duration: '16 min',
    objectives: [
      'Explain information retrieval in clinical settings',
      'List trustworthy sources for evidence',
      'Connect informatics tools to evidence-based practice',
    ],
    introduction: 'Evidence-based practice needs the right information at the right time. Informatics helps retrieve guidelines, drug references and research — critically, not blindly.',
    sections: [
      { heading: 'Retrieval Skills', content: 'Search the EHR for history and results. Use approved drug and guideline databases. Prefer institutional guideline portals over random web search for clinical decisions.' },
      { heading: 'Appraising Sources', content: 'Check currency, authorship and applicability. Social media and unverified websites are not clinical references.' },
      { heading: 'EBP Link', content: 'Informatics delivers evidence; clinicians judge fit for this patient. Technology does not replace critical thinking.' },
    ],
    clinicalConnection: 'Point-of-care references reduce reliance on memory alone.',
    midwiferyConnection: 'Maternity guidelines update — retrieve the current local version.',
    keyPoints: ['Use approved sources', 'Check currency', 'Evidence informs, judgement decides'],
    rememberThis: 'A quick web search is not the same as a current clinical guideline.',
    quickReview: [
      { q: 'Where should clinicians prefer to retrieve drug information?', a: 'Approved clinical references and institutional resources.' },
      { q: 'Does informatics replace clinical judgement?', a: 'No.' },
    ],
    quizId: 'quiz-bnd119-l08',
    keyTerms: ['Information retrieval', 'Evidence-based practice', 'Clinical guideline'],
  },

  'bnd119-l09': {
    id: 'bnd119-l09', courseId: 'bnd-119', number: 9,
    title: 'Digital Communication in Healthcare', duration: '16 min',
    objectives: [
      'Describe approved digital communication channels',
      'Apply professionalism to electronic messages',
      'Avoid confidentiality breaches in digital talk',
    ],
    introduction: 'Secure messaging, EHR inboxes and institutional email support care coordination. Informal channels create privacy and accountability risks.',
    sections: [
      { heading: 'Approved Channels', content: 'Use systems authorised by your facility. Know downtime procedures. Do not move clinical conversations to personal WhatsApp or similar for convenience.' },
      { heading: 'Message Quality', content: 'Identify patient correctly. Be concise and factual. Avoid humour that could be misread. Mark urgency appropriately. Document significant communications when required.' },
      { heading: 'Risks', content: 'Wrong recipient. Auto-correct errors. Screenshots. Forwarding chains. Devices left unlocked.' },
    ],
    clinicalConnection: 'Misdirected messages have disclosed sensitive diagnoses.',
    midwiferyConnection: 'Discussing birth outcomes needs secure channels and careful wording.',
    keyPoints: ['Approved systems only', 'Clarity and identity', 'Lock your screen'],
    rememberThis: 'Convenient is not the same as confidential.',
    quickReview: [
      { q: 'Should personal messaging apps carry identifiable patient data?', a: 'No.' },
      { q: 'Name one digital communication risk.', a: 'Examples: wrong recipient, unlocked device, screenshots, auto-correct errors.' },
    ],
    quizId: 'quiz-bnd119-l09',
    keyTerms: ['Secure messaging', 'Digital communication', 'Downtime'],
  },

  'bnd119-l10': {
    id: 'bnd119-l10', courseId: 'bnd-119', number: 10,
    title: 'Privacy, Confidentiality and Professional Responsibility', duration: '18 min',
    objectives: [
      'Distinguish privacy and confidentiality',
      'Apply need-to-know access principles',
      'Describe professional duties regarding health information',
    ],
    introduction: 'Privacy is the right to control personal information. Confidentiality is the duty to protect information shared in care. Both are legal and ethical obligations.',
    sections: [
      { heading: 'Privacy and Confidentiality', content: 'Patients trust that intimate details stay within the care relationship. Breaches destroy trust and may trigger disciplinary or legal action.' },
      { heading: 'Need-to-Know Access', content: 'Open records only for patients you are involved in caring for (or as policy allows for learning under supervision). Audit trails record who viewed what.' },
      { heading: 'Professional Responsibility', content: 'Report suspected breaches. Do not browse celebrity or neighbour records. Log out. Challenge tailgating into secure areas.' },
    ],
    clinicalConnection: 'Access logs are reviewed after suspected snooping.',
    midwiferyConnection: 'Pregnancy and HIV-related information require heightened discretion.',
    keyPoints: ['Need-to-know only', 'Audit trails exist', 'Report breaches'],
    commonMistakes: [
      { mistake: 'Opening a friend’s chart out of curiosity.', correction: 'That is a confidentiality breach — never do it.' },
    ],
    rememberThis: 'If you are not part of the care team, you are not part of the record.',
    quickReview: [
      { q: 'What is need-to-know access?', a: 'Accessing information only when required for authorised care or role.' },
      { q: 'Do systems track who views records?', a: 'Often yes — audit trails are common.' },
    ],
    quizId: 'quiz-bnd119-l10',
    keyTerms: ['Privacy', 'Confidentiality', 'Need-to-know', 'Audit trail'],
  },


  'bnd119-l11': {
    id: 'bnd119-l11', courseId: 'bnd-119', number: 11,
    title: 'Cybersecurity and Safe Handling of Health Information', duration: '16 min',
    objectives: [
      'List common cybersecurity threats in healthcare',
      'Describe safe password and device practices',
      'Explain how to respond to suspected security incidents',
    ],
    introduction: 'Healthcare is a target for cyber attacks because records are valuable. Staff behaviour is a major defence line: passwords, phishing awareness and physical device security.',
    sections: [
      { heading: 'Threats', content: 'Phishing emails. Malware and ransomware. Stolen credentials. Lost unencrypted devices. Shoulder surfing. Tailgating into secure areas.' },
      { heading: 'Safe Practices', content: 'Unique strong passwords or approved password managers. Never share logins. Lock screens. Use encrypted approved devices. Verify unexpected requests for data. Report suspicious emails using institutional channels.' },
      { heading: 'If Something Goes Wrong', content: 'Do not hide it. Report promptly to IT/security and supervisors so damage can be limited. Changing passwords after suspected compromise is often required.' },
    ],
    clinicalConnection: 'Ransomware can shut down clinical systems and delay care.',
    midwiferyConnection: 'Labour wards still need downtime paper procedures when systems fail.',
    keyPoints: ['Humans are part of the security system', 'Report early', 'Know downtime plans'],
    rememberThis: 'A password shared is a password burned.',
    quickReview: [
      { q: 'Name two cybersecurity threats.', a: 'Examples: phishing, ransomware, stolen credentials, lost devices.' },
      { q: 'What should you do with a suspicious email?', a: 'Report via institutional channels — do not click unknown links.' },
    ],
    quizId: 'quiz-bnd119-l11',
    keyTerms: ['Cybersecurity', 'Phishing', 'Ransomware', 'Downtime'],
  },

  'bnd119-l12': {
    id: 'bnd119-l12', courseId: 'bnd-119', number: 12,
    title: 'Clinical Decision-Support Systems', duration: '16 min',
    objectives: [
      'Define clinical decision support (CDS)',
      'Give examples of CDS in practice',
      'Explain alert fatigue and appropriate responses',
    ],
    introduction: 'Clinical decision-support systems provide alerts, reminders and order guidance based on data in the record. They assist judgement — they do not replace it.',
    sections: [
      { heading: 'Examples', content: 'Drug-interaction alerts. Allergy warnings. Sepsis screening prompts. Preventive care reminders. Dosing calculators embedded in order entry.' },
      { heading: 'Using CDS Well', content: 'Read alerts before overriding. Override only with a valid clinical reason when policy allows. Report nonsensical alerts so systems can improve.' },
      { heading: 'Alert Fatigue', content: 'Too many low-value alerts train staff to click through everything — including the important ones. Thoughtful design and feedback reduce fatigue.' },
    ],
    clinicalConnection: 'Ignored allergy alerts have caused preventable harm.',
    midwiferyConnection: 'Obstetric order sets and haemorrhage protocols may be embedded as CDS tools.',
    keyPoints: ['CDS assists, not replaces', 'Respect meaningful alerts', 'Feedback improves systems'],
    rememberThis: 'The alert you ignore might be the one that mattered.',
    quickReview: [
      { q: 'What is clinical decision support?', a: 'Tools that provide alerts, reminders or guidance based on patient data.' },
      { q: 'What is alert fatigue?', a: 'Desensitisation from too many alerts, risking missed important warnings.' },
    ],
    quizId: 'quiz-bnd119-l12',
    keyTerms: ['Clinical decision support', 'Alert', 'Alert fatigue'],
  },

  'bnd119-l13': {
    id: 'bnd119-l13', courseId: 'bnd-119', number: 13,
    title: 'Technology and Patient Safety', duration: '16 min',
    objectives: [
      'Explain how technology can improve or threaten safety',
      'Describe human factors around clinical devices and software',
      'List student behaviours that support safe technology use',
    ],
    introduction: 'Technology prevents some errors and introduces others. Safety depends on design, training, maintenance and users who refuse unsafe workarounds.',
    sections: [
      { heading: 'Safety Gains', content: 'Legible orders. Allergy checking. Barcode medication administration where used. Automatic calculation aids. Traceable documentation.' },
      { heading: 'New Risks', content: 'Wrong patient selection. Default values accepted blindly. Downtime chaos. Over-reliance on monitors without looking at the patient. Device misconfiguration.' },
      { heading: 'Safe User Behaviours', content: 'Verify identity. Confirm defaults. Escalate confusing interfaces. Maintain observation skills independent of screens. Practise downtime procedures.' },
    ],
    clinicalConnection: 'Barcode systems only work if staff scan correctly every time.',
    midwiferyConnection: 'CTG machines and infusion pumps require both technical checks and clinical interpretation.',
    keyPoints: ['Technology is a tool', 'Workarounds can disable safety features', 'Look at the patient'],
    rememberThis: 'If the screen and the patient disagree, believe the need to reassess both.',
    quickReview: [
      { q: 'Name one safety benefit of clinical technology.', a: 'Examples: legible orders, allergy alerts, barcode checks, traceable notes.' },
      { q: 'Name one technology-related risk.', a: 'Examples: wrong-patient selection, blind defaults, downtime, over-reliance on monitors.' },
    ],
    quizId: 'quiz-bnd119-l13',
    keyTerms: ['Patient safety', 'Human factors', 'Workaround', 'Downtime procedure'],
  },

  'bnd119-l14': {
    id: 'bnd119-l14', courseId: 'bnd-119', number: 14,
    title: 'Telehealth and Digital Healthcare', duration: '16 min',
    objectives: [
      'Define telehealth at an introductory level',
      'List benefits and limitations',
      'Describe professional behaviours in virtual care',
    ],
    introduction: 'Telehealth delivers care at a distance using phones, video and remote monitoring. It expands access but cannot replace all hands-on assessment.',
    sections: [
      { heading: 'Forms', content: 'Video consultations. Telephone triage. Remote monitoring. Store-and-forward images or results. Mobile health apps linked to care programmes.' },
      { heading: 'Benefits and Limits', content: 'Benefits: access, reduced travel, continuity. Limits: incomplete physical exam, connectivity issues, privacy in home settings, digital exclusion of some patients.' },
      { heading: 'Professional Practice', content: 'Confirm identity. Ensure privacy on both ends. Document the encounter. Know when to convert to in-person care. Follow local telehealth policies.' },
    ],
    clinicalConnection: 'Telephone triage quality depends on structured questions and clear advice.',
    midwiferyConnection: 'Antenatal follow-up and postnatal checks sometimes use telehealth — red-flag symptoms still need face-to-face assessment.',
    keyPoints: ['Useful but limited', 'Privacy on both ends', 'Escalate to in-person when needed'],
    rememberThis: 'If you cannot assess safely at a distance, bring the patient in.',
    quickReview: [
      { q: 'Name one benefit of telehealth.', a: 'Examples: improved access, less travel, continuity.' },
      { q: 'Name one limitation.', a: 'Examples: limited physical exam, connectivity, privacy, digital exclusion.' },
    ],
    quizId: 'quiz-bnd119-l14',
    keyTerms: ['Telehealth', 'Remote monitoring', 'Virtual consultation'],
  },

  'bnd119-l15': {
    id: 'bnd119-l15', courseId: 'bnd-119', number: 15,
    title: 'Nursing and Midwifery Information Systems', duration: '16 min',
    objectives: [
      'Describe information needs specific to nursing and midwifery',
      'Give examples of specialty documentation tools',
      'Explain the nurse/midwife role in system improvement',
    ],
    introduction: 'Nursing and midwifery systems capture assessments, care plans, interventions and outcomes. Maternity modules track antenatal visits, labour progress and newborn care.',
    sections: [
      { heading: 'Specialty Needs', content: 'Structured assessments. Care planning. Acuity and staffing data. Education records. Continuity across community and hospital in some models.' },
      { heading: 'Maternity Tools', content: 'Antenatal visit templates. Partograph or labour records. Postnatal mother–baby charts. Newborn screening documentation. These must support clinical timelines, not slow them dangerously.' },
      { heading: 'Improving Systems', content: 'Frontline users should report unusable screens and missing fields. Informatics committees need clinical voices — including midwives and nurses.' },
    ],
    clinicalConnection: 'Usability problems drive workarounds that reduce data quality.',
    midwiferyConnection: 'A labour record that is hard to complete in real time fails women and babies.',
    keyPoints: ['Specialty workflows need specialty design', 'Report usability issues', 'Clinical voice improves IT'],
    rememberThis: 'If the form fights the workflow, the workflow usually loses — until someone redesigns the form.',
    quickReview: [
      { q: 'Name one maternity-specific digital tool type.', a: 'Examples: antenatal templates, partograph/labour record, newborn charts.' },
      { q: 'Why should clinicians report usability problems?', a: 'To improve safety and data quality through redesign.' },
    ],
    quizId: 'quiz-bnd119-l15',
    keyTerms: ['Nursing information system', 'Maternity module', 'Usability'],
  },


  'bnd119-l16': {
    id: 'bnd119-l16', courseId: 'bnd-119', number: 16,
    title: 'Data Collection, Storage and Basic Interpretation', duration: '16 min',
    objectives: [
      'Describe principles of accurate data collection',
      'Explain basic storage and retention concepts',
      'Interpret simple trends without over-reading single values',
    ],
    introduction: 'Data collection is the start of the information chain. Storage must be secure and retained per policy. Interpretation looks at trends and context, not isolated numbers alone.',
    sections: [
      { heading: 'Collection', content: 'Correct patient. Correct device and units. Correct time. Avoid transcription errors. Prefer direct capture from devices when systems support it safely.' },
      { heading: 'Storage and Retention', content: 'Records are stored in secured systems with backups. Retention periods are set by law and policy. Do not keep parallel unofficial stores of identifiable data on personal devices.' },
      { heading: 'Basic Interpretation', content: 'Compare to baseline and normal ranges for the population (including pregnancy norms). Look at trends. Combine with clinical assessment. Escalate concerning patterns.' },
    ],
    clinicalConnection: 'A single abnormal value may be error or truth — recheck and contextualise.',
    midwiferyConnection: 'Serial BP readings in antenatal care matter more than one isolated number.',
    keyPoints: ['Collect carefully', 'Store only in approved systems', 'Trends beat single points'],
    rememberThis: 'One odd reading is a question; a trend is a story.',
    quickReview: [
      { q: 'Name two accurate collection principles.', a: 'Examples: correct patient, correct units, correct time, avoid transcription error.' },
      { q: 'Should personal devices store identifiable clinical data?', a: 'No.' },
    ],
    quizId: 'quiz-bnd119-l16',
    keyTerms: ['Data collection', 'Data storage', 'Trend', 'Retention'],
  },

  'bnd119-l17': {
    id: 'bnd119-l17', courseId: 'bnd-119', number: 17,
    title: 'Interoperability and Information Sharing', duration: '16 min',
    objectives: [
      'Define interoperability in healthcare',
      'Explain why information sharing must be controlled',
      'Describe benefits of shared records across settings',
    ],
    introduction: 'Interoperability is the ability of systems to exchange and use information. Good interoperability reduces repeated history-taking and missing results; poor interoperability frustrates care.',
    sections: [
      { heading: 'What Interoperability Means', content: 'Technical ability to exchange data and semantic ability to understand shared meaning. Standards help systems speak a common language.' },
      { heading: 'Controlled Sharing', content: 'Sharing must respect consent, law and role-based access. Not every system should see every field. Audit trails still apply across organisations when implemented.' },
      { heading: 'Maternity Continuity', content: 'Antenatal clinic, hospital labour ward and postnatal community services benefit when essential information travels with the woman safely.' },
    ],
    clinicalConnection: 'Missing allergy information at transfer is a classic interoperability failure with safety impact.',
    midwiferyConnection: 'Hand-held notes and digital shares both aim at continuity — accuracy still matters.',
    keyPoints: ['Exchange plus usable meaning', 'Sharing is not unlimited', 'Continuity needs reliable transfer'],
    rememberThis: 'A shared record is only as safe as its access controls and data quality.',
    quickReview: [
      { q: 'What is interoperability?', a: 'Ability of systems to exchange and use information effectively.' },
      { q: 'Why control information sharing?', a: 'To protect privacy and ensure only authorised appropriate access.' },
    ],
    quizId: 'quiz-bnd119-l17',
    keyTerms: ['Interoperability', 'Information sharing', 'Standards', 'Continuity'],
  },

  'bnd119-l18': {
    id: 'bnd119-l18', courseId: 'bnd-119', number: 18,
    title: 'Ethics and Responsible Use of Healthcare Technology', duration: '16 min',
    objectives: [
      'Apply ethical principles to technology use',
      'Identify conflicts between convenience and duty',
      'Describe responsible professional behaviours',
    ],
    introduction: 'Technology ethics asks whether tools respect autonomy, justice, non-maleficence and beneficence. Convenience never justifies unsafe or unlawful use.',
    sections: [
      { heading: 'Ethical Tensions', content: 'Speed vs accuracy. Access vs privacy. Automation vs accountability. Innovation vs equity for patients without digital access.' },
      { heading: 'Responsible Behaviours', content: 'Use approved tools. Do not disable safety features casually. Maintain competence with systems you use. Challenge biased or opaque tools with supervisors. Keep the human relationship central.' },
      { heading: 'Equity', content: 'Digital services must not abandon patients who lack smartphones, literacy or connectivity — offer alternatives.' },
    ],
    clinicalConnection: 'Ethical practice includes refusing unsafe digital workarounds.',
    midwiferyConnection: 'Respectful maternity care includes how digital tools are used in the room — eye contact still matters.',
    keyPoints: ['Principles still apply digitally', 'Convenience is not a defence', 'Protect equity of access'],
    rememberThis: 'If you would not defend the action in an incident review, do not do it for speed.',
    quickReview: [
      { q: 'Name one ethical tension in health technology.', a: 'Examples: speed vs accuracy, access vs privacy, automation vs accountability.' },
      { q: 'Why does digital equity matter?', a: 'Some patients lack devices, literacy or connectivity and still need care.' },
    ],
    quizId: 'quiz-bnd119-l18',
    keyTerms: ['Technology ethics', 'Digital equity', 'Accountability'],
  },

  'bnd119-l19': {
    id: 'bnd119-l19', courseId: 'bnd-119', number: 19,
    title: 'Artificial Intelligence and Emerging Technologies in Healthcare', duration: '18 min',
    objectives: [
      'Describe AI in healthcare at an introductory level',
      'List potential benefits and risks',
      'Explain why human oversight remains essential',
    ],
    introduction: 'Artificial intelligence tools can analyse patterns in data to support diagnosis, triage, imaging and documentation. They are powerful, imperfect and require human oversight and local governance.',
    sections: [
      { heading: 'Possible Uses', content: 'Image interpretation aids. Predictive risk scores. Documentation assistance. Chat-based information tools. Workflow optimisation — always under institutional approval when used clinically.' },
      { heading: 'Risks', content: 'Bias from training data. Errors presented confidently. Privacy concerns. Over-reliance. Unequal performance across populations. Unclear accountability when advice is wrong.' },
      { heading: 'Professional Stance', content: 'Treat AI output as advice to be checked, not as orders. Do not paste confidential data into unapproved consumer AI tools. Follow employer policy. Keep clinical responsibility with licensed practitioners.' },
    ],
    clinicalConnection: 'Unapproved AI use of patient data can breach confidentiality.',
    midwiferyConnection: 'Any AI tool touching maternity decisions needs validation and governance — birth is high stakes.',
    keyPoints: ['AI assists under governance', 'Bias and error are real', 'Humans remain accountable'],
    commonMistakes: [
      { mistake: 'Pasting identifiable patient notes into a public AI chatbot.', correction: 'Never put confidential data into unapproved tools.' },
    ],
    rememberThis: 'If the AI is wrong, the clinician still owns the decision.',
    quickReview: [
      { q: 'Should identifiable patient data go into consumer AI tools?', a: 'No — not unless explicitly approved and safe under policy.' },
      { q: 'Who remains accountable for clinical decisions?', a: 'Licensed clinicians — not the algorithm alone.' },
    ],
    quizId: 'quiz-bnd119-l19',
    keyTerms: ['Artificial intelligence', 'Bias', 'Human oversight', 'Governance'],
  },

  'bnd119-l20': {
    id: 'bnd119-l20', courseId: 'bnd-119', number: 20,
    title: 'Integrated Informatics Practice for Nurses and Midwives', duration: '16 min',
    objectives: [
      'Integrate informatics habits into daily safe practice',
      'List non-negotiable digital safety behaviours',
      'Commit to continuous learning as systems evolve',
    ],
    introduction: 'This final lesson consolidates the course. Informatics competence is part of modern professional identity for nurses and midwives.',
    sections: [
      { heading: 'Integrated Habits', content: 'Verify patient identity before entry. Document timely accurate data. Use approved channels. Protect passwords and screens. Respect alerts thoughtfully. Retrieve current guidelines. Escalate system and clinical concerns. Keep eyes on the woman and baby, not only the screen.' },
      { heading: 'Non-Negotiables', content: 'No shared passwords. No curiosity access. No unapproved apps for patient data. No ignoring meaningful safety alerts. No inventing downtime chaos — follow the plan.' },
      { heading: 'Lifelong Learning', content: 'Systems change. Stay current with local training. Contribute feedback. Technology will evolve; professional values of safety, privacy and respect must not erode.' },
    ],
    clinicalConnection: 'Digital competence is now a patient-safety expectation.',
    midwiferyConnection: 'Safe digital maternity care still centres the woman — technology is the servant.',
    keyPoints: [
      'Identity, accuracy, privacy, approved tools',
      'Humans oversee technology',
      'Keep learning as systems change',
    ],
    rememberThis: 'Log in carefully, document truthfully, protect privacy, and look up from the screen.',
    quickReview: [
      { q: 'Name three non-negotiable digital safety behaviours.', a: 'Examples: no shared passwords, need-to-know access, approved channels only, respect alerts, follow downtime plans.' },
      { q: 'What must not be lost as technology evolves?', a: 'Professional values of safety, privacy and respect.' },
    ],
    quizId: 'quiz-bnd119-l20',
    keyTerms: ['Informatics practice', 'Digital safety', 'Professional identity'],
  },

};

export function getLessonContent(lessonId) {
  return lessonContent[lessonId] || null;
}

export function getAllLessonIds() {
  return Object.keys(lessonContent);
}
