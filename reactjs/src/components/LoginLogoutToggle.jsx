import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

const LoginLogoutToggle = () => {
  const [isLogin, setIsLogin] = useState(true);

  function handleToggle() {
    setIsLogin(!isLogin);
  }

  return (
    <div className="flex justify-center text-center text-2xl h-screen">
      <div className="bg-yellow-200 w-96 h-96 rounded">
        {isLogin ? (
          <Login handleToggle={handleToggle} />
        ) : (
          <Logout handleToggle={handleToggle} />
        )}
      </div>
    </div>
  );
};

export default LoginLogoutToggle;
