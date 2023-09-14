// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAPPeipVBlmwLMHDj7z5lf4QJHwx4jHz6c",
  authDomain: "ecommerce-fd653.firebaseapp.com",
  projectId: "ecommerce-fd653",
  storageBucket: "ecommerce-fd653.appspot.com",
  messagingSenderId: "768142004052",
  appId: "1:768142004052:web:7490bddf60b0ce340502c1",
  measurementId: "G-JCT8L8ZRZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}
