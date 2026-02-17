import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import VideoBackground from './components/VideoBackground';
import Home from './components/Home';
import FormPage from './components/FormPage';
import Showcase from './components/Showcase';
import './App.css';

function AppRoutes() {
  const location = useLocation();
  const hideVideoBackground = location.pathname === '/showcase';

  return (
    <>
      {!hideVideoBackground && <VideoBackground />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
