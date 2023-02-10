import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE1BddKpQjrEa8ttycojSOX94vnVhgs50",
  authDomain: "chatgpt-messenger-6661.firebaseapp.com",
  projectId: "chatgpt-messenger-6661",
  storageBucket: "chatgpt-messenger-6661.appspot.com",
  messagingSenderId: "978751790068",
  appId: "1:978751790068:web:c3e3168e57227b6faf77a1",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
