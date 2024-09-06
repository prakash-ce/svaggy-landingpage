// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvGO6vFc89_k7LfaIbsv8pDYaGDNVv8Ys",
  authDomain: "svaggyadv.firebaseapp.com",
  projectId: "svaggyadv",
  storageBucket: "svaggyadv.appspot.com",
  messagingSenderId: "1008264718641",
  appId: "1:1008264718641:web:953200bdb41f7c72a62810",
  measurementId: "G-PN1YHVMETM",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
