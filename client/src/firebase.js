// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaDOqrmwctmyGsVNOMTDMKnqrEYuNyLxk",
  authDomain: "mern-blog-42c39.firebaseapp.com",
  projectId: "mern-blog-42c39",
  storageBucket: "mern-blog-42c39.appspot.com",
  messagingSenderId: "1002602427001",
  appId: "1:1002602427001:web:7ae3c995563b84255bdaa8"
};

export const app = initializeApp(firebaseConfig);