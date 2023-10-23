import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';

function CoachLogin() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Dodane pole hasła
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  const db = getDatabase();

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (firstName && lastName && email && password && phoneNumber) {
      if (!isEmailValid(email)) {
        setError('Nieprawidłowy adres email');
      } else if (!isPhoneNumberValid(phoneNumber)) {
        setError('Numer telefonu może zawierać tylko cyfry');
      } else {
        const coachesRef = ref(db, 'coaches');
        push(coachesRef, {
          firstName,
          lastName,
          email,
          password, // Dodane pole hasła
          phoneNumber,
        }).then(() => {
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword(''); // Wyczyszczenie pola hasła
          setPhoneNumber('');
          setError(null);
        });
      }
    } else {
      setError('Wszystkie pola są obowiązkowe');
    }
  };

  return (
    <div className="player-login-container">
      <h2>Formularz logowania dla trenera</h2>
      <form className="player-login-form">
        <input
          type="text"
          placeholder="Imię"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="player-input"
        />
        <input
          type="text"
          placeholder="Nazwisko"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="player-input"
        />
        <input
          type="email"
          placeholder="Adres email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="player-input"
        />
        <input
          type="password" // Zmiana typu na "password" dla pola hasła
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="player-input"
        />
        <input
          type="tel"
          placeholder="Numer telefonu"
          value={phoneNumber}
          onChange={(e) => {
            const newValue = e.target.value;
            if (/^\d*$/.test(newValue) || newValue === '') {
              setPhoneNumber(newValue);
            }
          }}
          className="player-input"
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin} className="login-button">
          Zaloguj
        </button>
      </form>
    </div>
  );
}

export default CoachLogin;
