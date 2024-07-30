import Copyright from "@/components/Copyright";
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

function UserUi() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <Outlet />
      {/* Footer */}
      <Copyright />
    </div>
  );
}

export default UserUi;
