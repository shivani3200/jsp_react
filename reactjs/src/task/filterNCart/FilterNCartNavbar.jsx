import React from "react";
import { NavLink } from "react-router-dom";

const FilterNCartNavbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-24 flex items-center justify-between bg-pink-100 text-xl font-semibold px-6">
        {" "}
        <div className="flex gap-4 items-center">
          <div className="text-3xl font-bold">Navbar</div>
          <div>
            <NavLink to="/home ">Home</NavLink>
          </div>
        </div>
        <button className="bg-pink-500 px-4 py-2 ">
          <NavLink to="/cart">Cart</NavLink>
        </button>
      </div>
    </>
  );
};

export default FilterNCartNavbar;
