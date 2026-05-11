import React, { useEffect, useState } from 'react'
import UseEffectChild from './UseEffectChild';

const UseEffectParent = () => {
    const [inst, setInst] = useState("jsp");
    const [tech,setTech] = useState("webtech");

    //only function,when we do any changes to any part of comp
    useEffect( () =>{
      console.log("equal to compdidmount,compdidupdate")
    });

    //empty dependency list, executes only once
    useEffect( () =>{
            console.log("equal to compdidmount")

    },[]);

    //executes only when we do any changes to passed value
    useEffect( () =>{
            console.log("equal to compdidupdate")

    },[inst]);


  return (
<>
<h1>{inst}</h1>
<h1>{tech}</h1>

{inst==="jsp"?<UseEffectChild/>:<></>}
<button onClick={()=>{setInst("qsp")}}>inst  </button>
<button onClick={()=>{setTech("teact")}}>tech </button>

</>  )
}

export default UseEffectParent