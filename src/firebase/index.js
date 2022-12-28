// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: figure out why analytics break safari?
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ref } from 'vue'

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
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the database
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()

const user = ref(null)

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      if (user) {
        user.value = result
        console.log(user.value)
      }
      // this.$router.replace({ name: '/' })
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export {
    db,
    auth,
    signInWithGoogle,
    user
}