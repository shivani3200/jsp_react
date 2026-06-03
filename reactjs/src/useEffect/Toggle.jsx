import React, { useState } from 'react'
import ClearInterval from './ClearInterval';

const Toggle = () => {
    const [isShow, setIsShow] = useState(false);

  return (
    <>
    <h1 className='text-5xl'>Toggle page</h1>
    <button onClick={()=>setIsShow(!isShow)} className='bg-green-400 px-4 py-1 m-4 rounded-md'>{isShow?'Hide':'show'}</button>
    {isShow && <ClearInterval/>}
    </>
  )
}

export default Toggle