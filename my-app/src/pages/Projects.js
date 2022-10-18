import React from 'react'
import { Link } from "react-router-dom"

/*
  Project ideas:
  - Snake game + potential AI
  - Basic form with API for AWS API Gateway, Lambda, DynamoDB practice
*/

export default function Projects() {
  return (
    <>
      <header>
        <h1>Projects</h1>
      </header>
      <div className="info-box">
        <h2 className="project-type">Personal Projects</h2>
        <section>
          <h3 className="project-head"><Link to="/formapi">Form API</Link></h3>
          <p>
            I started this project to help prepare for my capstone project, which uses AWS Lambda, API Gateway, and DynamoDB.
            To practice, I learned how to create a basic form in React and ran a GET call from the API using Axios.
            The API I created is a REST API which triggers a lambda function that simply returns a message.
            This project is a work in progress - more functionality will be added as I further look into these services.
          </p>
        </section>

        <h2 className="project-type">School Projects</h2>
        <section>
          <h3 className="project-head">Software Engineering - Laser Tag Software</h3>
          <p>
            In my software engineering class our main project for the class was making a laser tag software.
            We had to create a software which simulates player entry and running a live game of laser tag.
            For this project, most of the technical design choices were left up to the group.
            The github repository for this project can be found here: <br/>
            <a href="https://github.com/Software-Engineering-Spring-2022/Server_Code/tree/master" target="_blank" rel="noreferrer">Laser Tag Github Repo</a>
          </p>

          <h3 className="project-head">Capstone Project - Ponga Usage API</h3>
          <p>
            As a capstone project my team worked on an API using AWS for a start-up company called Ponga.
            This project gave the team a lot of insight into how teams work in the industry.
            We also learned a lot about working with AWS, specifically using API Gateway, Lambda, and DynamoDB.
            Learning about this project and doing research for it has helped spark a deep interest in cloud computing and AWS.
            This project is still in progress and the team is all looking forward to working on the API this year.
          </p>
        </section>

        <h2 className="project-type">Tutorial Projects</h2>
        <section>

          <h3 className="project-head"><Link to="/pokemon">PokeAPI - Pokedex</Link></h3>
          <p>
            In this project, I learned how to fetch APIs and got more practice using React hooks.
            It is a very simple project which lets you scroll through a list of pokemon.
            I followed this Web Dev Simplified tutorial: <br/>
            <a href="https://www.youtube.com/watch?v=o3ZUc7zH8BE" target="_blank" rel="noreferrer">Build A Pokémon Application With React - Tutorial</a>
          </p>

          <h3 className="project-head">Navbar (The one used for this website!)</h3>
          <p>
            In this project, I learned how to add a navbar to a website and route between pages seemlessly using React Router.
            React Router has become an essential part of this entire website, even allowing the projects in this page to be showed off with ease!
            I followed this Web Dev Simplified tutorial: <br/>
            <a href="https://www.youtube.com/watch?v=SLfhMt5OUPI" target="_blank" rel="noreferrer">How To Create A Navbar In React With Routing</a>
          </p>
        </section>
      </div>
    </>
  )
}
