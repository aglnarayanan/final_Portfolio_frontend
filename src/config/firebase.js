// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD6Z49mQRUVyD9tbbjeonkquobi2cGRIwk",
  authDomain: "blog-app-emc-ac6cc.firebaseapp.com",
  projectId: "blog-app-emc-ac6cc",
  storageBucket: "blog-app-emc-ac6cc.firebasestorage.app",
  messagingSenderId: "215227622523",
  appId: "1:215227622523:web:93806af14200d948abaede",
  measurementId: "G-ZT1NM36E5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export { app, auth};