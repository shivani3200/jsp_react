import React, { useState } from "react";

const FormHandling2 = () => {
  const [input, setInput] = useState({
    pwd: "",
    usn: "",
    email: "",
    radio:""
  });

  function handleInput(e) {
    let { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <>
      <div className="rounded-lg m-auto text-xl w-96 bg-green-50">
        <div className="rounded-lg m-auto text-center flex flex-col justify-center text-xl w-96 p-4">
          FormHandling2
          <input
            type="text"
            placeholder="username"
            name="usn"
            value={input.usn}
            onChange={handleInput}
            className="border border-e-red-400"
          />
          <input
            type="password"
            placeholder="password"
            name="pwd"
            value={input.pwd}
            onChange={handleInput}
            className="border border-e-red-400"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={input.email}
            onChange={handleInput}
            className="border border-e-red-400"
          />
          {/* <div className="text-left">
            <input
              type="radio"
              placeholder="email"
              name="email"
              value={input.radio}
              onChange={handleInput}
              className="border border-e-red-400"
            />
            <span>radio</span>
          </div> */}
        </div>
        <div>
            <h1>{JSON.stringify(input)}</h1>
        </div>
      </div>
    </>
  );
};

export default FormHandling2;
