import React from "react";

const Login = ({ handleToggle }) => {
  // const[ toggle, seToggle]=useState();

  function handleClick() {
    handleToggle();
  }
  
  return (
    <div className="flex flex-col justify-center text-center h-auto">
      <div className=" mx-14"> Login</div>
      <button onClick={handleClick} className="btn bg-red-700 text-white">
        Logout
      </button>
    </div>
  );
};

export default Login;
