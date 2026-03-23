import React, { useState } from "react";

const ParentChildInput2 = ({ text, handleGetData }) => {
  const [text1, setText1] = useState();

  function handleChange(e){
    const value = e.target.value
    setText1(value)
    // handleGetData(text1);

    // setText1(e.target.value)
    
  }
  function handleSendData() {
    handleGetData(text1);
  }

  return (
    <div className="h-screen text-center items-center flex justify-center ">
      <div className="text-2xl border border-gray-500 rounded-md px-10 py-4 bg-blue-200">
        <div className="mb-5 text-green-800">Child input</div>
        <input
          type="text"
          className="border border-black p-2"
          value={text1}
          onChange={handleChange}
        />
        <button
          className="btn btn-dark bg-blue-500 text-white ml-2"
          onClick={handleSendData}
        >
          submit
        </button>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default ParentChildInput2;
