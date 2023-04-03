import React from 'react';
import StudentLogin from './pages/StudentLogin';
import StudentReistration from "./pages/StudentReistration"
import './assets/styles/output.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import CoursePlayer from './pages/CoursePlayer';
import Leaderboard from './pages/Leaderboard';
import AdminLogin from './pages/admin/AdminLogin';
import Assignment from './pages/admin/Assignment';
import AssignmentMark from './pages/admin/AssignmentMark';
import Dashboard from './pages/admin/Dashboard';
import Quizzes from './pages/admin/Quizzes';
import Videos from './pages/admin/Videos';
import useAthCheck from './helper/useAuthCheck';

function App() {
  const authChecked = useAthCheck()
  return !authChecked?(<>Checking authintication</>): (
    <Router>
      <Routes>
        {/* student panel  */}
        <Route path='/' element={<StudentLogin />} />
        <Route path="/student-registration" element={<StudentReistration />} />
        <Route path="/leader-board" element={<Leaderboard />} />
        <Route path="/course-player" element={<CoursePlayer />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* Admin panel  */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/assignment" element={<Assignment />} />
        <Route path="/admin/assignment-mark" element={<AssignmentMark />} />
        <Route path="/admin/quizzes" element={<Quizzes />} />
        <Route path="/admin/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;
