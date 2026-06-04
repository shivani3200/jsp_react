import React, { useReducer } from 'react'
import CountReducer from './CountReducer'

const UseReducerCounter = () => {
    let initialState = {count:0}

    const [counter, dispatch] = useReducer(CountReducer,initialState);
  return (
    <>
    <h1 className='text-xl'>Count App</h1>
    <h1 className='text-xl'>Count:{counter.count}</h1>

    <button onClick={()=>{dispatch({type:'INCBY1'})}} className='bg-yellow-400 px-4 py-1 m-2'>+1</button>
    <button onClick={()=>{dispatch({type:'INCBY2'})}} className='bg-pink-400 px-4 py-1 m-2'>+2</button>
    <button onClick={()=>{dispatch({type:'INCBY5'})}} className='bg-green-400 px-4 py-1 m-2'>+5</button>
    <button onClick={()=>{dispatch({type:'INCBY10'})}} className='bg-blue-400 px-4 py-1 m-2'>+10</button>
    <button onClick={()=>{dispatch({type:'RESET'})}} className='bg-red-400 px-4 py-1 m-2'>Reset</button>

    </>
  )
}

export default UseReducerCounter