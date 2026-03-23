import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoDisplay from "./TodoDisplay";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks((prev) => [...prev, newTask]);   // ✅ store here
  }
  function deleteTask(id){
    setTasks((prev)=>prev.filter((task)=>task.id!==id))
  }

  return (
    <>
      <TodoForm addTask={addTask} />
      <TodoDisplay tasks={tasks} deleteTask={deleteTask}/>
    </>
  );
};

export default TodoApp;
