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
import PrivateRouter from './middleware/PrivateRouter';
import PublicRouter from './middleware/PublicRouter';
import PrivateAdminRouter from './middleware/PrivateAdminRouter';
import PublicAdminRouter from './middleware/PublicAdminRouter';

function App() {
  const authChecked = useAthCheck()
  return !authChecked ? (<>Checking authintication</>) : (
    <Router>
      <Routes>
        {/* student panel  */}
        <Route path='/' element={
          <PublicRouter>
            <StudentLogin />
          </PublicRouter>
        } />
        <Route path="/student-registration" element={
          <PublicRouter>
            <StudentReistration />
          </PublicRouter>
        } />
        <Route path="/leader-board" element={
          <PrivateRouter>
            <Leaderboard />
          </PrivateRouter>
        } />
        <Route path="/course-player" element={
          <PrivateRouter>
            <CoursePlayer />
          </PrivateRouter>
        } />
        <Route path="/quiz" element={
          <PrivateRouter>
            <Quiz />
          </PrivateRouter>
        } />
        {/* Admin panel  */}
        <Route path="/admin/login" element={
          <PublicAdminRouter>
            <AdminLogin />
          </PublicAdminRouter>

        } />
        <Route path="/admin/dashboard" element={
          <PrivateAdminRouter>
            <Dashboard />
          </PrivateAdminRouter>
        } />
        <Route path="/admin/assignment" element={
          <PrivateAdminRouter>
            <Assignment />
          </PrivateAdminRouter>
        } />
        <Route path="/admin/assignment-mark" element={
          <PrivateAdminRouter>
            <AssignmentMark />
          </PrivateAdminRouter>
        } />
        <Route path="/admin/quizzes" element={<PrivateAdminRouter>
          <Quizzes />
        </PrivateAdminRouter>
        } />
        <Route path="/admin/videos" element={
          <PrivateAdminRouter>
            <Videos />
          </PrivateAdminRouter>
        } />
      </Routes>
    </Router>
  );
}

export default App;
