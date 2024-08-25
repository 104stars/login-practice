// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { setPersistence, browserLocalPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBQXbIogBD0grlF1EjtYI5BuPg05dbcd8",
  authDomain: "login-practice-1acfa.firebaseapp.com",
  projectId: "login-practice-1acfa",
  storageBucket: "login-practice-1acfa.appspot.com",
  messagingSenderId: "687195505602",
  appId: "1:687195505602:web:fcbdc455840fc835bf0c5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);