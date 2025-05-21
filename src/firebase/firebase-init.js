// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR6bK1h8wrxKspOU3d_9K12Bi1msByFpU",
  authDomain: "green-hub-d48ce.firebaseapp.com",
  projectId: "green-hub-d48ce",
  storageBucket: "green-hub-d48ce.firebasestorage.app",
  messagingSenderId: "73606039215",
  appId: "1:73606039215:web:25750d504fa00f96f5365a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);