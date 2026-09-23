import { Link } from 'react-router-dom';
/**
 * Reusable educational components for rich anatomy lessons
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

export function AnatomyDiagram({ title, description, caption }) {
  return (
    <figure className="lc-diagram">
      <div className="lc-diagram-placeholder">
        <div className="lc-diagram-icon">🔬</div>
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function LabeledDiagram({ title, description, labels = [], caption }) {
  return (
    <figure className="lc-diagram lc-labeled">
      <div className="lc-diagram-placeholder">
        <div className="lc-diagram-icon">📐</div>
        <h4>{title}</h4>
        {description && <p>{description}</p>}
        {labels.length > 0 && (
          <ul className="lc-diagram-labels">
            {labels.map((l, i) => (
              <li key={i}><strong>{l.label}:</strong> {l.note}</li>
            ))}
          </ul>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
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

export function ClinicalConnection({ children }) {
  return (
    <aside className="lc-callout lc-clinical">
      <div className="lc-callout-label">Clinical Connection</div>
      <div className="lc-callout-body">{children}</div>
    </aside>
  );
}

export function MidwiferyConnection({ children }) {
  return (
    <aside className="lc-callout lc-midwifery">
      <div className="lc-callout-label">Midwifery Connection</div>
      <div className="lc-callout-body">{children}</div>
    </aside>
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

export function LessonQuizBlock({ quiz }) {
  // CTA into the full interactive quiz (QuizTake). Preview uses quick-review prompts when provided.
  if (!quiz?.id) return null;
  const previews = (quiz.questions || [])
    .map((q) => q.question || q.q || (typeof q === 'string' ? q : null))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="lc-lesson-quiz">
      <h3 className="lc-section-title">Lesson Quiz</h3>
      <p className="lc-quiz-intro">
        Check your understanding with a short interactive quiz (5 questions with explanations).
      </p>
      {previews.length > 0 && (
        <ul className="lc-quiz-preview">
          {previews.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      )}
      <Link to={`/quiz/${quiz.id}`} className="btn btn-primary btn-sm" style={{ marginTop: '0.75rem' }}>
        Take lesson quiz →
      </Link>
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
