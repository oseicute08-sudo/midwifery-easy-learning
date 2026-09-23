import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { dictionaryTerms, searchTerms, getAlphabet } from '../data/dictionary';
import { useProgress } from '../context/ProgressContext';
import { IconSearch, IconStar, IconChevronRight } from '../components/Icons';
import './Dictionary.css';

export default function Dictionary() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQ = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQ);
  const [activeLetter, setActiveLetter] = useState(null);
  const { isFavourite, toggleFavourite } = useProgress();

  const results = useMemo(() => {
    let list = searchTerms(query);
    if (activeLetter) {
      list = list.filter((t) => t.term[0].toUpperCase() === activeLetter);
    }
    return list.sort((a, b) => a.term.localeCompare(b.term));
  }, [query, activeLetter]);

  const handleSearch = (val) => {
    setQuery(val);
    setActiveLetter(null);
    if (val) setSearchParams({ q: val });
    else setSearchParams({});
  };

  return (
    <div className="dictionary-page container">
      <header className="page-header">
        <h1>Midwifery Dictionary</h1>
        <p className="page-subtitle">Anatomy, clinical and midwifery terms with clear explanations.</p>
      </header>

      <div className="search-box">
        <IconSearch size={18} className="search-icon" />
        <input
          type="search"
          placeholder="Search terms..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          aria-label="Search dictionary"
        />
      </div>

      <div className="alpha-bar">
        {getAlphabet().map((letter) => {
          const has = dictionaryTerms.some((t) => t.term[0].toUpperCase() === letter);
          return (
            <button
              key={letter}
              className={`alpha-btn ${activeLetter === letter ? 'active' : ''} ${!has ? 'empty' : ''}`}
              onClick={() => {
                setActiveLetter(activeLetter === letter ? null : letter);
                setQuery('');
                setSearchParams({});
              }}
              disabled={!has}
            >
              {letter}
            </button>
          );
        })}
      </div>

      <div className="term-list">
        {results.length === 0 ? (
          <div className="empty-state">
            <p>{query ? `No terms found for “${query}”. Try another spelling or clear the search.` : 'No terms in this letter filter.'}</p>
            {(query || activeLetter) && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => { setQuery(''); setActiveLetter(null); setSearchParams({}); }}
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          results.map((term) => (
            <article key={term.id} className="term-card card">
              <div className="term-header">
                <div>
                  <h3>{term.term}</h3>
                  {term.phonetic && <span className="phonetic">{term.phonetic}</span>}
                </div>
                <button
                  className={`fav-btn ${isFavourite(term.id) ? 'active' : ''}`}
                  onClick={() => toggleFavourite(term.id)}
                  aria-label={isFavourite(term.id) ? 'Remove favourite' : 'Add favourite'}
                >
                  <IconStar size={18} filled={isFavourite(term.id)} />
                </button>
              </div>
              <span className="term-category">{term.category}</span>
              <p className="term-def">{term.definition}</p>
              {term.simpleExplanation && (
                <p className="term-simple"><strong>In simple terms:</strong> {term.simpleExplanation}</p>
              )}
              {term.clinicalMeaning && (
                <p className="term-clinical"><strong>Clinical:</strong> {term.clinicalMeaning}</p>
              )}
              {term.midwiferyRelevance && (
                <p className="term-midwifery"><strong>Midwifery:</strong> {term.midwiferyRelevance}</p>
              )}
              {term.related?.length > 0 && (
                <div className="related-terms">
                  <span>Related:</span>
                  {term.related.map((r) => (
                    <button key={r} className="related-chip" onClick={() => handleSearch(r)}>
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))
        )}
      </div>
    </div>
  );
}
