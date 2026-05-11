import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef();
    console.log(inputRef)

    const handleInput =() =>{
        inputRef.current.placeholder = "enter name"
        inputRef.current.style.background = "yellow"
        inputRef.current.style.padding = "30px"
        inputRef.current.focus();
    }
  return (
    <>
    <input type="text" ref = {inputRef}/>
    <button onClick={handleInput}>change</button>
    </>
  )
}

export default UseRef