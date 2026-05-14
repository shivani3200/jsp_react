import React from 'react'

const Message = () => {
    const handleClick =()=>{
        console.log("hello");
    }
    const handleParameterizedClick=(sname)=>{
        console.log(`hello ${sname}`)
    }

  return (
    <div>
        <button onClick={handleClick}>click</button>
        <button onClick={()=>{
            handleParameterizedClick("tom")
        }}>para</button>
    </div>
  )
}

export default Message;