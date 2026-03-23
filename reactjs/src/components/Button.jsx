import React from 'react'

const Button = ({text,color,children}) => {
  return (<>
      <button className={`rounded-md shadow-md px-2 py-1 m-2 ${color}`}>{text}</button>
      <span>{children}</span>
  </>
  )
}

export default Button;