
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3v9MUIWMINDUfB7zu8nmQHIWS6Xzft38",
  authDomain: "nextjs-auth-firebase-e393c.firebaseapp.com",
  projectId: "nextjs-auth-firebase-e393c",
  storageBucket: "nextjs-auth-firebase-e393c.firebasestorage.app",
  messagingSenderId: "727101275028",
  appId: "1:727101275028:web:7abb0f43d06db39cff6d81",
  measurementId: "G-Z3LL1M7CJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);