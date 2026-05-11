import React, { useState } from 'react'

const ControlledForm = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");


    const handleName =(e)=>{
        setUserName(e.target.value);
    }

    const handleEmail =(e)=>{
        setUserEmail(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(userName);
        console.log(userEmail)
    }

    
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <h1>controlled Form</h1>
        </div>
        <div>
            <label htmlFor="uname">user name</label>
            <input type="text" id = "uname" value={userName} onChange={handleName} />
            
            
            <label htmlFor="uemail">user email</label>
            <input type="text" id = "uemail" value={userEmail} onChange={handleEmail}/>
        </div>
        <div>
            <button>submit</button>
        </div>
    </form>
    </>
  )
}

export default ControlledForm