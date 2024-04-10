// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsA5dEA372xg6yZiZcPytw-ajDA9WZIPw",
  authDomain: "onelogica-website.firebaseapp.com",
  projectId: "onelogica-website",
  storageBucket: "onelogica-website.appspot.com",
  messagingSenderId: "271755135232",
  appId: "1:271755135232:web:441b398e544e7ecb340be5",
  measurementId: "G-5Q94D6ZWME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
