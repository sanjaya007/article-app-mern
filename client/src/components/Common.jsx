import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Common = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Common;
