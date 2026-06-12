import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName, removeName } from "../slices/UserSlice";

const User = () => {
  const user = useSelector((state) => state.UserSlice.name); //subscribing store
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleAdd = () => {
    dispatch(addName(name));
    setName(''); // Clear input
  };

  const handleRemove = () => {
    dispatch(removeName());
    setName(''); // Clear input
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex  flex-col gap-8 items-center p-4 shadow-lg h-96 w-80  rounded-lg">
        <h1 className="text-5xl">{user}</h1>

        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="enter name"
          className="shadow-sm p-2 border-2"
        />
        <button onClick={handleAdd} className="bg-green-400 px-4 py-2 m-1">add user</button>
        <button onClick={handleRemove} className="bg-blue-400 px-4 py-2 m-1">remove user</button>
      </div>
    </div>
  );
};

export default User;
