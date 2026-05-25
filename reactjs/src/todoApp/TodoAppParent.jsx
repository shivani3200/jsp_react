import React, { useState } from "react";
import Form from "./Form";
import Display from "./Display";

const TodoAppParent = () => {
  
  const [taskList, setTaskList] = useState([]);

  function addTask(newTask) {
    setTaskList((prev) => [...prev, newTask]);
  }
  function deleteTask(id){
    setTaskList((prev)=>prev.filter((task)=>task.id !== id));
  }

  function handleCheckToggle(id){
    setTaskList(prev => (prev.map(task => (task.id === id)?{...task, isCompleted:!task.isCompleted}:"")))
  }
  return (
    <>
      <div className="w-1/2 m-auto mt-44">
        <Form addTask={addTask} />
        <Display taskList={taskList} deleteTask={deleteTask} handleCheckToggle={handleCheckToggle}/>
      </div>
    </>
  );
};

export default TodoAppParent;
