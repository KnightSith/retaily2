import React from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
function SecondPage() {
  const navigate = useNavigate();

  const goToSecondPage = () => {
    navigate('/third');
  };
  const goToSecondPage1 = () => {
    navigate('/fourth');
  };
  return (
    <div className="sidebar">
      <h2>Меню</h2>
      <ul>
      <li><a onClick={goToSecondPage}>Информация</a></li>
      <li><a onClick={goToSecondPage1}>Таблица</a></li>
      </ul>
    </div>

  );
}

export default SecondPage;
