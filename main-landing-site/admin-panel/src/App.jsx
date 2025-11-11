import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavState from './context/navState';
import Layout from './components/Layout';
import UserInfo from './pages/UserInfo';
import MainPage from './pages/MainPage';
import Application from './pages/Application';
import Dashboard from './pages/Dashboard';
import UserPanel from './pages/UserPanel';
import ApplicationsPanel from './pages/ApplicationsPanel';
import LoginSettings from './pages/LoginSettings';


function App() {
  return (
    <NavState>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />

            <Route path="main" element={<MainPage />} />
            <Route path="application" element={<Application />} />
            <Route path="userInfo" element={<UserInfo />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="user-panel" element={<UserPanel />} />
            <Route path="application-panel" element={<ApplicationsPanel />} />
            <Route path="login-settings" element={<LoginSettings />} />
          </Route>
        </Routes>
      </Router>
    </NavState>
  );
}

export default App;