import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    
    <main className="main-content">
      <div className="intro">
      <img src="/images/Group 1329.svg" alt="Group 1329.svg" className="left-image"></img>
      <img src="/images/Group 1330.svg" alt="Group 1330.svg" className="left-image2"></img>
      <img src="/images/Group 1331.svg" alt="Group 1331.svg" className="right-image"></img>
      <div className="image-container">
      <img src="/images/Group 1332.svg" alt="Group 1332" />
      <div className="text-overlay">
      <h1>Что такое Ретейли?</h1>
      </div>
      </div>
      <div className="intro">
      <div className="white-block">
        <p>Развивайте бизнес и зарабатывайте вместе с нами!</p>
        </div>
        </div>
      </div>
      <div className="info">
        <div className="info-item">
          <a href="#"><img src="/images/Group 142.svg" alt="Group 142" /></a>
          <p><span className="color">Более 400 точек</span> розничной торговли, ежедневно оформляющие заказы через мобильное приложение</p>
        </div>
        <div className="info-item">
         <a href="#"><img src="/images/Group.svg" alt="Group" /></a>
          <p>Возможность заказать товары <span className="color">у крупнейших местных производителей</span> и поставщиков на прямую без посредников</p>
        </div>
        <div className="info-item">
          <a href="#"><img src="/images/Group 1333.svg" alt="Group 1333" /></a>
          <p><span className="color">Персональный подход</span> к цифровизации системы закупок и продаж Вашего бизнеса</p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
