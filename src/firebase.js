// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBksJlRvPL_2C8VIVlkmWbQGXCReV8wB1o",
  authDomain: "diplom-1-b6b30.firebaseapp.com",
  databaseURL: "https://diplom-1-b6b30-default-rtdb.firebaseio.com",
  projectId: "diplom-1-b6b30",
  storageBucket: "diplom-1-b6b30.appspot.com",
  messagingSenderId: "62749632246",
  appId: "1:62749632246:web:a591d53be89e0675c9aed7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const categoriesCollection = collection(db, "categories");

export const productsCollection = collection(db, "products");

export const ordersCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);