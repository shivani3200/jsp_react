import React, { use, useState } from "react";
import ParentChildInput2 from "./ParentChildInput2";

const ParentChildInput = () => {
  const [text, setText] = useState("");
  const [childText, setCHildText] = useState("");
  const [submit, setSubmit] = useState("");

  function handleClick() {
    // setSubmit(text);
  }

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleGetData(data) {
    setCHildText(data);
  }
  
  return (
    <div className="h-screen text-center items-center flex justify-center">
      <div className="text-2xl border border-gray-500 rounded-md px-10 py-4 bg-red-100 mr-3 ">
        <div className="mb-5 text-red-800">Parent input</div>
        <input
          type="text"
          className="border border-black p-2"
          value={text}
          onChange={handleChange}
        />
        <button
          className="btn btn-dark bg-blue-500 text-white ml-2"
          onClick={handleClick}
        >
          submit
        </button>
        <div>{childText}</div>
      </div>
      <ParentChildInput2 text={text} handleGetData={handleGetData} />
    </div>
  );
};

export default ParentChildInput;
