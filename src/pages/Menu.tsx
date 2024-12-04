import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  const [message, setMessage] = useState('잘 부탁드립니당');

  useEffect(() => {
    const starsContainer = document.querySelector('.stars');
    if (starsContainer) {
      starsContainer.innerHTML = '';
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
      }
    }

    // 3초 후에 메시지를 변경
    const timer = setTimeout(() => {
      setMessage('12월 타운홀, "신규입사자의 시선" 시작하겠습니다!');
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Menu">
      <div className="stars" />
      <header className="header">
        <h2>{message}</h2>
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/intro">Intro</Link></li>
            <li><Link to="/1111">11/11</Link></li>
            <li><Link to="/hello-orcarstudio">Hello OrcarStudio</Link></li>
            <li><Link to="/challenge">Challenge</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Menu;