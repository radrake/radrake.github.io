import React, { useState } from 'react'

export default function Playground() {
const [thing, setThing] = useState({images: ['image1', 'image2', 'image3'], index: 0})

  function thingHandler() {
    setThing(prevThing => {
      return {...prevThing, index: (prevThing.index+1)%prevThing.images.length}
    })
    console.log(thing)
  }
  return (
    <>
        {thing.images[thing.index]}
        <button onClick={thingHandler}>Press</button>
    </>
  )
}
