// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGRta9KCzx5fvKw5AVbOkKTkFiamBL_u4",
  authDomain: "pizza-ordering-website-55abf.firebaseapp.com",
  projectId: "pizza-ordering-website-55abf",
  storageBucket: "pizza-ordering-website-55abf.appspot.com",
  messagingSenderId: "690993039471",
  appId: "1:690993039471:web:bd05e7356501b237afa59a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()


