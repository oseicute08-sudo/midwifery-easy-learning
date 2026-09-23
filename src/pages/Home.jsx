import { Link } from 'react-router-dom';
import { courses, academicInfo, getCourseProgress } from '../data/courses';
import { useProgress } from '../context/ProgressContext';
import { IconPlay, IconBook, IconQuiz, IconDictionary, IconClock, IconChevronRight, IconFlame } from '../components/Icons';
import './Home.css';

export default function Home() {
  const { progress } = useProgress();
  const currentCourse = courses[0];
  const courseProg = progress.courses[currentCourse.id] || { percent: 0, lastLessonId: null, completedLessons: [] };
  const nextLesson = currentCourse.lessons.find((l) => !courseProg.completedLessons?.includes(l.id)) || currentCourse.lessons[0];
  const overallCompleted = Object.values(progress.courses).reduce((s, c) => s + (c.completedLessons?.length || 0), 0);
  const totalLessons = courses.reduce((s, c) => s + c.lessons.length, 0);

  return (
    <div className="home container">
      {/* Hero welcome with midwifery student photo */}
      <section className="welcome-hero card">
        <div className="welcome-hero-photo-wrap">
          <img
            src="/images/midwifery-student.png"
            alt="Midwifery student in uniform — Midwifery Easy Learning Center"
            className="welcome-hero-photo"
            width="640"
            height="800"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="welcome-content">
          <p className="welcome-label">Welcome to</p>
          <h1 className="welcome-title">Midwifery Easy Learning Center</h1>
          <p className="welcome-tagline">Learn. Practice. Become a Confident Midwife.</p>
          <p className="welcome-description">
            A clear, student-friendly platform that helps nursing and midwifery students
            master difficult subjects through structured lessons, visuals, quizzes and
            revision tools — built for Level 100 and beyond.
          </p>
          <div className="welcome-actions">
            <Link to="/courses" className="btn btn-primary welcome-btn-primary">
              Start Learning
              <IconChevronRight size={18} />
            </Link>
            <Link to="/quiz" className="btn btn-secondary welcome-btn-secondary">
              Explore Quiz Center
            </Link>
          </div>
          <div className="welcome-meta">
            <span className="badge">{academicInfo.level}</span>
            <span className="badge">{academicInfo.semester}</span>
            <span className="badge">{academicInfo.academicYear}</span>
          </div>
        </div>
      </section>

      {/* Continue Learning */}
      <section className="continue-section">
        <h2 className="section-title">Continue Learning</h2>
        <Link to={`/courses/${currentCourse.id}/lessons/${nextLesson.id}`} className="continue-card card">
          <div className="continue-icon" style={{ background: currentCourse.color + '22', color: currentCourse.color }}>
            <IconPlay size={22} />
          </div>
          <div className="continue-body">
            <span className="continue-code">{currentCourse.code}</span>
            <h3 className="continue-title">{currentCourse.title}</h3>
            <p className="continue-lesson">Continue: {nextLesson.title}</p>
            <div className="continue-progress">
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${courseProg.percent || 0}%` }} />
              </div>
              <span className="progress-text">{courseProg.percent || 0}%</span>
            </div>
          </div>
          <IconChevronRight size={20} className="continue-arrow" />
        </Link>
      </section>

      {/* Quick access */}
      <section className="quick-grid">
        <Link to="/quiz" className="quick-card card">
          <div className="quick-icon quiz"><IconQuiz size={24} /></div>
          <span>Quiz Center</span>
        </Link>
        <Link to="/dictionary" className="quick-card card">
          <div className="quick-icon dict"><IconDictionary size={24} /></div>
          <span>Dictionary</span>
        </Link>
        <Link to="/courses" className="quick-card card">
          <div className="quick-icon courses"><IconBook size={24} /></div>
          <span>All Courses</span>
        </Link>
        <Link to="/progress" className="quick-card card">
          <div className="quick-icon progress"><IconFlame size={24} /></div>
          <span>Progress</span>
        </Link>
      </section>

      {/* Study stats */}
      <section className="stats-row">
        <div className="stat-card card">
          <span className="stat-value">{overallCompleted}</span>
          <span className="stat-label">Lessons done</span>
        </div>
        <div className="stat-card card">
          <span className="stat-value">{progress.studyStreak || 0}</span>
          <span className="stat-label">Day streak</span>
        </div>
        <div className="stat-card card">
          <span className="stat-value">{Object.keys(progress.quizzes || {}).length}</span>
          <span className="stat-label">Quizzes taken</span>
        </div>
      </section>

      {/* Recommended */}
      <section className="recommended">
        <div className="section-header">
          <h2 className="section-title">Recommended Lessons</h2>
          <Link to="/courses/bnd-101" className="see-all">See all</Link>
        </div>
        <div className="lesson-list">
          {currentCourse.lessons.slice(0, 4).map((lesson) => {
            const done = courseProg.completedLessons?.includes(lesson.id);
            return (
              <Link
                key={lesson.id}
                to={`/courses/${currentCourse.id}/lessons/${lesson.id}`}
                className={`lesson-item card ${done ? 'done' : ''}`}
              >
                <div className="lesson-num">{done ? '✓' : lesson.number}</div>
                <div className="lesson-info">
                  <h4>{lesson.title}</h4>
                  <span className="lesson-meta"><IconClock size={14} /> {lesson.duration}</span>
                </div>
                <IconChevronRight size={16} />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Course overview strip */}
      <section className="course-strip">
        <div className="section-header">
          <h2 className="section-title">Your Courses</h2>
          <Link to="/courses" className="see-all">View all</Link>
        </div>
        <div className="course-scroll">
          {courses.slice(0, 5).map((c) => {
            const pct = getCourseProgress({
              ...c,
              lessons: c.lessons.map((l) => ({
                ...l,
                completed: progress.courses[c.id]?.completedLessons?.includes(l.id),
              })),
            });
            return (
              <Link key={c.id} to={`/courses/${c.id}`} className="mini-course card">
                <div className="mini-color" style={{ background: c.color }} />
                <span className="mini-code">{c.code}</span>
                <span className="mini-title">{c.title}</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
