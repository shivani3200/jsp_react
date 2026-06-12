import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPageCard = ({usersList}) => {
  
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userName:'',
    password:''
  });



    function handleLogin(){
      console.log(form)

     
        
    }

  return (
    <div className='flex flex-col justify-center items-center mt-16 '>
        <div className=' h-96 w-80 flex flex-col text-center items-center shadow-lg rounded-lg gap-2 p-3'>
            <h1 className='text-2xl font-bold'>Login Page</h1>
            <input type='text' onChange={(e)=>{setForm({...form, userName:e.target.value})}} name='userName' placeholder='@username' className='p-2 my-2 w-full bg-slate-50 rounded-xl '/ >
            <input type='password' onChange={(e)=>setForm({...form, password:e.target.value})} name='password' placeholder='password' className='p-2 my-2 w-full bg-slate-50 rounded-xl '/>
            <button onClick={handleLogin} className='bg-blue-400 px-2 py-2 my-4 w-full rounded-lg font-bold'>Login</button>
        </div>
    </div>
  )
}

export default LoginPageCard