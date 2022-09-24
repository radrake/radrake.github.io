import React from 'react'
import { Link } from 'react-router-dom'

export default function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <Link to="/Ryan Drake Resume.pdf" target="_blank" download>Download Resume</Link>
      <body>
        <p>Resume here!</p>
      </body>
    </>
  )
}
