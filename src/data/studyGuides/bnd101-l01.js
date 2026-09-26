/**
 * BND 101 Lesson 1 — Visual Study Guide (12 pages)
 * Compatible with deployed StudyGuide.jsx (page.blocks + page.diagram).
 * Dense study-handout content for Level 100 midwifery students.
 * Does not replace lessons.js.
 */

export const bnd101L01StudyGuide = {
  lessonId: 'bnd101-l01',
  courseCode: 'BND 101',
  courseTitle: 'Human Anatomy 1',
  topicLabel: 'Topic 1',
  mainTitle: 'ANATOMY AND PHYSIOLOGY',
  subtitle: 'Introduction to Human Anatomy',
  pages: [
    {
      id: 'p01',
      pageTitle: 'COMPLETE ANATOMY AND PHYSIOLOGY',
      diagram: 'revision',
      blocks: [
        {
          type: 'intro',
          text: 'BND 101 · Human Anatomy 1 — Level 100 first-semester visual study guide for nursing and midwifery students.',
        },
        {
          type: 'defs-row',
          items: [
            {
              title: 'What this guide covers',
              text: 'Definitions, anatomical position, directional terms, body planes, body cavities, major organ systems, and midwifery links — in a dense study-sheet format.',
            },
            {
              title: 'How to use it',
              text: 'Work page by page. Read the diagram, then the tables and key points. Use “Remember” boxes for quick revision before Quiz Center.',
            },
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Anatomy = structure and relationships of body parts',
            'Physiology = how those parts function',
            'Structure and function are always linked',
            'Anatomical position is the standard reference for all terms',
            'Patient’s right and left — never the observer’s',
          ],
        },
        {
          type: 'remember',
          text: 'This study guide supports the full lesson text. It does not replace supervised clinical learning or institutional protocols.',
        },
      ],
    },
    {
      id: 'p02',
      pageTitle: '1. INTRODUCTION TO ANATOMY & PHYSIOLOGY',
      diagram: 'anatomy-physio',
      blocks: [
        {
          type: 'defs-row',
          items: [
            {
              title: 'Anatomy',
              text: 'The study of the structure of the body and the relationships between its parts. It answers “what” and “where”.',
            },
            {
              title: 'Physiology',
              text: 'The study of the functions and mechanisms of body parts and how the body works. It answers “how”.',
            },
          ],
        },
        {
          type: 'intro',
          text: 'Anatomy and physiology are closely related. Anatomy tells us what the body parts are and where they are located; physiology explains what those parts do and how they perform their functions.',
        },
        {
          type: 'branches',
          title: 'Main branches of anatomy (Level 100)',
          items: [
            { name: 'Gross (macroscopic)', desc: 'Structures visible without a microscope (organs, systems)' },
            { name: 'Microscopic', desc: 'Cells and tissues studied with a microscope (histology, cytology)' },
            { name: 'Surface anatomy', desc: 'External landmarks used in examination and procedures' },
            { name: 'Systemic anatomy', desc: 'Study by organ system (e.g. cardiovascular, reproductive)' },
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Helps understand normal structure and function',
            'Essential foundation for nursing and midwifery practice',
            'Supports recognition of abnormality and disease later',
            'Underpins safe communication using standard anatomical language',
          ],
        },
        {
          type: 'remember',
          text: 'You cannot safely describe findings, position a client, or understand pregnancy physiology without a clear anatomy–physiology base.',
        },
      ],
    },
    {
      id: 'p03',
      pageTitle: '2. LEVELS OF ORGANIZATION',
      diagram: 'levels',
      blocks: [
        {
          type: 'intro',
          text: 'The human body is organized from simple chemical units up to the whole organism. Each level builds on the one below.',
        },
        {
          type: 'table',
          title: 'Levels of structural organization',
          headers: ['Level', 'Meaning', 'Example'],
          rows: [
            ['Chemical', 'Atoms and molecules', 'Water, proteins, DNA'],
            ['Cellular', 'Basic living unit', 'Muscle cell, neuron'],
            ['Tissue', 'Group of similar cells', 'Muscle tissue, epithelial tissue'],
            ['Organ', 'Two or more tissues with a job', 'Heart, uterus, kidney'],
            ['Organ system', 'Organs working together', 'Circulatory, reproductive'],
            ['Organism', 'The complete living person', 'The pregnant woman / newborn'],
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Cell → tissue → organ → system → organism',
            'Damage at a lower level affects higher levels',
            'Homeostasis depends on coordinated systems',
            'Midwifery care often targets organ-system level (e.g. cardiovascular changes in pregnancy)',
          ],
        },
        {
          type: 'takeaway',
          text: 'Always think “which level am I describing?” — cell, tissue, organ, or system — so your language stays precise.',
        },
      ],
    },
    {
      id: 'p04',
      pageTitle: '3. BODY PLAN, SYMMETRY & AXES',
      diagram: 'directional-full',
      blocks: [
        {
          type: 'intro',
          text: 'The human body shows bilateral symmetry and is described using three main axes. These ideas underpin directional terms and planes.',
        },
        {
          type: 'two-mini',
          leftTitle: 'Bilateral symmetry',
          leftItems: [
            'Body can be divided into equal right and left halves',
            'Overall, the right side mirrors the left',
            'Some unpaired organs sit near the midline (heart, uterus)',
            'Clinically useful when comparing limbs or oedema',
          ],
          rightTitle: 'Three main axes',
          rightItems: [
            'Longitudinal (vertical): head → feet',
            'Transverse (horizontal): side → side',
            'Anteroposterior: front → back',
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Midsagittal plane creates equal right and left halves',
            'Axes define the directions used in planes and movement',
            'Pelvic and abdominal regions are described relative to the midline',
            'Fetal position language later builds on axes and directional terms',
          ],
        },
        {
          type: 'remember',
          text: 'Always orient yourself to the patient’s anatomical midline before describing sides or positions.',
        },
      ],
    },
    {
      id: 'p05',
      pageTitle: '4. ANATOMICAL POSITION & DIRECTIONAL TERMS',
      diagram: 'directional-full',
      blocks: [
        {
          type: 'intro',
          text: 'All directional terms assume the body is in the standard anatomical position — even if the patient is lying down.',
        },
        {
          type: 'position-list',
          items: [
            'Standing upright, facing forward',
            'Arms at the sides',
            'Palms facing forward (supinated)',
            'Feet together or slightly apart, toes forward',
            'Head level, eyes looking straight ahead',
          ],
        },
        {
          type: 'table',
          title: 'Essential directional terms',
          headers: ['Term', 'Meaning', 'Example'],
          rows: [
            ['Superior (cranial)', 'Toward the head / above', 'The heart is superior to the diaphragm'],
            ['Inferior (caudal)', 'Toward the feet / below', 'The bladder is inferior to the uterus'],
            ['Anterior (ventral)', 'Toward the front', 'The sternum is anterior to the heart'],
            ['Posterior (dorsal)', 'Toward the back', 'The spine is posterior to the heart'],
            ['Medial', 'Toward the midline', 'The nose is medial to the ears'],
            ['Lateral', 'Away from the midline', 'The arms are lateral to the chest'],
            ['Proximal', 'Closer to the trunk (limbs)', 'The elbow is proximal to the wrist'],
            ['Distal', 'Farther from the trunk (limbs)', 'The fingers are distal to the elbow'],
            ['Superficial', 'Closer to the surface', 'Skin is superficial to muscle'],
            ['Deep', 'Farther from the surface', 'Bones are deep to muscle'],
          ],
        },
        {
          type: 'remember',
          text: 'Right and left always mean the patient’s right and left — never yours as the observer.',
        },
      ],
    },
    {
      id: 'p06',
      pageTitle: '5. BODY PLANES & SECTIONS',
      diagram: 'planes-full',
      blocks: [
        {
          type: 'intro',
          text: 'Planes are imaginary flat surfaces that pass through the body. They are used in anatomy, imaging (CT, MRI, ultrasound), and clinical description.',
        },
        {
          type: 'table',
          title: 'Plane | What it divides | Clinical use',
          headers: ['Plane', 'Divides into', 'Example / clinical use'],
          rows: [
            ['Sagittal', 'Right and left parts', 'Compare limbs; describe midline wounds'],
            ['Midsagittal (median)', 'Equal right and left halves', 'True midline reference'],
            ['Frontal (coronal)', 'Anterior and posterior', 'Chest wall vs spine; coronal CT'],
            ['Transverse (horizontal)', 'Superior and inferior', 'Abdomen levels; axial CT / ultrasound'],
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Sagittal = right/left · Frontal = front/back · Transverse = upper/lower',
            'Midsagittal is the special sagittal plane that produces equal halves',
            'Imaging reports often name the plane used (axial, coronal, sagittal)',
            'Understanding planes helps you read diagrams and scans later in training',
          ],
        },
        {
          type: 'takeaway',
          text: 'When you see a cross-section, ask: which plane cut this body — sagittal, frontal, or transverse?',
        },
      ],
    },
    {
      id: 'p07',
      pageTitle: '6. BODY CAVITIES',
      diagram: 'cavities-full',
      blocks: [
        {
          type: 'intro',
          text: 'Body cavities are protected spaces that contain organs. Knowing cavity names helps locate organs and understand how disease or pregnancy can affect them.',
        },
        {
          type: 'table',
          title: 'Major body cavities',
          headers: ['Cavity', 'Subdivision', 'Main contents'],
          rows: [
            ['Dorsal', 'Cranial', 'Brain'],
            ['Dorsal', 'Vertebral (spinal)', 'Spinal cord'],
            ['Ventral', 'Thoracic', 'Heart, lungs, trachea, oesophagus'],
            ['Ventral', 'Abdominal', 'Stomach, liver, intestines, kidneys'],
            ['Ventral', 'Pelvic', 'Bladder, reproductive organs, rectum'],
          ],
        },
        {
          type: 'two-mini',
          leftTitle: 'Thoracic landmarks',
          leftItems: [
            'Pleural cavities — lungs',
            'Pericardial cavity — heart',
            'Mediastinum — central compartment',
            'Diaphragm separates thorax from abdomen',
          ],
          rightTitle: 'Abdominopelvic notes',
          rightItems: [
            'No muscular wall between abdomen and pelvis',
            'Often described together as abdominopelvic cavity',
            'Uterus expands from pelvis into abdomen in pregnancy',
            'Infection can spread within the peritoneal space',
          ],
        },
        {
          type: 'remember',
          text: 'The diaphragm is the key partition between thoracic and abdominal cavities — critical for breathing and for understanding referred pain.',
        },
      ],
    },
    {
      id: 'p08',
      pageTitle: '7. MAJOR ORGAN SYSTEMS OVERVIEW',
      diagram: 'systems-body',
      blocks: [
        {
          type: 'intro',
          text: 'Organ systems work together to maintain life. No system works in isolation — especially during pregnancy, labour, and postnatal recovery.',
        },
        {
          type: 'system-rows',
          items: [
            { name: 'Integumentary', organs: 'Skin, hair, nails, glands', job: 'Protection, temperature, sensation', mid: 'Skin changes in pregnancy; wound care' },
            { name: 'Skeletal', organs: 'Bones, cartilage, joints', job: 'Support, blood cells, calcium', mid: 'Pelvic bones; posture in pregnancy' },
            { name: 'Muscular', organs: 'Skeletal, cardiac, smooth muscle', job: 'Movement, posture, heat', mid: 'Uterine smooth muscle in labour' },
            { name: 'Nervous', organs: 'Brain, spinal cord, nerves', job: 'Control and coordination', mid: 'Pain pathways; reflexes' },
            { name: 'Endocrine', organs: 'Glands (pituitary, thyroid, etc.)', job: 'Hormonal regulation', mid: 'Pregnancy hormones; lactation' },
            { name: 'Cardiovascular', organs: 'Heart, blood, vessels', job: 'Transport of O₂, nutrients, waste', mid: 'Increased blood volume in pregnancy' },
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Eleven major systems are usually listed in Level 100 courses',
            'Systems share organs and influence each other (e.g. endocrine + reproductive)',
            'Pregnancy is a whole-body physiological adaptation, not only a reproductive event',
          ],
        },
      ],
    },
    {
      id: 'p09',
      pageTitle: '8. INTEGUMENTARY & SKELETAL SYSTEMS',
      diagram: 'systems-body',
      blocks: [
        {
          type: 'two-mini',
          leftTitle: 'Integumentary system',
          leftItems: [
            'Skin = largest organ',
            'Epidermis (outer) and dermis (inner)',
            'Protects against injury and infection',
            'Regulates temperature; sensory input',
            'Vitamin D synthesis',
          ],
          rightTitle: 'Skeletal system',
          rightItems: [
            'About 206 bones in the adult',
            'Axial skeleton: skull, spine, rib cage',
            'Appendicular: limbs and girdles',
            'Protects organs; stores minerals',
            'Bone marrow produces blood cells',
          ],
        },
        {
          type: 'table',
          title: 'Quick clinical links',
          headers: ['System', 'Clinical / midwifery link'],
          rows: [
            ['Integumentary', 'Linea nigra, striae, wound healing, pressure-area care'],
            ['Skeletal', 'Pelvic inlet/outlet shape; posture; calcium needs in pregnancy'],
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Skin integrity is a basic nursing observation',
            'Pelvic bony landmarks matter for labour progress assessment later',
            'Bones and skin both change under hormonal influence in pregnancy',
          ],
        },
        {
          type: 'remember',
          text: 'Protect skin and support posture early — both affect comfort and recovery for the woman.',
        },
      ],
    },
    {
      id: 'p10',
      pageTitle: '9. MUSCULAR & NERVOUS SYSTEMS',
      diagram: 'clinical-apply',
      blocks: [
        {
          type: 'table',
          title: 'Three muscle types',
          headers: ['Type', 'Control', 'Appearance', 'Example'],
          rows: [
            ['Skeletal', 'Voluntary', 'Striated', 'Limb muscles, diaphragm'],
            ['Cardiac', 'Involuntary', 'Striated', 'Heart wall'],
            ['Smooth', 'Involuntary', 'Non-striated', 'Uterus, gut, vessels'],
          ],
        },
        {
          type: 'two-mini',
          leftTitle: 'Nervous system overview',
          leftItems: [
            'CNS = brain + spinal cord',
            'PNS = cranial and spinal nerves',
            'Neuron = basic functional unit',
            'Dendrites → soma → axon → terminals',
            'Myelin speeds conduction',
          ],
          rightTitle: 'Muscular vs nervous',
          rightItems: [
            'Muscle: movement, posture, heat',
            'Nerve: control and coordination',
            'Muscle unit = fiber',
            'Nerve unit = neuron',
            'Both essential in labour and pain',
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Uterine muscle is smooth muscle — involuntary but highly regulated by hormones and local factors',
            'Pain, reflex, and autonomic pathways are nervous-system functions',
            'Skeletal muscle fatigue and posture affect maternal comfort in labour',
          ],
        },
        {
          type: 'remember',
          text: 'Cardiac muscle never rests voluntarily; smooth muscle of the uterus contracts in coordinated waves during labour.',
        },
      ],
    },
    {
      id: 'p11',
      pageTitle: '10. CIRCULATORY, RESPIRATORY, DIGESTIVE & URINARY',
      diagram: 'systems-body',
      blocks: [
        {
          type: 'system-rows',
          items: [
            { name: 'Circulatory', organs: 'Heart, blood, vessels', job: 'Transport O₂, nutrients, hormones, waste', mid: 'Blood volume ↑ in pregnancy; BP monitoring' },
            { name: 'Respiratory', organs: 'Airways, lungs, alveoli', job: 'Gas exchange (O₂ in, CO₂ out)', mid: 'Increased oxygen demand; breathlessness' },
            { name: 'Digestive', organs: 'GI tract, liver, pancreas', job: 'Ingest, digest, absorb, eliminate', mid: 'Nausea, reflux, constipation in pregnancy' },
            { name: 'Urinary', organs: 'Kidneys, ureters, bladder, urethra', job: 'Waste removal; fluid and electrolyte balance', mid: 'Frequency; UTI risk; proteinuria checks' },
          ],
        },
        {
          type: 'examples',
          title: 'Pathway snapshots (Level 100)',
          items: [
            'Blood flow idea: heart → arteries → capillaries → veins → heart',
            'Air pathway idea: nose/mouth → pharynx → larynx → trachea → bronchi → alveoli',
            'Digestive idea: mouth → oesophagus → stomach → intestines → anus (+ liver/pancreas)',
            'Urinary idea: kidneys → ureters → bladder → urethra',
          ],
        },
        {
          type: 'keypoints',
          items: [
            'These four systems support oxygen, nutrition, and waste handling for mother and fetus',
            'Vital signs reflect circulatory and respiratory status',
            'Urine output and characteristics are key nursing observations',
          ],
        },
        {
          type: 'takeaway',
          text: 'Learn the main job and key structures of each system first — detail is added in later lessons and courses.',
        },
      ],
    },
    {
      id: 'p12',
      pageTitle: '11. ENDOCRINE, REPRODUCTIVE, LYMPHATIC, IMMUNE & REVISION',
      diagram: 'revision',
      blocks: [
        {
          type: 'two-mini',
          leftTitle: 'Endocrine (selected glands)',
          leftItems: [
            'Pituitary — master control',
            'Thyroid — metabolism',
            'Adrenals — stress, salt/water',
            'Pancreas — glucose',
            'Gonads — sex hormones',
          ],
          rightTitle: 'Female reproductive overview',
          rightItems: [
            'Ovaries — oocytes and hormones',
            'Uterine tubes — transport',
            'Uterus — implantation and pregnancy',
            'Cervix and vagina — birth canal',
            'Foundation for antenatal and labour care',
          ],
        },
        {
          type: 'note',
          text: 'Lymphatic/immune: lymph nodes filter fluid; spleen and thymus support immune function; white cells and antibodies defend against infection.',
        },
        {
          type: 'revision-defs',
          items: [
            { t: 'Anatomy', d: 'structure and relationships of body parts' },
            { t: 'Physiology', d: 'function of body parts' },
            { t: 'Anatomical position', d: 'upright, facing forward, palms forward' },
            { t: 'Midsagittal plane', d: 'equal right and left halves' },
            { t: 'Homeostasis', d: 'stable internal environment' },
          ],
        },
        {
          type: 'checklist',
          title: 'What you must remember',
          items: [
            'Cell → tissue → organ → system → organism',
            'Anatomical position: upright, palms forward',
            'Planes: sagittal, frontal (coronal), transverse',
            'Cavities: dorsal (cranial, vertebral) and ventral (thoracic, abdominal, pelvic)',
            'Patient’s right/left — not the observer’s',
            'Homeostasis = stable internal environment',
            'All systems are interdependent',
          ],
        },
        {
          type: 'remember',
          text: 'Study → Understand → Remember. Then test yourself in Quiz Center (separate from this study guide).',
        },
      ],
    },
  ],
};

export function getStudyGuide(lessonId) {
  if (lessonId === 'bnd101-l01') return bnd101L01StudyGuide;
  return null;
}
