import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import GoogleAuth from "../components/GoogleAuth";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential)
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error)
      toast.error("LogIn Failed!!");
    }
  }

  return (
    <div className="login">
      <div className="title text-center m-4 text-5xl">SIGN IN</div>
      <div className="content flex justify-center items-center mx-auto flex-wrap px-1 py-1 max-w-10xl text-black">
        <div className="img m-4 lg:w-[50%] m:w-[65%] flex items-center justify-center">
          <img
            src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_750/MTc1MjQxNzU0MjUxODk1OTAz/pizza-quotes-and-caption-ideas.webp"
            alt="pizza-image"
            className="w-full rounded max-w-[90%] "
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
            <input
              type="password"
              className="w-full transition ease-in-out px-4 py-2 text-xl border-blue-500-rounded text-orange-700"
              name="Password"
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Enter Your Password"
            />
            <div className="flex justify-between whitespace-nowrap">
              <p>
                New Here?{" "}
                <Link to="/sign-up" className="text-green-800 under m-1">
                  Register Now
                </Link>
              </p>
              <p>
                <Link to="/forgot-password">Forgot Password?</Link>
              </p>
            </div>
            <input
              className="w-full transition ease-in-out mt-2 rounded px-4 py-2 text-xl border-blue-500-rounded cursor-pointer text-white border border-solid bg-blue-500 hover:bg-blue-800"
              type="submit"
              value="Log In"
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
