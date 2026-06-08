import React, { useState } from 'react';
import './Register.css';

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    if (email && password) {
      onRegister();
      alert('Регистрация прошла успешно! Теперь войдите');
    }
  };

  return (
    <div className='auth-page'>
      <div className='auth-container'>
        <div className='auth-card'>
          <h1>РЕГИСТРАЦИЯ</h1>
          <p className='auth-subtitle'>Создайте аккаунт VOGUE STUDIO</p>

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
            <input
              type='password'
              placeholder='ПОДТВЕРДИТЕ ПАРОЛЬ'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type='submit' className='auth-submit'>
              ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
          </form>

          <div className='auth-links'>
            <button onClick={onRegister}>УЖЕ ЕСТЬ АККАУНТ? ВОЙТИ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
