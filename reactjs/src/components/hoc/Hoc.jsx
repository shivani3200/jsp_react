import React, { useState } from 'react'

const Hoc = (Wrapper) => {
    const NewComp =()=>{
        const [count, setCount] = useState(0);

        const increment =()=>{
            setCount(count=>count+1)
        }

        return <Wrapper counter={{count,increment}}/>
    }
  return NewComp
}

export default Hoc