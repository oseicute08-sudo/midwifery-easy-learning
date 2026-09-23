import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { useProgress } from '../context/ProgressContext';
import { IconFlame, IconAward, IconCheck, IconBook, IconQuiz } from '../components/Icons';
import './Progress.css';

export default function ProgressPage() {
  const { progress } = useProgress();

  const totalLessons = courses.reduce((s, c) => s + c.lessons.length, 0);
  const completedLessons = Object.values(progress.courses || {}).reduce(
    (s, c) => s + (c.completedLessons?.length || 0),
    0
  );
  const overallPct = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;
  const quizzesTaken = Object.keys(progress.quizzes || {}).length;
  const quizScores = Object.values(progress.quizzes || {}).map((q) => q.bestScore);
  const avgQuiz = quizScores.length
    ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
    : 0;

  return (
    <div className="progress-page container">
      <header className="page-header">
        <h1>Your Progress</h1>
        <p className="page-subtitle">Track lessons, quizzes and achievements.</p>
      </header>

      {completedLessons === 0 && (
        <div className="progress-empty-hint card">
          <p>You have not completed a lesson yet. Start a course to begin tracking your progress.</p>
          <Link to="/courses" className="btn btn-primary">Browse courses</Link>
        </div>
      )}

      <div className="overview-stats">
        <div className="ov-card card">
          <span className="ov-value">{overallPct}%</span>
          <span className="ov-label">Overall progress</span>
          <div className="progress-bar" style={{ marginTop: '0.6rem' }}>
            <div className="progress-bar-fill" style={{ width: `${overallPct}%` }} />
          </div>
        </div>
        <div className="ov-grid">
          <div className="ov-mini card">
            <IconBook size={20} />
            <span className="ov-mini-val">{completedLessons}/{totalLessons}</span>
            <span className="ov-mini-label">Lessons</span>
          </div>
          <div className="ov-mini card">
            <IconQuiz size={20} />
            <span className="ov-mini-val">{quizzesTaken}</span>
            <span className="ov-mini-label">Quizzes</span>
          </div>
          <div className="ov-mini card">
            <IconFlame size={20} />
            <span className="ov-mini-val">{progress.studyStreak || 0}</span>
            <span className="ov-mini-label">Day streak</span>
          </div>
          <div className="ov-mini card">
            <IconAward size={20} />
            <span className="ov-mini-val">{avgQuiz || '—'}%</span>
            <span className="ov-mini-label">Quiz avg</span>
          </div>
        </div>
      </div>

      <section>
        <h2 className="section-title">Course Progress</h2>
        <div className="course-progress-list">
          {courses.map((c) => {
            const done = progress.courses[c.id]?.completedLessons?.length || 0;
            const pct = c.lessons.length ? Math.round((done / c.lessons.length) * 100) : 0;
            return (
              <Link key={c.id} to={`/courses/${c.id}`} className="cp-item card">
                <div className="cp-color" style={{ background: c.color }} />
                <div className="cp-body">
                  <div className="cp-top">
                    <span className="cp-code">{c.code}</span>
                    <span className="cp-pct">{pct}%</span>
                  </div>
                  <h4>{c.title}</h4>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${pct}%`, background: c.color }} />
                  </div>
                  <span className="cp-stats">{done} of {c.lessons.length} lessons</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {(progress.achievements || []).map((a) => (
            <div key={a.id} className={`achievement card ${a.earned ? 'earned' : 'locked'}`}>
              <div className="ach-icon">
                {a.earned ? <IconCheck size={20} /> : <IconAward size={20} />}
              </div>
              <h4>{a.title}</h4>
              <p>{a.description}</p>
            </div>
          ))}
        </div>
      </section>

      {progress.recentActivity?.length > 0 && (
        <section>
          <h2 className="section-title">Recent Activity</h2>
          <div className="activity-list">
            {progress.recentActivity.map((act, i) => (
              <div key={i} className="activity-item card">
                <div className={`act-type ${act.type}`}>
                  {act.type === 'lesson' ? <IconBook size={16} /> : <IconQuiz size={16} />}
                </div>
                <div className="act-body">
                  <h4>{act.title}</h4>
                  <span>
                    {act.course || (act.score != null ? `Score: ${act.score}%` : '')} · {act.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
