// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcGJbA8cuzMALYEzK55rj-T1IU_oDchG8",
  authDomain: "info-amanda.firebaseapp.com",
  projectId: "info-amanda",
  storageBucket: "info-amanda.appspot.com",
  messagingSenderId: "702877911946",
  appId: "1:702877911946:web:bb49272334cc8ac3cad673"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)