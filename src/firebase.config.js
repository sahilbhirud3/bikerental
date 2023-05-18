// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmnK3zmufSYlyC2TH0QfR8Uuciy1EK_w4",
  authDomain: "bikerental-3c8cf.firebaseapp.com",
  projectId: "bikerental-3c8cf",
  storageBucket: "bikerental-3c8cf.appspot.com",
  messagingSenderId: "459908211389",
  appId: "1:459908211389:web:e3b309afb763b0c9710dd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);