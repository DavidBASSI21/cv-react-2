import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import Header from '../Header/Header';
import NavbarMobile from '../Header/NavbarMobile/NavbarMobile';
import Home from '../Home/Home';
import About from '../About/About';

import './App.scss';
import Experiences from '../Experiences/Experiences';

function App() {
  // Initialise l'état à partir de localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Mettre à jour le localStorage et la classe du body quand isDarkMode change
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      {/* <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> */}
      <Home isDarkMode={isDarkMode} />
      <About />
      <Experiences />
    </div>
  );
}

export default App;
