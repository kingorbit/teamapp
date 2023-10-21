// App.js
import React, { useState } from 'react';
import PlayerLogin from './PlayerLogin';
import CoachLogin from './CoachLogin';
import './App.css';
import 'firebase/auth';
import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE0tBOZ66I-xvtlw8y6g-psjMBhdNuZ1w",
  authDomain: "teamapp-c9f0b.firebaseapp.com",
  projectId: "teamapp-c9f0b",
  storageBucket: "teamapp-c9f0b.appspot.com",
  messagingSenderId: "158818513117",
  appId: "1:158818513117:web:303d200d6f6c725f9aab34",
  measurementId: "G-T16R07PYLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  return (
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
    </div>
  );
}

export default App;
