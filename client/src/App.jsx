import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Profile from './pages/Profile';
import LandingPage from './pages/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import CodeEditor from './components/CodeEditor';
import VideoBackground from './components/VideoBackground'; // ✅ Background video

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <VideoBackground /> {/* ✅ Background video only on landing */}
                <LandingPage />
              </>
            }
          />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/code-editor" element={<CodeEditor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
