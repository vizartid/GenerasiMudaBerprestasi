import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Achievements from './pages/Achievements';
import NewsDetail from './pages/NewsDetail';
import './styles/GMBLandingPage.css';
import './styles/additional.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<Navigate to="/" replace />} />
            <Route path="activities" element={<Activities />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="news/:id" element={<NewsDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;