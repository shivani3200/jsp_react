import React, { useEffect, useState } from 'react'

const ClearInterval = () => {
    const [counter,setCounter] = useState(0);

    useEffect(()=>{
        let count = 0;
        let intervalID = setInterval(()=>{
            count++;
            setCounter(count);
            console.log(count);
        },1000) 


        return ()=>{
            console.log('im a being removed');
            clearInterval(intervalID)
        }

    },[]);

  return (
    <>
    <h1>Timer page</h1>
    <h2>Counter: {counter}</h2>
    </>
  )
}

export default ClearInterval