/**
 * Demo student profile and progress data
 * Architecture ready for future authentication and sync.
 */

export const demoStudent = {
  id: 'demo-student-001',
  name: 'Ama Mensah',
  programme: 'B.Sc. Midwifery',
  level: 'Level 100',
  academicYear: '2026/2027',
  institution: 'Nursing and Midwifery Training College, Dunkwa-On-Offin',
  avatarInitials: 'AM',
  joined: '2026-09-01',
};

export const initialProgress = {
  courses: {
    'bnd-101': {
      completedLessons: ['bnd101-l01', 'bnd101-l02'],
      lastLessonId: 'bnd101-l03',
      percent: 10,
    },
  },
  quizzes: {
    'quiz-bnd101-intro': {
      attempts: 1,
      bestScore: 75,
      lastScore: 75,
      lastAttempt: '2026-09-20',
    },
  },
  dictionaryFavourites: ['term-anatomical-position', 'term-presentation', 'term-fundus'],
  savedLessons: ['bnd101-l03'],
  studyStreak: 3,
  totalStudyMinutes: 48,
  achievements: [
    { id: 'first-lesson', title: 'First Steps', description: 'Completed your first lesson', earned: true },
    { id: 'quiz-passer', title: 'Quiz Ready', description: 'Passed a quiz with 70%+', earned: true },
    { id: 'streak-3', title: '3-Day Streak', description: 'Studied three days in a row', earned: true },
    { id: 'anatomy-starter', title: 'Anatomy Explorer', description: 'Started BND 101', earned: true },
    { id: 'dictionary-fan', title: 'Word Collector', description: 'Favourited 3 dictionary terms', earned: false },
  ],
  recentActivity: [
    { type: 'lesson', title: 'Anatomical Position', course: 'BND 101', time: '2 hours ago' },
    { type: 'quiz', title: 'Human Anatomy 1 — Foundations', score: 75, time: 'Yesterday' },
    { type: 'lesson', title: 'Introduction to Human Anatomy', course: 'BND 101', time: '2 days ago' },
  ],
};

export function calculateOverallProgress(courses, progress) {
  let totalLessons = 0;
  let completed = 0;
  courses.forEach((c) => {
    totalLessons += c.lessons.length;
    const p = progress.courses[c.id];
    if (p) completed += p.completedLessons?.length || 0;
  });
  if (totalLessons === 0) return 0;
  return Math.round((completed / totalLessons) * 100);
}
