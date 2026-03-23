import React, { useState } from 'react'
import Child from './Child';

function Parent() {

    const [city, setCity] = useState('');

    function handleGetData(data){
        setCity(data);
    }
  return (
    <div>
        <h1>parent</h1>
        <h1>{city}</h1>
        <div>
            <Child handleGetData={handleGetData}/>
        </div>
    </div>
  )
}

export default Parent