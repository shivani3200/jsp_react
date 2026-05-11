import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    //? passing a para to a func, that func if we pass as a value for any event in such case para holds SBE
    //event (onSubmit) - synthetic based event(SBE)

    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <h1>Uncontrolled Form</h1>
        </div>
        <div>
            <label htmlFor="uname">username</label>
            <input type="text" id = "uname" ref ={nameRef}/>
            
            
            <label htmlFor="uemail">username</label>
            <input type="text" id = "uemail" ref ={emailRef}/>
        </div>
        <div>
            <button>submit</button>
        </div>
    </form>
    </>
  )
}

export default UncontrolledForm