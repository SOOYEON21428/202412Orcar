import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PageLayout: React.FC<{ className: string; children: React.ReactNode; }> = ({ className, children }) => {
  useEffect(() => {
    const starsContainer = document.querySelector('.stars');
    if (starsContainer) {
      starsContainer.innerHTML = ''; // 기존 별 제거
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
    <div className={className}>
      <div className="stars" />
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/intro">Intro</Link></li>
          <li><Link to="/1111">11/11</Link></li>
          <li><Link to="/hello-orcarstudio">Hello OrcarStudio</Link></li>
          <li><Link to="/challenge">Challenge</Link></li>
        </ul>
      </nav>
      <header className="header">
        {children}
      </header>
    </div>
  );
};

export default PageLayout;