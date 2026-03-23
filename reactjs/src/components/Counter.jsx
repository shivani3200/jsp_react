import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(count+1);
    }
    function handleDecrement(){
        if(count>0){
        setCount(count+1);
        }
        else{
            setCount(0);
        }
    }
    function reset(){
        setCount(0);
    }
    function five(){
        setCount(count+5);
    }
    return(
        <>
        <div className="text-center mt-3 flex flex-col align-center ">
            <h1>Count:{count}</h1>

        <button onClick={handleDecrement} className="m-1">-</button>
        <button onClick={handleIncrement} className="m-1">+</button>
        <button onClick={reset} className="m-1">reset</button>
        <button onClick={five} className="m-1">+5</button>
            
        </div>
                
        </>
    )
}
export default Counter;