import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import GoogleAuth from "../components/GoogleAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const navigate = useNavigate();
  const { name, email, password } = formData;

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const user = userCredentials.user;
      const formData2 = { ...formData };
      delete formData2.password;
      formData2.timestamp = serverTimestamp();
      await setDoc(doc(db, "customers", user.uid), formData2);
      toast.success("Registration Successful!!");
      navigate("/menu");
    } catch (error) {
      toast.error("Something went wrong!!");
      console.log(error);
    }
  }

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <div className="login">
      <div className="title text-center m-4 text-5xl">SIGN UP</div>
      <div className="content flex justify-center items-center mx-auto flex-wrap px-1 py-1 max-w-10xl text-black">
        <div className="img m-4 lg:w-[50%] m:w-[65%] flex items-center justify-center">
          <img
            src="https://wallpaperaccess.com/full/8300573.jpg"
            alt="pizza-image"
            className="w-full rounded max-w-[90%]"
          />
        </div>

        <div className="main w-full md:w-[65%] lg:w-[40%] max-w-[90%]">
          <form onSubmit={onSubmit} className="flex flex-col">
            <input
              type="text"
              className="w-full transition ease-in-out px-4 py-2 text-xl border-blue-500-rounded text-orange-700"
              value={name}
              onChange={onChange}
              id="name"
              placeholder="Enter Your Name"
            />
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
                Already a user?{" "}
                <Link to="/sign-in" className="text-green-800 under m-1">
                  Sing In
                </Link>
              </p>
              <p>
                <Link to="/forgot-password">Forgot Password?</Link>
              </p>
            </div>
            <input
              className="w-full transition ease-in-out mt-2 rounded px-4 py-2 text-xl border-blue-500-rounded cursor-pointer text-white border border-solid bg-blue-500 hover:bg-blue-800"
              type="submit"
              value="Sign Up"
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
