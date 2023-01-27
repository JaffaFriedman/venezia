// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo-zlrdyQVa1TIh96u4UfxdECIuY02III",
  authDomain: "veneziar-8fa25.firebaseapp.com",
  projectId: "veneziar-8fa25",
  storageBucket: "veneziar-8fa25.appspot.com",
  messagingSenderId: "796481818353",
  appId: "1:796481818353:web:12445831cacb5d6b6c2350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// especificar servicios que queremos ocupar
export const db = getFirestore(app);