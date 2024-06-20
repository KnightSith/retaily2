import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const goToSecondPage = () => {
    navigate('/second');
  };
  return (
    <header className="header">
      
      <div className="logo"><a href=""><img src="/images/Vector1.svg" alt="Phone" /></a>retaily</div>
      <nav className="nav">
        <a href="#">Что такое Ретейли?</a>
        <a href="#">Установить на IOS</a>
        <a href="#">Установить на Android</a>
      </nav>
      <button className="login-btn" onClick={goToSecondPage}>Войти</button>
    </header>
  );
};

export default Header;
