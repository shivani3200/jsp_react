import React, { useState } from "react";

const Logout = ({ handleToggle }) => {
  // const[ toggle, seToggle]=useState();

  function handleClick() {
    handleToggle();
  }
  return (
    <div className="flex flex-col justify-center text-center ">
      <div className="mb-14"> Logout</div>
      <button onClick={handleClick} className="btn bg-green-700 text-white">
        Login
      </button>
    </div>
  );
};
export default Logout;
