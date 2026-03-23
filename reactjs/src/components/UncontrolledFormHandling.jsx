import React, { useRef } from 'react'

const UncontrolledFormHandling = () => {
    let inputRef = useRef();

    let paraRef = useRef();

    function handleSubmit(){
        // console.log(inputRef.current.value);
        // console.log(paraRef.current.value);
        // paraRef.current.textContent={`changing para tag, but it is not recommended`}

    }
  return (
    <div>
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleSubmit}>submit</button>
        </div>
        <div>
            <p ref={paraRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eos.</p>
        </div>
    </div>
  )
}

export default UncontrolledFormHandling;