import React, { useState, useEffect } from 'react'
import axios from 'axios'

const basePageURL = 'https://ps1cypv2rf.execute-api.us-east-1.amazonaws.com/test/helloworld'

export default function Form() {
  const [message, setMessage] = useState("Press the button to get a message from the API!")
  const [submit, setSubmit] = useState({name: '', city: ''})
  const [error, setError] = useState(null)
  const [pageURL, setPageURL] = useState(basePageURL)

  // function callAPI() {
  //   console.log(pageURL)
  //   axios.get('https://ps1cypv2rf.execute-api.us-east-1.amazonaws.com/test/helloworld?name=Ryan&city=Fay').then(response => {
  //     setMessage(response.data.message)
  //   }).catch(error => {
  //     setError(error)
  //   })
  // }

  function callAPI(event) {
    event.preventDefault()
    console.log(pageURL)
    axios.get(pageURL).then(response => {
      console.log(response.data.message)
      setMessage(response.data.message)
    }).catch(error => {
      console.log(error)
      setError(error)
    })
  }

  function handleName(event) {
    setSubmit({...submit, name: event.target.value})
  }

  function handleCity(event) {
    setSubmit({...submit, city: event.target.value})
  }

  useEffect(() => {
    if(submit.name !== '' && submit.city !== '')
      setPageURL(basePageURL + '?name=' + submit.name + '&city=' + submit.city)
    else
      setPageURL(basePageURL)
  }, [submit])

  if (error) return `Error: ${error.message}`;

  return (
    <>
      <form onSubmit={callAPI}>
        <label>
          <p>Message: {message}</p>
          <div>
            Name:
            <input type='text' value={submit.name} onChange={handleName} />
          </div>
          <div>
            City: 
            <input type='text' value={submit.city} onChange={handleCity} />
          </div>
          <input type='submit' value='Submit'/>
        </label>
      </form>
    </>
  )
}
