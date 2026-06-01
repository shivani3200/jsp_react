import React from "react";
import { NavLink } from "react-router-dom";

const UseEffectRoutingHome = () => {
  return (
    <div>
      <div className="top-0 left-0 h-14 bg-yellow-400 text-black sticky flex gap-3">
        <h1 className="text-3xl font-bold">Navbar</h1>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
      <div className="flex flex-col items-center gap-5 mt-10">
        <div><h1 className='text-5xl'> Home page</h1></div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" ><NavLink to="/users">Users</NavLink></button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" ><NavLink to="/products">Products</NavLink></button>
      </div>
    </div>
  );
};

export default UseEffectRoutingHome;
