// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxiWXraaraWdOyqcMQiRatg_de9UFWfRA",
  authDomain: "react-e-commer.firebaseapp.com",
  projectId: "react-e-commer",
  storageBucket: "react-e-commer.appspot.com",
  messagingSenderId: "241660321467",
  appId: "1:241660321467:web:40f634e39ef4c1de3bd39e",
  measurementId: "G-7D7GR5YPWL"
};
const firebaseApp = initializeApp(firebaseConfig)
// Initialize Firebase
export const db = getFirestore(firebaseApp)
