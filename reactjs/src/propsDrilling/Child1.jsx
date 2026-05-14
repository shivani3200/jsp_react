import React from 'react'
import Child2 from './Child2'

const Child1 = ({nameList}) => {
  return (
    <div>
        <Child2 nameList={nameList}/>
    </div>
  )
}

export default Child1