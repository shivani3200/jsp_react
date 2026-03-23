import React, { useState } from "react";

const TodoForm = ({addTask}) => {
  const [task, setTask] = useState("");

  function handleAddTask() {
    if (task.length > 0) {
      let newTask = {
        id: Math.trunc(Math.random() * 100),
        name: task,
        checked: false,
      };
    //   setTask((prev) => [...prev, newTask]);
      addTask(newTask);
            setTask("");

    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="text-2xl text-blue-700 m-10">Todo Form</div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="input-group">
                <input type="text p-2" className="form-control" value={task} onChange={(e)=>setTask(e.target.value)}/>
                <button
                  className="btn btn-success rounded-md px-4 py-2 "
                  onClick={handleAddTask}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
