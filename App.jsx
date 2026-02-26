import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Preamble from './pages/Preamble';
import FundamentalRights from './pages/FundamentalRights';
import Quiz from './pages/Quiz';
import {
  FundamentalDuties, DPSP, Amendments, Timeline,
  Discussions, AdminPanel, EducatorHub, LegalInsights
} from './pages/OtherPages';
import './App.css';

function AppInner() {
  const { activeSection } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = {
    dashboard: <Dashboard />,
    preamble: <Preamble />,
    rights: <FundamentalRights />,
    duties: <FundamentalDuties />,
    dpsp: <DPSP />,
    amendments: <Amendments />,
    timeline: <Timeline />,
    quiz: <Quiz />,
    discuss: <Discussions />,
    admin: <AdminPanel />,
    educator: <EducatorHub />,
    legal: <LegalInsights />,
  };

  return (
    <div className="app-root">
      {/* Background */}
      <div className="app-bg" aria-hidden />

      {/* Sidebar */}
      {mobileOpen && <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />}
      {!mobileOpen && <Sidebar />}
      {mobileOpen && <Sidebar mobile onClose={() => setMobileOpen(false)} />}

      {/* Main */}
      <div className="app-main">
        <Topbar onMenuClick={() => setMobileOpen(true)} />
        <main className="app-content">
          {sections[activeSection] || <Dashboard />}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}
