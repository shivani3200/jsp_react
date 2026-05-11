import React, { useEffect, useState } from 'react'

const UseEffectParent2 = () => {

    const [toggle, setToggle] = useState(false);
    useEffect(()=>{
        if(toggle){
            document.title ="react js"
        }
        else{
            document.title = "web tech"
        }

        console.log("title targetted useEffect calling")
    })


  return (
    <div>
        <button onClick={()=>{setToggle(!toggle)}}>toggle</button>
    </div>
  )
}

export default UseEffectParent2