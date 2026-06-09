import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin, onRegister, isDarkMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
      alert('Вход выполнен успешно!');
    } else {
      alert('Введите email и пароль');
    }
  };

  return (
    <div className={`auth-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='auth-container'>
        <div className='auth-card'>
          <h1>ВХОД</h1>
          <p className='auth-subtitle'>Добро пожаловать в VOGUE STUDIO</p>

          <form onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='EMAIL'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='ПАРОЛЬ'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type='submit' className='auth-submit'>
              ВОЙТИ
            </button>
          </form>

          <div className='auth-links'>
            <a href='#'>ЗАБЫЛИ ПАРОЛЬ?</a>
            <button onClick={onRegister}>
              НЕТ АККАУНТА? ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
          </div>

          <div className='auth-demo'>
            <p>DEMO: admin@vogue.com / 123456</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
