import React, { useState } from 'react'

const FormHandling = () => {
    const [usn , setUsn] = useState();

    function handleChange(e){
        setUsn(e.target.value);
    }
  return (
    <>
    <div className='text-center'>
        <div className='my-10'>Form Handling</div>
        <input type="text" value={usn} onChange={handleChange} className='border border-black'/>

    </div>


    </>
  )
}

export default FormHandling