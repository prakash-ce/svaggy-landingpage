// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAV4S-OyPZsiET0aaaxMum2ENM94ROs5Hg",
  authDomain: "svaggy-test-e83a1.firebaseapp.com",
  projectId: "svaggy-test-e83a1",
  storageBucket: "svaggy-test-e83a1.appspot.com",
  messagingSenderId: "875820394782",
  appId: "1:875820394782:web:2ea72121948bb2d841c10f",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
