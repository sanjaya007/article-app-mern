import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("mernTheme") ?? "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("mernTheme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="navbar bg-white shadow-sm py-3 px-4 grid grid-cols-2 rounded-md dark:bg-[#0F172A] dark:border-b dark:border-[#929292] dark:rounded-none">
      <div className="logo">
        <Link to="/" className="font-lily text-3xl dark:text-white">
          Articles
        </Link>
      </div>
      <div className="links flex justify-end items-center gap-5">
        <Link
          to="/register"
          className="hover:font-bold transition-all dark:text-white"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="hover:font-bold transition-all dark:text-white"
        >
          Login
        </Link>
        <div className="icons">
          {theme === "dark" ? (
            <div className="icon cursor-pointer" onClick={handleTheme}>
              <i class="fa-solid fa-sun dark:text-white"></i>
            </div>
          ) : (
            <div className="icon cursor-pointer" onClick={handleTheme}>
              <i class="fa-solid fa-moon dark:text-white"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
