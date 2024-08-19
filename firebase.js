// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAxem0_oOiS4kE7ptbwzI4WmDfqGmBc68",
  authDomain: "flashcards-9da9e.firebaseapp.com",
  projectId: "flashcards-9da9e",
  storageBucket: "flashcards-9da9e.appspot.com",
  messagingSenderId: "237943748434",
  appId: "1:237943748434:web:a40e60fdddd7633c5d6c8b",
  measurementId: "G-G2N4PFMWN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);