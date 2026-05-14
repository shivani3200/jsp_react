import React from 'react'
import Child1 from './Child1'

const PropsDrillingParent = () => {
    
    let nameList = ["shivani","kumari","ashu","helen","xylom"]
  return (
    <div>
        <Child1 nameList ={nameList}/>
    </div>
  )
}

export default PropsDrillingParent