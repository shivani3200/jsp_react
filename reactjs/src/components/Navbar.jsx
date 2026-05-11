import React, { useContext } from "react";
import Button from "./Button";
import ThemeContext from "../utils/ThemeContext";

function Navbar({ userList, taskList }) {

  let {isLogin} = useContext(ThemeContext);


  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center px-6 py-3 shadow-md">
      <div className="text-xl font-bold">MyApp</div>
      <div className="font-bold text-xl">
        <Button text={"total user"} color="bg-red-500">
          {userList.length}
        </Button>
        <Button text={"total task"} color="bg-yellow-500">
          {taskList}
        </Button>

        <Button>{isLogin?"Logout":"Login"}</Button>
      </div>
    </nav>
  );
}
export default Navbar;
