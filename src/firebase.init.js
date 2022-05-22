// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGRFJ5pTp3ICH_X2K1iFbPICoL6oCLfFU",
  authDomain: "manufacurer-website.firebaseapp.com",
  projectId: "manufacurer-website",
  storageBucket: "manufacurer-website.appspot.com",
  messagingSenderId: "338197611075",
  appId: "1:338197611075:web:3da6355b57c58a12334af6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;