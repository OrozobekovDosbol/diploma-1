// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvD-Mibl5oCNamSOEEXcaIvUmvvmNRmIk",
  authDomain: "diploma-1-91d6a.firebaseapp.com",
  projectId: "diploma-1-91d6a",
  storageBucket: "diploma-1-91d6a.appspot.com",
  messagingSenderId: "388157581568",
  appId: "1:388157581568:web:e9332d55a8a407f83e2be5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);





export const categories = collection(db, 'categories')