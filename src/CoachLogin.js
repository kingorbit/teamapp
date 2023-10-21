import React, { useState } from 'react';

function CoachLogin() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  const isEmailValid = (email) => {
    // Prosta walidacja adresu email za pomocą regex
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    // Walidacja numeru telefonu, przyjmująca tylko cyfry
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Zatrzymaj domyślne zachowanie formularza

    if (firstName && lastName && email && phoneNumber) {
      if (!isEmailValid(email)) {
        setError('Nieprawidłowy adres email');
      } else if (!isPhoneNumberValid(phoneNumber)) {
        setError('Numer telefonu może zawierać tylko cyfry');
      } else {
        // Tutaj możesz dodać logikę logowania i przetwarzania danych
        // np. wysłać dane na serwer, itp.
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
          type="tel"
          placeholder="Numer telefonu"
          value={phoneNumber}
          onChange={(e) => {
            // Walidacja numeru telefonu jako liczby
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
