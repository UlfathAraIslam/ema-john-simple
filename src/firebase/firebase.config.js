// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX8rODfkEV9HXAZ6LiabuSphR8e2h6OCE",
  authDomain: "ema-john-with-firebase-a-b71f7.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-b71f7",
  storageBucket: "ema-john-with-firebase-a-b71f7.appspot.com",
  messagingSenderId: "575240825308",
  appId: "1:575240825308:web:5f7c6196d6fe7a996f0719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;