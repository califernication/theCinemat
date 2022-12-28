// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJDdYFekcMKz_LedlGXtlS9Vsaw7nALuk",
  authDomain: "thecinemat-3606a.firebaseapp.com",
  databaseURL: "https://thecinemat-3606a-default-rtdb.firebaseio.com",
  projectId: "thecinemat-3606a",
  storageBucket: "thecinemat-3606a.appspot.com",
  messagingSenderId: "912057146143",
  appId: "1:912057146143:web:70a2b8142049d9fd35ee2a",
  measurementId: "G-B94NPK3VQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the database
const db = getFirestore(app);

export {
    db
}