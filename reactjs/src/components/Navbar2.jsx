import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav className="bg-black shadow-md px-6 py-3 flex justify-between items-center text-white">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-white">
        Navbar
      </Link>

      {/* Links */}
      <div className="space-x-6">
        <Link to="/" className=" hover:text-blue-500">
          Home
        </Link>
        <Link to="/about" className=" hover:text-blue-500">
          About
        </Link>
        <Link to="/dashboard" className=" hover:text-blue-500">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;
