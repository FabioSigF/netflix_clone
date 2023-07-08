import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGb8z8BPMTULO0JDVL7uUPGuHLaGjztTk",
  authDomain: "netflix-clone-a483f.firebaseapp.com",
  projectId: "netflix-clone-a483f",
  storageBucket: "netflix-clone-a483f.appspot.com",
  messagingSenderId: "196664870204",
  appId: "1:196664870204:web:db8e7df7e9906de9a34a39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }