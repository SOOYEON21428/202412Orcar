import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Intro from './pages/Intro';
import Page1111 from './pages/Page1111';
import HelloOrcarStudio from './pages/HelloOrcarStudio';
import Challenge from './pages/Challenge';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/1111" element={<Page1111 />} />
        <Route path="/hello-orcarstudio" element={<HelloOrcarStudio />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </Router>
  );
};

export default App;