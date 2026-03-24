import React from "react";

const BookDisplay = ({ books, handleToggle,handleDelete}) => {


  return (
    <>
      <div className=" mt-4">
        {books.length === 0 ? (
          <p className="text-gray-400 text-sm text-center">No books added</p>
        ) : (
          <ol className="space-y-2">
            {books.map((ele) => (
              <li
                key={ele.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={ele.checked} onChange={()=>handleToggle(ele.id)}/>
                  <div className="text-left">
                    <p className={`font-medium ${ele.isChecked?"line-through text-gray-400":"" }`}>{ele.name}</p>
                    <p className="text-sm text-gray-500">{ele.author}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  {ele.isChecked?<div className="text-green-500">Completed</div>:<div className="text-red-500
                  ">Pending</div>}
                  <button onClick={()=>handleDelete(ele.id)}
                  className="text-red-500 hover:text-red-700">
                    ✖
                  </button>{" "}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
};

export default BookDisplay;
