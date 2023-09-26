// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLAYO1Bb-XXvBP3FzmMJ4f41ATpTDYe8c",
  authDomain: "netflixgpt-8999f.firebaseapp.com",
  projectId: "netflixgpt-8999f",
  storageBucket: "netflixgpt-8999f.appspot.com",
  messagingSenderId: "878440148671",
  appId: "1:878440148671:web:e37a07ef918c2b8513200a",
  measurementId: "G-SZGQ42N1NP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
