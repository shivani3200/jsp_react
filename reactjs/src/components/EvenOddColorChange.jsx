import React, { useState } from 'react'

const EvenOddColorChange = () => {

    const [count,setCount] = useState(0);

      function handleIncrement(){
        setCount(count+1);
    }
    function handleDecrement(){
        if(count>0){
        setCount(count-1);
        }
        else{
            setCount(0);
        }
    }
return (
<div className="flex items-center justify-center h-screen">
<div className={`flex flex-col items-center h-52 w-52 border ${count % 2 === 0 ? "bg-red-500" : "bg-green-500"}`}>
      <h1>Count:{count}</h1>

      <button onClick={handleDecrement} className="m-1">-</button>
      <button onClick={handleIncrement} className="m-1">+</button>
    </div>
  </div>
);

}

export default EvenOddColorChange;