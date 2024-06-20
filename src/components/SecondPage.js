import React from 'react';
import './sidebar.css';

function SecondPage() {

  return (
    <div className="sidebar">
      <h2>Меню</h2>
      <ul>
      <li><a href="/third">Информация</a></li>
      <li><a href="/fourth">Таблица</a></li>
      </ul>
    </div>

  );
}

export default SecondPage;
