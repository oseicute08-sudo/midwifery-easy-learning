import { useMemo, useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getCourseById } from '../data/courses';
import { getStudyGuide } from '../data/studyGuides/bnd101-l01';
import './StudyGuide.css';

/* ---------- Professional medical illustrations (NCI SEER public-domain JPGs) ---------- */

function MedImg({ src, alt, credit }) {
  return (
    <figure className="sg-med-fig">
      <img src={src} alt={alt} className="sg-med-img" loading="lazy" />
      {credit ? <figcaption className="sg-med-credit">{credit}</figcaption> : null}
    </figure>
  );
}

function MedGrid({ children }) {
  return <div className="sg-med-grid">{children}</div>;
}

const CREDIT = 'NCI SEER — public domain educational illustration';

function PageDiagram({ id }) {
  switch (id) {
    case 'anatomy-physio':
      return (
        <MedGrid>
          <MedImg src="/images/study-guide/planes.jpg" alt="Human body in anatomical position with body planes" credit={CREDIT} />
        </MedGrid>
      );
    case 'levels':
      return (
        <MedGrid>
          <MedImg src="/images/study-guide/planes.jpg" alt="Anatomical body reference for levels of organization" credit={CREDIT} />
        </MedGrid>
      );
    case 'directional-full':
      return (
        <MedGrid>
          <MedImg src="/images/study-guide/planes.jpg" alt="Anatomical position and body orientation for directional terms" credit={CREDIT} />
        </MedGrid>
      );
    case 'planes-full':
      return (
        <MedGrid>
          <MedImg src="/images/study-guide/planes.jpg" alt="Sagittal, frontal (coronal) and transverse body planes on anatomical figure" credit={CREDIT} />
        </MedGrid>
      );
    case 'cavities-full':
      return (
        <MedGrid>
          <MedImg src="/images/study-guide/digestive_system.jpg" alt="Organs within body cavities — digestive tract overview" credit={CREDIT} />
          <MedImg src="/images/study-guide/urinary_system.jpg" alt="Urinary organs in the abdominopelvic cavity" credit={CREDIT} />
        </MedGrid>
      );
    case 'systems-body':
      return (
        <MedGrid>
          <MedImg src="/images/study-guide/heart.jpg" alt="Human heart anatomy" credit={CREDIT} />
          <MedImg src="/images/study-guide/bronchi_lungs.jpg" alt="Bronchi and lungs — respiratory anatomy" credit={CREDIT} />
          <MedImg src="/images/study-guide/digestive_system.jpg" alt="Digestive system organs" credit={CREDIT} />
          <MedImg src="/images/study-guide/urinary_system.jpg" alt="Urinary system anatomy" credit={CREDIT} />
        </MedGrid>
      );
    case 'clinical-apply':
      return (
        <MedGrid>
          <MedImg src="/images/study-guide/muscle_tissue.jpg" alt="Skeletal, cardiac and smooth muscle tissue comparison" credit={CREDIT} />
          <MedImg src="/images/study-guide/muscle_structure.jpg" alt="Structure of skeletal muscle" credit={CREDIT} />
          <MedImg src="/images/study-guide/neuron.jpg" alt="Labeled structure of a typical neuron" credit={CREDIT} />
          <MedImg src="/images/study-guide/pulmonary_circuit.jpg" alt="Pulmonary circulation pathway" credit={CREDIT} />
        </MedGrid>
      );
    case 'revision':
      return (
        <MedGrid>
          <MedImg src="/images/study-guide/endocrine_system.jpg" alt="Major endocrine glands" credit={CREDIT} />
          <MedImg src="/images/study-guide/uterus.jpg" alt="Female reproductive tract — uterus and related structures" credit={CREDIT} />
          <MedImg src="/images/study-guide/lymph_node.jpg" alt="Lymph node structure" credit={CREDIT} />
        </MedGrid>
      );
    default:
      return null;
  }
}

function Block({ block }) {
  if (block.type === 'intro') return <p className="sg-intro">{block.text}</p>;
  if (block.type === 'note') return <p className="sg-note-line">{block.text}</p>;

  if (block.type === 'defs-row') {
    return (
      <div className="sg-defs-row">
        {block.items.map((it) => (
          <div key={it.title} className="sg-def-block">
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === 'branches') {
    return (
      <div className="sg-branches">
        <h3 className="sg-sec">{block.title}</h3>
        <div className="sg-branch-grid">
          {block.items.map((b) => (
            <div key={b.name} className="sg-branch">
              <strong>{b.name}</strong>
              <span>{b.desc}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === 'terms-inline') {
    return (
      <div className="sg-terms-inline">
        {block.items.map((x) => (
          <span key={x.t} className="sg-term-chip">
            <strong>{x.t}</strong> {x.d}
          </span>
        ))}
      </div>
    );
  }

  if (block.type === 'table') {
    return (
      <div className="sg-table-wrap">
        <h3 className="sg-sec">{block.title}</h3>
        <table className="sg-table">
          <thead>
            <tr>
              {block.headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === 'keypoints') {
    return (
      <div className="sg-kp">
        <h3 className="sg-sec">Key points</h3>
        <ul>
          {block.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === 'examples') {
    return (
      <div className="sg-examples">
        <h3 className="sg-sec">{block.title}</h3>
        <ul>
          {block.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === 'position-list') {
    return (
      <ul className="sg-pos-list">
        {block.items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'remember') {
    return (
      <div className="sg-remember">
        <strong>Remember:</strong> {block.text}
      </div>
    );
  }

  if (block.type === 'takeaway') {
    return (
      <div className="sg-takeaway">
        <strong>Key takeaway:</strong> {block.text}
      </div>
    );
  }

  if (block.type === 'two-mini') {
    return (
      <div className="sg-two-mini">
        <div>
          <h3 className="sg-sec">{block.leftTitle}</h3>
          <ul>
            {block.leftItems.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="sg-sec">{block.rightTitle}</h3>
          <ul>
            {block.rightItems.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (block.type === 'system-rows') {
    return (
      <div className="sg-sys-table-wrap">
        <table className="sg-sys-table">
          <thead>
            <tr>
              <th>System</th>
              <th>Major parts</th>
              <th>Main job</th>
              <th>Midwifery link</th>
            </tr>
          </thead>
          <tbody>
            {block.items.map((s) => (
              <tr key={s.name}>
                <td>
                  <strong>{s.name}</strong>
                </td>
                <td>{s.organs}</td>
                <td>{s.job}</td>
                <td>{s.mid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === 'apply-grid') {
    return (
      <div className="sg-apply">
        {block.items.map((a) => (
          <div key={a.title} className="sg-apply-item">
            <strong>{a.title}</strong>
            <span>{a.text}</span>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === 'revision-defs') {
    return (
      <div className="sg-rev-defs">
        {block.items.map((x) => (
          <div key={x.t}>
            <strong>{x.t}</strong> — {x.d}
          </div>
        ))}
      </div>
    );
  }

  if (block.type === 'checklist') {
    return (
      <div className="sg-check-block">
        <h3 className="sg-sec">{block.title}</h3>
        <ul className="sg-check">
          {block.items.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

export default function StudyGuide() {
  const { courseId, lessonId } = useParams();
  const course = getCourseById(courseId);
  const guide = useMemo(() => getStudyGuide(lessonId), [lessonId]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setPageIndex(0);
    window.scrollTo(0, 0);
  }, [lessonId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageIndex]);

  if (!guide) {
    return <Navigate to={`/courses/${courseId}/lessons/${lessonId}`} replace />;
  }

  const total = guide.pages.length;
  const page = guide.pages[pageIndex];
  const canPrev = pageIndex > 0;
  const canNext = pageIndex < total - 1;

  return (
    <div className="sg-page">
      <div className="sg-topbar">
        <Link to={`/courses/${courseId}/lessons/${lessonId}`} className="sg-back">
          ← Full lesson text
        </Link>
        <span className="sg-course">
          {guide.courseCode} · {course?.title || guide.courseTitle}
        </span>
      </div>

      <article className="sg-sheet">
        <header className="sg-sheet-head">
          <span className="sg-topic">{guide.topicLabel}</span>
          <div className="sg-titles">
            <h1>{guide.mainTitle || guide.title}</h1>
            <p className="sg-sub">{guide.courseTitle}</p>
          </div>
          <span className="sg-page-badge">
            Page {pageIndex + 1} of {total}
          </span>
        </header>

        <div className="sg-rule" />
        <h2 className="sg-page-title">{page.pageTitle}</h2>

        {page.diagram && (
          <div className="sg-fig-wrap">
            <PageDiagram id={page.diagram} />
          </div>
        )}

        <div className="sg-body">
          {page.blocks.map((b, i) => (
            <Block key={`${page.id}-${i}`} block={b} />
          ))}
        </div>

        <footer className="sg-sheet-foot">
          <span>Study · Understand · Remember</span>
          <span>Midwifery Easy Learning Center</span>
        </footer>
      </article>

      <nav className="sg-pager" aria-label="Study page navigation">
        <button type="button" className="sg-nav-btn" disabled={!canPrev} onClick={() => setPageIndex((i) => i - 1)}>
          ← Previous
        </button>
        <div className="sg-dots">
          {guide.pages.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`sg-dot ${i === pageIndex ? 'active' : ''}`}
              onClick={() => setPageIndex(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
        <button type="button" className="sg-nav-btn" disabled={!canNext} onClick={() => setPageIndex((i) => i + 1)}>
          Next →
        </button>
      </nav>
    </div>
  );
}
