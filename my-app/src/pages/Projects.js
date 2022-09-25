import React from 'react'
import { Link } from "react-router-dom"

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <h2>Personal Projects</h2>
      <body>
        <p>
          These are projects that I personally created without a tutorial. <br/>
          I showcase the kinds of projects I am interested in as well as simple resume projects.
        </p>
        <p className="project-head">Insert project here!</p>
        <p>
          A project will go here once I decide to add one here!
        </p>
      </body>


      <h2>School Projects</h2>
      <body>
        <p>
          These are projects that I worked on for school. <br/>
          I showcase the projects that were loosely defined, where most design choices were in our hands. <br/>
        </p>
        <p className="project-head">Insert project here!</p>
        <p>
          A project will go here once I decide to add one here!
        </p>
      </body>


      <h2>Tutorial Projects</h2>
      <body>
        <p>
          These are projects that I created by following a tutorial online. <br/>
          I showcase these so that you can see what kind of things I have been trying to learn.
        </p>

        <p className="project-head"><Link to="/pokemon">PokeAPI - Pokedex</Link></p>
        <p>
          In this project, I learned how to fetch APIs and got more practice using React hooks. <br/>
          It is a very simple project which lets you scroll through a list of pokemon. <br/>
          I followed this Web Dev Simplified tutorial: <br/>
          <a href="https://www.youtube.com/watch?v=o3ZUc7zH8BE" target="_blank" rel="noreferrer">Build A Pokémon Application With React - Tutorial</a>
        </p>

        <p className="project-head">Navbar (The one used for this website!)</p>
        <p>
          In this project, I learned how to add a navbar to a website and route between pages seemlessly using React Router. <br/>
          React Router has become an essential part of this entire website, even allowing the projects in this page to be showed off with ease! <br/>
          I followed this Web Dev Simplified tutorial: <br/>
          <a href="https://www.youtube.com/watch?v=SLfhMt5OUPI" target="_blank" rel="noreferrer">How To Create A Navbar In React With Routing</a>
        </p>
      </body>
    </>
  )
}
