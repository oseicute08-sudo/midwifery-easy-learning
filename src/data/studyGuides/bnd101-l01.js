/**
 * Dense study-handout pages for BND 101 Lesson 1.
 * Structure follows the full set of supplied reference study pages (cover + content progression).
 * Original MEC wording. Does not replace lessons.js.
 */
export const bnd101L01StudyGuide = {
  lessonId: 'bnd101-l01',
  courseCode: 'BND 101',
  courseTitle: 'Human Anatomy 1',
  topicLabel: 'Topic 1',
  mainTitle: 'ANATOMY AND PHYSIOLOGY',
  subtitle: 'Introduction to Human Anatomy',
  pages: [
    { id: 'p01', pageTitle: 'COMPLETE ANATOMY AND PHYSIOLOGY', kind: 'cover' },
    { id: 'p02', pageTitle: '1. INTRODUCTION TO ANATOMY & PHYSIOLOGY', kind: 'intro' },
    { id: 'p03', pageTitle: '2. LEVELS OF ORGANIZATION', kind: 'levels' },
    { id: 'p04', pageTitle: '3. BODY PLAN, SYMMETRY & AXES', kind: 'bodyplan' },
    { id: 'p05', pageTitle: '4. ANATOMICAL POSITION & DIRECTIONAL TERMS', kind: 'position' },
    { id: 'p06', pageTitle: '5. BODY PLANES & SECTIONS', kind: 'planes' },
    { id: 'p07', pageTitle: '6. BODY CAVITIES', kind: 'cavities' },
    { id: 'p08', pageTitle: '7. MAJOR ORGAN SYSTEMS OVERVIEW', kind: 'systems' },
    { id: 'p09', pageTitle: '8. INTEGUMENTARY & SKELETAL SYSTEMS', kind: 'integ-skel' },
    { id: 'p10', pageTitle: '9. MUSCULAR & NERVOUS SYSTEMS', kind: 'musc-nerv' },
    { id: 'p11', pageTitle: '10. CIRCULATORY, RESPIRATORY, DIGESTIVE & URINARY', kind: 'core-systems' },
    { id: 'p12', pageTitle: '11. ENDOCRINE, REPRODUCTIVE, LYMPHATIC, IMMUNE & REVISION', kind: 'revision' },
  ],
};

export function getStudyGuide(lessonId) {
  if (lessonId === 'bnd101-l01') return bnd101L01StudyGuide;
  return null;
}
