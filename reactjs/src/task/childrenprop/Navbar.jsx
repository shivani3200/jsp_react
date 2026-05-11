import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <>
    <div className='bg-slate-200 p-2 flex justify-between '>
        <div className='text-3xl font-bold my-auto'>Navbar</div>
        <div>
            <Button>Sign Up</Button>
        </div>
    </div>
    </>
  )
}

export default Navbar