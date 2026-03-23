import React from "react";

const TodoDisplay = ({ tasks,deleteTask }) => {
 
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 m-auto text-center">
            <ol className="list-group text-lg">
              {
                tasks.map((task) => (
                  <li 
                    className="border border-black m-2 flex justify-between items-center px-3 py-2"
                    key={task.id}
                  >
                    <div>
                      <input type="checkbox" className="mr-2" />
                      {task.name}
                    </div>
                    <button className="btn text-2xl text-red-600 cursor-pointer" onClick={()=>deleteTask(task.id)}>
                      X
                    </button>
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDisplay;
