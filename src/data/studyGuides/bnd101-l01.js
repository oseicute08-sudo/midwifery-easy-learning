/**
 * Visual study-guide pages for BND 101 Lesson 1 only (prototype).
 * Original MEC wording. Does not replace lessons.js content.
 */
export const bnd101L01StudyGuide = {
  lessonId: 'bnd101-l01',
  courseCode: 'BND 101',
  courseTitle: 'Human Anatomy 1',
  topicLabel: 'Topic 1',
  title: 'Introduction to Human Anatomy',
  pages: [
    {
      id: 'p1',
      pageTitle: '1. Introduction to Anatomy & Physiology',
      diagram: 'anatomy-physio',
      blocks: [
        {
          type: 'defs-row',
          items: [
            { title: 'Anatomy', text: 'Study of body structure and spatial relationships. Answers: What is it? Where is it?' },
            { title: 'Physiology', text: 'Study of body function and mechanisms. Answers: How does it work? Why does it matter?' },
          ],
        },
        {
          type: 'note',
          text: 'Together: structure enables function. Midwives use both when assessing, describing findings, and explaining care.',
        },
        {
          type: 'branches',
          title: 'Branches of anatomy',
          items: [
            { name: 'Gross', desc: 'Visible structures (organs, bones, vessels)' },
            { name: 'Microscopic', desc: 'Cells and tissues under magnification' },
            { name: 'Developmental', desc: 'Change from conception to maturity' },
            { name: 'Surface', desc: 'Landmarks for examination' },
            { name: 'Imaging', desc: 'Ultrasound, X-ray, CT, MRI views' },
          ],
        },
        {
          type: 'terms-inline',
          items: [
            { t: 'Structure', d: 'form & arrangement' },
            { t: 'Function', d: 'job performed' },
            { t: 'Homeostasis', d: 'stable internal state' },
            { t: 'Metabolism', d: 'body chemistry' },
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Learn location language before advanced procedures.',
            'Structure–function links explain clinical signs.',
            'Shared terms protect patient safety in the team.',
          ],
        },
      ],
    },
    {
      id: 'p2',
      pageTitle: '2. Levels of Organization',
      diagram: 'levels',
      blocks: [
        {
          type: 'intro',
          text: 'The body is built from simple parts to a complete person. Damage at a lower level can affect every level above it.',
        },
        {
          type: 'table',
          title: 'Concrete example chain',
          headers: ['Level', 'Example'],
          rows: [
            ['Chemical', 'Atoms form glucose, proteins, DNA'],
            ['Cellular', 'Muscle cell contracts'],
            ['Tissue', 'Muscle tissue shortens'],
            ['Organ', 'Uterus / heart performs its job'],
            ['System', 'Reproductive / circulatory system'],
            ['Organism', 'The whole person'],
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Each level depends on the one below.',
            'Structure and function stay linked at every level.',
            'Homeostasis needs coordinated organ systems.',
          ],
        },
      ],
    },
    {
      id: 'p3',
      pageTitle: '3. Anatomical Position & Direction',
      diagram: 'directional-full',
      blocks: [
        {
          type: 'intro',
          text: 'Anatomical position is the shared reference posture. All directional terms assume this position unless stated otherwise.',
        },
        {
          type: 'position-list',
          items: [
            'Standing upright, facing the observer',
            'Arms at the sides, palms forward',
            'Feet forward, slightly apart',
          ],
        },
        {
          type: 'examples',
          title: 'Clinical phrasing examples',
          items: [
            'Heart is medial to the lungs',
            'Knee is distal to the thigh',
            'Skin is superficial to muscle',
            'Stomach is inferior to the lungs',
          ],
        },
        {
          type: 'remember',
          text: 'Right and left always mean the patient’s right and left — never the observer’s.',
        },
      ],
    },
    {
      id: 'p4',
      pageTitle: '4. Body Planes & Sections',
      diagram: 'planes-full',
      blocks: [
        {
          type: 'table',
          title: 'Plane comparison',
          headers: ['Plane', 'Divides', 'Produces'],
          rows: [
            ['Sagittal', 'Left & right', 'Side views; midsagittal = equal halves'],
            ['Frontal (coronal)', 'Front & back', 'Anterior / posterior sections'],
            ['Transverse', 'Upper & lower', 'Cross-sections (superior / inferior)'],
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Planes give a common language for imaging and description.',
            'Combine planes with directional terms for precision.',
            'Ultrasound and CT reports often imply these sections.',
          ],
        },
      ],
    },
    {
      id: 'p5',
      pageTitle: '5. Body Cavities',
      diagram: 'cavities-full',
      blocks: [
        {
          type: 'two-mini',
          leftTitle: 'Dorsal cavity',
          leftItems: ['Cranial — brain', 'Vertebral — spinal cord'],
          rightTitle: 'Ventral cavity',
          rightItems: [
            'Thoracic — heart, lungs, great vessels',
            'Abdominal — digestive organs, kidneys',
            'Pelvic — bladder, reproductive organs, rectum',
          ],
        },
        {
          type: 'table',
          title: 'Cavity roles',
          headers: ['Role', 'Meaning for practice'],
          rows: [
            ['Protection', 'Bone and soft tissue shield vital organs'],
            ['Organization', 'Organs grouped for function and assessment'],
            ['Movement room', 'Organs can shift slightly with breathing and posture'],
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Thoracic and abdominopelvic regions guide physical assessment.',
            'Pelvic cavity knowledge underpins reproductive and obstetric anatomy later.',
          ],
        },
      ],
    },
    {
      id: 'p6',
      pageTitle: '6. Organ Systems Overview',
      diagram: 'systems-body',
      blocks: [
        {
          type: 'system-rows',
          items: [
            { name: 'Integumentary', organs: 'Skin, hair, nails, glands', job: 'Barrier, temperature, sensation', mid: 'Skin integrity in pregnancy & postnatal care' },
            { name: 'Skeletal', organs: 'Bones, joints, marrow', job: 'Support, protection, blood cells', mid: 'Pelvis shape & labour mechanics later' },
            { name: 'Muscular', organs: 'Skeletal, cardiac, smooth', job: 'Movement, posture, heat', mid: 'Uterine smooth muscle in labour' },
            { name: 'Nervous', organs: 'Brain, cord, nerves', job: 'Control & rapid response', mid: 'Pain pathways; autonomic changes' },
            { name: 'Circulatory', organs: 'Heart, vessels, blood', job: 'Transport O₂, nutrients, waste', mid: 'Plasma volume rise in pregnancy' },
            { name: 'Respiratory', organs: 'Airways, lungs, alveoli', job: 'Gas exchange', mid: 'Increased O₂ demand in pregnancy' },
            { name: 'Digestive', organs: 'GI tract & accessories', job: 'Digest & absorb', mid: 'Nausea, reflux common antenatally' },
            { name: 'Urinary', organs: 'Kidneys, ureters, bladder', job: 'Waste, fluid, pH balance', mid: 'UTI risk; frequency in pregnancy' },
            { name: 'Endocrine', organs: 'Glands & hormones', job: 'Long-term regulation', mid: 'hCG, progesterone, oxytocin axes' },
            { name: 'Reproductive', organs: 'Gonads & tracts', job: 'Reproduction & hormones', mid: 'Core midwifery anatomy' },
            { name: 'Lymphatic/Immune', organs: 'Nodes, vessels, spleen', job: 'Fluid return & defense', mid: 'Infection vigilance in maternity care' },
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Systems are interdependent — one failure stresses others.',
            'Pregnancy raises demand across multiple systems at once.',
          ],
        },
      ],
    },
    {
      id: 'p7',
      pageTitle: '7. Clinical & Midwifery Application',
      diagram: 'clinical-apply',
      blocks: [
        {
          type: 'apply-grid',
          items: [
            { title: 'Locate', text: 'Name regions and landmarks so findings are reproducible.' },
            { title: 'Describe', text: 'Use directional terms: medial, distal, superior, anterior.' },
            { title: 'Communicate', text: 'Shared anatomy language reduces wrong-site and handover error.' },
            { title: 'Relate', text: 'Link organ location to symptoms (chest, abdomen, pelvis).' },
            { title: 'Pregnancy lens', text: 'Pelvic cavity, uterus, vessels and systems change together.' },
            { title: 'Assessment', text: 'Vital signs and exam findings sit on anatomical knowledge.' },
          ],
        },
        {
          type: 'table',
          title: 'Structure → function examples',
          headers: ['Structure', 'Functional link'],
          rows: [
            ['Heart chambers', 'Separate oxygen-poor and oxygen-rich blood'],
            ['Alveoli', 'Large surface for gas exchange'],
            ['Uterine muscle', 'Contracts to expel fetus in labour'],
            ['Nephrons', 'Filter blood and form urine'],
          ],
        },
        {
          type: 'remember',
          text: 'Study sheets support learning. Supervised clinical skills follow local protocol — diagrams are not permission to practise unsupervised.',
        },
      ],
    },
    {
      id: 'p8',
      pageTitle: '8. Quick Revision Sheet',
      diagram: 'revision',
      blocks: [
        {
          type: 'revision-defs',
          items: [
            { t: 'Anatomy', d: 'structure & relationships' },
            { t: 'Physiology', d: 'function & mechanisms' },
            { t: 'Homeostasis', d: 'stable internal environment' },
          ],
        },
        {
          type: 'checklist',
          title: 'Recall checklist',
          items: [
            'Six levels: chemical → cell → tissue → organ → system → organism',
            'Anatomical position: upright, palms forward, feet forward',
            'Direction: superior/inferior, anterior/posterior, medial/lateral, proximal/distal, superficial/deep',
            'Planes: sagittal, frontal/coronal, transverse',
            'Dorsal cavities: cranial + vertebral',
            'Ventral cavities: thoracic + abdominal + pelvic',
            'Main job of each major organ system',
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Patient’s right/left, not yours.',
            'Structure enables function.',
            'Systems work as a team.',
          ],
        },
        {
          type: 'takeaway',
          text: 'Study → understand → remember. Then use Quiz Center separately to test yourself.',
        },
      ],
    },
  ],
};

export function getStudyGuide(lessonId) {
  if (lessonId === 'bnd101-l01') return bnd101L01StudyGuide;
  return null;
}
