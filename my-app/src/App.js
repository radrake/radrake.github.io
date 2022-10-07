import React from 'react'
import Navbar from './Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Pokemon from './pages/Pokemon';
import About from './pages/About';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/resume" element={ <Resume /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/pokemon" element={ <Pokemon />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
