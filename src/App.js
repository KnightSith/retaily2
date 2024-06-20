import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SecondPage from './components/SecondPage'; // Импортируйте компонент второй страницы
import ThirdPage from './components/ThirdPage'; // Импортируйте компонент третьей страницы
import FourthPage from './components/FourthPage'; // Импортируйте компонент четвертой страницы

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/second" element={<SecondPage />} />
            <Route path="/third" element={<ThirdPage />} /> {/* Маршрут для третьей страницы */}
            <Route path="/fourth" element={<FourthPage />} /> {/* Маршрут для четвертой страницы */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;