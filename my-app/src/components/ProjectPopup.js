import React from 'react'
import {Link} from 'react-router-dom'

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

export default function ProjectPopup({project, handler}) {
  return (
    <div className='popup' onClick={handler}>
        <div className='wrapper'>
            {/* <p className='wip'>WIP</p> */}
            {project.redirect && <Link className='redirect' to={project.redirect}>Check it Out!</Link>}
            <h2 className='title'>{project.title}</h2>
            <h2 className='headline'>{project.headline}</h2>
            <NewlineText className='desc' text={project.desc}/>
            {project.link && project.link_text && <a href={project.link} target="_blank" rel="noreferrer">{project.link_text}</a>}
            {/* <h3>What I learned/accomplished:</h3> */}
            {/* <NewlineText text={project.learned}/> */}
            <center><button onClick={handler}>Close</button></center>
        </div>
    </div>
  )
}
