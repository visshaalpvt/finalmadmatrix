import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrVXlgJ3hTByDIysxiR2NmdQDJzBAiYr4",
    authDomain: "madmatrix-ad379.firebaseapp.com",
    projectId: "madmatrix-ad379",
    storageBucket: "madmatrix-ad379.firebasestorage.app",
    messagingSenderId: "671408194707",
    appId: "1:671408194707:web:1b3b6c48b24d19e0b7b966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
