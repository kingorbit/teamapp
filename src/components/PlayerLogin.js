import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import firebaseConfig from '../firebaseConfig';



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function PlayerLogin() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
  
    if (
      !firstName ||
      !lastName ||
      !age ||
      !position ||
      !teamCode ||
      !email ||
      !phoneNumber
    ) {
      setError('Wszystkie pola są obowiązkowe');
    } else if (!isEmailValid(email)) {
      setError('Nieprawidłowy adres email');
    } else if (!isPhoneNumberValid(phoneNumber)) {
      setError('Numer telefonu może zawierać tylko cyfry');
    } else {
      const playerData = {
        firstName,
        lastName,
        age,
        position,
        teamCode,
        email,
        phoneNumber,
      };
  
      try {
        const docRef = await addDoc(collection(db, 'players'), playerData);
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
        setError('Wystąpił błąd podczas zapisywania danych.');
      }
    }
  };
  

  return (
    <div className="player-login-container">
      <h2>Formularz logowania dla zawodnika</h2>
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
          type="text"
          placeholder="Wiek"
          value={age}
          onChange={(e) => {
            const newValue = e.target.value;
            if (/^\d*$/.test(newValue) || newValue === '') {
              setAge(newValue);
            }
          }}
          className="player-input"
        />
        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="player-input"
        >
          <option value="">Wybierz pozycję</option>
          <option value="Napastnik">Napastnik</option>
          <option value="Pomocnik">Pomocnik</option>
          <option value="Obronca">Obronca</option>
          <option value="Bramkarz">Bramkarz</option>
        </select>
        <input
          type="text"
          placeholder="Kod drużyny"
          value={teamCode}
          onChange={(e) => setTeamCode(e.target.value)}
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

export default PlayerLogin;
