import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <header className="flex justify-between items-center px-3 max-w-6xl mx-auto ">
      <div>
        <img
          src="https://images.unsplash.com/photo-1627461985459-51600559fffe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="LOGO"
          className=" cursor-pointer h-12"
          onClick={() => navigate("/")}
        />
      </div>

      <div>
        <ul className="flex space-x-10">
          <li
            onClick={() => navigate("/")}
            className={`py-3 cursor-pointer text-sm font-semibold   ${
              pathMathRoute("/") && "text-white border-b-[3px] border-b-red-500 "
            }`}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/menu")}
            className={`py-3 text-sm font-semibold cursor-pointer ${
              pathMathRoute("/menu") &&
              "text-white border-b-[3px] border-b-red-500"
            }`}
          >
            Menu
          </li>
          {/* <li
            onClick={() => navigate("/profile")}
            className={`py-3 text-sm font-semibold cursor-pointer ${
              pathMathRoute("/profile") &&
              "text-white border-b-[3px] border-b-red-500"
            }`}
          >
            Profile
          </li> */}
          <li
            onClick={() => navigate("/sign-in")}
            className={`py-3 text-sm font-semibold cursor-pointer ${
              pathMathRoute("/sign-in") &&
              "text-white border-b-[3px] border-b-red-500"
            }`}
          >
            Sign In
          </li>
          {/* <li
            onClick={() => navigate("/sign-up")}
            className={`py-3 text-sm font-semibold cursor-pointer ${
              pathMathRoute("/sing-up") &&
              "text-white border-b-[3px] border-b-red-500"
            }`}
          >
            Sign Up
          </li> */}
          {/* <li
            onClick={() => navigate("/forgot-password")}
            className={`py-3 text-sm font-semibold  cursor-pointer ${
              pathMathRoute("/forgot-password") &&
              "text-white border-b-[3px] border-b-red-500"
            }`}
          >
            Forgot Password
          </li> */}
        </ul>
      </div>
    </header>
  );
}
