import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm py-3 px-4 grid grid-cols-2 rounded-md">
      <div className="logo">
        <Link to="/" className="font-lily text-3xl">
          Articles
        </Link>
      </div>
      <div className="links flex justify-end items-center gap-5">
        <Link to="/register" className="hover:font-bold transition-all">
          Register
        </Link>
        <Link to="/login" className="hover:font-bold transition-all">
          Login
        </Link>
        <div className="icons">
          <div className="icon cursor-pointer">
            <i class="fa-solid fa-moon"></i>
          </div>
          <div className="icon">
            <i class="fa-solid fa-sun"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
