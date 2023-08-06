// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseconfig = {
  apiKey: "AIzaSyBFM6UTQNQlyr1FepHjGTMj8DgDo9ImCfk",
  authDomain: "mi-ultima-entrega.firebaseapp.com",
  projectId: "mi-ultima-entrega",
  storageBucket: "mi-ultima-entrega.appspot.com",
  messagingSenderId: 847451059259,
  appId: "1:847451059259:web:2672b040aadf33abaf981e",
};

// Initialize Firebase
const app = initializeApp(firebaseconfig);
export const db = getFirestore(app);
