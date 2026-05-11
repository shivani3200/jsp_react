import React, { memo } from 'react'

const Counter = (props) => {
    const {count,children} = props;

  return (
    <div>{children} - - {count}</div>
  )
}

export default memo(Counter);