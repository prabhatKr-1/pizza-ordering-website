import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import GoogleAuth from "../components/GoogleAuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Check Your Mailbox and Reset Password");
    } catch (error) {
      console.log(error);
      toast.error("Request Failed!!");
    }
  }

  return (
    <div className="login">
      <div className="title text-center m-4 text-5xl">Reset Password</div>
      <div className="content flex justify-center items-center mx-auto flex-wrap px-1 py-1 max-w-10xl text-black">
        <div className="img m-4 lg:w-[50%] m:w-[65%] flex items-center justify-center">
          <img
            src="https://wallpaperaccess.com/full/8300608.jpg"
            alt="pizza-image"
            className="w-full rounded max-w-[90%]"
          />
        </div>

        <div className="main w-full md:w-[65%] lg:w-[40%] max-w-[90%]">
          <form onSubmit={onSubmit} className="flex flex-col">
            <input
              type="email"
              className="w-full transition ease-in-out px-4 py-2 text-xl border-blue-500-rounded text-orange-700"
              value={email}
              onChange={onChange}
              id="email"
              placeholder="Enter Your Email"
            />
            <div className="flex justify-between whitespace-nowrap">
              <p>
                New Here?{" "}
                <Link to="/sign-up" className="text-green-800 under m-1">
                  Register Now
                </Link>
              </p>
              <p>
                <Link to="/sign-in">Sign In Instead</Link>
              </p>
            </div>
            <input
              className="w-full transition ease-in-out mt-2 rounded px-4 py-2 text-xl border-blue-500-rounded cursor-pointer text-white border border-solid bg-blue-500 hover:bg-blue-800"
              type="submit"
              value="Reset Password"
            />
            <div className="flex items-center before:border-t my-3 before:flex-1 after:border-t after:border-gray-300 after:flex-1">
              <p className="text-center text-red font-bold">OR</p>
            </div>
            <GoogleAuth />
          </form>
        </div>
      </div>
    </div>
  );
}
