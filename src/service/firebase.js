// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCwnybuepULad9j2jaMtL2h3TGqW4h7U8",
  authDomain: "soymodelo-967a3.firebaseapp.com",
  projectId: "soymodelo-967a3",
  storageBucket: "soymodelo-967a3.appspot.com",
  messagingSenderId: "759100939254",
  appId: "1:759100939254:web:5a7fa0769cd56eb636c5d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
