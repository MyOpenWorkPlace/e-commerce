import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZdXfxS532lT9PJ4yCudcOz5-s2hNYvJM",
  authDomain: "e-commerce-42859.firebaseapp.com",
  projectId: "e-commerce-42859",
  storageBucket: "e-commerce-42859.firebasestorage.app",
  messagingSenderId: "919589264614",
  appId: "1:919589264614:web:c01e52846ec89e0e83ef27",
  measurementId: "G-7LRGXCGTQC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);
