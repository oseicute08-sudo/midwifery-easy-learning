import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { IconHome, IconBook, IconQuiz, IconDictionary, IconUser, IconProgress, IconMoon, IconSun } from './Icons';
import { useTheme } from '../context/ThemeContext';
import './Layout.css';

const navItems = [
  { to: '/', label: 'Home', icon: IconHome, end: true },
  { to: '/courses', label: 'Courses', icon: IconBook },
  { to: '/quiz', label: 'Quiz', icon: IconQuiz },
  { to: '/dictionary', label: 'Dictionary', icon: IconDictionary },
  { to: '/profile', label: 'Profile', icon: IconUser },
];

const sideItems = [
  ...navItems.slice(0, 4),
  { to: '/progress', label: 'Progress', icon: IconProgress },
  { to: '/profile', label: 'Profile', icon: IconUser },
];

export default function Layout() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <div className="app-shell">
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">M</div>
          <div className="brand-text">
            <span className="brand-title">Midwifery Easy</span>
            <span className="brand-sub">Learning Center</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {sideItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />}
            <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
          </button>
          <p className="founder-note">Founder: Bismark Owusu</p>
        </div>
      </aside>

      {/* Main content */}
      <div className="main-area">
        <header className="topbar">
          <div className="topbar-brand">
            <div className="brand-mark sm">M</div>
            <span className="topbar-title">Midwifery Easy Learning</span>
          </div>
          <button className="theme-toggle icon-only" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
          </button>
        </header>

        <main id="main-content" className="page-content page-enter" key={location.pathname} tabIndex={-1}>
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="bottom-nav">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `bottom-link ${isActive ? 'active' : ''}`}
          >
            <Icon size={22} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
