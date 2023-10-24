import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Kalendarz from './calendar'; // Import komponentu Kalendarz
import Zespol from './team'; // Import komponentu Zespol


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
          <Link to="/calendar" className="tile">
            <button className="button">Kalendarz</button>
          </Link>
          <Link to="/team" className="tile">
            <button className="button">Drużyna</button>
          </Link>
          <Link to="/chat" className="tile">
            <button className="button">Chat Zespołu</button>
          </Link>
          <Link to="/stats" className="tile">
            <button className="button">Statystyki</button>
          </Link>
          <Link to="/profile" className="tile">
            <button className="button">Profil</button>
          </Link>
          <Link to="/settings" className="tile">
            <button className="button">Ustawienia</button>
          </Link>
        </div>
      </div>

    </Router>
  );
}

export default MainPage;
