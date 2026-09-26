import { getStudyGuide as getBnd101 } from './bnd101-l01.js';
import { getStudyGuide103 } from './bnd103-l01.js';

/**
 * Resolve a study guide by lesson id.
 * Returns full guide object or null (StudyGuide shows "coming soon").
 */
export function getStudyGuide(lessonId) {
  return getBnd101(lessonId) || getStudyGuide103(lessonId) || null;
}
