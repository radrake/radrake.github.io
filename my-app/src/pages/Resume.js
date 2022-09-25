import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MyDocument from '../components/MyDocument'
import MyResume from '../components/MyResume'

export default function Resume() {

  const [resumeLoader, setResumeLoader] = useState({loader: <MyDocument />, text: "Show with HTML"})
  const [loadedPDF, setLoadedPDF] = useState(true)

  function switchLoadedResume() {
    if(loadedPDF){
      setResumeLoader({loader: <MyResume />, text: "Show with React-PDF"})
      setLoadedPDF(false)
    }
    else{
      setResumeLoader({loader: <MyDocument />, text: "Show with HTML"})
      setLoadedPDF(true)
    }
  }

  return (
    <>
      <h1>Resume</h1>
      <Link to="/Ryan Drake Resume.pdf" target="_blank" download>Download Resume</Link>
      <div className='resume-button'>
        <button onClick={switchLoadedResume}>{resumeLoader.text}</button>
      </div>
      {resumeLoader.loader}
    </>
  )
}
