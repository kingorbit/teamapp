import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kalendarz from './calendar'; // Import komponentu Kalendarz
import Zespol from './team';
import Chat from './chat';
import Statystyki from './stats';
import Profil from './profile';
import Ustawienia from './settings';

function MainPage() {
  const userName = 'Jacob Fludrich'; // Zastąp tym swoim imieniem i nazwiskiem

  const handleLogout = () => {
    // Dodaj obsługę wylogowania
  };

  return (
    <Router>
      <div className="main-page">
        <div className="user-profile">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <span className="user-name">{userName}</span>
          <button className="logout-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Wyloguj
          </button>
        </div>
        <h1 className="title">Team App</h1>
        <div className="tile-container">
          <Link to="/kalendarz" className="tile">
            <button className="button">Kalendarz</button>
          </Link>
          <Link to="/druzyna" className="tile">
            <button className="button">Drużyna</button>
          </Link>
          <Link to="/chat-zespolu" className="tile">
            <button className="button">Chat Zespołu</button>
          </Link>
          <Link to="/statystyki" className="tile">
            <button className="button">Statystyki</button>
          </Link>
          <Link to="/profil" className="tile">
            <button className="button">Profil</button>
          </Link>
          <Link to="/ustawienia" className= "tile">
            <button className="button">Ustawienia</button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/calendar" element={<Kalendarz />} />
        <Route path="/team" element={<Zespol />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/stats" element={<Statystyki />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/settings" element={<Ustawienia />} />

      </Routes>
    </Router>
  );
}

export default MainPage;
