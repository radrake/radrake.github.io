import React from 'react'
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Pokemon from './pages/projects/pokeapi/Pokemon';
import About from './pages/About';
import Error404 from './pages/Error404'
import { Route, Routes } from "react-router-dom"
import Playground from './pages/Playground';

export default function MyRouter() {
  return (
    <>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/*" element={ <Error404 />} />
          <Route path="/resume" element={ <Resume /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/pokemon" element={ <Pokemon />} />
          <Route path="/playground" element={ <Playground />} />
        </Routes>
    </>
  )
}
