import { useMemo, useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getCourseById } from '../data/courses';
import { getStudyGuide } from '../data/studyGuides/bnd101-l01';
import './StudyGuide.css';

/* ---------- Teaching SVGs (original, Level 100) ---------- */

function FigAnatomyPhysio() {
  return (
    <svg viewBox="0 0 320 160" className="sg-fig" role="img" aria-label="Anatomy and physiology relationship">
      <rect x="8" y="20" width="130" height="100" rx="8" fill="#ecfdf5" stroke="#0d9488" strokeWidth="2" />
      <text x="30" y="48" fontSize="14" fontWeight="700" fill="#0f766e">ANATOMY</text>
      <text x="22" y="72" fontSize="11" fill="#134e4a">Structure · Location</text>
      <text x="28" y="92" fontSize="11" fill="#134e4a">What? · Where?</text>
      <text x="145" y="75" fontSize="18" fontWeight="700" fill="#0d9488">+</text>
      <rect x="165" y="20" width="145" height="100" rx="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
      <text x="185" y="48" fontSize="14" fontWeight="700" fill="#1d4ed8">PHYSIOLOGY</text>
      <text x="180" y="72" fontSize="11" fill="#1e3a8a">Function · Process</text>
      <text x="188" y="92" fontSize="11" fill="#1e3a8a">How? · Why?</text>
      <path d="M70 120 L70 140 L230 140 L230 120" fill="none" stroke="#c026d3" strokeWidth="2" />
      <text x="95" y="155" fontSize="12" fontWeight="700" fill="#a21caf">Integrated clinical understanding</text>
    </svg>
  );
}

function FigLevels() {
  const levels = [
    { y: 8, label: 'Organism', sub: 'whole person', c: '#0d9488' },
    { y: 34, label: 'Organ system', sub: 'e.g. circulatory', c: '#14b8a6' },
    { y: 60, label: 'Organ', sub: 'e.g. heart', c: '#2dd4bf' },
    { y: 86, label: 'Tissue', sub: 'e.g. muscle tissue', c: '#5eead4' },
    { y: 112, label: 'Cell', sub: 'e.g. muscle cell', c: '#99f6e4' },
    { y: 138, label: 'Chemical', sub: 'atoms · molecules', c: '#ccfbf1' },
  ];
  return (
    <svg viewBox="0 0 320 175" className="sg-fig" role="img" aria-label="Levels of organization hierarchy">
      {levels.map((L, i) => (
        <g key={L.label}>
          <rect x={40 + i * 6} y={L.y} width={240 - i * 12} height="22" rx="5" fill={L.c} stroke="#0f766e" strokeWidth="1.2" />
          <text x="160" y={L.y + 15} textAnchor="middle" fontSize="11" fontWeight="700" fill="#134e4a">
            {L.label}
            <tspan fontWeight="500" fill="#334155">
              {' '}
              — {L.sub}
            </tspan>
          </text>
          {i < levels.length - 1 && (
            <text x="155" y={L.y + 28} fontSize="10" fill="#0d9488">
              ↑
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}

function FigDirectional() {
  return (
    <svg viewBox="0 0 320 210" className="sg-fig" role="img" aria-label="Anatomical position and directional terms">
      {/* body */}
      <ellipse cx="160" cy="28" rx="16" ry="18" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
      <path d="M140 45 Q160 48 180 45 L185 110 Q160 118 135 110 Z" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
      <path d="M140 55 L100 70 L90 115" fill="none" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
      <path d="M180 55 L220 70 L230 115" fill="none" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="88" cy="118" rx="8" ry="5" fill="#99f6e4" stroke="#0d9488" strokeWidth="1.5" />
      <ellipse cx="232" cy="118" rx="8" ry="5" fill="#99f6e4" stroke="#0d9488" strokeWidth="1.5" />
      <path d="M145 110 L138 175" fill="none" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
      <path d="M175 110 L182 175" fill="none" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="132" cy="178" rx="12" ry="5" fill="#f1f5f9" stroke="#334155" strokeWidth="1.5" />
      <ellipse cx="188" cy="178" rx="12" ry="5" fill="#f1f5f9" stroke="#334155" strokeWidth="1.5" />
      {/* labels */}
      <text x="148" y="12" fontSize="11" fontWeight="700" fill="#0d9488">
        Superior
      </text>
      <text x="148" y="200" fontSize="11" fontWeight="700" fill="#0d9488">
        Inferior
      </text>
      <text x="8" y="80" fontSize="11" fontWeight="700" fill="#2563eb">
        Lateral
      </text>
      <text x="250" y="80" fontSize="11" fontWeight="700" fill="#2563eb">
        Lateral
      </text>
      <text x="148" y="95" fontSize="10" fontWeight="700" fill="#c026d3">
        Medial
      </text>
      <text x="8" y="50" fontSize="10" fill="#ea580c">
        Proximal →
      </text>
      <text x="8" y="120" fontSize="10" fill="#ea580c">
        ← Distal
      </text>
      <text x="235" y="40" fontSize="10" fill="#7c3aed">
        Anterior (front)
      </text>
      <text x="235" y="145" fontSize="10" fill="#7c3aed">
        Posterior (back)
      </text>
      <text x="55" y="155" fontSize="10" fill="#0f766e">
        Palms forward
      </text>
    </svg>
  );
}

function FigPlanes() {
  return (
    <svg viewBox="0 0 320 200" className="sg-fig" role="img" aria-label="Body planes">
      <ellipse cx="160" cy="26" rx="14" ry="16" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
      <rect x="140" y="40" width="40" height="55" rx="10" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
      <line x1="140" y1="50" x2="115" y2="85" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
      <line x1="180" y1="50" x2="205" y2="85" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
      <line x1="150" y1="95" x2="145" y2="150" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
      <line x1="170" y1="95" x2="175" y2="150" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
      {/* sagittal */}
      <line x1="160" y1="12" x2="160" y2="160" stroke="#0d9488" strokeWidth="2.5" strokeDasharray="6 4" />
      <text x="165" y="20" fontSize="11" fontWeight="700" fill="#0d9488">
        Sagittal
      </text>
      <text x="165" y="34" fontSize="9" fill="#0f766e">
        L | R
      </text>
      {/* frontal */}
      <line x1="100" y1="25" x2="100" y2="155" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="6 4" />
      <text x="20" y="90" fontSize="11" fontWeight="700" fill="#2563eb">
        Frontal
      </text>
      <text x="20" y="104" fontSize="9" fill="#1d4ed8">
        front|back
      </text>
      {/* transverse */}
      <line x1="110" y1="85" x2="230" y2="85" stroke="#c026d3" strokeWidth="2.5" strokeDasharray="6 4" />
      <text x="235" y="80" fontSize="11" fontWeight="700" fill="#c026d3">
        Transverse
      </text>
      <text x="235" y="94" fontSize="9" fill="#a21caf">
        upper|lower
      </text>
      <text x="40" y="185" fontSize="11" fill="#475569">
        Imaginary planes used to describe body sections
      </text>
    </svg>
  );
}

function FigCavities() {
  return (
    <svg viewBox="0 0 320 210" className="sg-fig" role="img" aria-label="Body cavities">
      <ellipse cx="150" cy="28" rx="20" ry="22" fill="#99f6e4" stroke="#0d9488" strokeWidth="2" />
      <text x="185" y="25" fontSize="11" fontWeight="700" fill="#0f766e">
        Cranial
      </text>
      <text x="185" y="38" fontSize="10" fill="#0f766e">
        (brain)
      </text>
      <rect x="142" y="48" width="16" height="28" rx="3" fill="#5eead4" stroke="#0d9488" strokeWidth="1.5" />
      <text x="185" y="65" fontSize="11" fontWeight="700" fill="#0f766e">
        Vertebral
      </text>
      <path d="M115 55 Q105 100 112 150 L135 200 L165 200 L188 150 Q195 100 185 55 Z" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
      <rect x="122" y="70" width="56" height="38" rx="6" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
      <text x="128" y="93" fontSize="11" fontWeight="700" fill="#1d4ed8">
        Thoracic
      </text>
      <line x1="122" y1="112" x2="178" y2="112" stroke="#64748b" strokeWidth="2" />
      <rect x="122" y="116" width="56" height="36" rx="5" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
      <text x="128" y="138" fontSize="10" fontWeight="700" fill="#be185d">
        Abdominal
      </text>
      <rect x="126" y="156" width="48" height="28" rx="5" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="132" y="174" fontSize="10" fontWeight="700" fill="#5b21b6">
        Pelvic
      </text>
      <text x="200" y="95" fontSize="10" fill="#1d4ed8">
        heart, lungs
      </text>
      <text x="200" y="140" fontSize="10" fill="#be185d">
        GI, kidneys…
      </text>
      <text x="200" y="175" fontSize="10" fill="#5b21b6">
        bladder, uterus…
      </text>
      <text x="20" y="205" fontSize="11" fill="#475569">
        Dorsal (back) vs Ventral (front) cavities
      </text>
    </svg>
  );
}

function FigSystemsBody() {
  return (
    <svg viewBox="0 0 320 130" className="sg-fig" role="img" aria-label="Organ systems concept">
      <ellipse cx="60" cy="40" rx="14" ry="16" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
      <path d="M42 55 Q60 100 42 115 L78 115 Q60 100 78 55 Z" fill="#f1f5f9" stroke="#334155" strokeWidth="1.5" />
      <text x="100" y="30" fontSize="12" fontWeight="700" fill="#0f766e">
        Many systems · one person
      </text>
      <text x="100" y="50" fontSize="11" fill="#334155">
        Each system has organs + a main job
      </text>
      <text x="100" y="70" fontSize="11" fill="#334155">
        Systems share blood, nerves, and control signals
      </text>
      <text x="100" y="95" fontSize="11" fontWeight="600" fill="#a21caf">
        Pregnancy increases demand across several systems
      </text>
      <text x="100" y="115" fontSize="11" fill="#475569">
        See detailed system list below
      </text>
    </svg>
  );
}

function FigClinical() {
  return (
    <svg viewBox="0 0 320 120" className="sg-fig" role="img" aria-label="Clinical application of anatomy">
      <rect x="10" y="15" width="90" height="90" rx="8" fill="#ecfdf5" stroke="#0d9488" strokeWidth="1.5" />
      <text x="28" y="55" fontSize="12" fontWeight="700" fill="#0f766e">
        Locate
      </text>
      <text x="22" y="75" fontSize="10" fill="#134e4a">
        landmarks
      </text>
      <rect x="115" y="15" width="90" height="90" rx="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
      <text x="128" y="55" fontSize="12" fontWeight="700" fill="#1d4ed8">
        Describe
      </text>
      <text x="125" y="75" fontSize="10" fill="#1e3a8a">
        direction words
      </text>
      <rect x="220" y="15" width="90" height="90" rx="8" fill="#fdf4ff" stroke="#c026d3" strokeWidth="1.5" />
      <text x="230" y="55" fontSize="12" fontWeight="700" fill="#a21caf">
        Communicate
      </text>
      <text x="235" y="75" fontSize="10" fill="#86198f">
        safe handover
      </text>
    </svg>
  );
}

function FigRevision() {
  return (
    <svg viewBox="0 0 320 70" className="sg-fig" role="img" aria-label="Revision focus">
      <text x="20" y="28" fontSize="13" fontWeight="700" fill="#0d9488">
        High-yield recall
      </text>
      <text x="20" y="50" fontSize="12" fill="#334155">
        Definitions · position · planes · cavities · systems
      </text>
    </svg>
  );
}

function PageDiagram({ id }) {
  switch (id) {
    case 'anatomy-physio':
      return <FigAnatomyPhysio />;
    case 'levels':
      return <FigLevels />;
    case 'directional-full':
      return <FigDirectional />;
    case 'planes-full':
      return <FigPlanes />;
    case 'cavities-full':
      return <FigCavities />;
    case 'systems-body':
      return <FigSystemsBody />;
    case 'clinical-apply':
      return <FigClinical />;
    case 'revision':
      return <FigRevision />;
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
            <h1>{guide.title}</h1>
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
