import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9uOqiAZK5FZ88ZyLVyjA7sEDRcjQBGRI",
  authDomain: "kodingyuk-a5955.firebaseapp.com",
  projectId: "kodingyuk-a5955",
  storageBucket: "kodingyuk-a5955.appspot.com",
  messagingSenderId: "86310424931",
  appId: "1:86310424931:web:1a03a6d829bdb50b1e4356",
  measurementId: "G-78SP8N3XPF"
};

const app =initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}