import React from 'react'
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Pokemon from './pages/projects/Pokemon';
import About from './pages/About';
import { Route, Routes } from "react-router-dom"

export default function MyRouter() {
  return (
    <>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/resume" element={ <Resume /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/pokemon" element={ <Pokemon />} />
        </Routes>
    </>
  )
}
