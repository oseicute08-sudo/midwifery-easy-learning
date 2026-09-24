import { Link, useParams } from 'react-router-dom';
import { getCourseById } from '../data/courses';
import { getLessonContent } from '../data/lessons';
import { getLessonVisual } from '../data/lessonVisuals';
import { getStudyGuide } from '../data/studyGuides/bnd101-l01';
import { useProgress } from '../context/ProgressContext';
import {
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconCheck,
  IconStar,
} from '../components/Icons';
import {
  LearningObjectives,
  AnatomyDiagram,
  ClinicalConnection,
  MidwiferyConnection,
  KeyPointBox,
  RememberBox,
  CommonMistakes,
  TerminologyTable,
  DirectionalTermCard,
  QuickReview,
  HeroImage,
  Section,
} from '../components/LessonComponents';
import './Lesson.css';

export default function Lesson() {
  const { courseId, lessonId } = useParams();
  const course = getCourseById(courseId);
  const content = getLessonContent(lessonId);
  const { markLessonComplete, isLessonComplete, toggleSavedLesson, isSavedLesson } = useProgress();

  if (!course || !content) {
    return (
      <div className="container empty-state">
        <p>Lesson not found.</p>
        <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
      </div>
    );
  }

  const lessonIndex = course.lessons.findIndex((l) => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : null;
  const done = isLessonComplete(courseId, lessonId);
  const isBookmarked = isSavedLesson(lessonId);
  const visual = getLessonVisual(lessonId) || (content.diagram
    ? { kind: undefined, title: content.diagram.title, description: content.diagram.description, caption: content.diagram.caption }
    : null);


  const studyGuide = getStudyGuide(lessonId) || getStudyGuide(content.id);

  const handleComplete = () => markLessonComplete(courseId, lessonId);
  const handleBookmark = () => toggleSavedLesson(lessonId);

  return (
    <div className="lesson-page container">
      <nav className="breadcrumb">
        <Link to="/courses">Courses</Link>
        <span>/</span>
        <Link to={"/courses/" + courseId}>{course.code}</Link>
        <span>/</span>
        <span className="current">Lesson {content.number}</span>
      </nav>

      <header className="lesson-header">
        <div className="lesson-meta-row">
          <span className="badge">{course.code}</span>
          <span className="lesson-time"><IconClock size={14} /> {content.duration}</span>
          <button
            className={"bookmark-btn" + (isBookmarked ? " active" : "")}
            onClick={handleBookmark}
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark lesson"}
          >
            <IconStar size={14} filled={isBookmarked} />
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </button>
        </div>
        
        <h1>Lesson {content.number}: {content.title}</h1>
        {content.introduction && <p className="lesson-intro-text">{content.introduction}</p>}
      </header>

      {content.objectives && <LearningObjectives items={content.objectives} />}

      {content.heroImage && (
        <HeroImage src={content.heroImage.src} alt={content.heroImage.alt} caption={content.heroImage.caption} />
      )}

      <article className="lesson-body">
        {content.sections && content.sections.map((sec, i) => (
          <Section key={i} title={sec.heading}>
            {sec.content && <p className="lesson-body-text" style={{ whiteSpace: "pre-line" }}>{sec.content}</p>}
            {sec.list && (
              <ul className="lesson-list">
                {sec.list.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )}
          </Section>
        ))}

        {content.directionalTerms && (
          <Section title="Directional Terms in Detail">
            {content.directionalTerms.map((t, i) => <DirectionalTermCard key={i} {...t} />)}
          </Section>
        )}

        {visual && (
          <AnatomyDiagram
            kind={visual.kind}
            title={visual.title}
            description={visual.description}
            caption={visual.caption}
          />
        )}

        {content.terminology && <TerminologyTable terms={content.terminology} />}

        {content.clinicalConnection && <ClinicalConnection>{content.clinicalConnection}</ClinicalConnection>}
        {content.midwiferyConnection && <MidwiferyConnection>{content.midwiferyConnection}</MidwiferyConnection>}
        {content.keyPoints && <KeyPointBox points={content.keyPoints} />}
        {content.commonMistakes && <CommonMistakes items={content.commonMistakes} />}
        {content.rememberThis && <RememberBox>{content.rememberThis}</RememberBox>}
        {content.quickReview && <QuickReview questions={content.quickReview} />}

        {content.keyTerms && content.keyTerms.length > 0 && (
          <section className="key-terms card" style={{ padding: "1.15rem 1.25rem" }}>
            <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Key Terms</h2>
            <div className="term-chips">
              {content.keyTerms.map((t) => (
                <Link key={t} to={"/dictionary?q=" + encodeURIComponent(t)} className="term-chip">{t}</Link>
              ))}
            </div>
          </section>
        )}
      </article>


      {studyGuide && (
        <div className="lesson-study-cta" style={{
          margin: '1rem 0',
          padding: '0.85rem 1rem',
          border: '2px solid #0d9488',
          borderRadius: '12px',
          background: 'rgba(13, 148, 136, 0.08)',
        }}>
          <Link
            to={"/courses/" + courseId + "/lessons/" + lessonId + "/study"}
            className="btn btn-primary"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Open visual study guide (8 pages)
          </Link>
          <p style={{ fontSize: '0.85rem', margin: '0.45rem 0 0', opacity: 0.9 }}>
            Illustrated study-note pages for this lesson. Full lesson text stays above.
          </p>
        </div>
      )}

      <div className="lesson-actions">

        {!done ? (
          <button className="btn btn-primary complete-btn" onClick={handleComplete}>
            <IconCheck size={18} /> Mark as Complete
          </button>
        ) : (
          <div className="completed-badge"><IconCheck size={18} /> Completed</div>
        )}
      </div>

      <nav className="lesson-nav">
        {prevLesson ? (
          <Link to={"/courses/" + courseId + "/lessons/" + prevLesson.id} className="btn btn-secondary nav-btn">
            <IconChevronLeft size={18} /> Previous
          </Link>
        ) : <span />}
        {nextLesson ? (
          <Link to={"/courses/" + courseId + "/lessons/" + nextLesson.id} className="btn btn-primary nav-btn">
            Next <IconChevronRight size={18} />
          </Link>
        ) : (
          <Link to={"/courses/" + courseId} className="btn btn-primary nav-btn">
            Back to Course <IconChevronRight size={18} />
          </Link>
        )}
      </nav>
    </div>
  );
}
