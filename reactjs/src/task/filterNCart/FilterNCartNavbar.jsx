import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterNCartNavbar = () => {
  return (
    <>
    <div className='top-0 left-0 fixed items-center h-24 flex justify-between text-xl bg-pink-300 font-semibold gap-3 '>
        <div>
        <div className='text-3xl font-bold'>Navbar</div>
        <div><NavLink>Home</NavLink></div>
        </div>
        <button><NavLink>Cart</NavLink></button>
    </div>
    </>
  )
}

export default FilterNCartNavbar