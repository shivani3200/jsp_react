import React from 'react'

const Button = ({children, color='green'}) => {
    const colorClass={
        green:"bg-green-400",
        red:"bg-red-400",
        blue:"bg-blue-300",
        yellow:"bg-yellow-400"
    }
  return (
    <div>
        <button className={`${colorClass[color]} text-white px-4 py-2 rounded-lg m-2`}>{children}</button>
    </div>
  )
}

export default Button