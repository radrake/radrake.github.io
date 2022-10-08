import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar({ toggle }) {  
  return (
    <nav className="nav">
        <Link to="/" className="site-title">Ryan's Website</Link>
        <ul>
            <CustomLink to="/resume">Resume</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            {/* <button className='theme-button' onClick={toggle}>Theme (WIP)</button> */}
        </ul>
    </nav>
  )
}

function CustomLink({ to, children,  ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}