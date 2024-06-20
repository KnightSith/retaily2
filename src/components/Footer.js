import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-content">
        <div className="app-info">
          <p className="footer-text"><a href="#"><img src="/images/Group 1252.svg" alt="Group 1252.png" /></a></p>
          <div className="app-links">
            <a href="#"><img src="/images/appstore.svg" alt="App Store" /></a>
            <a href="#"><img src="/images/googleplay.svg" alt="Google Play" /></a>
          </div>
        </div>
      </div>
      <div className="right-content">
      <div className="app-info">
      <div className="app-links">
        <a href="#"><img src="/images/Group 1253.png" alt="Telegram" /></a>
        <a href="#"><img src="/images/Group 1254.png" alt="VK" /></a>
        <a href="#"><img src="/images/Group 1255.png" alt="WhatsApp" /></a>
        </div>
          <div className="app-links">
          <a href="mailto:info@retaily.online"><img src="/images/Union.svg" alt="Email" /> </a>
        <span>info@retaily.online</span>
        <a href="tel:+79835315569"><img src="/images/Vector.svg" alt="Phone" /> </a>
        <span>+7 (983) 531-55-69</span>
        <span>© 2021, ООО «Ретейли», официальный сайт</span>
        <div className="logo"><a href=""><img src="/images/Vector1.svg" alt="Phone" /></a>retaily</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
