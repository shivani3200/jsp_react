import React, { useState } from 'react'

const Form = ({addTask}) => {
  const [taskInput, setTaskInput] = useState();

  function handleSubmit(){
    if(taskInput){
      let newTask={
        id:Math.floor(Math.random()*100),
        taskName: taskInput,
        isCompleted: false
      }
      addTask(newTask)
      setTaskInput("");
    }
    else{
      alert("enter valid input");
    }
  }


  return (
    <>
    <div className='mt-52 flex justify-between gap-4 p-4 border-2 border-gray-300 rounded-md bg-slate-100'>
      <input type="text" onChange={(e)=> setTaskInput(e.target.value)}   className='border border-gray-300 rounded-md p-2' placeholder="Enter a new todo..." />
      <button onClick={handleSubmit} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Add Todo</button>
    </div>
    </>
  )
}

export default Form