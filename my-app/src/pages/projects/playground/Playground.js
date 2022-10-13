import React, { useState } from 'react'
import Popup from 'reactjs-popup'

export default function Playground() {
  const [popup, setPopup] = useState(false);

  function popupHandler() {
    setPopup(prevPop => !prevPop)
  }

  const PopupExample = () => (
  <Popup open={popup} modal>
  {() => ( 
    <>
      <button onClick={() => {
        setPopup(false)
        console.log('close')
      }}>
        close
      </button>
    </>
  )}
</Popup>
  );
  return (
    <>
        {/* {thing.images[thing.index]} */}
        <button onClick={popupHandler}>Press</button>
        <PopupExample />
    </>
  )
}
