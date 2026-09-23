import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getQuizById } from '../data/quizzes';
import { useProgress } from '../context/ProgressContext';
import { IconChevronLeft, IconCheck } from '../components/Icons';
import './QuizTake.css';

export default function QuizTake() {
  const { quizId } = useParams();
  const quiz = getQuizById(quizId);
  const { saveQuizResult } = useProgress();

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [finished, setFinished] = useState(false);

  if (!quiz) {
    return (
      <div className="container empty-state">
        <p>Quiz not found.</p>
        <Link to="/quiz" className="btn btn-primary">Back to Quiz Center</Link>
      </div>
    );
  }

  const question = quiz.questions[current];
  const total = quiz.questions.length;
  const selected = answers[question.id];
  const isCorrect = selected === question.correctIndex;

  const selectAnswer = (idx) => {
    if (showFeedback) return;
    setAnswers((prev) => ({ ...prev, [question.id]: idx }));
    setShowFeedback(true);
  };

  const next = () => {
    if (current + 1 < total) {
      setShowFeedback(false);
      setCurrent(current + 1);
      return;
    }
    // Final question — answers already includes the current selection from selectAnswer
    let scoreCount = 0;
    quiz.questions.forEach((q) => {
      if (answers[q.id] === q.correctIndex) scoreCount++;
    });
    const score = Math.round((scoreCount / total) * 100);
    saveQuizResult(quiz.id, score);
    setShowFeedback(false);
    setFinished(true);
  };

  if (finished) {
    let scoreCount = 0;
    quiz.questions.forEach((q) => {
      if (answers[q.id] === q.correctIndex) scoreCount++;
    });
    const score = Math.round((scoreCount / total) * 100);
    const passed = score >= quiz.passingScore;

    return (
      <div className="quiz-result container">
        <div className={`result-card card ${passed ? 'passed' : 'failed'}`}>
          <div className="result-score">{score}%</div>
          <h2>{passed ? 'Well done!' : 'Keep practising'}</h2>
          <p>
            You scored {scoreCount} out of {total}. Passing score is {quiz.passingScore}%.
          </p>
          <div className="result-actions">
            <button type="button" className="btn btn-primary" onClick={() => { setCurrent(0); setAnswers({}); setShowFeedback(false); setFinished(false); }}>
              Retry Quiz
            </button>
            <Link to="/quiz" className="btn btn-secondary">Back to Quiz Center</Link>
            <Link to="/courses" className="btn btn-ghost">Browse courses</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-take container">
      <Link to="/quiz" className="back-link"><IconChevronLeft size={18} /> Quiz Center</Link>

      <div className="quiz-progress">
        <div className="quiz-progress-text">
          Question {current + 1} of {total}
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${((current + 1) / total) * 100}%` }} />
        </div>
      </div>

      <div className="question-card card">
        <h2 className="question-text">{question.question}</h2>
        <div className="options">
          {question.options.map((opt, idx) => {
            let cls = 'option';
            if (showFeedback) {
              if (idx === question.correctIndex) cls += ' correct';
              else if (idx === selected) cls += ' wrong';
            } else if (selected === idx) {
              cls += ' selected';
            }
            return (
              <button
                key={idx}
                type="button"
                className={cls}
                onClick={() => selectAnswer(idx)}
                disabled={showFeedback}
                aria-pressed={selected === idx}
              >
                <span className="opt-letter" aria-hidden="true">{String.fromCharCode(65 + idx)}</span>
                <span className="opt-text">{opt}</span>
                {showFeedback && idx === question.correctIndex && <IconCheck size={18} className="opt-check" aria-hidden="true" />}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className={`feedback ${isCorrect ? 'ok' : 'bad'}`}>
            <strong>{isCorrect ? 'Correct!' : 'Not quite.'}</strong>
            <p>{question.explanation}</p>
          </div>
        )}
      </div>

      {showFeedback && (
        <button className="btn btn-primary next-btn" onClick={next}>
          {current + 1 < total ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  );
}
