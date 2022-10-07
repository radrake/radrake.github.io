import React from 'react'
import { Link } from "react-router-dom"

export default function Projects() {
  return (
    <>
      
      <header>
        <h1>Projects</h1>
        <p>
          This page is for showing off different projects that I have worked on! <br/>
          Any project title that is hyperlinked leads to a webpage where it can be tested instantly. <br/>
        </p>
      </header>
      <h2 class="project-type">Personal Projects</h2>
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


      <h2 class="project-type">School Projects</h2>
      <body>
        <p>
          These are projects that I worked on for school. <br/>
          I showcase the projects that were loosely defined, where most design choices were in our hands. <br/>
        </p>
        <p className="project-head">Software Engineering - Laser Tag Software</p>
        <p>
          In my software engineering class our main project for the class was making a laser tag software. <br/>
          We had to create a software which simulates player entry and running a live game of laser tag. <br/>
          For this project, most of the technical design choices were left up to the group. <br/>
          The github repository for this project can be found here: <br/>
          <a href="https://github.com/Software-Engineering-Spring-2022/Server_Code/tree/master" target="_blank" rel="noreferrer">Laser Tag Github Repo</a>
        </p>

        <p className="project-head">Capstone Project - Ponga Usage API</p>
        <p>
          As a capstone project my team worked on an API using AWS for a start-up company called Ponga. <br/>
          This project gave the team a lot of insight into how teams work in the industry. <br/> 
          We also learned a lot about working with AWS, specifically using API Gateway, Lambda, and DynamoDB. <br/>
          Learning about this project and doing research for it has helped spark a deep interest in cloud computing and AWS. <br/>
          This project is still in progress and the team is all looking forward to working on the API this year.
        </p>
      </body>


      <h2 class="project-type">Tutorial Projects</h2>
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
