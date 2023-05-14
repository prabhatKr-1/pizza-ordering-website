import { db } from "../firebase";
import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export default function GoogleAuth() {
  const navigate = useNavigate()
  async function googleLogin() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");
    } catch (error) {
      toast.error("Google Login Failed!!");
    }
  }
  return (
    <button
      onClick={googleLogin}
      type="button"
      className="w-full transition ease-in-out mt-2 rounded px-4 py-2 text-xl border-blue-500-rounded cursor-pointer text-white border border-solid bg-blue-500 hover:bg-blue-800"
    >
      Continue With Google
    </button>
  );
}
