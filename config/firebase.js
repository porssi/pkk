// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/getFirestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVichxEZHvfjky-GD4iOn-JNaeFFTj9YA",
  authDomain: "porssi-c434f.firebaseapp.com",
  projectId: "porssi-c434f",
  storageBucket: "porssi-c434f.appspot.com",
  messagingSenderId: "524246286293",
  appId: "1:524246286293:web:4022553f8ebc9609f1c75c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export { db }
