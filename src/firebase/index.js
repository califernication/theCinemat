// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: figure out why analytics break safari?
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { ref } from 'vue'
import store from "../store"

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
const storage = getStorage(app);

const provider = new GoogleAuthProvider()

// TODO: fix the yale line is ugly lol
const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      if (result.user.email.indexOf("@yale.edu") === -1) {
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        alert('Please sign in with a Yale email address.')
        return
      }
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      if (user) {
        user.value = result
        // store in Vuex store
        store.commit('SET_LOGGED_IN', true)
        store.commit('SET_USER', {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        })
        console.log(store.getters.user)
      }
      // this.$router.replace({ name: '/' })
      // ...
    }).catch((error) => {
      alert(error)
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

const getAllProjects = async () => {
  const allProjectsRef = collection(db, 'allProjects');
  const querySnapshot = await getDocs(allProjectsRef);
  const projects = [];
  querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      projects.push({ id: doc.id, ...doc.data() });
  });
  return projects;
}

export {
    db,
    auth,
    storage,
    signInWithGoogle,
    getAllProjects
}