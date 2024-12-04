import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleYesClick = () => {
    navigate('/menu');
  };

  useEffect(() => {
    const starsContainer = document.querySelector('.stars');
    if (starsContainer) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
      }
    }
  }, []);

  return (
    <div className="App">
      <div className="stars" />
      <div className="rainbow" />
      <header className="header">
        <h1 className="title">Hello OrcarStudio!</h1>
        {showPrompt && (
          <div className="prompt">
            <p>시작하시겠습니까?</p>
            <div className="button-container">
              <button className="button" onClick={handleYesClick}>Yes</button>
              <button className="button" onClick={handleYesClick}>Yess</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Home;