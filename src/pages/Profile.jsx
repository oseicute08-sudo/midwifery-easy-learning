import { Link } from 'react-router-dom';
import { demoStudent } from '../data/student';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';
import { IconMoon, IconSun, IconStar, IconBook, IconChevronRight } from '../components/Icons';
import { dictionaryTerms } from '../data/dictionary';
import { courses } from '../data/courses';
import './Profile.css';

export default function Profile() {
  const { theme, toggleTheme } = useTheme();
  const { progress } = useProgress();

  const favTerms = (progress.dictionaryFavourites || [])
    .map((id) => dictionaryTerms.find((t) => t.id === id))
    .filter(Boolean);

  const completedCount = Object.values(progress.courses || {}).reduce(
    (s, c) => s + (c.completedLessons?.length || 0),
    0
  );

  return (
    <div className="profile-page container">
      <header className="profile-header card">
        <div className="avatar">{demoStudent.avatarInitials}</div>
        <div className="profile-info">
          <h1>{demoStudent.name}</h1>
          <p className="programme">{demoStudent.programme}</p>
          <div className="profile-badges">
            <span className="badge">{demoStudent.level}</span>
            <span className="badge">{demoStudent.academicYear}</span>
          </div>
        </div>
      </header>

      <section className="profile-stats card">
        <div className="ps-item">
          <span className="ps-val">{completedCount}</span>
          <span className="ps-label">Lessons completed</span>
        </div>
        <div className="ps-item">
          <span className="ps-val">{Object.keys(progress.quizzes || {}).length}</span>
          <span className="ps-label">Quizzes taken</span>
        </div>
        <div className="ps-item">
          <span className="ps-val">{progress.studyStreak || 0}</span>
          <span className="ps-label">Day streak</span>
        </div>
      </section>

      <section className="profile-links">
        <Link to="/progress" className="profile-link-card card">
          <span className="profile-link-title">View full progress</span>
          <span className="profile-link-sub">Lessons, quizzes and course completion</span>
          <IconChevronRight size={18} className="profile-link-arrow" />
        </Link>
      </section>

      <section className="settings-section card">
        <h2>Settings</h2>
        <button className="setting-row" onClick={toggleTheme}>
          <div className="setting-left">
            {theme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
            <span>Appearance</span>
          </div>
          <span className="setting-value">{theme === 'light' ? 'Light' : 'Dark'}</span>
        </button>
      </section>

      {favTerms.length > 0 && (
        <section>
          <h2 className="section-title">Favourite Terms</h2>
          <div className="fav-list">
            {favTerms.map((t) => (
              <Link key={t.id} to={`/dictionary?q=${encodeURIComponent(t.term)}`} className="fav-item card">
                <IconStar size={16} filled />
                <span>{t.term}</span>
                <IconChevronRight size={16} />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="about-section card">
        <h2>About</h2>
        <p className="about-app">
          <strong>Midwifery Easy Learning Center</strong>
        </p>
        <p className="about-tagline">Learn. Practice. Become a Confident Midwife.</p>
        <div className="about-meta">
          <p>Founder: <strong>Bismark Owusu</strong></p>
          <p>Inspired by: <strong>Christabel Anderson</strong></p>
        </div>
        <p className="demo-note">
          Demo student profile — authentication and cloud sync will be added in a future version.
        </p>
      </section>
    </div>
  );
}
