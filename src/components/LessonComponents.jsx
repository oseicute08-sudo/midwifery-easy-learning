import { DiagramSvg } from './LessonDiagrams';
import { useState } from 'react';
/**
 * Reusable educational components for lessons.
 * Quizzes live only in Quiz Center — not embedded in lessons.
 */

export function LearningObjectives({ items }) {
  if (!items?.length) return null;
  return (
    <div className="lc-objectives">
      <h3 className="lc-section-title">Learning Objectives</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}><span className="lc-obj-num">{i + 1}</span>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function AnatomyDiagram({ kind, title, description, caption }) {
  return (
    <figure className="lc-diagram">
      <div className="lc-diagram-canvas">
        <DiagramSvg kind={kind} title={title} />
        {title && <h4 className="lc-diagram-title">{title}</h4>}
        {description && <p className="lc-diagram-desc">{description}</p>}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function LabeledDiagram({ title, description, labels = [], caption }) {
  return (
    <AnatomyDiagram
      title={title}
      description={[description, ...labels.map((l) => `${l.label}: ${l.note}`)].filter(Boolean).join(' · ')}
      caption={caption}
    />
  );
}

export function ComparisonCard({ title, items }) {
  if (!items?.length) return null;
  return (
    <div className="lc-comparison">
      {title && <h3 className="lc-section-title">{title}</h3>}
      <div className="lc-comparison-grid">
        {items.map((item, i) => (
          <div key={i} className="lc-comparison-item">
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpandableCallout({ label, variant, children }) {
  const [open, setOpen] = useState(true);
  const id = `callout-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <aside className={`lc-callout lc-${variant} ${open ? 'is-open' : 'is-collapsed'}`}>
      <button
        type="button"
        className="lc-callout-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="lc-callout-label">{label}</span>
        <span className={`lc-callout-chevron ${open ? 'open' : ''}`} aria-hidden="true">▾</span>
      </button>
      <div id={id} className="lc-callout-body" hidden={!open}>
        {children}
      </div>
    </aside>
  );
}

export function ClinicalConnection({ children }) {
  return (
    <ExpandableCallout label="Clinical Connection" variant="clinical">
      {children}
    </ExpandableCallout>
  );
}

export function MidwiferyConnection({ children }) {
  return (
    <ExpandableCallout label="Midwifery Connection" variant="midwifery">
      {children}
    </ExpandableCallout>
  );
}

export function KeyPointBox({ points }) {
  if (!points?.length) return null;
  return (
    <div className="lc-keypoints">
      <h3 className="lc-section-title">Key Points</h3>
      <ul>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export function RememberBox({ children }) {
  return (
    <aside className="lc-callout lc-remember">
      <div className="lc-callout-label">Remember This</div>
      <div className="lc-callout-body">{children}</div>
    </aside>
  );
}

export function CommonMistakes({ items }) {
  if (!items?.length) return null;
  return (
    <div className="lc-mistakes">
      <h3 className="lc-section-title">Common Mistakes & Misconceptions</h3>
      <ul>
        {items.map((m, i) => (
          <li key={i}>
            <strong>{m.mistake}</strong>
            <span>{m.correction}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TerminologyTable({ terms }) {
  if (!terms?.length) return null;
  return (
    <div className="lc-terms-table-wrap">
      <h3 className="lc-section-title">Important Terminology</h3>
      <div className="lc-terms-table">
        <table>
          <thead>
            <tr>
              <th>Term</th>
              <th>Simple meaning</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {terms.map((t, i) => (
              <tr key={i}>
                <td><strong>{t.term}</strong></td>
                <td>{t.meaning}</td>
                <td>{t.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function DirectionalTermCard({ term, definition, simple, anatomical, clinical, midwifery }) {
  return (
    <div className="lc-dir-term">
      <h4 className="lc-dir-term-name">{term}</h4>
      <p className="lc-dir-def"><strong>Definition:</strong> {definition}</p>
      <p><strong>Simple:</strong> {simple}</p>
      <p><strong>Anatomical example:</strong> {anatomical}</p>
      <p><strong>Clinical example:</strong> {clinical}</p>
      <p><strong>Midwifery example:</strong> {midwifery}</p>
    </div>
  );
}

export function QuickReview({ questions }) {
  if (!questions?.length) return null;
  return (
    <div className="lc-quick-review">
      <h3 className="lc-section-title">Quick Review</h3>
      <ol>
        {questions.map((q, i) => (
          <li key={i}>
            <p className="lc-qr-q">{q.q}</p>
            <p className="lc-qr-a"><em>Answer:</em> {q.a}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function HeroImage({ src, alt, caption }) {
  return (
    <figure className="lc-hero-image">
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function Section({ title, children }) {
  return (
    <section className="lc-section">
      {title && <h2 className="lc-heading">{title}</h2>}
      {children}
    </section>
  );
                                }
  
