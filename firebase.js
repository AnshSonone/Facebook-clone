// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjkSIJc1JQVsRNNlDU1D_n1aZndCfgxX0",
  // authDomain: "facebook-clone-b3747.firebaseapp.com",
  authDomain: "https://facebook-clone-two-alpha.vercel.app/",
  projectId: "facebook-clone-b3747",
  storageBucket: "facebook-clone-b3747.appspot.com",
  messagingSenderId: "210247630335",
  appId: "1:210247630335:web:405427e6e63789e1133bca"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
	
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app)

export {db, storage, auth};
