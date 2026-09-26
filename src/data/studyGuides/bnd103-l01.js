/**
 * BND 103 Lesson 1 — Visual Study Guide
 * Introduction to Chemistry — Level 100 midwifery/nursing handout style.
 * Compatible with StudyGuide.jsx (page.blocks + page.diagram).
 * Does not replace lessons.js.
 */

export const bnd103L01StudyGuide = {
  lessonId: 'bnd103-l01',
  courseCode: 'BND 103',
  courseTitle: 'Introduction Chemistry',
  topicLabel: 'Topic 1',
  mainTitle: 'INTRODUCTION TO CHEMISTRY',
  subtitle: 'Matter, change and clinical foundations',
  pages: [
    {
      id: 'p01',
      pageTitle: 'INTRODUCTION TO CHEMISTRY',
      diagram: 'chem-cover',
      blocks: [
        {
          type: 'intro',
          text: 'BND 103 · Introduction Chemistry — Level 100 visual study guide for nursing and midwifery students.',
        },
        {
          type: 'defs-row',
          items: [
            {
              title: 'Lesson focus',
              text: 'What chemistry is, why it matters in healthcare, matter and change, pure substances vs mixtures, and everyday clinical links.',
            },
            {
              title: 'How to use this guide',
              text: 'Work page by page. Read each diagram, then the tables and key points. Use “Remember” boxes before Quiz Center.',
            },
          ],
        },
        {
          type: 'checklist',
          title: 'Learning objectives',
          items: [
            'Define chemistry and its main branches relevant to healthcare',
            'Explain why chemistry matters for nursing and midwifery students',
            'Distinguish pure substances from mixtures at a basic level',
            'List everyday clinical situations that depend on chemical principles',
          ],
        },
        {
          type: 'remember',
          text: 'This guide supports the full lesson text. It does not replace lecturers, clinical instructors, or local protocol.',
        },
      ],
    },
    {
      id: 'p02',
      pageTitle: '1. WHAT IS CHEMISTRY?',
      diagram: 'chem-atom',
      blocks: [
        {
          type: 'defs-row',
          items: [
            {
              title: 'Chemistry',
              text: 'The study of matter — its composition, structure, properties and the changes it undergoes.',
            },
            {
              title: 'Matter',
              text: 'Anything that has mass and takes up space (air, water, body tissues, medicines).',
            },
          ],
        },
        {
          type: 'intro',
          text: 'Chemistry explains what things are made of and how they change. For midwives and nurses it underpins fluids, electrolytes, acid–base balance, drug solubility and laboratory values.',
        },
        {
          type: 'branches',
          title: 'Branches useful in healthcare',
          items: [
            { name: 'General chemistry', desc: 'Atoms, bonds, reactions, solutions' },
            { name: 'Organic chemistry', desc: 'Carbon compounds — carbohydrates, lipids, proteins' },
            { name: 'Biochemistry', desc: 'Chemical processes inside living organisms' },
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Start from the smallest useful idea (particle, atom, ion, molecule), then scale up to what you observe clinically',
            'Laboratory values (Na⁺, K⁺, glucose, pH) are chemical measurements',
            'Structure and change of matter drive almost every body process you will monitor',
          ],
        },
      ],
    },
    {
      id: 'p03',
      pageTitle: '2. WHY CHEMISTRY MATTERS IN MIDWIFERY & NURSING',
      diagram: 'chem-clinical',
      blocks: [
        {
          type: 'intro',
          text: 'You use chemistry ideas every day on the ward and in maternity care — often without naming them as “chemistry”.',
        },
        {
          type: 'examples',
          title: 'Clinical situations that depend on chemistry',
          items: [
            'IV fluids and concentration (mmol/L, % solutions)',
            'Electrolyte balance (sodium, potassium, calcium)',
            'Acid–base status and blood pH',
            'How medicines dissolve and are absorbed',
            'Oxygen carriage and gas exchange chemistry',
            'Nutrition: how the body uses carbohydrates, proteins and fats',
          ],
        },
        {
          type: 'two-mini',
          leftTitle: 'Nursing link',
          leftItems: [
            'Interpret basic lab values with more confidence',
            'Handle medicines and solutions safely',
            'Explain “why” behind observations to the team',
            'Document amounts and units accurately',
          ],
          rightTitle: 'Midwifery link',
          rightItems: [
            'Pregnancy changes fluid volume and electrolytes',
            'Metabolic demand rises in pregnancy and labour',
            'Recognise normal adaptation vs concerning change',
            'Support clear communication with the woman and team',
          ],
        },
        {
          type: 'remember',
          text: '“Strong” in everyday speech is not the same as concentration in mmol/L. Always ask: what is dissolved, in what, and how much?',
        },
      ],
    },
    {
      id: 'p04',
      pageTitle: '3. MATTER — STATES AND PROPERTIES',
      diagram: 'chem-states',
      blocks: [
        {
          type: 'intro',
          text: 'Matter exists in different physical states. Clinical work constantly involves solids, liquids and gases.',
        },
        {
          type: 'table',
          title: 'States of matter (Level 100)',
          headers: ['State', 'Shape', 'Volume', 'Clinical example'],
          rows: [
            ['Solid', 'Fixed', 'Fixed', 'Tablet, bone mineral'],
            ['Liquid', 'Takes container shape', 'Fixed', 'IV fluid, blood plasma, urine'],
            ['Gas', 'Takes container shape', 'Fills available space', 'Oxygen, anaesthetic gases, air'],
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Physical change: form changes, chemical identity stays the same (ice → water)',
            'Chemical change: new substance forms (digestion of food, drug metabolism)',
            'Nurses and midwives handle all three states daily',
          ],
        },
        {
          type: 'takeaway',
          text: 'When something “changes” on the ward, ask: is this a physical change or a chemical change?',
        },
      ],
    },
    {
      id: 'p05',
      pageTitle: '4. PURE SUBSTANCES vs MIXTURES',
      diagram: 'chem-pure-mix',
      blocks: [
        {
          type: 'defs-row',
          items: [
            {
              title: 'Pure substance',
              text: 'Has a fixed composition. Includes elements (one type of atom) and compounds (two or more elements chemically combined in fixed ratios).',
            },
            {
              title: 'Mixture',
              text: 'Two or more substances physically combined. Composition can vary. Parts can often be separated by physical means.',
            },
          ],
        },
        {
          type: 'table',
          title: 'Compare at a glance',
          headers: ['Feature', 'Pure substance', 'Mixture'],
          rows: [
            ['Composition', 'Fixed', 'Variable'],
            ['Examples', 'O₂, H₂O, NaCl (compound)', 'Air, blood, saline solution, urine'],
            ['Separation', 'Needs chemical change to break compounds', 'Often physical (filtration, evaporation)'],
            ['Clinical note', 'Drug active ingredient (pure compound)', 'Most body fluids and many IV products are mixtures'],
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Blood is a complex mixture — cells + plasma (itself a mixture of water, proteins, electrolytes)',
            'Normal saline is a mixture: NaCl dissolved in water at a defined concentration',
            'Calling something “pure” in chemistry means fixed composition, not “clean” in everyday English',
          ],
        },
      ],
    },
    {
      id: 'p06',
      pageTitle: '5. ELEMENTS, COMPOUNDS AND SYMBOLS',
      diagram: 'chem-elements',
      blocks: [
        {
          type: 'intro',
          text: 'Elements are the basic chemical building blocks. Compounds form when elements combine chemically in fixed ratios.',
        },
        {
          type: 'table',
          title: 'Healthcare-relevant examples',
          headers: ['Type', 'Example', 'Symbol / formula', 'Why it matters'],
          rows: [
            ['Element', 'Oxygen', 'O', 'Respiration; O₂ therapy'],
            ['Element', 'Iron', 'Fe', 'Haemoglobin; anaemia'],
            ['Element', 'Sodium', 'Na', 'Electrolyte; fluid balance'],
            ['Element', 'Potassium', 'K', 'Cardiac and nerve function'],
            ['Compound', 'Water', 'H₂O', 'Body fluid; solvent'],
            ['Compound', 'Sodium chloride', 'NaCl', 'Saline; electrolytes'],
            ['Compound', 'Glucose', 'C₆H₁₂O₆', 'Energy; blood glucose'],
            ['Compound', 'Carbon dioxide', 'CO₂', 'Gas exchange; acid–base'],
          ],
        },
        {
          type: 'remember',
          text: 'A chemical symbol (Na, K, O) stands for one type of atom. A formula (H₂O, NaCl) shows a compound’s fixed composition.',
        },
      ],
    },
    {
      id: 'p07',
      pageTitle: '6. ATOMS — THE SMALLEST USEFUL UNIT',
      diagram: 'chem-atom',
      blocks: [
        {
          type: 'intro',
          text: 'An atom is the smallest unit of an element that still has the properties of that element. Atoms contain protons, neutrons and electrons.',
        },
        {
          type: 'table',
          title: 'Subatomic particles (Level 100)',
          headers: ['Particle', 'Charge', 'Location', 'Role'],
          rows: [
            ['Proton', 'Positive (+)', 'Nucleus', 'Defines the element (atomic number)'],
            ['Neutron', 'Neutral (0)', 'Nucleus', 'Adds mass; isotopes differ in neutrons'],
            ['Electron', 'Negative (−)', 'Outside nucleus', 'Bonding and chemical behaviour'],
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Atomic number = number of protons',
            'In a neutral atom, electrons = protons',
            'Ions form when atoms gain or lose electrons (Na⁺, K⁺, Ca²⁺, Cl⁻)',
            'Electrolytes in body fluids are dissolved ions — chemistry you already measure clinically',
          ],
        },
        {
          type: 'takeaway',
          text: 'When you see Na⁺ on a lab form, you are looking at chemistry: sodium atoms that have lost an electron and carry a positive charge.',
        },
      ],
    },
    {
      id: 'p08',
      pageTitle: '7. SOLUTIONS, CONCENTRATION AND UNITS',
      diagram: 'chem-solution',
      blocks: [
        {
          type: 'defs-row',
          items: [
            {
              title: 'Solution',
              text: 'A homogeneous mixture of solute (dissolved substance) and solvent (usually water in the body and in IV fluids).',
            },
            {
              title: 'Concentration',
              text: 'How much solute is present in a given amount of solution (e.g. mmol/L, mg/dL, %).',
            },
          ],
        },
        {
          type: 'examples',
          title: 'Units you will meet',
          items: [
            'mmol/L — common for electrolytes (Na⁺, K⁺)',
            'mg/dL or mmol/L — glucose reporting varies by region',
            '% solutions — e.g. percentage concentration of some IV products',
            'pH — measure of acidity/alkalinity (related to H⁺ concentration)',
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Always read the unit as carefully as the number',
            'The same number with a different unit is a different amount',
            'Dilution and concentration errors are major medication-safety risks',
          ],
        },
        {
          type: 'remember',
          text: 'Never assume two fluids with similar names have the same concentration. Check the label every time under supervision.',
        },
      ],
    },
    {
      id: 'p09',
      pageTitle: '8. CLINICAL & MIDWIFERY CONNECTIONS',
      diagram: 'chem-clinical',
      blocks: [
        {
          type: 'two-mini',
          leftTitle: 'Clinical connection',
          leftItems: [
            'Lab values are chemical measurements',
            'IV fluids are carefully defined mixtures',
            'Drug action depends on solubility and reactions in the body',
            'Acid–base status reflects chemical balance in blood',
          ],
          rightTitle: 'Midwifery connection',
          rightItems: [
            'Pregnancy ↑ fluid volume and metabolic demand',
            'Electrolyte shifts can affect mother and fetus',
            'Nutrition chemistry supports fetal growth',
            'Clear explanation helps informed involvement of the woman',
          ],
        },
        {
          type: 'apply-grid',
          items: [
            { title: 'Observe', text: 'What fluid, colour, or lab value relates to chemistry in this patient?' },
            { title: 'Define', text: 'Can you state the plain meaning of the term (e.g. electrolyte, solution)?' },
            { title: 'Report', text: 'What would you escalate if a value or observation seemed inconsistent?' },
            { title: 'Explain', text: 'How would you describe the idea in respectful non-technical language?' },
          ],
        },
        {
          type: 'note',
          text: 'Students practise under supervision and follow institutional protocol. This app supports learning; it does not replace clinical instructors or local policy.',
        },
      ],
    },
    {
      id: 'p10',
      pageTitle: '9. KEY TERMS & COMMON MISTAKES',
      diagram: 'chem-pure-mix',
      blocks: [
        {
          type: 'revision-defs',
          items: [
            { t: 'Chemistry', d: 'study of matter and its changes' },
            { t: 'Matter', d: 'anything with mass that occupies space' },
            { t: 'Biochemistry', d: 'chemistry of living organisms' },
            { t: 'Element', d: 'substance of one type of atom' },
            { t: 'Compound', d: 'elements chemically combined in fixed ratios' },
            { t: 'Mixture', d: 'substances physically combined; composition can vary' },
            { t: 'Solution', d: 'homogeneous mixture of solute and solvent' },
            { t: 'Ion', d: 'atom or group with a net electrical charge' },
          ],
        },
        {
          type: 'table',
          title: 'Avoid these Level 100 mistakes',
          headers: ['Mistake', 'Correct idea'],
          rows: [
            ['“Chemistry is only for the lab”', 'Chemistry runs through fluids, drugs, gases and metabolism'],
            ['Confusing pure with “clean”', 'Pure = fixed composition in chemistry'],
            ['Ignoring units on lab forms', 'The unit defines what the number means'],
            ['Calling every liquid a pure substance', 'Most clinical liquids are mixtures'],
          ],
        },
      ],
    },
    {
      id: 'p11',
      pageTitle: '10. WHAT YOU MUST REMEMBER',
      diagram: 'chem-cover',
      blocks: [
        {
          type: 'checklist',
          title: 'Revision checklist',
          items: [
            'Chemistry = matter + change',
            'Matter has mass and occupies space',
            'Branches: general, organic, biochemistry',
            'Pure substance vs mixture — fixed vs variable composition',
            'Elements and compounds use symbols and formulas',
            'Atoms: protons, neutrons, electrons; ions in body fluids',
            'Solutions have solute + solvent; concentration needs units',
            'Pregnancy and illness change fluid and electrolyte chemistry',
            'Always link a concept to one observation or safety action',
          ],
        },
        {
          type: 'keypoints',
          items: [
            'Know the plain-language meaning of Introduction to Chemistry',
            'Know the professional terms used in class and documentation',
            'Link the concept to at least one assessment or safety action',
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

export function getStudyGuide103(lessonId) {
  if (lessonId === 'bnd103-l01') return bnd103L01StudyGuide;
  return null;
}
