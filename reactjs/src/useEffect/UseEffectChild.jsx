import React, { useEffect } from 'react'

const UseEffectChild = () => {
    useEffect(()=>{
        return () =>{
            console.log("child unmount")
        }
    },[])

  return (
    <div>UseEffect - Child</div>
  )
}

export default UseEffectChild