import React, { useEffect, useState } from 'react'

const UseEffect3 = () => {
    const [count,setCount] = useState(0);
    const [inputData, setInputData]= useState("");

    useEffect(()=>{
        document.title=`you clicked ${count} times`;
        console.log("doc title targeted")
    },[count])
  return (
    <div>
        <input type="text" value={inputData} onChange={(e)=>setInputData(e.target.value)} />
        <button onClick={()=>{setCount(count+1)}}>incre</button>
    </div>
  )
}

export default UseEffect3