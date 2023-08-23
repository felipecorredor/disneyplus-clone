// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getDocs,
  getDoc,
  collection,
  getFirestore,
  doc,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIZklZcFr5pQIbr7U8WWcFgucYKDvRkYY",
  authDomain: "disneyplus-clone-e7469.firebaseapp.com",
  projectId: "disneyplus-clone-e7469",
  storageBucket: "disneyplus-clone-e7469.appspot.com",
  messagingSenderId: "415460848925",
  appId: "1:415460848925:web:805a672be661c61b289df4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export {
  auth,
  provider,
  storage,
  signInWithPopup,
  GoogleAuthProvider,
  getDocs,
  getDoc,
  collection,
  doc,
};
export default db;
