import React, { useState } from 'react'

const RandomColorBG = () => {
  const [color, setColor] = useState("yellow");

  function handleClick() {
    setColor(`rgb(${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)},${Math.trunc(Math.random()*255)})`)
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-48 w-48 flex items-center justify-center" style={{ backgroundColor: color }}>
        <button onClick={handleClick}>Change Color</button>
      </div>
    </div>
  )
}

export default RandomColorBG;
