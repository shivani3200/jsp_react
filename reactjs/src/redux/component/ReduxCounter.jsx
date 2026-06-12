import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ReduxCounter = () => {

    const counter = useSelector((state)=>state);
    let dispatch = useDispatch();

  return (
    <>
    <h1>Counter App</h1>
    <h1>Timer : {counter.time}</h1>

    <h1>count:{counter.count}</h1>
    <button onClick={()=>dispatch({type:'INC'})}>click +1</button>
    </>
  )
}

export default ReduxCounter