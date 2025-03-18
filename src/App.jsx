import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import StudentPage from './pages/StudentPage';
import TestPage from './pages/TestPage';
import Sidebar from './components/Dashboardcomponents/Sidebar';
import AssignmentPage from './pages/AssignmentPage';
import ResourcePage from './pages/ResourcePage';
import NewsDetail from './components/NewsResourcesComponent/NewsDetail';
import TeacherAssignment from './pages/TeacherAssignment';
import StatusPage from './pages/StatusPage';
import TeachersCommunityPage from './pages/TeachersCommunityPage';
import LoginSelection from './pages/LoginSelection';
import TeacherHomePage from './pages/TeacherHomePage';
import OverviewPage from './pages/Dashboardpages/OverviewPage';
import Chatbot from './pages/Chatbot';
import TeachersOverview from './pages/TeacherPages/TeachersOverview';
import Profile from './pages/Profile';

const App = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    navigate(selectedRole === 'teacher' ? '/teacher-home' : '/student-home');
  };

  return (
    <div className="flex h-screen w-full bg-gray-900 text-gray-100">
      {/* Hide Sidebar on the Login page ("/") */}
      {location.pathname !== '/' && <Sidebar role={role} />}

      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<LoginSelection onSelect={handleRoleSelection} />} />
          <Route path="/Stu-Dash" element={<OverviewPage />} />
          <Route path="/student-home" element={<StudentPage />} />
          <Route path="/chat-page" element={<Chatbot />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/Assignment" element={<AssignmentPage />} />
          <Route path="/Resources" element={<ResourcePage />} />
          <Route path="/news/:newsId" element={<NewsDetail />} />
          <Route path="/teacher-Assignment" element={<TeacherAssignment />} />
          <Route path="/status-page" element={<StatusPage />} />
          <Route path="/teachers-Community" element={<TeachersCommunityPage />} />
          <Route path="/teacher-home" element={<TeachersOverview />} />
          <Route path="/prev" element={<TeacherHomePage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
