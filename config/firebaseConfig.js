 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9NaLeQGD7aq8AZZQeu6cehFnDNLt4u8E",
  authDomain: "techsphere-6bb89.firebaseapp.com",
  projectId: "techsphere-6bb89",
  storageBucket: "techsphere-6bb89.firebasestorage.app",
  messagingSenderId: "1042454187740",
  appId: "1:1042454187740:web:5caf48b1c2414871e7ee19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };