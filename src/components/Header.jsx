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
          src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-pizza-logo-design-png-image_8363624.png"
          cla
          alt="LOGO"
          className=" cursor-pointer h-12 bg-transparent"
          onClick={() => navigate("/")}
        />
      </div>

      <div>
        <ul className="flex space-x-10">
          <li
            onClick={() => navigate("/")}
            className={`py-3 cursor-pointer text-sm font-semibold   ${
              pathMathRoute("/") &&
              "text-black border-b-[3px] border-b-red-500 "
            }`}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/menu")}
            className={`py-3 text-sm font-semibold cursor-pointer ${
              pathMathRoute("/menu") &&
              "text-black border-b-[3px] border-b-red-500"
            }`}
          >
            Menu
          </li>
          <li
            onClick={() => navigate("/cart")}
            className={`py-3 text-sm font-semibold cursor-pointer ${
              pathMathRoute("/cart") &&
              "text-black border-b-[3px] border-b-red-500"
            }`}
          >
            Cart
          </li>
          <li
            onClick={() => navigate("/sign-in")}
            className={`py-3 text-sm font-semibold cursor-pointer ${
              pathMathRoute("/sign-in") &&
              "text-black border-b-[3px] border-b-red-500"
            }`}
          >
            Sign In
          </li>
          <li
            onClick={() => navigate("/about-us")}
            className={`py-3 text-sm font-semibold cursor-pointer ${
              pathMathRoute("/about-us") &&
              "text-black border-b-[3px] border-b-red-500"
            }`}
          >
            About Us
          </li>
        </ul>
      </div>
    </header>
  );
}
