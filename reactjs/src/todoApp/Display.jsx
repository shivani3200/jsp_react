import React from "react";

const Display = ({ taskList, deleteTask, handleCheckToggle }) => {
  return (
    <>
      <div>
        {taskList.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center border-2 border-gray-300 rounded-md p-2 my-2"
          >
            <div className="flex gap-2 items-center">
              <input type="checkbox" checked={task.isCompleted} onChange={()=>{handleCheckToggle(task.id)}}/>
              <span className={task.isCompleted ? "line-through text-red-500" : ""}>
                {task.taskName}
              </span>
            </div>
            <button onClick={()=> deleteTask(task.id)} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600  ">
              {" "}
              X{" "}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
