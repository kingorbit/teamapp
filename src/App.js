import React, { useState } from 'react';
import PlayerLogin from './components/PlayerLogin';
import CoachLogin from './components/CoachLogin';
import './App.css';
import 'firebase/auth';
import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebaseConfig';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Main from './main';
import { Routes, Route as RouteComponent, Link as RouterLink } from 'react-router-dom'; // Zmieniłem nazwę Route na RouteComponent

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <Router>
      <div className="container">
        <h1 className="title">Team App</h1>
        <div className="button-container">
          <button
            className={`profile-button ${selectedProfile === 'Zawodnik' ? 'selected' : ''}`}
            onClick={() => handleProfileSelect('Zawodnik')}
          >
            Zawodnik
          </button>
          <button
            className={`profile-button ${selectedProfile === 'Trener' ? 'selected' : ''}`}
            onClick={() => handleProfileSelect('Trener')}
          >
            Trener
          </button>
        </div>

        {selectedProfile === 'Zawodnik' && <PlayerLogin />}
        {selectedProfile === 'Trener' && <CoachLogin />}

        <RouterLink to="/main" className="main-link">
          Przejdź do Main
        </RouterLink>

        <Routes>
          <RouteComponent path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
