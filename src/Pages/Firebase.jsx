// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOM,
  projectId: import.meta.env.VITE_APP_FIREBASE_PRJ_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STG_BKT,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MSG_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MESG_ID,
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);