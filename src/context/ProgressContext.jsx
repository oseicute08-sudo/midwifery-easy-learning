import { createContext, useContext, useState, useCallback } from 'react';
import { initialProgress } from '../data/student';
import { courses } from '../data/courses';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('melc-progress');
      return saved ? JSON.parse(saved) : initialProgress;
    } catch {
      return initialProgress;
    }
  });

  const persist = useCallback((next) => {
    setProgress(next);
    try {
      localStorage.setItem('melc-progress', JSON.stringify(next));
    } catch {}
  }, []);

  const markLessonComplete = useCallback(
    (courseId, lessonId) => {
      setProgress((prev) => {
        const courseProg = prev.courses[courseId] || { completedLessons: [], lastLessonId: null, percent: 0 };
        const completed = courseProg.completedLessons.includes(lessonId)
          ? courseProg.completedLessons
          : [...courseProg.completedLessons, lessonId];
        const course = courses.find((c) => c.id === courseId);
        const percent = course ? Math.round((completed.length / course.lessons.length) * 100) : 0;
        const next = {
          ...prev,
          courses: {
            ...prev.courses,
            [courseId]: {
              ...courseProg,
              completedLessons: completed,
              lastLessonId: lessonId,
              percent,
            },
          },
        };
        try {
          localStorage.setItem('melc-progress', JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    []
  );

  const saveQuizResult = useCallback((quizId, score) => {
    setProgress((prev) => {
      const existing = prev.quizzes[quizId] || { attempts: 0, bestScore: 0, lastScore: 0 };
      const next = {
        ...prev,
        quizzes: {
          ...prev.quizzes,
          [quizId]: {
            attempts: existing.attempts + 1,
            bestScore: Math.max(existing.bestScore, score),
            lastScore: score,
            lastAttempt: new Date().toISOString().slice(0, 10),
          },
        },
      };
      try {
        localStorage.setItem('melc-progress', JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const toggleFavourite = useCallback((termId) => {
    setProgress((prev) => {
      const favs = prev.dictionaryFavourites || [];
      const nextFavs = favs.includes(termId) ? favs.filter((id) => id !== termId) : [...favs, termId];
      const next = { ...prev, dictionaryFavourites: nextFavs };
      try {
        localStorage.setItem('melc-progress', JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const isLessonComplete = useCallback(
    (courseId, lessonId) => {
      return progress.courses[courseId]?.completedLessons?.includes(lessonId) || false;
    },
    [progress]
  );

  const isFavourite = useCallback(
    (termId) => {
      return (progress.dictionaryFavourites || []).includes(termId);
    },
    [progress]
  );

  const toggleSavedLesson = useCallback((lessonId) => {
    setProgress((prev) => {
      const saved = prev.savedLessons || [];
      const nextSaved = saved.includes(lessonId)
        ? saved.filter((id) => id !== lessonId)
        : [...saved, lessonId];
      const next = { ...prev, savedLessons: nextSaved };
      try {
        localStorage.setItem('melc-progress', JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const isSavedLesson = useCallback(
    (lessonId) => {
      return (progress.savedLessons || []).includes(lessonId);
    },
    [progress]
  );

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markLessonComplete,
        saveQuizResult,
        toggleFavourite,
        isLessonComplete,
        isFavourite,
        toggleSavedLesson,
        isSavedLesson,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
