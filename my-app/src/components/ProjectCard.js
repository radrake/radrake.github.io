import React from 'react'

export default function ProjectCard({item, handler}) {
  return (
    <div>
        <button className='card' onClick={handler} name={item.title}>
            <h2 className='unclick'>{item.title}</h2>
            <h3 className='unclick'>{item.headline}</h3>
            <p className='unclick line-clamp'>{item.desc}</p>
        </button>
    </div>
  )
}
