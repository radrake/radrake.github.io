import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Pokemon from './pages/Pokemon';
import About from './pages/About';
import Error404 from './pages/Error404';
import { Route, Routes } from "react-router-dom"

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    console.log(theme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className='app' data-theme={theme}>
      <Navbar toggle={ toggleTheme }/>
      <div className='container'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/resume" element={ <Resume /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/pokemon" element={ <Pokemon />} />
          <Route path="/*" element={ <Error404 /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
