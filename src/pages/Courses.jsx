import { Link } from 'react-router-dom';
import { courses, academicInfo, getCourseProgress } from '../data/courses';
import { useProgress } from '../context/ProgressContext';
import { IconChevronRight, IconBook } from '../components/Icons';
import './Courses.css';

export default function Courses() {
  const { progress } = useProgress();

  return (
    <div className="courses-page container">
      <header className="page-header">
        <h1>Courses</h1>
        <p className="page-subtitle">
          {academicInfo.level} · {academicInfo.semester} · {academicInfo.academicYear}
        </p>
        <p className="page-note">
          Learning structure for Midwifery Easy Learning Center based on the B.Sc. Midwifery curriculum.
          Total: {academicInfo.totalCredits} credit hours.
        </p>
      </header>

      <div className="courses-grid">
        {courses.map((course) => {
          const completed = progress.courses[course.id]?.completedLessons?.length || 0;
          const total = course.lessons.length;
          const pct = total ? Math.round((completed / total) * 100) : 0;

          return (
            <Link key={course.id} to={`/courses/${course.id}`} className="course-card card">
              <div className="course-card-top">
                <div className="course-icon" style={{ background: course.color + '18', color: course.color }}>
                  <IconBook size={24} />
                </div>
                <span className="course-credits">{course.credits} cr</span>
              </div>
              <span className="course-code">{course.code}</span>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description.slice(0, 90)}…</p>
              <div className="course-footer">
                <div className="course-progress-info">
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="course-stats">{completed}/{total} lessons · {pct}%</span>
                </div>
                <span className="continue-btn">
                  {pct > 0 ? 'Continue' : 'Start'} <IconChevronRight size={16} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
