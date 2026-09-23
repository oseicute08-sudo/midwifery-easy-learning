import { Link, useParams } from 'react-router-dom';
import { getCourseById } from '../data/courses';
import { useProgress } from '../context/ProgressContext';
import { IconChevronLeft, IconChevronRight, IconClock, IconCheck, IconPlay } from '../components/Icons';
import './CourseDetail.css';

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = getCourseById(courseId);
  const { progress, isLessonComplete } = useProgress();

  if (!course) {
    return (
      <div className="container empty-state">
        <p>Course not found.</p>
        <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
      </div>
    );
  }

  const completedCount = course.lessons.filter((l) => isLessonComplete(course.id, l.id)).length;
  const pct = Math.round((completedCount / course.lessons.length) * 100);
  const nextLesson = course.lessons.find((l) => !isLessonComplete(course.id, l.id)) || course.lessons[0];

  return (
    <div className="course-detail container">
      <Link to="/courses" className="back-link">
        <IconChevronLeft size={18} /> Courses
      </Link>

      <header className="cd-header card">
        <div className="cd-header-top">
          <span className="badge">{course.code}</span>
          <span className="cd-credits">{course.credits} credit hours</span>
        </div>
        <h1>{course.title}</h1>
        <p className="cd-desc">{course.description}</p>

        <div className="cd-progress-block">
          <div className="cd-progress-row">
            <span>{completedCount} of {course.lessons.length} lessons</span>
            <span className="cd-pct">{pct}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <Link to={`/courses/${course.id}/lessons/${nextLesson.id}`} className="btn btn-primary cd-cta">
          <IconPlay size={16} />
          {pct > 0 ? 'Continue Learning' : 'Start Course'}
        </Link>
      </header>

      <section className="cd-objectives card">
        <h2>Learning Objectives</h2>
        <ul>
          {course.objectives.map((obj, i) => (
            <li key={i}><span className="obj-dot" />{obj}</li>
          ))}
        </ul>
      </section>

      <section className="cd-lessons">
        <h2 className="section-title">Modules & Lessons</h2>
        <div className="lesson-modules">
          {course.lessons.map((lesson) => {
            const done = isLessonComplete(course.id, lesson.id);
            return (
              <Link
                key={lesson.id}
                to={`/courses/${course.id}/lessons/${lesson.id}`}
                className={`module-item card ${done ? 'completed' : ''}`}
              >
                <div className={`module-num ${done ? 'done' : ''}`}>
                  {done ? <IconCheck size={16} /> : lesson.number}
                </div>
                <div className="module-body">
                  <h3>{lesson.title}</h3>
                  <span className="module-meta"><IconClock size={13} /> {lesson.duration}</span>
                </div>
                <IconChevronRight size={18} className="module-arrow" />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
