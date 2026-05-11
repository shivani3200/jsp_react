import React from 'react'
import Hoc from './Hoc';

const CompB = (props) => {
    const {counter : {count, increment}}=props;

  return (
    <>
    <h1>CompB - {count}</h1>
    <button onMouseMove={increment}>increment the value by cursor movement</button>
    </>
  )
}

export default Hoc(CompB)