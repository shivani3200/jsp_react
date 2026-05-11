import React from 'react'
import Hoc from './Hoc';

const CompA = (props) => {
    const {counter:{count,increment}}=props;

  return (
    <>
    <h1>compA -   {count}</h1>
    <button onClick={increment}>increment the value by btn click</button>
    </>
  )
}

export default Hoc(CompA)