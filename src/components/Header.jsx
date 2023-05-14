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
          src="C:\Users\Lucky\OneDrive\Desktop\pizza project\resources\logo.png"
          alt="LOGO"
          className="h-5 cursor-pointer" onClick={()=>navigate("/")}
        />
      </div>

      <div>
        <ul className="flex space-x-10">
          <li onClick={()=>navigate("/")}
            className={
              `py-3 text-sm font-semibold border-b-[3px] border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-500"}`
            }
          >
            Home
          </li>
          <li onClick={()=>navigate("/menu")} className={
              `py-3 text-sm font-semibold border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/menu") && "text-black border-b-red-500"}`
            }>Menu</li>
          <li onClick={()=>navigate("/profile")} className={
              `py-3 text-sm font-semibold border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/profile") && "text-black border-b-red-500"}`
            }>Profile</li>
          <li onClick={()=>navigate("/sign-in")} className={
              `py-3 text-sm font-semibold border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`
            }>Sign In</li>
          <li onClick={()=>navigate("/sign-up")} className={
              `py-3 text-sm font-semibold border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/sing-up") && "text-black border-b-red-500"}`
            }>Sign Up</li>
          <li onClick={()=>navigate("/forgot-password")} className={
              `py-3 text-sm font-semibold border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/forgot-password") && "text-black border-b-red-500"}`
            }>Forgot Password</li>
        </ul>
      </div>
    </header>
  );
}
