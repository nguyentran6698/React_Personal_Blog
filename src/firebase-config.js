import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, signOut, signInWithEmailAndPassword, onAuthStateChanged };
