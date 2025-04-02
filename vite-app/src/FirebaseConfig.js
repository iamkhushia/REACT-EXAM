// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCspE5FLt0PkG7E2t-IzTwfuPpYs7ex96k",
  authDomain: "react-exam-985ae.firebaseapp.com",
  projectId: "react-exam-985ae",
  storageBucket: "react-exam-985ae.firebasestorage.app",
  messagingSenderId: "923094899828",
  appId: "1:923094899828:web:05028c73de958ef136c521",
  measurementId: "G-9RFMZ8K2WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
