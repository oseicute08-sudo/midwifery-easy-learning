import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import { courses } from '../data/courses';
import { useProgress } from '../context/ProgressContext';
import { IconQuiz, IconChevronRight, IconCheck } from '../components/Icons';
import './QuizCenter.css';

export default function QuizCenter() {
  const { progress } = useProgress();
  const [courseFilter, setCourseFilter] = useState('all');

  const filtered = useMemo(() => {
    if (courseFilter === 'all') return quizzes;
    return quizzes.filter((q) => q.courseId === courseFilter);
  }, [courseFilter]);

  return (
    <div className="quiz-center container">
      <header className="page-header">
        <h1>Quiz Center</h1>
        <p className="page-subtitle">
          Practice with lesson quizzes across all courses. Filter by course to focus your revision.
        </p>
      </header>

      <div className="filter-row" role="toolbar" aria-label="Filter quizzes by course">
        <button
          type="button"
          className={`filter-chip ${courseFilter === 'all' ? 'active' : ''}`}
          onClick={() => setCourseFilter('all')}
          aria-pressed={courseFilter === 'all'}
        >
          All ({quizzes.length})
        </button>
        {courses.map((c) => {
          const count = quizzes.filter((q) => q.courseId === c.id).length;
          if (!count) return null;
          return (
            <button
              key={c.id}
              type="button"
              className={`filter-chip ${courseFilter === c.id ? 'active' : ''}`}
              onClick={() => setCourseFilter(c.id)}
              aria-pressed={courseFilter === c.id}
            >
              {c.code} ({count})
            </button>
          );
        })}
      </div>

      <section className="quiz-list" aria-live="polite">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <p>No quizzes in this filter.</p>
            <button type="button" className="btn btn-secondary" onClick={() => setCourseFilter('all')}>
              Show all quizzes
            </button>
          </div>
        ) : (
          filtered.map((quiz) => {
            const result = progress.quizzes?.[quiz.id];
            return (
              <Link key={quiz.id} to={`/quiz/${quiz.id}`} className="quiz-card card">
                <div className="quiz-card-icon" aria-hidden="true">
                  <IconQuiz size={24} />
                </div>
                <div className="quiz-card-body">
                  <span className="quiz-type">
                    {quiz.courseCode || (quiz.type === 'course' ? 'Course Quiz' : 'Topic Quiz')}
                    {quiz.type === 'course' ? ' · Course' : ' · Lesson'}
                  </span>
                  <h3>{quiz.title}</h3>
                  <p>{quiz.description}</p>
                  <div className="quiz-meta">
                    <span>{quiz.questions?.length || 0} questions</span>
                    <span>·</span>
                    <span>{quiz.timeLimit} min</span>
                    {result && (
                      <>
                        <span>·</span>
                        <span className="quiz-score">Best: {result.bestScore}%</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="quiz-card-action">
                  {result ? (
                    <span className="retake">Retry <IconChevronRight size={16} /></span>
                  ) : (
                    <span className="start">Start <IconChevronRight size={16} /></span>
                  )}
                </div>
              </Link>
            );
          })
        )}
      </section>

      {Object.keys(progress.quizzes || {}).length > 0 && (
        <section className="recent-attempts">
          <h2 className="section-title">Recent Attempts</h2>
          <div className="attempts-list">
            {Object.entries(progress.quizzes).map(([id, data]) => {
              const quiz = quizzes.find((q) => q.id === id);
              if (!quiz) return null;
              return (
                <Link key={id} to={`/quiz/${id}`} className="attempt-item card">
                  <div className="attempt-score" data-pass={data.lastScore >= 70}>
                    {data.lastScore}%
                  </div>
                  <div className="attempt-info">
                    <h4>{quiz.title}</h4>
                    <span>
                      {data.lastAttempt} · {data.attempts} attempt{data.attempts > 1 ? 's' : ''}
                    </span>
                  </div>
                  {data.lastScore >= 70 && <IconCheck size={18} className="pass-icon" aria-hidden="true" />}
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
