import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProgressProvider } from './context/ProgressContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import RequireOwner from './components/RequireOwner';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Lesson from './pages/Lesson';
import QuizCenter from './pages/QuizCenter';
import QuizTake from './pages/QuizTake';
import Dictionary from './pages/Dictionary';
import ProgressPage from './pages/Progress';
import Profile from './pages/Profile';
import Login from './pages/Login';
import OwnerDashboard from './pages/OwnerDashboard';
import StudyGuide from './pages/StudyGuide';

export default function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="courses" element={<Courses />} />
                <Route path="courses/:courseId" element={<CourseDetail />} />
                <Route path="courses/:courseId/lessons/:lessonId" element={<Lesson />} />
              <Route path="courses/:courseId/lessons/:lessonId/study" element={<StudyGuide />} />
                <Route path="quiz" element={<QuizCenter />} />
                <Route path="quiz/:quizId" element={<QuizTake />} />
                <Route path="dictionary" element={<Dictionary />} />
                <Route path="progress" element={<ProgressPage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="owner"
                  element={
                    <RequireOwner>
                      <OwnerDashboard />
                    </RequireOwner>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ProgressProvider>
    </ThemeProvider>
  );
                  }
