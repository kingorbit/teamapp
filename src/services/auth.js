import React, { useState } from 'react';

function LoginForm({ setIsLoggedIn }) {
  // Tutaj możesz dodać obsługę logowania

  const handleLogin = () => {
    // Tutaj dodać logikę logowania
    // Jeśli logowanie jest poprawne, ustaw `isLoggedIn` na `true`
    setIsLoggedIn(true);
  };

  return (
    <div className="login-form">
      {/* Formularz logowania */}
      <button onClick={handleLogin}>Zaloguj</button>
    </div>
  );
}

export default LoginForm;
